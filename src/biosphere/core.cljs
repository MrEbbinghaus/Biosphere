(ns biosphere.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [biosphere.creature :as creature]
            [biosphere.config :as config]))

(def water-color [150 256 256])

(defn scale [x]
  (* config/scale x))

(defn step-size [x]
  (/ (scale x) x))

(defn gen-tile [x y]
  (let [noisiness       150
        water-threshold 0.4
        value           (q/noise (/ x noisiness) (/ y noisiness))
        water?          (< value water-threshold)
        humidity       (if water? 0
                                 (/ (- value water-threshold)
                                   (- 1 water-threshold)))]
    #:tile{:x        x :y y
           :value    value
           :humidity (- humidity)
           :water?   water?}))

(defn gen-tiles []
  (into {} (for [y (range 0 (q/height) (step-size (q/height)))
                 x (range 0 (q/width) (step-size (q/width)))]
             [[x y] (gen-tile x y)])))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:tiles (gen-tiles)
   :tile-set (let [g (q/create-graphics (q/width) (q/height))]
               (q/with-graphics g
                 (q/background 0 0 255)
                 (q/color-mode :hsb)
                 (q/no-stroke))
               g)

   :creatures (into {} (for [i (range 50)]
                        [i
                         #:creature{:id i
                                    :x (rand-int (q/width))
                                    :y (rand-int (q/height))
                                    :speed 1
                                    :direction (rand-int 360)}]))})



(defn update-state [state]
  (-> state
    creature/update-creatures))

(defn draw-tile [{:tile/keys [x y humidity water?]}]
  (let [size config/scale;(step-size (q/width))
        color (if water?
                water-color
                [80 (+ 100 (* 156 humidity)) 255])]
    (q/with-fill color
      (q/rect x y size size))))

(defn draw-tiles [tiles]
  (doseq [tile tiles]
    (draw-tile tile)))

(defn draw-creature-body
  ([x y w h] (draw-creature-body x y w h 0))
  ([x y w h r]
   (q/with-translation [x y]
     (q/with-rotation [(q/radians r)]
       (let [half-w (/ w 2)
             half-h (/ h 2)]
         (q/triangle
           (- half-w) half-h             ; bottom left
           0          (- (/ half-h 0.8)) ; top center
           half-w     half-h))))))       ; bottom right

(defn draw-creature [{:creature/keys [x y direction]}]
  (q/with-fill [0 256 256]
    (draw-creature-body x y 3 3 direction)))

(defn interlaced [factor frame-count coll]
  (let [cyc (mod frame-count factor)]
    (->> coll (drop cyc) (take-nth factor))))


(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/with-graphics (:tile-set state)
    (let [interlacing-factor 100]
      (draw-tiles (interlaced interlacing-factor
                    (q/frame-count)
                    (->> state :tiles vals)))))

  (q/image (:tile-set state) 0 0)

  (doseq [creature (vals (:creatures state))]
    (draw-creature creature))

  (q/with-fill 0
    (q/text (str "FPS: " (q/floor (q/current-frame-rate))) 10 10)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch biosphere
    :host "biosphere"
    :size [700 700]
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
