(ns biosphere.utils
  (:require [quil.core :as q]))

(defn polar->cart
  "Returns a vector with the x and y coordinates."
  [radius angle]
  (let [angle (- angle (/ Math/PI 2))] ; -π/2 because our origin is top-left. Not bottom-right.
    [(* radius (Math/cos angle))
     (* radius (Math/sin angle))]))

(defn floor-to
  "Floors `n` to the next whole number that is divisible by `d`"
  [n d]
  (let [r (rem n d)]
    (Math/round (- n r))))

(defn rand-int-between
  "Returns an int between `min` (inclusive) and `max` (exclusive)"
  [min max]
  (+ min (rand-int (- max min))))


(defn chance
  "Rolls a against a dice (default: d=100) and returns true if the throw is above `percentage`."
  ([percentage] (chance 100 percentage))
  ([d percentage] (> (rand-int d) percentage)))

#?(:clj
    (defmacro with-transform [{:keys [translate rotate scale]} & body]
       `(do
          (q/push-matrix)
          (try
            (some-> ~translate q/translate)
            (some-> ~rotate q/rotate)
            (some-> ~scale q/scale)
            ~@body
            (finally
              (quil.core/pop-matrix))))))

(defn dark-mode?
  "Checks for prefers-color-scheme: dark. (clj always returns true)"
  []
  #?(:clj false
     :cljs (and (-> js/window .-matchMedia) (-> js/window (.matchMedia "(prefers-color-scheme: dark)") .-matches))))