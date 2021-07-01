// Compiled by ClojureScript 1.10.597 {}
goog.provide('biosphere.components');
goog.require('cljs.core');

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
biosphere.components.Creature = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.components.Creature.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(biosphere.components.Creature.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11034,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11038 = k11034;
switch (G__11038) {
default:
return cljs.core.get.call(null,self__.__extmap,k11034,else__4442__auto__);

}
}));

(biosphere.components.Creature.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__11039){
var vec__11040 = p__11039;
var k__4462__auto__ = cljs.core.nth.call(null,vec__11040,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__11040,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(biosphere.components.Creature.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#biosphere.components.Creature{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(biosphere.components.Creature.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11033){
var self__ = this;
var G__11033__$1 = this;
return (new cljs.core.RecordIter((0),G__11033__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(biosphere.components.Creature.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(biosphere.components.Creature.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new biosphere.components.Creature(self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.components.Creature.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(biosphere.components.Creature.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (607210692 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(biosphere.components.Creature.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11035,other11036){
var self__ = this;
var this11035__$1 = this;
return (((!((other11036 == null)))) && ((this11035__$1.constructor === other11036.constructor)) && (cljs.core._EQ_.call(null,this11035__$1.__extmap,other11036.__extmap)));
}));

(biosphere.components.Creature.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new biosphere.components.Creature(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(biosphere.components.Creature.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11033){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11043 = cljs.core.keyword_identical_QMARK_;
var expr__11044 = k__4447__auto__;
return (new biosphere.components.Creature(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__11033),null));
}));

(biosphere.components.Creature.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(biosphere.components.Creature.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11033){
var self__ = this;
var this__4438__auto____$1 = this;
return (new biosphere.components.Creature(G__11033,self__.__extmap,self__.__hash));
}));

(biosphere.components.Creature.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(biosphere.components.Creature.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(biosphere.components.Creature.cljs$lang$type = true);

(biosphere.components.Creature.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"biosphere.components/Creature",null,(1),null));
}));

(biosphere.components.Creature.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"biosphere.components/Creature");
}));

/**
 * Positional factory function for biosphere.components/Creature.
 */
biosphere.components.__GT_Creature = (function biosphere$components$__GT_Creature(){
return (new biosphere.components.Creature(null,null,null));
});

/**
 * Factory function for biosphere.components/Creature, taking a map of keywords to field values.
 */
biosphere.components.map__GT_Creature = (function biosphere$components$map__GT_Creature(G__11037){
var extmap__4478__auto__ = (function (){var G__11046 = cljs.core.dissoc.call(null,G__11037);
if(cljs.core.record_QMARK_.call(null,G__11037)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11046);
} else {
return G__11046;
}
})();
return (new biosphere.components.Creature(null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});


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
biosphere.components.Tile = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.components.Tile.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(biosphere.components.Tile.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11049,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11053 = k11049;
switch (G__11053) {
default:
return cljs.core.get.call(null,self__.__extmap,k11049,else__4442__auto__);

}
}));

(biosphere.components.Tile.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__11054){
var vec__11055 = p__11054;
var k__4462__auto__ = cljs.core.nth.call(null,vec__11055,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__11055,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(biosphere.components.Tile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#biosphere.components.Tile{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(biosphere.components.Tile.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11048){
var self__ = this;
var G__11048__$1 = this;
return (new cljs.core.RecordIter((0),G__11048__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(biosphere.components.Tile.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(biosphere.components.Tile.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new biosphere.components.Tile(self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.components.Tile.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(biosphere.components.Tile.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1263494332 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(biosphere.components.Tile.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11050,other11051){
var self__ = this;
var this11050__$1 = this;
return (((!((other11051 == null)))) && ((this11050__$1.constructor === other11051.constructor)) && (cljs.core._EQ_.call(null,this11050__$1.__extmap,other11051.__extmap)));
}));

(biosphere.components.Tile.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new biosphere.components.Tile(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(biosphere.components.Tile.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11048){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11058 = cljs.core.keyword_identical_QMARK_;
var expr__11059 = k__4447__auto__;
return (new biosphere.components.Tile(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__11048),null));
}));

(biosphere.components.Tile.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(biosphere.components.Tile.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11048){
var self__ = this;
var this__4438__auto____$1 = this;
return (new biosphere.components.Tile(G__11048,self__.__extmap,self__.__hash));
}));

(biosphere.components.Tile.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(biosphere.components.Tile.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(biosphere.components.Tile.cljs$lang$type = true);

(biosphere.components.Tile.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"biosphere.components/Tile",null,(1),null));
}));

(biosphere.components.Tile.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"biosphere.components/Tile");
}));

