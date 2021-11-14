(ns biosphere.simulation.noise.simplex)

;; from: https://gist.github.com/Efimero/9d1184db9f3357b3a0a16903d3da762a

; Usage:
; (def my-generator (perlin.noise/generator "My Favorite Seed"))
; (my-generator 1.1 2.2 3.3) ; input coordinates as float, output single float (-1 to 1 gaussian distribution)

(defn generator
  ([] (generator (rand)))
  ([seed]
   (let [T [0x15 0x38 0x32 0x2c 0x0d 0x13 0x07 0x2a]
         b (fn b
             ([N B] (bit-and (bit-shift-right N B) 1))
             ([i j k B]
              (T (bit-or
                   (bit-shift-left (b i B) 2)
                   (bit-shift-left (b j B) 1)
                   (b k B)))))
         shuffle (fn [i j k]
                   (+ (b i j k 0)
                      (b j k i 1)
                      (b k i j 2)
                      (b i j k 3)
                      (b j k i 4)
                      (b k i j 5)
                      (b i j k 6)
                      (b j k i 7)))
         cpa (fn [c] (.codePointAt (js/String c)))
         bit-red (fn adler
                   ([n] (mod (adler n 1 0) 0xFF))
                   ([n a b]
                    (if-not (empty? (rest n))
                      (adler
                        (rest n)
                        (mod (+ a (cpa (first n))) 0xFFF1)
                        (mod (+ a b) 0xFFF1))
                      (int (bit-or (bit-shift-left b 0xF) a)))))
         seeded-int (bit-red seed)
         noise (fn noise
                 ([] (noise 0 0 0))
                 ([x] (noise x 0 0))
                 ([x y] (noise x y 0))
                 ([x y z]
                  (let [[x y z] (map #(+ seeded-int %) [x y z])
                        s (/ (+ x y z) 3)
                        i (int (Math/floor (+ x s)))
                        j (int (Math/floor (+ y s)))
                        k (int (Math/floor (+ z s)))
                        s (/ (+ i j k) 6.0)
                        u (+ x (- i) s)
                        v (+ y (- j) s)
                        w (+ z (- k) s)
                        A (atom [0 0 0])
                        hi  (if (>= u w)
                              (if (>= u v)
                                0 1)
                              (if (>= v w)
                                1 2))
                        lo  (if (< u w)
                              (if (< u v)
                                0 1)
                              (if (< v w)
                                1 2))
                        K (fn [a]
                            (let [s (/ (+ (@A 0) (@A 1) (@A 2)) 6.0)
                                  x (+ u (- (@A 0)) s)
                                  y (+ v (- (@A 1)) s)
                                  z (+ w (- (@A 2)) s)
                                  t (- 0.6
                                      (* x x)
                                      (* y y)
                                      (* z z))
                                  h (shuffle (+ i (@A 0))
                                             (+ j (@A 1))
                                             (+ k (@A 2)))
                                  b5  (bit-and (bit-shift-right h 5) 1)
                                  b4  (bit-and (bit-shift-right h 4) 1)
                                  b3  (bit-and (bit-shift-right h 3) 1)
                                  b2  (bit-and (bit-shift-right h 2) 1)
                                  b1  (bit-and h 3)
                                  p (case b1, 1 x, 2 y, z)
                                  q (case b1, 1 y, 2 z, x)
                                  r (case b1, 1 z, 2 x, y)
                                  p (if (= b5 b3) (- p) p)
                                  q (if (= b5 b4) (- q) q)
                                  r (if (= b5 (bit-xor b4 b3)) r (- r))]
                              (reset! A (mapv #(if (= a (first %))
                                                 (inc (second %))
                                                 (second %))
                                          (map-indexed vector @A)))
                              (if (< t 0) 0
                                (*  8 t t t t
                                  (+ p (if (= b1 0)
                                         (+ q r)
                                         (if (= b2 0) q r)))))))]
                    (+  (K hi)
                        (K (- 3 hi lo))
                        (K lo)
                        (K 0)))))]
     noise)))