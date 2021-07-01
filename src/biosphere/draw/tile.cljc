(ns biosphere.draw.tile
  (:require
    [quil.core :as q]
    [biosphere.tiles :as tiles]))

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

(defn tile-color [{:keys [water-level] :as state} {:keys [height] :as tile}]
  (if (tiles/water? state tile)
    (water-color (* height (/ 1 water-level)))
    (land-color (- height water-level))))

(defn draw! [state {:keys [x y height] :as tile}]
  (let [[res-x res-y] (:resolution state)
        {:keys [width height]} state
        px (* x (/ res-x width))
        py (* y (/ res-y height))
        pwidth (/ res-x width)
        pheight (/ res-y height)]
    (when (and (zero? x) (= 1 y))
      (q/print-every-n-millisec 1000 [px py]))
    (q/fill (tile-color state tile))
    (q/rect px py pwidth pheight)
    #_(q/with-fill 255
        (q/text (str [x y height])
          px
          py
          (+ px pwidth)
          (+ py pheight)))))

(defn interlaced [factor coll]
  (let [cyc (mod (q/frame-count) factor)]
    (->> coll (drop cyc) (take-nth factor))))

(defn draw-tiles! [{:keys [tile-graphic tiles dirty-tiles] :as state}]
  (q/with-graphics tile-graphic
    (doseq [tile dirty-tiles]
      (draw! state (tiles tile))))
  (q/image tile-graphic 0 0))



