(ns biosphere.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [biosphere.creature :as creature]
            [biosphere.world :as world]
            [biosphere.config :as config]
            [biosphere.draw.core :as draw]))

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
   :tile-graphic (let [g (q/create-graphics (q/width) (q/height))]
                   (q/with-graphics g
                     (q/background 0 0 100)
                     (q/color-mode :hsb)
                     (q/no-stroke)
                     (q/fill 200))
                   g)

   :creatures (vec (for [_ (range 500)]
                    (creature/new-rand)))})

(defn update-state [state]
  (-> state
    world/update-tiles
    creature/update-creatures))

; this function is called in index.html
(defn ^:export run-sketch [host [width height]]
  (q/defsketch biosphere
    :host host
    :size [width height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw/draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
