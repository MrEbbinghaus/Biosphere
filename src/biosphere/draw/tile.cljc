(ns biosphere.draw.tile
  (:require [biosphere.config :as config]
            [quil.core :as q]))

(def interlacing-factor 200)

(defn make-tile-graphics [width height]
  (let [g (q/create-graphics width height)]
    (q/with-graphics g
      (q/no-smooth)
      (q/background 0 0 100)
      (q/color-mode :hsb 360 100 100 1)
      (q/no-stroke)
      (q/fill 200))
    g))

(defn water-color [amount]
  (q/lerp-color (q/color 240 100 60) (q/color 210 50 100) amount))

(defn land-color [amount]
  (q/lerp-color (q/color 125 60 60) (q/color 0 100 100) amount))

(defn tile-color [{:tile/keys [value water?]}]
  (if water?
    (water-color (* value (/ 1 config/water-level)))
    (land-color (- value config/water-level))))

(defn draw! [state {:tile/keys [x y] :as tile}]
  (let [[res-x res-y] (:resolution state)]
    (q/fill (tile-color tile))
    (q/rect
      (* x (/ res-x config/width))
      (* y (/ res-y config/height))
      (/ res-x config/width) (/ res-y config/height))))

(defn interlaced [factor coll]
  (let [cyc (mod (q/frame-count) factor)]
    (->> coll (drop cyc) (take-nth factor))))

(defn draw-tiles! [{:keys [tile-graphic tiles] :as state}]
  (q/with-graphics tile-graphic
    (doseq [tile
            (if (<= (q/frame-count) 1)
              tiles
              (interlaced interlacing-factor tiles))]
      (draw! state tile)))
  (q/image tile-graphic 0 0))



