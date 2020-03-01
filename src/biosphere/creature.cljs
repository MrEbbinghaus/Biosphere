(ns biosphere.creature
  (:require [quil.core :as q]
            [biosphere.config :as config]))

(defn cart->polar [radius angle]
  [(* radius (q/cos angle))
   (* radius (q/sin angle))])

(defn speedup [creature]
  (assoc creature :creature/speed + 0.01))

(defn slowdown [creature]
  (assoc creature :creature/speed - 0.02))

(defn turn [creature amt]
  (update creature :creature/direction + amt))

(defn turn-left [creature] (turn creature -5))
(defn turn-right [creature] (turn creature +5))

(defn floor-to [n d]
  (let [r (rem n d)]
    (q/round(- n r))))

(defn on-water? [state {:creature/keys [x y]}]
  (let [pos (mapv #(floor-to % config/scale) [x y])]
    (get-in state [:tiles pos :tile/water?])))


(defn move [{:creature/keys [id speed direction x y] :as creature}]
  (let [[vx vy] (cart->polar speed (q/radians (- direction 90)))
        new-x (mod (+ x vx) (q/width))
        new-y (mod (+ y vy) (q/height))]
    (assoc creature
      :creature/x new-x
      :creature/y new-y)))

(defn rand-int-between [min max]
  (+ min (rand-int (- max min))))

(defn chance [percentage]
  (> (rand-int 100) percentage))


(defn update-creature [state [id creature]]
  [id
   (cond-> creature
     (on-water? state creature) (turn 180)
     (chance 30) (turn (rand-int-between -10 10))
     :always     (move))])

(defn update-creatures [state]
  (update state :creatures
    #(into {} (map (partial update-creature state)) (vec %))))