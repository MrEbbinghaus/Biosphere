// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17172 = arguments.length;
switch (G__17172) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17173 = (function (f,blockable,meta17174){
this.f = f;
this.blockable = blockable;
this.meta17174 = meta17174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17175,meta17174__$1){
var self__ = this;
var _17175__$1 = this;
return (new cljs.core.async.t_cljs$core$async17173(self__.f,self__.blockable,meta17174__$1));
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17175){
var self__ = this;
var _17175__$1 = this;
return self__.meta17174;
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17174","meta17174",-1156571469,null)], null);
}));

(cljs.core.async.t_cljs$core$async17173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17173");

(cljs.core.async.t_cljs$core$async17173.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17173.
 */
cljs.core.async.__GT_t_cljs$core$async17173 = (function cljs$core$async$__GT_t_cljs$core$async17173(f__$1,blockable__$1,meta17174){
return (new cljs.core.async.t_cljs$core$async17173(f__$1,blockable__$1,meta17174));
});

}

return (new cljs.core.async.t_cljs$core$async17173(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17179 = arguments.length;
switch (G__17179) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17182 = arguments.length;
switch (G__17182) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17185 = arguments.length;
switch (G__17185) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17187 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17187);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17187);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17189 = arguments.length;
switch (G__17189) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___17191 = n;
var x_17192 = (0);
while(true){
if((x_17192 < n__4613__auto___17191)){
(a[x_17192] = (0));

var G__17193 = (x_17192 + (1));
x_17192 = G__17193;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17194 = (i + (1));
i = G__17194;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17195 = (function (flag,meta17196){
this.flag = flag;
this.meta17196 = meta17196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17197,meta17196__$1){
var self__ = this;
var _17197__$1 = this;
return (new cljs.core.async.t_cljs$core$async17195(self__.flag,meta17196__$1));
}));

(cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17197){
var self__ = this;
var _17197__$1 = this;
return self__.meta17196;
}));

(cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17196","meta17196",-1168708495,null)], null);
}));

(cljs.core.async.t_cljs$core$async17195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17195");

(cljs.core.async.t_cljs$core$async17195.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17195.
 */
cljs.core.async.__GT_t_cljs$core$async17195 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17195(flag__$1,meta17196){
return (new cljs.core.async.t_cljs$core$async17195(flag__$1,meta17196));
});

}

return (new cljs.core.async.t_cljs$core$async17195(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17198 = (function (flag,cb,meta17199){
this.flag = flag;
this.cb = cb;
this.meta17199 = meta17199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17200,meta17199__$1){
var self__ = this;
var _17200__$1 = this;
return (new cljs.core.async.t_cljs$core$async17198(self__.flag,self__.cb,meta17199__$1));
}));

(cljs.core.async.t_cljs$core$async17198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17200){
var self__ = this;
var _17200__$1 = this;
return self__.meta17199;
}));

(cljs.core.async.t_cljs$core$async17198.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17199","meta17199",960745581,null)], null);
}));

(cljs.core.async.t_cljs$core$async17198.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17198");

(cljs.core.async.t_cljs$core$async17198.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17198");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17198.
 */
cljs.core.async.__GT_t_cljs$core$async17198 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17198(flag__$1,cb__$1,meta17199){
return (new cljs.core.async.t_cljs$core$async17198(flag__$1,cb__$1,meta17199));
});

}

