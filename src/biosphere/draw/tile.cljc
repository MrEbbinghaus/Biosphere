(ns biosphere.draw.tile
  (:require
    [biosphere.tiles :as tiles]
    [quil.core :as q]))

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
  (q/lerp-color (q/color 240 200 30) (q/color 210 50 100) amount))

(defn energy-color [amount]
  (q/lerp-color (q/color 41 62 55) (q/color 125 60 60) amount))

(defn land-color [amount]
  (q/lerp-color (q/color 69 66 100) (q/color 18 122 191) amount))

(defn tile-color [{:keys [sea-level] :as state} {:keys [height max-energy energy] :as tile}]
  (cond
    (tiles/water? state tile)
    (water-color (/ height sea-level))

    :else
    (q/lerp-color
      (land-color (/ (- height sea-level) (- 1 sea-level)))
      (energy-color (/ energy max-energy))
      0.1)))

(defn draw! [{:keys [width height resolution] :as state} {:keys [location] :as tile}]
  (let [[x y] location
        [res-x res-y] resolution
        px (* x (/ res-x width))
        py (* y (/ res-y height))
        pwidth (/ res-x width)
        pheight (/ res-y height)]
    (q/fill (tile-color state tile))
    (q/rect px py pwidth pheight)))

(defn draw-tiles! [{:keys [tile-graphic tiles dirty-tiles] :as state}]
  (q/with-graphics tile-graphic
    (doseq [tile dirty-tiles]
      (draw! state (tiles tile))))
  (q/image tile-graphic 0 0))



