// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('biosphere.creature');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('biosphere.utils');
goog.require('biosphere.tiles');
goog.require('biosphere.config');
/**
 * Returns a creature at a random position, with a given `id`
 */
biosphere.creature.new_rand = (function biosphere$creature$new_rand(id){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$biosphere$creature_SLASH_id,id,cljs.core.cst$kw$biosphere$creature_SLASH_x,cljs.core.rand_int(biosphere.config.width),cljs.core.cst$kw$biosphere$creature_SLASH_y,cljs.core.rand_int(biosphere.config.height),cljs.core.cst$kw$biosphere$creature_SLASH_speed,biosphere.config.speed,cljs.core.cst$kw$biosphere$creature_SLASH_energy,(50),cljs.core.cst$kw$biosphere$creature_SLASH_direction,cljs.core.rand_int((360))], null);
});
/**
 * Get creature from `state` by `id`
 */
biosphere.creature.get_creature = (function biosphere$creature$get_creature(state,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$creatures,id], null));
});
/**
 * Turn `creature` by `amount` degrees. Positive is to the right, negative to the left.
 */
biosphere.creature.turn = (function biosphere$creature$turn(creature,amount){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(creature,cljs.core.cst$kw$biosphere$creature_SLASH_direction,(function (p1__13616_SHARP_){
return cljs.core.mod((p1__13616_SHARP_ + amount),(360));
}));
});
/**
 * Check if creature is on water.
 */
biosphere.creature.on_water_QMARK_ = (function biosphere$creature$on_water_QMARK_(state,p__13617){
var map__13618 = p__13617;
var map__13618__$1 = (((((!((map__13618 == null))))?(((((map__13618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13618):map__13618);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,cljs.core.cst$kw$biosphere$creature_SLASH_x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,cljs.core.cst$kw$biosphere$creature_SLASH_y);
var index = biosphere.tiles.pos__GT_id(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiles,index,cljs.core.cst$kw$tile_SLASH_water_QMARK_], null));
});
/**
 * Update the position of a creature based on their speed, direct and current position.
 */
biosphere.creature.move = (function biosphere$creature$move(p__13620){
var map__13621 = p__13620;
var map__13621__$1 = (((((!((map__13621 == null))))?(((((map__13621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13621):map__13621);
var creature = map__13621__$1;
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13621__$1,cljs.core.cst$kw$biosphere$creature_SLASH_speed);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13621__$1,cljs.core.cst$kw$biosphere$creature_SLASH_direction);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13621__$1,cljs.core.cst$kw$biosphere$creature_SLASH_x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13621__$1,cljs.core.cst$kw$biosphere$creature_SLASH_y);
var vec__13623 = biosphere.utils.polar__GT_cart(speed,quil.core.radians(direction));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13623,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13623,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(creature,cljs.core.cst$kw$biosphere$creature_SLASH_x,cljs.core.mod((x + dx),biosphere.config.width),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$biosphere$creature_SLASH_y,cljs.core.mod((y + dy),biosphere.config.height)], 0));
});
/**
 * Expend `energy` from `creature`.
 */
biosphere.creature.expend = (function biosphere$creature$expend(creature,energy){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(creature,cljs.core.cst$kw$biosphere$creature_SLASH_energy,cljs.core._,energy);
});
/**
 * Checks if the `creature` is dead
 */
biosphere.creature.dead_QMARK_ = (function biosphere$creature$dead_QMARK_(creature){
return ((0) >= cljs.core.cst$kw$biosphere$creature_SLASH_energy.cljs$core$IFn$_invoke$arity$1(creature));
});
biosphere.creature.update_creature = (function biosphere$creature$update_creature(state,creature_id){
var creature = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$creatures,creature_id], null));
if(biosphere.creature.dead_QMARK_(creature)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$creatures,cljs.core.dissoc,creature_id);
} else {
var on_water_QMARK_ = biosphere.creature.on_water_QMARK_(state,creature);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$creatures,creature_id], null),(function (){var G__13626 = creature;
var G__13626__$1 = (cljs.core.truth_(on_water_QMARK_)?biosphere.creature.expend(G__13626,(5)):G__13626);
var G__13626__$2 = (cljs.core.truth_(on_water_QMARK_)?biosphere.creature.turn(G__13626__$1,(180)):G__13626__$1);
var G__13626__$3 = (cljs.core.truth_(biosphere.utils.chance.cljs$core$IFn$_invoke$arity$1((30)))?biosphere.creature.turn(G__13626__$2,biosphere.utils.rand_int_between((-10),(10))):G__13626__$2);
var G__13626__$4 = biosphere.creature.move(G__13626__$3)
;
return biosphere.creature.expend(G__13626__$4,(-1));

})());
}
});
biosphere.creature.update_creatures = (function biosphere$creature$update_creatures(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(biosphere.creature.update_creature,state,cljs.core.keys(cljs.core.cst$kw$creatures.cljs$core$IFn$_invoke$arity$1(state)));
});
