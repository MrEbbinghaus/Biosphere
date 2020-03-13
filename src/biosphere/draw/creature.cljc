(ns biosphere.draw.creature
  (:require [quil.core :as q]))

(defn draw-triangle!
  "Draws a triangle at position [`x` `y`] with width `w`, optional height `h` and optional rotation of degrees `r`"
  ([x y w] (draw-triangle! x y w w 0))
  ([x y w h] (draw-triangle! x y w h 0))
  ([x y w h r]
   (q/with-translation [x y]
     (q/with-rotation [r]
       (let [half-w (/ w 2)
             half-h (/ h 2)]
         (q/triangle
           (- half-w) half-h             ; bottom left
           0          (- (/ half-h 0.8)) ; top center
           half-w     half-h))))))       ; bottom right

(defn draw-creature! [{::keys [x y direction]}]
  (draw-triangle! x y 3 3 direction))