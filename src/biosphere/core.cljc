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
    (q/frame-rate 600)
    ; Set color mode to HSB (HSV) instead of default RGB.
    (q/color-mode :hsb)
    (q/noise-seed seed)
    ; setup function returns initial state. It contains
    ; circle color and position.
    (binding
      [tiles/*height-noise* q/noise]
      (->
        {:resolution [(q/width) (q/height)]
         :navigation-2d {:zoom 1}
         :seed seed

         :water-level 0.4
         :no-of-creatures 100
         :speed 0.5
         :width (/ 256 1) ; width in tiles
         :height (/ 144 1) ; height in tiles

         :tile-graphic (draw-tiles/make-tile-graphics (q/width) (q/height))
         :creature-graphic (draw-creature/make-graphic (q/width) (q/height))
         :creatures    (into {}
                         (for [id (range 100)]
                           [id (creature/new-rand id)]))}
        tiles/init-tiles))))


(defn keep-zoom-in-bounds [state]
  (update-in state [:navigation-2d :zoom] q/constrain 1 2))

(defn update-resolution [{:keys [resolution width height] :as state}]
  (let [current-res [(util/floor-to (q/width) width)
                     (util/floor-to (q/height) height)]]
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
    (update :tick inc)
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
