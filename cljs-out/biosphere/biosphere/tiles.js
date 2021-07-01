// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.tiles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('biosphere.protocols');
biosphere.tiles._STAR_noise_scale_STAR_ = (100);
biosphere.tiles._STAR_height_noise_STAR_ = (function biosphere$tiles$_STAR_height_noise_STAR_(_x,_y){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
});
/**
 * Get the vector index from a `[x y]` 2D world position.
 */
biosphere.tiles.pos__GT_id = (function biosphere$tiles$pos__GT_id(p__13870){
var vec__13871 = p__13870;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13871,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13871,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor(x),Math.floor(y)], null);
});
biosphere.tiles.water_QMARK_ = (function biosphere$tiles$water_QMARK_(p__13874,p__13875){
var map__13876 = p__13874;
var map__13876__$1 = cljs.core.__destructure_map(map__13876);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,cljs.core.cst$kw$water_DASH_level);
var map__13877 = p__13875;
var map__13877__$1 = cljs.core.__destructure_map(map__13877);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,cljs.core.cst$kw$height);
return (height < (0));
});
biosphere.tiles.in_bounds_QMARK_ = (function biosphere$tiles$in_bounds_QMARK_(p__13878,p__13879){
var map__13880 = p__13878;
var map__13880__$1 = cljs.core.__destructure_map(map__13880);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$height);
var vec__13881 = p__13879;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13881,(1),null);
return ((((((0) < x)) && ((x < width)))) && (((((0) < y)) && ((y < height)))));
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
 * @implements {biosphere.protocols.Updateable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
biosphere.tiles.Tile = (function (location,height,energy,max_energy,__meta,__extmap,__hash){
this.location = location;
this.height = height;
this.energy = energy;
this.max_energy = max_energy;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(biosphere.tiles.Tile.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(biosphere.tiles.Tile.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k13885,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__13889 = k13885;
var G__13889__$1 = (((G__13889 instanceof cljs.core.Keyword))?G__13889.fqn:null);
switch (G__13889__$1) {
case "location":
return self__.location;

break;
case "height":
return self__.height;

break;
case "energy":
return self__.energy;

break;
case "max-energy":
return self__.max_energy;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13885,else__4475__auto__);

}
}));

(biosphere.tiles.Tile.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__13890){
var vec__13891 = p__13890;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13891,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13891,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(biosphere.tiles.Tile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#biosphere.tiles.Tile{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$location,self__.location],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$height,self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$energy,self__.energy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_energy,self__.max_energy],null))], null),self__.__extmap));
}));

(biosphere.tiles.Tile.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13884){
var self__ = this;
var G__13884__$1 = this;
return (new cljs.core.RecordIter((0),G__13884__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location,cljs.core.cst$kw$height,cljs.core.cst$kw$energy,cljs.core.cst$kw$max_DASH_energy], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(biosphere.tiles.Tile.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(biosphere.tiles.Tile.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new biosphere.tiles.Tile(self__.location,self__.height,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,self__.__hash));
}));

(biosphere.tiles.Tile.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(biosphere.tiles.Tile.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__13894 = (function (coll__4469__auto__){
return (1263865048 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__13894(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(biosphere.tiles.Tile.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13886,other13887){
var self__ = this;
var this13886__$1 = this;
return (((!((other13887 == null)))) && ((((this13886__$1.constructor === other13887.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13886__$1.location,other13887.location)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13886__$1.height,other13887.height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13886__$1.energy,other13887.energy)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13886__$1.max_energy,other13887.max_energy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13886__$1.__extmap,other13887.__extmap)))))))))))));
}));

(biosphere.tiles.Tile.prototype.biosphere$protocols$Updateable$ = cljs.core.PROTOCOL_SENTINEL);

(biosphere.tiles.Tile.prototype.biosphere$protocols$Updateable$tick$arity$3 = (function (this$,old_state,new_state){
var self__ = this;
var this$__$1 = this;
return new_state;
}));

(biosphere.tiles.Tile.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$energy,null,cljs.core.cst$kw$max_DASH_energy,null,cljs.core.cst$kw$location,null,cljs.core.cst$kw$height,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new biosphere.tiles.Tile(self__.location,self__.height,self__.energy,self__.max_energy,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(biosphere.tiles.Tile.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k13885){
var self__ = this;
var this__4479__auto____$1 = this;
var G__13895 = k13885;
var G__13895__$1 = (((G__13895 instanceof cljs.core.Keyword))?G__13895.fqn:null);
switch (G__13895__$1) {
case "location":
case "height":
case "energy":
case "max-energy":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k13885);

}
}));

