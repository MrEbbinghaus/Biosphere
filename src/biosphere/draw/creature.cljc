(ns biosphere.draw.creature
  (:require [quil.core :as q]
            [biosphere.config :as config]))

(defn draw-triangle!
  "Draws a triangle at position [`x` `y`] with width `w`, optional height `h` and optional rotation of degrees `r`"
  ([w] (draw-triangle! w w 0))
  ([w h] (draw-triangle! w h 0))
  ([w h r]
   (q/with-rotation [(q/radians r)]
     (let [half-w (/ w 2)
           half-h (/ h 2)]
       (q/triangle
         (- half-w) half-h             ; bottom left
         0          (- (/ half-h 0.8)) ; top center
         half-w     half-h)))))        ; bottom right

(defn draw-creature! [{:keys [resolution] :as state} {:biosphere.creature/keys [x y direction] :as creature}]
  (q/with-translation [(q/map-range x 0 config/width 0 (first resolution))
                       (q/map-range y 0 config/height 0 (second resolution))]
    (draw-triangle!
      5 5
      direction)))

(defn make-graphic [width height]
  (let [g (q/create-graphics width height)]
    (q/with-graphics g
      (q/color-mode :hsb)
      (q/no-stroke)
      (q/fill 200))
    g))

(defn draw-creatures! [{:keys [creature-graphic creatures] :as state}]
  (q/with-graphics creature-graphic
    (q/clear)
    (q/with-fill [0 256 0]
      (doseq [creature (vals creatures)]
        (draw-creature! state creature))))

  (q/image creature-graphic 0 0))