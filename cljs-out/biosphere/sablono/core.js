// Compiled by ClojureScript 1.10.773 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__21194__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__21191 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__21192 = cljs.core.seq.call(null,vec__21191);
var first__21193 = cljs.core.first.call(null,seq__21192);
var seq__21192__$1 = cljs.core.next.call(null,seq__21192);
var tag = first__21193;
var body = seq__21192__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__21194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21195__i = 0, G__21195__a = new Array(arguments.length -  0);
while (G__21195__i < G__21195__a.length) {G__21195__a[G__21195__i] = arguments[G__21195__i + 0]; ++G__21195__i;}
  args = new cljs.core.IndexedSeq(G__21195__a,0,null);
} 
return G__21194__delegate.call(this,args);};
G__21194.cljs$lang$maxFixedArity = 0;
G__21194.cljs$lang$applyTo = (function (arglist__21196){
var args = cljs.core.seq(arglist__21196);
return G__21194__delegate(args);
});
G__21194.cljs$core$IFn$_invoke$arity$variadic = G__21194__delegate;
return G__21194;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__21197(s__21198){
return (new cljs.core.LazySeq(null,(function (){
var s__21198__$1 = s__21198;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21198__$1);
if(temp__5735__auto__){
var s__21198__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21198__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21198__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21200 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21199 = (0);
while(true){
if((i__21199 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__21199);
cljs.core.chunk_append.call(null,b__21200,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21201 = (i__21199 + (1));
i__21199 = G__21201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21200),sablono$core$update_arglists_$_iter__21197.call(null,cljs.core.chunk_rest.call(null,s__21198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21200),null);
}
} else {
var args = cljs.core.first.call(null,s__21198__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__21197.call(null,cljs.core.rest.call(null,s__21198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21207 = arguments.length;
var i__4737__auto___21208 = (0);
while(true){
if((i__4737__auto___21208 < len__4736__auto___21207)){
args__4742__auto__.push((arguments[i__4737__auto___21208]));

var G__21209 = (i__4737__auto___21208 + (1));
i__4737__auto___21208 = G__21209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__21203(s__21204){
return (new cljs.core.LazySeq(null,(function (){
var s__21204__$1 = s__21204;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21204__$1);
if(temp__5735__auto__){
var s__21204__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21204__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21204__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21206 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21205 = (0);
while(true){
if((i__21205 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__21205);
cljs.core.chunk_append.call(null,b__21206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21210 = (i__21205 + (1));
i__21205 = G__21210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21206),sablono$core$iter__21203.call(null,cljs.core.chunk_rest.call(null,s__21204__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21206),null);
}
} else {
var style = cljs.core.first.call(null,s__21204__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21203.call(null,cljs.core.rest.call(null,s__21204__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq21202){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21202));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to21211 = (function sablono$core$link_to21211(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21214 = arguments.length;
var i__4737__auto___21215 = (0);
while(true){
if((i__4737__auto___21215 < len__4736__auto___21214)){
args__4742__auto__.push((arguments[i__4737__auto___21215]));

var G__21216 = (i__4737__auto___21215 + (1));
i__4737__auto___21215 = G__21216;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to21211.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to21211.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to21211.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to21211.cljs$lang$applyTo = (function (seq21212){
var G__21213 = cljs.core.first.call(null,seq21212);
var seq21212__$1 = cljs.core.next.call(null,seq21212);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21213,seq21212__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21211);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21217 = (function sablono$core$mail_to21217(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21224 = arguments.length;
var i__4737__auto___21225 = (0);
while(true){
if((i__4737__auto___21225 < len__4736__auto___21224)){
args__4742__auto__.push((arguments[i__4737__auto___21225]));

var G__21226 = (i__4737__auto___21225 + (1));
i__4737__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to21217.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to21217.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21220){
var vec__21221 = p__21220;
var content = cljs.core.nth.call(null,vec__21221,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to21217.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to21217.cljs$lang$applyTo = (function (seq21218){
var G__21219 = cljs.core.first.call(null,seq21218);
var seq21218__$1 = cljs.core.next.call(null,seq21218);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21219,seq21218__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21217);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21227 = (function sablono$core$unordered_list21227(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list21227_$_iter__21228(s__21229){
return (new cljs.core.LazySeq(null,(function (){
var s__21229__$1 = s__21229;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21229__$1);
if(temp__5735__auto__){
var s__21229__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21229__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21229__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21231 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21230 = (0);
while(true){
if((i__21230 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__21230);
cljs.core.chunk_append.call(null,b__21231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21232 = (i__21230 + (1));
i__21230 = G__21232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21231),sablono$core$unordered_list21227_$_iter__21228.call(null,cljs.core.chunk_rest.call(null,s__21229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21231),null);
}
} else {
var x = cljs.core.first.call(null,s__21229__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21227_$_iter__21228.call(null,cljs.core.rest.call(null,s__21229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21227);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21233 = (function sablono$core$ordered_list21233(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list21233_$_iter__21234(s__21235){
return (new cljs.core.LazySeq(null,(function (){
var s__21235__$1 = s__21235;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21235__$1);
if(temp__5735__auto__){
var s__21235__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21235__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21235__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21237 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21236 = (0);
while(true){
if((i__21236 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__21236);
cljs.core.chunk_append.call(null,b__21237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21238 = (i__21236 + (1));
i__21236 = G__21238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21237),sablono$core$ordered_list21233_$_iter__21234.call(null,cljs.core.chunk_rest.call(null,s__21235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21237),null);
}
} else {
var x = cljs.core.first.call(null,s__21235__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21233_$_iter__21234.call(null,cljs.core.rest.call(null,s__21235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21233);
/**
 * Create an image element.
 */
sablono.core.image21239 = (function sablono$core$image21239(var_args){
var G__21241 = arguments.length;
switch (G__21241) {
case 1:
return sablono.core.image21239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image21239.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image21239.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image21239.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21239);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__21243_SHARP_,p2__21244_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21243_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21244_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__21245_SHARP_,p2__21246_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21245_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21246_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__21248 = arguments.length;
switch (G__21248) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field21250 = (function sablono$core$color_field21250(var_args){
var G__21252 = arguments.length;
switch (G__21252) {
case 1:
return sablono.core.color_field21250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field21250.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__21011__auto__);
}));

(sablono.core.color_field21250.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.color_field21250.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21250);

/**
 * Creates a date input field.
 */
sablono.core.date_field21253 = (function sablono$core$date_field21253(var_args){
var G__21255 = arguments.length;
switch (G__21255) {
case 1:
return sablono.core.date_field21253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field21253.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__21011__auto__);
}));

(sablono.core.date_field21253.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.date_field21253.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21253);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21256 = (function sablono$core$datetime_field21256(var_args){
var G__21258 = arguments.length;
switch (G__21258) {
case 1:
return sablono.core.datetime_field21256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field21256.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__21011__auto__);
}));

(sablono.core.datetime_field21256.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.datetime_field21256.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21256);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21259 = (function sablono$core$datetime_local_field21259(var_args){
var G__21261 = arguments.length;
switch (G__21261) {
case 1:
return sablono.core.datetime_local_field21259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field21259.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__21011__auto__);
}));

(sablono.core.datetime_local_field21259.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.datetime_local_field21259.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21259);

/**
 * Creates a email input field.
 */
sablono.core.email_field21262 = (function sablono$core$email_field21262(var_args){
var G__21264 = arguments.length;
switch (G__21264) {
case 1:
return sablono.core.email_field21262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field21262.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__21011__auto__);
}));

(sablono.core.email_field21262.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.email_field21262.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21262);

/**
 * Creates a file input field.
 */
sablono.core.file_field21265 = (function sablono$core$file_field21265(var_args){
var G__21267 = arguments.length;
switch (G__21267) {
case 1:
return sablono.core.file_field21265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field21265.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__21011__auto__);
}));

(sablono.core.file_field21265.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.file_field21265.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21265);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21268 = (function sablono$core$hidden_field21268(var_args){
var G__21270 = arguments.length;
switch (G__21270) {
case 1:
return sablono.core.hidden_field21268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field21268.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__21011__auto__);
}));

(sablono.core.hidden_field21268.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.hidden_field21268.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21268);

/**
 * Creates a month input field.
 */
sablono.core.month_field21271 = (function sablono$core$month_field21271(var_args){
var G__21273 = arguments.length;
switch (G__21273) {
case 1:
return sablono.core.month_field21271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field21271.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__21011__auto__);
}));

(sablono.core.month_field21271.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.month_field21271.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21271);

/**
 * Creates a number input field.
 */
sablono.core.number_field21274 = (function sablono$core$number_field21274(var_args){
var G__21276 = arguments.length;
switch (G__21276) {
case 1:
return sablono.core.number_field21274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field21274.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__21011__auto__);
}));

(sablono.core.number_field21274.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.number_field21274.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21274);

/**
 * Creates a password input field.
 */
sablono.core.password_field21277 = (function sablono$core$password_field21277(var_args){
var G__21279 = arguments.length;
switch (G__21279) {
case 1:
return sablono.core.password_field21277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field21277.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__21011__auto__);
}));

(sablono.core.password_field21277.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.password_field21277.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21277);

/**
 * Creates a range input field.
 */
sablono.core.range_field21280 = (function sablono$core$range_field21280(var_args){
var G__21282 = arguments.length;
switch (G__21282) {
case 1:
return sablono.core.range_field21280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field21280.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__21011__auto__);
}));

(sablono.core.range_field21280.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.range_field21280.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21280);

/**
 * Creates a search input field.
 */
sablono.core.search_field21283 = (function sablono$core$search_field21283(var_args){
var G__21285 = arguments.length;
switch (G__21285) {
case 1:
return sablono.core.search_field21283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field21283.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__21011__auto__);
}));

(sablono.core.search_field21283.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.search_field21283.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21283);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21286 = (function sablono$core$tel_field21286(var_args){
var G__21288 = arguments.length;
switch (G__21288) {
case 1:
return sablono.core.tel_field21286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field21286.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__21011__auto__);
}));

(sablono.core.tel_field21286.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.tel_field21286.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21286);

/**
 * Creates a text input field.
 */
sablono.core.text_field21289 = (function sablono$core$text_field21289(var_args){
var G__21291 = arguments.length;
switch (G__21291) {
case 1:
return sablono.core.text_field21289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field21289.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__21011__auto__);
}));

(sablono.core.text_field21289.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.text_field21289.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21289);

/**
 * Creates a time input field.
 */
sablono.core.time_field21292 = (function sablono$core$time_field21292(var_args){
var G__21294 = arguments.length;
switch (G__21294) {
case 1:
return sablono.core.time_field21292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field21292.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__21011__auto__);
}));

(sablono.core.time_field21292.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.time_field21292.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21292);

/**
 * Creates a url input field.
 */
sablono.core.url_field21295 = (function sablono$core$url_field21295(var_args){
var G__21297 = arguments.length;
switch (G__21297) {
case 1:
return sablono.core.url_field21295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field21295.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__21011__auto__);
}));

(sablono.core.url_field21295.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.url_field21295.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21295);

/**
 * Creates a week input field.
 */
sablono.core.week_field21298 = (function sablono$core$week_field21298(var_args){
var G__21300 = arguments.length;
switch (G__21300) {
case 1:
return sablono.core.week_field21298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field21298.cljs$core$IFn$_invoke$arity$1 = (function (name__21011__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__21011__auto__);
}));

(sablono.core.week_field21298.cljs$core$IFn$_invoke$arity$2 = (function (name__21011__auto__,value__21012__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__21011__auto__,value__21012__auto__);
}));

(sablono.core.week_field21298.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21298);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21318 = (function sablono$core$check_box21318(var_args){
var G__21320 = arguments.length;
switch (G__21320) {
case 1:
return sablono.core.check_box21318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21318.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box21318.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box21318.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box21318.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box21318.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21318);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21322 = (function sablono$core$radio_button21322(var_args){
var G__21324 = arguments.length;
switch (G__21324) {
case 1:
return sablono.core.radio_button21322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21322.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button21322.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button21322.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button21322.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button21322.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21322);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21326 = (function sablono$core$select_options21326(coll){
var iter__4529__auto__ = (function sablono$core$select_options21326_$_iter__21327(s__21328){
return (new cljs.core.LazySeq(null,(function (){
var s__21328__$1 = s__21328;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21328__$1);
if(temp__5735__auto__){
var s__21328__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21328__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21328__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21330 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21329 = (0);
while(true){
if((i__21329 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__21329);
cljs.core.chunk_append.call(null,b__21330,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21331 = x;
var text = cljs.core.nth.call(null,vec__21331,(0),null);
var val = cljs.core.nth.call(null,vec__21331,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21331,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options21326.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__21337 = (i__21329 + (1));
i__21329 = G__21337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21330),sablono$core$select_options21326_$_iter__21327.call(null,cljs.core.chunk_rest.call(null,s__21328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21330),null);
}
} else {
var x = cljs.core.first.call(null,s__21328__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21334 = x;
var text = cljs.core.nth.call(null,vec__21334,(0),null);
var val = cljs.core.nth.call(null,vec__21334,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21334,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options21326.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options21326_$_iter__21327.call(null,cljs.core.rest.call(null,s__21328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21326);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21338 = (function sablono$core$drop_down21338(var_args){
var G__21340 = arguments.length;
switch (G__21340) {
case 2:
return sablono.core.drop_down21338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21338.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down21338.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21338.call(null,name,options,null);
}));

(sablono.core.drop_down21338.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down21338.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21338);
/**
 * Creates a text area element.
 */
sablono.core.text_area21342 = (function sablono$core$text_area21342(var_args){
var G__21344 = arguments.length;
switch (G__21344) {
case 1:
return sablono.core.text_area21342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area21342.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area21342.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area21342.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21342);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21346 = (function sablono$core$label21346(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21346);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21347 = (function sablono$core$submit_button21347(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21347);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21348 = (function sablono$core$reset_button21348(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21348);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21349 = (function sablono$core$form_to21349(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21356 = arguments.length;
var i__4737__auto___21357 = (0);
while(true){
if((i__4737__auto___21357 < len__4736__auto___21356)){
args__4742__auto__.push((arguments[i__4737__auto___21357]));

var G__21358 = (i__4737__auto___21357 + (1));
i__4737__auto___21357 = G__21358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to21349.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to21349.cljs$core$IFn$_invoke$arity$variadic = (function (p__21352,body){
var vec__21353 = p__21352;
var method = cljs.core.nth.call(null,vec__21353,(0),null);
var action = cljs.core.nth.call(null,vec__21353,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to21349.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to21349.cljs$lang$applyTo = (function (seq21350){
var G__21351 = cljs.core.first.call(null,seq21350);
var seq21350__$1 = cljs.core.next.call(null,seq21350);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21351,seq21350__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21349);

//# sourceMappingURL=core.js.map
