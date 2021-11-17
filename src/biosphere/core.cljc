(ns biosphere.core
  (:require
    [biosphere.draw.core :as draw]
    [biosphere.simulation.core :as sim]
    [clojure.string :as str]
    #?(:cljs [biosphere.simulation.runner.js-timeout :as js-runner])
    [taoensso.tufte :as tufte])
  #?(:cljs (:import [goog Uri])))

#?(:cljs
   (defn get-query []
     (into {}
       (for [kv-vec (-> js/window .-location .-href Uri. .getDecodedQuery (str/split #"&"))
             :let [[k v] (str/split kv-vec #"=")]]
         [(keyword k) v]))))

(defonce current-sketch (atom nil))
(defonce current-simulation
  (atom (sim/new-simulation {:seed #?(:clj nil
                                      :cljs (:seed (get-query)))})))

(defonce stats-accumulator
  (tufte/add-accumulating-handler! {:ns-pattern "*"}))

; this function is called in index.html
(defn ^:export run-sketch [host dimensions]
  (let [sketch (draw/create-sketch host dimensions current-simulation)]
    (reset! current-sketch sketch)
    #?(:cljs (js-runner/add-runner current-simulation {:tps 60}))
    #?(:cljs
       (js/setTimeout #(sim/start! current-simulation) 500))))

(defn ^:export profile
  ([] (tufte/format-grouped-pstats @stats-accumulator))
  ([key] (tufte/format-grouped-pstats (select-keys @stats-accumulator #{(keyword key)}))))

(defn ^:export restart []
  (swap! current-simulation sim/restart)
  @stats-accumulator)

(defn ^:export set-tps [tps]
  (swap! current-simulation assoc :tps-goal tps))

(defn ^:export toggle-pause-rendering []
  (when-let [sketch @current-sketch]
    (if (draw/running? sketch)
      (draw/stop! sketch)
      (draw/start! sketch))))

(defn ^:export toggle-pause-simulation []
  (if (:running? @current-simulation)
    (sim/stop! current-simulation)
    (sim/start! current-simulation)))

(comment

  (require '[quil.core :as q])

  (q/with-sketch @current-sketch
    (q/state-atom))

  (sim/start! current-simulation)
  (swap! current-simulation assoc :tps-goal 60)
  (sim/stop! current-simulation)

  (draw/start! @current-sketch)
  (draw/stop! @current-sketch)
  (draw/running? @current-sketch)

  (q/with-sketch @current-sketch
    (dissoc @(q/state-atom) :sim-state))

  _)