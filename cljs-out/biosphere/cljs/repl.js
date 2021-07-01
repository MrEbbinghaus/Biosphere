// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32925){
var map__32926 = p__32925;
var map__32926__$1 = (((((!((map__32926 == null))))?(((((map__32926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32926):map__32926);
var m = map__32926__$1;
var n = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32928_32960 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32929_32961 = null;
var count__32930_32962 = (0);
var i__32931_32963 = (0);
while(true){
if((i__32931_32963 < count__32930_32962)){
var f_32964 = cljs.core._nth.call(null,chunk__32929_32961,i__32931_32963);
cljs.core.println.call(null,"  ",f_32964);


var G__32965 = seq__32928_32960;
var G__32966 = chunk__32929_32961;
var G__32967 = count__32930_32962;
var G__32968 = (i__32931_32963 + (1));
seq__32928_32960 = G__32965;
chunk__32929_32961 = G__32966;
count__32930_32962 = G__32967;
i__32931_32963 = G__32968;
continue;
} else {
var temp__5735__auto___32969 = cljs.core.seq.call(null,seq__32928_32960);
if(temp__5735__auto___32969){
var seq__32928_32970__$1 = temp__5735__auto___32969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32928_32970__$1)){
var c__4556__auto___32971 = cljs.core.chunk_first.call(null,seq__32928_32970__$1);
var G__32972 = cljs.core.chunk_rest.call(null,seq__32928_32970__$1);
var G__32973 = c__4556__auto___32971;
var G__32974 = cljs.core.count.call(null,c__4556__auto___32971);
var G__32975 = (0);
seq__32928_32960 = G__32972;
chunk__32929_32961 = G__32973;
count__32930_32962 = G__32974;
i__32931_32963 = G__32975;
continue;
} else {
var f_32976 = cljs.core.first.call(null,seq__32928_32970__$1);
cljs.core.println.call(null,"  ",f_32976);


var G__32977 = cljs.core.next.call(null,seq__32928_32970__$1);
var G__32978 = null;
var G__32979 = (0);
var G__32980 = (0);
seq__32928_32960 = G__32977;
chunk__32929_32961 = G__32978;
count__32930_32962 = G__32979;
i__32931_32963 = G__32980;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32981 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32981);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32981)))?cljs.core.second.call(null,arglists_32981):arglists_32981));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32932_32982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32933_32983 = null;
var count__32934_32984 = (0);
var i__32935_32985 = (0);
while(true){
if((i__32935_32985 < count__32934_32984)){
var vec__32946_32986 = cljs.core._nth.call(null,chunk__32933_32983,i__32935_32985);
var name_32987 = cljs.core.nth.call(null,vec__32946_32986,(0),null);
var map__32949_32988 = cljs.core.nth.call(null,vec__32946_32986,(1),null);
var map__32949_32989__$1 = (((((!((map__32949_32988 == null))))?(((((map__32949_32988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32949_32988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949_32988):map__32949_32988);
var doc_32990 = cljs.core.get.call(null,map__32949_32989__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32991 = cljs.core.get.call(null,map__32949_32989__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32987);

cljs.core.println.call(null," ",arglists_32991);

if(cljs.core.truth_(doc_32990)){
cljs.core.println.call(null," ",doc_32990);
} else {
}


var G__32992 = seq__32932_32982;
var G__32993 = chunk__32933_32983;
var G__32994 = count__32934_32984;
var G__32995 = (i__32935_32985 + (1));
seq__32932_32982 = G__32992;
chunk__32933_32983 = G__32993;
count__32934_32984 = G__32994;
i__32935_32985 = G__32995;
continue;
} else {
var temp__5735__auto___32996 = cljs.core.seq.call(null,seq__32932_32982);
if(temp__5735__auto___32996){
var seq__32932_32997__$1 = temp__5735__auto___32996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32932_32997__$1)){
var c__4556__auto___32998 = cljs.core.chunk_first.call(null,seq__32932_32997__$1);
var G__32999 = cljs.core.chunk_rest.call(null,seq__32932_32997__$1);
var G__33000 = c__4556__auto___32998;
var G__33001 = cljs.core.count.call(null,c__4556__auto___32998);
var G__33002 = (0);
seq__32932_32982 = G__32999;
chunk__32933_32983 = G__33000;
count__32934_32984 = G__33001;
i__32935_32985 = G__33002;
continue;
} else {
var vec__32951_33003 = cljs.core.first.call(null,seq__32932_32997__$1);
var name_33004 = cljs.core.nth.call(null,vec__32951_33003,(0),null);
var map__32954_33005 = cljs.core.nth.call(null,vec__32951_33003,(1),null);
var map__32954_33006__$1 = (((((!((map__32954_33005 == null))))?(((((map__32954_33005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32954_33005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32954_33005):map__32954_33005);
var doc_33007 = cljs.core.get.call(null,map__32954_33006__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33008 = cljs.core.get.call(null,map__32954_33006__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33004);

cljs.core.println.call(null," ",arglists_33008);

if(cljs.core.truth_(doc_33007)){
cljs.core.println.call(null," ",doc_33007);
} else {
}


var G__33009 = cljs.core.next.call(null,seq__32932_32997__$1);
var G__33010 = null;
var G__33011 = (0);
var G__33012 = (0);
seq__32932_32982 = G__33009;
chunk__32933_32983 = G__33010;
count__32934_32984 = G__33011;
i__32935_32985 = G__33012;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__32956 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32957 = null;
var count__32958 = (0);
var i__32959 = (0);
while(true){
if((i__32959 < count__32958)){
var role = cljs.core._nth.call(null,chunk__32957,i__32959);
var temp__5735__auto___33013__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___33013__$1)){
var spec_33014 = temp__5735__auto___33013__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33014));
} else {
}


var G__33015 = seq__32956;
var G__33016 = chunk__32957;
var G__33017 = count__32958;
var G__33018 = (i__32959 + (1));
seq__32956 = G__33015;
chunk__32957 = G__33016;
count__32958 = G__33017;
i__32959 = G__33018;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__32956);
if(temp__5735__auto____$1){
var seq__32956__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32956__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32956__$1);
var G__33019 = cljs.core.chunk_rest.call(null,seq__32956__$1);
var G__33020 = c__4556__auto__;
var G__33021 = cljs.core.count.call(null,c__4556__auto__);
var G__33022 = (0);
seq__32956 = G__33019;
chunk__32957 = G__33020;
count__32958 = G__33021;
i__32959 = G__33022;
continue;
} else {
var role = cljs.core.first.call(null,seq__32956__$1);
var temp__5735__auto___33023__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___33023__$2)){
var spec_33024 = temp__5735__auto___33023__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33024));
} else {
}


var G__33025 = cljs.core.next.call(null,seq__32956__$1);
var G__33026 = null;
var G__33027 = (0);
var G__33028 = (0);
seq__32956 = G__33025;
chunk__32957 = G__33026;
count__32958 = G__33027;
i__32959 = G__33028;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33029 = cljs.core.conj.call(null,via,t);
var G__33030 = cljs.core.ex_cause.call(null,t);
via = G__33029;
t = G__33030;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__33033 = datafied_throwable;
var map__33033__$1 = (((((!((map__33033 == null))))?(((((map__33033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33033):map__33033);
var via = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33034 = cljs.core.last.call(null,via);
var map__33034__$1 = (((((!((map__33034 == null))))?(((((map__33034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33034):map__33034);
var type = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33035 = data;
var map__33035__$1 = (((((!((map__33035 == null))))?(((((map__33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33035):map__33035);
var problems = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33036 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33036__$1 = (((((!((map__33036 == null))))?(((((map__33036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33036):map__33036);
var top_data = map__33036__$1;
var source = cljs.core.get.call(null,map__33036__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33041 = phase;
var G__33041__$1 = (((G__33041 instanceof cljs.core.Keyword))?G__33041.fqn:null);
switch (G__33041__$1) {
case "read-source":
var map__33042 = data;
var map__33042__$1 = (((((!((map__33042 == null))))?(((((map__33042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33042):map__33042);
var line = cljs.core.get.call(null,map__33042__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33042__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33044 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33044__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33044,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33044);
var G__33044__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33044__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33044__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33044__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33045 = top_data;
var G__33045__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33045,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33045);
var G__33045__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33045__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33045__$1);
var G__33045__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33045__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33045__$2);
var G__33045__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33045__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33045__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33045__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33045__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33046 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33046,(0),null);
var method = cljs.core.nth.call(null,vec__33046,(1),null);
var file = cljs.core.nth.call(null,vec__33046,(2),null);
var line = cljs.core.nth.call(null,vec__33046,(3),null);
var G__33049 = top_data;
var G__33049__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33049,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33049);
var G__33049__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33049__$1);
var G__33049__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__33049__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33049__$2);
var G__33049__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33049__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33049__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33049__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33049__$4;
}

break;
case "execution":
var vec__33050 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33050,(0),null);
var method = cljs.core.nth.call(null,vec__33050,(1),null);
var file = cljs.core.nth.call(null,vec__33050,(2),null);
var line = cljs.core.nth.call(null,vec__33050,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__33032_SHARP_){
var or__4126__auto__ = (p1__33032_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33032_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__33053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33053__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33053,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33053);
var G__33053__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33053__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33053__$1);
var G__33053__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__33053__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33053__$2);
var G__33053__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33053__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33053__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33053__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33053__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33041__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33057){
var map__33058 = p__33057;
var map__33058__$1 = (((((!((map__33058 == null))))?(((((map__33058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33058):map__33058);
var triage_data = map__33058__$1;
var phase = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33060 = phase;
var G__33060__$1 = (((G__33060 instanceof cljs.core.Keyword))?G__33060.fqn:null);
switch (G__33060__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33061_33070 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33062_33071 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33063_33072 = true;
var _STAR_print_fn_STAR__temp_val__33064_33073 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33063_33072);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33064_33073);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__33055_SHARP_){
return cljs.core.dissoc.call(null,p1__33055_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33062_33071);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33061_33070);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33065_33074 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33066_33075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33067_33076 = true;
var _STAR_print_fn_STAR__temp_val__33068_33077 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33067_33076);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33068_33077);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__33056_SHARP_){
return cljs.core.dissoc.call(null,p1__33056_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33066_33075);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33065_33074);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33060__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