return (new cljs.core.async.t_cljs$core$async17198(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17201_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17201_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17202_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17202_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17203 = (i + (1));
i = G__17203;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17209 = arguments.length;
var i__4737__auto___17210 = (0);
while(true){
if((i__4737__auto___17210 < len__4736__auto___17209)){
args__4742__auto__.push((arguments[i__4737__auto___17210]));

var G__17211 = (i__4737__auto___17210 + (1));
i__4737__auto___17210 = G__17211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17206){
var map__17207 = p__17206;
var map__17207__$1 = (((((!((map__17207 == null))))?(((((map__17207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17207):map__17207);
var opts = map__17207__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17204){
var G__17205 = cljs.core.first.call(null,seq17204);
var seq17204__$1 = cljs.core.next.call(null,seq17204);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17205,seq17204__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17213 = arguments.length;
switch (G__17213) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15235__auto___17259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17237){
var state_val_17238 = (state_17237[(1)]);
if((state_val_17238 === (7))){
var inst_17233 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17239_17260 = state_17237__$1;
(statearr_17239_17260[(2)] = inst_17233);

(statearr_17239_17260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (1))){
var state_17237__$1 = state_17237;
var statearr_17240_17261 = state_17237__$1;
(statearr_17240_17261[(2)] = null);

(statearr_17240_17261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (4))){
var inst_17216 = (state_17237[(7)]);
var inst_17216__$1 = (state_17237[(2)]);
var inst_17217 = (inst_17216__$1 == null);
var state_17237__$1 = (function (){var statearr_17241 = state_17237;
(statearr_17241[(7)] = inst_17216__$1);

return statearr_17241;
})();
if(cljs.core.truth_(inst_17217)){
var statearr_17242_17262 = state_17237__$1;
(statearr_17242_17262[(1)] = (5));

} else {
var statearr_17243_17263 = state_17237__$1;
(statearr_17243_17263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (13))){
var state_17237__$1 = state_17237;
var statearr_17244_17264 = state_17237__$1;
(statearr_17244_17264[(2)] = null);

(statearr_17244_17264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (6))){
var inst_17216 = (state_17237[(7)]);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17237__$1,(11),to,inst_17216);
} else {
if((state_val_17238 === (3))){
var inst_17235 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17237__$1,inst_17235);
} else {
if((state_val_17238 === (12))){
var state_17237__$1 = state_17237;
var statearr_17245_17265 = state_17237__$1;
(statearr_17245_17265[(2)] = null);

(statearr_17245_17265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (2))){
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17237__$1,(4),from);
} else {
if((state_val_17238 === (11))){
var inst_17226 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
if(cljs.core.truth_(inst_17226)){
var statearr_17246_17266 = state_17237__$1;
(statearr_17246_17266[(1)] = (12));

} else {
var statearr_17247_17267 = state_17237__$1;
(statearr_17247_17267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (9))){
var state_17237__$1 = state_17237;
var statearr_17248_17268 = state_17237__$1;
(statearr_17248_17268[(2)] = null);

(statearr_17248_17268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (5))){
var state_17237__$1 = state_17237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17249_17269 = state_17237__$1;
(statearr_17249_17269[(1)] = (8));

} else {
var statearr_17250_17270 = state_17237__$1;
(statearr_17250_17270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (14))){
var inst_17231 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17251_17271 = state_17237__$1;
(statearr_17251_17271[(2)] = inst_17231);

(statearr_17251_17271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (10))){
var inst_17223 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17252_17272 = state_17237__$1;
(statearr_17252_17272[(2)] = inst_17223);

(statearr_17252_17272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (8))){
var inst_17220 = cljs.core.async.close_BANG_.call(null,to);
var state_17237__$1 = state_17237;
var statearr_17253_17273 = state_17237__$1;
(statearr_17253_17273[(2)] = inst_17220);

(statearr_17253_17273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_17254 = [null,null,null,null,null,null,null,null];
(statearr_17254[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_17254[(1)] = (1));

return statearr_17254;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_17237){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17255){if((e17255 instanceof Object)){
var ex__15072__auto__ = e17255;
var statearr_17256_17274 = state_17237;
(statearr_17256_17274[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17275 = state_17237;
state_17237 = G__17275;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_17237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_17237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17257 = f__15236__auto__.call(null);
(statearr_17257[(6)] = c__15235__auto___17259);

return statearr_17257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17276){
var vec__17277 = p__17276;
var v = cljs.core.nth.call(null,vec__17277,(0),null);
var p = cljs.core.nth.call(null,vec__17277,(1),null);
var job = vec__17277;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15235__auto___17448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17284){
var state_val_17285 = (state_17284[(1)]);
if((state_val_17285 === (1))){
var state_17284__$1 = state_17284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17284__$1,(2),res,v);
} else {
if((state_val_17285 === (2))){
var inst_17281 = (state_17284[(2)]);
var inst_17282 = cljs.core.async.close_BANG_.call(null,res);
var state_17284__$1 = (function (){var statearr_17286 = state_17284;
(statearr_17286[(7)] = inst_17281);

return statearr_17286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17284__$1,inst_17282);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0 = (function (){
var statearr_17287 = [null,null,null,null,null,null,null,null];
(statearr_17287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__);

(statearr_17287[(1)] = (1));

return statearr_17287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1 = (function (state_17284){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17288){if((e17288 instanceof Object)){
var ex__15072__auto__ = e17288;
var statearr_17289_17449 = state_17284;
(statearr_17289_17449[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17450 = state_17284;
state_17284 = G__17450;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = function(state_17284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1.call(this,state_17284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17290 = f__15236__auto__.call(null);
(statearr_17290[(6)] = c__15235__auto___17448);

return statearr_17290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17291){
var vec__17292 = p__17291;
var v = cljs.core.nth.call(null,vec__17292,(0),null);
var p = cljs.core.nth.call(null,vec__17292,(1),null);
var job = vec__17292;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___17451 = n;
var __17452 = (0);
while(true){
if((__17452 < n__4613__auto___17451)){
var G__17295_17453 = type;
var G__17295_17454__$1 = (((G__17295_17453 instanceof cljs.core.Keyword))?G__17295_17453.fqn:null);
switch (G__17295_17454__$1) {
case "compute":
var c__15235__auto___17456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17452,c__15235__auto___17456,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async){
return (function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = ((function (__17452,c__15235__auto___17456,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async){
return (function (state_17308){
var state_val_17309 = (state_17308[(1)]);
if((state_val_17309 === (1))){
var state_17308__$1 = state_17308;
var statearr_17310_17457 = state_17308__$1;
(statearr_17310_17457[(2)] = null);

(statearr_17310_17457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17309 === (2))){
var state_17308__$1 = state_17308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17308__$1,(4),jobs);
} else {
if((state_val_17309 === (3))){
var inst_17306 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17308__$1,inst_17306);
} else {
if((state_val_17309 === (4))){
var inst_17298 = (state_17308[(2)]);
var inst_17299 = process.call(null,inst_17298);
var state_17308__$1 = state_17308;
if(cljs.core.truth_(inst_17299)){
var statearr_17311_17458 = state_17308__$1;
(statearr_17311_17458[(1)] = (5));

} else {
var statearr_17312_17459 = state_17308__$1;
(statearr_17312_17459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17309 === (5))){
var state_17308__$1 = state_17308;
var statearr_17313_17460 = state_17308__$1;
(statearr_17313_17460[(2)] = null);

(statearr_17313_17460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17309 === (6))){
var state_17308__$1 = state_17308;
var statearr_17314_17461 = state_17308__$1;
(statearr_17314_17461[(2)] = null);

(statearr_17314_17461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17309 === (7))){
var inst_17304 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
var statearr_17315_17462 = state_17308__$1;
(statearr_17315_17462[(2)] = inst_17304);

(statearr_17315_17462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17452,c__15235__auto___17456,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async))
;
return ((function (__17452,switch__15068__auto__,c__15235__auto___17456,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0 = (function (){
var statearr_17316 = [null,null,null,null,null,null,null];
(statearr_17316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__);

(statearr_17316[(1)] = (1));

return statearr_17316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1 = (function (state_17308){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17317){if((e17317 instanceof Object)){
var ex__15072__auto__ = e17317;
var statearr_17318_17463 = state_17308;
(statearr_17318_17463[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17464 = state_17308;
state_17308 = G__17464;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = function(state_17308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1.call(this,state_17308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__;
})()
;})(__17452,switch__15068__auto__,c__15235__auto___17456,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async))
})();
var state__15237__auto__ = (function (){var statearr_17319 = f__15236__auto__.call(null);
(statearr_17319[(6)] = c__15235__auto___17456);

return statearr_17319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
});})(__17452,c__15235__auto___17456,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async))
);


break;
case "async":
var c__15235__auto___17465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17452,c__15235__auto___17465,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async){
return (function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = ((function (__17452,c__15235__auto___17465,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async){
return (function (state_17332){
var state_val_17333 = (state_17332[(1)]);
if((state_val_17333 === (1))){
var state_17332__$1 = state_17332;
var statearr_17334_17466 = state_17332__$1;
(statearr_17334_17466[(2)] = null);

(statearr_17334_17466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (2))){
var state_17332__$1 = state_17332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17332__$1,(4),jobs);
} else {
if((state_val_17333 === (3))){
var inst_17330 = (state_17332[(2)]);
var state_17332__$1 = state_17332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17332__$1,inst_17330);
} else {
if((state_val_17333 === (4))){
var inst_17322 = (state_17332[(2)]);
var inst_17323 = async.call(null,inst_17322);
var state_17332__$1 = state_17332;
if(cljs.core.truth_(inst_17323)){
var statearr_17335_17467 = state_17332__$1;
(statearr_17335_17467[(1)] = (5));

} else {
var statearr_17336_17468 = state_17332__$1;
(statearr_17336_17468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (5))){
var state_17332__$1 = state_17332;
var statearr_17337_17469 = state_17332__$1;
(statearr_17337_17469[(2)] = null);

(statearr_17337_17469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (6))){
var state_17332__$1 = state_17332;
var statearr_17338_17470 = state_17332__$1;
(statearr_17338_17470[(2)] = null);

(statearr_17338_17470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (7))){
var inst_17328 = (state_17332[(2)]);
var state_17332__$1 = state_17332;
var statearr_17339_17471 = state_17332__$1;
(statearr_17339_17471[(2)] = inst_17328);

(statearr_17339_17471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17452,c__15235__auto___17465,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async))
;
return ((function (__17452,switch__15068__auto__,c__15235__auto___17465,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0 = (function (){
var statearr_17340 = [null,null,null,null,null,null,null];
(statearr_17340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__);

(statearr_17340[(1)] = (1));

return statearr_17340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1 = (function (state_17332){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17341){if((e17341 instanceof Object)){
var ex__15072__auto__ = e17341;
var statearr_17342_17472 = state_17332;
(statearr_17342_17472[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17473 = state_17332;
state_17332 = G__17473;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = function(state_17332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1.call(this,state_17332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__;
})()
;})(__17452,switch__15068__auto__,c__15235__auto___17465,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async))
})();
var state__15237__auto__ = (function (){var statearr_17343 = f__15236__auto__.call(null);
(statearr_17343[(6)] = c__15235__auto___17465);

return statearr_17343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
});})(__17452,c__15235__auto___17465,G__17295_17453,G__17295_17454__$1,n__4613__auto___17451,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17295_17454__$1)].join('')));

}

var G__17474 = (__17452 + (1));
__17452 = G__17474;
continue;
} else {
}
break;
}

var c__15235__auto___17475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17365){
var state_val_17366 = (state_17365[(1)]);
if((state_val_17366 === (7))){
var inst_17361 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17367_17476 = state_17365__$1;
(statearr_17367_17476[(2)] = inst_17361);

(statearr_17367_17476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (1))){
var state_17365__$1 = state_17365;
var statearr_17368_17477 = state_17365__$1;
(statearr_17368_17477[(2)] = null);

(statearr_17368_17477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (4))){
var inst_17346 = (state_17365[(7)]);
var inst_17346__$1 = (state_17365[(2)]);
var inst_17347 = (inst_17346__$1 == null);
var state_17365__$1 = (function (){var statearr_17369 = state_17365;
(statearr_17369[(7)] = inst_17346__$1);

return statearr_17369;
})();
if(cljs.core.truth_(inst_17347)){
var statearr_17370_17478 = state_17365__$1;
(statearr_17370_17478[(1)] = (5));

} else {
var statearr_17371_17479 = state_17365__$1;
(statearr_17371_17479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (6))){
var inst_17346 = (state_17365[(7)]);
var inst_17351 = (state_17365[(8)]);
var inst_17351__$1 = cljs.core.async.chan.call(null,(1));
var inst_17352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17353 = [inst_17346,inst_17351__$1];
var inst_17354 = (new cljs.core.PersistentVector(null,2,(5),inst_17352,inst_17353,null));
var state_17365__$1 = (function (){var statearr_17372 = state_17365;
(statearr_17372[(8)] = inst_17351__$1);

return statearr_17372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17365__$1,(8),jobs,inst_17354);
} else {
if((state_val_17366 === (3))){
var inst_17363 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17365__$1,inst_17363);
} else {
if((state_val_17366 === (2))){
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17365__$1,(4),from);
} else {
if((state_val_17366 === (9))){
var inst_17358 = (state_17365[(2)]);
var state_17365__$1 = (function (){var statearr_17373 = state_17365;
(statearr_17373[(9)] = inst_17358);

return statearr_17373;
})();
var statearr_17374_17480 = state_17365__$1;
(statearr_17374_17480[(2)] = null);

(statearr_17374_17480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (5))){
var inst_17349 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17365__$1 = state_17365;
var statearr_17375_17481 = state_17365__$1;
(statearr_17375_17481[(2)] = inst_17349);

(statearr_17375_17481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (8))){
var inst_17351 = (state_17365[(8)]);
var inst_17356 = (state_17365[(2)]);
var state_17365__$1 = (function (){var statearr_17376 = state_17365;
(statearr_17376[(10)] = inst_17356);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17365__$1,(9),results,inst_17351);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0 = (function (){
var statearr_17377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__);

(statearr_17377[(1)] = (1));

return statearr_17377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1 = (function (state_17365){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17378){if((e17378 instanceof Object)){
var ex__15072__auto__ = e17378;
var statearr_17379_17482 = state_17365;
(statearr_17379_17482[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17483 = state_17365;
state_17365 = G__17483;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = function(state_17365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1.call(this,state_17365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17380 = f__15236__auto__.call(null);
(statearr_17380[(6)] = c__15235__auto___17475);

return statearr_17380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17418){
var state_val_17419 = (state_17418[(1)]);
if((state_val_17419 === (7))){
var inst_17414 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17420_17484 = state_17418__$1;
(statearr_17420_17484[(2)] = inst_17414);

(statearr_17420_17484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (20))){
var state_17418__$1 = state_17418;
var statearr_17421_17485 = state_17418__$1;
(statearr_17421_17485[(2)] = null);

(statearr_17421_17485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (1))){
var state_17418__$1 = state_17418;
var statearr_17422_17486 = state_17418__$1;
(statearr_17422_17486[(2)] = null);

(statearr_17422_17486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (4))){
var inst_17383 = (state_17418[(7)]);
var inst_17383__$1 = (state_17418[(2)]);
var inst_17384 = (inst_17383__$1 == null);
var state_17418__$1 = (function (){var statearr_17423 = state_17418;
(statearr_17423[(7)] = inst_17383__$1);

return statearr_17423;
})();
if(cljs.core.truth_(inst_17384)){
var statearr_17424_17487 = state_17418__$1;
(statearr_17424_17487[(1)] = (5));

} else {
var statearr_17425_17488 = state_17418__$1;
(statearr_17425_17488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (15))){
var inst_17396 = (state_17418[(8)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17418__$1,(18),to,inst_17396);
} else {
if((state_val_17419 === (21))){
var inst_17409 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17426_17489 = state_17418__$1;
(statearr_17426_17489[(2)] = inst_17409);

(statearr_17426_17489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (13))){
var inst_17411 = (state_17418[(2)]);
var state_17418__$1 = (function (){var statearr_17427 = state_17418;
(statearr_17427[(9)] = inst_17411);

return statearr_17427;
})();
var statearr_17428_17490 = state_17418__$1;
(statearr_17428_17490[(2)] = null);

(statearr_17428_17490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (6))){
var inst_17383 = (state_17418[(7)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17418__$1,(11),inst_17383);
} else {
if((state_val_17419 === (17))){
var inst_17404 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17404)){
var statearr_17429_17491 = state_17418__$1;
(statearr_17429_17491[(1)] = (19));

} else {
var statearr_17430_17492 = state_17418__$1;
(statearr_17430_17492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (3))){
var inst_17416 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17418__$1,inst_17416);
} else {
if((state_val_17419 === (12))){
var inst_17393 = (state_17418[(10)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17418__$1,(14),inst_17393);
} else {
if((state_val_17419 === (2))){
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17418__$1,(4),results);
} else {
if((state_val_17419 === (19))){
var state_17418__$1 = state_17418;
var statearr_17431_17493 = state_17418__$1;
(statearr_17431_17493[(2)] = null);

(statearr_17431_17493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (11))){
var inst_17393 = (state_17418[(2)]);
var state_17418__$1 = (function (){var statearr_17432 = state_17418;
(statearr_17432[(10)] = inst_17393);

return statearr_17432;
})();
var statearr_17433_17494 = state_17418__$1;
(statearr_17433_17494[(2)] = null);

(statearr_17433_17494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (9))){
var state_17418__$1 = state_17418;
var statearr_17434_17495 = state_17418__$1;
(statearr_17434_17495[(2)] = null);

(statearr_17434_17495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (5))){
var state_17418__$1 = state_17418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17435_17496 = state_17418__$1;
(statearr_17435_17496[(1)] = (8));

} else {
var statearr_17436_17497 = state_17418__$1;
(statearr_17436_17497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (14))){
var inst_17396 = (state_17418[(8)]);
var inst_17396__$1 = (state_17418[(2)]);
var inst_17397 = (inst_17396__$1 == null);
var inst_17398 = cljs.core.not.call(null,inst_17397);
var state_17418__$1 = (function (){var statearr_17437 = state_17418;
(statearr_17437[(8)] = inst_17396__$1);

return statearr_17437;
})();
if(inst_17398){
var statearr_17438_17498 = state_17418__$1;
(statearr_17438_17498[(1)] = (15));

} else {
var statearr_17439_17499 = state_17418__$1;
(statearr_17439_17499[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (16))){
var state_17418__$1 = state_17418;
var statearr_17440_17500 = state_17418__$1;
(statearr_17440_17500[(2)] = false);

(statearr_17440_17500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (10))){
var inst_17390 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17441_17501 = state_17418__$1;
(statearr_17441_17501[(2)] = inst_17390);

(statearr_17441_17501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (18))){
var inst_17401 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17442_17502 = state_17418__$1;
(statearr_17442_17502[(2)] = inst_17401);

(statearr_17442_17502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (8))){
var inst_17387 = cljs.core.async.close_BANG_.call(null,to);
var state_17418__$1 = state_17418;
var statearr_17443_17503 = state_17418__$1;
(statearr_17443_17503[(2)] = inst_17387);

(statearr_17443_17503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0 = (function (){
var statearr_17444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__);

(statearr_17444[(1)] = (1));

return statearr_17444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1 = (function (state_17418){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17445){if((e17445 instanceof Object)){
var ex__15072__auto__ = e17445;
var statearr_17446_17504 = state_17418;
(statearr_17446_17504[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17505 = state_17418;
state_17418 = G__17505;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15069__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17447 = f__15236__auto__.call(null);
(statearr_17447[(6)] = c__15235__auto__);

return statearr_17447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17507 = arguments.length;
switch (G__17507) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17510 = arguments.length;
switch (G__17510) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17513 = arguments.length;
switch (G__17513) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15235__auto___17562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17539){
var state_val_17540 = (state_17539[(1)]);
if((state_val_17540 === (7))){
var inst_17535 = (state_17539[(2)]);
var state_17539__$1 = state_17539;
var statearr_17541_17563 = state_17539__$1;
(statearr_17541_17563[(2)] = inst_17535);

(statearr_17541_17563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (1))){
var state_17539__$1 = state_17539;
var statearr_17542_17564 = state_17539__$1;
(statearr_17542_17564[(2)] = null);

(statearr_17542_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (4))){
var inst_17516 = (state_17539[(7)]);
var inst_17516__$1 = (state_17539[(2)]);
var inst_17517 = (inst_17516__$1 == null);
var state_17539__$1 = (function (){var statearr_17543 = state_17539;
(statearr_17543[(7)] = inst_17516__$1);

return statearr_17543;
})();
if(cljs.core.truth_(inst_17517)){
var statearr_17544_17565 = state_17539__$1;
(statearr_17544_17565[(1)] = (5));

} else {
var statearr_17545_17566 = state_17539__$1;
(statearr_17545_17566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (13))){
var state_17539__$1 = state_17539;
var statearr_17546_17567 = state_17539__$1;
(statearr_17546_17567[(2)] = null);

(statearr_17546_17567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (6))){
var inst_17516 = (state_17539[(7)]);
var inst_17522 = p.call(null,inst_17516);
var state_17539__$1 = state_17539;
if(cljs.core.truth_(inst_17522)){
var statearr_17547_17568 = state_17539__$1;
(statearr_17547_17568[(1)] = (9));

} else {
var statearr_17548_17569 = state_17539__$1;
(statearr_17548_17569[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (3))){
var inst_17537 = (state_17539[(2)]);
var state_17539__$1 = state_17539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17539__$1,inst_17537);
} else {
if((state_val_17540 === (12))){
var state_17539__$1 = state_17539;
var statearr_17549_17570 = state_17539__$1;
(statearr_17549_17570[(2)] = null);

(statearr_17549_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (2))){
var state_17539__$1 = state_17539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17539__$1,(4),ch);
} else {
if((state_val_17540 === (11))){
var inst_17516 = (state_17539[(7)]);
var inst_17526 = (state_17539[(2)]);
var state_17539__$1 = state_17539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17539__$1,(8),inst_17526,inst_17516);
} else {
if((state_val_17540 === (9))){
var state_17539__$1 = state_17539;
var statearr_17550_17571 = state_17539__$1;
(statearr_17550_17571[(2)] = tc);

(statearr_17550_17571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (5))){
var inst_17519 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17520 = cljs.core.async.close_BANG_.call(null,fc);
var state_17539__$1 = (function (){var statearr_17551 = state_17539;
(statearr_17551[(8)] = inst_17519);

return statearr_17551;
})();
var statearr_17552_17572 = state_17539__$1;
(statearr_17552_17572[(2)] = inst_17520);

(statearr_17552_17572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (14))){
var inst_17533 = (state_17539[(2)]);
var state_17539__$1 = state_17539;
var statearr_17553_17573 = state_17539__$1;
(statearr_17553_17573[(2)] = inst_17533);

(statearr_17553_17573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (10))){
var state_17539__$1 = state_17539;
var statearr_17554_17574 = state_17539__$1;
(statearr_17554_17574[(2)] = fc);

(statearr_17554_17574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17540 === (8))){
var inst_17528 = (state_17539[(2)]);
var state_17539__$1 = state_17539;
if(cljs.core.truth_(inst_17528)){
var statearr_17555_17575 = state_17539__$1;
(statearr_17555_17575[(1)] = (12));

} else {
var statearr_17556_17576 = state_17539__$1;
(statearr_17556_17576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_17557 = [null,null,null,null,null,null,null,null,null];
(statearr_17557[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_17557[(1)] = (1));

return statearr_17557;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_17539){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17558){if((e17558 instanceof Object)){
var ex__15072__auto__ = e17558;
var statearr_17559_17577 = state_17539;
(statearr_17559_17577[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17578 = state_17539;
state_17539 = G__17578;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_17539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_17539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17560 = f__15236__auto__.call(null);
(statearr_17560[(6)] = c__15235__auto___17562);

return statearr_17560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17599){
var state_val_17600 = (state_17599[(1)]);
if((state_val_17600 === (7))){
var inst_17595 = (state_17599[(2)]);
var state_17599__$1 = state_17599;
var statearr_17601_17619 = state_17599__$1;
(statearr_17601_17619[(2)] = inst_17595);

(statearr_17601_17619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (1))){
var inst_17579 = init;
var state_17599__$1 = (function (){var statearr_17602 = state_17599;
(statearr_17602[(7)] = inst_17579);

return statearr_17602;
})();
var statearr_17603_17620 = state_17599__$1;
(statearr_17603_17620[(2)] = null);

(statearr_17603_17620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (4))){
var inst_17582 = (state_17599[(8)]);
var inst_17582__$1 = (state_17599[(2)]);
var inst_17583 = (inst_17582__$1 == null);
var state_17599__$1 = (function (){var statearr_17604 = state_17599;
(statearr_17604[(8)] = inst_17582__$1);

return statearr_17604;
})();
if(cljs.core.truth_(inst_17583)){
var statearr_17605_17621 = state_17599__$1;
(statearr_17605_17621[(1)] = (5));

} else {
var statearr_17606_17622 = state_17599__$1;
(statearr_17606_17622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (6))){
var inst_17582 = (state_17599[(8)]);
var inst_17586 = (state_17599[(9)]);
var inst_17579 = (state_17599[(7)]);
var inst_17586__$1 = f.call(null,inst_17579,inst_17582);
var inst_17587 = cljs.core.reduced_QMARK_.call(null,inst_17586__$1);
var state_17599__$1 = (function (){var statearr_17607 = state_17599;
(statearr_17607[(9)] = inst_17586__$1);

return statearr_17607;
})();
if(inst_17587){
var statearr_17608_17623 = state_17599__$1;
(statearr_17608_17623[(1)] = (8));

} else {
var statearr_17609_17624 = state_17599__$1;
(statearr_17609_17624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (3))){
var inst_17597 = (state_17599[(2)]);
var state_17599__$1 = state_17599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17599__$1,inst_17597);
} else {
if((state_val_17600 === (2))){
var state_17599__$1 = state_17599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17599__$1,(4),ch);
} else {
if((state_val_17600 === (9))){
var inst_17586 = (state_17599[(9)]);
var inst_17579 = inst_17586;
var state_17599__$1 = (function (){var statearr_17610 = state_17599;
(statearr_17610[(7)] = inst_17579);

return statearr_17610;
})();
var statearr_17611_17625 = state_17599__$1;
(statearr_17611_17625[(2)] = null);

(statearr_17611_17625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (5))){
var inst_17579 = (state_17599[(7)]);
var state_17599__$1 = state_17599;
var statearr_17612_17626 = state_17599__$1;
(statearr_17612_17626[(2)] = inst_17579);

(statearr_17612_17626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (10))){
var inst_17593 = (state_17599[(2)]);
var state_17599__$1 = state_17599;
var statearr_17613_17627 = state_17599__$1;
(statearr_17613_17627[(2)] = inst_17593);

(statearr_17613_17627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (8))){
var inst_17586 = (state_17599[(9)]);
var inst_17589 = cljs.core.deref.call(null,inst_17586);
var state_17599__$1 = state_17599;
var statearr_17614_17628 = state_17599__$1;
(statearr_17614_17628[(2)] = inst_17589);

(statearr_17614_17628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15069__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15069__auto____0 = (function (){
var statearr_17615 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17615[(0)] = cljs$core$async$reduce_$_state_machine__15069__auto__);

(statearr_17615[(1)] = (1));

return statearr_17615;
});
var cljs$core$async$reduce_$_state_machine__15069__auto____1 = (function (state_17599){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17616){if((e17616 instanceof Object)){
var ex__15072__auto__ = e17616;
var statearr_17617_17629 = state_17599;
(statearr_17617_17629[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17630 = state_17599;
state_17599 = G__17630;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15069__auto__ = function(state_17599){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15069__auto____1.call(this,state_17599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15069__auto____0;
cljs$core$async$reduce_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15069__auto____1;
return cljs$core$async$reduce_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17618 = f__15236__auto__.call(null);
(statearr_17618[(6)] = c__15235__auto__);

return statearr_17618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17636){
var state_val_17637 = (state_17636[(1)]);
if((state_val_17637 === (1))){
var inst_17631 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17636__$1 = state_17636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17636__$1,(2),inst_17631);
} else {
if((state_val_17637 === (2))){
var inst_17633 = (state_17636[(2)]);
var inst_17634 = f__$1.call(null,inst_17633);
var state_17636__$1 = state_17636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17636__$1,inst_17634);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15069__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15069__auto____0 = (function (){
var statearr_17638 = [null,null,null,null,null,null,null];
(statearr_17638[(0)] = cljs$core$async$transduce_$_state_machine__15069__auto__);

(statearr_17638[(1)] = (1));

return statearr_17638;
});
var cljs$core$async$transduce_$_state_machine__15069__auto____1 = (function (state_17636){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17639){if((e17639 instanceof Object)){
var ex__15072__auto__ = e17639;
var statearr_17640_17642 = state_17636;
(statearr_17640_17642[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17643 = state_17636;
state_17636 = G__17643;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15069__auto__ = function(state_17636){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15069__auto____1.call(this,state_17636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15069__auto____0;
cljs$core$async$transduce_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15069__auto____1;
return cljs$core$async$transduce_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17641 = f__15236__auto__.call(null);
(statearr_17641[(6)] = c__15235__auto__);

return statearr_17641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17645 = arguments.length;
switch (G__17645) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17670){
var state_val_17671 = (state_17670[(1)]);
if((state_val_17671 === (7))){
var inst_17652 = (state_17670[(2)]);
var state_17670__$1 = state_17670;
var statearr_17672_17693 = state_17670__$1;
(statearr_17672_17693[(2)] = inst_17652);

(statearr_17672_17693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (1))){
var inst_17646 = cljs.core.seq.call(null,coll);
var inst_17647 = inst_17646;
var state_17670__$1 = (function (){var statearr_17673 = state_17670;
(statearr_17673[(7)] = inst_17647);

return statearr_17673;
})();
var statearr_17674_17694 = state_17670__$1;
(statearr_17674_17694[(2)] = null);

(statearr_17674_17694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (4))){
var inst_17647 = (state_17670[(7)]);
var inst_17650 = cljs.core.first.call(null,inst_17647);
var state_17670__$1 = state_17670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17670__$1,(7),ch,inst_17650);
} else {
if((state_val_17671 === (13))){
var inst_17664 = (state_17670[(2)]);
var state_17670__$1 = state_17670;
var statearr_17675_17695 = state_17670__$1;
(statearr_17675_17695[(2)] = inst_17664);

(statearr_17675_17695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (6))){
var inst_17655 = (state_17670[(2)]);
var state_17670__$1 = state_17670;
if(cljs.core.truth_(inst_17655)){
var statearr_17676_17696 = state_17670__$1;
(statearr_17676_17696[(1)] = (8));

} else {
var statearr_17677_17697 = state_17670__$1;
(statearr_17677_17697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (3))){
var inst_17668 = (state_17670[(2)]);
var state_17670__$1 = state_17670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17670__$1,inst_17668);
} else {
if((state_val_17671 === (12))){
var state_17670__$1 = state_17670;
var statearr_17678_17698 = state_17670__$1;
(statearr_17678_17698[(2)] = null);

(statearr_17678_17698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (2))){
var inst_17647 = (state_17670[(7)]);
var state_17670__$1 = state_17670;
if(cljs.core.truth_(inst_17647)){
var statearr_17679_17699 = state_17670__$1;
(statearr_17679_17699[(1)] = (4));

} else {
var statearr_17680_17700 = state_17670__$1;
(statearr_17680_17700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (11))){
var inst_17661 = cljs.core.async.close_BANG_.call(null,ch);
var state_17670__$1 = state_17670;
var statearr_17681_17701 = state_17670__$1;
(statearr_17681_17701[(2)] = inst_17661);

(statearr_17681_17701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (9))){
var state_17670__$1 = state_17670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17682_17702 = state_17670__$1;
(statearr_17682_17702[(1)] = (11));

} else {
var statearr_17683_17703 = state_17670__$1;
(statearr_17683_17703[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (5))){
var inst_17647 = (state_17670[(7)]);
var state_17670__$1 = state_17670;
var statearr_17684_17704 = state_17670__$1;
(statearr_17684_17704[(2)] = inst_17647);

(statearr_17684_17704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (10))){
var inst_17666 = (state_17670[(2)]);
var state_17670__$1 = state_17670;
var statearr_17685_17705 = state_17670__$1;
(statearr_17685_17705[(2)] = inst_17666);

(statearr_17685_17705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17671 === (8))){
var inst_17647 = (state_17670[(7)]);
var inst_17657 = cljs.core.next.call(null,inst_17647);
var inst_17647__$1 = inst_17657;
var state_17670__$1 = (function (){var statearr_17686 = state_17670;
(statearr_17686[(7)] = inst_17647__$1);

return statearr_17686;
})();
var statearr_17687_17706 = state_17670__$1;
(statearr_17687_17706[(2)] = null);

(statearr_17687_17706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_17688 = [null,null,null,null,null,null,null,null];
(statearr_17688[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_17688[(1)] = (1));

return statearr_17688;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_17670){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17689){if((e17689 instanceof Object)){
var ex__15072__auto__ = e17689;
var statearr_17690_17707 = state_17670;
(statearr_17690_17707[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17708 = state_17670;
state_17670 = G__17708;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_17670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_17670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17691 = f__15236__auto__.call(null);
(statearr_17691[(6)] = c__15235__auto__);

return statearr_17691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17709 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17709.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17710 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17710.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17711 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17711.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17712 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17712.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17713 = (function (ch,cs,meta17714){
this.ch = ch;
this.cs = cs;
this.meta17714 = meta17714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17715,meta17714__$1){
var self__ = this;
var _17715__$1 = this;
return (new cljs.core.async.t_cljs$core$async17713(self__.ch,self__.cs,meta17714__$1));
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17715){
var self__ = this;
var _17715__$1 = this;
return self__.meta17714;
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17714","meta17714",-2052433587,null)], null);
}));

(cljs.core.async.t_cljs$core$async17713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17713");

(cljs.core.async.t_cljs$core$async17713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17713.
 */
cljs.core.async.__GT_t_cljs$core$async17713 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17713(ch__$1,cs__$1,meta17714){
return (new cljs.core.async.t_cljs$core$async17713(ch__$1,cs__$1,meta17714));
});

}

return (new cljs.core.async.t_cljs$core$async17713(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__15235__auto___17935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (7))){
var inst_17846 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17852_17936 = state_17850__$1;
(statearr_17852_17936[(2)] = inst_17846);

(statearr_17852_17936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (20))){
var inst_17749 = (state_17850[(7)]);
var inst_17761 = cljs.core.first.call(null,inst_17749);
var inst_17762 = cljs.core.nth.call(null,inst_17761,(0),null);
var inst_17763 = cljs.core.nth.call(null,inst_17761,(1),null);
var state_17850__$1 = (function (){var statearr_17853 = state_17850;
(statearr_17853[(8)] = inst_17762);

return statearr_17853;
})();
if(cljs.core.truth_(inst_17763)){
var statearr_17854_17937 = state_17850__$1;
(statearr_17854_17937[(1)] = (22));

} else {
var statearr_17855_17938 = state_17850__$1;
(statearr_17855_17938[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (27))){
var inst_17798 = (state_17850[(9)]);
var inst_17793 = (state_17850[(10)]);
var inst_17791 = (state_17850[(11)]);
var inst_17718 = (state_17850[(12)]);
var inst_17798__$1 = cljs.core._nth.call(null,inst_17791,inst_17793);
var inst_17799 = cljs.core.async.put_BANG_.call(null,inst_17798__$1,inst_17718,done);
var state_17850__$1 = (function (){var statearr_17856 = state_17850;
(statearr_17856[(9)] = inst_17798__$1);

return statearr_17856;
})();
if(cljs.core.truth_(inst_17799)){
var statearr_17857_17939 = state_17850__$1;
(statearr_17857_17939[(1)] = (30));

} else {
var statearr_17858_17940 = state_17850__$1;
(statearr_17858_17940[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (1))){
var state_17850__$1 = state_17850;
var statearr_17859_17941 = state_17850__$1;
(statearr_17859_17941[(2)] = null);

(statearr_17859_17941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (24))){
var inst_17749 = (state_17850[(7)]);
var inst_17768 = (state_17850[(2)]);
var inst_17769 = cljs.core.next.call(null,inst_17749);
var inst_17727 = inst_17769;
var inst_17728 = null;
var inst_17729 = (0);
var inst_17730 = (0);
var state_17850__$1 = (function (){var statearr_17860 = state_17850;
(statearr_17860[(13)] = inst_17768);

(statearr_17860[(14)] = inst_17730);

(statearr_17860[(15)] = inst_17728);

(statearr_17860[(16)] = inst_17727);

(statearr_17860[(17)] = inst_17729);

return statearr_17860;
})();
var statearr_17861_17942 = state_17850__$1;
(statearr_17861_17942[(2)] = null);

(statearr_17861_17942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (39))){
var state_17850__$1 = state_17850;
var statearr_17865_17943 = state_17850__$1;
(statearr_17865_17943[(2)] = null);

(statearr_17865_17943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (4))){
var inst_17718 = (state_17850[(12)]);
var inst_17718__$1 = (state_17850[(2)]);
var inst_17719 = (inst_17718__$1 == null);
var state_17850__$1 = (function (){var statearr_17866 = state_17850;
(statearr_17866[(12)] = inst_17718__$1);

return statearr_17866;
})();
if(cljs.core.truth_(inst_17719)){
var statearr_17867_17944 = state_17850__$1;
(statearr_17867_17944[(1)] = (5));

} else {
var statearr_17868_17945 = state_17850__$1;
(statearr_17868_17945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (15))){
var inst_17730 = (state_17850[(14)]);
var inst_17728 = (state_17850[(15)]);
var inst_17727 = (state_17850[(16)]);
var inst_17729 = (state_17850[(17)]);
var inst_17745 = (state_17850[(2)]);
var inst_17746 = (inst_17730 + (1));
var tmp17862 = inst_17728;
var tmp17863 = inst_17727;
var tmp17864 = inst_17729;
var inst_17727__$1 = tmp17863;
var inst_17728__$1 = tmp17862;
var inst_17729__$1 = tmp17864;
var inst_17730__$1 = inst_17746;
var state_17850__$1 = (function (){var statearr_17869 = state_17850;
(statearr_17869[(14)] = inst_17730__$1);

(statearr_17869[(15)] = inst_17728__$1);

(statearr_17869[(16)] = inst_17727__$1);

(statearr_17869[(18)] = inst_17745);

(statearr_17869[(17)] = inst_17729__$1);

return statearr_17869;
})();
var statearr_17870_17946 = state_17850__$1;
(statearr_17870_17946[(2)] = null);

(statearr_17870_17946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (21))){
var inst_17772 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17874_17947 = state_17850__$1;
(statearr_17874_17947[(2)] = inst_17772);

(statearr_17874_17947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (31))){
var inst_17798 = (state_17850[(9)]);
var inst_17802 = done.call(null,null);
var inst_17803 = cljs.core.async.untap_STAR_.call(null,m,inst_17798);
var state_17850__$1 = (function (){var statearr_17875 = state_17850;
(statearr_17875[(19)] = inst_17802);

return statearr_17875;
})();
var statearr_17876_17948 = state_17850__$1;
(statearr_17876_17948[(2)] = inst_17803);

(statearr_17876_17948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (32))){
var inst_17792 = (state_17850[(20)]);
var inst_17790 = (state_17850[(21)]);
var inst_17793 = (state_17850[(10)]);
var inst_17791 = (state_17850[(11)]);
var inst_17805 = (state_17850[(2)]);
var inst_17806 = (inst_17793 + (1));
var tmp17871 = inst_17792;
var tmp17872 = inst_17790;
var tmp17873 = inst_17791;
var inst_17790__$1 = tmp17872;
var inst_17791__$1 = tmp17873;
var inst_17792__$1 = tmp17871;
var inst_17793__$1 = inst_17806;
var state_17850__$1 = (function (){var statearr_17877 = state_17850;
(statearr_17877[(20)] = inst_17792__$1);

(statearr_17877[(21)] = inst_17790__$1);

(statearr_17877[(10)] = inst_17793__$1);

(statearr_17877[(22)] = inst_17805);

(statearr_17877[(11)] = inst_17791__$1);

return statearr_17877;
})();
var statearr_17878_17949 = state_17850__$1;
(statearr_17878_17949[(2)] = null);

(statearr_17878_17949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (40))){
var inst_17818 = (state_17850[(23)]);
var inst_17822 = done.call(null,null);
var inst_17823 = cljs.core.async.untap_STAR_.call(null,m,inst_17818);
var state_17850__$1 = (function (){var statearr_17879 = state_17850;
(statearr_17879[(24)] = inst_17822);

return statearr_17879;
})();
var statearr_17880_17950 = state_17850__$1;
(statearr_17880_17950[(2)] = inst_17823);

(statearr_17880_17950[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (33))){
var inst_17809 = (state_17850[(25)]);
var inst_17811 = cljs.core.chunked_seq_QMARK_.call(null,inst_17809);
var state_17850__$1 = state_17850;
if(inst_17811){
var statearr_17881_17951 = state_17850__$1;
(statearr_17881_17951[(1)] = (36));

} else {
var statearr_17882_17952 = state_17850__$1;
(statearr_17882_17952[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (13))){
var inst_17739 = (state_17850[(26)]);
var inst_17742 = cljs.core.async.close_BANG_.call(null,inst_17739);
var state_17850__$1 = state_17850;
var statearr_17883_17953 = state_17850__$1;
(statearr_17883_17953[(2)] = inst_17742);

(statearr_17883_17953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (22))){
var inst_17762 = (state_17850[(8)]);
var inst_17765 = cljs.core.async.close_BANG_.call(null,inst_17762);
var state_17850__$1 = state_17850;
var statearr_17884_17954 = state_17850__$1;
(statearr_17884_17954[(2)] = inst_17765);

(statearr_17884_17954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (36))){
var inst_17809 = (state_17850[(25)]);
var inst_17813 = cljs.core.chunk_first.call(null,inst_17809);
var inst_17814 = cljs.core.chunk_rest.call(null,inst_17809);
var inst_17815 = cljs.core.count.call(null,inst_17813);
var inst_17790 = inst_17814;
var inst_17791 = inst_17813;
var inst_17792 = inst_17815;
var inst_17793 = (0);
var state_17850__$1 = (function (){var statearr_17885 = state_17850;
(statearr_17885[(20)] = inst_17792);

(statearr_17885[(21)] = inst_17790);

(statearr_17885[(10)] = inst_17793);

(statearr_17885[(11)] = inst_17791);

return statearr_17885;
})();
var statearr_17886_17955 = state_17850__$1;
(statearr_17886_17955[(2)] = null);

(statearr_17886_17955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (41))){
var inst_17809 = (state_17850[(25)]);
var inst_17825 = (state_17850[(2)]);
var inst_17826 = cljs.core.next.call(null,inst_17809);
var inst_17790 = inst_17826;
var inst_17791 = null;
var inst_17792 = (0);
var inst_17793 = (0);
var state_17850__$1 = (function (){var statearr_17887 = state_17850;
(statearr_17887[(20)] = inst_17792);

(statearr_17887[(21)] = inst_17790);

(statearr_17887[(10)] = inst_17793);

(statearr_17887[(27)] = inst_17825);

(statearr_17887[(11)] = inst_17791);

return statearr_17887;
})();
var statearr_17888_17956 = state_17850__$1;
(statearr_17888_17956[(2)] = null);

(statearr_17888_17956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (43))){
var state_17850__$1 = state_17850;
var statearr_17889_17957 = state_17850__$1;
(statearr_17889_17957[(2)] = null);

(statearr_17889_17957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (29))){
var inst_17834 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17890_17958 = state_17850__$1;
(statearr_17890_17958[(2)] = inst_17834);

(statearr_17890_17958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (44))){
var inst_17843 = (state_17850[(2)]);
var state_17850__$1 = (function (){var statearr_17891 = state_17850;
(statearr_17891[(28)] = inst_17843);

return statearr_17891;
})();
var statearr_17892_17959 = state_17850__$1;
(statearr_17892_17959[(2)] = null);

(statearr_17892_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (6))){
var inst_17782 = (state_17850[(29)]);
var inst_17781 = cljs.core.deref.call(null,cs);
var inst_17782__$1 = cljs.core.keys.call(null,inst_17781);
var inst_17783 = cljs.core.count.call(null,inst_17782__$1);
var inst_17784 = cljs.core.reset_BANG_.call(null,dctr,inst_17783);
var inst_17789 = cljs.core.seq.call(null,inst_17782__$1);
var inst_17790 = inst_17789;
var inst_17791 = null;
var inst_17792 = (0);
var inst_17793 = (0);
var state_17850__$1 = (function (){var statearr_17893 = state_17850;
(statearr_17893[(20)] = inst_17792);

(statearr_17893[(21)] = inst_17790);

(statearr_17893[(29)] = inst_17782__$1);

(statearr_17893[(10)] = inst_17793);

(statearr_17893[(11)] = inst_17791);

(statearr_17893[(30)] = inst_17784);

return statearr_17893;
})();
var statearr_17894_17960 = state_17850__$1;
(statearr_17894_17960[(2)] = null);

(statearr_17894_17960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (28))){
var inst_17790 = (state_17850[(21)]);
var inst_17809 = (state_17850[(25)]);
var inst_17809__$1 = cljs.core.seq.call(null,inst_17790);
var state_17850__$1 = (function (){var statearr_17895 = state_17850;
(statearr_17895[(25)] = inst_17809__$1);

return statearr_17895;
})();
if(inst_17809__$1){
var statearr_17896_17961 = state_17850__$1;
(statearr_17896_17961[(1)] = (33));

} else {
var statearr_17897_17962 = state_17850__$1;
(statearr_17897_17962[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (25))){
var inst_17792 = (state_17850[(20)]);
var inst_17793 = (state_17850[(10)]);
var inst_17795 = (inst_17793 < inst_17792);
var inst_17796 = inst_17795;
var state_17850__$1 = state_17850;
if(cljs.core.truth_(inst_17796)){
var statearr_17898_17963 = state_17850__$1;
(statearr_17898_17963[(1)] = (27));

} else {
var statearr_17899_17964 = state_17850__$1;
(statearr_17899_17964[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (34))){
var state_17850__$1 = state_17850;
var statearr_17900_17965 = state_17850__$1;
(statearr_17900_17965[(2)] = null);

(statearr_17900_17965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (17))){
var state_17850__$1 = state_17850;
var statearr_17901_17966 = state_17850__$1;
(statearr_17901_17966[(2)] = null);

(statearr_17901_17966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (3))){
var inst_17848 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17850__$1,inst_17848);
} else {
if((state_val_17851 === (12))){
var inst_17777 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17902_17967 = state_17850__$1;
(statearr_17902_17967[(2)] = inst_17777);

(statearr_17902_17967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (2))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17850__$1,(4),ch);
} else {
if((state_val_17851 === (23))){
var state_17850__$1 = state_17850;
var statearr_17903_17968 = state_17850__$1;
(statearr_17903_17968[(2)] = null);

(statearr_17903_17968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (35))){
var inst_17832 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17904_17969 = state_17850__$1;
(statearr_17904_17969[(2)] = inst_17832);

(statearr_17904_17969[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (19))){
var inst_17749 = (state_17850[(7)]);
var inst_17753 = cljs.core.chunk_first.call(null,inst_17749);
var inst_17754 = cljs.core.chunk_rest.call(null,inst_17749);
var inst_17755 = cljs.core.count.call(null,inst_17753);
var inst_17727 = inst_17754;
var inst_17728 = inst_17753;
var inst_17729 = inst_17755;
var inst_17730 = (0);
var state_17850__$1 = (function (){var statearr_17905 = state_17850;
(statearr_17905[(14)] = inst_17730);

(statearr_17905[(15)] = inst_17728);

(statearr_17905[(16)] = inst_17727);

(statearr_17905[(17)] = inst_17729);

return statearr_17905;
})();
var statearr_17906_17970 = state_17850__$1;
(statearr_17906_17970[(2)] = null);

(statearr_17906_17970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (11))){
var inst_17727 = (state_17850[(16)]);
var inst_17749 = (state_17850[(7)]);
var inst_17749__$1 = cljs.core.seq.call(null,inst_17727);
var state_17850__$1 = (function (){var statearr_17907 = state_17850;
(statearr_17907[(7)] = inst_17749__$1);

return statearr_17907;
})();
if(inst_17749__$1){
var statearr_17908_17971 = state_17850__$1;
(statearr_17908_17971[(1)] = (16));

} else {
var statearr_17909_17972 = state_17850__$1;
(statearr_17909_17972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (9))){
var inst_17779 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17910_17973 = state_17850__$1;
(statearr_17910_17973[(2)] = inst_17779);

(statearr_17910_17973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (5))){
var inst_17725 = cljs.core.deref.call(null,cs);
var inst_17726 = cljs.core.seq.call(null,inst_17725);
var inst_17727 = inst_17726;
var inst_17728 = null;
var inst_17729 = (0);
var inst_17730 = (0);
var state_17850__$1 = (function (){var statearr_17911 = state_17850;
(statearr_17911[(14)] = inst_17730);

(statearr_17911[(15)] = inst_17728);

(statearr_17911[(16)] = inst_17727);

(statearr_17911[(17)] = inst_17729);

return statearr_17911;
})();
var statearr_17912_17974 = state_17850__$1;
(statearr_17912_17974[(2)] = null);

(statearr_17912_17974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (14))){
var state_17850__$1 = state_17850;
var statearr_17913_17975 = state_17850__$1;
(statearr_17913_17975[(2)] = null);

(statearr_17913_17975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (45))){
var inst_17840 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17914_17976 = state_17850__$1;
(statearr_17914_17976[(2)] = inst_17840);

(statearr_17914_17976[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (26))){
var inst_17782 = (state_17850[(29)]);
var inst_17836 = (state_17850[(2)]);
var inst_17837 = cljs.core.seq.call(null,inst_17782);
var state_17850__$1 = (function (){var statearr_17915 = state_17850;
(statearr_17915[(31)] = inst_17836);

return statearr_17915;
})();
if(inst_17837){
var statearr_17916_17977 = state_17850__$1;
(statearr_17916_17977[(1)] = (42));

} else {
var statearr_17917_17978 = state_17850__$1;
(statearr_17917_17978[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (16))){
var inst_17749 = (state_17850[(7)]);
var inst_17751 = cljs.core.chunked_seq_QMARK_.call(null,inst_17749);
var state_17850__$1 = state_17850;
if(inst_17751){
var statearr_17918_17979 = state_17850__$1;
(statearr_17918_17979[(1)] = (19));

} else {
var statearr_17919_17980 = state_17850__$1;
(statearr_17919_17980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (38))){
var inst_17829 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17920_17981 = state_17850__$1;
(statearr_17920_17981[(2)] = inst_17829);

(statearr_17920_17981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (30))){
var state_17850__$1 = state_17850;
var statearr_17921_17982 = state_17850__$1;
(statearr_17921_17982[(2)] = null);

(statearr_17921_17982[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (10))){
var inst_17730 = (state_17850[(14)]);
var inst_17728 = (state_17850[(15)]);
var inst_17738 = cljs.core._nth.call(null,inst_17728,inst_17730);
var inst_17739 = cljs.core.nth.call(null,inst_17738,(0),null);
var inst_17740 = cljs.core.nth.call(null,inst_17738,(1),null);
var state_17850__$1 = (function (){var statearr_17922 = state_17850;
(statearr_17922[(26)] = inst_17739);

return statearr_17922;
})();
if(cljs.core.truth_(inst_17740)){
var statearr_17923_17983 = state_17850__$1;
(statearr_17923_17983[(1)] = (13));

} else {
var statearr_17924_17984 = state_17850__$1;
(statearr_17924_17984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (18))){
var inst_17775 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17925_17985 = state_17850__$1;
(statearr_17925_17985[(2)] = inst_17775);

(statearr_17925_17985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (42))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17850__$1,(45),dchan);
} else {
if((state_val_17851 === (37))){
var inst_17809 = (state_17850[(25)]);
var inst_17818 = (state_17850[(23)]);
var inst_17718 = (state_17850[(12)]);
var inst_17818__$1 = cljs.core.first.call(null,inst_17809);
var inst_17819 = cljs.core.async.put_BANG_.call(null,inst_17818__$1,inst_17718,done);
var state_17850__$1 = (function (){var statearr_17926 = state_17850;
(statearr_17926[(23)] = inst_17818__$1);

return statearr_17926;
})();
if(cljs.core.truth_(inst_17819)){
var statearr_17927_17986 = state_17850__$1;
(statearr_17927_17986[(1)] = (39));

} else {
var statearr_17928_17987 = state_17850__$1;
(statearr_17928_17987[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (8))){
var inst_17730 = (state_17850[(14)]);
var inst_17729 = (state_17850[(17)]);
var inst_17732 = (inst_17730 < inst_17729);
var inst_17733 = inst_17732;
var state_17850__$1 = state_17850;
if(cljs.core.truth_(inst_17733)){
var statearr_17929_17988 = state_17850__$1;
(statearr_17929_17988[(1)] = (10));

} else {
var statearr_17930_17989 = state_17850__$1;
(statearr_17930_17989[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15069__auto__ = null;
var cljs$core$async$mult_$_state_machine__15069__auto____0 = (function (){
var statearr_17931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17931[(0)] = cljs$core$async$mult_$_state_machine__15069__auto__);

(statearr_17931[(1)] = (1));

return statearr_17931;
});
var cljs$core$async$mult_$_state_machine__15069__auto____1 = (function (state_17850){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_17850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e17932){if((e17932 instanceof Object)){
var ex__15072__auto__ = e17932;
var statearr_17933_17990 = state_17850;
(statearr_17933_17990[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17991 = state_17850;
state_17850 = G__17991;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15069__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15069__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15069__auto____0;
cljs$core$async$mult_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15069__auto____1;
return cljs$core$async$mult_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_17934 = f__15236__auto__.call(null);
(statearr_17934[(6)] = c__15235__auto___17935);

return statearr_17934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17993 = arguments.length;
switch (G__17993) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17995 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17995.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17996 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17996.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17997 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17997.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17998 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17998.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17999 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17999.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18010 = arguments.length;
var i__4737__auto___18011 = (0);
while(true){
if((i__4737__auto___18011 < len__4736__auto___18010)){
args__4742__auto__.push((arguments[i__4737__auto___18011]));

var G__18012 = (i__4737__auto___18011 + (1));
i__4737__auto___18011 = G__18012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18004){
var map__18005 = p__18004;
var map__18005__$1 = (((((!((map__18005 == null))))?(((((map__18005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18005):map__18005);
var opts = map__18005__$1;
var statearr_18007_18013 = state;
(statearr_18007_18013[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18008_18014 = state;
(statearr_18008_18014[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18009_18015 = state;
(statearr_18009_18015[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18000){
var G__18001 = cljs.core.first.call(null,seq18000);
var seq18000__$1 = cljs.core.next.call(null,seq18000);
var G__18002 = cljs.core.first.call(null,seq18000__$1);
var seq18000__$2 = cljs.core.next.call(null,seq18000__$1);
var G__18003 = cljs.core.first.call(null,seq18000__$2);
var seq18000__$3 = cljs.core.next.call(null,seq18000__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18001,G__18002,G__18003,seq18000__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18016 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18017){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18017 = meta18017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18018,meta18017__$1){
var self__ = this;
var _18018__$1 = this;
return (new cljs.core.async.t_cljs$core$async18016(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18017__$1));
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18018){
var self__ = this;
var _18018__$1 = this;
return self__.meta18017;
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18017","meta18017",-2057817182,null)], null);
}));

(cljs.core.async.t_cljs$core$async18016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18016");

(cljs.core.async.t_cljs$core$async18016.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18016.
 */
cljs.core.async.__GT_t_cljs$core$async18016 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18016(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18017){
return (new cljs.core.async.t_cljs$core$async18016(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18017));
});

}

return (new cljs.core.async.t_cljs$core$async18016(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15235__auto___18180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18120){
var state_val_18121 = (state_18120[(1)]);
if((state_val_18121 === (7))){
var inst_18035 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18122_18181 = state_18120__$1;
(statearr_18122_18181[(2)] = inst_18035);

(statearr_18122_18181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (20))){
var inst_18047 = (state_18120[(7)]);
var state_18120__$1 = state_18120;
var statearr_18123_18182 = state_18120__$1;
(statearr_18123_18182[(2)] = inst_18047);

(statearr_18123_18182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (27))){
var state_18120__$1 = state_18120;
var statearr_18124_18183 = state_18120__$1;
(statearr_18124_18183[(2)] = null);

(statearr_18124_18183[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (1))){
var inst_18022 = (state_18120[(8)]);
var inst_18022__$1 = calc_state.call(null);
var inst_18024 = (inst_18022__$1 == null);
var inst_18025 = cljs.core.not.call(null,inst_18024);
var state_18120__$1 = (function (){var statearr_18125 = state_18120;
(statearr_18125[(8)] = inst_18022__$1);

return statearr_18125;
})();
if(inst_18025){
var statearr_18126_18184 = state_18120__$1;
(statearr_18126_18184[(1)] = (2));

} else {
var statearr_18127_18185 = state_18120__$1;
(statearr_18127_18185[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (24))){
var inst_18094 = (state_18120[(9)]);
var inst_18080 = (state_18120[(10)]);
var inst_18071 = (state_18120[(11)]);
var inst_18094__$1 = inst_18071.call(null,inst_18080);
var state_18120__$1 = (function (){var statearr_18128 = state_18120;
(statearr_18128[(9)] = inst_18094__$1);

return statearr_18128;
})();
if(cljs.core.truth_(inst_18094__$1)){
var statearr_18129_18186 = state_18120__$1;
(statearr_18129_18186[(1)] = (29));

} else {
var statearr_18130_18187 = state_18120__$1;
(statearr_18130_18187[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (4))){
var inst_18038 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18038)){
var statearr_18131_18188 = state_18120__$1;
(statearr_18131_18188[(1)] = (8));

} else {
var statearr_18132_18189 = state_18120__$1;
(statearr_18132_18189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (15))){
var inst_18065 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18065)){
var statearr_18133_18190 = state_18120__$1;
(statearr_18133_18190[(1)] = (19));

} else {
var statearr_18134_18191 = state_18120__$1;
(statearr_18134_18191[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (21))){
var inst_18070 = (state_18120[(12)]);
var inst_18070__$1 = (state_18120[(2)]);
var inst_18071 = cljs.core.get.call(null,inst_18070__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18072 = cljs.core.get.call(null,inst_18070__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18073 = cljs.core.get.call(null,inst_18070__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18120__$1 = (function (){var statearr_18135 = state_18120;
(statearr_18135[(13)] = inst_18072);

(statearr_18135[(12)] = inst_18070__$1);

(statearr_18135[(11)] = inst_18071);

return statearr_18135;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18120__$1,(22),inst_18073);
} else {
if((state_val_18121 === (31))){
var inst_18102 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18102)){
var statearr_18136_18192 = state_18120__$1;
(statearr_18136_18192[(1)] = (32));

} else {
var statearr_18137_18193 = state_18120__$1;
(statearr_18137_18193[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (32))){
var inst_18079 = (state_18120[(14)]);
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18120__$1,(35),out,inst_18079);
} else {
if((state_val_18121 === (33))){
var inst_18070 = (state_18120[(12)]);
var inst_18047 = inst_18070;
var state_18120__$1 = (function (){var statearr_18138 = state_18120;
(statearr_18138[(7)] = inst_18047);

return statearr_18138;
})();
var statearr_18139_18194 = state_18120__$1;
(statearr_18139_18194[(2)] = null);

(statearr_18139_18194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (13))){
var inst_18047 = (state_18120[(7)]);
var inst_18054 = inst_18047.cljs$lang$protocol_mask$partition0$;
var inst_18055 = (inst_18054 & (64));
var inst_18056 = inst_18047.cljs$core$ISeq$;
var inst_18057 = (cljs.core.PROTOCOL_SENTINEL === inst_18056);
var inst_18058 = ((inst_18055) || (inst_18057));
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18058)){
var statearr_18140_18195 = state_18120__$1;
(statearr_18140_18195[(1)] = (16));

} else {
var statearr_18141_18196 = state_18120__$1;
(statearr_18141_18196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (22))){
var inst_18080 = (state_18120[(10)]);
var inst_18079 = (state_18120[(14)]);
var inst_18078 = (state_18120[(2)]);
var inst_18079__$1 = cljs.core.nth.call(null,inst_18078,(0),null);
var inst_18080__$1 = cljs.core.nth.call(null,inst_18078,(1),null);
var inst_18081 = (inst_18079__$1 == null);
var inst_18082 = cljs.core._EQ_.call(null,inst_18080__$1,change);
var inst_18083 = ((inst_18081) || (inst_18082));
var state_18120__$1 = (function (){var statearr_18142 = state_18120;
(statearr_18142[(10)] = inst_18080__$1);

(statearr_18142[(14)] = inst_18079__$1);

return statearr_18142;
})();
if(cljs.core.truth_(inst_18083)){
var statearr_18143_18197 = state_18120__$1;
(statearr_18143_18197[(1)] = (23));

} else {
var statearr_18144_18198 = state_18120__$1;
(statearr_18144_18198[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (36))){
var inst_18070 = (state_18120[(12)]);
var inst_18047 = inst_18070;
var state_18120__$1 = (function (){var statearr_18145 = state_18120;
(statearr_18145[(7)] = inst_18047);

return statearr_18145;
})();
var statearr_18146_18199 = state_18120__$1;
(statearr_18146_18199[(2)] = null);

(statearr_18146_18199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (29))){
var inst_18094 = (state_18120[(9)]);
var state_18120__$1 = state_18120;
var statearr_18147_18200 = state_18120__$1;
(statearr_18147_18200[(2)] = inst_18094);

(statearr_18147_18200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (6))){
var state_18120__$1 = state_18120;
var statearr_18148_18201 = state_18120__$1;
(statearr_18148_18201[(2)] = false);

(statearr_18148_18201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (28))){
var inst_18090 = (state_18120[(2)]);
var inst_18091 = calc_state.call(null);
var inst_18047 = inst_18091;
var state_18120__$1 = (function (){var statearr_18149 = state_18120;
(statearr_18149[(7)] = inst_18047);

(statearr_18149[(15)] = inst_18090);

return statearr_18149;
})();
var statearr_18150_18202 = state_18120__$1;
(statearr_18150_18202[(2)] = null);

(statearr_18150_18202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (25))){
var inst_18116 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18151_18203 = state_18120__$1;
(statearr_18151_18203[(2)] = inst_18116);

(statearr_18151_18203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (34))){
var inst_18114 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18152_18204 = state_18120__$1;
(statearr_18152_18204[(2)] = inst_18114);

(statearr_18152_18204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (17))){
var state_18120__$1 = state_18120;
var statearr_18153_18205 = state_18120__$1;
(statearr_18153_18205[(2)] = false);

(statearr_18153_18205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (3))){
var state_18120__$1 = state_18120;
var statearr_18154_18206 = state_18120__$1;
(statearr_18154_18206[(2)] = false);

(statearr_18154_18206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (12))){
var inst_18118 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18120__$1,inst_18118);
} else {
if((state_val_18121 === (2))){
var inst_18022 = (state_18120[(8)]);
var inst_18027 = inst_18022.cljs$lang$protocol_mask$partition0$;
var inst_18028 = (inst_18027 & (64));
var inst_18029 = inst_18022.cljs$core$ISeq$;
var inst_18030 = (cljs.core.PROTOCOL_SENTINEL === inst_18029);
var inst_18031 = ((inst_18028) || (inst_18030));
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18031)){
var statearr_18155_18207 = state_18120__$1;
(statearr_18155_18207[(1)] = (5));

} else {
var statearr_18156_18208 = state_18120__$1;
(statearr_18156_18208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (23))){
var inst_18079 = (state_18120[(14)]);
var inst_18085 = (inst_18079 == null);
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18085)){
var statearr_18157_18209 = state_18120__$1;
(statearr_18157_18209[(1)] = (26));

} else {
var statearr_18158_18210 = state_18120__$1;
(statearr_18158_18210[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (35))){
var inst_18105 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18105)){
var statearr_18159_18211 = state_18120__$1;
(statearr_18159_18211[(1)] = (36));

} else {
var statearr_18160_18212 = state_18120__$1;
(statearr_18160_18212[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (19))){
var inst_18047 = (state_18120[(7)]);
var inst_18067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18047);
var state_18120__$1 = state_18120;
var statearr_18161_18213 = state_18120__$1;
(statearr_18161_18213[(2)] = inst_18067);

(statearr_18161_18213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (11))){
var inst_18047 = (state_18120[(7)]);
var inst_18051 = (inst_18047 == null);
var inst_18052 = cljs.core.not.call(null,inst_18051);
var state_18120__$1 = state_18120;
if(inst_18052){
var statearr_18162_18214 = state_18120__$1;
(statearr_18162_18214[(1)] = (13));

} else {
var statearr_18163_18215 = state_18120__$1;
(statearr_18163_18215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (9))){
var inst_18022 = (state_18120[(8)]);
var state_18120__$1 = state_18120;
var statearr_18164_18216 = state_18120__$1;
(statearr_18164_18216[(2)] = inst_18022);

(statearr_18164_18216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (5))){
var state_18120__$1 = state_18120;
var statearr_18165_18217 = state_18120__$1;
(statearr_18165_18217[(2)] = true);

(statearr_18165_18217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (14))){
var state_18120__$1 = state_18120;
var statearr_18166_18218 = state_18120__$1;
(statearr_18166_18218[(2)] = false);

(statearr_18166_18218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (26))){
var inst_18080 = (state_18120[(10)]);
var inst_18087 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18080);
var state_18120__$1 = state_18120;
var statearr_18167_18219 = state_18120__$1;
(statearr_18167_18219[(2)] = inst_18087);

(statearr_18167_18219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (16))){
var state_18120__$1 = state_18120;
var statearr_18168_18220 = state_18120__$1;
(statearr_18168_18220[(2)] = true);

(statearr_18168_18220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (38))){
var inst_18110 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18169_18221 = state_18120__$1;
(statearr_18169_18221[(2)] = inst_18110);

(statearr_18169_18221[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (30))){
var inst_18072 = (state_18120[(13)]);
var inst_18080 = (state_18120[(10)]);
var inst_18071 = (state_18120[(11)]);
var inst_18097 = cljs.core.empty_QMARK_.call(null,inst_18071);
var inst_18098 = inst_18072.call(null,inst_18080);
var inst_18099 = cljs.core.not.call(null,inst_18098);
var inst_18100 = ((inst_18097) && (inst_18099));
var state_18120__$1 = state_18120;
var statearr_18170_18222 = state_18120__$1;
(statearr_18170_18222[(2)] = inst_18100);

(statearr_18170_18222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (10))){
var inst_18022 = (state_18120[(8)]);
var inst_18043 = (state_18120[(2)]);
var inst_18044 = cljs.core.get.call(null,inst_18043,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18045 = cljs.core.get.call(null,inst_18043,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18046 = cljs.core.get.call(null,inst_18043,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18047 = inst_18022;
var state_18120__$1 = (function (){var statearr_18171 = state_18120;
(statearr_18171[(7)] = inst_18047);

(statearr_18171[(16)] = inst_18045);

(statearr_18171[(17)] = inst_18044);

(statearr_18171[(18)] = inst_18046);

return statearr_18171;
})();
var statearr_18172_18223 = state_18120__$1;
(statearr_18172_18223[(2)] = null);

(statearr_18172_18223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (18))){
var inst_18062 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18173_18224 = state_18120__$1;
(statearr_18173_18224[(2)] = inst_18062);

(statearr_18173_18224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (37))){
var state_18120__$1 = state_18120;
var statearr_18174_18225 = state_18120__$1;
(statearr_18174_18225[(2)] = null);

(statearr_18174_18225[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (8))){
var inst_18022 = (state_18120[(8)]);
var inst_18040 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18022);
var state_18120__$1 = state_18120;
var statearr_18175_18226 = state_18120__$1;
(statearr_18175_18226[(2)] = inst_18040);

(statearr_18175_18226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15069__auto__ = null;
var cljs$core$async$mix_$_state_machine__15069__auto____0 = (function (){
var statearr_18176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18176[(0)] = cljs$core$async$mix_$_state_machine__15069__auto__);

(statearr_18176[(1)] = (1));

return statearr_18176;
});
var cljs$core$async$mix_$_state_machine__15069__auto____1 = (function (state_18120){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18177){if((e18177 instanceof Object)){
var ex__15072__auto__ = e18177;
var statearr_18178_18227 = state_18120;
(statearr_18178_18227[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18228 = state_18120;
state_18120 = G__18228;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15069__auto__ = function(state_18120){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15069__auto____1.call(this,state_18120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15069__auto____0;
cljs$core$async$mix_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15069__auto____1;
return cljs$core$async$mix_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18179 = f__15236__auto__.call(null);
(statearr_18179[(6)] = c__15235__auto___18180);

return statearr_18179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18231 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18231.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18232 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18232.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18233 = (function() {
var G__18234 = null;
var G__18234__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__18234__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__18234 = function(p,v){
switch(arguments.length){
case 1:
return G__18234__1.call(this,p);
case 2:
return G__18234__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18234.cljs$core$IFn$_invoke$arity$1 = G__18234__1;
G__18234.cljs$core$IFn$_invoke$arity$2 = G__18234__2;
return G__18234;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18230 = arguments.length;
switch (G__18230) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18233.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18233.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18238 = arguments.length;
switch (G__18238) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18236_SHARP_){
if(cljs.core.truth_(p1__18236_SHARP_.call(null,topic))){
return p1__18236_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18236_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18239 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18240){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18240 = meta18240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18241,meta18240__$1){
var self__ = this;
var _18241__$1 = this;
return (new cljs.core.async.t_cljs$core$async18239(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18240__$1));
}));

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18241){
var self__ = this;
var _18241__$1 = this;
return self__.meta18240;
}));

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18240","meta18240",-561531277,null)], null);
}));

(cljs.core.async.t_cljs$core$async18239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18239");

(cljs.core.async.t_cljs$core$async18239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18239.
 */
cljs.core.async.__GT_t_cljs$core$async18239 = (function cljs$core$async$__GT_t_cljs$core$async18239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18240){
return (new cljs.core.async.t_cljs$core$async18239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18240));
});

}

return (new cljs.core.async.t_cljs$core$async18239(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15235__auto___18359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18313){
var state_val_18314 = (state_18313[(1)]);
if((state_val_18314 === (7))){
var inst_18309 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
var statearr_18315_18360 = state_18313__$1;
(statearr_18315_18360[(2)] = inst_18309);

(statearr_18315_18360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (20))){
var state_18313__$1 = state_18313;
var statearr_18316_18361 = state_18313__$1;
(statearr_18316_18361[(2)] = null);

(statearr_18316_18361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (1))){
var state_18313__$1 = state_18313;
var statearr_18317_18362 = state_18313__$1;
(statearr_18317_18362[(2)] = null);

(statearr_18317_18362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (24))){
var inst_18292 = (state_18313[(7)]);
var inst_18301 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18292);
var state_18313__$1 = state_18313;
var statearr_18318_18363 = state_18313__$1;
(statearr_18318_18363[(2)] = inst_18301);

(statearr_18318_18363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (4))){
var inst_18244 = (state_18313[(8)]);
var inst_18244__$1 = (state_18313[(2)]);
var inst_18245 = (inst_18244__$1 == null);
var state_18313__$1 = (function (){var statearr_18319 = state_18313;
(statearr_18319[(8)] = inst_18244__$1);

return statearr_18319;
})();
if(cljs.core.truth_(inst_18245)){
var statearr_18320_18364 = state_18313__$1;
(statearr_18320_18364[(1)] = (5));

} else {
var statearr_18321_18365 = state_18313__$1;
(statearr_18321_18365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (15))){
var inst_18286 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
var statearr_18322_18366 = state_18313__$1;
(statearr_18322_18366[(2)] = inst_18286);

(statearr_18322_18366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (21))){
var inst_18306 = (state_18313[(2)]);
var state_18313__$1 = (function (){var statearr_18323 = state_18313;
(statearr_18323[(9)] = inst_18306);

return statearr_18323;
})();
var statearr_18324_18367 = state_18313__$1;
(statearr_18324_18367[(2)] = null);

(statearr_18324_18367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (13))){
var inst_18268 = (state_18313[(10)]);
var inst_18270 = cljs.core.chunked_seq_QMARK_.call(null,inst_18268);
var state_18313__$1 = state_18313;
if(inst_18270){
var statearr_18325_18368 = state_18313__$1;
(statearr_18325_18368[(1)] = (16));

} else {
var statearr_18326_18369 = state_18313__$1;
(statearr_18326_18369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (22))){
var inst_18298 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
if(cljs.core.truth_(inst_18298)){
var statearr_18327_18370 = state_18313__$1;
(statearr_18327_18370[(1)] = (23));

} else {
var statearr_18328_18371 = state_18313__$1;
(statearr_18328_18371[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (6))){
var inst_18292 = (state_18313[(7)]);
var inst_18294 = (state_18313[(11)]);
var inst_18244 = (state_18313[(8)]);
var inst_18292__$1 = topic_fn.call(null,inst_18244);
var inst_18293 = cljs.core.deref.call(null,mults);
var inst_18294__$1 = cljs.core.get.call(null,inst_18293,inst_18292__$1);
var state_18313__$1 = (function (){var statearr_18329 = state_18313;
(statearr_18329[(7)] = inst_18292__$1);

(statearr_18329[(11)] = inst_18294__$1);

return statearr_18329;
})();
if(cljs.core.truth_(inst_18294__$1)){
var statearr_18330_18372 = state_18313__$1;
(statearr_18330_18372[(1)] = (19));

} else {
var statearr_18331_18373 = state_18313__$1;
(statearr_18331_18373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (25))){
var inst_18303 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
var statearr_18332_18374 = state_18313__$1;
(statearr_18332_18374[(2)] = inst_18303);

(statearr_18332_18374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (17))){
var inst_18268 = (state_18313[(10)]);
var inst_18277 = cljs.core.first.call(null,inst_18268);
var inst_18278 = cljs.core.async.muxch_STAR_.call(null,inst_18277);
var inst_18279 = cljs.core.async.close_BANG_.call(null,inst_18278);
var inst_18280 = cljs.core.next.call(null,inst_18268);
var inst_18254 = inst_18280;
var inst_18255 = null;
var inst_18256 = (0);
var inst_18257 = (0);
var state_18313__$1 = (function (){var statearr_18333 = state_18313;
(statearr_18333[(12)] = inst_18279);

(statearr_18333[(13)] = inst_18255);

(statearr_18333[(14)] = inst_18254);

(statearr_18333[(15)] = inst_18256);

(statearr_18333[(16)] = inst_18257);

return statearr_18333;
})();
var statearr_18334_18375 = state_18313__$1;
(statearr_18334_18375[(2)] = null);

(statearr_18334_18375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (3))){
var inst_18311 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18313__$1,inst_18311);
} else {
if((state_val_18314 === (12))){
var inst_18288 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
var statearr_18335_18376 = state_18313__$1;
(statearr_18335_18376[(2)] = inst_18288);

(statearr_18335_18376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (2))){
var state_18313__$1 = state_18313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18313__$1,(4),ch);
} else {
if((state_val_18314 === (23))){
var state_18313__$1 = state_18313;
var statearr_18336_18377 = state_18313__$1;
(statearr_18336_18377[(2)] = null);

(statearr_18336_18377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (19))){
var inst_18294 = (state_18313[(11)]);
var inst_18244 = (state_18313[(8)]);
var inst_18296 = cljs.core.async.muxch_STAR_.call(null,inst_18294);
var state_18313__$1 = state_18313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18313__$1,(22),inst_18296,inst_18244);
} else {
if((state_val_18314 === (11))){
var inst_18254 = (state_18313[(14)]);
var inst_18268 = (state_18313[(10)]);
var inst_18268__$1 = cljs.core.seq.call(null,inst_18254);
var state_18313__$1 = (function (){var statearr_18337 = state_18313;
(statearr_18337[(10)] = inst_18268__$1);

return statearr_18337;
})();
if(inst_18268__$1){
var statearr_18338_18378 = state_18313__$1;
(statearr_18338_18378[(1)] = (13));

} else {
var statearr_18339_18379 = state_18313__$1;
(statearr_18339_18379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (9))){
var inst_18290 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
var statearr_18340_18380 = state_18313__$1;
(statearr_18340_18380[(2)] = inst_18290);

(statearr_18340_18380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (5))){
var inst_18251 = cljs.core.deref.call(null,mults);
var inst_18252 = cljs.core.vals.call(null,inst_18251);
var inst_18253 = cljs.core.seq.call(null,inst_18252);
var inst_18254 = inst_18253;
var inst_18255 = null;
var inst_18256 = (0);
var inst_18257 = (0);
var state_18313__$1 = (function (){var statearr_18341 = state_18313;
(statearr_18341[(13)] = inst_18255);

(statearr_18341[(14)] = inst_18254);

(statearr_18341[(15)] = inst_18256);

(statearr_18341[(16)] = inst_18257);

return statearr_18341;
})();
var statearr_18342_18381 = state_18313__$1;
(statearr_18342_18381[(2)] = null);

(statearr_18342_18381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (14))){
var state_18313__$1 = state_18313;
var statearr_18346_18382 = state_18313__$1;
(statearr_18346_18382[(2)] = null);

(statearr_18346_18382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (16))){
var inst_18268 = (state_18313[(10)]);
var inst_18272 = cljs.core.chunk_first.call(null,inst_18268);
var inst_18273 = cljs.core.chunk_rest.call(null,inst_18268);
var inst_18274 = cljs.core.count.call(null,inst_18272);
var inst_18254 = inst_18273;
var inst_18255 = inst_18272;
var inst_18256 = inst_18274;
var inst_18257 = (0);
var state_18313__$1 = (function (){var statearr_18347 = state_18313;
(statearr_18347[(13)] = inst_18255);

(statearr_18347[(14)] = inst_18254);

(statearr_18347[(15)] = inst_18256);

(statearr_18347[(16)] = inst_18257);

return statearr_18347;
})();
var statearr_18348_18383 = state_18313__$1;
(statearr_18348_18383[(2)] = null);

(statearr_18348_18383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (10))){
var inst_18255 = (state_18313[(13)]);
var inst_18254 = (state_18313[(14)]);
var inst_18256 = (state_18313[(15)]);
var inst_18257 = (state_18313[(16)]);
var inst_18262 = cljs.core._nth.call(null,inst_18255,inst_18257);
var inst_18263 = cljs.core.async.muxch_STAR_.call(null,inst_18262);
var inst_18264 = cljs.core.async.close_BANG_.call(null,inst_18263);
var inst_18265 = (inst_18257 + (1));
var tmp18343 = inst_18255;
var tmp18344 = inst_18254;
var tmp18345 = inst_18256;
var inst_18254__$1 = tmp18344;
var inst_18255__$1 = tmp18343;
var inst_18256__$1 = tmp18345;
var inst_18257__$1 = inst_18265;
var state_18313__$1 = (function (){var statearr_18349 = state_18313;
(statearr_18349[(17)] = inst_18264);

(statearr_18349[(13)] = inst_18255__$1);

(statearr_18349[(14)] = inst_18254__$1);

(statearr_18349[(15)] = inst_18256__$1);

(statearr_18349[(16)] = inst_18257__$1);

return statearr_18349;
})();
var statearr_18350_18384 = state_18313__$1;
(statearr_18350_18384[(2)] = null);

(statearr_18350_18384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (18))){
var inst_18283 = (state_18313[(2)]);
var state_18313__$1 = state_18313;
var statearr_18351_18385 = state_18313__$1;
(statearr_18351_18385[(2)] = inst_18283);

(statearr_18351_18385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18314 === (8))){
var inst_18256 = (state_18313[(15)]);
var inst_18257 = (state_18313[(16)]);
var inst_18259 = (inst_18257 < inst_18256);
var inst_18260 = inst_18259;
var state_18313__$1 = state_18313;
if(cljs.core.truth_(inst_18260)){
var statearr_18352_18386 = state_18313__$1;
(statearr_18352_18386[(1)] = (10));

} else {
var statearr_18353_18387 = state_18313__$1;
(statearr_18353_18387[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18354[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18354[(1)] = (1));

return statearr_18354;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18313){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18355){if((e18355 instanceof Object)){
var ex__15072__auto__ = e18355;
var statearr_18356_18388 = state_18313;
(statearr_18356_18388[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18389 = state_18313;
state_18313 = G__18389;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18357 = f__15236__auto__.call(null);
(statearr_18357[(6)] = c__15235__auto___18359);

return statearr_18357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18391 = arguments.length;
switch (G__18391) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18394 = arguments.length;
switch (G__18394) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18397 = arguments.length;
switch (G__18397) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__15235__auto___18464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18436){
var state_val_18437 = (state_18436[(1)]);
if((state_val_18437 === (7))){
var state_18436__$1 = state_18436;
var statearr_18438_18465 = state_18436__$1;
(statearr_18438_18465[(2)] = null);

(statearr_18438_18465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (1))){
var state_18436__$1 = state_18436;
var statearr_18439_18466 = state_18436__$1;
(statearr_18439_18466[(2)] = null);

(statearr_18439_18466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (4))){
var inst_18400 = (state_18436[(7)]);
var inst_18402 = (inst_18400 < cnt);
var state_18436__$1 = state_18436;
if(cljs.core.truth_(inst_18402)){
var statearr_18440_18467 = state_18436__$1;
(statearr_18440_18467[(1)] = (6));

} else {
var statearr_18441_18468 = state_18436__$1;
(statearr_18441_18468[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (15))){
var inst_18432 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
var statearr_18442_18469 = state_18436__$1;
(statearr_18442_18469[(2)] = inst_18432);

(statearr_18442_18469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (13))){
var inst_18425 = cljs.core.async.close_BANG_.call(null,out);
var state_18436__$1 = state_18436;
var statearr_18443_18470 = state_18436__$1;
(statearr_18443_18470[(2)] = inst_18425);

(statearr_18443_18470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (6))){
var state_18436__$1 = state_18436;
var statearr_18444_18471 = state_18436__$1;
(statearr_18444_18471[(2)] = null);

(statearr_18444_18471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (3))){
var inst_18434 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18436__$1,inst_18434);
} else {
if((state_val_18437 === (12))){
var inst_18422 = (state_18436[(8)]);
var inst_18422__$1 = (state_18436[(2)]);
var inst_18423 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18422__$1);
var state_18436__$1 = (function (){var statearr_18445 = state_18436;
(statearr_18445[(8)] = inst_18422__$1);

return statearr_18445;
})();
if(cljs.core.truth_(inst_18423)){
var statearr_18446_18472 = state_18436__$1;
(statearr_18446_18472[(1)] = (13));

} else {
var statearr_18447_18473 = state_18436__$1;
(statearr_18447_18473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (2))){
var inst_18399 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18400 = (0);
var state_18436__$1 = (function (){var statearr_18448 = state_18436;
(statearr_18448[(7)] = inst_18400);

(statearr_18448[(9)] = inst_18399);

return statearr_18448;
})();
var statearr_18449_18474 = state_18436__$1;
(statearr_18449_18474[(2)] = null);

(statearr_18449_18474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (11))){
var inst_18400 = (state_18436[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18436,(10),Object,null,(9));
var inst_18409 = chs__$1.call(null,inst_18400);
var inst_18410 = done.call(null,inst_18400);
var inst_18411 = cljs.core.async.take_BANG_.call(null,inst_18409,inst_18410);
var state_18436__$1 = state_18436;
var statearr_18450_18475 = state_18436__$1;
(statearr_18450_18475[(2)] = inst_18411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (9))){
var inst_18400 = (state_18436[(7)]);
var inst_18413 = (state_18436[(2)]);
var inst_18414 = (inst_18400 + (1));
var inst_18400__$1 = inst_18414;
var state_18436__$1 = (function (){var statearr_18451 = state_18436;
(statearr_18451[(7)] = inst_18400__$1);

(statearr_18451[(10)] = inst_18413);

return statearr_18451;
})();
var statearr_18452_18476 = state_18436__$1;
(statearr_18452_18476[(2)] = null);

(statearr_18452_18476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (5))){
var inst_18420 = (state_18436[(2)]);
var state_18436__$1 = (function (){var statearr_18453 = state_18436;
(statearr_18453[(11)] = inst_18420);

return statearr_18453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18436__$1,(12),dchan);
} else {
if((state_val_18437 === (14))){
var inst_18422 = (state_18436[(8)]);
var inst_18427 = cljs.core.apply.call(null,f,inst_18422);
var state_18436__$1 = state_18436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18436__$1,(16),out,inst_18427);
} else {
if((state_val_18437 === (16))){
var inst_18429 = (state_18436[(2)]);
var state_18436__$1 = (function (){var statearr_18454 = state_18436;
(statearr_18454[(12)] = inst_18429);

return statearr_18454;
})();
var statearr_18455_18477 = state_18436__$1;
(statearr_18455_18477[(2)] = null);

(statearr_18455_18477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (10))){
var inst_18404 = (state_18436[(2)]);
var inst_18405 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18436__$1 = (function (){var statearr_18456 = state_18436;
(statearr_18456[(13)] = inst_18404);

return statearr_18456;
})();
var statearr_18457_18478 = state_18436__$1;
(statearr_18457_18478[(2)] = inst_18405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (8))){
var inst_18418 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
var statearr_18458_18479 = state_18436__$1;
(statearr_18458_18479[(2)] = inst_18418);

(statearr_18458_18479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18459[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18459[(1)] = (1));

return statearr_18459;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18436){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18460){if((e18460 instanceof Object)){
var ex__15072__auto__ = e18460;
var statearr_18461_18480 = state_18436;
(statearr_18461_18480[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18481 = state_18436;
state_18436 = G__18481;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18462 = f__15236__auto__.call(null);
(statearr_18462[(6)] = c__15235__auto___18464);

return statearr_18462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18484 = arguments.length;
switch (G__18484) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15235__auto___18538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18516){
var state_val_18517 = (state_18516[(1)]);
if((state_val_18517 === (7))){
var inst_18495 = (state_18516[(7)]);
var inst_18496 = (state_18516[(8)]);
var inst_18495__$1 = (state_18516[(2)]);
var inst_18496__$1 = cljs.core.nth.call(null,inst_18495__$1,(0),null);
var inst_18497 = cljs.core.nth.call(null,inst_18495__$1,(1),null);
var inst_18498 = (inst_18496__$1 == null);
var state_18516__$1 = (function (){var statearr_18518 = state_18516;
(statearr_18518[(7)] = inst_18495__$1);

(statearr_18518[(9)] = inst_18497);

(statearr_18518[(8)] = inst_18496__$1);

return statearr_18518;
})();
if(cljs.core.truth_(inst_18498)){
var statearr_18519_18539 = state_18516__$1;
(statearr_18519_18539[(1)] = (8));

} else {
var statearr_18520_18540 = state_18516__$1;
(statearr_18520_18540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (1))){
var inst_18485 = cljs.core.vec.call(null,chs);
var inst_18486 = inst_18485;
var state_18516__$1 = (function (){var statearr_18521 = state_18516;
(statearr_18521[(10)] = inst_18486);

return statearr_18521;
})();
var statearr_18522_18541 = state_18516__$1;
(statearr_18522_18541[(2)] = null);

(statearr_18522_18541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (4))){
var inst_18486 = (state_18516[(10)]);
var state_18516__$1 = state_18516;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18516__$1,(7),inst_18486);
} else {
if((state_val_18517 === (6))){
var inst_18512 = (state_18516[(2)]);
var state_18516__$1 = state_18516;
var statearr_18523_18542 = state_18516__$1;
(statearr_18523_18542[(2)] = inst_18512);

(statearr_18523_18542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (3))){
var inst_18514 = (state_18516[(2)]);
var state_18516__$1 = state_18516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18516__$1,inst_18514);
} else {
if((state_val_18517 === (2))){
var inst_18486 = (state_18516[(10)]);
var inst_18488 = cljs.core.count.call(null,inst_18486);
var inst_18489 = (inst_18488 > (0));
var state_18516__$1 = state_18516;
if(cljs.core.truth_(inst_18489)){
var statearr_18525_18543 = state_18516__$1;
(statearr_18525_18543[(1)] = (4));

} else {
var statearr_18526_18544 = state_18516__$1;
(statearr_18526_18544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (11))){
var inst_18486 = (state_18516[(10)]);
var inst_18505 = (state_18516[(2)]);
var tmp18524 = inst_18486;
var inst_18486__$1 = tmp18524;
var state_18516__$1 = (function (){var statearr_18527 = state_18516;
(statearr_18527[(10)] = inst_18486__$1);

(statearr_18527[(11)] = inst_18505);

return statearr_18527;
})();
var statearr_18528_18545 = state_18516__$1;
(statearr_18528_18545[(2)] = null);

(statearr_18528_18545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (9))){
var inst_18496 = (state_18516[(8)]);
var state_18516__$1 = state_18516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18516__$1,(11),out,inst_18496);
} else {
if((state_val_18517 === (5))){
var inst_18510 = cljs.core.async.close_BANG_.call(null,out);
var state_18516__$1 = state_18516;
var statearr_18529_18546 = state_18516__$1;
(statearr_18529_18546[(2)] = inst_18510);

(statearr_18529_18546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (10))){
var inst_18508 = (state_18516[(2)]);
var state_18516__$1 = state_18516;
var statearr_18530_18547 = state_18516__$1;
(statearr_18530_18547[(2)] = inst_18508);

(statearr_18530_18547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18517 === (8))){
var inst_18486 = (state_18516[(10)]);
var inst_18495 = (state_18516[(7)]);
var inst_18497 = (state_18516[(9)]);
var inst_18496 = (state_18516[(8)]);
var inst_18500 = (function (){var cs = inst_18486;
var vec__18491 = inst_18495;
var v = inst_18496;
var c = inst_18497;
return (function (p1__18482_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18482_SHARP_);
});
})();
var inst_18501 = cljs.core.filterv.call(null,inst_18500,inst_18486);
var inst_18486__$1 = inst_18501;
var state_18516__$1 = (function (){var statearr_18531 = state_18516;
(statearr_18531[(10)] = inst_18486__$1);

return statearr_18531;
})();
var statearr_18532_18548 = state_18516__$1;
(statearr_18532_18548[(2)] = null);

(statearr_18532_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18533[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18533[(1)] = (1));

return statearr_18533;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18516){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18534){if((e18534 instanceof Object)){
var ex__15072__auto__ = e18534;
var statearr_18535_18549 = state_18516;
(statearr_18535_18549[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18550 = state_18516;
state_18516 = G__18550;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18536 = f__15236__auto__.call(null);
(statearr_18536[(6)] = c__15235__auto___18538);

return statearr_18536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18552 = arguments.length;
switch (G__18552) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15235__auto___18597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18576){
var state_val_18577 = (state_18576[(1)]);
if((state_val_18577 === (7))){
var inst_18558 = (state_18576[(7)]);
var inst_18558__$1 = (state_18576[(2)]);
var inst_18559 = (inst_18558__$1 == null);
var inst_18560 = cljs.core.not.call(null,inst_18559);
var state_18576__$1 = (function (){var statearr_18578 = state_18576;
(statearr_18578[(7)] = inst_18558__$1);

return statearr_18578;
})();
if(inst_18560){
var statearr_18579_18598 = state_18576__$1;
(statearr_18579_18598[(1)] = (8));

} else {
var statearr_18580_18599 = state_18576__$1;
(statearr_18580_18599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (1))){
var inst_18553 = (0);
var state_18576__$1 = (function (){var statearr_18581 = state_18576;
(statearr_18581[(8)] = inst_18553);

return statearr_18581;
})();
var statearr_18582_18600 = state_18576__$1;
(statearr_18582_18600[(2)] = null);

(statearr_18582_18600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (4))){
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18576__$1,(7),ch);
} else {
if((state_val_18577 === (6))){
var inst_18571 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18583_18601 = state_18576__$1;
(statearr_18583_18601[(2)] = inst_18571);

(statearr_18583_18601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (3))){
var inst_18573 = (state_18576[(2)]);
var inst_18574 = cljs.core.async.close_BANG_.call(null,out);
var state_18576__$1 = (function (){var statearr_18584 = state_18576;
(statearr_18584[(9)] = inst_18573);

return statearr_18584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18576__$1,inst_18574);
} else {
if((state_val_18577 === (2))){
var inst_18553 = (state_18576[(8)]);
var inst_18555 = (inst_18553 < n);
var state_18576__$1 = state_18576;
if(cljs.core.truth_(inst_18555)){
var statearr_18585_18602 = state_18576__$1;
(statearr_18585_18602[(1)] = (4));

} else {
var statearr_18586_18603 = state_18576__$1;
(statearr_18586_18603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (11))){
var inst_18553 = (state_18576[(8)]);
var inst_18563 = (state_18576[(2)]);
var inst_18564 = (inst_18553 + (1));
var inst_18553__$1 = inst_18564;
var state_18576__$1 = (function (){var statearr_18587 = state_18576;
(statearr_18587[(8)] = inst_18553__$1);

(statearr_18587[(10)] = inst_18563);

return statearr_18587;
})();
var statearr_18588_18604 = state_18576__$1;
(statearr_18588_18604[(2)] = null);

(statearr_18588_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (9))){
var state_18576__$1 = state_18576;
var statearr_18589_18605 = state_18576__$1;
(statearr_18589_18605[(2)] = null);

(statearr_18589_18605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (5))){
var state_18576__$1 = state_18576;
var statearr_18590_18606 = state_18576__$1;
(statearr_18590_18606[(2)] = null);

(statearr_18590_18606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (10))){
var inst_18568 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18591_18607 = state_18576__$1;
(statearr_18591_18607[(2)] = inst_18568);

(statearr_18591_18607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (8))){
var inst_18558 = (state_18576[(7)]);
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18576__$1,(11),out,inst_18558);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18592[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18592[(1)] = (1));

return statearr_18592;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18576){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18593){if((e18593 instanceof Object)){
var ex__15072__auto__ = e18593;
var statearr_18594_18608 = state_18576;
(statearr_18594_18608[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18609 = state_18576;
state_18576 = G__18609;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18595 = f__15236__auto__.call(null);
(statearr_18595[(6)] = c__15235__auto___18597);

return statearr_18595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18611 = (function (f,ch,meta18612){
this.f = f;
this.ch = ch;
this.meta18612 = meta18612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18613,meta18612__$1){
var self__ = this;
var _18613__$1 = this;
return (new cljs.core.async.t_cljs$core$async18611(self__.f,self__.ch,meta18612__$1));
}));

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18613){
var self__ = this;
var _18613__$1 = this;
return self__.meta18612;
}));

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18614 = (function (f,ch,meta18612,_,fn1,meta18615){
this.f = f;
this.ch = ch;
this.meta18612 = meta18612;
this._ = _;
this.fn1 = fn1;
this.meta18615 = meta18615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18616,meta18615__$1){
var self__ = this;
var _18616__$1 = this;
return (new cljs.core.async.t_cljs$core$async18614(self__.f,self__.ch,self__.meta18612,self__._,self__.fn1,meta18615__$1));
}));

(cljs.core.async.t_cljs$core$async18614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18616){
var self__ = this;
var _18616__$1 = this;
return self__.meta18615;
}));

(cljs.core.async.t_cljs$core$async18614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__18610_SHARP_){
return f1.call(null,(((p1__18610_SHARP_ == null))?null:self__.f.call(null,p1__18610_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async18614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18612","meta18612",799328001,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18611","cljs.core.async/t_cljs$core$async18611",1388901493,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18615","meta18615",-2041638334,null)], null);
}));

(cljs.core.async.t_cljs$core$async18614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18614");

(cljs.core.async.t_cljs$core$async18614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18614.
 */
cljs.core.async.__GT_t_cljs$core$async18614 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18614(f__$1,ch__$1,meta18612__$1,___$2,fn1__$1,meta18615){
return (new cljs.core.async.t_cljs$core$async18614(f__$1,ch__$1,meta18612__$1,___$2,fn1__$1,meta18615));
});

}

return (new cljs.core.async.t_cljs$core$async18614(self__.f,self__.ch,self__.meta18612,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18612","meta18612",799328001,null)], null);
}));

(cljs.core.async.t_cljs$core$async18611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18611");

(cljs.core.async.t_cljs$core$async18611.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18611.
 */
cljs.core.async.__GT_t_cljs$core$async18611 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18611(f__$1,ch__$1,meta18612){
return (new cljs.core.async.t_cljs$core$async18611(f__$1,ch__$1,meta18612));
});

}

return (new cljs.core.async.t_cljs$core$async18611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18617 = (function (f,ch,meta18618){
this.f = f;
this.ch = ch;
this.meta18618 = meta18618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18619,meta18618__$1){
var self__ = this;
var _18619__$1 = this;
return (new cljs.core.async.t_cljs$core$async18617(self__.f,self__.ch,meta18618__$1));
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18619){
var self__ = this;
var _18619__$1 = this;
return self__.meta18618;
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async18617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18618","meta18618",1383112076,null)], null);
}));

(cljs.core.async.t_cljs$core$async18617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18617");

(cljs.core.async.t_cljs$core$async18617.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18617.
 */
cljs.core.async.__GT_t_cljs$core$async18617 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18617(f__$1,ch__$1,meta18618){
return (new cljs.core.async.t_cljs$core$async18617(f__$1,ch__$1,meta18618));
});

}

return (new cljs.core.async.t_cljs$core$async18617(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18620 = (function (p,ch,meta18621){
this.p = p;
this.ch = ch;
this.meta18621 = meta18621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18622,meta18621__$1){
var self__ = this;
var _18622__$1 = this;
return (new cljs.core.async.t_cljs$core$async18620(self__.p,self__.ch,meta18621__$1));
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18622){
var self__ = this;
var _18622__$1 = this;
return self__.meta18621;
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18621","meta18621",355965848,null)], null);
}));

(cljs.core.async.t_cljs$core$async18620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18620");

(cljs.core.async.t_cljs$core$async18620.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18620.
 */
cljs.core.async.__GT_t_cljs$core$async18620 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18620(p__$1,ch__$1,meta18621){
return (new cljs.core.async.t_cljs$core$async18620(p__$1,ch__$1,meta18621));
});

}

return (new cljs.core.async.t_cljs$core$async18620(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18624 = arguments.length;
switch (G__18624) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15235__auto___18664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18645){
var state_val_18646 = (state_18645[(1)]);
if((state_val_18646 === (7))){
var inst_18641 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18647_18665 = state_18645__$1;
(statearr_18647_18665[(2)] = inst_18641);

(statearr_18647_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (1))){
var state_18645__$1 = state_18645;
var statearr_18648_18666 = state_18645__$1;
(statearr_18648_18666[(2)] = null);

(statearr_18648_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (4))){
var inst_18627 = (state_18645[(7)]);
var inst_18627__$1 = (state_18645[(2)]);
var inst_18628 = (inst_18627__$1 == null);
var state_18645__$1 = (function (){var statearr_18649 = state_18645;
(statearr_18649[(7)] = inst_18627__$1);

return statearr_18649;
})();
if(cljs.core.truth_(inst_18628)){
var statearr_18650_18667 = state_18645__$1;
(statearr_18650_18667[(1)] = (5));

} else {
var statearr_18651_18668 = state_18645__$1;
(statearr_18651_18668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (6))){
var inst_18627 = (state_18645[(7)]);
var inst_18632 = p.call(null,inst_18627);
var state_18645__$1 = state_18645;
if(cljs.core.truth_(inst_18632)){
var statearr_18652_18669 = state_18645__$1;
(statearr_18652_18669[(1)] = (8));

} else {
var statearr_18653_18670 = state_18645__$1;
(statearr_18653_18670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (3))){
var inst_18643 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18645__$1,inst_18643);
} else {
if((state_val_18646 === (2))){
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18645__$1,(4),ch);
} else {
if((state_val_18646 === (11))){
var inst_18635 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18654_18671 = state_18645__$1;
(statearr_18654_18671[(2)] = inst_18635);

(statearr_18654_18671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (9))){
var state_18645__$1 = state_18645;
var statearr_18655_18672 = state_18645__$1;
(statearr_18655_18672[(2)] = null);

(statearr_18655_18672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (5))){
var inst_18630 = cljs.core.async.close_BANG_.call(null,out);
var state_18645__$1 = state_18645;
var statearr_18656_18673 = state_18645__$1;
(statearr_18656_18673[(2)] = inst_18630);

(statearr_18656_18673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (10))){
var inst_18638 = (state_18645[(2)]);
var state_18645__$1 = (function (){var statearr_18657 = state_18645;
(statearr_18657[(8)] = inst_18638);

return statearr_18657;
})();
var statearr_18658_18674 = state_18645__$1;
(statearr_18658_18674[(2)] = null);

(statearr_18658_18674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (8))){
var inst_18627 = (state_18645[(7)]);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18645__$1,(11),out,inst_18627);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18659 = [null,null,null,null,null,null,null,null,null];
(statearr_18659[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18659[(1)] = (1));

return statearr_18659;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18645){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18660){if((e18660 instanceof Object)){
var ex__15072__auto__ = e18660;
var statearr_18661_18675 = state_18645;
(statearr_18661_18675[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18676 = state_18645;
state_18645 = G__18676;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18662 = f__15236__auto__.call(null);
(statearr_18662[(6)] = c__15235__auto___18664);

return statearr_18662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18678 = arguments.length;
switch (G__18678) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18741){
var state_val_18742 = (state_18741[(1)]);
if((state_val_18742 === (7))){
var inst_18737 = (state_18741[(2)]);
var state_18741__$1 = state_18741;
var statearr_18743_18781 = state_18741__$1;
(statearr_18743_18781[(2)] = inst_18737);

(statearr_18743_18781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (20))){
var inst_18707 = (state_18741[(7)]);
var inst_18718 = (state_18741[(2)]);
var inst_18719 = cljs.core.next.call(null,inst_18707);
var inst_18693 = inst_18719;
var inst_18694 = null;
var inst_18695 = (0);
var inst_18696 = (0);
var state_18741__$1 = (function (){var statearr_18744 = state_18741;
(statearr_18744[(8)] = inst_18718);

(statearr_18744[(9)] = inst_18695);

(statearr_18744[(10)] = inst_18696);

(statearr_18744[(11)] = inst_18694);

(statearr_18744[(12)] = inst_18693);

return statearr_18744;
})();
var statearr_18745_18782 = state_18741__$1;
(statearr_18745_18782[(2)] = null);

(statearr_18745_18782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (1))){
var state_18741__$1 = state_18741;
var statearr_18746_18783 = state_18741__$1;
(statearr_18746_18783[(2)] = null);

(statearr_18746_18783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (4))){
var inst_18682 = (state_18741[(13)]);
var inst_18682__$1 = (state_18741[(2)]);
var inst_18683 = (inst_18682__$1 == null);
var state_18741__$1 = (function (){var statearr_18747 = state_18741;
(statearr_18747[(13)] = inst_18682__$1);

return statearr_18747;
})();
if(cljs.core.truth_(inst_18683)){
var statearr_18748_18784 = state_18741__$1;
(statearr_18748_18784[(1)] = (5));

} else {
var statearr_18749_18785 = state_18741__$1;
(statearr_18749_18785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (15))){
var state_18741__$1 = state_18741;
var statearr_18753_18786 = state_18741__$1;
(statearr_18753_18786[(2)] = null);

(statearr_18753_18786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (21))){
var state_18741__$1 = state_18741;
var statearr_18754_18787 = state_18741__$1;
(statearr_18754_18787[(2)] = null);

(statearr_18754_18787[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (13))){
var inst_18695 = (state_18741[(9)]);
var inst_18696 = (state_18741[(10)]);
var inst_18694 = (state_18741[(11)]);
var inst_18693 = (state_18741[(12)]);
var inst_18703 = (state_18741[(2)]);
var inst_18704 = (inst_18696 + (1));
var tmp18750 = inst_18695;
var tmp18751 = inst_18694;
var tmp18752 = inst_18693;
var inst_18693__$1 = tmp18752;
var inst_18694__$1 = tmp18751;
var inst_18695__$1 = tmp18750;
var inst_18696__$1 = inst_18704;
var state_18741__$1 = (function (){var statearr_18755 = state_18741;
(statearr_18755[(9)] = inst_18695__$1);

(statearr_18755[(10)] = inst_18696__$1);

(statearr_18755[(11)] = inst_18694__$1);

(statearr_18755[(14)] = inst_18703);

(statearr_18755[(12)] = inst_18693__$1);

return statearr_18755;
})();
var statearr_18756_18788 = state_18741__$1;
(statearr_18756_18788[(2)] = null);

(statearr_18756_18788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (22))){
var state_18741__$1 = state_18741;
var statearr_18757_18789 = state_18741__$1;
(statearr_18757_18789[(2)] = null);

(statearr_18757_18789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (6))){
var inst_18682 = (state_18741[(13)]);
var inst_18691 = f.call(null,inst_18682);
var inst_18692 = cljs.core.seq.call(null,inst_18691);
var inst_18693 = inst_18692;
var inst_18694 = null;
var inst_18695 = (0);
var inst_18696 = (0);
var state_18741__$1 = (function (){var statearr_18758 = state_18741;
(statearr_18758[(9)] = inst_18695);

(statearr_18758[(10)] = inst_18696);

(statearr_18758[(11)] = inst_18694);

(statearr_18758[(12)] = inst_18693);

return statearr_18758;
})();
var statearr_18759_18790 = state_18741__$1;
(statearr_18759_18790[(2)] = null);

(statearr_18759_18790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (17))){
var inst_18707 = (state_18741[(7)]);
var inst_18711 = cljs.core.chunk_first.call(null,inst_18707);
var inst_18712 = cljs.core.chunk_rest.call(null,inst_18707);
var inst_18713 = cljs.core.count.call(null,inst_18711);
var inst_18693 = inst_18712;
var inst_18694 = inst_18711;
var inst_18695 = inst_18713;
var inst_18696 = (0);
var state_18741__$1 = (function (){var statearr_18760 = state_18741;
(statearr_18760[(9)] = inst_18695);

(statearr_18760[(10)] = inst_18696);

(statearr_18760[(11)] = inst_18694);

(statearr_18760[(12)] = inst_18693);

return statearr_18760;
})();
var statearr_18761_18791 = state_18741__$1;
(statearr_18761_18791[(2)] = null);

(statearr_18761_18791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (3))){
var inst_18739 = (state_18741[(2)]);
var state_18741__$1 = state_18741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18741__$1,inst_18739);
} else {
if((state_val_18742 === (12))){
var inst_18727 = (state_18741[(2)]);
var state_18741__$1 = state_18741;
var statearr_18762_18792 = state_18741__$1;
(statearr_18762_18792[(2)] = inst_18727);

(statearr_18762_18792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (2))){
var state_18741__$1 = state_18741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18741__$1,(4),in$);
} else {
if((state_val_18742 === (23))){
var inst_18735 = (state_18741[(2)]);
var state_18741__$1 = state_18741;
var statearr_18763_18793 = state_18741__$1;
(statearr_18763_18793[(2)] = inst_18735);

(statearr_18763_18793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (19))){
var inst_18722 = (state_18741[(2)]);
var state_18741__$1 = state_18741;
var statearr_18764_18794 = state_18741__$1;
(statearr_18764_18794[(2)] = inst_18722);

(statearr_18764_18794[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (11))){
var inst_18707 = (state_18741[(7)]);
var inst_18693 = (state_18741[(12)]);
var inst_18707__$1 = cljs.core.seq.call(null,inst_18693);
var state_18741__$1 = (function (){var statearr_18765 = state_18741;
(statearr_18765[(7)] = inst_18707__$1);

return statearr_18765;
})();
if(inst_18707__$1){
var statearr_18766_18795 = state_18741__$1;
(statearr_18766_18795[(1)] = (14));

} else {
var statearr_18767_18796 = state_18741__$1;
(statearr_18767_18796[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (9))){
var inst_18729 = (state_18741[(2)]);
var inst_18730 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18741__$1 = (function (){var statearr_18768 = state_18741;
(statearr_18768[(15)] = inst_18729);

return statearr_18768;
})();
if(cljs.core.truth_(inst_18730)){
var statearr_18769_18797 = state_18741__$1;
(statearr_18769_18797[(1)] = (21));

} else {
var statearr_18770_18798 = state_18741__$1;
(statearr_18770_18798[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (5))){
var inst_18685 = cljs.core.async.close_BANG_.call(null,out);
var state_18741__$1 = state_18741;
var statearr_18771_18799 = state_18741__$1;
(statearr_18771_18799[(2)] = inst_18685);

(statearr_18771_18799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (14))){
var inst_18707 = (state_18741[(7)]);
var inst_18709 = cljs.core.chunked_seq_QMARK_.call(null,inst_18707);
var state_18741__$1 = state_18741;
if(inst_18709){
var statearr_18772_18800 = state_18741__$1;
(statearr_18772_18800[(1)] = (17));

} else {
var statearr_18773_18801 = state_18741__$1;
(statearr_18773_18801[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (16))){
var inst_18725 = (state_18741[(2)]);
var state_18741__$1 = state_18741;
var statearr_18774_18802 = state_18741__$1;
(statearr_18774_18802[(2)] = inst_18725);

(statearr_18774_18802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18742 === (10))){
var inst_18696 = (state_18741[(10)]);
var inst_18694 = (state_18741[(11)]);
var inst_18701 = cljs.core._nth.call(null,inst_18694,inst_18696);
var state_18741__$1 = state_18741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18741__$1,(13),out,inst_18701);
} else {
if((state_val_18742 === (18))){
var inst_18707 = (state_18741[(7)]);
var inst_18716 = cljs.core.first.call(null,inst_18707);
var state_18741__$1 = state_18741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18741__$1,(20),out,inst_18716);
} else {
if((state_val_18742 === (8))){
var inst_18695 = (state_18741[(9)]);
var inst_18696 = (state_18741[(10)]);
var inst_18698 = (inst_18696 < inst_18695);
var inst_18699 = inst_18698;
var state_18741__$1 = state_18741;
if(cljs.core.truth_(inst_18699)){
var statearr_18775_18803 = state_18741__$1;
(statearr_18775_18803[(1)] = (10));

} else {
var statearr_18776_18804 = state_18741__$1;
(statearr_18776_18804[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15069__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15069__auto____0 = (function (){
var statearr_18777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18777[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15069__auto__);

(statearr_18777[(1)] = (1));

return statearr_18777;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15069__auto____1 = (function (state_18741){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18778){if((e18778 instanceof Object)){
var ex__15072__auto__ = e18778;
var statearr_18779_18805 = state_18741;
(statearr_18779_18805[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_18741;
state_18741 = G__18806;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15069__auto__ = function(state_18741){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15069__auto____1.call(this,state_18741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15069__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15069__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18780 = f__15236__auto__.call(null);
(statearr_18780[(6)] = c__15235__auto__);

return statearr_18780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18808 = arguments.length;
switch (G__18808) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18811 = arguments.length;
switch (G__18811) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18814 = arguments.length;
switch (G__18814) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15235__auto___18861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18838){
var state_val_18839 = (state_18838[(1)]);
if((state_val_18839 === (7))){
var inst_18833 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
var statearr_18840_18862 = state_18838__$1;
(statearr_18840_18862[(2)] = inst_18833);

(statearr_18840_18862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (1))){
var inst_18815 = null;
var state_18838__$1 = (function (){var statearr_18841 = state_18838;
(statearr_18841[(7)] = inst_18815);

return statearr_18841;
})();
var statearr_18842_18863 = state_18838__$1;
(statearr_18842_18863[(2)] = null);

(statearr_18842_18863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (4))){
var inst_18818 = (state_18838[(8)]);
var inst_18818__$1 = (state_18838[(2)]);
var inst_18819 = (inst_18818__$1 == null);
var inst_18820 = cljs.core.not.call(null,inst_18819);
var state_18838__$1 = (function (){var statearr_18843 = state_18838;
(statearr_18843[(8)] = inst_18818__$1);

return statearr_18843;
})();
if(inst_18820){
var statearr_18844_18864 = state_18838__$1;
(statearr_18844_18864[(1)] = (5));

} else {
var statearr_18845_18865 = state_18838__$1;
(statearr_18845_18865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (6))){
var state_18838__$1 = state_18838;
var statearr_18846_18866 = state_18838__$1;
(statearr_18846_18866[(2)] = null);

(statearr_18846_18866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (3))){
var inst_18835 = (state_18838[(2)]);
var inst_18836 = cljs.core.async.close_BANG_.call(null,out);
var state_18838__$1 = (function (){var statearr_18847 = state_18838;
(statearr_18847[(9)] = inst_18835);

return statearr_18847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18838__$1,inst_18836);
} else {
if((state_val_18839 === (2))){
var state_18838__$1 = state_18838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18838__$1,(4),ch);
} else {
if((state_val_18839 === (11))){
var inst_18818 = (state_18838[(8)]);
var inst_18827 = (state_18838[(2)]);
var inst_18815 = inst_18818;
var state_18838__$1 = (function (){var statearr_18848 = state_18838;
(statearr_18848[(7)] = inst_18815);

(statearr_18848[(10)] = inst_18827);

return statearr_18848;
})();
var statearr_18849_18867 = state_18838__$1;
(statearr_18849_18867[(2)] = null);

(statearr_18849_18867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (9))){
var inst_18818 = (state_18838[(8)]);
var state_18838__$1 = state_18838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18838__$1,(11),out,inst_18818);
} else {
if((state_val_18839 === (5))){
var inst_18815 = (state_18838[(7)]);
var inst_18818 = (state_18838[(8)]);
var inst_18822 = cljs.core._EQ_.call(null,inst_18818,inst_18815);
var state_18838__$1 = state_18838;
if(inst_18822){
var statearr_18851_18868 = state_18838__$1;
(statearr_18851_18868[(1)] = (8));

} else {
var statearr_18852_18869 = state_18838__$1;
(statearr_18852_18869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (10))){
var inst_18830 = (state_18838[(2)]);
var state_18838__$1 = state_18838;
var statearr_18853_18870 = state_18838__$1;
(statearr_18853_18870[(2)] = inst_18830);

(statearr_18853_18870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18839 === (8))){
var inst_18815 = (state_18838[(7)]);
var tmp18850 = inst_18815;
var inst_18815__$1 = tmp18850;
var state_18838__$1 = (function (){var statearr_18854 = state_18838;
(statearr_18854[(7)] = inst_18815__$1);

return statearr_18854;
})();
var statearr_18855_18871 = state_18838__$1;
(statearr_18855_18871[(2)] = null);

(statearr_18855_18871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18856[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18856[(1)] = (1));

return statearr_18856;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18838){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18857){if((e18857 instanceof Object)){
var ex__15072__auto__ = e18857;
var statearr_18858_18872 = state_18838;
(statearr_18858_18872[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18873 = state_18838;
state_18838 = G__18873;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18859 = f__15236__auto__.call(null);
(statearr_18859[(6)] = c__15235__auto___18861);

return statearr_18859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18875 = arguments.length;
switch (G__18875) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15235__auto___18941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_18913){
var state_val_18914 = (state_18913[(1)]);
if((state_val_18914 === (7))){
var inst_18909 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18915_18942 = state_18913__$1;
(statearr_18915_18942[(2)] = inst_18909);

(statearr_18915_18942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (1))){
var inst_18876 = (new Array(n));
var inst_18877 = inst_18876;
var inst_18878 = (0);
var state_18913__$1 = (function (){var statearr_18916 = state_18913;
(statearr_18916[(7)] = inst_18878);

(statearr_18916[(8)] = inst_18877);

return statearr_18916;
})();
var statearr_18917_18943 = state_18913__$1;
(statearr_18917_18943[(2)] = null);

(statearr_18917_18943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (4))){
var inst_18881 = (state_18913[(9)]);
var inst_18881__$1 = (state_18913[(2)]);
var inst_18882 = (inst_18881__$1 == null);
var inst_18883 = cljs.core.not.call(null,inst_18882);
var state_18913__$1 = (function (){var statearr_18918 = state_18913;
(statearr_18918[(9)] = inst_18881__$1);

return statearr_18918;
})();
if(inst_18883){
var statearr_18919_18944 = state_18913__$1;
(statearr_18919_18944[(1)] = (5));

} else {
var statearr_18920_18945 = state_18913__$1;
(statearr_18920_18945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (15))){
var inst_18903 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18921_18946 = state_18913__$1;
(statearr_18921_18946[(2)] = inst_18903);

(statearr_18921_18946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (13))){
var state_18913__$1 = state_18913;
var statearr_18922_18947 = state_18913__$1;
(statearr_18922_18947[(2)] = null);

(statearr_18922_18947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (6))){
var inst_18878 = (state_18913[(7)]);
var inst_18899 = (inst_18878 > (0));
var state_18913__$1 = state_18913;
if(cljs.core.truth_(inst_18899)){
var statearr_18923_18948 = state_18913__$1;
(statearr_18923_18948[(1)] = (12));

} else {
var statearr_18924_18949 = state_18913__$1;
(statearr_18924_18949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (3))){
var inst_18911 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18913__$1,inst_18911);
} else {
if((state_val_18914 === (12))){
var inst_18877 = (state_18913[(8)]);
var inst_18901 = cljs.core.vec.call(null,inst_18877);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18913__$1,(15),out,inst_18901);
} else {
if((state_val_18914 === (2))){
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18913__$1,(4),ch);
} else {
if((state_val_18914 === (11))){
var inst_18893 = (state_18913[(2)]);
var inst_18894 = (new Array(n));
var inst_18877 = inst_18894;
var inst_18878 = (0);
var state_18913__$1 = (function (){var statearr_18925 = state_18913;
(statearr_18925[(7)] = inst_18878);

(statearr_18925[(10)] = inst_18893);

(statearr_18925[(8)] = inst_18877);

return statearr_18925;
})();
var statearr_18926_18950 = state_18913__$1;
(statearr_18926_18950[(2)] = null);

(statearr_18926_18950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (9))){
var inst_18877 = (state_18913[(8)]);
var inst_18891 = cljs.core.vec.call(null,inst_18877);
var state_18913__$1 = state_18913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18913__$1,(11),out,inst_18891);
} else {
if((state_val_18914 === (5))){
var inst_18878 = (state_18913[(7)]);
var inst_18886 = (state_18913[(11)]);
var inst_18877 = (state_18913[(8)]);
var inst_18881 = (state_18913[(9)]);
var inst_18885 = (inst_18877[inst_18878] = inst_18881);
var inst_18886__$1 = (inst_18878 + (1));
var inst_18887 = (inst_18886__$1 < n);
var state_18913__$1 = (function (){var statearr_18927 = state_18913;
(statearr_18927[(12)] = inst_18885);

(statearr_18927[(11)] = inst_18886__$1);

return statearr_18927;
})();
if(cljs.core.truth_(inst_18887)){
var statearr_18928_18951 = state_18913__$1;
(statearr_18928_18951[(1)] = (8));

} else {
var statearr_18929_18952 = state_18913__$1;
(statearr_18929_18952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (14))){
var inst_18906 = (state_18913[(2)]);
var inst_18907 = cljs.core.async.close_BANG_.call(null,out);
var state_18913__$1 = (function (){var statearr_18931 = state_18913;
(statearr_18931[(13)] = inst_18906);

return statearr_18931;
})();
var statearr_18932_18953 = state_18913__$1;
(statearr_18932_18953[(2)] = inst_18907);

(statearr_18932_18953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (10))){
var inst_18897 = (state_18913[(2)]);
var state_18913__$1 = state_18913;
var statearr_18933_18954 = state_18913__$1;
(statearr_18933_18954[(2)] = inst_18897);

(statearr_18933_18954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18914 === (8))){
var inst_18886 = (state_18913[(11)]);
var inst_18877 = (state_18913[(8)]);
var tmp18930 = inst_18877;
var inst_18877__$1 = tmp18930;
var inst_18878 = inst_18886;
var state_18913__$1 = (function (){var statearr_18934 = state_18913;
(statearr_18934[(7)] = inst_18878);

(statearr_18934[(8)] = inst_18877__$1);

return statearr_18934;
})();
var statearr_18935_18955 = state_18913__$1;
(statearr_18935_18955[(2)] = null);

(statearr_18935_18955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_18936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18936[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_18936[(1)] = (1));

return statearr_18936;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_18913){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_18913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e18937){if((e18937 instanceof Object)){
var ex__15072__auto__ = e18937;
var statearr_18938_18956 = state_18913;
(statearr_18938_18956[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18957 = state_18913;
state_18913 = G__18957;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_18913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_18913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_18939 = f__15236__auto__.call(null);
(statearr_18939[(6)] = c__15235__auto___18941);

return statearr_18939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18959 = arguments.length;
switch (G__18959) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15235__auto___19029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_19001){
var state_val_19002 = (state_19001[(1)]);
if((state_val_19002 === (7))){
var inst_18997 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19003_19030 = state_19001__$1;
(statearr_19003_19030[(2)] = inst_18997);

(statearr_19003_19030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (1))){
var inst_18960 = [];
var inst_18961 = inst_18960;
var inst_18962 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19001__$1 = (function (){var statearr_19004 = state_19001;
(statearr_19004[(7)] = inst_18961);

(statearr_19004[(8)] = inst_18962);

return statearr_19004;
})();
var statearr_19005_19031 = state_19001__$1;
(statearr_19005_19031[(2)] = null);

(statearr_19005_19031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (4))){
var inst_18965 = (state_19001[(9)]);
var inst_18965__$1 = (state_19001[(2)]);
var inst_18966 = (inst_18965__$1 == null);
var inst_18967 = cljs.core.not.call(null,inst_18966);
var state_19001__$1 = (function (){var statearr_19006 = state_19001;
(statearr_19006[(9)] = inst_18965__$1);

return statearr_19006;
})();
if(inst_18967){
var statearr_19007_19032 = state_19001__$1;
(statearr_19007_19032[(1)] = (5));

} else {
var statearr_19008_19033 = state_19001__$1;
(statearr_19008_19033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (15))){
var inst_18991 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19009_19034 = state_19001__$1;
(statearr_19009_19034[(2)] = inst_18991);

(statearr_19009_19034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (13))){
var state_19001__$1 = state_19001;
var statearr_19010_19035 = state_19001__$1;
(statearr_19010_19035[(2)] = null);

(statearr_19010_19035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (6))){
var inst_18961 = (state_19001[(7)]);
var inst_18986 = inst_18961.length;
var inst_18987 = (inst_18986 > (0));
var state_19001__$1 = state_19001;
if(cljs.core.truth_(inst_18987)){
var statearr_19011_19036 = state_19001__$1;
(statearr_19011_19036[(1)] = (12));

} else {
var statearr_19012_19037 = state_19001__$1;
(statearr_19012_19037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (3))){
var inst_18999 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19001__$1,inst_18999);
} else {
if((state_val_19002 === (12))){
var inst_18961 = (state_19001[(7)]);
var inst_18989 = cljs.core.vec.call(null,inst_18961);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19001__$1,(15),out,inst_18989);
} else {
if((state_val_19002 === (2))){
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19001__$1,(4),ch);
} else {
if((state_val_19002 === (11))){
var inst_18969 = (state_19001[(10)]);
var inst_18965 = (state_19001[(9)]);
var inst_18979 = (state_19001[(2)]);
var inst_18980 = [];
var inst_18981 = inst_18980.push(inst_18965);
var inst_18961 = inst_18980;
var inst_18962 = inst_18969;
var state_19001__$1 = (function (){var statearr_19013 = state_19001;
(statearr_19013[(11)] = inst_18981);

(statearr_19013[(7)] = inst_18961);

(statearr_19013[(8)] = inst_18962);

(statearr_19013[(12)] = inst_18979);

return statearr_19013;
})();
var statearr_19014_19038 = state_19001__$1;
(statearr_19014_19038[(2)] = null);

(statearr_19014_19038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (9))){
var inst_18961 = (state_19001[(7)]);
var inst_18977 = cljs.core.vec.call(null,inst_18961);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19001__$1,(11),out,inst_18977);
} else {
if((state_val_19002 === (5))){
var inst_18969 = (state_19001[(10)]);
var inst_18962 = (state_19001[(8)]);
var inst_18965 = (state_19001[(9)]);
var inst_18969__$1 = f.call(null,inst_18965);
var inst_18970 = cljs.core._EQ_.call(null,inst_18969__$1,inst_18962);
var inst_18971 = cljs.core.keyword_identical_QMARK_.call(null,inst_18962,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18972 = ((inst_18970) || (inst_18971));
var state_19001__$1 = (function (){var statearr_19015 = state_19001;
(statearr_19015[(10)] = inst_18969__$1);

return statearr_19015;
})();
if(cljs.core.truth_(inst_18972)){
var statearr_19016_19039 = state_19001__$1;
(statearr_19016_19039[(1)] = (8));

} else {
var statearr_19017_19040 = state_19001__$1;
(statearr_19017_19040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (14))){
var inst_18994 = (state_19001[(2)]);
var inst_18995 = cljs.core.async.close_BANG_.call(null,out);
var state_19001__$1 = (function (){var statearr_19019 = state_19001;
(statearr_19019[(13)] = inst_18994);

return statearr_19019;
})();
var statearr_19020_19041 = state_19001__$1;
(statearr_19020_19041[(2)] = inst_18995);

(statearr_19020_19041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (10))){
var inst_18984 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19021_19042 = state_19001__$1;
(statearr_19021_19042[(2)] = inst_18984);

(statearr_19021_19042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (8))){
var inst_18969 = (state_19001[(10)]);
var inst_18961 = (state_19001[(7)]);
var inst_18965 = (state_19001[(9)]);
var inst_18974 = inst_18961.push(inst_18965);
var tmp19018 = inst_18961;
var inst_18961__$1 = tmp19018;
var inst_18962 = inst_18969;
var state_19001__$1 = (function (){var statearr_19022 = state_19001;
(statearr_19022[(14)] = inst_18974);

(statearr_19022[(7)] = inst_18961__$1);

(statearr_19022[(8)] = inst_18962);

return statearr_19022;
})();
var statearr_19023_19043 = state_19001__$1;
(statearr_19023_19043[(2)] = null);

(statearr_19023_19043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15069__auto__ = null;
var cljs$core$async$state_machine__15069__auto____0 = (function (){
var statearr_19024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19024[(0)] = cljs$core$async$state_machine__15069__auto__);

(statearr_19024[(1)] = (1));

return statearr_19024;
});
var cljs$core$async$state_machine__15069__auto____1 = (function (state_19001){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_19001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e19025){if((e19025 instanceof Object)){
var ex__15072__auto__ = e19025;
var statearr_19026_19044 = state_19001;
(statearr_19026_19044[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19045 = state_19001;
state_19001 = G__19045;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
cljs$core$async$state_machine__15069__auto__ = function(state_19001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15069__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15069__auto____1.call(this,state_19001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15069__auto____0;
cljs$core$async$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15069__auto____1;
return cljs$core$async$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_19027 = f__15236__auto__.call(null);
(statearr_19027[(6)] = c__15235__auto___19029);

return statearr_19027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
