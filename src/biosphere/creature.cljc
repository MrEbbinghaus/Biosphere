(ns biosphere.creature
  (:require [quil.core :as q]
            [biosphere.utils :as utils]
            [biosphere.tiles :as tiles]
            [biosphere.config :as config]))

(defrecord Creature
  [id
   x y direction
   speed
   energy])

(defn new-rand
  "Returns a creature at a random position, with a given `id`"
  [id]
  (->Creature
    id
    (rand-int config/width) (rand-int config/height) (rand-int 360)
    config/speed
    50))

(defn get-creature
  "Get creature from `state` by `id`"
  [state id]
  (get-in state [:creatures id]))

(defn turn
  "Turn `creature` by `amount` degrees. Positive is to the right, negative to the left."
  [creature amount]
  (update creature :direction #(-> % (+ amount) (mod 360))))

(defn on-water?
  "Check if creature is on water."
  [state {:keys [x y]}]
  (let [index (tiles/pos->id [x y])]
    (tiles/water? state (get-in state [:tiles index]))))


(defn move
  "Update the position of a creature based on their speed, direct and current position."
  [{:keys [speed direction x y] :as creature}]
  (let [[dx dy] (utils/polar->cart speed (q/radians direction))]
    (assoc creature
      :x (mod (+ x dx) config/width)
      :y (mod (+ y dy) config/height))))

(defn expend
  "Expend `energy` from `creature`."
  [creature energy]
  (update creature :energy - energy))

(defn dead?
  "Checks if the `creature` is dead"
  [creature]
  (>= 0 (:energy creature)))

(defn update-creature [state creature-id]
  (let [creature (get-in state [:creatures creature-id])]
    #_(when (= 1 creature-id) (println creature))
    (if (dead? creature)
      (update state :creatures dissoc creature-id)
      (let [on-water? (on-water? state creature)]
        (assoc-in state [:creatures creature-id]
          (cond-> creature
            on-water? (expend 5)
            on-water? (turn 180)

             (utils/chance 30) (turn (utils/rand-int-between -10 10))

            :always (move)
            :always (expend -1)))))))

(defn update-creatures [state]
  (reduce update-creature state (-> state :creatures keys)))