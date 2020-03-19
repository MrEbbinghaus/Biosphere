(ns biosphere.draw.core
  (:require [quil.core :as q]
            [biosphere.draw.creature :as creature]
            [biosphere.draw.tile :as tiles]))

(defn draw-fps-counter! []
  (q/fill 0)
  (q/text (str "FPS: " (q/floor (q/current-frame-rate))) 2 10))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 230)
  (tiles/draw-tiles! state)
  (creature/draw-creatures! state)

  (draw-fps-counter!))
