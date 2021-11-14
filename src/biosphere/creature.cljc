(ns biosphere.creature
  (:require
    [biosphere.utils :as utils :refer [*d]]
    [biosphere.tiles :as tiles]))

(def max-energy-intake 1)
(defrecord Creature
  [id
   location ; [x y]
   direction ; radians
   speed
   energy
   max-energy])

(defn fetch
  "Get creature from `state` by `id`"
  [state id]
  (get-in state [:creatures id]))

(defn turn
  "Turn `creature` by `amount` degrees. Positive is to the right, negative to the left."
  [creature amount]
  (update creature :direction #(-> % (+ amount) (mod 360))))

(defn calculate-v2movement [{:keys [speed direction]}]
  (utils/polar->cart speed (utils/radians direction)))

(defn update-v2movement [creature]
  (assoc creature :v2movement (calculate-v2movement creature)))

(defn on-water?
  "Check if creature is on water."
  [state {:keys [location]}]
  (let [index (tiles/pos->id location)]
    (tiles/water? state (get-in state [:tiles index]))))


(defn one-step-ahead [{:keys [speed direction location]}]
  (mapv + (utils/polar->cart speed (utils/radians direction)) location))

(defn move
  "Update the position of a creature based on their speed, direct and current position."
  [creature]
  (assoc creature :location (one-step-ahead creature)))

(defn expend
  "Expend `energy` from `creature`."
  [creature expense]
  (update creature :energy - expense))

(defn dead?
  "Checks if the `creature` is dead"
  [creature]
  (>= 0 (:energy creature)))

(defn dispose [state {:keys [id]}]
  (update state :creatures dissoc id))


(defn current-tile [state creature]
  (get-in state [:tiles (tiles/pos->id (:location creature))]))

(defn eat [state {:keys [id max-energy] :as creature} amount]
  (let [{:keys [energy location]} (current-tile state creature)]
    (if (pos? energy)
      (let [amount-to-eat (min energy amount (- max-energy (:energy creature)))]
        (-> state
          (update-in [:creatures id :energy] + amount-to-eat)
          (update-in [:tiles location :energy] - amount-to-eat)
          (update :dirty-tiles conj location)))
      state)))

(defn- tick-on-water [creature state]
  (if (on-water? state creature)
    (-> creature (expend (*d state 5)) (turn 180))
    creature))

(defn whats-ahead [state creature]
  (cond-> #{}
    (on-water? state {:location (one-step-ahead creature)}) (conj :water)
    (not (tiles/in-bounds? state (one-step-ahead creature))) (conj :out-of-bounds)))


(defn tick [{:keys [id] :as creature} old-state new-state]
  (let [new-creature
        (cond-> creature
          :always
          (tick-on-water old-state)

          (utils/chance 30)
          (turn (utils/rand-int-between -10 10))

          (not (->> creature one-step-ahead (tiles/in-bounds? old-state)))
          (turn 180)

          :always
          (move))]

    (if (dead? new-creature)
      (dispose new-state new-creature)
      (-> new-state
        (assoc-in [:creatures id] new-creature)
        (eat new-creature 0.2)))))

(defn update-creatures [state]
  (reduce (fn [new-state ^Creature creature] (tick creature state new-state))
    state
    (-> state :creatures vals)))

(defn init-creatures [{:keys [width height no-of-creatures speed] :as state}]
  (let [new-creatures
        (into {}
          (for [id (range no-of-creatures)
                :let [location  [(rand-int width) (rand-int height)]
                      direction (rand-int 360)
                      new-creature (->Creature id location direction speed 50 200)]
                :when (not (on-water? state new-creature))]
            [id new-creature]))]
    (assoc state :creatures new-creatures)))
