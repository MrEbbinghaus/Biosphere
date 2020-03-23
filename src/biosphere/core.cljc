(ns biosphere.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [biosphere.creature :as creature]
            [biosphere.tiles :as tiles]
            [biosphere.config :as config]
            [biosphere.draw.core :as draw]
            [biosphere.draw.tile :as draw-tiles]
            [biosphere.draw.creature :as draw-creature]
            [biosphere.utils :as util]
            [clojure.string :as str])
  #?(:cljs (:import [goog Uri])))

(defn gen-tiles []
  (vec (for [y (range config/height)
             x (range config/width)]
         (tiles/gen-tile x y q/noise))))

#?(:cljs
   (defn get-query []
     (into {}
       (for [kv-vec (-> js/window .-location .-href Uri. .getDecodedQuery (str/split #"&"))
             :let [[k v] (str/split kv-vec #"=")]]
         [(keyword k) v]))))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  #?@(:cljs
      [(q/color-mode :hsb)
       (q/angle-mode :degrees)
       (some-> (get (get-query) :seed) q/noise-seed)])
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:resolution [(q/width) (q/height)]
   :navigation-2d {:zoom 1}

   :tiles        (gen-tiles)
   :tile-graphic (draw-tiles/make-tile-graphics (q/width) (q/height))
   :creature-graphic (draw-creature/make-graphic (q/width) (q/height))
   :creatures    (into {}
                   (for [id (range config/no-of-creatures)]
                     [id (creature/new-rand id)]))})


(defn keep-zoom-in-bounds [state]
  (update-in state [:navigation-2d :zoom] q/constrain 1 2))

(defn update-resolution [{:keys [resolution] :as state}]
  (let [current-res [(util/floor-to (q/width) config/width)
                     (util/floor-to (q/height) config/height)]]
    (if (= current-res resolution)
      state
      (-> state
        (assoc :tile-graphic (apply draw-tiles/make-tile-graphics current-res))
        (assoc :creature-graphic (apply draw-creature/make-graphic current-res))
        (assoc :resolution current-res)))))

(defn update-state [state]
  (-> state
    update-resolution
    keep-zoom-in-bounds
    tiles/update-tiles
    creature/update-creatures))

; this function is called in index.html
(defn ^:export run-sketch [host [width height]]
  (q/defsketch biosphere
    #?@(:cljs [:host host])
    :size [width height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw/draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
