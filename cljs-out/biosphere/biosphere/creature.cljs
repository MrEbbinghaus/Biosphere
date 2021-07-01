(ns biosphere.creature
  (:require [quil.core :as q]
            [biosphere.utils :as utils]
            [biosphere.world :as world]
            [biosphere.config :as config]))

(defn new-rand
  "Returns a creature add a random position, with a given `id`"
  []
  {::x (rand-int (q/width))
   ::y (rand-int (q/height))
   ::speed 1
   ::energy 50 ; of 100?
   ::direction (rand-int 360)})

(defn turn
  "Turn `creature` by `amount` degrees. Positive is to the right, negative to the left."
  [creature amount]
  (update creature ::direction #(-> % (+ amount) (mod 360))))

(defn on-water?
  "Check if create is on water."
  [state {::keys [x y]}]
  (let [pos (world/pos->id [x y])]
    (get-in state [:tiles pos :tile/water?])))


(defn move
  "Update the position of a create based on their speed, direct and current position."
  [{::keys [speed direction x y] :as creature}]
  (let [[dx dy] (utils/polar->cart speed (q/radians direction))]
    (assoc creature
      ::x (mod (+ x dx) config/width)
      ::y (mod (+ y dy) config/height))))

(defn expend
  "Expend `energy` from `creature`."
  [creature energy]
  (update creature ::energy - energy))

(defn dead?
  "Checks if the `creature` is dead"
  [creature]
  (>= 0 (::energy creature)))

(defn update-creature [state creature]
  (when-not (dead? creature)
    (let [on-water? (on-water? state creature)]
      (cond-> creature
        on-water? (expend 5)
        on-water? (turn 180)

         (utils/chance 30) (turn (utils/rand-int-between -10 10))

        :always (move)
        :always (expend -1)))))

(defn update-creatures [state]
  (update state :creatures
    (fn [creatures]
      (into []
        (comp
          (map (partial update-creature state))
          (remove nil?))
        creatures))))