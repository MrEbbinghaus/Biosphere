(ns biosphere.ecs
  (:require [brute.entity :as entity]
            [clojure.pprint :as pprint]))

(def system (entity/create-system))

(defrecord Position [x y r s])

(pprint/pprint
  (let [e (entity/create-entity)]
    (entity/add-entity system e)
    (entity/add-component system e (Position. 1 2 180 1))))