(biosphere.tiles.Tile.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__13884){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__13896 = cljs.core.keyword_identical_QMARK_;
var expr__13897 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__13899 = cljs.core.cst$kw$location;
var G__13900 = expr__13897;
return (pred__13896.cljs$core$IFn$_invoke$arity$2 ? pred__13896.cljs$core$IFn$_invoke$arity$2(G__13899,G__13900) : pred__13896.call(null,G__13899,G__13900));
})())){
return (new biosphere.tiles.Tile(G__13884,self__.height,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13901 = cljs.core.cst$kw$height;
var G__13902 = expr__13897;
return (pred__13896.cljs$core$IFn$_invoke$arity$2 ? pred__13896.cljs$core$IFn$_invoke$arity$2(G__13901,G__13902) : pred__13896.call(null,G__13901,G__13902));
})())){
return (new biosphere.tiles.Tile(self__.location,G__13884,self__.energy,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13903 = cljs.core.cst$kw$energy;
var G__13904 = expr__13897;
return (pred__13896.cljs$core$IFn$_invoke$arity$2 ? pred__13896.cljs$core$IFn$_invoke$arity$2(G__13903,G__13904) : pred__13896.call(null,G__13903,G__13904));
})())){
return (new biosphere.tiles.Tile(self__.location,self__.height,G__13884,self__.max_energy,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13905 = cljs.core.cst$kw$max_DASH_energy;
var G__13906 = expr__13897;
return (pred__13896.cljs$core$IFn$_invoke$arity$2 ? pred__13896.cljs$core$IFn$_invoke$arity$2(G__13905,G__13906) : pred__13896.call(null,G__13905,G__13906));
})())){
return (new biosphere.tiles.Tile(self__.location,self__.height,self__.energy,G__13884,self__.__meta,self__.__extmap,null));
} else {
return (new biosphere.tiles.Tile(self__.location,self__.height,self__.energy,self__.max_energy,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__13884),null));
}
}
}
}
}));

(biosphere.tiles.Tile.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$location,self__.location,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$height,self__.height,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$energy,self__.energy,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$max_DASH_energy,self__.max_energy,null))], null),self__.__extmap));
}));

(biosphere.tiles.Tile.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__13884){
var self__ = this;
var this__4471__auto____$1 = this;
return (new biosphere.tiles.Tile(self__.location,self__.height,self__.energy,self__.max_energy,G__13884,self__.__extmap,self__.__hash));
}));

(biosphere.tiles.Tile.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(biosphere.tiles.Tile.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$location,cljs.core.cst$sym$height,cljs.core.cst$sym$energy,cljs.core.cst$sym$max_DASH_energy], null);
}));

(biosphere.tiles.Tile.cljs$lang$type = true);

(biosphere.tiles.Tile.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"biosphere.tiles/Tile",null,(1),null));
}));

(biosphere.tiles.Tile.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"biosphere.tiles/Tile");
}));

/**
 * Positional factory function for biosphere.tiles/Tile.
 */
biosphere.tiles.__GT_Tile = (function biosphere$tiles$__GT_Tile(location,height,energy,max_energy){
return (new biosphere.tiles.Tile(location,height,energy,max_energy,null,null,null));
});

/**
 * Factory function for biosphere.tiles/Tile, taking a map of keywords to field values.
 */
