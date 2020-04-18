// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('biosphere.draw.tile');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('biosphere.config');
goog.require('quil.core');
biosphere.draw.tile.interlacing_factor = (200);
biosphere.draw.tile.make_tile_graphics = (function biosphere$draw$tile$make_tile_graphics(width,height){
var g = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height);
var gr__13407__auto___13515 = g;
var _STAR_graphics_STAR__orig_val__13513_13516 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__13514_13517 = gr__13407__auto___13515;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__13514_13517);

try{quil.core.begin_draw(gr__13407__auto___13515);

quil.core.no_smooth();

quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(100));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$hsb,(360),(100),(100),(1));

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((200));

quil.core.end_draw(gr__13407__auto___13515);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__13513_13516);
}
return g;
});
biosphere.draw.tile.water_color = (function biosphere$draw$tile$water_color(amount){
return quil.core.lerp_color(quil.core.color.cljs$core$IFn$_invoke$arity$3((240),(100),(60)),quil.core.color.cljs$core$IFn$_invoke$arity$3((210),(50),(100)),amount);
});
biosphere.draw.tile.land_color = (function biosphere$draw$tile$land_color(amount){
return quil.core.lerp_color(quil.core.color.cljs$core$IFn$_invoke$arity$3((125),(60),(60)),quil.core.color.cljs$core$IFn$_invoke$arity$3((0),(100),(100)),amount);
});
biosphere.draw.tile.tile_color = (function biosphere$draw$tile$tile_color(p__13518){
var map__13519 = p__13518;
var map__13519__$1 = (((((!((map__13519 == null))))?(((((map__13519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13519):map__13519);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$tile_SLASH_value);
var water_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$tile_SLASH_water_QMARK_);
if(cljs.core.truth_(water_QMARK_)){
return biosphere.draw.tile.water_color((value * ((1) / biosphere.config.water_level)));
} else {
return biosphere.draw.tile.land_color((value - biosphere.config.water_level));
}
});
biosphere.draw.tile.draw_BANG_ = (function biosphere$draw$tile$draw_BANG_(state,p__13521){
var map__13522 = p__13521;
var map__13522__$1 = (((((!((map__13522 == null))))?(((((map__13522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13522):map__13522);
var tile = map__13522__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,cljs.core.cst$kw$tile_SLASH_x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,cljs.core.cst$kw$tile_SLASH_y);
var vec__13524 = cljs.core.cst$kw$resolution.cljs$core$IFn$_invoke$arity$1(state);
var res_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13524,(0),null);
var res_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13524,(1),null);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(biosphere.draw.tile.tile_color(tile));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((x * (res_x / biosphere.config.width)),(y * (res_y / biosphere.config.height)),(res_x / biosphere.config.width),(res_y / biosphere.config.height));
});
biosphere.draw.tile.interlaced = (function biosphere$draw$tile$interlaced(factor,coll){
var cyc = cljs.core.mod(quil.core.frame_count(),factor);
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(factor,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cyc,coll));
});
biosphere.draw.tile.draw_tiles_BANG_ = (function biosphere$draw$tile$draw_tiles_BANG_(p__13527){
var map__13528 = p__13527;
var map__13528__$1 = (((((!((map__13528 == null))))?(((((map__13528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13528):map__13528);
var state = map__13528__$1;
var tile_graphic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13528__$1,cljs.core.cst$kw$tile_DASH_graphic);
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13528__$1,cljs.core.cst$kw$tiles);
var gr__13407__auto___13536 = tile_graphic;
var _STAR_graphics_STAR__orig_val__13530_13537 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__13531_13538 = gr__13407__auto___13536;
(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__13531_13538);

try{quil.core.begin_draw(gr__13407__auto___13536);

var seq__13532_13539 = cljs.core.seq((((quil.core.frame_count() <= (1)))?tiles:biosphere.draw.tile.interlaced(biosphere.draw.tile.interlacing_factor,tiles)));
var chunk__13533_13540 = null;
var count__13534_13541 = (0);
var i__13535_13542 = (0);
while(true){
if((i__13535_13542 < count__13534_13541)){
var tile_13543 = chunk__13533_13540.cljs$core$IIndexed$_nth$arity$2(null,i__13535_13542);
biosphere.draw.tile.draw_BANG_(state,tile_13543);


var G__13544 = seq__13532_13539;
var G__13545 = chunk__13533_13540;
var G__13546 = count__13534_13541;
var G__13547 = (i__13535_13542 + (1));
seq__13532_13539 = G__13544;
chunk__13533_13540 = G__13545;
count__13534_13541 = G__13546;
i__13535_13542 = G__13547;
continue;
} else {
var temp__5735__auto___13548 = cljs.core.seq(seq__13532_13539);
if(temp__5735__auto___13548){
var seq__13532_13549__$1 = temp__5735__auto___13548;
if(cljs.core.chunked_seq_QMARK_(seq__13532_13549__$1)){
var c__4609__auto___13550 = cljs.core.chunk_first(seq__13532_13549__$1);
var G__13551 = cljs.core.chunk_rest(seq__13532_13549__$1);
var G__13552 = c__4609__auto___13550;
var G__13553 = cljs.core.count(c__4609__auto___13550);
var G__13554 = (0);
seq__13532_13539 = G__13551;
chunk__13533_13540 = G__13552;
count__13534_13541 = G__13553;
i__13535_13542 = G__13554;
continue;
} else {
var tile_13555 = cljs.core.first(seq__13532_13549__$1);
biosphere.draw.tile.draw_BANG_(state,tile_13555);


var G__13556 = cljs.core.next(seq__13532_13549__$1);
var G__13557 = null;
var G__13558 = (0);
var G__13559 = (0);
seq__13532_13539 = G__13556;
chunk__13533_13540 = G__13557;
count__13534_13541 = G__13558;
i__13535_13542 = G__13559;
continue;
}
} else {
}
}
break;
}

quil.core.end_draw(gr__13407__auto___13536);
}finally {(quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__13530_13537);
}
return quil.core.image.cljs$core$IFn$_invoke$arity$3(tile_graphic,(0),(0));
});