/**
 * Positional factory function for biosphere.components/Tile.
 */
biosphere.components.__GT_Tile = (function biosphere$components$__GT_Tile(){
return (new biosphere.components.Tile(null,null,null));
});

/**
 * Factory function for biosphere.components/Tile, taking a map of keywords to field values.
 */
biosphere.components.map__GT_Tile = (function biosphere$components$map__GT_Tile(G__11052){
var extmap__4478__auto__ = (function (){var G__11061 = cljs.core.dissoc.call(null,G__11052);
if(cljs.core.record_QMARK_.call(null,G__11052)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11061);
} else {
return G__11061;
}
})();
return (new biosphere.components.Tile(null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});


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
biosphere.components.Position = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.components.Position.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(biosphere.components.Position.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11064,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11068 = k11064;
var G__11068__$1 = (((G__11068 instanceof cljs.core.Keyword))?G__11068.fqn:null);
switch (G__11068__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11064,else__4442__auto__);

}
}));

(biosphere.components.Position.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__11069){
var vec__11070 = p__11069;
var k__4462__auto__ = cljs.core.nth.call(null,vec__11070,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__11070,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(biosphere.components.Position.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#biosphere.components.Position{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(biosphere.components.Position.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11063){
var self__ = this;
var G__11063__$1 = this;
return (new cljs.core.RecordIter((0),G__11063__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(biosphere.components.Position.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(biosphere.components.Position.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new biosphere.components.Position(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.components.Position.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(biosphere.components.Position.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (589074128 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(biosphere.components.Position.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11065,other11066){
var self__ = this;
var this11065__$1 = this;
return (((!((other11066 == null)))) && ((this11065__$1.constructor === other11066.constructor)) && (cljs.core._EQ_.call(null,this11065__$1.x,other11066.x)) && (cljs.core._EQ_.call(null,this11065__$1.y,other11066.y)) && (cljs.core._EQ_.call(null,this11065__$1.__extmap,other11066.__extmap)));
}));

(biosphere.components.Position.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new biosphere.components.Position(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(biosphere.components.Position.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11063){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11073 = cljs.core.keyword_identical_QMARK_;
var expr__11074 = k__4447__auto__;
if(cljs.core.truth_(pred__11073.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__11074))){
return (new biosphere.components.Position(G__11063,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11073.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__11074))){
return (new biosphere.components.Position(self__.x,G__11063,self__.__meta,self__.__extmap,null));
} else {
return (new biosphere.components.Position(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__11063),null));
}
}
}));

(biosphere.components.Position.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(biosphere.components.Position.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11063){
var self__ = this;
var this__4438__auto____$1 = this;
return (new biosphere.components.Position(self__.x,self__.y,G__11063,self__.__extmap,self__.__hash));
}));

(biosphere.components.Position.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(biosphere.components.Position.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(biosphere.components.Position.cljs$lang$type = true);

(biosphere.components.Position.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"biosphere.components/Position",null,(1),null));
}));

(biosphere.components.Position.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"biosphere.components/Position");
}));

/**
 * Positional factory function for biosphere.components/Position.
 */
biosphere.components.__GT_Position = (function biosphere$components$__GT_Position(x,y){
return (new biosphere.components.Position(x,y,null,null,null));
});

/**
 * Factory function for biosphere.components/Position, taking a map of keywords to field values.
 */
