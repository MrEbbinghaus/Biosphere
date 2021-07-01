(ns biosphere.tiles
  (:require
    [biosphere.protocols :as protocols]))

(def ^:dynamic *noise-scale* 100) ; use something between 10 and 100
(def ^:dynamic *height-noise* (fn [_x _y] (rand)))


(defn pos->id
  "Get the vector index from a `[x y]` 2D world position."
  [[x y]]
  [(Math/floor x) (Math/floor y)])

(defn coordinates [tile]
  [(:x tile) (:y tile)])

(defn water? [{:keys [water-level]} {:keys [height]}]
  (< height water-level))

(defrecord Tile [x y height]
  protocols/Updateable
  (tick [this old-state new-state]
    new-state))

(defn tile [x y]
  (let [height (*height-noise* (/ x *noise-scale*) (/ y *noise-scale*))]
    (->Tile x y height)))

(defn init-tiles [state]
  (let [{:keys [width height]} state
        tile-map
        (into {} (for [x (range width)
                       y (range height)]
                   [[x y] (tile x y)]))]
    (assoc state
      :tiles tile-map
      :dirty-tiles (keys tile-map))))

(defn reset-dirty [state]
  (assoc state :dirty-tiles (list)))

(defn- tile-updates [state]
  (reduce (fn [new-state ^Tile tile] (protocols/tick tile state new-state))
    state
    (vals (:tiles state))))

(defn nth-tick? [{:keys [tick]} n]
  (zero? (/ tick n)))

(defn update-tiles [state]
  (cond-> state
    :always reset-dirty
    (nth-tick? state 1) tile-updates)) ; more then halves FPS))



