(ns biosphere.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [biosphere.creature :as creature]
            [biosphere.world :as world]
            [biosphere.config :as config]))

(defn step-size [x]
  (/ (* config/scale x) x))

(defn gen-tiles []
  (vec (for [y (range 0 (q/height) (step-size (q/height)))
             x (range 0 (q/width) (step-size (q/width)))]
         (world/gen-tile x y))))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/angle-mode :degrees)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:tiles (gen-tiles)
   :tile-set (let [g (q/create-graphics (q/width) (q/height))]
               (q/with-graphics g
                 (q/background 0 0 100)
                 (q/color-mode :hsb)
                 (q/no-stroke)
                 (q/fill 200))
               g)

   :creatures (into {} (for [id (range 500)]
                        [id (creature/new-rand id)]))})

(defn update-state [state]
  (-> state
    creature/update-creatures))

(defn interlaced [factor coll]
  (let [cyc (mod (q/frame-count) factor)]
    (->> coll (drop cyc) (take-nth factor))))



(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/with-graphics (:tile-set state)
    (let [interlacing-factor 100]
      (world/draw-tiles (interlaced interlacing-factor (:tiles state)))))

  (q/image (:tile-set state) 0 0)

  (q/with-fill [0 256 256]
    (doseq [creature (vals (:creatures state))]
      (creature/draw-creature creature)))

  (q/with-fill 0
    (q/text (str "FPS: " (q/floor (q/current-frame-rate))) 10 10)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch biosphere
    :host "biosphere"
    :size [1400 801]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
