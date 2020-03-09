(ns biosphere.utils
  (:require [quil.core :as q]))

(defn cart->polar
  "Returns a vector with the x and y coordinates."
  [radius angle]
  (let [angle (- angle 90)]
    [(* radius (q/cos angle))
     (* radius (q/sin angle))]))

(defn floor-to
  "Floors `n` to the next whole number that is divisible by `d`"
  [n d]
  (let [r (rem n d)]
    (q/round (- n r))))

(defn rand-int-between
  "Returns an int between `min` (inclusive) and `max` (exclusive)"
  [min max]
  (+ min (rand-int (- max min))))


(defn chance
  "Rolls a against a dice (default: d=100) and returns true if the throw is above `percentage`."
  ([percentage] (chance 100 percentage))
  ([d percentage] (> (rand-int d) percentage)))