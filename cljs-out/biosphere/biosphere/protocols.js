// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
biosphere.protocols.Updateable = function(){};

var biosphere$protocols$Updateable$tick$dyn_13867 = (function (this$,old_state,new_state){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (biosphere.protocols.tick[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,old_state,new_state) : m__4522__auto__.call(null,this$,old_state,new_state));
} else {
var m__4519__auto__ = (biosphere.protocols.tick["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,old_state,new_state) : m__4519__auto__.call(null,this$,old_state,new_state));
} else {
throw cljs.core.missing_protocol("Updateable.tick",this$);
}
}
});
biosphere.protocols.tick = (function biosphere$protocols$tick(this$,old_state,new_state){
if((((!((this$ == null)))) && ((!((this$.biosphere$protocols$Updateable$tick$arity$3 == null)))))){
return this$.biosphere$protocols$Updateable$tick$arity$3(this$,old_state,new_state);
} else {
return biosphere$protocols$Updateable$tick$dyn_13867(this$,old_state,new_state);
}
});

