// Compiled by ClojureScript 1.10.773 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('goog.labs.userAgent.device');
goog.require('react');
goog.require('react_dom');
goog.require('create_react_class');
goog.require('devcards_syntax_highlighter');
goog.require('cljs.core.async');
devcards.core.global$module$react = goog.global["React"];
devcards.core.global$module$react_dom = goog.global["ReactDOM"];
devcards.core.global$module$create_react_class = goog.global["createReactClass"];
devcards.core.global$module$devcards_syntax_highlighter = goog.global["DevcardsSyntaxHighlighter"];

/**
 * @define {boolean}
 */
devcards.core.active = goog.define("devcards.core.active",false);

/**
 * @define {number}
 */
devcards.core.card_buffer_size = goog.define("devcards.core.card_buffer_size",(5000));
cljs.core.enable_console_print_BANG_.call(null);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.devcard_event_chan !== 'undefined')){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,devcards.core.card_buffer_size));
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4126__auto__ = (((typeof Symbol !== 'undefined'))?((cljs.core.fn_QMARK_.call(null,Symbol))?(function (){var and__4115__auto__ = goog.object.get(Symbol,"for");
if(cljs.core.truth_(and__4115__auto__)){
return goog.object.get(Symbol,"for").call(null,"react.element");
} else {
return and__4115__auto__;
}
})():false):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.register_listeners_fig !== 'undefined')){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__22856_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__22856_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if((!((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__22858 = arguments.length;
switch (G__22858) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options))))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1);

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
if(cljs.core.map_QMARK_.call(null,c)){
var map__22862 = c;
var map__22862__$1 = (((((!((map__22862 == null))))?(((((map__22862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22862):map__22862);
var path = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return false;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(devcards.core.card_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return devcards.core.global$module$react.createElement("div",({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,raw_html_str)), "dangerouslySetInnerHTML": ({"__html": raw_html_str})}));
});

devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
if(goog.labs.userAgent.device.isMobile()){
return null;
} else {
var temp__5735__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return DevcardsSyntaxHighlighter.highlightBlock(node);
} else {
return null;
}
}
});
devcards.core.CodeHighlight = (function (){var ctor__13437__auto__ = (function (props__13434__auto__){
var this__13435__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13435__auto__,props__13434__auto__);

return this__13435__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x22864_22865 = ctor__13437__auto__.prototype;
(x22864_22865.componentDidMount = (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}));

(x22864_22865.componentDidUpdate = (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}));

(x22864_22865.render = (function (){
var this$ = this;
return sablono.core.create_element.call(null,"pre",({"className": (((!(goog.labs.userAgent.device.isMobile())))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),sablono.core.create_element.call(null,"code",({"className": (function (){var or__4126__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
}));


return ctor__13437__auto__;
})();

(devcards.core.CodeHighlight.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"CodeHighlight","CodeHighlight",-2140212327,null)));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return devcards.core.global$module$react.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.markdown_block__GT_react !== 'undefined')){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22866){
var map__22867 = p__22866;
var map__22867__$1 = (((((!((map__22867 == null))))?(((((map__22867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22867):map__22867);
var content = cljs.core.get.call(null,map__22867__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__22869){
var map__22870 = p__22869;
var map__22870__$1 = (((((!((map__22870 == null))))?(((((map__22870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22870):map__22870);
var block = map__22870__$1;
var content = cljs.core.get.call(null,map__22870__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.global$module$react.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22873 = arguments.length;
var i__4737__auto___22874 = (0);
while(true){
if((i__4737__auto___22874 < len__4736__auto___22873)){
args__4742__auto__.push((arguments[i__4737__auto___22874]));

var G__22875 = (i__4737__auto___22874 + (1));
i__4737__auto___22874 = G__22875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code.call(null,x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return sablono.core.create_element.call(null,"div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (i,data){
return sablono.core.create_element.call(null,"div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
}),blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return sablono.core.create_element.call(null,"div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
}));

(devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq22872){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22872));
}));

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return sablono.core.create_element.call(null,"div",({"key": "devcards_naked-card", "className": (function (){var G__22876 = devcards.system.devcards_rendered_card_class;
var G__22876__$1 = (cljs.core.truth_(padding_QMARK_)?[G__22876," com-rigsomelight-devcards-devcard-padding"].join(''):G__22876);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [G__22876__$1," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__22876__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__22878 = arguments.length;
switch (G__22878) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__22879 = card;
var map__22879__$1 = (((((!((map__22879 == null))))?(((((map__22879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22879):map__22879);
var path = cljs.core.get.call(null,map__22879__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__22879__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return sablono.core.create_element.call(null,"div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",(cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null)].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return sablono.core.create_element.call(null,"div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),sablono.core.create_element.call(null,"div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,(function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
}))}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs22881 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,sablono.core.create_element,"span",((cljs.core.map_QMARK_.call(null,attrs22881))?sablono.interpreter.attributes.call(null,attrs22881):null),((cljs.core.map_QMARK_.call(null,attrs22881))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22881)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return sablono.core.create_element.call(null,"span",null);
}
}));

(devcards.core.frame.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

var devcards$core$IDevcardOptions$_devcard_options$dyn_22885 = (function (this$,devcard_opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (devcards.core._devcard_options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,devcard_opts);
} else {
var m__4426__auto__ = (devcards.core._devcard_options["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
});
devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcardOptions$_devcard_options$dyn_22885.call(null,this$,devcard_opts);
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

var devcards$core$IDevcard$_devcard$dyn_22886 = (function (this$,devcard_opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (devcards.core._devcard[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,devcard_opts);
} else {
var m__4426__auto__ = (devcards.core._devcard["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
});
devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcard$_devcard$dyn_22886.call(null,this$,devcard_opts);
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5735__auto__ = goog.object.get(this$.refs,ref);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
return devcards.core.global$module$react_dom.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return goog.object.get(this$.props,cljs.core.name.call(null,k));
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return goog.object.get(this$.state,cljs.core.name.call(null,k));
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__13437__auto__ = (function (props__13434__auto__){
var this__13435__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13435__auto__,props__13434__auto__);

return this__13435__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x22887_22889 = ctor__13437__auto__.prototype;
(x22887_22889.shouldComponentUpdate = (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,goog.object.get(next_props,"change_count"),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}));

(x22887_22889.render = (function (){
var this$ = this;
var attrs22888 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs22888))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs22888)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs22888))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22888)], null)));
}));


return ctor__13437__auto__;
})();

(devcards.core.DontUpdate.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DontUpdate","DontUpdate",-547080925,null)));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return devcards.core.global$module$react.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((((!((main_obj_SINGLEQUOTE_ == null)))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var project = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5735__auto__)){
var docu = temp__5735__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,project.call(null,cljs.core.deref.call(null,data_atom))):null);
var card__$1 = ((((typeof main === 'string') || ((main == null))))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = sablono.core.create_element.call(null,"div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(new cljs.core.List(null,document,(new cljs.core.List(null,main__$1,(new cljs.core.List(null,hist_ctl,(new cljs.core.List(null,edn,null,(1),null)),(2),null)),(3),null)),(4),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return sablono.core.create_element.call(null,"div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
devcards.core.DevcardBase = (function (){var ctor__13437__auto__ = (function (props__13432__auto__){
var this__13433__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13433__auto__,props__13432__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)}));
}).call(this__13433__auto__,props__13432__auto__);

return this__13433__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x22891_22892 = ctor__13437__auto__.prototype;
(x22891_22892.componentDidUpdate = (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}));

(x22891_22892.componentWillMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
return this$.setState((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__4115__auto__)){
return this$.state;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
} else {
return null;
}
}));

(x22891_22892.componentWillUnmount = (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__4115__auto__ = data_atom;
if(cljs.core.truth_(and__4115__auto__)){
return id;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}));

(x22891_22892.componentDidMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
var temp__5735__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5735__auto__)){
var data_atom = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5735__auto____$1)){
var id = temp__5735__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,(function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(x22891_22892.render = (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
}));


return ctor__13437__auto__;
})();

(devcards.core.DevcardBase.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DevcardBase","DevcardBase",-1441442980,null)));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__5735__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5735__auto__)){
var node_fn = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto____$1)){
var node = temp__5735__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__13437__auto__ = (function (props__13432__auto__){
var this__13433__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13433__auto__,props__13432__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))}));
}).call(this__13433__auto__,props__13432__auto__);

return this__13433__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x22893_22894 = ctor__13437__auto__.prototype;
(x22893_22894.componentDidUpdate = (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),goog.object.get(prevP,"node_fn"));
} else {
return and__4115__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}));

(x22893_22894.componentWillUnmount = (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return devcards.core.global$module$react_dom.unmountComponentAtNode(node);
} else {
return null;
}
}));

