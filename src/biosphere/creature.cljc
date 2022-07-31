(ns biosphere.creature
  (:require
    [biosphere.hex-tiles :as tiles]
    [taoensso.tufte :as tufte :refer [pspy]]
    [thi.ng.geom.core :as geom]
    [thi.ng.geom.vector :as v]
    [thi.ng.math.core :as m]))


(def max-energy-intake 1)
(defrecord Creature
  [id
   location  ; [x y]
   movement ; polar coordinates [speed direction]
   intent
   energy
   max-energy])

(defn rotation [creature]
  (get-in creature [:movement 1]))

(defn- rotate
  "Adds `x` rads to the `angle` and normalizes the result to [0 2π]."
  [angle x]
  (mod (+ angle x) m/TWO_PI))

(defn turn
  "Turn `creature` by `degrees` degrees. Positive is to the right, negative to the left."
  [creature degrees]
  (update-in creature [:movement 1] rotate (m/radians degrees)))

(defn one-step-ahead [creature]
  (m/+ (:location creature) (geom/as-cartesian (:movement creature))))

(defn move
  "Update the position of a creature based on their speed, direct and current position."
  [creature]
  (tufte/p ::move
    (assoc creature :location (one-step-ahead creature))))

(defn move!
  [creature]
  (assoc! creature :location (one-step-ahead creature)))

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
  (get-in state [:tiles (tiles/pos->id state (:location creature))]))

(defn on-water?
  "Check if creature is on water."
  [state creature]
  (let [tile (current-tile state creature)]
    (tiles/water? state tile)))

(defn eat [state {:keys [id max-energy] :as creature} amount]
  (let [{:keys [energy location]} (current-tile state creature)]
    (if (pos? energy)
      (let [amount-to-eat (min energy amount (- max-energy (:energy creature)))]
        (-> state
          (update-in [:creatures id :energy] + amount-to-eat)
          (update-in [:tiles location :energy] - amount-to-eat)
          (update :dirty-tiles conj location)))
      state)))

(defn tick-on-water [creature state]
  (if (on-water? state creature)
    (expend creature 5)
    creature))

(defn set-creature [state creature]
  (assoc-in state [:creatures (:id creature)] creature))




(def intentions #{:accelerate :decelerate :turn-left :turn-right :eat})
(def special-intentions #{:turn-around}) ; these are cheats for "dumb" creatures

(defn think [state creature]
  (pspy :think
    (assoc creature :intent
      (if (on-water? state creature)
        :turn-around
        (rand-nth (seq intentions))))))

(defmulti act
  (fn [_ creature] (pspy :dispatch (:intent creature))))

(def speed-step 0.5)
(def min-speed 0)
(def max-speed 3)
(def turn-speed 10) ; degrees

(defn accelerate [creature amount]
  (update creature [:movement 0] #(max min-speed (min max-speed (+ % amount)))))

(defmethod act :accelerate
  [state creature]
  (pspy :accelerate (set-creature state (accelerate creature speed-step))))

(defmethod act :decelerate
  [state creature]
  (pspy :decelerate (set-creature state (accelerate creature (- speed-step)))))

(defmethod act :turn-left
  [state creature]
  (pspy :turn-left (set-creature state (turn creature (- turn-speed)))))

(defmethod act :turn-right
  [state creature]
  (pspy :turn-right (set-creature state (turn creature turn-speed))))

(defmethod act :eat
  [state creature]
  (pspy :eat (eat state creature 0.2)))

(defmethod act :turn-around
  [state creature]
  (pspy :turn-around (set-creature state (turn creature 180))))

(defmethod act :default [state _] state)

(defn- profile-execute [state creature]
  (pspy :act
    (tufte/profile {:id ::act}
      (act state creature))))

(defn tick-internals [creature state]
  (pspy :tick-internals
    (tufte/profile {:id ::tick-internals}
      (-> creature
        (tick-on-water state)
        move))))

(defn- map-vals [m f]
  (persistent!
    (reduce-kv (fn [acc k v] (assoc! acc k (f v)))
      (transient m)
      m)))

(defn update-creatures [state]
  (tufte/profile {:id :update-creatures}
    (let [thoughtful-creatures (mapv #(think state %) (-> state :creatures vals))
          new-state (reduce profile-execute state thoughtful-creatures)]
      (update new-state :creatures map-vals tick-internals new-state))))

(defn init-creatures [{:keys [width height no-of-creatures speed] :as state}]
  (let [new-creatures
        (into {}
          (for [id (range no-of-creatures)
                :let [location  (v/vec2 (rand-int width) (rand-int height))
                      direction (m/radians (rand-int 360))
                      movement (v/vec2 speed direction)
                      new-creature (map->Creature
                                     {:id id
                                      :location location
                                      :movement movement
                                      :energy 50
                                      :max-energy 2000})]
                :when (not (on-water? state new-creature))]
            [id new-creature]))]
    (assoc state :creatures new-creatures)))
