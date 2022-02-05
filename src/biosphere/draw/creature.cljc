(ns biosphere.draw.creature
  (:require
    [quil.core :as q]
    [biosphere.utils :as util :include-macros true]
    [thi.ng.math.core :as m]
    [thi.ng.geom.vector :as v]
    #?(:clj [biosphere.creature :as c]
       :cljs [biosphere.creature :as c :refer [Creature]]))
  #?(:clj (:import [biosphere.creature Creature])))

(defn draw-creature-body! []
  (q/with-fill [0 256 0]
    (q/with-rotation [q/HALF-PI] ; 90deg
      (q/triangle
        -1 1      ; top left
        0 -1      ; bottom center
        1  1))))   ; top right

(defn screen-position [{:keys [resolution width height]} location]
  (-> location
    (m/div (v/vec2 width height))
    (m/* (v/vec2 resolution))))

(defn draw! [^Creature {:keys [location] :as creature} {:keys [tick-fraction] :as state}]
  (let [interpolated-location (m/mix location (c/one-step-ahead creature) tick-fraction)]
    (util/with-transform
      {:translate (screen-position state interpolated-location)
       :rotate (c/rotation creature)
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