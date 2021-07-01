(ns biosphere.protocols)

(defprotocol Updateable
  (tick [this old-state new-state]))