(ns biosphere.tiles
  (:require
    [biosphere.protocols :as protocols]))

(defn pos->id
  "Get the vector index from a `[x y]` 2D world position."
  [[x y]]
  [(Math/floor x) (Math/floor y)])

(defn water? [{:keys [water-level]} {:keys [height]}]
  (neg? height))

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

(defn new-tile [{:keys [water-level noise]} [x y]]
  (let [height (+ -0.8 (* 2 (noise x y)))
        max-energy (* 10 (inc height))]
    (->Tile [x y] height max-energy max-energy)))

(defn init-tiles [state]
  (let [{:keys [width height]} state
        tile-map
        (into {} (for [x (range width)
                       y (range height)
                       :let [location [x y]]]
                   [location (new-tile state location)]))]
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
    (nth-tick? state 1) tile-updates)) ; more then halves FPS))



