(ns biosphere.core
  (:require
    [biosphere.draw.core :as draw]
    [biosphere.simulation.core :as sim]
    [clojure.string :as str]
    #?(:cljs [biosphere.simulation.runner.js-timeout :as js-runner])
    [quil.core :as q])
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

; this function is called in index.html
(defn ^:export run-sketch [host dimensions]
  (let [sketch (draw/create-sketch host dimensions current-simulation)]
    (reset! current-sketch sketch)
    #?(:cljs (js-runner/add-runner current-simulation))
    #?(:cljs
       (js/setTimeout #(sim/start! current-simulation) 500))))


(defn ^:export restart []
  (swap! current-simulation sim/restart))

(defn ^:export toggle-pause []
  (when-let [sketch @current-sketch]
    (if (draw/running? sketch)
      (draw/stop! sketch)
      (draw/start! sketch))))

(comment

  (require '[quil.core :as q])

  (q/with-sketch @current-sketch
    (q/state-atom))

  (sim/start! current-simulation)
  (sim/stop! current-simulation)

  (draw/start! @current-sketch)
  (draw/stop! @current-sketch)
  (draw/running? @current-sketch)

  (q/with-sketch @current-sketch
    (dissoc @(q/state-atom) :sim-state))

  _)


; Create simulation
; Give sim to quil
; start simulation
; start rendering