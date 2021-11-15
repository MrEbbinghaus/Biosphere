(ns biosphere.simulation.runner.js-timeout
  (:require
    [biosphere.simulation.core :as sim]))

(defn add-runner
  ([simulation]
   (add-runner simulation {}))
  ([simulation {:keys [tps] :or {tps 10}}]
   (letfn [(tick! []
             (when (:running? @simulation)
               (swap! simulation sim/tick)
               (js/setTimeout tick! (/ 1000 (:tps-goal @simulation)))))
           (start-ticking []
             (if (:running @simulation)
               (js/console.warn "Simulation already running!")
               (do
                 (js/console.log "Start simulation")
                 (tick!))))]
     (swap! simulation
       assoc
       :tps-goal tps
       :runner start-ticking))))
