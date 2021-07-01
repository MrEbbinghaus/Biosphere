// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.creature');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('biosphere.utils');
goog.require('biosphere.tiles');
goog.require('biosphere.config');
biosphere.creature.max_energy_intake = (1);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
biosphere.creature.Creature = (function (id,location,direction,speed,energy,max_energy,__meta,__extmap,__hash){
this.id = id;
this.location = location;
this.direction = direction;
this.speed = speed;
this.energy = energy;
this.max_energy = max_energy;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.creature.Creature.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(biosphere.creature.Creature.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k13933,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__13937 = k13933;
var G__13937__$1 = (((G__13937 instanceof cljs.core.Keyword))?G__13937.fqn:null);
switch (G__13937__$1) {
case "id":
return self__.id;

break;
case "location":
return self__.location;

break;
case "direction":
return self__.direction;

break;
case "speed":
return self__.speed;

break;
case "energy":
return self__.energy;

break;
case "max-energy":
return self__.max_energy;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13933,else__4475__auto__);

}
}));

(biosphere.creature.Creature.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__13938){
var vec__13939 = p__13938;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13939,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13939,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(biosphere.creature.Creature.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#biosphere.creature.Creature{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$location,self__.location],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$direction,self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$speed,self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$energy,self__.energy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_energy,self__.max_energy],null))], null),self__.__extmap));
}));

(biosphere.creature.Creature.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13932){
var self__ = this;
var G__13932__$1 = this;
return (new cljs.core.RecordIter((0),G__13932__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$location,cljs.core.cst$kw$direction,cljs.core.cst$kw$speed,cljs.core.cst$kw$energy,cljs.core.cst$kw$max_DASH_energy], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(biosphere.creature.Creature.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(biosphere.creature.Creature.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,self__.speed,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.creature.Creature.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(biosphere.creature.Creature.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__13942 = (function (coll__4469__auto__){
return (-1734505289 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__13942(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(biosphere.creature.Creature.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13934,other13935){
var self__ = this;
var this13934__$1 = this;
return (((!((other13935 == null)))) && ((((this13934__$1.constructor === other13935.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.id,other13935.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.location,other13935.location)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.direction,other13935.direction)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.speed,other13935.speed)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.energy,other13935.energy)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.max_energy,other13935.max_energy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13934__$1.__extmap,other13935.__extmap)))))))))))))))));
}));

(biosphere.creature.Creature.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$speed,null,cljs.core.cst$kw$energy,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$max_DASH_energy,null,cljs.core.cst$kw$location,null,cljs.core.cst$kw$direction,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,self__.speed,self__.energy,self__.max_energy,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(biosphere.creature.Creature.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k13933){
var self__ = this;
var this__4479__auto____$1 = this;
var G__13943 = k13933;
var G__13943__$1 = (((G__13943 instanceof cljs.core.Keyword))?G__13943.fqn:null);
switch (G__13943__$1) {
case "id":
case "location":
case "direction":
case "speed":
case "energy":
case "max-energy":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k13933);

}
}));

