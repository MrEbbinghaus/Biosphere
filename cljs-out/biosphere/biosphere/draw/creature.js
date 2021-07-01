// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.draw.creature');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('biosphere.utils');
goog.require('biosphere.creature');

/**
 * @interface
 */
biosphere.draw.creature.Drawable = function(){};

var biosphere$draw$creature$Drawable$draw$dyn_14504 = (function (entity,state){
var x__4521__auto__ = (((entity == null))?null:entity);
var m__4522__auto__ = (biosphere.draw.creature.draw[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(entity,state) : m__4522__auto__.call(null,entity,state));
} else {
var m__4519__auto__ = (biosphere.draw.creature.draw["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(entity,state) : m__4519__auto__.call(null,entity,state));
} else {
throw cljs.core.missing_protocol("Drawable.draw",entity);
}
}
});
biosphere.draw.creature.draw = (function biosphere$draw$creature$draw(entity,state){
if((((!((entity == null)))) && ((!((entity.biosphere$draw$creature$Drawable$draw$arity$2 == null)))))){
return entity.biosphere$draw$creature$Drawable$draw$arity$2(entity,state);
} else {
return biosphere$draw$creature$Drawable$draw$dyn_14504(entity,state);
}
});

biosphere.draw.creature.draw_creature_body_BANG_ = (function biosphere$draw$creature$draw_creature_body_BANG_(){
var fill__14376__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(256),(0)], null);
var previous_fill__14377__auto__ = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__14376__auto__)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__14376__auto__);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__14376__auto__);

}

var return_val__14378__auto__ = quil.core.triangle((-1),(1),(0),(-1),(1),(1));
if((previous_fill__14377__auto__ == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__14377__auto__);
}

return return_val__14378__auto__;
});
biosphere.draw.creature.draw_BANG_ = (function biosphere$draw$creature$draw_BANG_(p__14505,p__14506){
var map__14507 = p__14505;
var map__14507__$1 = cljs.core.__destructure_map(map__14507);
var creature = map__14507__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14507__$1,cljs.core.cst$kw$id);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14507__$1,cljs.core.cst$kw$location);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14507__$1,cljs.core.cst$kw$direction);
var map__14508 = p__14506;
var map__14508__$1 = cljs.core.__destructure_map(map__14508);
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,cljs.core.cst$kw$resolution);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,cljs.core.cst$kw$height);
var vec__14509 = location;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(1),null);
var x__$1 = ((x / width) * cljs.core.first(resolution));
var y__$1 = ((y / height) * cljs.core.second(resolution));
quil.core.push_matrix();

try{var G__14512_14515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
if((G__14512_14515 == null)){
} else {
quil.core.translate.cljs$core$IFn$_invoke$arity$1(G__14512_14515);
}

var G__14513_14516 = quil.core.radians(direction);
if((G__14513_14516 == null)){
} else {
quil.core.rotate.cljs$core$IFn$_invoke$arity$1(G__14513_14516);
}

var G__14514_14517 = (4);
if((G__14514_14517 == null)){
} else {
quil.core.scale.cljs$core$IFn$_invoke$arity$1(G__14514_14517);
}

return biosphere.draw.creature.draw_creature_body_BANG_();
}finally {quil.core.pop_matrix();
}});
biosphere.draw.creature.make_graphic = (function biosphere$draw$creature$make_graphic(width,height){
var g = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height);
var gr__14406__auto___14520 = g;
var _STAR_graphics_STAR__orig_val__14518_14521 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__14519_14522 = gr__14406__auto___14520;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__14519_14522);

try{quil.core.begin_draw(gr__14406__auto___14520);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((200));

quil.core.end_draw(gr__14406__auto___14520);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__14518_14521);
}
return g;
});
biosphere.draw.creature.draw_creatures_BANG_ = (function biosphere$draw$creature$draw_creatures_BANG_(p__14523){
var map__14524 = p__14523;
var map__14524__$1 = cljs.core.__destructure_map(map__14524);
var state = map__14524__$1;
var creature_graphic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14524__$1,cljs.core.cst$kw$creature_DASH_graphic);
var creatures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14524__$1,cljs.core.cst$kw$creatures);
var gr__14406__auto___14527 = creature_graphic;
var _STAR_graphics_STAR__orig_val__14525_14528 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__14526_14529 = gr__14406__auto___14527;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__14526_14529);

try{quil.core.begin_draw(gr__14406__auto___14527);

quil.core.clear();

cljs.core.run_BANG_((function (creature){
return biosphere.draw.creature.draw_BANG_(creature,state);
}),cljs.core.vals(creatures));

quil.core.end_draw(gr__14406__auto___14527);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__14525_14528);
}
return quil.core.image.cljs$core$IFn$_invoke$arity$3(creature_graphic,(0),(0));
});
