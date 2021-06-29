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

(defn hexagon [x y width]
  (let [height (* width 0.57735)]
    (q/rect
      x y
      width
      height)

    (q/triangle
      x y
      (+ x width) y
      (+ x (/ width 2)) (- y (/ height 2)))

    (q/triangle
      x (+ y height)
      (+ x width) (+ y height)
      (+ x (/ width 2)) (+ y height (/ height 2)))))


(defn draw! [state {:tile/keys [x y] :as tile}]
  (let [[res-x res-y] (:resolution state)
        rx (* x (/ res-x config/width))
        ry (* y (/ res-y config/height))

        rect-width (/ res-x config/width)
        rect-height (/ res-y config/height)

        h  (/ rect-width 3)]
    (q/fill (tile-color tile))
    (if (even? y)
      (hexagon rx ry rect-width)
      (hexagon (+ rx (/ rect-width 2)) ry rect-width))
    #_(when (and (= x (/ res-x config/width))
              (= y (/ res-y config/height)))
        (do
          (q/fill (tile-color tile))
          (hexagon rx ry rect-width))
        #_(do
            (q/fill (tile-color tile))
            (q/rect
              rx ry
              rect-width
              rect-height)
            (q/triangle
              rx ry

              (+ rx (/ res-x config/width))
              ry

              (+ rx (/ rect-width 2))
              (- (* y (/ res-y config/height)) h))))))




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



