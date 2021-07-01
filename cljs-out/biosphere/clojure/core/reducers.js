// Compiled by ClojureScript 1.10.773 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var G__14364 = arguments.length;
switch (G__14364) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
}));

(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return new cljs.core.Var(function(){return cljs.core.array_reduce;},new cljs.core.Symbol("cljs.core","array-reduce","cljs.core/array-reduce",569260567,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-reduce","array-reduce",154113968,null),"cljs/core.cljs",(20),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(4),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(4),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(1501),(1501),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),null,(cljs.core.truth_(cljs.core.array_reduce)?cljs.core.array_reduce.cljs$lang$test:null)])).call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
}));

(clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3);


/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

var clojure$core$reducers$CollFold$coll_fold$dyn_14366 = (function (coll,n,combinef,reducef){
var x__4428__auto__ = (((coll == null))?null:coll);
var m__4429__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__4426__auto__ = (clojure.core.reducers.coll_fold["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
});
clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((((!((coll == null)))) && ((!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
return clojure$core$reducers$CollFold$coll_fold$dyn_14366.call(null,coll,n,combinef,reducef);
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var G__14368 = arguments.length;
switch (G__14368) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
}));

(clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
}));

(clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
}));

(clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4);

/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if((typeof clojure !== 'undefined') && (typeof clojure.core !== 'undefined') && (typeof clojure.core.reducers !== 'undefined') && (typeof clojure.core.reducers.t_clojure$core$reducers14370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers14370 = (function (coll,xf,meta14371){
this.coll = coll;
this.xf = xf;
this.meta14371 = meta14371;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(clojure.core.reducers.t_clojure$core$reducers14370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14372,meta14371__$1){
var self__ = this;
var _14372__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers14370(self__.coll,self__.xf,meta14371__$1));
}));

(clojure.core.reducers.t_clojure$core$reducers14370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14372){
var self__ = this;
var _14372__$1 = this;
return self__.meta14371;
}));

(clojure.core.reducers.t_clojure$core$reducers14370.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
}));

(clojure.core.reducers.t_clojure$core$reducers14370.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
}));

(clojure.core.reducers.t_clojure$core$reducers14370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta14371","meta14371",1740552408,null)], null);
}));

(clojure.core.reducers.t_clojure$core$reducers14370.cljs$lang$type = true);

(clojure.core.reducers.t_clojure$core$reducers14370.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers14370");

(clojure.core.reducers.t_clojure$core$reducers14370.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"clojure.core.reducers/t_clojure$core$reducers14370");
}));

/**
 * Positional factory function for clojure.core.reducers/t_clojure$core$reducers14370.
 */
clojure.core.reducers.__GT_t_clojure$core$reducers14370 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers14370(coll__$1,xf__$1,meta14371){
return (new clojure.core.reducers.t_clojure$core$reducers14370(coll__$1,xf__$1,meta14371));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers14370(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if((typeof clojure !== 'undefined') && (typeof clojure.core !== 'undefined') && (typeof clojure.core.reducers !== 'undefined') && (typeof clojure.core.reducers.t_clojure$core$reducers14373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers14373 = (function (coll,xf,meta14374){
this.coll = coll;
this.xf = xf;
this.meta14374 = meta14374;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(clojure.core.reducers.t_clojure$core$reducers14373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14375,meta14374__$1){
var self__ = this;
var _14375__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers14373(self__.coll,self__.xf,meta14374__$1));
}));

(clojure.core.reducers.t_clojure$core$reducers14373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14375){
var self__ = this;
var _14375__$1 = this;
return self__.meta14374;
}));

(clojure.core.reducers.t_clojure$core$reducers14373.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
}));

(clojure.core.reducers.t_clojure$core$reducers14373.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
}));

(clojure.core.reducers.t_clojure$core$reducers14373.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.reducers.t_clojure$core$reducers14373.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
}));

(clojure.core.reducers.t_clojure$core$reducers14373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta14374","meta14374",-1237630463,null)], null);
}));

(clojure.core.reducers.t_clojure$core$reducers14373.cljs$lang$type = true);

(clojure.core.reducers.t_clojure$core$reducers14373.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers14373");

(clojure.core.reducers.t_clojure$core$reducers14373.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"clojure.core.reducers/t_clojure$core$reducers14373");
}));

/**
 * Positional factory function for clojure.core.reducers/t_clojure$core$reducers14373.
 */
clojure.core.reducers.__GT_t_clojure$core$reducers14373 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers14373(coll__$1,xf__$1,meta14374){
return (new clojure.core.reducers.t_clojure$core$reducers14373(coll__$1,xf__$1,meta14374));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers14373(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var G__14377 = arguments.length;
switch (G__14377) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__4240__auto__){
return clojure.core.reducers.map.call(null,f,x__4240__auto__);
});
}));

(clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__14379 = null;
var G__14379__0 = (function (){
return f1.call(null);
});
var G__14379__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__14379__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__14379 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__14379__0.call(this);
case 2:
return G__14379__2.call(this,ret,k);
case 3:
return G__14379__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14379.cljs$core$IFn$_invoke$arity$0 = G__14379__0;
G__14379.cljs$core$IFn$_invoke$arity$2 = G__14379__2;
G__14379.cljs$core$IFn$_invoke$arity$3 = G__14379__3;
return G__14379;
})()
}));
}));

(clojure.core.reducers.map.cljs$lang$maxFixedArity = 2);

/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var G__14381 = arguments.length;
switch (G__14381) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__4240__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__4240__auto__);
});
}));

(clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__14383 = null;
var G__14383__0 = (function (){
return f1.call(null);
});
var G__14383__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__14383__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__14383 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__14383__0.call(this);
case 2:
return G__14383__2.call(this,ret,k);
case 3:
return G__14383__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14383.cljs$core$IFn$_invoke$arity$0 = G__14383__0;
G__14383.cljs$core$IFn$_invoke$arity$2 = G__14383__2;
G__14383.cljs$core$IFn$_invoke$arity$3 = G__14383__3;
return G__14383;
})()
}));
}));

(clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2);

/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var G__14385 = arguments.length;
switch (G__14385) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__4240__auto__){
return clojure.core.reducers.filter.call(null,pred,x__4240__auto__);
});
}));

(clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__14387 = null;
var G__14387__0 = (function (){
return f1.call(null);
});
var G__14387__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__14387__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__14387 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__14387__0.call(this);
case 2:
return G__14387__2.call(this,ret,k);
case 3:
return G__14387__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14387.cljs$core$IFn$_invoke$arity$0 = G__14387__0;
G__14387.cljs$core$IFn$_invoke$arity$2 = G__14387__2;
G__14387.cljs$core$IFn$_invoke$arity$3 = G__14387__3;
return G__14387;
})()
}));
}));

(clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2);

/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var G__14389 = arguments.length;
switch (G__14389) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__4240__auto__){
return clojure.core.reducers.flatten.call(null,x__4240__auto__);
});
}));

(clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__14391 = null;
var G__14391__0 = (function (){
return f1.call(null);
});
var G__14391__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__14391 = function(ret,v){
switch(arguments.length){
case 0:
return G__14391__0.call(this);
case 2:
return G__14391__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14391.cljs$core$IFn$_invoke$arity$0 = G__14391__0;
G__14391.cljs$core$IFn$_invoke$arity$2 = G__14391__2;
return G__14391;
})()
}));
}));

(clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1);

/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var G__14393 = arguments.length;
switch (G__14393) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__4240__auto__){
return clojure.core.reducers.remove.call(null,pred,x__4240__auto__);
});
}));

(clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
}));

(clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2);

/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var G__14396 = arguments.length;
switch (G__14396) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__4240__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__4240__auto__);
});
}));

(clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__14398 = null;
var G__14398__0 = (function (){
return f1.call(null);
});
var G__14398__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__14398__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__14398 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__14398__0.call(this);
case 2:
return G__14398__2.call(this,ret,k);
case 3:
return G__14398__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14398.cljs$core$IFn$_invoke$arity$0 = G__14398__0;
G__14398.cljs$core$IFn$_invoke$arity$2 = G__14398__2;
G__14398.cljs$core$IFn$_invoke$arity$3 = G__14398__3;
return G__14398;
})()
}));
}));

(clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2);

/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var G__14400 = arguments.length;
switch (G__14400) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__4240__auto__){
return clojure.core.reducers.take.call(null,n,x__4240__auto__);
});
}));

(clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return (function() {
var G__14402 = null;
var G__14402__0 = (function (){
return f1.call(null);
});
var G__14402__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__14402__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__14402 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__14402__0.call(this);
case 2:
return G__14402__2.call(this,ret,k);
case 3:
return G__14402__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14402.cljs$core$IFn$_invoke$arity$0 = G__14402__0;
G__14402.cljs$core$IFn$_invoke$arity$2 = G__14402__2;
G__14402.cljs$core$IFn$_invoke$arity$3 = G__14402__3;
return G__14402;
})()
}));
}));

(clojure.core.reducers.take.cljs$lang$maxFixedArity = 2);

/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var G__14404 = arguments.length;
switch (G__14404) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__4240__auto__){
return clojure.core.reducers.drop.call(null,n,x__4240__auto__);
});
}));

(clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return (function() {
var G__14406 = null;
var G__14406__0 = (function (){
return f1.call(null);
});
var G__14406__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__14406__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__14406 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__14406__0.call(this);
case 2:
return G__14406__2.call(this,ret,k);
case 3:
return G__14406__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14406.cljs$core$IFn$_invoke$arity$0 = G__14406__0;
G__14406.cljs$core$IFn$_invoke$arity$2 = G__14406__2;
G__14406.cljs$core$IFn$_invoke$arity$3 = G__14406__3;
return G__14406;
})()
}));
}));

(clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
}));

(clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
}));

(clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
}));

(clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
}));

(clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
}));

(clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
}));

(clojure.core.reducers.Cat.cljs$lang$type = true);

(clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat");

(clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"clojure.core.reducers/Cat");
}));

/**
 * Positional factory function for clojure.core.reducers/Cat.
 */
clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var G__14408 = arguments.length;
switch (G__14408) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
}));

(clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__14410 = null;
var G__14410__0 = (function (){
return ctor.call(null);
});
var G__14410__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__14410 = function(left,right){
switch(arguments.length){
case 0:
return G__14410__0.call(this);
case 2:
return G__14410__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14410.cljs$core$IFn$_invoke$arity$0 = G__14410__0;
G__14410.cljs$core$IFn$_invoke$arity$2 = G__14410__2;
return G__14410;
})()
}));

(clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
}));

(clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2);

/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__14411 = acc;
G__14411.push(x);

return G__14411;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = (function (child){
return (function (){
return clojure.core.reducers.foldvec.call(null,child,n,combinef,reducef);
});
});
return clojure.core.reducers.fjinvoke.call(null,(function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
}));

}
}
});
goog.object.set(clojure.core.reducers.CollFold,"null",true);

goog.object.set(clojure.core.reducers.coll_fold,"null",(function (coll,n,combinef,reducef){
return combinef.call(null);
}));

goog.object.set(clojure.core.reducers.CollFold,"object",true);

goog.object.set(clojure.core.reducers.coll_fold,"object",(function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

(cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
}));

//# sourceMappingURL=reducers.js.map
