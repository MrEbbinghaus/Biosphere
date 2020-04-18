// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.navigation_2d');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
quil.middlewares.navigation_2d.missing_navigation_key_error = ["state map is missing :navigation-2d key. ","Did you accidentally removed it from the state in ",":update or any other handler?"].join('');
/**
 * Asserts that `state` map contains `:navigation-2d` object.
 */
quil.middlewares.navigation_2d.assert_state_has_navigation = (function quil$middlewares$navigation_2d$assert_state_has_navigation(state){
if(cljs.core.truth_(cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_2d.missing_navigation_key_error));
}
});
/**
 * Default position configuration: zoom is neutral and central point is
 *   `width/2, height/2`.
 */
quil.middlewares.navigation_2d.default_position = (function quil$middlewares$navigation_2d$default_position(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / 2.0),(quil.core.height() / 2.0)], null),cljs.core.cst$kw$zoom,(1)], null);
});
/**
 * Custom 'setup' function which creates initial position
 *   configuration and puts it to the state map.
 */
quil.middlewares.navigation_2d.setup_2d_nav = (function quil$middlewares$navigation_2d$setup_2d_nav(user_setup,user_settings){
var initial_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quil.middlewares.navigation_2d.default_position(),cljs.core.select_keys(user_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$position,cljs.core.cst$kw$zoom], null))], 0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((user_setup.cljs$core$IFn$_invoke$arity$0 ? user_setup.cljs$core$IFn$_invoke$arity$0() : user_setup.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d], null),(function (p1__13489_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_state,p1__13489_SHARP_], 0));
}));
});
/**
 * Changes center of the sketch depending on the last mouse move. Takes
 *   zoom into account as well.
 */
quil.middlewares.navigation_2d.mouse_dragged = (function quil$middlewares$navigation_2d$mouse_dragged(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

var dx = (cljs.core.cst$kw$p_DASH_x.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event));
var dy = (cljs.core.cst$kw$p_DASH_y.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event));
var zoom = cljs.core.cst$kw$zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$position,(0)], null),cljs.core._PLUS_,(dx / zoom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$position,(1)], null),cljs.core._PLUS_,(dy / zoom));
});
/**
 * Changes zoom settings based on scroll.
 */
quil.middlewares.navigation_2d.mouse_wheel = (function quil$middlewares$navigation_2d$mouse_wheel(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$zoom], null),cljs.core._STAR_,((1) + (-0.1 * event)));
});
/**
 * Calls user draw function with all necessary transformations (position
 *   and zoom) applied.
 */
quil.middlewares.navigation_2d.draw = (function quil$middlewares$navigation_2d$draw(user_draw,state){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

quil.core.push_matrix();

var nav_2d_13490 = cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(state);
var zoom_13491 = cljs.core.cst$kw$zoom.cljs$core$IFn$_invoke$arity$1(nav_2d_13490);
var pos_13492 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(nav_2d_13490);
quil.core.scale.cljs$core$IFn$_invoke$arity$1(zoom_13491);

var tr__13393__auto___13493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((quil.core.width() / (2)) / zoom_13491) - cljs.core.first(pos_13492)),(((quil.core.height() / (2)) / zoom_13491) - cljs.core.second(pos_13492))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__13393__auto___13493);

(user_draw.cljs$core$IFn$_invoke$arity$1 ? user_draw.cljs$core$IFn$_invoke$arity$1(state) : user_draw.call(null,state));
}finally {quil.core.pop_matrix();
}
return quil.core.pop_matrix();
});
/**
 * Enables navigation over 2D sketch. Dragging mouse will move center of the
 *   sketch and mouse wheel controls zoom.
 */
quil.middlewares.navigation_2d.navigation_2d = (function quil$middlewares$navigation_2d$navigation_2d(options){
var user_settings = cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(options);
var user_draw = cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$2(options,(function (state){
return null;
}));
var user_mouse_dragged = cljs.core.cst$kw$mouse_DASH_dragged.cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var user_mouse_wheel = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var setup = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$2(options,(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$setup,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(quil.middlewares.navigation_2d.setup_2d_nav,setup,user_settings),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$draw,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(quil.middlewares.navigation_2d.draw,user_draw),cljs.core.cst$kw$mouse_DASH_dragged,(function (state,event){
var G__13494 = quil.middlewares.navigation_2d.mouse_dragged(state,event);
var G__13495 = event;
return (user_mouse_dragged.cljs$core$IFn$_invoke$arity$2 ? user_mouse_dragged.cljs$core$IFn$_invoke$arity$2(G__13494,G__13495) : user_mouse_dragged.call(null,G__13494,G__13495));
}),cljs.core.cst$kw$mouse_DASH_wheel,(function (state,event){
var G__13496 = quil.middlewares.navigation_2d.mouse_wheel(state,event);
var G__13497 = event;
return (user_mouse_wheel.cljs$core$IFn$_invoke$arity$2 ? user_mouse_wheel.cljs$core$IFn$_invoke$arity$2(G__13496,G__13497) : user_mouse_wheel.call(null,G__13496,G__13497));
})], 0));
});
