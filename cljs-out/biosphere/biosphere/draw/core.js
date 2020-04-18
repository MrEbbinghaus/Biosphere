// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
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
biosphere.draw.core.draw_seed_BANG_ = (function biosphere$draw$core$draw_seed_BANG_(p__13611){
var map__13612 = p__13611;
var map__13612__$1 = (((((!((map__13612 == null))))?(((((map__13612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13612):map__13612);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13612__$1,cljs.core.cst$kw$seed);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(["Seed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seed)].join(''),(2),(25));
});
biosphere.draw.core.draw_state = (function biosphere$draw$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((230));

biosphere.draw.tile.draw_tiles_BANG_(state);

biosphere.draw.creature.draw_creatures_BANG_(state);

biosphere.draw.core.draw_fps_counter_BANG_();

return biosphere.draw.core.draw_seed_BANG_(state);
});
