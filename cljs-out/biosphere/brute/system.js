// Compiled by ClojureScript 1.10.597 {}
goog.provide('brute.system');
goog.require('cljs.core');
/**
 * Add a function that represents a system, e.g. Physics, Rendering, etc.
 *   This needs to be in the structure: (fn [system delta]) where 'delta' is the number of milliseconds
 *   since the last game tick. This will also need to return the system in the state you want passed to the
 *   next system-fn, and ultimately out of process-one-game-tick.
 *   This will then be called directly when `process-one-game-tick` is called
 */
brute.system.add_system_fn = (function brute$system$add_system_fn(system,system_fn){
return cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"system-fns","system-fns",-1770570457),cljs.core.conj.call(null,new cljs.core.Keyword(null,"system-fns","system-fns",-1770570457).cljs$core$IFn$_invoke$arity$1(system),system_fn));
});
/**
 * The function that does the actual throttling.
 */
brute.system.throttled_fn = (function brute$system$throttled_fn(system_fn,atom,threshhold,system,delta){
cljs.core.swap_BANG_.call(null,atom,cljs.core._PLUS_,delta);

if((cljs.core.deref.call(null,atom) >= threshhold)){
return cljs.core.reduce.call(null,(function (v,_){
cljs.core.swap_BANG_.call(null,atom,cljs.core._,threshhold);

return system_fn.call(null,v,delta);
}),system,cljs.core.range.call(null,Math.floor((cljs.core.deref.call(null,atom) / threshhold))));
} else {
return system;
}
});
/**
 * Same as `add-system-fn`, but will only execute the `system-fn` after `threshold` milliseconds has been equalled or passed.
 */
brute.system.add_throttled_system_fn = (function brute$system$add_throttled_system_fn(system,system_fn,threshold){
return brute.system.add_system_fn.call(null,system,cljs.core.partial.call(null,brute.system.throttled_fn,system_fn,cljs.core.atom.call(null,(0)),threshold));
});
/**
 * Optional convenience function that calls each of the system functions that have been added in turn, with the provided delta.
 */
brute.system.process_one_game_tick = (function brute$system$process_one_game_tick(system,delta){
return cljs.core.reduce.call(null,(function (sys,sys_fn){
return sys_fn.call(null,sys,delta);
}),system,new cljs.core.Keyword(null,"system-fns","system-fns",-1770570457).cljs$core$IFn$_invoke$arity$1(system));
});

//# sourceMappingURL=system.js.map
