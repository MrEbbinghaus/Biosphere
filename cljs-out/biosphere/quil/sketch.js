// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.object');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(p5.prototype["JAVA2D"]),cljs.core.cst$kw$p2d,(p5.prototype["P2D"]),cljs.core.cst$kw$p3d,(p5.prototype["P3D"]),cljs.core.cst$kw$opengl,(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p3d,mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5753__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

(applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width")));

return (applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height")));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__13143 = arguments.length;
switch (G__13143) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
}));

(quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
}));

(quil.sketch.size.cljs$lang$maxFixedArity = 3);

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__13145 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__13146 = null;
var count__13147 = (0);
var i__13148 = (0);
while(true){
if((i__13148 < count__13147)){
var vec__13159 = chunk__13146.cljs$core$IIndexed$_nth$arity$2(null,i__13148);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13159,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13159,(1),null);
var temp__5753__auto___13169 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5753__auto___13169)){
var handler_13170 = temp__5753__auto___13169;
(prc[cljs.core.name(processing_name)] = ((function (seq__13145,chunk__13146,count__13147,i__13148,handler_13170,temp__5753__auto___13169,vec__13159,processing_name,quil_name){
return (function() { 
var G__13171__delegate = function (args){
var _STAR_applet_STAR__orig_val__13162 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__13163 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__13163);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_13170,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__13162);
}};
var G__13171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13172__i = 0, G__13172__a = new Array(arguments.length -  0);
while (G__13172__i < G__13172__a.length) {G__13172__a[G__13172__i] = arguments[G__13172__i + 0]; ++G__13172__i;}
  args = new cljs.core.IndexedSeq(G__13172__a,0,null);
} 
return G__13171__delegate.call(this,args);};
G__13171.cljs$lang$maxFixedArity = 0;
G__13171.cljs$lang$applyTo = (function (arglist__13173){
var args = cljs.core.seq(arglist__13173);
return G__13171__delegate(args);
});
G__13171.cljs$core$IFn$_invoke$arity$variadic = G__13171__delegate;
return G__13171;
})()
;})(seq__13145,chunk__13146,count__13147,i__13148,handler_13170,temp__5753__auto___13169,vec__13159,processing_name,quil_name))
);
} else {
}


var G__13174 = seq__13145;
var G__13175 = chunk__13146;
var G__13176 = count__13147;
var G__13177 = (i__13148 + (1));
seq__13145 = G__13174;
chunk__13146 = G__13175;
count__13147 = G__13176;
i__13148 = G__13177;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13145);
if(temp__5753__auto__){
var seq__13145__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13145__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__13145__$1);
var G__13178 = cljs.core.chunk_rest(seq__13145__$1);
var G__13179 = c__4649__auto__;
var G__13180 = cljs.core.count(c__4649__auto__);
var G__13181 = (0);
seq__13145 = G__13178;
chunk__13146 = G__13179;
count__13147 = G__13180;
i__13148 = G__13181;
continue;
} else {
var vec__13164 = cljs.core.first(seq__13145__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(1),null);
var temp__5753__auto___13182__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5753__auto___13182__$1)){
var handler_13183 = temp__5753__auto___13182__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__13145,chunk__13146,count__13147,i__13148,handler_13183,temp__5753__auto___13182__$1,vec__13164,processing_name,quil_name,seq__13145__$1,temp__5753__auto__){
return (function() { 
var G__13184__delegate = function (args){
var _STAR_applet_STAR__orig_val__13167 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__13168 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__13168);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_13183,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__13167);
}};
var G__13184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13185__i = 0, G__13185__a = new Array(arguments.length -  0);
while (G__13185__i < G__13185__a.length) {G__13185__a[G__13185__i] = arguments[G__13185__i + 0]; ++G__13185__i;}
  args = new cljs.core.IndexedSeq(G__13185__a,0,null);
} 
return G__13184__delegate.call(this,args);};
G__13184.cljs$lang$maxFixedArity = 0;
G__13184.cljs$lang$applyTo = (function (arglist__13186){
var args = cljs.core.seq(arglist__13186);
return G__13184__delegate(args);
});
G__13184.cljs$core$IFn$_invoke$arity$variadic = G__13184__delegate;
return G__13184;
})()
;})(seq__13145,chunk__13146,count__13147,i__13148,handler_13183,temp__5753__auto___13182__$1,vec__13164,processing_name,quil_name,seq__13145__$1,temp__5753__auto__))
);
} else {
}


