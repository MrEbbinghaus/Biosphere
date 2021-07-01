// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('biosphere.creature');
goog.require('biosphere.tiles');
goog.require('biosphere.config');
goog.require('biosphere.draw.core');
goog.require('biosphere.draw.tile');
goog.require('biosphere.draw.creature');
goog.require('biosphere.utils');
goog.require('clojure.string');
goog.require('goog.Uri');
biosphere.core.get_query = (function biosphere$core$get_query(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function biosphere$core$get_query_$_iter__14769(s__14770){
return (new cljs.core.LazySeq(null,(function (){
var s__14770__$1 = s__14770;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__14770__$1);
if(temp__5753__auto__){
var s__14770__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14770__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__14770__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__14772 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__14771 = (0);
while(true){
if((i__14771 < size__4621__auto__)){
var kv_vec = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__14771);
var vec__14773 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(kv_vec,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14773,(1),null);
cljs.core.chunk_append(b__14772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null));

var G__14779 = (i__14771 + (1));
i__14771 = G__14779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14772),biosphere$core$get_query_$_iter__14769(cljs.core.chunk_rest(s__14770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14772),null);
}
} else {
var kv_vec = cljs.core.first(s__14770__$2);
var vec__14776 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(kv_vec,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null),biosphere$core$get_query_$_iter__14769(cljs.core.rest(s__14770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2((new goog.Uri(window.location.href)).getDecodedQuery(),/&/));
})());
});
biosphere.core.gen_map_seed = (function biosphere$core$gen_map_seed(){
return cljs.core.rand_int((1000));
});
biosphere.core.setup = (function biosphere$core$setup(){
var seed = (function (){var or__4223__auto__ = cljs.core.cst$kw$seed.cljs$core$IFn$_invoke$arity$1(biosphere.core.get_query());
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return biosphere.core.gen_map_seed();
}
})();
quil.core.frame_rate((60));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.noise_seed(seed);

var _STAR_height_noise_STAR__orig_val__14780 = biosphere.tiles._STAR_height_noise_STAR_;
var _STAR_height_noise_STAR__temp_val__14781 = quil.core.noise;
(biosphere.tiles._STAR_height_noise_STAR_ = _STAR_height_noise_STAR__temp_val__14781);

try{return biosphere.creature.init_creatures(biosphere.tiles.init_tiles(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$speed,cljs.core.cst$kw$creature_DASH_graphic,cljs.core.cst$kw$tile_DASH_graphic,cljs.core.cst$kw$width,cljs.core.cst$kw$no_DASH_of_DASH_creatures,cljs.core.cst$kw$seed,cljs.core.cst$kw$resolution,cljs.core.cst$kw$water_DASH_level,cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$height],[0.25,biosphere.draw.creature.make_graphic(quil.core.width(),quil.core.height()),biosphere.draw.tile.make_tile_graphics(quil.core.width(),quil.core.height()),((256) / (1)),(100),seed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),quil.core.height()], null),0.4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zoom,(1)], null),((144) / (1))])));
}finally {(biosphere.tiles._STAR_height_noise_STAR_ = _STAR_height_noise_STAR__orig_val__14780);
}});
biosphere.core.keep_zoom_in_bounds = (function biosphere$core$keep_zoom_in_bounds(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$zoom], null),quil.core.constrain,(1),(2));
});
biosphere.core.update_resolution = (function biosphere$core$update_resolution(p__14782){
var map__14783 = p__14782;
var map__14783__$1 = cljs.core.__destructure_map(map__14783);
var state = map__14783__$1;
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14783__$1,cljs.core.cst$kw$resolution);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14783__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14783__$1,cljs.core.cst$kw$height);
var current_res = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biosphere.utils.floor_to(quil.core.width(),width),biosphere.utils.floor_to(quil.core.height(),height)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_res,resolution)){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tile_DASH_graphic,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.draw.tile.make_tile_graphics,current_res)),cljs.core.cst$kw$creature_DASH_graphic,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.draw.creature.make_graphic,current_res)),cljs.core.cst$kw$resolution,current_res);
}
});
biosphere.core.update_state = (function biosphere$core$update_state(state){
return biosphere.creature.update_creatures(biosphere.tiles.update_tiles(cljs.core.update.cljs$core$IFn$_invoke$arity$3(biosphere.core.keep_zoom_in_bounds(biosphere.core.update_resolution(state)),cljs.core.cst$kw$tick,cljs.core.inc)));
});
biosphere.core.run_sketch = (function biosphere$core$run_sketch(host,p__14784){
var vec__14785 = p__14784;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14785,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14785,(1),null);
biosphere.core.biosphere = (function biosphere$core$run_sketch_$_biosphere(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__14788__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__14788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14789__i = 0, G__14789__a = new Array(arguments.length -  0);
while (G__14789__i < G__14789__a.length) {G__14789__a[G__14789__i] = arguments[G__14789__i + 0]; ++G__14789__i;}
  args = new cljs.core.IndexedSeq(G__14789__a,0,null);
} 
return G__14788__delegate.call(this,args);};
G__14788.cljs$lang$maxFixedArity = 0;
G__14788.cljs$lang$applyTo = (function (arglist__14790){
var args = cljs.core.seq(arglist__14790);
return G__14788__delegate(args);
});
G__14788.cljs$core$IFn$_invoke$arity$variadic = G__14788__delegate;
return G__14788;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(biosphere.core.update_state))?(function() { 
var G__14791__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.core.update_state,args);
};
var G__14791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14792__i = 0, G__14792__a = new Array(arguments.length -  0);
while (G__14792__i < G__14792__a.length) {G__14792__a[G__14792__i] = arguments[G__14792__i + 0]; ++G__14792__i;}
  args = new cljs.core.IndexedSeq(G__14792__a,0,null);
} 
return G__14791__delegate.call(this,args);};
G__14791.cljs$lang$maxFixedArity = 0;
G__14791.cljs$lang$applyTo = (function (arglist__14793){
var args = cljs.core.seq(arglist__14793);
return G__14791__delegate(args);
});
G__14791.cljs$core$IFn$_invoke$arity$variadic = G__14791__delegate;
return G__14791;
})()
:biosphere.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(biosphere.core.setup))?(function() { 
var G__14794__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.core.setup,args);
};
var G__14794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14795__i = 0, G__14795__a = new Array(arguments.length -  0);
while (G__14795__i < G__14795__a.length) {G__14795__a[G__14795__i] = arguments[G__14795__i + 0]; ++G__14795__i;}
  args = new cljs.core.IndexedSeq(G__14795__a,0,null);
} 
return G__14794__delegate.call(this,args);};
G__14794.cljs$lang$maxFixedArity = 0;
G__14794.cljs$lang$applyTo = (function (arglist__14796){
var args = cljs.core.seq(arglist__14796);
return G__14794__delegate(args);
});
G__14794.cljs$core$IFn$_invoke$arity$variadic = G__14794__delegate;
return G__14794;
})()
:biosphere.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(biosphere.draw.core.draw_state))?(function() { 
var G__14797__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.draw.core.draw_state,args);
};
var G__14797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14798__i = 0, G__14798__a = new Array(arguments.length -  0);
while (G__14798__i < G__14798__a.length) {G__14798__a[G__14798__i] = arguments[G__14798__i + 0]; ++G__14798__i;}
  args = new cljs.core.IndexedSeq(G__14798__a,0,null);
} 
return G__14797__delegate.call(this,args);};
G__14797.cljs$lang$maxFixedArity = 0;
G__14797.cljs$lang$applyTo = (function (arglist__14799){
var args = cljs.core.seq(arglist__14799);
return G__14797__delegate(args);
});
G__14797.cljs$core$IFn$_invoke$arity$variadic = G__14797__delegate;
return G__14797;
})()
:biosphere.draw.core.draw_state)], 0));
});
goog.exportSymbol('biosphere.core.biosphere', biosphere.core.biosphere);

if(cljs.core.truth_(cljs.core.some((function (p1__13038__13039__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13038__13039__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,biosphere.core.biosphere,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__14800__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__14800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14801__i = 0, G__14801__a = new Array(arguments.length -  0);
while (G__14801__i < G__14801__a.length) {G__14801__a[G__14801__i] = arguments[G__14801__i + 0]; ++G__14801__i;}
  args = new cljs.core.IndexedSeq(G__14801__a,0,null);
} 
return G__14800__delegate.call(this,args);};
G__14800.cljs$lang$maxFixedArity = 0;
G__14800.cljs$lang$applyTo = (function (arglist__14802){
var args = cljs.core.seq(arglist__14802);
return G__14800__delegate(args);
});
G__14800.cljs$core$IFn$_invoke$arity$variadic = G__14800__delegate;
return G__14800;
})()
:host)], null));
}
});
goog.exportSymbol('biosphere.core.run_sketch', biosphere.core.run_sketch);
