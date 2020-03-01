(ns biosphere.utils
  (:require [quil.core :as q]))

(defn cart->polar [radius angle]
  [(* radius (q/cos angle))
   (* radius (q/sin angle))])

(defn floor-to [n d]
  (let [r (rem n d)]
    (q/round(- n r))))

(defn rand-int-between [min max]
  (+ min (rand-int (- max min))))

(defn chance [percentage]
  (> (rand-int 100) percentage))