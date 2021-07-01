(ns biosphere.devcards
  (:require [devcards.core :as dc :refer [defcard]]
            [quil.core :as q :include-macros true]
            [biosphere.core :as bc]
            [biosphere.draw.creature :as creature]))

(defn ^:export start []
  (dc/start-devcard-ui!))

(dc/defcard hello-world
  (do (js/setTimeout
        #(q/sketch :host "host"
           :draw (fn draw []
                   (q/translate 30 30)
                   (q/scale 10)
                   (creature/draw-creature-body!)))
        50)
      "<div id=\"host\"/>"))

