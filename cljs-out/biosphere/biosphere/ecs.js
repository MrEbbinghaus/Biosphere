// Compiled by ClojureScript 1.10.597 {}
goog.provide('biosphere.ecs');
goog.require('cljs.core');
goog.require('brute.entity');
goog.require('cljs.pprint');
biosphere.ecs.system = brute.entity.create_system.call(null);

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
biosphere.ecs.Position = (function (x,y,r,s,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.r = r;
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.ecs.Position.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(biosphere.ecs.Position.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k10784,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__10788 = k10784;
var G__10788__$1 = (((G__10788 instanceof cljs.core.Keyword))?G__10788.fqn:null);
switch (G__10788__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "r":
return self__.r;

break;
case "s":
return self__.s;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10784,else__4442__auto__);

}
}));

(biosphere.ecs.Position.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__10789){
var vec__10790 = p__10789;
var k__4462__auto__ = cljs.core.nth.call(null,vec__10790,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__10790,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(biosphere.ecs.Position.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#biosphere.ecs.Position{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(biosphere.ecs.Position.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10783){
var self__ = this;
var G__10783__$1 = this;
return (new cljs.core.RecordIter((0),G__10783__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(biosphere.ecs.Position.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(biosphere.ecs.Position.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new biosphere.ecs.Position(self__.x,self__.y,self__.r,self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.ecs.Position.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(biosphere.ecs.Position.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-426277795 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(biosphere.ecs.Position.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10785,other10786){
var self__ = this;
var this10785__$1 = this;
return (((!((other10786 == null)))) && ((this10785__$1.constructor === other10786.constructor)) && (cljs.core._EQ_.call(null,this10785__$1.x,other10786.x)) && (cljs.core._EQ_.call(null,this10785__$1.y,other10786.y)) && (cljs.core._EQ_.call(null,this10785__$1.r,other10786.r)) && (cljs.core._EQ_.call(null,this10785__$1.s,other10786.s)) && (cljs.core._EQ_.call(null,this10785__$1.__extmap,other10786.__extmap)));
}));

(biosphere.ecs.Position.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new biosphere.ecs.Position(self__.x,self__.y,self__.r,self__.s,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(biosphere.ecs.Position.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__10783){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__10793 = cljs.core.keyword_identical_QMARK_;
var expr__10794 = k__4447__auto__;
if(cljs.core.truth_(pred__10793.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__10794))){
return (new biosphere.ecs.Position(G__10783,self__.y,self__.r,self__.s,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10793.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__10794))){
return (new biosphere.ecs.Position(self__.x,G__10783,self__.r,self__.s,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10793.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__10794))){
return (new biosphere.ecs.Position(self__.x,self__.y,G__10783,self__.s,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10793.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__10794))){
return (new biosphere.ecs.Position(self__.x,self__.y,self__.r,G__10783,self__.__meta,self__.__extmap,null));
} else {
return (new biosphere.ecs.Position(self__.x,self__.y,self__.r,self__.s,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__10783),null));
}
}
}
}
}));

(biosphere.ecs.Position.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(biosphere.ecs.Position.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__10783){
var self__ = this;
var this__4438__auto____$1 = this;
return (new biosphere.ecs.Position(self__.x,self__.y,self__.r,self__.s,G__10783,self__.__extmap,self__.__hash));
}));

(biosphere.ecs.Position.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(biosphere.ecs.Position.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(biosphere.ecs.Position.cljs$lang$type = true);

(biosphere.ecs.Position.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"biosphere.ecs/Position",null,(1),null));
}));

(biosphere.ecs.Position.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"biosphere.ecs/Position");
}));

/**
 * Positional factory function for biosphere.ecs/Position.
 */
biosphere.ecs.__GT_Position = (function biosphere$ecs$__GT_Position(x,y,r,s){
return (new biosphere.ecs.Position(x,y,r,s,null,null,null));
});

/**
 * Factory function for biosphere.ecs/Position, taking a map of keywords to field values.
 */
biosphere.ecs.map__GT_Position = (function biosphere$ecs$map__GT_Position(G__10787){
var extmap__4478__auto__ = (function (){var G__10796 = cljs.core.dissoc.call(null,G__10787,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_.call(null,G__10787)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10796);
} else {
return G__10796;
}
})();
return (new biosphere.ecs.Position(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__10787),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__10787),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__10787),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__10787),null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});

cljs.pprint.pprint.call(null,(function (){var e = brute.entity.create_entity.call(null);
brute.entity.add_entity.call(null,biosphere.ecs.system,e);

return brute.entity.add_component.call(null,biosphere.ecs.system,e,(new biosphere.ecs.Position((1),(2),(180),(1),null,null,null)));
})());

//# sourceMappingURL=ecs.js.map