biosphere.components.map__GT_Position = (function biosphere$components$map__GT_Position(G__11067){
var extmap__4478__auto__ = (function (){var G__11076 = cljs.core.dissoc.call(null,G__11067,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.record_QMARK_.call(null,G__11067)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11076);
} else {
return G__11076;
}
})();
return (new biosphere.components.Position(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__11067),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__11067),null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});


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
biosphere.components.Velocity = (function (direction,speed,__meta,__extmap,__hash){
this.direction = direction;
this.speed = speed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.components.Velocity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(biosphere.components.Velocity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k11079,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__11083 = k11079;
var G__11083__$1 = (((G__11083 instanceof cljs.core.Keyword))?G__11083.fqn:null);
switch (G__11083__$1) {
case "direction":
return self__.direction;

break;
case "speed":
return self__.speed;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11079,else__4442__auto__);

}
}));

(biosphere.components.Velocity.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__11084){
var vec__11085 = p__11084;
var k__4462__auto__ = cljs.core.nth.call(null,vec__11085,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__11085,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(biosphere.components.Velocity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#biosphere.components.Velocity{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
}));

(biosphere.components.Velocity.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11078){
var self__ = this;
var G__11078__$1 = this;
return (new cljs.core.RecordIter((0),G__11078__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(biosphere.components.Velocity.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(biosphere.components.Velocity.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new biosphere.components.Velocity(self__.direction,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.components.Velocity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(biosphere.components.Velocity.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-573098199 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(biosphere.components.Velocity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11080,other11081){
var self__ = this;
var this11080__$1 = this;
return (((!((other11081 == null)))) && ((this11080__$1.constructor === other11081.constructor)) && (cljs.core._EQ_.call(null,this11080__$1.direction,other11081.direction)) && (cljs.core._EQ_.call(null,this11080__$1.speed,other11081.speed)) && (cljs.core._EQ_.call(null,this11080__$1.__extmap,other11081.__extmap)));
}));

(biosphere.components.Velocity.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new biosphere.components.Velocity(self__.direction,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(biosphere.components.Velocity.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__11078){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__11088 = cljs.core.keyword_identical_QMARK_;
var expr__11089 = k__4447__auto__;
if(cljs.core.truth_(pred__11088.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395),expr__11089))){
return (new biosphere.components.Velocity(G__11078,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11088.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__11089))){
return (new biosphere.components.Velocity(self__.direction,G__11078,self__.__meta,self__.__extmap,null));
} else {
return (new biosphere.components.Velocity(self__.direction,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__11078),null));
}
}
}));

(biosphere.components.Velocity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed,null))], null),self__.__extmap));
}));

(biosphere.components.Velocity.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__11078){
var self__ = this;
var this__4438__auto____$1 = this;
return (new biosphere.components.Velocity(self__.direction,self__.speed,G__11078,self__.__extmap,self__.__hash));
}));

(biosphere.components.Velocity.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(biosphere.components.Velocity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
}));

(biosphere.components.Velocity.cljs$lang$type = true);

(biosphere.components.Velocity.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"biosphere.components/Velocity",null,(1),null));
}));

(biosphere.components.Velocity.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"biosphere.components/Velocity");
}));

/**
 * Positional factory function for biosphere.components/Velocity.
 */
biosphere.components.__GT_Velocity = (function biosphere$components$__GT_Velocity(direction,speed){
return (new biosphere.components.Velocity(direction,speed,null,null,null));
});

/**
 * Factory function for biosphere.components/Velocity, taking a map of keywords to field values.
 */
biosphere.components.map__GT_Velocity = (function biosphere$components$map__GT_Velocity(G__11082){
var extmap__4478__auto__ = (function (){var G__11091 = cljs.core.dissoc.call(null,G__11082,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"speed","speed",1257663751));
if(cljs.core.record_QMARK_.call(null,G__11082)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11091);
} else {
return G__11091;
}
})();
return (new biosphere.components.Velocity(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(G__11082),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__11082),null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});


//# sourceMappingURL=components.js.map