(x22893_22894.componentDidMount = (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}));

(x22893_22894.render = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
return devcards.core.global$module$react.createElement("div",({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
} else {
return devcards.core.global$module$react.createElement("div",null,"Card has not mounted DOM node.");
}
}));


return ctor__13437__auto__;
})();

(devcards.core.DomComponent.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DomComponent","DomComponent",-1557765022,null)));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__4126__auto__ = x === true;
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = x === false;
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (x == null);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__4126__auto__ = typeof x === 'string';
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (x == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4126__auto__ = goog.object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,goog.object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,(function (p1__22895_SHARP_){
return (!(p1__22895_SHARP_ === true));
}),(function (){var map__22897 = opts;
var map__22897__$1 = (((((!((map__22897 == null))))?(((((map__22897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22897):map__22897);
var name = cljs.core.get.call(null,map__22897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__22897__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__22897__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__22897__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (options == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__4126__auto__ = (initial_data == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = (((!((initial_data == null))))?(((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$))))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__4126__auto____$3){
return or__4126__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,(function (p1__22896_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__22896_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return sablono.core.create_element.call(null,"div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),sablono.core.create_element.call(null,"span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),sablono.core.create_element.call(null,"span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs22904 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,sablono.core.create_element,"code",((cljs.core.map_QMARK_.call(null,attrs22904))?sablono.interpreter.attributes.call(null,attrs22904):null),((cljs.core.map_QMARK_.call(null,attrs22904))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22904)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return sablono.core.create_element.call(null,"div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs22905 = [((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null),"Devcard received bad options"].join('');
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs22905))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs22905)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs22905))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22905)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,sablono.core.create_element.call(null,"div",null,(function (){var attrs22906 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs22906))?sablono.interpreter.attributes.call(null,attrs22906):null),((cljs.core.map_QMARK_.call(null,attrs22906))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22906)], null)));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs22907 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs22907))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs22907)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs22907))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22907)], null)));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__22908_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__22908_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return devcards.core.global$module$react.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentityOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22910,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22914 = k22910;
var G__22914__$1 = (((G__22914 instanceof cljs.core.Keyword))?G__22914.fqn:null);
switch (G__22914__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22910,else__4383__auto__);

}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22915){
var vec__22916 = p__22915;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22916,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22916,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.IdentityOptions{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22909){
var self__ = this;
var G__22909__$1 = this;
return (new cljs.core.RecordIter((0),G__22909__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-550579441 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22911,other22912){
var self__ = this;
var this22911__$1 = this;
return (((!((other22912 == null)))) && ((this22911__$1.constructor === other22912.constructor)) && (cljs.core._EQ_.call(null,this22911__$1.obj,other22912.obj)) && (cljs.core._EQ_.call(null,this22911__$1.__extmap,other22912.__extmap)));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22909){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22919 = cljs.core.keyword_identical_QMARK_;
var expr__22920 = k__4388__auto__;
if(cljs.core.truth_(pred__22919.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__22920))){
return (new devcards.core.IdentityOptions(G__22909,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22909),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22909){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,G__22909,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.IdentityOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.IdentityOptions.cljs$lang$type = true);

(devcards.core.IdentityOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/IdentityOptions",null,(1),null));
}));

(devcards.core.IdentityOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"devcards.core/IdentityOptions");
}));

