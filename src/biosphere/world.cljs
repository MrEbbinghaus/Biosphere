(ns biosphere.world
  (:require [quil.core :as q]
            [biosphere.config :as config]
            [biosphere.utils :as utils]))

(defn gen-tile [x y]
  (let [noisiness   200
        water-level config/water-level
        value       (q/noise (/ x noisiness) (/ y noisiness))
        water?      (< value water-level)
        humidity    (if water? 0
                               (/ (- value water-level)
                                 (- 1 water-level)))]
    #:tile{:x        x :y y
           :value    value
           :humidity humidity
           :water?   water?}))

(defn pos->id [[x y]]
  (let [x (utils/floor-to x config/scale)
        y (utils/floor-to y config/scale)]
    (/ (+ (* x config/scale)
          (* y (q/width)))
       (* config/scale config/scale))))

(defn draw [{:tile/keys [x y humidity value water?]}]
  (let [color (if water?
                (q/lerp-color (q/color 170 255 150) (q/color 150 120 255) (* (q/pow config/water-level -1) value))
                (q/lerp-color (q/color 90 150 150) (q/color 0 255 255) humidity))]
    (q/fill color)
    (q/rect x y config/scale config/scale)))


(defn draw-tiles [tiles]
  (doseq [tile tiles]
    (draw tile)))