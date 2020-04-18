// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('biosphere.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
/**
 * Returns a vector with the x and y coordinates.
 */
biosphere.utils.polar__GT_cart = (function biosphere$utils$polar__GT_cart(radius,angle){
var angle__$1 = (angle - (Math.PI / (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(angle__$1)),(radius * Math.sin(angle__$1))], null);
});
/**
 * Floors `n` to the next whole number that is divisible by `d`
 */
biosphere.utils.floor_to = (function biosphere$utils$floor_to(n,d){
var r = cljs.core.rem(n,d);
var G__12913 = (n - r);
return Math.round(G__12913);
});
/**
 * Returns an int between `min` (inclusive) and `max` (exclusive)
 */
biosphere.utils.rand_int_between = (function biosphere$utils$rand_int_between(min,max){
return (min + cljs.core.rand_int((max - min)));
});
/**
 * Rolls a against a dice (default: d=100) and returns true if the throw is above `percentage`.
 */
biosphere.utils.chance = (function biosphere$utils$chance(var_args){
var G__12915 = arguments.length;
switch (G__12915) {
case 1:
return biosphere.utils.chance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biosphere.utils.chance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(biosphere.utils.chance.cljs$core$IFn$_invoke$arity$1 = (function (percentage){
return biosphere.utils.chance.cljs$core$IFn$_invoke$arity$2((100),percentage);
}));

(biosphere.utils.chance.cljs$core$IFn$_invoke$arity$2 = (function (d,percentage){
return (cljs.core.rand_int(d) > percentage);
}));

(biosphere.utils.chance.cljs$lang$maxFixedArity = 2);

/**
 * Checks for prefers-color-scheme: dark. (clj always returns true)
 */
biosphere.utils.dark_mode_QMARK_ = (function biosphere$utils$dark_mode_QMARK_(){
var and__4174__auto__ = window.matchMedia;
if(cljs.core.truth_(and__4174__auto__)){
return window.matchMedia("(prefers-color-scheme: dark)").matches;
} else {
return and__4174__auto__;
}
});
