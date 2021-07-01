// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('biosphere.draw.tile');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('biosphere.tiles');
biosphere.draw.tile.interlacing_factor = (200);
biosphere.draw.tile.make_tile_graphics = (function biosphere$draw$tile$make_tile_graphics(width,height){
var g = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height);
var gr__14406__auto___14712 = g;
var _STAR_graphics_STAR__orig_val__14710_14713 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__14711_14714 = gr__14406__auto___14712;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__14711_14714);

try{quil.core.begin_draw(gr__14406__auto___14712);

quil.core.no_smooth();

quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(100));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$hsb,(360),(100),(100),(1));

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((200));

quil.core.end_draw(gr__14406__auto___14712);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__14710_14713);
}
return g;
});
biosphere.draw.tile.water_color = (function biosphere$draw$tile$water_color(amount){
return quil.core.lerp_color(quil.core.color.cljs$core$IFn$_invoke$arity$3((240),(100),(60)),quil.core.color.cljs$core$IFn$_invoke$arity$3((210),(50),(100)),amount);
});
biosphere.draw.tile.land_color = (function biosphere$draw$tile$land_color(amount){
return quil.core.lerp_color(quil.core.color.cljs$core$IFn$_invoke$arity$3((41),(62),(55)),quil.core.color.cljs$core$IFn$_invoke$arity$3((125),(60),(60)),amount);
});
biosphere.draw.tile.tile_color = (function biosphere$draw$tile$tile_color(p__14715,p__14716){
var map__14717 = p__14715;
var map__14717__$1 = cljs.core.__destructure_map(map__14717);
var state = map__14717__$1;
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14717__$1,cljs.core.cst$kw$water_DASH_level);
var map__14718 = p__14716;
var map__14718__$1 = cljs.core.__destructure_map(map__14718);
var tile = map__14718__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14718__$1,cljs.core.cst$kw$height);
var max_energy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14718__$1,cljs.core.cst$kw$max_DASH_energy);
var energy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14718__$1,cljs.core.cst$kw$energy);
if(biosphere.tiles.water_QMARK_(state,tile)){
return biosphere.draw.tile.water_color(((1) - ((-1) * height)));
} else {
return biosphere.draw.tile.land_color((energy / max_energy));
}
});
biosphere.draw.tile.draw_BANG_ = (function biosphere$draw$tile$draw_BANG_(p__14719,p__14720){
var map__14721 = p__14719;
var map__14721__$1 = cljs.core.__destructure_map(map__14721);
var state = map__14721__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,cljs.core.cst$kw$height);
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,cljs.core.cst$kw$resolution);
var map__14722 = p__14720;
var map__14722__$1 = cljs.core.__destructure_map(map__14722);
var tile = map__14722__$1;
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14722__$1,cljs.core.cst$kw$location);
var vec__14723 = location;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(1),null);
var vec__14726 = resolution;
var res_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(0),null);
var res_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(1),null);
var px = (x * (res_x / width));
var py = (y * (res_y / height));
var pwidth = (res_x / width);
var pheight = (res_y / height);
if((((x === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),y)))){
quil.core.print_every_n_millisec.cljs$core$IFn$_invoke$arity$variadic((1000),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["px py",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null))].join('')], 0));
} else {
}

quil.core.fill.cljs$core$IFn$_invoke$arity$1(biosphere.draw.tile.tile_color(state,tile));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(px,py,pwidth,pheight);
});
biosphere.draw.tile.interlaced = (function biosphere$draw$tile$interlaced(factor,coll){
var cyc = cljs.core.mod(quil.core.frame_count(),factor);
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(factor,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cyc,coll));
});
biosphere.draw.tile.draw_tiles_BANG_ = (function biosphere$draw$tile$draw_tiles_BANG_(p__14729){
var map__14730 = p__14729;
var map__14730__$1 = cljs.core.__destructure_map(map__14730);
var state = map__14730__$1;
var tile_graphic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14730__$1,cljs.core.cst$kw$tile_DASH_graphic);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14730__$1,cljs.core.cst$kw$tiles);
var dirty_tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14730__$1,cljs.core.cst$kw$dirty_DASH_tiles);
if(cljs.core.truth_(cljs.core.empty(dirty_tiles))){
} else {
quil.core.print_first_n.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),dirty_tiles)], 0));
}

var gr__14406__auto___14737 = tile_graphic;
var _STAR_graphics_STAR__orig_val__14731_14738 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__14732_14739 = gr__14406__auto___14737;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__14732_14739);

try{quil.core.begin_draw(gr__14406__auto___14737);

var seq__14733_14740 = cljs.core.seq(dirty_tiles);
var chunk__14734_14741 = null;
var count__14735_14742 = (0);
var i__14736_14743 = (0);
while(true){
if((i__14736_14743 < count__14735_14742)){
var tile_14744 = chunk__14734_14741.cljs$core$IIndexed$_nth$arity$2(null,i__14736_14743);
biosphere.draw.tile.draw_BANG_(state,(tiles.cljs$core$IFn$_invoke$arity$1 ? tiles.cljs$core$IFn$_invoke$arity$1(tile_14744) : tiles.call(null,tile_14744)));


var G__14745 = seq__14733_14740;
var G__14746 = chunk__14734_14741;
var G__14747 = count__14735_14742;
var G__14748 = (i__14736_14743 + (1));
seq__14733_14740 = G__14745;
chunk__14734_14741 = G__14746;
count__14735_14742 = G__14747;
i__14736_14743 = G__14748;
continue;
} else {
var temp__5753__auto___14749 = cljs.core.seq(seq__14733_14740);
if(temp__5753__auto___14749){
var seq__14733_14750__$1 = temp__5753__auto___14749;
if(cljs.core.chunked_seq_QMARK_(seq__14733_14750__$1)){
var c__4649__auto___14751 = cljs.core.chunk_first(seq__14733_14750__$1);
var G__14752 = cljs.core.chunk_rest(seq__14733_14750__$1);
var G__14753 = c__4649__auto___14751;
var G__14754 = cljs.core.count(c__4649__auto___14751);
var G__14755 = (0);
seq__14733_14740 = G__14752;
chunk__14734_14741 = G__14753;
count__14735_14742 = G__14754;
i__14736_14743 = G__14755;
continue;
} else {
var tile_14756 = cljs.core.first(seq__14733_14750__$1);
biosphere.draw.tile.draw_BANG_(state,(tiles.cljs$core$IFn$_invoke$arity$1 ? tiles.cljs$core$IFn$_invoke$arity$1(tile_14756) : tiles.call(null,tile_14756)));


var G__14757 = cljs.core.next(seq__14733_14750__$1);
var G__14758 = null;
var G__14759 = (0);
var G__14760 = (0);
seq__14733_14740 = G__14757;
chunk__14734_14741 = G__14758;
count__14735_14742 = G__14759;
i__14736_14743 = G__14760;
continue;
}
} else {
}
}
break;
}

quil.core.end_draw(gr__14406__auto___14737);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__14731_14738);
}
return quil.core.image.cljs$core$IFn$_invoke$arity$3(tile_graphic,(0),(0));
});
