(ns biosphere.draw.creature
  (:require [quil.core :as q]
            [biosphere.config :as config]
            [biosphere.utils :as util]))

(defn draw-creature! [{:keys [resolution]} {:biosphere.creature/keys [x y direction]}]
  (util/with-transform
    {:transform [(q/map-range x 0 config/width 0 (first resolution))
                 (q/map-range y 0 config/height 0 (second resolution))]
     :rotation (q/radians direction)
     :scale 4}
    (q/with-fill [0 256 0]
      (q/triangle
        -1 1     ; top left
        0 -1     ; bottom center
        1  1)))) ; top right

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
    (run! (partial draw-creature! state) (vals creatures)))

  (q/image creature-graphic 0 0))