(ns biosphere.tiles
  (:require [biosphere.config :as config]))

(def noisiness 100)

(defn gen-tile [x y noise]
  (let [water-level config/water-level
        value       (noise (/ x noisiness) (/ y noisiness))
        water?      (< value water-level)
        humidity    (if water? 0
                               (/ (- value water-level)
                                 (- 1 water-level)))]
    #:tile{:x         x :y y
           :value     value
           :fertility value
           :water?    water?}))


(defn pos->id
  "Get the vector index from a `[x y]` 2D world position."
  [[x y]]
  (let [x (Math/floor x)
        y (Math/floor y)]
    (+ x (* y config/width))))

(defn update-tile [tile]
  tile)

(defn update-tiles [state]
  (update state :tiles
    (fn [tiles] (mapv update-tile tiles))))