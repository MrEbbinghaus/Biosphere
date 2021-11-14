(ns biosphere.core
  (:require
    [biosphere.draw.core :as draw]))

(defn ^:export run-sketch [host dimensions]
  (draw/run-sketch host dimensions))