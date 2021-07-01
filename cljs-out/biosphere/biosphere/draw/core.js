// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.draw.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('biosphere.draw.creature');
goog.require('biosphere.draw.tile');
biosphere.draw.core.draw_fps_counter_BANG_ = (function biosphere$draw$core$draw_fps_counter_BANG_(){
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(["FPS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.floor(quil.core.current_frame_rate()))].join(''),(2),(12));
});
biosphere.draw.core.draw_seed_BANG_ = (function biosphere$draw$core$draw_seed_BANG_(p__14763){
var map__14764 = p__14763;
var map__14764__$1 = cljs.core.__destructure_map(map__14764);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14764__$1,cljs.core.cst$kw$seed);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(["Seed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seed)].join(''),(2),(24));
});
biosphere.draw.core.draw_tick_BANG_ = (function biosphere$draw$core$draw_tick_BANG_(p__14765){
var map__14766 = p__14765;
var map__14766__$1 = cljs.core.__destructure_map(map__14766);
var tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$tick);
return quil.core.text.cljs$core$IFn$_invoke$arity$3(["Tick: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick)].join(''),(2),(36));
});
biosphere.draw.core.draw_state = (function biosphere$draw$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((230));

biosphere.draw.tile.draw_tiles_BANG_(state);

biosphere.draw.creature.draw_creatures_BANG_(state);

biosphere.draw.core.draw_fps_counter_BANG_();

biosphere.draw.core.draw_seed_BANG_(state);

return biosphere.draw.core.draw_tick_BANG_(state);
});
