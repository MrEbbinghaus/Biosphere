(ns user
  (:require
    [shadow.cljs.devtools.server :as server]
    [shadow.cljs.devtools.api :as shadow]))

(defn start-repl []
  (server/start!)
  (shadow/watch :main)
  (shadow/repl :main))