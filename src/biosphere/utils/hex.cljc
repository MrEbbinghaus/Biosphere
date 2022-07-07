(ns biosphere.utils.hex
  (:require [clojure.math :as math]))

;; Tiles are hexagons with cube coordinates
;; https://www.redblobgames.com/grids/hexagons/#coordinates-cube
;; [q, r, s]
;; [0, 0, 0] is the center of the map
;; q is the vertical axis
;; r is the top-left to bottom-right axis
;; s is the bottom-left to top-right axis

(def ^:const dir->name
  [:top
   :top-right
   :bottom-right
   :bottom
   :bottom-left
   :top-left])

(def ^:const name->dir
  (zipmap dir->name (range)))

(def ^:const direction
  [[0 -1 +1]
   [+1 -1 0]
   [+1 0 -1]
   [0 +1 -1]
   [-1 +1 0]
   [-1 0 +1]])

(defn add
  "Adds vectors to a hex."
  ([hex v] (mapv + hex v))
  ([hex & vs]
   (apply mapv + hex vs)))


(defn neighbours
  "Returns the coordinates of the surrounding tiles."
  [hex]
  (map #(add hex %) (vals direction)))


(defn neighbour
  "Returns the coordinates of the neighbouring tile in the given direction."
  [hex dir]
  (add hex (direction dir)))


(defn- third-component
  [x y]
  (- 0 x y))


(defn axial->cube
  "Converts axial coordinates to cube coordinates."
  [[q r]]
  [q r (third-component q r)])


(defn cube->axial
   "Converts cube coordinates to axial coordinates."
  [cube-hex]
  (subvec cube-hex 0 2))


(defn round
  "Rounds a hex with decimal values to whole numbers.
  See https://www.redblobgames.com/grids/hexagons/#rounding"
  [frac-hex]
  (let [[frac-q frac-r frac-s] frac-hex
        q (math/round frac-q)
        r (math/round frac-r)
        s (math/round frac-s)

        q-diff (abs (- q frac-q))
        r-diff (abs (- r frac-r))
        s-diff (abs (- s frac-s))]
    (cond
      (and (< r-diff q-diff) (< s-diff q-diff))
      [(third-component r s) r s]

      (< s-diff r-diff)
      [q (third-component q s) s]

      :else
      [q r (third-component q r)])))


(defn hex->pixel
  "Converts a hex coordinate to a pixel coordinate."
  [size hex]
  (let [q (nth hex 0)
        r (nth hex 1)]
    [(* size (/ 3 2) q)
     (* size (+ (* (/ (math/sqrt 3.0) 2) q)
                (* (math/sqrt 3.0) r)))]))


(defn pixel->hex
  "Converts a pixel coordinate to a hex coordinate."
  [size pixel]
  (let [x (nth pixel 0)
        y (nth pixel 1)
        q (-> (/ 2 3) (* x) (/ size))
        r (-> (+ (* (/ -1 3) x) (* (/ (math/sqrt 3.0) 3) y))
            (/ size))] ; (-1./3 * point.x  +  sqrt(3)/3 * point.y) / size
    (round (axial->cube [q r]))))


(->> (direction 2)
  (hex->pixel 10)
  (pixel->hex 10))