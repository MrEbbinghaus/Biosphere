(ns biosphere.draw.hex
  (:require
    [biosphere.utils.hex :as hex]
    [quil.core :as q]))

(defn draw-flat-top-hex! []
  (q/begin-shape)
  (q/vertex 1 0)
  (q/vertex 0.5 0.8660254037844386)
  (q/vertex -0.5 0.8660254037844386)
  (q/vertex -1 0)
  (q/vertex -0.5 -0.8660254037844386)
  (q/vertex 0.5 -0.8660254037844386)
  (q/end-shape :close))

(def tile-color
  {:water [150 255 200]
   :beach [28 71 244]
   :coast [37 16 150]
   :plains [85 130 180]
   :forest [85 130 85]
   :mountain [255 0 50]})

(defn draw!
  "Draw the hexagon with index `hex`"
  [context tile]
  (q/push-matrix)
  (q/push-style)
  (q/scale 10)
  (q/stroke-weight 0.1)
  (apply q/fill (tile-color (:type tile) [255 120 255]))
  (q/stroke 200)
  (q/with-translation (hex/hex->pixel (:hex-size context 1) (:position tile))
    (draw-flat-top-hex!))
  (q/pop-style)
  (q/pop-matrix))
