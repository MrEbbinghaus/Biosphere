// Compiled by ClojureScript 1.10.773 {}
goog.provide('biosphere.devcards');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('quil.core');
goog.require('biosphere.core');
goog.require('biosphere.draw.creature');
biosphere.devcards.start = (function biosphere$devcards$start(){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null);
});
goog.exportSymbol('biosphere.devcards.start', biosphere.devcards.start);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biosphere.devcards","biosphere.devcards",146352471),new cljs.core.Keyword(null,"hello-world","hello-world",-788431463)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hello-world",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
setTimeout((function (){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"host",new cljs.core.Keyword(null,"draw","draw",1358331674),(function biosphere$devcards$draw(){
quil.core.translate.call(null,(30),(30));

quil.core.scale.call(null,(10));

return biosphere.draw.creature.draw_creature_body_BANG_.call(null);
}));
}),(50));

return "<div id=\"host\"/>";
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=devcards.js.map