var G__13187 = cljs.core.next(seq__13145__$1);
var G__13188 = null;
var G__13189 = (0);
var G__13190 = (0);
seq__13145 = G__13187;
chunk__13146 = G__13188;
count__13147 = G__13189;
i__13148 = G__13190;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4223__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});
goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
}));

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",(function (p1__13191_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__13191_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__13194 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__13193 = (function (p1__13192_SHARP_){
return (p1__13192_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13192_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__13192_SHARP_.call(null,options));
});
return fexpr__13193(G__13194);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__13195_13198 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__13195_13198.cljs$core$IFn$_invoke$arity$0 ? fexpr__13195_13198.cljs$core$IFn$_invoke$arity$0() : fexpr__13195_13198.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__13196 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__13196.cljs$core$IFn$_invoke$arity$0 ? fexpr__13196.cljs$core$IFn$_invoke$arity$0() : fexpr__13196.call(null));
} else {
return null;
}
});
var mouse_wheel = (function (){var temp__5753__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5753__auto__)){
var wheel_handler = temp__5753__auto__;
return (function (evt){
var G__13197 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__13197) : wheel_handler.call(null,G__13197));
});
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var sketch = (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

(prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

return (prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state));
});
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5753__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5753__auto__)){
var proc_obj = temp__5753__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4835__auto__ = [];
var len__4829__auto___13200 = arguments.length;
var i__4830__auto___13201 = (0);
while(true){
if((i__4830__auto___13201 < len__4829__auto___13200)){
args__4835__auto__.push((arguments[i__4830__auto___13201]));

var G__13202 = (i__4830__auto___13201 + (1));
i__4830__auto___13201 = G__13202;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4223__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
(host_elem__$1.processing_context = renderer);
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
(host_elem__$1.processing_obj = proc_obj);

(proc_obj.quil_canvas = host_elem__$1);

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
}));

(quil.sketch.sketch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq13199){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13199));
}));

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__13211 = quil.sketch.empty_body_QMARK_();
var seq__13203_13212 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__13204_13213 = null;
var count__13205_13214 = (0);
var i__13206_13215 = (0);
while(true){
if((i__13206_13215 < count__13205_13214)){
var sk_13216 = chunk__13204_13213.cljs$core$IIndexed$_nth$arity$2(null,i__13206_13215);
if(add_elem_QMARK__13211){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13216));
} else {
}

var fexpr__13209_13217 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13216);
(fexpr__13209_13217.cljs$core$IFn$_invoke$arity$0 ? fexpr__13209_13217.cljs$core$IFn$_invoke$arity$0() : fexpr__13209_13217.call(null));


var G__13218 = seq__13203_13212;
var G__13219 = chunk__13204_13213;
var G__13220 = count__13205_13214;
var G__13221 = (i__13206_13215 + (1));
seq__13203_13212 = G__13218;
chunk__13204_13213 = G__13219;
count__13205_13214 = G__13220;
i__13206_13215 = G__13221;
continue;
} else {
var temp__5753__auto___13222 = cljs.core.seq(seq__13203_13212);
if(temp__5753__auto___13222){
var seq__13203_13223__$1 = temp__5753__auto___13222;
if(cljs.core.chunked_seq_QMARK_(seq__13203_13223__$1)){
var c__4649__auto___13224 = cljs.core.chunk_first(seq__13203_13223__$1);
var G__13225 = cljs.core.chunk_rest(seq__13203_13223__$1);
var G__13226 = c__4649__auto___13224;
var G__13227 = cljs.core.count(c__4649__auto___13224);
var G__13228 = (0);
seq__13203_13212 = G__13225;
chunk__13204_13213 = G__13226;
count__13205_13214 = G__13227;
i__13206_13215 = G__13228;
continue;
} else {
var sk_13229 = cljs.core.first(seq__13203_13223__$1);
if(add_elem_QMARK__13211){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13229));
} else {
}

var fexpr__13210_13230 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13229);
(fexpr__13210_13230.cljs$core$IFn$_invoke$arity$0 ? fexpr__13210_13230.cljs$core$IFn$_invoke$arity$0() : fexpr__13210_13230.call(null));


var G__13231 = cljs.core.next(seq__13203_13223__$1);
var G__13232 = null;
var G__13233 = (0);
var G__13234 = (0);
seq__13203_13212 = G__13231;
chunk__13204_13213 = G__13232;
count__13205_13214 = G__13233;
i__13206_13215 = G__13234;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
