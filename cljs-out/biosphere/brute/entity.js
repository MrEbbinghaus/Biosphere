// Compiled by ClojureScript 1.10.597 {}
goog.provide('brute.entity');
goog.require('cljs.core');
/**
 * Creates the system data structure that will need to be passed to all entity functions
 */
brute.entity.create_system = (function brute$entity$create_system(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-components","entity-components",-898370215),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777),cljs.core.PersistentArrayMap.EMPTY], null);
});
/**
 * create a UUID
 */
brute.entity.create_uuid = (function brute$entity$create_uuid(){
var template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
var f = (function (p1__11059_SHARP_){
var r = Math.floor((cljs.core.rand.call(null) * (16)));
var v = ((cljs.core._EQ_.call(null,p1__11059_SHARP_,"x"))?r:((r & (3)) | (8)));
return v.toString((16));
});
return template.replace((new RegExp("[xy]","g")),f);
});
/**
 * Create the entity and return it. Entities are just UUIDs
 */
brute.entity.create_entity = (function brute$entity$create_entity(){
return brute.entity.create_uuid.call(null);
});
/**
 * Returns a list of all the entities. Not that useful in application, but good for debugging/testing
 */
brute.entity.get_all_entities = (function brute$entity$get_all_entities(system){
var temp__5733__auto__ = cljs.core.keys.call(null,new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777).cljs$core$IFn$_invoke$arity$1(system));
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return result;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Add the entity to the ES Data Structure and returns it
 */
brute.entity.add_entity = (function brute$entity$add_entity(system,entity){
var system__$1 = cljs.core.transient$.call(null,system);
return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,system__$1,new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777).cljs$core$IFn$_invoke$arity$1(system__$1),entity,cljs.core.PersistentHashSet.EMPTY)));
});
if((typeof brute !== 'undefined') && (typeof brute.entity !== 'undefined') && (typeof brute.entity.get_component_type !== 'undefined')){
} else {
/**
 * Returns the type for a given component. Using a multimethod with 'class' as the dispatch-fn to allow for extensibility per application.
 *        By default returns the class of the component.
 */
brute.entity.get_component_type = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"brute.entity","get-component-type"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.core._add_method.call(null,brute.entity.get_component_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (component){
return cljs.core.type.call(null,component);
}));
/**
 * Add a component instance to a given entity in the ES data structure and returns it.
 *   Will overwrite a component if already set.
 */
brute.entity.add_component = (function brute$entity$add_component(system,entity,instance){
var type = brute.entity.get_component_type.call(null,instance);
var system__$1 = cljs.core.transient$.call(null,system);
var ecs = new cljs.core.Keyword(null,"entity-components","entity-components",-898370215).cljs$core$IFn$_invoke$arity$1(system__$1);
var ects = new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777).cljs$core$IFn$_invoke$arity$1(system__$1);
return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,system__$1,new cljs.core.Keyword(null,"entity-components","entity-components",-898370215),cljs.core.assoc_in.call(null,ecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,entity], null),instance)),new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777),cljs.core.assoc.call(null,ects,entity,cljs.core.conj.call(null,cljs.core.get.call(null,ects,entity),type))));
});
/**
 * Get the component data for a specific component type
 */
brute.entity.get_component = (function brute$entity$get_component(system,entity,type){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"entity-components","entity-components",-898370215).cljs$core$IFn$_invoke$arity$1(system),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,entity], null));
});
/**
 * Update an entity's component instance through through fn. Function is applied first with the specified component and any other args applied,
 *   and should return the modified component instance. Return nil if you want no change to occur.
 */
