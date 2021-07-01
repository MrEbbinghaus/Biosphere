(defproject biosphere "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [quil "3.1.0"]
                 [org.clojure/clojurescript "1.10.866"]
                 [devcards "0.2.7"]]

  :clean-targets ^{:protect false} ["target" "resources/public/cljs-out"]
  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.13"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target" "resources"]}}

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:dev"   ["trampoline" "run" "-m" "figwheel.main" "-b" "biosphere" "-r"]
            "fig:publish" ["trampoline" "run" "-m" "figwheel.main" "-O" "advanced" "-bo" "biosphere"]})
