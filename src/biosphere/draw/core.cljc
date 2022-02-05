(ns biosphere.draw.core
  (:require
    [biosphere.draw.creature :as creature]
    [biosphere.draw.tile :as tiles]
    [biosphere.utils :as util]
    [clojure.string :as str]
    [quil.core :as q]
    [quil.middleware :as m])
  #?(:cljs (:import [goog Uri])))

(defn draw-fps-counter! []
  (q/fill 0)
  (q/text (str "FPS: " (Math/floor (q/current-frame-rate)))
    2 12))

(defn draw-seed! [{:keys [seed]}]
  (q/fill 0)
  (q/text (str "Seed: " seed) 2 24))

(defn draw-tick! [state]
  (q/text (str "Tick: " (:tick state)
            "\nTPS: " (Math/floor (/ 1000 (:delta-time state)))
            "\nDelta: " (Math/floor (:delta-time state)) "ms")
    2 36))

(defn draw-state [state]
  (if-let [sim-state (some-> state :sim-state deref)]
    (let [state (merge sim-state state)
          ms-since-last-tick (- (util/now) (:last-update state))
          state (assoc state :tick-fraction (/ ms-since-last-tick (:delta-time state)))]
      ; Clear the sketch by filling it with light-grey color.
      (q/background 230)
      (tiles/draw-tiles! state)
      (creature/draw-creatures! state)
      (draw-fps-counter!)
      (draw-seed! state)
      (draw-tick! state))
    (q/print-every-n-millisec 500 "ERROR")))

#?(:cljs
   (defn get-query []
     (into {}
       (for [kv-vec (-> js/window .-location .-href Uri. .getDecodedQuery (str/split #"&"))
             :let [[k v] (str/split kv-vec #"=")]]
         [(keyword k) v]))))

(defn gen-map-seed [] (rand-int 1000))

(defn setup [simulation-state]
  (let [seed (or #?(:cljs (:seed (get-query)))
               (gen-map-seed))]
    (q/frame-rate 120)
    (q/color-mode :hsb)
    (q/noise-seed seed)
    ; setup function returns initial state.
    {:resolution [(q/width) (q/height)]
     :navigation-2d {:zoom 1}
     :tile-graphic (tiles/make-tile-graphics (q/width) (q/height))
     :creature-graphic (creature/make-graphic (q/width) (q/height))
     :sim-state simulation-state}))

(defn keep-zoom-in-bounds [state]
  (update-in state [:navigation-2d :zoom] q/constrain 1 2))

(defn update-resolution [{:keys [resolution ] :as state}]

  (let [{:keys [width height]} (deref (:sim-state state))
        current-res [(util/floor-to (q/width) width)
                     (util/floor-to (q/height) height)]]
    (if (= current-res resolution)
      state
      (assoc state
        :tile-graphic (apply tiles/make-tile-graphics current-res)
        :creature-graphic (apply creature/make-graphic current-res)
        :resolution current-res))))

(defn update-state [state]
  (-> state
    update-resolution
    keep-zoom-in-bounds))

(defn create-sketch [host [width height] simulation-state]
  (q/sketch
    #?@(:cljs [:host host])
    :size [width height]
    ; setup function called only once, during sketch initialization.
    :setup #(setup simulation-state)
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    :tps-goal 60
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

(defn stop! [sketch]
  #?(:cljs (js/console.info "Stop rendering"))
  (q/with-sketch sketch
    (q/no-loop)))

(defn start! [sketch]
  #?(:cljs (js/console.info "Start rendering"))
  (q/with-sketch sketch
    (q/start-loop)))

(defn running? [sketch]
  (q/with-sketch sketch
    (q/looping?)))
