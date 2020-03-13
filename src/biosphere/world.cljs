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

(defn update-tile [tile]
  tile)

(defn update-tiles [state]
  (update state :tiles
    (fn [tiles] (mapv update-tile tiles))))