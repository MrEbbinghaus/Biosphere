(ns biosphere.simulation.runner.js-interval
  (:require
    [biosphere.simulation.core :as sim]))

(defn- stop! [simulation]
  (when-let [id (::id  @simulation)]
    (js/clearInterval id)
    (js/console.log "Stop simulation")
    (swap! simulation dissoc ::id)))

(defn tick! [simulation]
  (if (:running? @simulation)
    (swap! simulation sim/tick)
    (stop! simulation)))

(defn add-runner
  ([simulation]
   (add-runner simulation {}))
  ([simulation {:keys [tps] :or {tps 10}}]
   (letfn [(run-sim! []
             (if-let [id (::id @simulation)]
               (js/console.warn "Simulation already running! Stop with: clearInterval(" id ")")
               (let [id (js/setInterval #(tick! simulation) (/ 1000 tps))]
                 (js/console.log "Start simulation with ID:" id)
                 (swap! simulation assoc
                   ::id id
                   :tps-goal 10))))]
     (swap! simulation assoc :runner run-sim!))))

