// Compiled by ClojureScript 1.10.773 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
goog.require('react');
devcards.util.utils.global$module$react = goog.global["React"];
devcards.util.utils.react_holder = devcards.util.utils.global$module$react;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13475_13479 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13476_13480 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13477_13481 = true;
var _STAR_print_fn_STAR__temp_val__13478_13482 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13477_13481);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13478_13482);

try{cljs.pprint.pprint.call(null,obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13476_13480);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13475_13479);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e13473){if((e13473 instanceof Error)){
var e1 = e13473;
try{return obj.toString();
}catch (e13474){if((e13474 instanceof Error)){
var e2 = e13474;
return "<<Un-printable Type>>";
} else {
throw e13474;

}
}} else {
throw e13473;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__13483 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__13484 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__13484);

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__13483);
}});

//# sourceMappingURL=utils.js.map
