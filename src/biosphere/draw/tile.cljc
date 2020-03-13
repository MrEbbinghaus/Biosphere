(ns biosphere.draw.tile
  (:require [biosphere.config :as config]
            [quil.core :as q]))

(def interlacing-factor 100)

(defn draw [{:tile/keys [x y humidity value water?]}]
  (let [color (if water?
                (q/lerp-color (q/color 170 255 150) (q/color 150 120 255) (* (q/pow config/water-level -1) value))
                (q/lerp-color (q/color 90 150 150) (q/color 0 255 255) humidity))]
    (q/fill color)
    (q/rect x y config/scale config/scale)))

(defn interlaced [factor coll]
  (let [cyc (mod (q/frame-count) factor)]
    (->> coll (drop cyc) (take-nth factor))))

(defn draw-tiles! [{:keys [tile-graphic tiles]}]
  (q/with-graphics tile-graphic
    (doseq [tile (interlaced interlacing-factor tiles)]
      (draw tile)))
  (q/image tile-graphic 0 0))



