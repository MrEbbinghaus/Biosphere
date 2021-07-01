/*TRANSPILED*/goog.provide("goog.memoize");
goog.memoize = function(f, opt_serializer) {
  var serializer = opt_serializer || goog.memoize.simpleSerializer;
  return function() {
    if (goog.memoize.ENABLE_MEMOIZE) {
      var thisOrGlobal = this || goog.global;
      var cache = thisOrGlobal[goog.memoize.CACHE_PROPERTY_] || (thisOrGlobal[goog.memoize.CACHE_PROPERTY_] = {});
      var key = serializer(goog.getUid(f), arguments);
      return cache.hasOwnProperty(key) ? cache[key] : cache[key] = f.apply(this, arguments);
    } else {
      return f.apply(this, arguments);
    }
  };
};
goog.memoize.ENABLE_MEMOIZE = goog.define("goog.memoize.ENABLE_MEMOIZE", true);
goog.memoize.clearCache = function(cacheOwner) {
  cacheOwner[goog.memoize.CACHE_PROPERTY_] = {};
};
goog.memoize.CACHE_PROPERTY_ = "closure_memoize_cache_";
goog.memoize.simpleSerializer = function(functionUid, args) {
  var context = [functionUid];
  for (var i = args.length - 1; i >= 0; --i) {
    context.push(typeof args[i], args[i]);
  }
  return context.join("\x0B");
};
