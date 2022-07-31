(ns biosphere.draw.hex-tile
  (:require
    [biosphere.draw.hex :as draw.hex]
    [biosphere.hex-tiles :as tiles]
    [biosphere.utils.hex :as hex]
    [quil.core :as q]))


(defn make-tile-graphics [width height]
  (let [g (q/create-graphics width height)]
    (q/with-graphics g
      (q/no-smooth)
      (q/color-mode :hsb 360 100 100 1)
      (q/no-stroke)
      (q/fill 200))
    g))

(defn water-color [amount]
  (q/lerp-color (q/color 240 200 30) (q/color 210 50 100) amount))

(defn energy-color [amount]
  (q/lerp-color (q/color 41 62 55) (q/color 125 60 60) amount))

(defn land-color [amount]
  (q/lerp-color (q/color 69 66 100) (q/color 18 122 191) amount))

(defn tile-color [{:keys [sea-level] :as state} {:keys [height max-energy energy] :as tile}]
  (when (= [0 0] (:location tile))
    (println tile))
  (cond
    (tiles/water? state tile)
    (water-color (/ height sea-level))

    :else
    (q/lerp-color
      (land-color (/ (- height sea-level) (- 1 sea-level)))
      (energy-color (/ energy max-energy))
      0.1)))

(defn draw! [{:keys [tile-size] :as state} {:keys [location] :as tile}]
  (q/push-matrix)
  (q/push-style)

  (q/translate (hex/hex->pixel tile-size location))
  (q/scale tile-size)
  (q/fill (tile-color state tile))
  (draw.hex/draw-flat-top-hex!)

  (q/pop-style)
  (q/pop-matrix))


(defn draw-tiles! [{:keys [tile-graphic tiles dirty-tiles] :as state}]
  (q/with-graphics tile-graphic
    (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
      (doseq [tile dirty-tiles]
        (draw! state (tiles tile)))))
  (q/image tile-graphic 0 0))