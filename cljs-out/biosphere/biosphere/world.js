// Compiled by ClojureScript 1.10.597 {}
goog.provide('biosphere.world');
goog.require('cljs.core');
goog.require('biosphere.config');
goog.require('biosphere.utils');
biosphere.world.noisiness = (100);
biosphere.world.gen_tile = (function biosphere$world$gen_tile(x,y,noise){
var water_level = biosphere.config.water_level;
var value = noise.call(null,(x / biosphere.world.noisiness),(y / biosphere.world.noisiness));
var water_QMARK_ = (value < water_level);
var humidity = ((water_QMARK_)?(0):((value - water_level) / ((1) - water_level)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("tile","x","tile/x",2085874255),x,new cljs.core.Keyword("tile","y","tile/y",-1753826802),y,new cljs.core.Keyword("tile","value","tile/value",310791195),value,new cljs.core.Keyword("tile","humidity","tile/humidity",-2044063614),humidity,new cljs.core.Keyword("tile","water?","tile/water?",880484391),water_QMARK_], null);
});
biosphere.world.pos__GT_id = (function biosphere$world$pos__GT_id(p__48555){
var vec__48556 = p__48555;
var x = cljs.core.nth.call(null,vec__48556,(0),null);
var y = cljs.core.nth.call(null,vec__48556,(1),null);
var x__$1 = Math.floor(x);
var y__$1 = Math.floor(y);
return (x__$1 + (y__$1 * biosphere.config.width));
});
biosphere.world.update_tile = (function biosphere$world$update_tile(tile){
return tile;
});
biosphere.world.update_tiles = (function biosphere$world$update_tiles(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (tiles){
return cljs.core.mapv.call(null,biosphere.world.update_tile,tiles);
}));
});

//# sourceMappingURL=world.js.map
