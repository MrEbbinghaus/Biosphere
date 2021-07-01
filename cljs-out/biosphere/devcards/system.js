// Compiled by ClojureScript 1.10.773 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devcards.util.utils');
goog.require('react');
goog.require('react_dom');
goog.require('goog.History');
devcards.system.global$module$react = goog.global["React"];
devcards.system.global$module$react_dom = goog.global["ReactDOM"];
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5733__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var first_child = temp__5733__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5733__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5733__auto__)){
var heads = temp__5733__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child.call(null,document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__21666_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__21666_SHARP_.token));
}));

var temp__5735__auto__ = goog.object.get(location,"hash");
if(cljs.core.truth_(temp__5735__auto__)){
var token = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
if(cljs.core.map_QMARK_.call(null,d)){
var and__4115__auto__ = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$2)){
return d;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5733__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.name.call(null,cljs.core.last.call(null,path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__21667,state){
var vec__21668 = p__21667;
var _ = cljs.core.nth.call(null,vec__21668,(0),null);
var map__21671 = cljs.core.nth.call(null,vec__21668,(1),null);
var map__21671__$1 = (((((!((map__21671 == null))))?(((((map__21671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21671):map__21671);
var path = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__21671__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__4126__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__21673,path){
var map__21674 = p__21673;
var map__21674__$1 = (((((!((map__21674 == null))))?(((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var state = map__21674__$1;
var current_path = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__21676,path){
var map__21677 = p__21676;
var map__21677__$1 = (((((!((map__21677 == null))))?(((((map__21677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21677):map__21677);
var state = map__21677__$1;
var current_path = cljs.core.get.call(null,map__21677__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__4115__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__21679_SHARP_){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__21679_SHARP_))){
return devcards.system.devcard_QMARK_.call(null,p1__21679_SHARP_);
} else {
return false;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__21680){
var map__21681 = p__21680;
var map__21681__$1 = (((((!((map__21681 == null))))?(((((map__21681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21681):map__21681);
var card = map__21681__$1;
var path = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__21681__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return sablono.core.create_element.call(null,"div",({"key": devcards.system.path__GT_unique_card_id.call(null,path), "className": "com-rigsomelight-devcard"}),sablono.interpreter.interpret.call(null,(function (){var _STAR_devcard_data_STAR__orig_val__21683 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__21684 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__21684);

try{return func.call(null);
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__21683);
}})()));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,devcards.system.current_page.call(null,data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__21685){
var map__21686 = p__21685;
var map__21686__$1 = (((((!((map__21686 == null))))?(((((map__21686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21686):map__21686);
var state = map__21686__$1;
var current_path = cljs.core.get.call(null,map__21686__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,(function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
}),cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.call(null,(0));
var sep_fn = (function (_){
return sablono.core.create_element.call(null,"span",({"key": (function (){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return cljs.core.deref.call(null,counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"}),"/");
});
return sablono.core.create_element.call(null,"div",({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.rest.call(null,cljs.core.interleave.call(null,cljs.core.iterate.call(null,sep_fn,sep_fn.call(null,null)),cljs.core.map.call(null,(function (p__21688){
var vec__21689 = p__21688;
var n = cljs.core.nth.call(null,vec__21689,(0),null);
var path = cljs.core.nth.call(null,vec__21689,(1),null);
return sablono.core.create_element.call(null,"span",({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id.call(null,path)}),sablono.core.create_element.call(null,"a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,(function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"}),sablono.interpreter.interpret.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}),crumbs)))),sablono.interpreter.interpret.call(null,devcards.system.cljs_logo.call(null)));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs21692 = cljs.core.map.call(null,(function (p__21693){
var vec__21694 = p__21693;
var key = cljs.core.nth.call(null,vec__21694,(0),null);
var child_tree = cljs.core.nth.call(null,vec__21694,(1),null);
return sablono.core.create_element.call(null,"a",({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_.call(null,(function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"}),sablono.core.create_element.call(null,"span",({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),sablono.core.create_element.call(null,"span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__21697){
var vec__21698 = p__21697;
var key = cljs.core.nth.call(null,vec__21698,(0),null);
var _ = cljs.core.nth.call(null,vec__21698,(1),null);
return cljs.core.name.call(null,key);
}),dirs));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs21692))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs21692)):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_.call(null,attrs21692))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21692)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return sablono.core.create_element.call(null,"div",({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5735__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
return clojure.string.replace.call(null,cljs.core.name.call(null,n),".","-");
} else {
return null;
}
})()].join('')}),(function (){var attrs21701 = (function (){var temp__5735__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__5735__auto__)){
var crumbs = temp__5735__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs21701))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs21701)):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_.call(null,attrs21701))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs21702 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs21702))?sablono.interpreter.attributes.call(null,attrs21702):null),((cljs.core.map_QMARK_.call(null,attrs21702))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21702)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21701),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs21703 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs21703))?sablono.interpreter.attributes.call(null,attrs21703):null),((cljs.core.map_QMARK_.call(null,attrs21703))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21703)], null)));
})()], null)));
})());
});
devcards.system.DevcardsRoot = (function (){var ctor__13437__auto__ = (function (props__13434__auto__){
var this__13435__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__13435__auto__,props__13434__auto__);

return this__13435__auto__;
});
goog.inherits(ctor__13437__auto__,devcards.util.utils.react_holder.Component);

var x21704_21705 = ctor__13437__auto__.prototype;
(x21704_21705.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x21704_21705.render = (function (){
var this$ = this;
return devcards.system.main_template.call(null,devcards.system.app_state);
}));


return ctor__13437__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null)));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return devcards.system.global$module$react_dom.render(devcards.system.global$module$react.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_21753){
var state_val_21754 = (state_21753[(1)]);
if((state_val_21754 === (7))){
var inst_21749 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
var statearr_21755_21782 = state_21753__$1;
(statearr_21755_21782[(2)] = inst_21749);

(statearr_21755_21782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (1))){
var inst_21706 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_21707 = inst_21706;
var state_21753__$1 = (function (){var statearr_21756 = state_21753;
(statearr_21756[(7)] = inst_21707);

return statearr_21756;
})();
var statearr_21757_21783 = state_21753__$1;
(statearr_21757_21783[(2)] = null);

(statearr_21757_21783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (4))){
var inst_21714 = (state_21753[(8)]);
var inst_21714__$1 = (state_21753[(2)]);
var state_21753__$1 = (function (){var statearr_21758 = state_21753;
(statearr_21758[(8)] = inst_21714__$1);

return statearr_21758;
})();
if(cljs.core.truth_(inst_21714__$1)){
var statearr_21759_21784 = state_21753__$1;
(statearr_21759_21784[(1)] = (5));

} else {
var statearr_21760_21785 = state_21753__$1;
(statearr_21760_21785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (15))){
var state_21753__$1 = state_21753;
var statearr_21761_21786 = state_21753__$1;
(statearr_21761_21786[(2)] = null);

(statearr_21761_21786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (13))){
var inst_21744 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
var statearr_21762_21787 = state_21753__$1;
(statearr_21762_21787[(2)] = inst_21744);

(statearr_21762_21787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (6))){
var state_21753__$1 = state_21753;
var statearr_21763_21788 = state_21753__$1;
(statearr_21763_21788[(2)] = null);

(statearr_21763_21788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (3))){
var inst_21751 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21753__$1,inst_21751);
} else {
if((state_val_21754 === (12))){
var state_21753__$1 = state_21753;
var statearr_21764_21789 = state_21753__$1;
(statearr_21764_21789[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (2))){
var inst_21709 = (state_21753[(9)]);
var inst_21709__$1 = cljs.core.async.timeout.call(null,(500));
var inst_21710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21711 = [channel,inst_21709__$1];
var inst_21712 = (new cljs.core.PersistentVector(null,2,(5),inst_21710,inst_21711,null));
var state_21753__$1 = (function (){var statearr_21766 = state_21753;
(statearr_21766[(9)] = inst_21709__$1);

return statearr_21766;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21753__$1,(4),inst_21712);
} else {
if((state_val_21754 === (11))){
var inst_21707 = (state_21753[(7)]);
var inst_21732 = devcards.system.merge_in_new_data.call(null,start_data,inst_21707);
var state_21753__$1 = state_21753;
var statearr_21767_21790 = state_21753__$1;
(statearr_21767_21790[(2)] = inst_21732);

(statearr_21767_21790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (9))){
var inst_21723 = (state_21753[(10)]);
var inst_21730 = cljs.core._EQ_.call(null,inst_21723,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_21753__$1 = state_21753;
if(inst_21730){
var statearr_21768_21791 = state_21753__$1;
(statearr_21768_21791[(1)] = (11));

} else {
var statearr_21769_21792 = state_21753__$1;
(statearr_21769_21792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (5))){
var inst_21714 = (state_21753[(8)]);
var inst_21709 = (state_21753[(9)]);
var inst_21722 = cljs.core.nth.call(null,inst_21714,(0),null);
var inst_21723 = cljs.core.nth.call(null,inst_21722,(0),null);
var inst_21724 = cljs.core.nth.call(null,inst_21722,(1),null);
var inst_21725 = cljs.core.nth.call(null,inst_21714,(1),null);
var inst_21726 = cljs.core._EQ_.call(null,inst_21725,inst_21709);
var state_21753__$1 = (function (){var statearr_21770 = state_21753;
(statearr_21770[(11)] = inst_21724);

(statearr_21770[(10)] = inst_21723);

return statearr_21770;
})();
if(inst_21726){
var statearr_21771_21793 = state_21753__$1;
(statearr_21771_21793[(1)] = (8));

} else {
var statearr_21772_21794 = state_21753__$1;
(statearr_21772_21794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (14))){
var inst_21724 = (state_21753[(11)]);
var inst_21723 = (state_21753[(10)]);
var inst_21707 = (state_21753[(7)]);
var inst_21735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21736 = [inst_21723,inst_21724];
var inst_21737 = (new cljs.core.PersistentVector(null,2,(5),inst_21735,inst_21736,null));
var inst_21738 = devcards.system.dev_trans.call(null,inst_21737,inst_21707);
var inst_21707__$1 = inst_21738;
var state_21753__$1 = (function (){var statearr_21773 = state_21753;
(statearr_21773[(7)] = inst_21707__$1);

return statearr_21773;
})();
var statearr_21774_21795 = state_21753__$1;
(statearr_21774_21795[(2)] = null);

(statearr_21774_21795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (16))){
var inst_21742 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
var statearr_21775_21796 = state_21753__$1;
(statearr_21775_21796[(2)] = inst_21742);

(statearr_21775_21796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (10))){
var inst_21746 = (state_21753[(2)]);
var state_21753__$1 = state_21753;
var statearr_21776_21797 = state_21753__$1;
(statearr_21776_21797[(2)] = inst_21746);

(statearr_21776_21797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21754 === (8))){
var inst_21707 = (state_21753[(7)]);
var inst_21728 = devcards.system.merge_in_new_data.call(null,start_data,inst_21707);
var state_21753__$1 = state_21753;
var statearr_21777_21798 = state_21753__$1;
(statearr_21777_21798[(2)] = inst_21728);

(statearr_21777_21798[(1)] = (10));


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
var devcards$system$off_the_books_$_state_machine__15069__auto__ = null;
var devcards$system$off_the_books_$_state_machine__15069__auto____0 = (function (){
var statearr_21778 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21778[(0)] = devcards$system$off_the_books_$_state_machine__15069__auto__);

(statearr_21778[(1)] = (1));

return statearr_21778;
});
var devcards$system$off_the_books_$_state_machine__15069__auto____1 = (function (state_21753){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_21753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e21779){if((e21779 instanceof Object)){
var ex__15072__auto__ = e21779;
var statearr_21780_21799 = state_21753;
(statearr_21780_21799[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21800 = state_21753;
state_21753 = G__21800;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__15069__auto__ = function(state_21753){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__15069__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__15069__auto____1.call(this,state_21753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__15069__auto____0;
devcards$system$off_the_books_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__15069__auto____1;
return devcards$system$off_the_books_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_21781 = f__15236__auto__.call(null);
(statearr_21781[(6)] = c__15235__auto__);

return statearr_21781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__15235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_21808){
var state_val_21809 = (state_21808[(1)]);
if((state_val_21809 === (1))){
var inst_21801 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_21802 = cljs.core.PersistentVector.EMPTY;
var inst_21803 = devcards.system.off_the_books.call(null,channel,inst_21801,inst_21802);
var state_21808__$1 = state_21808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21808__$1,(2),inst_21803);
} else {
if((state_val_21809 === (2))){
var inst_21805 = (state_21808[(2)]);
var inst_21806 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_21805);
var state_21808__$1 = state_21808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21808__$1,inst_21806);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto____0 = (function (){
var statearr_21810 = [null,null,null,null,null,null,null];
(statearr_21810[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto__);

(statearr_21810[(1)] = (1));

return statearr_21810;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto____1 = (function (state_21808){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_21808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e21811){if((e21811 instanceof Object)){
var ex__15072__auto__ = e21811;
var statearr_21812_21814 = state_21808;
(statearr_21812_21814[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21815 = state_21808;
state_21808 = G__21815;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto__ = function(state_21808){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto____1.call(this,state_21808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_21813 = f__15236__auto__.call(null);
(statearr_21813[(6)] = c__15235__auto__);

return statearr_21813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));

return c__15235__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents(true);
} else {
}

var c__15235__auto___21855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_21840){
var state_val_21841 = (state_21840[(1)]);
if((state_val_21841 === (7))){
var state_21840__$1 = state_21840;
var statearr_21842_21856 = state_21840__$1;
(statearr_21842_21856[(2)] = null);

(statearr_21842_21856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21841 === (1))){
var inst_21816 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_21840__$1 = state_21840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21840__$1,(2),inst_21816);
} else {
if((state_val_21841 === (4))){
var inst_21838 = (state_21840[(2)]);
var state_21840__$1 = state_21840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21840__$1,inst_21838);
} else {
if((state_val_21841 === (6))){
var inst_21825 = (state_21840[(7)]);
var inst_21827 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_21828 = devcards.system.off_the_books.call(null,channel,inst_21827,inst_21825);
var state_21840__$1 = state_21840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21840__$1,(9),inst_21828);
} else {
if((state_val_21841 === (3))){
var state_21840__$1 = state_21840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21840__$1,(5),channel);
} else {
if((state_val_21841 === (2))){
var inst_21818 = (state_21840[(2)]);
var inst_21819 = (function (){return (function (){
return renderer.call(null,devcards.system.app_state);
});
})();
var inst_21820 = setTimeout(inst_21819,(0));
var inst_21821 = (function (){return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return renderer.call(null,devcards.system.app_state);
}));
});
})();
var inst_21822 = setTimeout(inst_21821,(0));
var state_21840__$1 = (function (){var statearr_21843 = state_21840;
(statearr_21843[(8)] = inst_21822);

(statearr_21843[(9)] = inst_21820);

(statearr_21843[(10)] = inst_21818);

return statearr_21843;
})();
var statearr_21844_21857 = state_21840__$1;
(statearr_21844_21857[(2)] = null);

(statearr_21844_21857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21841 === (9))){
var inst_21825 = (state_21840[(7)]);
var inst_21830 = (state_21840[(2)]);
var inst_21831 = (function (){var temp__5735__auto__ = inst_21825;
var v = inst_21825;
var new_state = inst_21830;
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
})();
var inst_21832 = setTimeout(inst_21831,(0));
var state_21840__$1 = (function (){var statearr_21845 = state_21840;
(statearr_21845[(11)] = inst_21832);

return statearr_21845;
})();
var statearr_21846_21858 = state_21840__$1;
(statearr_21846_21858[(2)] = null);

(statearr_21846_21858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21841 === (5))){
var inst_21825 = (state_21840[(7)]);
var inst_21825__$1 = (state_21840[(2)]);
var state_21840__$1 = (function (){var statearr_21847 = state_21840;
(statearr_21847[(7)] = inst_21825__$1);

return statearr_21847;
})();
if(cljs.core.truth_(inst_21825__$1)){
var statearr_21848_21859 = state_21840__$1;
(statearr_21848_21859[(1)] = (6));

} else {
var statearr_21849_21860 = state_21840__$1;
(statearr_21849_21860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21841 === (8))){
var inst_21836 = (state_21840[(2)]);
var state_21840__$1 = state_21840;
var statearr_21850_21861 = state_21840__$1;
(statearr_21850_21861[(2)] = inst_21836);

(statearr_21850_21861[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__15069__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__15069__auto____0 = (function (){
var statearr_21851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21851[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__15069__auto__);

(statearr_21851[(1)] = (1));

return statearr_21851;
});
var devcards$system$start_ui_with_renderer_$_state_machine__15069__auto____1 = (function (state_21840){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_21840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e21852){if((e21852 instanceof Object)){
var ex__15072__auto__ = e21852;
var statearr_21853_21862 = state_21840;
(statearr_21853_21862[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21863 = state_21840;
state_21840 = G__21863;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__15069__auto__ = function(state_21840){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__15069__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__15069__auto____1.call(this,state_21840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__15069__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__15069__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_21854 = f__15236__auto__.call(null);
(statearr_21854[(6)] = c__15235__auto___21855);

return statearr_21854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__15235__auto___21903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15236__auto__ = (function (){var switch__15068__auto__ = (function (state_21888){
var state_val_21889 = (state_21888[(1)]);
if((state_val_21889 === (7))){
var state_21888__$1 = state_21888;
var statearr_21890_21904 = state_21888__$1;
(statearr_21890_21904[(2)] = null);

(statearr_21890_21904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (1))){
var inst_21864 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21888__$1,(2),inst_21864);
} else {
if((state_val_21889 === (4))){
var inst_21886 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21888__$1,inst_21886);
} else {
if((state_val_21889 === (6))){
var inst_21873 = (state_21888[(7)]);
var inst_21875 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_21876 = devcards.system.off_the_books.call(null,channel,inst_21875,inst_21873);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21888__$1,(9),inst_21876);
} else {
if((state_val_21889 === (3))){
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21888__$1,(5),channel);
} else {
if((state_val_21889 === (2))){
var inst_21866 = (state_21888[(2)]);
var inst_21867 = (function (){return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
})();
var inst_21868 = setTimeout(inst_21867,(0));
var inst_21869 = (function (){return (function (){
return devcards.system.hash_routing_init.call(null,devcards.system.app_state);
});
})();
var inst_21870 = setTimeout(inst_21869,(0));
var state_21888__$1 = (function (){var statearr_21891 = state_21888;
(statearr_21891[(8)] = inst_21866);

(statearr_21891[(9)] = inst_21870);

(statearr_21891[(10)] = inst_21868);

return statearr_21891;
})();
var statearr_21892_21905 = state_21888__$1;
(statearr_21892_21905[(2)] = null);

(statearr_21892_21905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (9))){
var inst_21873 = (state_21888[(7)]);
var inst_21878 = (state_21888[(2)]);
var inst_21879 = (function (){var temp__5735__auto__ = inst_21873;
var v = inst_21873;
var new_state = inst_21878;
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
})();
var inst_21880 = setTimeout(inst_21879,(0));
var state_21888__$1 = (function (){var statearr_21893 = state_21888;
(statearr_21893[(11)] = inst_21880);

return statearr_21893;
})();
var statearr_21894_21906 = state_21888__$1;
(statearr_21894_21906[(2)] = null);

(statearr_21894_21906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (5))){
var inst_21873 = (state_21888[(7)]);
var inst_21873__$1 = (state_21888[(2)]);
var state_21888__$1 = (function (){var statearr_21895 = state_21888;
(statearr_21895[(7)] = inst_21873__$1);

return statearr_21895;
})();
if(cljs.core.truth_(inst_21873__$1)){
var statearr_21896_21907 = state_21888__$1;
(statearr_21896_21907[(1)] = (6));

} else {
var statearr_21897_21908 = state_21888__$1;
(statearr_21897_21908[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (8))){
var inst_21884 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
var statearr_21898_21909 = state_21888__$1;
(statearr_21898_21909[(2)] = inst_21884);

(statearr_21898_21909[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_$_state_machine__15069__auto__ = null;
var devcards$system$start_ui_$_state_machine__15069__auto____0 = (function (){
var statearr_21899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21899[(0)] = devcards$system$start_ui_$_state_machine__15069__auto__);

(statearr_21899[(1)] = (1));

return statearr_21899;
});
var devcards$system$start_ui_$_state_machine__15069__auto____1 = (function (state_21888){
while(true){
var ret_value__15070__auto__ = (function (){try{while(true){
var result__15071__auto__ = switch__15068__auto__.call(null,state_21888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15071__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15071__auto__;
}
break;
}
}catch (e21900){if((e21900 instanceof Object)){
var ex__15072__auto__ = e21900;
var statearr_21901_21910 = state_21888;
(statearr_21901_21910[(5)] = ex__15072__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21911 = state_21888;
state_21888 = G__21911;
continue;
} else {
return ret_value__15070__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__15069__auto__ = function(state_21888){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__15069__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__15069__auto____1.call(this,state_21888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__15069__auto____0;
devcards$system$start_ui_$_state_machine__15069__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__15069__auto____1;
return devcards$system$start_ui_$_state_machine__15069__auto__;
})()
})();
var state__15237__auto__ = (function (){var statearr_21902 = f__15236__auto__.call(null);
(statearr_21902[(6)] = c__15235__auto___21903);

return statearr_21902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15237__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return devcards.system.global$module$react.createElement("span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=system.js.map
