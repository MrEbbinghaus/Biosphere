(ns biosphere.draw.creature
  (:require [quil.core :as q]
            [biosphere.utils :as util :include-macros true]
            #?(:clj [biosphere.creature]
               :cljs [biosphere.creature :refer [Creature]]))
  #?(:clj (:import [biosphere.creature Creature])))

(defprotocol Drawable
  (draw [entity state]))

(defn draw-creature-body! []
  (q/with-fill [0 256 0]
    (q/triangle
      -1 1      ; top left
      0 -1      ; bottom center
      1  1)))   ; top right

(defn draw! [^Creature {:keys [id location direction] :as creature} {:keys [resolution width height]}]
  (let
    [[x y] location
     x (-> x (/ width) (* (first resolution)))
     y (-> y (/ height) (* (second resolution)))]
    #_(q/with-fill 255
        (q/text (str [id])
          x
          y))
    (util/with-transform
      {:translate [x y]
       :rotate (q/radians direction)
       :scale 4}
      (draw-creature-body!))))

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
    (run! (fn [^Creature creature] (draw! creature state)) (vals creatures)))

  (q/image creature-graphic 0 0))