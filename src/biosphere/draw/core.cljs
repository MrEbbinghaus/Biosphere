(ns biosphere.draw.core
  (:require [quil.core :as q]
            [biosphere.creature :as creature]
            [biosphere.draw.tile :as tiles]))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (tiles/draw-tiles! state)

  (q/with-fill [0 256 256]
    (doseq [creature (:creatures state)]
      (creature/draw-creature creature)))

  (q/with-fill 0
    (q/text (str "FPS: " (q/floor (q/current-frame-rate))) 10 10)))