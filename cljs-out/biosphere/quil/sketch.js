// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
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
var temp__5735__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
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
var G__12507 = arguments.length;
switch (G__12507) {
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
var seq__12509 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__12510 = null;
var count__12511 = (0);
var i__12512 = (0);
while(true){
if((i__12512 < count__12511)){
var vec__12523 = chunk__12510.cljs$core$IIndexed$_nth$arity$2(null,i__12512);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(1),null);
var temp__5735__auto___12533 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___12533)){
var handler_12534 = temp__5735__auto___12533;
(prc[cljs.core.name(processing_name)] = ((function (seq__12509,chunk__12510,count__12511,i__12512,handler_12534,temp__5735__auto___12533,vec__12523,processing_name,quil_name){
return (function() { 
var G__12535__delegate = function (args){
var _STAR_applet_STAR__orig_val__12526 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__12527 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__12527);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_12534,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__12526);
}};
var G__12535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12536__i = 0, G__12536__a = new Array(arguments.length -  0);
while (G__12536__i < G__12536__a.length) {G__12536__a[G__12536__i] = arguments[G__12536__i + 0]; ++G__12536__i;}
  args = new cljs.core.IndexedSeq(G__12536__a,0,null);
} 
return G__12535__delegate.call(this,args);};
G__12535.cljs$lang$maxFixedArity = 0;
G__12535.cljs$lang$applyTo = (function (arglist__12537){
var args = cljs.core.seq(arglist__12537);
return G__12535__delegate(args);
});
G__12535.cljs$core$IFn$_invoke$arity$variadic = G__12535__delegate;
return G__12535;
})()
;})(seq__12509,chunk__12510,count__12511,i__12512,handler_12534,temp__5735__auto___12533,vec__12523,processing_name,quil_name))
);
} else {
}


var G__12538 = seq__12509;
var G__12539 = chunk__12510;
var G__12540 = count__12511;
var G__12541 = (i__12512 + (1));
seq__12509 = G__12538;
chunk__12510 = G__12539;
count__12511 = G__12540;
i__12512 = G__12541;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__12509);
if(temp__5735__auto__){
var seq__12509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12509__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__12509__$1);
var G__12542 = cljs.core.chunk_rest(seq__12509__$1);
var G__12543 = c__4609__auto__;
var G__12544 = cljs.core.count(c__4609__auto__);
var G__12545 = (0);
seq__12509 = G__12542;
chunk__12510 = G__12543;
count__12511 = G__12544;
i__12512 = G__12545;
continue;
} else {
var vec__12528 = cljs.core.first(seq__12509__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12528,(1),null);
var temp__5735__auto___12546__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___12546__$1)){
var handler_12547 = temp__5735__auto___12546__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__12509,chunk__12510,count__12511,i__12512,handler_12547,temp__5735__auto___12546__$1,vec__12528,processing_name,quil_name,seq__12509__$1,temp__5735__auto__){
return (function() { 
var G__12548__delegate = function (args){
var _STAR_applet_STAR__orig_val__12531 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__12532 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__12532);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_12547,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__12531);
}};
var G__12548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12549__i = 0, G__12549__a = new Array(arguments.length -  0);
while (G__12549__i < G__12549__a.length) {G__12549__a[G__12549__i] = arguments[G__12549__i + 0]; ++G__12549__i;}
  args = new cljs.core.IndexedSeq(G__12549__a,0,null);
} 
return G__12548__delegate.call(this,args);};
G__12548.cljs$lang$maxFixedArity = 0;
G__12548.cljs$lang$applyTo = (function (arglist__12550){
var args = cljs.core.seq(arglist__12550);
return G__12548__delegate(args);
});
G__12548.cljs$core$IFn$_invoke$arity$variadic = G__12548__delegate;
return G__12548;
})()
;})(seq__12509,chunk__12510,count__12511,i__12512,handler_12547,temp__5735__auto___12546__$1,vec__12528,processing_name,quil_name,seq__12509__$1,temp__5735__auto__))
);
} else {
}


