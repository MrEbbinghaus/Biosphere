(ns biosphere.hex-tiles
  (:require
    [biosphere.protocols :as protocols]
    [biosphere.utils.hex :as hex]
    [clojure.math :as math]
    [thi.ng.geom.vector :as v]))

(defn pos->id
  "Get the vector index from a `[x y]` 2D world position."
  [state [x y]]
  (hex/pixel->hex (:tile-size state) [x y]))

(defn water? [sim-state tile]
  (<= (:height tile) (:sea-level sim-state)))

(defn in-bounds? [{:keys [width height]} [x y]]
  (and
    (< 0 x width)
    (< 0 y height)))

(defrecord Tile
  [location
   height
   energy
   max-energy]
  protocols/Updateable
  (tick [this old-state new-state]
    new-state))

(defn new-tile [{:keys [noise]} [x y]]
  (let [height (noise x y)
        max-energy (* 10 (inc height))]
    (->Tile (v/vec2 x y) height max-energy max-energy)))


(defn init-tiles [state]
  (println "Initialize tiles")
  (let [{:keys [width height]} state
        _ (println [(:tile-size state) (hex/width (:tile-size state)) (hex/height (:tile-size state))])
        _ (println [width height])
        _ (println (-> width (/ (hex/width (:tile-size state)))))
        _ (println (-> height (/ (hex/height (:tile-size state)))))
        radius-of-hex-map
        (math/floor
          (min
            (-> width (/ (:tile-size state)))
            (-> height (/ (:tile-size state)))))
        tile-map
        (into {}
          (for [location (hex/hex-map (math/round (* 0.85 radius-of-hex-map)))] ; 0.85 is an arbitrary number
            [location (new-tile state location)]))]
    (println "Radius of hex map" radius-of-hex-map)
    (println "Initialization done")
    (println "Dirty Tiles" (count (set (keys tile-map))))
    (assoc state
      :tiles tile-map
      :dirty-tiles (set (keys tile-map)))))

(defn reset-dirty [state]
  (assoc state :dirty-tiles #{}))

(defn- tile-updates [state]
  (reduce (fn [new-state ^Tile tile] (protocols/tick tile state new-state))
    state
    (vals (:tiles state))))

(defn nth-tick? [{:keys [tick]} n]
  (zero? (/ tick n)))

(defn update-tiles [state]
  (cond-> state
    :always reset-dirty
    (nth-tick? state 10) tile-updates))