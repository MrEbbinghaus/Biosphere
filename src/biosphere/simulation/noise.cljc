(ns biosphere.simulation.noise
  (:require
    [biosphere.simulation.noise.simplex :as simplex]))

(defn simplex-generator
  ([seed] (simplex-generator seed 1))
  ([seed scale]
   (let [generator (simplex/generator (str seed))
         clamp #(/ (+ 1 %) 2)] ; simplex/generator returns [-1, 1], but we want [0, 1]
     (fn [& params]
       (->> params
         (map #(/ % scale))
         (apply generator)
         clamp)))))
