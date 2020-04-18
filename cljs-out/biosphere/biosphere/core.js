// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
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
biosphere.core.gen_tiles = (function biosphere$core$gen_tiles(){
return cljs.core.vec((function (){var iter__4582__auto__ = (function biosphere$core$gen_tiles_$_iter__13629(s__13630){
return (new cljs.core.LazySeq(null,(function (){
var s__13630__$1 = s__13630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13630__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__13630__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function biosphere$core$gen_tiles_$_iter__13629_$_iter__13631(s__13632){
return (new cljs.core.LazySeq(null,((function (s__13630__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13632__$1 = s__13632;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13632__$1);
if(temp__5735__auto____$1){
var s__13632__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13632__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__13632__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__13634 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__13633 = (0);
while(true){
if((i__13633 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__13633);
cljs.core.chunk_append(b__13634,biosphere.tiles.gen_tile(x,y,quil.core.noise));

var G__13635 = (i__13633 + (1));
i__13633 = G__13635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13634),biosphere$core$gen_tiles_$_iter__13629_$_iter__13631(cljs.core.chunk_rest(s__13632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13634),null);
}
} else {
var x = cljs.core.first(s__13632__$2);
return cljs.core.cons(biosphere.tiles.gen_tile(x,y,quil.core.noise),biosphere$core$gen_tiles_$_iter__13629_$_iter__13631(cljs.core.rest(s__13632__$2)));
}
} else {
return null;
}
break;
}
});})(s__13630__$1,y,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13630__$1,y,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(biosphere.config.width)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,biosphere$core$gen_tiles_$_iter__13629(cljs.core.rest(s__13630__$1)));
} else {
var G__13636 = cljs.core.rest(s__13630__$1);
s__13630__$1 = G__13636;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(biosphere.config.height));
})());
});
biosphere.core.get_query = (function biosphere$core$get_query(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function biosphere$core$get_query_$_iter__13637(s__13638){
return (new cljs.core.LazySeq(null,(function (){
var s__13638__$1 = s__13638;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13638__$1);
if(temp__5735__auto__){
var s__13638__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13638__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__13638__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__13640 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__13639 = (0);
while(true){
if((i__13639 < size__4581__auto__)){
var kv_vec = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__13639);
var vec__13641 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(kv_vec,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641,(1),null);
cljs.core.chunk_append(b__13640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null));

var G__13647 = (i__13639 + (1));
i__13639 = G__13647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13640),biosphere$core$get_query_$_iter__13637(cljs.core.chunk_rest(s__13638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13640),null);
}
} else {
var kv_vec = cljs.core.first(s__13638__$2);
var vec__13644 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(kv_vec,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null),biosphere$core$get_query_$_iter__13637(cljs.core.rest(s__13638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2((new goog.Uri(window.location.href)).getDecodedQuery(),/&/));
})());
});
biosphere.core.gen_map_seed = (function biosphere$core$gen_map_seed(){
return cljs.core.rand_int((1000));
});
biosphere.core.setup = (function biosphere$core$setup(){
var seed = (function (){var or__4185__auto__ = cljs.core.cst$kw$seed.cljs$core$IFn$_invoke$arity$1(biosphere.core.get_query());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return biosphere.core.gen_map_seed();
}
})();
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.noise_seed(seed);

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$resolution,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),quil.core.height()], null),cljs.core.cst$kw$navigation_DASH_2d,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zoom,(1)], null),cljs.core.cst$kw$seed,seed,cljs.core.cst$kw$tiles,biosphere.core.gen_tiles(),cljs.core.cst$kw$tile_DASH_graphic,biosphere.draw.tile.make_tile_graphics(quil.core.width(),quil.core.height()),cljs.core.cst$kw$creature_DASH_graphic,biosphere.draw.creature.make_graphic(quil.core.width(),quil.core.height()),cljs.core.cst$kw$creatures,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function biosphere$core$setup_$_iter__13648(s__13649){
return (new cljs.core.LazySeq(null,(function (){
var s__13649__$1 = s__13649;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13649__$1);
if(temp__5735__auto__){
var s__13649__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13649__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__13649__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__13651 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__13650 = (0);
while(true){
if((i__13650 < size__4581__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__13650);
cljs.core.chunk_append(b__13651,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,biosphere.creature.new_rand(id)], null));

var G__13652 = (i__13650 + (1));
i__13650 = G__13652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13651),biosphere$core$setup_$_iter__13648(cljs.core.chunk_rest(s__13649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13651),null);
}
} else {
var id = cljs.core.first(s__13649__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,biosphere.creature.new_rand(id)], null),biosphere$core$setup_$_iter__13648(cljs.core.rest(s__13649__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(biosphere.config.no_of_creatures));
})())], null);
});
biosphere.core.keep_zoom_in_bounds = (function biosphere$core$keep_zoom_in_bounds(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$zoom], null),quil.core.constrain,(1),(2));
});
biosphere.core.update_resolution = (function biosphere$core$update_resolution(p__13653){
var map__13654 = p__13653;
var map__13654__$1 = (((((!((map__13654 == null))))?(((((map__13654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13654):map__13654);
var state = map__13654__$1;
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13654__$1,cljs.core.cst$kw$resolution);
var current_res = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biosphere.utils.floor_to(quil.core.width(),biosphere.config.width),biosphere.utils.floor_to(quil.core.height(),biosphere.config.height)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_res,resolution)){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tile_DASH_graphic,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.draw.tile.make_tile_graphics,current_res)),cljs.core.cst$kw$creature_DASH_graphic,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.draw.creature.make_graphic,current_res)),cljs.core.cst$kw$resolution,current_res);
}
});
biosphere.core.update_state = (function biosphere$core$update_state(state){
return biosphere.creature.update_creatures(biosphere.tiles.update_tiles(biosphere.core.keep_zoom_in_bounds(biosphere.core.update_resolution(state))));
});
biosphere.core.run_sketch = (function biosphere$core$run_sketch(host,p__13656){
var vec__13657 = p__13656;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13657,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13657,(1),null);
biosphere.core.biosphere = (function biosphere$core$run_sketch_$_biosphere(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(host))?(function() { 
var G__13660__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__13660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13661__i = 0, G__13661__a = new Array(arguments.length -  0);
while (G__13661__i < G__13661__a.length) {G__13661__a[G__13661__i] = arguments[G__13661__i + 0]; ++G__13661__i;}
  args = new cljs.core.IndexedSeq(G__13661__a,0,null);
} 
return G__13660__delegate.call(this,args);};
G__13660.cljs$lang$maxFixedArity = 0;
G__13660.cljs$lang$applyTo = (function (arglist__13662){
var args = cljs.core.seq(arglist__13662);
return G__13660__delegate(args);
});
G__13660.cljs$core$IFn$_invoke$arity$variadic = G__13660__delegate;
return G__13660;
})()
:host),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(biosphere.core.update_state))?(function() { 
var G__13663__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.core.update_state,args);
};
var G__13663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13664__i = 0, G__13664__a = new Array(arguments.length -  0);
while (G__13664__i < G__13664__a.length) {G__13664__a[G__13664__i] = arguments[G__13664__i + 0]; ++G__13664__i;}
  args = new cljs.core.IndexedSeq(G__13664__a,0,null);
} 
return G__13663__delegate.call(this,args);};
G__13663.cljs$lang$maxFixedArity = 0;
G__13663.cljs$lang$applyTo = (function (arglist__13665){
var args = cljs.core.seq(arglist__13665);
return G__13663__delegate(args);
});
G__13663.cljs$core$IFn$_invoke$arity$variadic = G__13663__delegate;
return G__13663;
})()
:biosphere.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(biosphere.core.setup))?(function() { 
var G__13666__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.core.setup,args);
};
var G__13666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13667__i = 0, G__13667__a = new Array(arguments.length -  0);
while (G__13667__i < G__13667__a.length) {G__13667__a[G__13667__i] = arguments[G__13667__i + 0]; ++G__13667__i;}
  args = new cljs.core.IndexedSeq(G__13667__a,0,null);
} 
return G__13666__delegate.call(this,args);};
G__13666.cljs$lang$maxFixedArity = 0;
G__13666.cljs$lang$applyTo = (function (arglist__13668){
var args = cljs.core.seq(arglist__13668);
return G__13666__delegate(args);
});
G__13666.cljs$core$IFn$_invoke$arity$variadic = G__13666__delegate;
return G__13666;
})()
:biosphere.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(biosphere.draw.core.draw_state))?(function() { 
var G__13669__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(biosphere.draw.core.draw_state,args);
};
var G__13669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13670__i = 0, G__13670__a = new Array(arguments.length -  0);
while (G__13670__i < G__13670__a.length) {G__13670__a[G__13670__i] = arguments[G__13670__i + 0]; ++G__13670__i;}
  args = new cljs.core.IndexedSeq(G__13670__a,0,null);
} 
return G__13669__delegate.call(this,args);};
G__13669.cljs$lang$maxFixedArity = 0;
G__13669.cljs$lang$applyTo = (function (arglist__13671){
var args = cljs.core.seq(arglist__13671);
return G__13669__delegate(args);
});
G__13669.cljs$core$IFn$_invoke$arity$variadic = G__13669__delegate;
return G__13669;
})()
:biosphere.draw.core.draw_state)], 0));
});
goog.exportSymbol('biosphere.core.biosphere', biosphere.core.biosphere);

if(cljs.core.truth_(cljs.core.some((function (p1__12497__12498__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__12497__12498__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,biosphere.core.biosphere,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(host))?(function() { 
var G__13672__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(host,args);
};
var G__13672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13673__i = 0, G__13673__a = new Array(arguments.length -  0);
while (G__13673__i < G__13673__a.length) {G__13673__a[G__13673__i] = arguments[G__13673__i + 0]; ++G__13673__i;}
  args = new cljs.core.IndexedSeq(G__13673__a,0,null);
} 
return G__13672__delegate.call(this,args);};
G__13672.cljs$lang$maxFixedArity = 0;
G__13672.cljs$lang$applyTo = (function (arglist__13674){
var args = cljs.core.seq(arglist__13674);
return G__13672__delegate(args);
});
G__13672.cljs$core$IFn$_invoke$arity$variadic = G__13672__delegate;
return G__13672;
})()
:host)], null));
}
});
goog.exportSymbol('biosphere.core.run_sketch', biosphere.core.run_sketch);
