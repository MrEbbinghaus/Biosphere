(ns biosphere.draw.core
  (:require
    [biosphere.draw.creature :as creature]
    [biosphere.draw.tile :as tiles]
    [biosphere.simulation.core :as sim]
    [biosphere.utils :as util]
    [clojure.string :as str]
    [quil.core :as q]
    [quil.middleware :as m])
  #?(:cljs (:import [goog Uri])))

(defn draw-fps-counter! [state]
  (q/fill 0)
  (q/text (str "FPS: " (q/floor (q/current-frame-rate)) " Delta: " (* 1 (:delta-time state)) "ms")
    2 12))

(defn draw-seed! [{:keys [seed]}]
  (q/fill 0)
  (q/text (str "Seed: " seed) 2 24))

(defn draw-tick! [{:keys [tick]}]
  (q/text (str "Tick: " tick) 2 36))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 230)
  (tiles/draw-tiles! state)
  (creature/draw-creatures! state)

  (draw-fps-counter! state)
  (draw-seed! state)
  (draw-tick! state))

#?(:cljs
   (defn get-query []
     (into {}
       (for [kv-vec (-> js/window .-location .-href Uri. .getDecodedQuery (str/split #"&"))
             :let [[k v] (str/split kv-vec #"=")]]
         [(keyword k) v]))))

(defn gen-map-seed [] (rand-int 1000))

(defn setup []
  (let [seed (or #?(:cljs (:seed (get-query)))
               (gen-map-seed))]
    (q/frame-rate 60)
    ; Set color mode to HSB (HSV) instead of default RGB.
    (q/color-mode :hsb)
    (q/noise-seed seed)
    ; setup function returns initial state. It contains
    ; circle color and position.
    (merge
      {:resolution [(q/width) (q/height)]
       :navigation-2d {:zoom 1}
       :tile-graphic (tiles/make-tile-graphics (q/width) (q/height))
       :creature-graphic (creature/make-graphic (q/width) (q/height))}
      (sim/new-simulation
        {:seed seed
         :noise (fn [x y] (q/noise (/ x 100) (/ y 100)))}))))

(defn keep-zoom-in-bounds [state]
  (update-in state [:navigation-2d :zoom] q/constrain 1 2))

(defn update-resolution [{:keys [resolution width height] :as state}]
  (let [current-res [(util/floor-to (q/width) width)
                     (util/floor-to (q/height) height)]]
    (if (= current-res resolution)
      state
      (-> state
        (assoc :tile-graphic (apply tiles/make-tile-graphics current-res))
        (assoc :creature-graphic (apply creature/make-graphic current-res))
        (assoc :resolution current-res)))))

(defn update-state [state]
  (-> state
    update-resolution
    keep-zoom-in-bounds))

; this function is called in index.html
(defn ^:export run-sketch [host [width height]]
  (q/defsketch biosphere
    #?@(:cljs [:host host])
    :size [width height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update
    (fn [state]
      (-> state
        update-state
        sim/tick))
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)