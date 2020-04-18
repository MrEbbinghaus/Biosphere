// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('biosphere.draw.creature');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('biosphere.config');
goog.require('biosphere.utils');
biosphere.draw.creature.draw_creature_BANG_ = (function biosphere$draw$creature$draw_creature_BANG_(p__13584,p__13585){
var map__13586 = p__13584;
var map__13586__$1 = (((((!((map__13586 == null))))?(((((map__13586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13586):map__13586);
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13586__$1,cljs.core.cst$kw$resolution);
var map__13587 = p__13585;
var map__13587__$1 = (((((!((map__13587 == null))))?(((((map__13587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13587):map__13587);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13587__$1,cljs.core.cst$kw$biosphere$creature_SLASH_x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13587__$1,cljs.core.cst$kw$biosphere$creature_SLASH_y);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13587__$1,cljs.core.cst$kw$biosphere$creature_SLASH_direction);
var x__$1 = ((x / biosphere.config.width) * cljs.core.first(resolution));
var y__$1 = ((y / biosphere.config.height) * cljs.core.second(resolution));
quil.core.push_matrix();

try{var G__13590_13593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
if((G__13590_13593 == null)){
} else {
quil.core.translate.cljs$core$IFn$_invoke$arity$1(G__13590_13593);
}

var G__13591_13594 = quil.core.radians(direction);
if((G__13591_13594 == null)){
} else {
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(G__13591_13594);
}

var G__13592_13595 = (4);
if((G__13592_13595 == null)){
} else {
quil.core.scale.cljs$core$IFn$_invoke$arity$1(G__13592_13595);
}

var fill__13377__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(256),(0)], null);
var previous_fill__13378__auto__ = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__13377__auto__)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__13377__auto__);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__13377__auto__);

}

var return_val__13379__auto__ = quil.core.triangle((-1),(1),(0),(-1),(1),(1));
if((previous_fill__13378__auto__ == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__13378__auto__);
}

return return_val__13379__auto__;
}finally {quil.core.pop_matrix();
}});
biosphere.draw.creature.make_graphic = (function biosphere$draw$creature$make_graphic(width,height){
var g = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height);
var gr__13407__auto___13598 = g;
var _STAR_graphics_STAR__orig_val__13596_13599 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__13597_13600 = gr__13407__auto___13598;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__13597_13600);

try{quil.core.begin_draw(gr__13407__auto___13598);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((200));

quil.core.end_draw(gr__13407__auto___13598);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__13596_13599);
}
return g;
});
biosphere.draw.creature.draw_creatures_BANG_ = (function biosphere$draw$creature$draw_creatures_BANG_(p__13601){
var map__13602 = p__13601;
var map__13602__$1 = (((((!((map__13602 == null))))?(((((map__13602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13602):map__13602);
var state = map__13602__$1;
var creature_graphic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13602__$1,cljs.core.cst$kw$creature_DASH_graphic);
var creatures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13602__$1,cljs.core.cst$kw$creatures);
var gr__13407__auto___13606 = creature_graphic;
var _STAR_graphics_STAR__orig_val__13604_13607 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__13605_13608 = gr__13407__auto___13606;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__13605_13608);

try{quil.core.begin_draw(gr__13407__auto___13606);

quil.core.clear();

cljs.core.run_BANG_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(biosphere.draw.creature.draw_creature_BANG_,state),cljs.core.vals(creatures));

quil.core.end_draw(gr__13407__auto___13606);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__13604_13607);
}
return quil.core.image.cljs$core$IFn$_invoke$arity$3(creature_graphic,(0),(0));
});