(biosphere.creature.Creature.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__13932){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__13944 = cljs.core.keyword_identical_QMARK_;
var expr__13945 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__13947 = cljs.core.cst$kw$id;
var G__13948 = expr__13945;
return (pred__13944.cljs$core$IFn$_invoke$arity$2 ? pred__13944.cljs$core$IFn$_invoke$arity$2(G__13947,G__13948) : pred__13944.call(null,G__13947,G__13948));
})())){
return (new biosphere.creature.Creature(G__13932,self__.location,self__.direction,self__.speed,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13949 = cljs.core.cst$kw$location;
var G__13950 = expr__13945;
return (pred__13944.cljs$core$IFn$_invoke$arity$2 ? pred__13944.cljs$core$IFn$_invoke$arity$2(G__13949,G__13950) : pred__13944.call(null,G__13949,G__13950));
})())){
return (new biosphere.creature.Creature(self__.id,G__13932,self__.direction,self__.speed,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13951 = cljs.core.cst$kw$direction;
var G__13952 = expr__13945;
return (pred__13944.cljs$core$IFn$_invoke$arity$2 ? pred__13944.cljs$core$IFn$_invoke$arity$2(G__13951,G__13952) : pred__13944.call(null,G__13951,G__13952));
})())){
return (new biosphere.creature.Creature(self__.id,self__.location,G__13932,self__.speed,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13953 = cljs.core.cst$kw$speed;
var G__13954 = expr__13945;
return (pred__13944.cljs$core$IFn$_invoke$arity$2 ? pred__13944.cljs$core$IFn$_invoke$arity$2(G__13953,G__13954) : pred__13944.call(null,G__13953,G__13954));
})())){
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,G__13932,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13955 = cljs.core.cst$kw$energy;
var G__13956 = expr__13945;
return (pred__13944.cljs$core$IFn$_invoke$arity$2 ? pred__13944.cljs$core$IFn$_invoke$arity$2(G__13955,G__13956) : pred__13944.call(null,G__13955,G__13956));
})())){
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,self__.speed,G__13932,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13957 = cljs.core.cst$kw$max_DASH_energy;
var G__13958 = expr__13945;
return (pred__13944.cljs$core$IFn$_invoke$arity$2 ? pred__13944.cljs$core$IFn$_invoke$arity$2(G__13957,G__13958) : pred__13944.call(null,G__13957,G__13958));
})())){
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,self__.speed,self__.energy,G__13932,self__.__meta,self__.__extmap,null));
} else {
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,self__.speed,self__.energy,self__.max_energy,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__13932),null));
}
}
}
}
}
}
}));

(biosphere.creature.Creature.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$id,self__.id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$location,self__.location,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$direction,self__.direction,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$speed,self__.speed,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$energy,self__.energy,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$max_DASH_energy,self__.max_energy,null))], null),self__.__extmap));
}));

(biosphere.creature.Creature.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__13932){
var self__ = this;
var this__4471__auto____$1 = this;
return (new biosphere.creature.Creature(self__.id,self__.location,self__.direction,self__.speed,self__.energy,self__.max_energy,G__13932,self__.__extmap,self__.__hash));
}));

(biosphere.creature.Creature.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(biosphere.creature.Creature.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$location,cljs.core.cst$sym$direction,cljs.core.cst$sym$speed,cljs.core.cst$sym$energy,cljs.core.cst$sym$max_DASH_energy], null);
}));

(biosphere.creature.Creature.cljs$lang$type = true);

(biosphere.creature.Creature.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"biosphere.creature/Creature",null,(1),null));
}));

(biosphere.creature.Creature.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"biosphere.creature/Creature");
}));

/**
 * Positional factory function for biosphere.creature/Creature.
 */
biosphere.creature.__GT_Creature = (function biosphere$creature$__GT_Creature(id,location,direction,speed,energy,max_energy){
return (new biosphere.creature.Creature(id,location,direction,speed,energy,max_energy,null,null,null));
});

/**
 * Factory function for biosphere.creature/Creature, taking a map of keywords to field values.
 */
biosphere.creature.map__GT_Creature = (function biosphere$creature$map__GT_Creature(G__13936){
var extmap__4512__auto__ = (function (){var G__13959 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13936,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$location,cljs.core.cst$kw$direction,cljs.core.cst$kw$speed,cljs.core.cst$kw$energy,cljs.core.cst$kw$max_DASH_energy], 0));
if(cljs.core.record_QMARK_(G__13936)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13959);
} else {
return G__13959;
}
})();
return (new biosphere.creature.Creature(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__13936),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(G__13936),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(G__13936),cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(G__13936),cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(G__13936),cljs.core.cst$kw$max_DASH_energy.cljs$core$IFn$_invoke$arity$1(G__13936),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Get creature from `state` by `id`
 */
biosphere.creature.fetch = (function biosphere$creature$fetch(state,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$creatures,id], null));
});
/**
 * Turn `creature` by `amount` degrees. Positive is to the right, negative to the left.
 */