biosphere.tiles.map__GT_Tile = (function biosphere$tiles$map__GT_Tile(G__13888){
var extmap__4512__auto__ = (function (){var G__13907 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13888,cljs.core.cst$kw$location,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$energy,cljs.core.cst$kw$max_DASH_energy], 0));
if(cljs.core.record_QMARK_(G__13888)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13907);
} else {
return G__13907;
}
})();
return (new biosphere.tiles.Tile(cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(G__13888),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(G__13888),cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(G__13888),cljs.core.cst$kw$max_DASH_energy.cljs$core$IFn$_invoke$arity$1(G__13888),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

biosphere.tiles.tile = (function biosphere$tiles$tile(p__13910,p__13911){
var map__13912 = p__13910;
var map__13912__$1 = cljs.core.__destructure_map(map__13912);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13912__$1,cljs.core.cst$kw$water_DASH_level);
var vec__13913 = p__13911;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(1),null);
var height = (-0.8 + ((2) * (biosphere.tiles._STAR_height_noise_STAR_.cljs$core$IFn$_invoke$arity$2 ? biosphere.tiles._STAR_height_noise_STAR_.cljs$core$IFn$_invoke$arity$2((x / biosphere.tiles._STAR_noise_scale_STAR_),(y / biosphere.tiles._STAR_noise_scale_STAR_)) : biosphere.tiles._STAR_height_noise_STAR_.call(null,(x / biosphere.tiles._STAR_noise_scale_STAR_),(y / biosphere.tiles._STAR_noise_scale_STAR_)))));
var max_energy = ((10) * (height + (1)));
return biosphere.tiles.__GT_Tile(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),height,max_energy,max_energy);
});
biosphere.tiles.init_tiles = (function biosphere$tiles$init_tiles(state){
var map__13916 = state;
var map__13916__$1 = cljs.core.__destructure_map(map__13916);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$height);
var tile_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function biosphere$tiles$init_tiles_$_iter__13917(s__13918){
return (new cljs.core.LazySeq(null,(function (){
var s__13918__$1 = s__13918;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13918__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__13918__$1,x,xs__6308__auto__,temp__5753__auto__,map__13916,map__13916__$1,width,height){
return (function biosphere$tiles$init_tiles_$_iter__13917_$_iter__13919(s__13920){
return (new cljs.core.LazySeq(null,((function (s__13918__$1,x,xs__6308__auto__,temp__5753__auto__,map__13916,map__13916__$1,width,height){
return (function (){
var s__13920__$1 = s__13920;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__13920__$1);
if(temp__5753__auto____$1){
var s__13920__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13920__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__13920__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__13922 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__13921 = (0);
while(true){
if((i__13921 < size__4621__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__13921);
var location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
cljs.core.chunk_append(b__13922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,biosphere.tiles.tile(state,location)], null));

var G__13923 = (i__13921 + (1));
i__13921 = G__13923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13922),biosphere$tiles$init_tiles_$_iter__13917_$_iter__13919(cljs.core.chunk_rest(s__13920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13922),null);
}
} else {
var y = cljs.core.first(s__13920__$2);
var location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,biosphere.tiles.tile(state,location)], null),biosphere$tiles$init_tiles_$_iter__13917_$_iter__13919(cljs.core.rest(s__13920__$2)));
}
} else {
return null;
}
break;
}
});})(s__13918__$1,x,xs__6308__auto__,temp__5753__auto__,map__13916,map__13916__$1,width,height))
,null,null));
});})(s__13918__$1,x,xs__6308__auto__,temp__5753__auto__,map__13916,map__13916__$1,width,height))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height)));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,biosphere$tiles$init_tiles_$_iter__13917(cljs.core.rest(s__13918__$1)));
} else {
var G__13924 = cljs.core.rest(s__13918__$1);
s__13918__$1 = G__13924;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$tiles,tile_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dirty_DASH_tiles,cljs.core.set(cljs.core.keys(tile_map))], 0));
});
biosphere.tiles.reset_dirty = (function biosphere$tiles$reset_dirty(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$dirty_DASH_tiles,cljs.core.PersistentHashSet.EMPTY);
});
biosphere.tiles.tile_updates = (function biosphere$tiles$tile_updates(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_state,tile){
return tile.biosphere$protocols$Updateable$tick$arity$3(null,state,new_state);
}),state,cljs.core.vals(cljs.core.cst$kw$tiles.cljs$core$IFn$_invoke$arity$1(state)));
});
biosphere.tiles.nth_tick_QMARK_ = (function biosphere$tiles$nth_tick_QMARK_(p__13925,n){
var map__13926 = p__13925;
var map__13926__$1 = cljs.core.__destructure_map(map__13926);
var tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13926__$1,cljs.core.cst$kw$tick);
return ((tick / n) === (0));
});
biosphere.tiles.update_tiles = (function biosphere$tiles$update_tiles(state){
var G__13927 = state;
var G__13927__$1 = biosphere.tiles.reset_dirty(G__13927)
;
if(biosphere.tiles.nth_tick_QMARK_(state,(1))){
return biosphere.tiles.tile_updates(G__13927__$1);
} else {
return G__13927__$1;
}
});