brute.entity.update_component = (function brute$entity$update_component(var_args){
var args__4795__auto__ = [];
var len__4789__auto___11065 = arguments.length;
var i__4790__auto___11066 = (0);
while(true){
if((i__4790__auto___11066 < len__4789__auto___11065)){
args__4795__auto__.push((arguments[i__4790__auto___11066]));

var G__11067 = (i__4790__auto___11066 + (1));
i__4790__auto___11066 = G__11067;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return brute.entity.update_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(brute.entity.update_component.cljs$core$IFn$_invoke$arity$variadic = (function (system,entity,type,fn,args){
var temp__5733__auto__ = cljs.core.apply.call(null,fn,brute.entity.get_component.call(null,system,entity,type),args);
if(cljs.core.truth_(temp__5733__auto__)){
var update = temp__5733__auto__;
return brute.entity.add_component.call(null,system,entity,update);
} else {
return system;
}
}));

(brute.entity.update_component.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(brute.entity.update_component.cljs$lang$applyTo = (function (seq11060){
var G__11061 = cljs.core.first.call(null,seq11060);
var seq11060__$1 = cljs.core.next.call(null,seq11060);
var G__11062 = cljs.core.first.call(null,seq11060__$1);
var seq11060__$2 = cljs.core.next.call(null,seq11060__$1);
var G__11063 = cljs.core.first.call(null,seq11060__$2);
var seq11060__$3 = cljs.core.next.call(null,seq11060__$2);
var G__11064 = cljs.core.first.call(null,seq11060__$3);
var seq11060__$4 = cljs.core.next.call(null,seq11060__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11061,G__11062,G__11063,G__11064,seq11060__$4);
}));

/**
 * Get all the entities that have a given component type
 */
brute.entity.get_all_entities_with_component = (function brute$entity$get_all_entities_with_component(system,type){
var temp__5733__auto__ = cljs.core.keys.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"entity-components","entity-components",-898370215).cljs$core$IFn$_invoke$arity$1(system),type));
if(cljs.core.truth_(temp__5733__auto__)){
var entities = temp__5733__auto__;
return entities;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Remove a component instance from the ES data structure and returns it
 */
brute.entity.remove_component = (function brute$entity$remove_component(system,entity,instance){
var type = brute.entity.get_component_type.call(null,instance);
var system__$1 = cljs.core.transient$.call(null,system);
var entity_components = new cljs.core.Keyword(null,"entity-components","entity-components",-898370215).cljs$core$IFn$_invoke$arity$1(system__$1);
var entity_component_types = new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777).cljs$core$IFn$_invoke$arity$1(system__$1);
return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,system__$1,new cljs.core.Keyword(null,"entity-components","entity-components",-898370215),cljs.core.assoc.call(null,entity_components,type,cljs.core.dissoc.call(null,cljs.core.get.call(null,entity_components,type),entity))),new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777),cljs.core.assoc.call(null,entity_component_types,entity,cljs.core.disj.call(null,cljs.core.get.call(null,entity_component_types,entity),type))));
});
/**
 * Destroy an entity completely from the ES data structure and returns it
 */
brute.entity.kill_entity = (function brute$entity$kill_entity(system,entity){
var system__$1 = cljs.core.transient$.call(null,system);
var entity_component_types = new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777).cljs$core$IFn$_invoke$arity$1(system__$1);
return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,system__$1,new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777),cljs.core.dissoc.call(null,entity_component_types,entity)),new cljs.core.Keyword(null,"entity-components","entity-components",-898370215),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,type){
return cljs.core.assoc_BANG_.call(null,v,type,cljs.core.dissoc.call(null,cljs.core.get.call(null,v,type),entity));
}),cljs.core.transient$.call(null,new cljs.core.Keyword(null,"entity-components","entity-components",-898370215).cljs$core$IFn$_invoke$arity$1(system__$1)),cljs.core.get.call(null,entity_component_types,entity)))));
});
/**
 * Get all the components on a specific entity. Useful for debugging
 */
brute.entity.get_all_components_on_entity = (function brute$entity$get_all_components_on_entity(system,entity){
return cljs.core.map.call(null,(function (p1__11068_SHARP_){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"entity-components","entity-components",-898370215).cljs$core$IFn$_invoke$arity$1(system),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11068_SHARP_,entity], null));
}),cljs.core.get.call(null,new cljs.core.Keyword(null,"entity-component-types","entity-component-types",1236613777).cljs$core$IFn$_invoke$arity$1(system),entity));
});

//# sourceMappingURL=entity.js.map