biosphere.creature.turn = (function biosphere$creature$turn(creature,amount){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(creature,cljs.core.cst$kw$direction,(function (p1__13962_SHARP_){
return cljs.core.mod((p1__13962_SHARP_ + amount),(360));
}));
});
biosphere.creature.calculate_v2movement = (function biosphere$creature$calculate_v2movement(p__13963){
var map__13964 = p__13963;
var map__13964__$1 = cljs.core.__destructure_map(map__13964);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13964__$1,cljs.core.cst$kw$speed);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13964__$1,cljs.core.cst$kw$direction);
return biosphere.utils.polar__GT_cart(speed,quil.core.radians(direction));
});
biosphere.creature.update_v2movement = (function biosphere$creature$update_v2movement(creature){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(creature,cljs.core.cst$kw$v2movement,biosphere.creature.calculate_v2movement(creature));
});
/**
 * Check if creature is on water.
 */
biosphere.creature.on_water_QMARK_ = (function biosphere$creature$on_water_QMARK_(state,p__13965){
var map__13966 = p__13965;
var map__13966__$1 = cljs.core.__destructure_map(map__13966);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13966__$1,cljs.core.cst$kw$location);
var index = biosphere.tiles.pos__GT_id(location);
return biosphere.tiles.water_QMARK_(state,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiles,index], null)));
});
biosphere.creature.one_step_ahead = (function biosphere$creature$one_step_ahead(p__13967){
var map__13968 = p__13967;
var map__13968__$1 = cljs.core.__destructure_map(map__13968);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13968__$1,cljs.core.cst$kw$speed);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13968__$1,cljs.core.cst$kw$direction);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13968__$1,cljs.core.cst$kw$location);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,biosphere.utils.polar__GT_cart(speed,quil.core.radians(direction)),location);
});
/**
 * Update the position of a creature based on their speed, direct and current position.
 */
biosphere.creature.move = (function biosphere$creature$move(creature){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(creature,cljs.core.cst$kw$location,biosphere.creature.one_step_ahead(creature));
});
/**
 * Expend `energy` from `creature`.
 */
biosphere.creature.expend = (function biosphere$creature$expend(creature,expense){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(creature,cljs.core.cst$kw$energy,cljs.core._,expense);
});
/**
 * Checks if the `creature` is dead
 */
biosphere.creature.dead_QMARK_ = (function biosphere$creature$dead_QMARK_(creature){
return ((0) >= cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(creature));
});
biosphere.creature.dispose = (function biosphere$creature$dispose(state,p__13969){
var map__13970 = p__13969;
var map__13970__$1 = cljs.core.__destructure_map(map__13970);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13970__$1,cljs.core.cst$kw$id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$creatures,cljs.core.dissoc,id);
});
biosphere.creature.current_tile = (function biosphere$creature$current_tile(state,creature){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiles,biosphere.tiles.pos__GT_id(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(creature))], null));
});
biosphere.creature.eat = (function biosphere$creature$eat(state,p__13971,amount){
var map__13972 = p__13971;
var map__13972__$1 = cljs.core.__destructure_map(map__13972);
var creature = map__13972__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13972__$1,cljs.core.cst$kw$id);
var max_energy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13972__$1,cljs.core.cst$kw$max_DASH_energy);
var map__13973 = biosphere.creature.current_tile(state,creature);
var map__13973__$1 = cljs.core.__destructure_map(map__13973);
var energy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13973__$1,cljs.core.cst$kw$energy);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13973__$1,cljs.core.cst$kw$location);
if((energy > (0))){
var amount_to_eat = (function (){var x__4309__auto__ = (function (){var x__4309__auto__ = energy;
var y__4310__auto__ = amount;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var y__4310__auto__ = (max_energy - cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(creature));
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$creatures,id,cljs.core.cst$kw$energy], null),cljs.core._PLUS_,amount_to_eat),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiles,location,cljs.core.cst$kw$energy], null),cljs.core._,amount_to_eat),cljs.core.cst$kw$dirty_DASH_tiles,cljs.core.conj,location);
} else {
return state;
}
});
biosphere.creature.tick_on_water = (function biosphere$creature$tick_on_water(creature,state){
if(biosphere.creature.on_water_QMARK_(state,creature)){
return biosphere.creature.turn(biosphere.creature.expend(creature,(5)),(180));
} else {
return creature;
}
});
biosphere.creature.whats_ahead = (function biosphere$creature$whats_ahead(state,creature){
var G__13974 = cljs.core.PersistentHashSet.EMPTY;
var G__13974__$1 = ((biosphere.creature.on_water_QMARK_(state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$location,biosphere.creature.one_step_ahead(creature)], null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13974,cljs.core.cst$kw$water):G__13974);
if((!(biosphere.tiles.in_bounds_QMARK_(state,biosphere.creature.one_step_ahead(creature))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13974__$1,cljs.core.cst$kw$out_DASH_of_DASH_bounds);
} else {
return G__13974__$1;
}
});
biosphere.creature.tick = (function biosphere$creature$tick(p__13975,old_state,new_state){
var map__13976 = p__13975;
var map__13976__$1 = cljs.core.__destructure_map(map__13976);
var creature = map__13976__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13976__$1,cljs.core.cst$kw$id);
var new_creature = (function (){var G__13977 = creature;
var G__13977__$1 = biosphere.creature.tick_on_water(G__13977,old_state)
;
var G__13977__$2 = (cljs.core.truth_(biosphere.utils.chance.cljs$core$IFn$_invoke$arity$1((30)))?biosphere.creature.turn(G__13977__$1,biosphere.utils.rand_int_between((-10),(10))):G__13977__$1);
var G__13977__$3 = (((!(biosphere.tiles.in_bounds_QMARK_(old_state,biosphere.creature.one_step_ahead(creature)))))?biosphere.creature.turn(G__13977__$2,(180)):G__13977__$2);
return biosphere.creature.move(G__13977__$3);

})();
if((id === (0))){
quil.core.print_every_n_millisec.cljs$core$IFn$_invoke$arity$variadic((1000),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [creature,new_creature], null)], 0));
} else {
}

