// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('biosphere.tiles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('biosphere.config');
biosphere.tiles.noisiness = (100);
biosphere.tiles.gen_tile = (function biosphere$tiles$gen_tile(x,y,noise){
var water_level = biosphere.config.water_level;
var value = (function (){var G__12921 = (x / biosphere.tiles.noisiness);
var G__12922 = (y / biosphere.tiles.noisiness);
return (noise.cljs$core$IFn$_invoke$arity$2 ? noise.cljs$core$IFn$_invoke$arity$2(G__12921,G__12922) : noise.call(null,G__12921,G__12922));
})();
var water_QMARK_ = (value < water_level);
var humidity = ((water_QMARK_)?(0):((value - water_level) / ((1) - water_level)));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tile_SLASH_x,x,cljs.core.cst$kw$tile_SLASH_y,y,cljs.core.cst$kw$tile_SLASH_value,value,cljs.core.cst$kw$tile_SLASH_fertility,value,cljs.core.cst$kw$tile_SLASH_water_QMARK_,water_QMARK_], null);
});
/**
 * Get the vector index from a `[x y]` 2D world position.
 */
biosphere.tiles.pos__GT_id = (function biosphere$tiles$pos__GT_id(p__12923){
var vec__12924 = p__12923;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12924,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12924,(1),null);
var x__$1 = Math.floor(x);
var y__$1 = Math.floor(y);
return (x__$1 + (y__$1 * biosphere.config.width));
});
biosphere.tiles.update_tile = (function biosphere$tiles$update_tile(tile){
return tile;
});
biosphere.tiles.update_tiles = (function biosphere$tiles$update_tiles(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tiles,(function (tiles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(biosphere.tiles.update_tile,tiles);
}));
});
