(ns biosphere.simulation.constraint-map.core
  (:require
    [biosphere.utils.hex :as hex]
    [clojure.set :as set]))

(def all-tiles
  #{:water
    :beach
    :plains
    :forest
    :mountain})

(def rules
  {:water {:default #{:water :beach}}
   :beach {:default #{:beach :plains :water}}
   :plains {:default #{:plains :forest :mountain :beach}}
   :forest {:default #{:forest :plains :mountain}}
   :mountain {:default #{:mountain  :plains :forest}}})

(defn index-by [f coll]
  (into {} (map #(vector (f %) %)) coll))

(defn initial-tile [hex]
  {:position hex
   :possible-types all-tiles})

(defn collapsed?
  "Checks if the tile is collapsed."
  [tile]
  (boolean (:type tile)))

(defn next-collapsible [tiles]
  (->> (vals tiles)
    (remove collapsed?)
    (sort-by (comp count :possible-types))
    first
    :position))


(defn collapse [tiles hex]
  (println "collapse " hex)
  (let [hex-type (rand-nth (vec (get-in tiles [hex :possible-types])))
        constrain-neighbours
        (fn constrain [ts hex]
          (if (and (contains? ts hex) (not (collapsed? (get ts hex))))
            (update-in ts [hex :possible-types]
              set/intersection (get-in rules [hex-type :default]))
            ts))]
    (->
      (reduce constrain-neighbours tiles (hex/neighbours hex))
      (update hex
        #(-> %
           (assoc :type hex-type)
           (dissoc :possible-types))))))


(defn collapse-all [tiles]
  (let [collapse-hex (next-collapsible tiles)]
    (if collapse-hex
      (recur (collapse tiles collapse-hex))
      tiles)))