if(biosphere.creature.dead_QMARK_(new_creature)){
return biosphere.creature.dispose(new_state,new_creature);
} else {
return biosphere.creature.eat(cljs.core.assoc_in(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$creatures,id], null),new_creature),new_creature,0.2);
}
});
biosphere.creature.update_creatures = (function biosphere$creature$update_creatures(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_state,creature){
return biosphere.creature.tick(creature,state,new_state);
}),state,cljs.core.vals(cljs.core.cst$kw$creatures.cljs$core$IFn$_invoke$arity$1(state)));
});
biosphere.creature.init_creatures = (function biosphere$creature$init_creatures(p__13978){
var map__13979 = p__13978;
var map__13979__$1 = cljs.core.__destructure_map(map__13979);
var state = map__13979__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13979__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13979__$1,cljs.core.cst$kw$height);
var no_of_creatures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13979__$1,cljs.core.cst$kw$no_DASH_of_DASH_creatures);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13979__$1,cljs.core.cst$kw$speed);
var new_creatures = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function biosphere$creature$init_creatures_$_iter__13980(s__13981){
return (new cljs.core.LazySeq(null,(function (){
var s__13981__$1 = s__13981;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13981__$1);
if(temp__5753__auto__){
var s__13981__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13981__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__13981__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__13983 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__13982 = (0);
while(true){
if((i__13982 < size__4621__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__13982);
var location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(width),cljs.core.rand_int(height)], null);
var direction = cljs.core.rand_int((360));
var new_creature = biosphere.creature.__GT_Creature(id,location,direction,speed,(50),(200));
if((!(biosphere.creature.on_water_QMARK_(state,new_creature)))){
cljs.core.chunk_append(b__13983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new_creature], null));

var G__13984 = (i__13982 + (1));
i__13982 = G__13984;
continue;
} else {
var G__13985 = (i__13982 + (1));
i__13982 = G__13985;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13983),biosphere$creature$init_creatures_$_iter__13980(cljs.core.chunk_rest(s__13981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13983),null);
}
} else {
var id = cljs.core.first(s__13981__$2);
var location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(width),cljs.core.rand_int(height)], null);
var direction = cljs.core.rand_int((360));
var new_creature = biosphere.creature.__GT_Creature(id,location,direction,speed,(50),(200));
if((!(biosphere.creature.on_water_QMARK_(state,new_creature)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new_creature], null),biosphere$creature$init_creatures_$_iter__13980(cljs.core.rest(s__13981__$2)));
} else {
var G__13986 = cljs.core.rest(s__13981__$2);
s__13981__$1 = G__13986;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(no_of_creatures));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$creatures,new_creatures);
});