var G__12551 = cljs.core.next(seq__12509__$1);
var G__12552 = null;
var G__12553 = (0);
var G__12554 = (0);
seq__12509 = G__12551;
chunk__12510 = G__12552;
count__12511 = G__12553;
i__12512 = G__12554;
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
var or__4185__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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

return goog.events.listen(document,"fullscreenerror",(function (p1__12555_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__12555_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__12558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__12557 = (function (p1__12556_SHARP_){
return (p1__12556_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12556_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__12556_SHARP_.call(null,options));
});
return fexpr__12557(G__12558);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__12559_12562 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__12559_12562.cljs$core$IFn$_invoke$arity$0 ? fexpr__12559_12562.cljs$core$IFn$_invoke$arity$0() : fexpr__12559_12562.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__12560 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__12560.cljs$core$IFn$_invoke$arity$0 ? fexpr__12560.cljs$core$IFn$_invoke$arity$0() : fexpr__12560.call(null));
} else {
return null;
}
});
var mouse_wheel = (function (){var temp__5735__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var wheel_handler = temp__5735__auto__;
return (function (evt){
var G__12561 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__12561) : wheel_handler.call(null,G__12561));
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
var temp__5735__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5735__auto__)){
var proc_obj = temp__5735__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___12564 = arguments.length;
var i__4790__auto___12565 = (0);
while(true){
if((i__4790__auto___12565 < len__4789__auto___12564)){
args__4795__auto__.push((arguments[i__4790__auto___12565]));

var G__12566 = (i__4790__auto___12565 + (1));
i__4790__auto___12565 = G__12566;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4185__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq12563){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12563));
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
var add_elem_QMARK__12575 = quil.sketch.empty_body_QMARK_();
var seq__12567_12576 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__12568_12577 = null;
var count__12569_12578 = (0);
var i__12570_12579 = (0);
while(true){
if((i__12570_12579 < count__12569_12578)){
var sk_12580 = chunk__12568_12577.cljs$core$IIndexed$_nth$arity$2(null,i__12570_12579);
if(add_elem_QMARK__12575){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_12580));
} else {
}

var fexpr__12573_12581 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_12580);
(fexpr__12573_12581.cljs$core$IFn$_invoke$arity$0 ? fexpr__12573_12581.cljs$core$IFn$_invoke$arity$0() : fexpr__12573_12581.call(null));


var G__12582 = seq__12567_12576;
var G__12583 = chunk__12568_12577;
var G__12584 = count__12569_12578;
var G__12585 = (i__12570_12579 + (1));
seq__12567_12576 = G__12582;
chunk__12568_12577 = G__12583;
count__12569_12578 = G__12584;
i__12570_12579 = G__12585;
continue;
} else {
var temp__5735__auto___12586 = cljs.core.seq(seq__12567_12576);
if(temp__5735__auto___12586){
var seq__12567_12587__$1 = temp__5735__auto___12586;
if(cljs.core.chunked_seq_QMARK_(seq__12567_12587__$1)){
var c__4609__auto___12588 = cljs.core.chunk_first(seq__12567_12587__$1);
var G__12589 = cljs.core.chunk_rest(seq__12567_12587__$1);
var G__12590 = c__4609__auto___12588;
var G__12591 = cljs.core.count(c__4609__auto___12588);
var G__12592 = (0);
seq__12567_12576 = G__12589;
chunk__12568_12577 = G__12590;
count__12569_12578 = G__12591;
i__12570_12579 = G__12592;
continue;
} else {
var sk_12593 = cljs.core.first(seq__12567_12587__$1);
if(add_elem_QMARK__12575){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_12593));
} else {
}

var fexpr__12574_12594 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_12593);
(fexpr__12574_12594.cljs$core$IFn$_invoke$arity$0 ? fexpr__12574_12594.cljs$core$IFn$_invoke$arity$0() : fexpr__12574_12594.call(null));


var G__12595 = cljs.core.next(seq__12567_12587__$1);
var G__12596 = null;
var G__12597 = (0);
var G__12598 = (0);
seq__12567_12576 = G__12595;
chunk__12568_12577 = G__12596;
count__12569_12578 = G__12597;
i__12570_12579 = G__12598;
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
