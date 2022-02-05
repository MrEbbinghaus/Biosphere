(ns biosphere.simulation.core
  (:require
    [biosphere.tiles :as tiles]
    [biosphere.creature :as creature]
    [biosphere.simulation.noise :as noise]
    [taoensso.tufte :as tufte]
    [biosphere.utils :as utils]))

(defn update-delta [state]
  (let [current-ms (utils/now)]
    (assoc state :delta-time
      (if-let [last-update-ms (:last-update state)]
        (/ (- current-ms last-update-ms) 1000)
        1)
      :last-update current-ms)))

(defn tick [state]
  (tufte/profile {:id ::tick}
    (tufte/p ::tick
      (-> state
        (update :tick inc)
        update-delta
        tiles/update-tiles
        creature/update-creatures))))

(defn start [simulation]
  (assoc simulation :running? true))

(defn start! [simulation]
  (when-let [start-runner (:runner @simulation)]
    (swap! simulation start)
    (start-runner)))

(defn stop [simulation]
  (assoc simulation :running? false))

(defn stop! [simulation]
  (swap! simulation stop))

(def defaults
  {:sea-level 0.48 ; 0 => no water, 1 => everything water
   :no-of-creatures 100
   :speed 0.25 ; units per second
   :width 512 ; width in tiles
   :height 288
   :tick-fn tick
   :start-fn start
   :stop-fn stop}) ; height in tiles

(defn new-simulation [{:keys [seed] :as params}]
  (let [seed (or seed (rand-int 1000))]
    (-> defaults
      (merge params)
      (assoc
        :seed seed
        :noise (noise/simplex-generator seed 100)) ; larger scale = zoom in
      tiles/init-tiles
      creature/init-creatures)))

(defn restart [simulation]
  (new-simulation (assoc simulation :tick 0)))

#_(defn set-tps [simulation tps]
    (if (:running? simulation)
      (if (< tps 1))))