/**
 * Positional factory function for devcards.core/IdentityOptions.
 */
devcards.core.__GT_IdentityOptions = (function devcards$core$__GT_IdentityOptions(obj){
return (new devcards.core.IdentityOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/IdentityOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_IdentityOptions = (function devcards$core$map__GT_IdentityOptions(G__22913){
var extmap__4419__auto__ = (function (){var G__22922 = cljs.core.dissoc.call(null,G__22913,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_.call(null,G__22913)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22922);
} else {
return G__22922;
}
})();
return (new devcards.core.IdentityOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__22913),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__22924){
var map__22925 = p__22924;
var map__22925__$1 = (((((!((map__22925 == null))))?(((((map__22925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22925):map__22925);
var devcard_opts = map__22925__$1;
var options = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22928,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22932 = k22928;
var G__22932__$1 = (((G__22932 instanceof cljs.core.Keyword))?G__22932.fqn:null);
switch (G__22932__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22928,else__4383__auto__);

}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22933){
var vec__22934 = p__22933;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22934,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22934,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22927){
var self__ = this;
var G__22927__$1 = this;
return (new cljs.core.RecordIter((0),G__22927__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22929,other22930){
var self__ = this;
var this22929__$1 = this;
return (((!((other22930 == null)))) && ((this22929__$1.constructor === other22930.constructor)) && (cljs.core._EQ_.call(null,this22929__$1.obj,other22930.obj)) && (cljs.core._EQ_.call(null,this22929__$1.__extmap,other22930.__extmap)));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22927){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22937 = cljs.core.keyword_identical_QMARK_;
var expr__22938 = k__4388__auto__;
if(cljs.core.truth_(pred__22937.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__22938))){
return (new devcards.core.AtomLikeOptions(G__22927,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22927),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22927){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__22927,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.AtomLikeOptions.cljs$lang$type = true);

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/AtomLikeOptions",null,(1),null));
}));

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"devcards.core/AtomLikeOptions");
}));

/**
 * Positional factory function for devcards.core/AtomLikeOptions.
 */
devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/AtomLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__22931){
var extmap__4419__auto__ = (function (){var G__22940 = cljs.core.dissoc.call(null,G__22931,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_.call(null,G__22931)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22940);
} else {
return G__22940;
}
})();
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__22931),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,(((((!((main_obj == null))))?(((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22944,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22948 = k22944;
var G__22948__$1 = (((G__22948 instanceof cljs.core.Keyword))?G__22948.fqn:null);
switch (G__22948__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22944,else__4383__auto__);

}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22949){
var vec__22950 = p__22949;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22950,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22950,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22943){
var self__ = this;
var G__22943__$1 = this;
return (new cljs.core.RecordIter((0),G__22943__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22945,other22946){
var self__ = this;
var this22945__$1 = this;
return (((!((other22946 == null)))) && ((this22945__$1.constructor === other22946.constructor)) && (cljs.core._EQ_.call(null,this22945__$1.obj,other22946.obj)) && (cljs.core._EQ_.call(null,this22945__$1.__extmap,other22946.__extmap)));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22943){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22953 = cljs.core.keyword_identical_QMARK_;
var expr__22954 = k__4388__auto__;
if(cljs.core.truth_(pred__22953.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__22954))){
return (new devcards.core.EdnLikeOptions(G__22943,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22943),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22943){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__22943,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.EdnLikeOptions.cljs$lang$type = true);

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/EdnLikeOptions",null,(1),null));
}));

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"devcards.core/EdnLikeOptions");
}));

/**
 * Positional factory function for devcards.core/EdnLikeOptions.
 */
devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/EdnLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__22947){
var extmap__4419__auto__ = (function (){var G__22956 = cljs.core.dissoc.call(null,G__22947,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_.call(null,G__22947)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22956);
} else {
return G__22956;
}
})();
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__22947),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x))){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return false;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((((!((main_obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(devcards.core.atom_like_QMARK_.call(null,main_obj)){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(devcards.core.edn_like_QMARK_.call(null,main_obj)){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentityOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__22964 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if((!((G__22964 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__22964.devcards$core$IDevcard$)))){
return true;
} else {
if((!G__22964.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__22964);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__22964);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return devcards.core.global$module$react.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
goog.object.set(devcards.core.IDevcardOptions,"string",true);

goog.object.set(devcards.core._devcard_options,"string",(function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
}));
(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
}));
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__22965 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__22965__$1 = (((((!((map__22965 == null))))?(((((map__22965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22965):map__22965);
var history = cljs.core.get.call(null,map__22965__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__22965__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return (!((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0))));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__22967 = cljs.core.deref.call(null,history_atom);
var map__22967__$1 = (((((!((map__22967 == null))))?(((((map__22967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22967):map__22967);
var history = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_back.call(null,this$)){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__22969 = cljs.core.deref.call(null,history_atom);
var map__22969__$1 = (((((!((map__22969 == null))))?(((((map__22969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22969):map__22969);
var history = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_forward.call(null,this$)){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__22971 = cljs.core.deref.call(null,history_atom);
var map__22971__$1 = (((((!((map__22971 == null))))?(((((map__22971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22971):map__22971);
var history = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(devcards.core.can_go_forward.call(null,this$)){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__13437__auto__ = (function (props__13432__auto__){
var this__13433__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13433__auto__,props__13432__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null))), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))}));
}).call(this__13433__auto__,props__13432__auto__);

return this__13433__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x22973_22989 = ctor__13437__auto__.prototype;
(x22973_22989.componentWillMount = (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(new cljs.core.List(null,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504))),null,(1),null)));
}));

(x22973_22989.componentDidMount = (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__4115__auto__ = data_atom;
if(cljs.core.truth_(and__4115__auto__)){
return id;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,(function (_,___$1,___$2,n){
if(devcards.core.in_time_machine_QMARK_.call(null,this$)){
return cljs.core.swap_BANG_.call(null,history_atom,(function (p__22974){
var map__22975 = p__22974;
var map__22975__$1 = (((((!((map__22975 == null))))?(((((map__22975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22975):map__22975);
var ha = map__22975__$1;
var pointer = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
}));
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
}));
} else {
return null;
}
}));

(x22973_22989.render = (function (){
var this$ = this;
if(((devcards.core.can_go_back.call(null,this$)) || (devcards.core.can_go_forward.call(null,this$)))){
return sablono.core.create_element.call(null,"div",({"style": ({"display": ((((devcards.core.can_go_back.call(null,this$)) || (devcards.core.can_go_forward.call(null,this$))))?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});
return sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"button",({"style": ({"visibility": ((devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),sablono.core.create_element.call(null,"span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});
return sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"button",({"style": ({"visibility": ((devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),sablono.core.create_element.call(null,"span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});
return sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"button",({"style": ({"visibility": ((devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),sablono.core.create_element.call(null,"span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});
return sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"button",({"style": ({"visibility": ((devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),sablono.core.create_element.call(null,"span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),sablono.core.create_element.call(null,"span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),sablono.core.create_element.call(null,"span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
}));


return ctor__13437__auto__;
})();

(devcards.core.HistoryComponent.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"HistoryComponent","HistoryComponent",-932269385,null)));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return devcards.core.global$module$react.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR__orig_val__22990 = cljs.test._STAR_current_env_STAR_;
var _STAR_current_env_STAR__temp_val__22991 = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__temp_val__22991);

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__orig_val__22990);
}});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_render !== 'undefined')){
} else {
devcards.core.test_render = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs22992 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs22992))?sablono.interpreter.attributes.call(null,attrs22992):null),((cljs.core.map_QMARK_.call(null,attrs22992))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22992)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__22993,body){
var map__22994 = p__22993;
var map__22994__$1 = (((((!((map__22994 == null))))?(((((map__22994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22994):map__22994);
var message = cljs.core.get.call(null,map__22994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return sablono.core.create_element.call(null,"div",null,(function (){var attrs22996 = message;
return cljs.core.apply.call(null,sablono.core.create_element,"span",((cljs.core.map_QMARK_.call(null,attrs22996))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs22996)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs22996))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22996)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__22997){
var map__22998 = p__22997;
var map__22998__$1 = (((((!((map__22998 == null))))?(((((map__22998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22998):map__22998);
var m = map__22998__$1;
var expected = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs23000 = devcards.core.global$module$react.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs23000))?sablono.interpreter.attributes.call(null,attrs23000):null),((cljs.core.map_QMARK_.call(null,attrs23000))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"div",({"style": ({"marginTop": "5px"})}),sablono.core.create_element.call(null,"div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),sablono.core.create_element.call(null,"div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,devcards.core.global$module$react.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))))):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23000),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"div",({"style": ({"marginTop": "5px"})}),sablono.core.create_element.call(null,"div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),sablono.core.create_element.call(null,"div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,devcards.core.global$module$react.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))))):null)], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,sablono.core.create_element.call(null,"div",null,sablono.core.create_element.call(null,"strong",null,"Error: "),(function (){var attrs23007 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,sablono.core.create_element,"code",((cljs.core.map_QMARK_.call(null,attrs23007))?sablono.interpreter.attributes.call(null,attrs23007):null),((cljs.core.map_QMARK_.call(null,attrs23007))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23007)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs23008 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs23008))?sablono.interpreter.attributes.call(null,attrs23008):null),((cljs.core.map_QMARK_.call(null,attrs23008))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23008)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__23009){
var map__23010 = p__23009;
var map__23010__$1 = (((((!((map__23010 == null))))?(((((map__23010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23010):map__23010);
var testing_contexts = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs23012 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,(function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
}),cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null),null,(1),null))));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs23012))?sablono.interpreter.attributes.call(null,attrs23012):null),((cljs.core.map_QMARK_.call(null,attrs23012))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23012)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs23013 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__23014,p__23015){
var map__23016 = p__23014;
var map__23016__$1 = (((((!((map__23016 == null))))?(((((map__23016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23016):map__23016);
var last_context = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__23017 = p__23015;
var i = cljs.core.nth.call(null,vec__23017,(0),null);
var t = cljs.core.nth.call(null,vec__23017,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (new cljs.core.List(null,devcards.core.test_renderer.call(null,t,i),null,(1),null));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs23013))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs23013)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs23013))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23013)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,(function (p__23022){
var map__23023 = p__23022;
var map__23023__$1 = (((((!((map__23023 == null))))?(((((map__23023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23023):map__23023);
var type = cljs.core.get.call(null,map__23023__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
}),new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__23021 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__23021__$1 = (((((!((map__23021 == null))))?(((((map__23021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23021):map__23021);
var fail = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return sablono.core.create_element.call(null,"div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),sablono.core.create_element.call(null,"div",({"className": "com-rigsomelight-devcards-panel-heading"}),sablono.core.create_element.call(null,"a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,(function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
}))}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path))):null)),sablono.core.create_element.call(null,"button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,(function (){
return this$.setState(({"filter": cljs.core.identity}));
})), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,(function (){
return this$.setState(({"filter": (function (p__23026){
var map__23027 = p__23026;
var map__23027__$1 = (((((!((map__23027 == null))))?(((((map__23027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23027):map__23027);
var type = cljs.core.get.call(null,map__23027__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
})}));
})), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1)))))),(((((pass == null)) || ((pass === (0)))))?null:sablono.interpreter.interpret.call(null,sablono.core.create_element.call(null,"button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,(function (){
return this$.setState(({"filter": (function (p__23029){
var map__23030 = p__23029;
var map__23030__$1 = (((((!((map__23030 == null))))?(((((map__23030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23030):map__23030);
var type = cljs.core.get.call(null,map__23030__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
})}));
})), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),sablono.core.create_element.call(null,"div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__4126__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_channel !== 'undefined')){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
})], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_loop !== 'undefined')){
} else {
devcards.core.test_loop = (function (){var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_23122){
var state_val_23123 = (state_23122[(1)]);
if((state_val_23123 === (7))){
var state_23122__$1 = state_23122;
var statearr_23124_23170 = state_23122__$1;
(statearr_23124_23170[(2)] = false);

(statearr_23124_23170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (20))){
var inst_23060 = (state_23122[(7)]);
var inst_23080 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23060);
var state_23122__$1 = state_23122;
var statearr_23125_23171 = state_23122__$1;
(statearr_23125_23171[(2)] = inst_23080);

(statearr_23125_23171[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (27))){
var inst_23085 = (state_23122[(8)]);
var inst_23097 = (state_23122[(9)]);
var inst_23101 = inst_23085.call(null,inst_23097);
var state_23122__$1 = state_23122;
var statearr_23126_23172 = state_23122__$1;
(statearr_23126_23172[(2)] = inst_23101);

(statearr_23126_23172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (1))){
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23122__$1,(2),devcards.core.test_channel);
} else {
if((state_val_23123 === (24))){
var state_23122__$1 = state_23122;
var statearr_23127_23173 = state_23122__$1;
(statearr_23127_23173[(2)] = null);

(statearr_23127_23173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (4))){
var state_23122__$1 = state_23122;
var statearr_23128_23174 = state_23122__$1;
(statearr_23128_23174[(2)] = false);

(statearr_23128_23174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (15))){
var state_23122__$1 = state_23122;
var statearr_23129_23175 = state_23122__$1;
(statearr_23129_23175[(2)] = false);

(statearr_23129_23175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (21))){
var inst_23060 = (state_23122[(7)]);
var state_23122__$1 = state_23122;
var statearr_23130_23176 = state_23122__$1;
(statearr_23130_23176[(2)] = inst_23060);

(statearr_23130_23176[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (13))){
var inst_23120 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23122__$1,inst_23120);
} else {
if((state_val_23123 === (22))){
var inst_23084 = (state_23122[(10)]);
var inst_23083 = (state_23122[(2)]);
var inst_23084__$1 = cljs.core.get.call(null,inst_23083,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_23085 = cljs.core.get.call(null,inst_23083,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_23122__$1 = (function (){var statearr_23131 = state_23122;
(statearr_23131[(8)] = inst_23085);

(statearr_23131[(10)] = inst_23084__$1);

return statearr_23131;
})();
if(cljs.core.truth_(inst_23084__$1)){
var statearr_23132_23177 = state_23122__$1;
(statearr_23132_23177[(1)] = (23));

} else {
var statearr_23133_23178 = state_23122__$1;
(statearr_23133_23178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (29))){
var inst_23111 = (state_23122[(2)]);
var inst_23112 = cljs.test.clear_env_BANG_.call(null);
var state_23122__$1 = (function (){var statearr_23134 = state_23122;
(statearr_23134[(11)] = inst_23111);

(statearr_23134[(12)] = inst_23112);

return statearr_23134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23122__$1,(30),devcards.core.test_channel);
} else {
if((state_val_23123 === (6))){
var state_23122__$1 = state_23122;
var statearr_23135_23179 = state_23122__$1;
(statearr_23135_23179[(2)] = true);

(statearr_23135_23179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (28))){
var inst_23085 = (state_23122[(8)]);
var inst_23103 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_23104 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_23105 = cljs.core.PersistentHashMap.fromArrays(inst_23103,inst_23104);
var inst_23106 = devcards.core.collect_test.call(null,inst_23105);
var inst_23107 = cljs.test.get_current_env.call(null);
var inst_23108 = cljs.core.assoc.call(null,inst_23107,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_23109 = inst_23085.call(null,inst_23108);
var state_23122__$1 = (function (){var statearr_23136 = state_23122;
(statearr_23136[(13)] = inst_23106);

return statearr_23136;
})();
var statearr_23137_23180 = state_23122__$1;
(statearr_23137_23180[(2)] = inst_23109);

(statearr_23137_23180[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (25))){
var inst_23118 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23138_23181 = state_23122__$1;
(statearr_23138_23181[(2)] = inst_23118);

(statearr_23138_23181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (17))){
var state_23122__$1 = state_23122;
var statearr_23139_23182 = state_23122__$1;
(statearr_23139_23182[(2)] = true);

(statearr_23139_23182[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (3))){
var inst_23036 = (state_23122[(14)]);
var inst_23041 = inst_23036.cljs$lang$protocol_mask$partition0$;
var inst_23042 = (inst_23041 & (64));
var inst_23043 = inst_23036.cljs$core$ISeq$;
var inst_23044 = (cljs.core.PROTOCOL_SENTINEL === inst_23043);
var inst_23045 = ((inst_23042) || (inst_23044));
var state_23122__$1 = state_23122;
if(cljs.core.truth_(inst_23045)){
var statearr_23140_23183 = state_23122__$1;
(statearr_23140_23183[(1)] = (6));

} else {
var statearr_23141_23184 = state_23122__$1;
(statearr_23141_23184[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (12))){
var inst_23060 = (state_23122[(7)]);
var inst_23064 = (inst_23060 == null);
var inst_23065 = cljs.core.not.call(null,inst_23064);
var state_23122__$1 = state_23122;
if(inst_23065){
var statearr_23142_23185 = state_23122__$1;
(statearr_23142_23185[(1)] = (14));

} else {
var statearr_23143_23186 = state_23122__$1;
(statearr_23143_23186[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (2))){
var inst_23036 = (state_23122[(14)]);
var inst_23036__$1 = (state_23122[(2)]);
var inst_23038 = (inst_23036__$1 == null);
var inst_23039 = cljs.core.not.call(null,inst_23038);
var state_23122__$1 = (function (){var statearr_23144 = state_23122;
(statearr_23144[(14)] = inst_23036__$1);

return statearr_23144;
})();
if(inst_23039){
var statearr_23145_23187 = state_23122__$1;
(statearr_23145_23187[(1)] = (3));

} else {
var statearr_23146_23188 = state_23122__$1;
(statearr_23146_23188[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (23))){
var inst_23090 = (state_23122[(15)]);
var inst_23084 = (state_23122[(10)]);
var inst_23090__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_23091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23092 = devcards.core.run_card_tests.call(null,inst_23084);
var inst_23093 = [inst_23092,inst_23090__$1];
var inst_23094 = (new cljs.core.PersistentVector(null,2,(5),inst_23091,inst_23093,null));
var state_23122__$1 = (function (){var statearr_23147 = state_23122;
(statearr_23147[(15)] = inst_23090__$1);

return statearr_23147;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23122__$1,(26),inst_23094);
} else {
if((state_val_23123 === (19))){
var inst_23075 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23148_23189 = state_23122__$1;
(statearr_23148_23189[(2)] = inst_23075);

(statearr_23148_23189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (11))){
var inst_23036 = (state_23122[(14)]);
var inst_23057 = (state_23122[(2)]);
var inst_23058 = cljs.core.get.call(null,inst_23057,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_23059 = cljs.core.get.call(null,inst_23057,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_23060 = inst_23036;
var state_23122__$1 = (function (){var statearr_23149 = state_23122;
(statearr_23149[(7)] = inst_23060);

(statearr_23149[(16)] = inst_23059);

(statearr_23149[(17)] = inst_23058);

return statearr_23149;
})();
var statearr_23150_23190 = state_23122__$1;
(statearr_23150_23190[(2)] = null);

(statearr_23150_23190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (9))){
var inst_23036 = (state_23122[(14)]);
var inst_23054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23036);
var state_23122__$1 = state_23122;
var statearr_23151_23191 = state_23122__$1;
(statearr_23151_23191[(2)] = inst_23054);

(statearr_23151_23191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (5))){
var inst_23052 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
if(cljs.core.truth_(inst_23052)){
var statearr_23152_23192 = state_23122__$1;
(statearr_23152_23192[(1)] = (9));

} else {
var statearr_23153_23193 = state_23122__$1;
(statearr_23153_23193[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (14))){
var inst_23060 = (state_23122[(7)]);
var inst_23067 = inst_23060.cljs$lang$protocol_mask$partition0$;
var inst_23068 = (inst_23067 & (64));
var inst_23069 = inst_23060.cljs$core$ISeq$;
var inst_23070 = (cljs.core.PROTOCOL_SENTINEL === inst_23069);
var inst_23071 = ((inst_23068) || (inst_23070));
var state_23122__$1 = state_23122;
if(cljs.core.truth_(inst_23071)){
var statearr_23154_23194 = state_23122__$1;
(statearr_23154_23194[(1)] = (17));

} else {
var statearr_23155_23195 = state_23122__$1;
(statearr_23155_23195[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (26))){
var inst_23090 = (state_23122[(15)]);
var inst_23096 = (state_23122[(2)]);
var inst_23097 = cljs.core.nth.call(null,inst_23096,(0),null);
var inst_23098 = cljs.core.nth.call(null,inst_23096,(1),null);
var inst_23099 = cljs.core.not_EQ_.call(null,inst_23098,inst_23090);
var state_23122__$1 = (function (){var statearr_23156 = state_23122;
(statearr_23156[(9)] = inst_23097);

return statearr_23156;
})();
if(inst_23099){
var statearr_23157_23196 = state_23122__$1;
(statearr_23157_23196[(1)] = (27));

} else {
var statearr_23158_23197 = state_23122__$1;
(statearr_23158_23197[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (16))){
var inst_23078 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
if(cljs.core.truth_(inst_23078)){
var statearr_23159_23198 = state_23122__$1;
(statearr_23159_23198[(1)] = (20));

} else {
var statearr_23160_23199 = state_23122__$1;
(statearr_23160_23199[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (30))){
var inst_23114 = (state_23122[(2)]);
var inst_23060 = inst_23114;
var state_23122__$1 = (function (){var statearr_23161 = state_23122;
(statearr_23161[(7)] = inst_23060);

return statearr_23161;
})();
var statearr_23162_23200 = state_23122__$1;
(statearr_23162_23200[(2)] = null);

(statearr_23162_23200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (10))){
var inst_23036 = (state_23122[(14)]);
var state_23122__$1 = state_23122;
var statearr_23163_23201 = state_23122__$1;
(statearr_23163_23201[(2)] = inst_23036);

(statearr_23163_23201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (18))){
var state_23122__$1 = state_23122;
var statearr_23164_23202 = state_23122__$1;
(statearr_23164_23202[(2)] = false);

(statearr_23164_23202[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (8))){
var inst_23049 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23165_23203 = state_23122__$1;
(statearr_23165_23203[(2)] = inst_23049);

(statearr_23165_23203[(1)] = (5));


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
});
return (function() {
var devcards$core$state_machine__15069__auto__ = null;
var devcards$core$state_machine__15069__auto____0 = (function (){
var statearr_23166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23166[(0)] = devcards$core$state_machine__15069__auto__);

(statearr_23166[(1)] = (1));

return statearr_23166;
});
var devcards$core$state_machine__15069__auto____1 = (function (state_23122){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_23122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e23167){if((e23167 instanceof Object)){
var ex__15072__auto__ = e23167;
var statearr_23168_23204 = state_23122;
(statearr_23168_23204[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23205 = state_23122;
state_23122 = G__23205;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
devcards$core$state_machine__15069__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return devcards$core$state_machine__15069__auto____0.call(this);
case 1:
return devcards$core$state_machine__15069__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__15069__auto____0;
devcards$core$state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__15069__auto____1;
return devcards$core$state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_23169 = f__15236__auto__.call(null);
(statearr_23169[(6)] = c__15235__auto__);

return statearr_23169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__13437__auto__ = (function (props__13434__auto__){
var this__13435__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13435__auto__,props__13434__auto__);

return this__13435__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x23206_23207 = ctor__13437__auto__.prototype;
(x23206_23207.componentWillMount = (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}));

(x23206_23207.componentWillReceiveProps = (function (next_props){
var this$ = this;
var temp__5735__auto__ = goog.object.get(next_props,cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805)));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}));

(x23206_23207.render = (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
}));


return ctor__13437__auto__;
})();

(devcards.core.TestDevcard.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"TestDevcard","TestDevcard",-506859910,null)));
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23212 = arguments.length;
var i__4737__auto___23213 = (0);
while(true){
if((i__4737__auto___23213 < len__4736__auto___23212)){
args__4742__auto__.push((arguments[i__4737__auto___23213]));

var G__23214 = (i__4737__auto___23213 + (1));
i__4737__auto___23213 = G__23214;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.t_devcards$core23209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core23209 = (function (test_thunks,meta23210){
this.test_thunks = test_thunks;
this.meta23210 = meta23210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devcards.core.t_devcards$core23209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23211,meta23210__$1){
var self__ = this;
var _23211__$1 = this;
return (new devcards.core.t_devcards$core23209(self__.test_thunks,meta23210__$1));
}));

(devcards.core.t_devcards$core23209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23211){
var self__ = this;
var _23211__$1 = this;
return self__.meta23210;
}));

(devcards.core.t_devcards$core23209.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.t_devcards$core23209.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return devcards.core.global$module$react.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
}));

(devcards.core.t_devcards$core23209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta23210","meta23210",1621357203,null)], null);
}));

(devcards.core.t_devcards$core23209.cljs$lang$type = true);

(devcards.core.t_devcards$core23209.cljs$lang$ctorStr = "devcards.core/t_devcards$core23209");

(devcards.core.t_devcards$core23209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"devcards.core/t_devcards$core23209");
}));

/**
 * Positional factory function for devcards.core/t_devcards$core23209.
 */
devcards.core.__GT_t_devcards$core23209 = (function devcards$core$__GT_t_devcards$core23209(test_thunks__$1,meta23210){
return (new devcards.core.t_devcards$core23209(test_thunks__$1,meta23210));
});

}

return (new devcards.core.t_devcards$core23209(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
}));

(devcards.core.test_card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.test_card.cljs$lang$applyTo = (function (seq23208){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23208));
}));

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,(function (p1__23215_SHARP_,p2__23216_SHARP_){
return goog.object.get(p1__23215_SHARP_,p2__23216_SHARP_);
}),goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__5735__auto__)){
var cards = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.munge.call(null,ns_symbol))], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var card = temp__5735__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,cljs.core.munge.call(null,ns_symbol))));
if(cljs.core.truth_(temp__5735__auto__)){
var base_card_options = temp__5735__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
}));
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5735__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ReactDOMServer.renderToString((function (){var attrs23218 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs23218))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs23218)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs23218))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23218)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5735__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
return devcards.core.global$module$react_dom.render((function (){var attrs23219 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs23219))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs23219)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs23219))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23219)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_23229){
var state_val_23230 = (state_23229[(1)]);
if((state_val_23230 === (1))){
var inst_23220 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_23229__$1 = state_23229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23229__$1,(2),inst_23220);
} else {
if((state_val_23230 === (2))){
var inst_23222 = (state_23229[(2)]);
var inst_23223 = cljs.core.async.timeout.call(null,(100));
var state_23229__$1 = (function (){var statearr_23231 = state_23229;
(statearr_23231[(7)] = inst_23222);

return statearr_23231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23229__$1,(3),inst_23223);
} else {
if((state_val_23230 === (3))){
var inst_23225 = (state_23229[(2)]);
var inst_23226 = (function (){return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
})();
var inst_23227 = setTimeout(inst_23226,(0));
var state_23229__$1 = (function (){var statearr_23232 = state_23229;
(statearr_23232[(8)] = inst_23225);

return statearr_23232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23229__$1,inst_23227);
} else {
return null;
}
}
}
});
return (function() {
var devcards$core$mount_namespace_$_state_machine__15069__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__15069__auto____0 = (function (){
var statearr_23233 = [null,null,null,null,null,null,null,null,null];
(statearr_23233[(0)] = devcards$core$mount_namespace_$_state_machine__15069__auto__);

(statearr_23233[(1)] = (1));

return statearr_23233;
});
var devcards$core$mount_namespace_$_state_machine__15069__auto____1 = (function (state_23229){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_23229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e23234){if((e23234 instanceof Object)){
var ex__15072__auto__ = e23234;
var statearr_23235_23237 = state_23229;
(statearr_23235_23237[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23238 = state_23229;
state_23229 = G__23238;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__15069__auto__ = function(state_23229){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__15069__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__15069__auto____1.call(this,state_23229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__15069__auto____0;
devcards$core$mount_namespace_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__15069__auto____1;
return devcards$core$mount_namespace_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_23236 = f__15236__auto__.call(null);
(statearr_23236[(6)] = c__15235__auto__);

return statearr_23236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map
