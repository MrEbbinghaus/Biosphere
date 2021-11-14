(ns biosphere.simulation.core
  (:require
    [biosphere.tiles :as tiles]
    [biosphere.creature :as creature]))

(def defaults
  {:water-level 0.4
   :no-of-creatures 100
   :speed 0.25 ; units per second
   :width 256 ; width in tiles
   :height 144}) ; height in tiles

(defn new-simulation [{:keys [seed] :as params}]
  (-> defaults
    (merge params)
    (assoc :seed (or seed (rand-int 1000)))
    tiles/init-tiles
    creature/init-creatures))

(defn now []
  #?(:cljs (js/window.performance.now)
     :clj (System/currentTimeMillis)))

(defn update-delta [state]
  (let [current-ms (now)]
    (assoc state :delta-time
      (if-let [last-update-ms (:last-update state)]
        (/ (- current-ms last-update-ms) 1000)
        1)
      :last-update current-ms)))

(defn tick [state]
  (-> state
    (update :tick inc)
    update-delta
    tiles/update-tiles
    creature/update-creatures))