(ns biosphere.creature
  (:require [quil.core :as q]
            [biosphere.config :as config]
            [biosphere.utils :as utils]))

(defn turn [creature amt]
  (update creature :creature/direction + amt))

(defn on-water? [state {:creature/keys [x y]}]
  (let [pos (mapv #(utils/floor-to % config/scale) [x y])]
    (get-in state [:tiles pos :tile/water?])))


(defn move [{:creature/keys [id speed direction x y] :as creature}]
  (let [[vx vy] (utils/cart->polar speed (q/radians (- direction 90)))
        new-x (mod (+ x vx) (q/width))
        new-y (mod (+ y vy) (q/height))]
    (assoc creature
      :creature/x new-x
      :creature/y new-y)))



(defn expend [creature energy]
  (update creature :creature/energy - energy))

(defn die? [creature]
  (>= 0 (:creature/energy creature)))

(defn update-creature [state [id creature]]
  (let [on-water? (on-water? state creature)]
    (when-not (die? creature)
      [id
       (cond-> creature
         on-water? (expend 5)
         on-water? (turn 180)

         (utils/chance 30)
         (turn (utils/rand-int-between -10 10))

         :always (move)
         :always (expend -1))])))

(defn update-creatures [state]
  (update state :creatures
    #(into {} (map (partial update-creature state)) (vec %))))

(defn draw-creature-body
  ([x y w h] (draw-creature-body x y w h 0))
  ([x y w h r]
   (q/with-translation [x y]
     (q/with-rotation [(q/radians r)]
       (let [half-w (/ w 2)
             half-h (/ h 2)]
         (q/triangle
           (- half-w) half-h             ; bottom left
           0          (- (/ half-h 0.8)) ; top center
           half-w     half-h))))))       ; bottom right

(defn draw-creature [{:creature/keys [x y direction]}]
  (q/with-fill [0 256 256]
    (draw-creature-body x y 3 3 direction)))