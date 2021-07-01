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
  (q/lerp-color (q/color 41 62 55) (q/color 125 60 60)  amount))

(defn tile-color [{:keys [water-level] :as state} {:keys [height max-energy energy] :as tile}]
  (if (tiles/water? state tile)
    (water-color (- 1 (* -1 height)))
    (land-color (/ energy max-energy))))

(defn draw! [{:keys [width height resolution] :as state} {:keys [location] :as tile}]
  (let [[x y] location
        [res-x res-y] resolution
        px (* x (/ res-x width))
        py (* y (/ res-y height))
        pwidth (/ res-x width)
        pheight (/ res-y height)]
    (when (and (zero? x) (= 1 y))
      (q/print-every-n-millisec 1000 (str "px py" [px py])))
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
  (when-not (empty dirty-tiles) (q/print-first-n 1 (take 5 dirty-tiles)))
  (q/with-graphics tile-graphic
    (doseq [tile dirty-tiles]
      (draw! state (tiles tile))))
  (q/image tile-graphic 0 0))



