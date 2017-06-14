(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cytoscapeSbgnStylesheet = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(_dereq_,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(_dereq_,module,exports){
var util = _dereq_('util');
var extend = _dereq_('xtend');

var supported = function() {
	if(typeof document === 'undefined' || typeof document.createElement !== 'function') return false;

	var canvas = document.createElement('canvas');
	if(typeof canvas.getContext !== 'function') return false;

	var context = canvas.getContext('2d');
	return !!context && (typeof context.measureText === 'function');
};

var initialize = function() {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	var width = function(str, options) {
		options = extend({
			style: 'normal',
			variant: 'normal',
			weight: 'normal',
			size: 'medium',
			family: 'sans-serif',
			align: 'start',
			baseline: 'alphabetic'
		}, options);

		var size = options.size;
		if(typeof size === 'number') size = size + 'px';

		context.font = util.format('%s %s %s %s %s',
			options.style,
			options.variant,
			options.weight,
			size,
			options.family);
		context.textAlign = options.align;
		context.textBaseline = options.baseline;

		return context.measureText(str).width;
	};

	width.supported = true;
	return width;
};

module.exports = supported() ? initialize() : (function() {
	var width = function() {
		return 0;
	};

	width.supported = false;
	return width;
}());

},{"util":6,"xtend":7}],4:[function(_dereq_,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],5:[function(_dereq_,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],6:[function(_dereq_,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = _dereq_('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = _dereq_('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":5,"_process":2,"inherits":4}],7:[function(_dereq_,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],8:[function(_dereq_,module,exports){
'use strict';

var sbgnStyleSheet = _dereq_('./sbgnStyle/');

var defaultOptions = {};

module.exports = function (cytoscape) {
  return sbgnStyleSheet(cytoscape);
};

},{"./sbgnStyle/":16}],9:[function(_dereq_,module,exports){
'use strict';

var sbgnData = _dereq_('./util/sbgn.js');

var sbgnStyle = new Map().set('unspecified entity', { w: 32, h: 32, shape: 'ellipse' }).set('simple chemical', { w: 48, h: 48, shape: 'ellipse' }).set('simple chemical multimer', { w: 48, h: 48, shape: 'ellipse' }).set('macromolecule', { w: 96, h: 48, shape: 'roundrectangle' }).set('macromolecule multimer', { w: 96, h: 48, shape: 'roundrectangle' }).set('nucleic acid feature', { w: 88, h: 56, shape: 'bottomroundrectangle' }).set('nucleic acid feature multimer', { w: 88, h: 52, shape: 'bottomroundrectangle' }).set('complex', { w: 0, h: 0, shape: 'cutrectangle' }).set('complex multimer', { w: 0, h: 0, shape: 'cutrectangle' }).set('source and sink', { w: 60, h: 60, shape: 'polygon' }).set('perturbing agent', { w: 140, h: 60, shape: 'concavehexagon' }).set('phenotype', { w: 140, h: 60, shape: 'hexagon' }).set('process', { w: 25, h: 25, shape: 'square' }).set('uncertain process', { w: 25, h: 25, shape: 'square' }).set('omitted process', { w: 25, h: 25, shape: 'square' }).set('association', { w: 25, h: 25, shape: 'ellipse' }).set('dissociation', { w: 25, h: 25, shape: 'ellipse' }).set('compartment', { w: 200, h: 150, shape: 'barrel' }).set('tag', { w: 100, h: 65, shape: 'tag' }).set('and', { w: 40, h: 40, shape: 'ellipse' }).set('or', { w: 40, h: 40, shape: 'ellipse' }).set('not', { w: 40, h: 40, shape: 'ellipse' });

var sbgnArrowMap = new Map().set('necessary stimulation', 'triangle-cross').set('inhibition', 'tee').set('catalysis', 'circle').set('stimulation', 'triangle').set('production', 'triangle').set('modulation', 'diamond');

var scaledTextSize = function scaledTextSize(height) {
  var sizeCoefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return height / 2.45 * sizeCoefficient;
};

var elementStyle = {
  sbgnShape: function sbgnShape(node) {
    var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
    var style = sbgnStyle.get(sbgnClass);
    return style ? style.shape : 'ellipse';
  },
  sbgnArrowShape: function sbgnArrowShape(edge) {
    var sbgnClass = sbgnData.sbgnClass(edge);
    var shape = sbgnArrowMap.get(sbgnClass);
    return shape ? shape : 'none';
  },
  sbgnContent: function sbgnContent(node) {
    var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
    var content = sbgnData.sbgnLabel(node);

    if (sbgnClass == 'and') {
      content = 'AND';
    }
    if (sbgnClass == 'or') {
      content = 'OR';
    }
    if (sbgnClass == 'not') {
      content = 'NOT';
    }
    if (sbgnClass == 'omitted process') {
      content = '\\\\';
    }
    if (sbgnClass == 'uncertain process') {
      content = '?';
    }

    return content;
  },
  dimensions: function dimensions(node) {
    var sbgnClass = sbgnData.sbgnClass(node);
    var dim = sbgnStyle.get(sbgnClass);
    if (dim == null) {
      throw new TypeError(sbgnClass + ' does not have a default width / height');
    }
    return dim;
  },
  width: function width(node) {
    return this.dimensions(node).w;
  },
  height: function height(node) {
    return this.dimensions(node).h;
  },
  labelTextSize: function labelTextSize(node) {
    var sbgnClass = sbgnData.sbgnClass(node);
    var textScalingConstant = 40;

    if (sbgnClass === 'association' || sbgnClass === 'dissociation') {
      return 20;
    }
    if (sbgnClass.includes('complex')) {
      return 16;
    }

    if (sbgnClass === 'compartment') {
      return 50;
    }

    if (sbgnClass.endsWith('process')) {
      return scaledTextSize(textScalingConstant, 1.5);
    }

    return scaledTextSize(textScalingConstant);
  },
  cardinalityDistance: function cardinalityDistance(edge) {
    var srcPos = edge.source().position();
    var tgtPos = edge.target().position();

    var distance = Math.sqrt(Math.pow(srcPos.x - tgtPos.x, 2) + Math.pow(srcPos.y - tgtPos.y, 2));
    return distance * 0.15;
  }
};

module.exports = elementStyle;

},{"./util/sbgn.js":17}],10:[function(_dereq_,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var textWidth = _dereq_('text-width');

var baseShapes = _dereq_('./baseShapes.js');
var sbgnData = _dereq_('../util/sbgn');

var auxiliaryItems = {
  multiImgCloneMarker: function multiImgCloneMarker(x, y, width, height) {

    var cloneStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1').set('fill', '#D2D2D2');

    return baseShapes.rectangle(x, y, width, height, cloneStyle);
  },
  multiImgUnitOfInformation: function multiImgUnitOfInformation(x, y, width, height, uInfo) {
    var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
    var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;

    var text = uInfo.label.text;
    var uinfoRectStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

    var uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize }) + 5;

    var unitOfInformationSvg = '\n      ' + baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle) + '\n      ' + baseShapes.text(text, x + uInfoWidth / 2, y + height / 2, textStyle) + '\n    ';

    return unitOfInformationSvg;
  },
  multiImgStateVar: function multiImgStateVar(x, y, width, height, stateVar) {
    var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
    var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;


    var stateVarStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

    var tw = textWidth(sbgnData.stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize }) + 10;
    var w = Math.max(tw, 30);
    var statevariableSvg = '\n      ' + baseShapes.stadium(x, y, w, height, stateVarStyle) + '\n      ' + baseShapes.text(sbgnData.stateVarLabel(stateVar), x + w / 2, y + height / 2, textStyle) + '\n    ';

    return statevariableSvg;
  },
  cloneMarker: function cloneMarker(nodeWidth, nodeHeight, shapeFn, shapeFnArgs) {
    var clipId = 'clonemarker';

    var cloneMarkerStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('clip-path', 'url(#' + clipId + ')').set('fill', '#D2D2D2');

    var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

    return cloneMarkerSvg;
  }
};

module.exports = auxiliaryItems;

},{"../util/sbgn":17,"./baseShapes.js":11,"text-width":3}],11:[function(_dereq_,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styleMap2Str = _dereq_('../util/svg.js').styleMap2Str;

var baseRectangle = function baseRectangle(x, y, w, h, r1, r2, r3, r4, styleMap) {
  return '\n  <path ' + styleMap2Str(styleMap) + ' d=\'\n    M ' + (x + r1) + ' ' + y + '\n    L ' + (x + w - r2) + ' ' + y + ' Q ' + (x + w) + ' ' + y + ' ' + (x + w) + ' ' + (y + r2) + '\n    L ' + (x + w) + ' ' + (y + h - r3) + ' Q ' + (x + w) + ' ' + (y + h) + ' ' + (x + w - r3) + ' ' + (y + h) + '\n    L ' + (x + r4) + ' ' + (y + h) + ' Q ' + x + ' ' + (y + h) + ' ' + x + ' ' + (y + h - r4) + '\n    L ' + x + ' ' + (y + r1) + ' Q ' + x + ' ' + y + ' ' + (x + r1) + ' ' + y + '\n    Z\'\n  />\n  ';
};

var baseShapes = {
  barrel: function barrel(x, y, width, height, styleMap) {
    return '\n\n    <g ' + styleMap2Str(styleMap) + '>\n      <path d="M ' + (0 * width + x) + ' ' + (.03 * height + y) + ' L ' + (0 * width + x) + ' ' + (.97 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (height + y) + ' ' + (0.25 * width + x) + ' ' + (height + y) + '"/>\n\n      <path d="M ' + (0.25 * width + x) + ' ' + (height + y) + ' L ' + (0.75 * width + x) + ' ' + (height + y) + ' Q ' + (0.95 * width + x) + ' ' + (height + y) + ' ' + (width + x) + ' ' + (0.95 * height + y) + '"/>\n\n      <path d="M ' + (width + x) + ' ' + (.95 * height + y) + ' L ' + (width + x) + ' ' + (0.05 * height + y) + ' Q ' + (width + x) + ' ' + (0 * height + y) + ' ' + (0.75 * width + x) + ' ' + (0 * height + y) + '"/>\n\n      <path d="M ' + (0.75 * width + x) + ' ' + (0 * height + y) + ' L ' + (0.25 * width + x) + ' ' + (0 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (0 * height + y) + ' ' + (0 * width + x) + ' ' + (0.03 * height + y) + '"/>\n    </g>\n\n    ';
  },
  circle: function circle(cx, cy, r, styleMap) {
    return '<circle cx=\'' + cx + '\' cy=\'' + cy + '\' r=\'' + r + '\' ' + styleMap2Str(styleMap) + ' />';
  },
  clipPath: function clipPath(id, baseShapeFn, baseShapeFnArgs, styleMap) {
    return '\n      <defs>\n        <clipPath id=\'' + id + '\' ' + styleMap2Str(styleMap) + '>\n        ' + baseShapeFn.apply(undefined, _toConsumableArray(baseShapeFnArgs)) + '\n        </clipPath>\n      </defs>\n    ';
  },
  concaveHexagon: function concaveHexagon(x, y, width, height, styleMap) {
    return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0) + ', ' + (x + width) + ', ' + (y + 0) + ', ' + (x + 0.85 * width) + ', ' + (y + 0.5 * height) + ', ' + (x + width) + ', ' + (y + height) + ', ' + (x + 0) + ', ' + (y + height) + ', ' + (x + 0.15 * width) + ', ' + (y + 0.5 * height) + '\'\n    />';
  },
  cutRectangle: function cutRectangle(x, y, width, height, cornerLength, styleMap) {
    return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'\n      ' + (x + 0 * width) + ' ' + (y + cornerLength) + ' ' + (x + cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width - cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width) + ' ' + (y + cornerLength) + '\n      ' + (x + width) + ' ' + (y + height - cornerLength) + ' ' + (x + width - cornerLength) + ' ' + (y + height) + ' ' + (x + cornerLength) + ' ' + (y + height) + ' ' + (x + 0 * width) + ' ' + (y + height - cornerLength) + '\n      \'\n    />\n    ';
  },
  ellipse: function ellipse(cx, cy, rx, ry, styleMap) {
    return '\n      <ellipse cx=\'' + cx + '\' cy=\'' + cy + '\' rx=\'' + rx + '\' ry=\'' + ry + '\' ' + styleMap2Str(styleMap) + ' />\n    ';
  },
  hexagon: function hexagon(x, y, width, height, styleMap) {
    return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.25 * width) + ', ' + (y + 0 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + 0 * height) + ', ' + (x + width) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + height) + ', ' + (x + 0.25 * width) + ', ' + (y + height) + '\'\n    />';
  },
  line: function line(x1, y1, x2, y2, styleMap) {
    return '<line x1=\'' + x1 + '\' y1=\'' + y1 + '\' x2=\'' + x2 + '\' y2=\'' + y2 + '\' ' + styleMap2Str(styleMap) + ' />';
  },
  rectangle: function rectangle(x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap);
  },
  roundBottomRectangle: function roundBottomRectangle(x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, 0, 0, .3 * height, .3 * height, styleMap);
  },
  roundRectangle: function roundRectangle(x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, .04 * width, .04 * width, .04 * width, .04 * width, styleMap);
  },
  stadium: function stadium(x, y, width, height, styleMap) {
    var radiusRatio = .24 * Math.max(width, height);
    return baseRectangle(x, y, width, height, radiusRatio, radiusRatio, radiusRatio, radiusRatio, styleMap);
  },
  square: function square(x, y, length, styleMap) {
    return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
  },
  text: function text(t, x, y, styleMap) {
    return '<text x=\'' + x + '\' y=\'' + y + '\' ' + styleMap2Str(styleMap) + '>' + t + '</text>';
  }
};

module.exports = baseShapes;

},{"../util/svg.js":18}],12:[function(_dereq_,module,exports){
'use strict';

var svgStr = _dereq_('../util/svg').svgStr;
var sbgnData = _dereq_('../util/sbgn');
var memoize = _dereq_('lodash.memoize');

var auxiliaryItems = _dereq_('./auxiliaryItems');
var baseShapes = _dereq_('./baseShapes');

var containerNodes = {
  compartment: function compartment(node) {
    var auxItemWidth = 60;
    var auxItemHeight = 40;
    var uInfos = sbgnData.getUnitInfos(node);

    var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '', auxItemWidth, auxItemHeight);

    var lineSvg = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [lineSvg, uInfoSvg],
      bgWidth: ['100%'],
      bgPosX: ['0%', '25%'],
      bgPosY: ['19px', '0%'],
      bgFit: ['contain', 'none'],
      bgClip: 'node',
      padding: '38px',
      borderWidth: '4'
    };
  }
};

module.exports = containerNodes;

},{"../util/sbgn":17,"../util/svg":18,"./auxiliaryItems":10,"./baseShapes":11,"lodash.memoize":1}],13:[function(_dereq_,module,exports){
'use strict';

var baseShapes = _dereq_('./baseShapes');
var auxiliaryItems = _dereq_('./auxiliaryItems');

var svgStr = _dereq_('../util/svg').svgStr;
var getUnitInfos = _dereq_('../util/sbgn').getUnitInfos;
var getStateVars = _dereq_('../util/sbgn').getStateVars;
var hasClonemarker = _dereq_('../util/sbgn').hasClonemarker;

var element = _dereq_('../element');

var entityPoolNodes = {
  unspecifiedEntity: function unspecifiedEntity(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);
    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '32px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  simpleChemical: function simpleChemical(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '12px'],
      bgPosY: ['52px', '8px', '48px', '0px'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  macromolecule: function macromolecule(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '52px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  nucleicAcidFeature: function nucleicAcidFeature(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '52px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  complex: function complex(node) {
    var auxItemWidth = 60;
    var auxItemHeight = 24;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0]) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '25%', '88%'],
      bgPosY: ['100%', '11px', '100%', '0%', '0%'],
      bgFit: ['none', 'none', 'none', 'none'],
      bgClip: 'node',
      padding: '22px',
      borderWidth: 4
    };
  },
  sourceAndSink: function sourceAndSink(node) {
    var _element$dimensions = element.dimensions(node),
        nw = _element$dimensions.w,
        nh = _element$dimensions.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var radius = (nw - 2) / 2;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-linecap', 'square').set('stroke-width', '1.5').set('fill', 'none');

    var shapeArgs = [centerX, centerY, radius];

    var sourceAndSinkSvg = '\n      ' + baseShapes.circle.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : '') + '\n      ' + baseShapes.line(0, nh, nw, 0, styleMap) + '\n    ';

    return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
  },
  perturbingAgent: function perturbingAgent(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px'],
      bgPosY: ['56px', '8px', '56px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  }
};

module.exports = entityPoolNodes;

},{"../element":9,"../util/sbgn":17,"../util/svg":18,"./auxiliaryItems":10,"./baseShapes":11}],14:[function(_dereq_,module,exports){
'use strict';

var memoize = _dereq_('lodash.memoize');

var containerNodes = _dereq_('./containerNodes.js');
var entityPoolNodes = _dereq_('./entityPoolNodes.js');
var processNodes = _dereq_('./processNodes.js');

var sbgnData = _dereq_('../util/sbgn.js');

var cacheKeyFn = function cacheKeyFn(node) {
  return '' + JSON.stringify(node.id());
};

var sbgnNodeShapeMap = new Map()
// process nodes
.set('dissociation', memoize(processNodes.dissociation, cacheKeyFn)).set('phenotype', memoize(processNodes.phenotype, cacheKeyFn)

// entity pool nodes
).set('source and sink', memoize(entityPoolNodes.sourceAndSink, cacheKeyFn)).set('unspecified entity', memoize(entityPoolNodes.unspecifiedEntity, cacheKeyFn)).set('simple chemical', memoize(entityPoolNodes.simpleChemical, cacheKeyFn)).set('macromolecule', memoize(entityPoolNodes.macromolecule, cacheKeyFn)).set('nucleic acid feature', memoize(entityPoolNodes.nucleicAcidFeature, cacheKeyFn)).set('complex', memoize(entityPoolNodes.complex, cacheKeyFn)).set('perturbing agent', memoize(entityPoolNodes.perturbingAgent, cacheKeyFn)

// container nodes
).set('compartment', memoize(containerNodes.compartment, cacheKeyFn));

var draw = function draw(node) {
  var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
  var shapeFn = sbgnNodeShapeMap.get(sbgnClass);
  if (shapeFn == null) {
    throw new TypeError(sbgnClass + ' does not have a shape implementation');
  }
  return shapeFn(node);
};

module.exports = {
  draw: draw
};

},{"../util/sbgn.js":17,"./containerNodes.js":12,"./entityPoolNodes.js":13,"./processNodes.js":15,"lodash.memoize":1}],15:[function(_dereq_,module,exports){
'use strict';

var baseShapes = _dereq_('./baseShapes');
var auxiliaryItems = _dereq_('./auxiliaryItems');

var svgStr = _dereq_('../util/svg').svgStr;
var hasClonemarker = _dereq_('../util/sbgn').hasClonemarker;

var element = _dereq_('../element');

var processNodes = {
  dissociation: function dissociation(node) {
    var _element$dimensions = element.dimensions(node),
        nw = _element$dimensions.w,
        nh = _element$dimensions.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var outerRadius = (Math.min(nw, nh) - 2) / 2;
    var innerRadius = (Math.min(nw, nh) - 2) / 3;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

    var dissociationSvg = '\n      ' + baseShapes.circle(centerX, centerY, outerRadius, styleMap) + '\n      ' + baseShapes.circle(centerX, centerY, innerRadius, styleMap) + '\n    ';
    return svgStr(dissociationSvg, nw, nh);
  },
  phenotype: function phenotype(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, cloneMarkerSvg],
      bgWidth: ['100%', '100%'],
      bgPosX: ['0%', '0%'],
      bgPosY: ['56px', '56px'],
      bgFit: ['cover', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  }
};

module.exports = processNodes;

},{"../element":9,"../util/sbgn":17,"../util/svg":18,"./auxiliaryItems":10,"./baseShapes":11}],16:[function(_dereq_,module,exports){
'use strict';

var elementStyle = _dereq_('./element');
var sbgnsvg = _dereq_('./glyph');

var sbgnStyleSheet = function sbgnStyleSheet(cytoscape) {

  return cytoscape.stylesheet
  // general node style
  ().selector('node').css({
    'shape': function shape(node) {
      return elementStyle.sbgnShape(node);
    },
    'content': function content(node) {
      return elementStyle.sbgnContent(node);
    },
    'font-size': function fontSize(node) {
      return elementStyle.labelTextSize(node);
    },
    'width': function width(node) {
      return elementStyle.width(node);
    },
    'height': function height(node) {
      return elementStyle.height(node);
    },
    'text-valign': 'center',
    'text-halign': 'center',
    'border-width': 1.5,
    'border-color': '#555',
    'background-color': '#f6f6f6',
    'background-opacity': 0.5,
    'text-opacity': 1,
    'opacity': 1,
    'text-outline-color': 'white',
    'text-outline-opacity': 1,
    'text-outline-width': 0.75
  }).selector('node:selected').css({
    'background-color': '#d67614',
    'target-arrow-color': '#000',
    'text-outline-color': '#000'
  }).selector('node:active').css({
    'background-opacity': 0.7,
    'overlay-color': '#d67614',
    'overlay-padding': '14'
  }

  // draw sbgn specific styling (auxiliary items, clonemarker, etc.)
  ).selector('\n          node[class="unspecified entity"],\n          node[class="simple chemical"], node[class="simple chemical multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="perturbing agent"],\n          node[class="phenotype"],\n          node[class="complex"], node[class="complex multimer"], node[class="compartment"]\n        ').css({
    'background-image': function backgroundImage(node) {
      return sbgnsvg.draw(node).bgImage;
    },
    'background-width': function backgroundWidth(node) {
      return sbgnsvg.draw(node).bgWidth;
    },
    'background-position-x': function backgroundPositionX(node) {
      return sbgnsvg.draw(node).bgPosX;
    },
    'background-position-y': function backgroundPositionY(node) {
      return sbgnsvg.draw(node).bgPosY;
    },
    'background-fit': function backgroundFit(node) {
      return sbgnsvg.draw(node).bgFit;
    },
    'background-clip': function backgroundClip(node) {
      return sbgnsvg.draw(node).bgClip;
    },
    'padding': function padding(node) {
      return sbgnsvg.draw(node).padding;
    },
    'border-width': function borderWidth(node) {
      return sbgnsvg.draw(node).borderWidth;
    }
  }

  // compound node specific style
  ).selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]').css({
    'compound-sizing-wrt-labels': 'exclude',
    'background-opacity': .2,
    'text-valign': 'bottom',
    'text-halign': 'center'
  }

  // process node specific style
  ).selector('node[class="association"], node[class="dissociation"]').css({
    'background-opacity': 1
  }).selector('node[class="association"]').css({
    'background-color': '#6B6B6B'
  }

  // source and sink and dissociation are drawn differently because
  // of their unique shape
  ).selector('node[class="source and sink"]').css({
    'background-image': function backgroundImage(node) {
      return sbgnsvg.draw(node);
    },
    'background-fit': 'none',
    'background-width': '100%',
    'background-height': '100%',
    'background-clip': 'none',
    'background-repeat': 'no-repeat',
    'border-width': 0,
    'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0'
  }

  // source and sink and dissociation are drawn differently because
  // of their unique shape
  ).selector('node[class="dissociation"]').css({
    'background-image': function backgroundImage(node) {
      return sbgnsvg.draw(node);
    },
    'background-fit': 'none',
    'background-width': '100%',
    'background-height': '100%',
    'background-clip': 'none',
    'background-repeat': 'no-repeat',
    'border-width': 0
  }

  // edge styling
  ).selector('edge').css({
    'arrow-scale': 1.75,
    'curve-style': 'bezier',
    'line-color': '#555',
    'target-arrow-fill': 'hollow',
    'source-arrow-fill': 'hollow',
    'width': 1.5,
    'target-arrow-color': '#555',
    'source-arrow-color': '#555',
    'text-border-color': '#555',
    'color': '#555'
  }).selector('edge:selected').css({
    'color': '#d67614',
    'line-color': '#d67614',
    'text-border-color': '#d67614',
    'source-arrow-color': '#d67614',
    'target-arrow-color': '#d67614'
  }).selector('edge:active').css({
    'background-opacity': 0.7, 'overlay-color': '#d67614',
    'overlay-padding': '8'
  }).selector('edge[cardinality > 0]').css({
    'text-rotation': 'autorotate',
    'text-background-shape': 'rectangle',
    'text-border-opacity': '1',
    'text-border-width': '1',
    'text-background-color': 'white',
    'text-background-opacity': '1'
  }).selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]').css({
    'source-label': function sourceLabel(edge) {
      return '' + edge.data('cardinality');
    },
    'source-text-margin-y': '-10',
    'source-text-offset': function sourceTextOffset(edge) {
      return elementStyle.cardinalityDistance(edge);
    }
  }).selector('edge[class]').css({
    'target-arrow-shape': function targetArrowShape(edge) {
      return elementStyle.sbgnArrowShape(edge);
    },
    'source-arrow-shape': 'none'
  }).selector('edge[class="inhibition"]').css({
    'target-arrow-fill': 'filled'
  }).selector('edge[class="production"]').css({
    'target-arrow-fill': 'filled'
  }

  // core
  ).selector('core').css({
    'selection-box-color': '#d67614',
    'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
  });
};

module.exports = sbgnStyleSheet;

},{"./element":9,"./glyph":14}],17:[function(_dereq_,module,exports){
'use strict';

var sbgnDataHandler = {
  isMultimer: function isMultimer(node) {
    return node.data('class').includes('multimer');
  },
  hasClonemarker: function hasClonemarker(node) {
    return node.data('clonemarker');
  },
  getStateVars: function getStateVars(node) {
    return node.data('stateVariables');
  },
  getUnitInfos: function getUnitInfos(node) {
    return node.data('unitsOfInformation');
  },
  hasAuxItems: function hasAuxItems(node) {
    return node.data('stateVariables').length + node.data('unitsOfInformation').length > 0;
  },
  sbgnClass: function sbgnClass(element) {
    return element.data('class');
  },
  sbgnLabel: function sbgnLabel(element) {
    return element.data('label');
  },
  stateVarLabel: function stateVarLabel(stateVar) {
    var variable = stateVar.state.variable;
    var value = stateVar.state.value;
    if (value && variable) {
      return value + '@' + variable;
    }
    if (value) {
      return value;
    }

    if (variable) {
      return variable;
    }
    return '';
  }
};

module.exports = sbgnDataHandler;

},{}],18:[function(_dereq_,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var styleMap2Str = function styleMap2Str(styleMap) {
  if (!styleMap) {
    return '';
  }

  var s = '';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = styleMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];

      s += k + '=' + '"' + v + '"' + ' ';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return s;
};

var svg = function svg(svgStr) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  var parser = new DOMParser();
  var svgText = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg><svg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' width=\'' + width + '\' height=\'' + height + '\'>' + svgStr + '</svg>';
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

var svgStr = function svgStr(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) {
  var s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);

  // base64
  // let data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

  // uri component string
  var data = 'data:image/svg+xml;utf8,' + encodeURIComponent(s.outerHTML);

  return data;
};

module.exports = {
  svgStr: svgStr,
  styleMap2Str: styleMap2Str
};

},{}]},{},[8])(8)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJzcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwic3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwic3JjL3NiZ25TdHlsZS9nbHlwaC9jb250YWluZXJOb2Rlcy5qcyIsInNyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwic3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsInNyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwic3JjL3NiZ25TdHlsZS9pbmRleC5qcyIsInNyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwic3JjL3NiZ25TdHlsZS91dGlsL3N2Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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akIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgc3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGlmKHR5cGVvZiBjYW52YXMuZ2V0Q29udGV4dCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdHJldHVybiAhIWNvbnRleHQgJiYgKHR5cGVvZiBjb250ZXh0Lm1lYXN1cmVUZXh0ID09PSAnZnVuY3Rpb24nKTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHR2YXIgd2lkdGggPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gZXh0ZW5kKHtcblx0XHRcdHN0eWxlOiAnbm9ybWFsJyxcblx0XHRcdHZhcmlhbnQ6ICdub3JtYWwnLFxuXHRcdFx0d2VpZ2h0OiAnbm9ybWFsJyxcblx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0ZmFtaWx5OiAnc2Fucy1zZXJpZicsXG5cdFx0XHRhbGlnbjogJ3N0YXJ0Jyxcblx0XHRcdGJhc2VsaW5lOiAnYWxwaGFiZXRpYydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHZhciBzaXplID0gb3B0aW9ucy5zaXplO1xuXHRcdGlmKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykgc2l6ZSA9IHNpemUgKyAncHgnO1xuXG5cdFx0Y29udGV4dC5mb250ID0gdXRpbC5mb3JtYXQoJyVzICVzICVzICVzICVzJyxcblx0XHRcdG9wdGlvbnMuc3R5bGUsXG5cdFx0XHRvcHRpb25zLnZhcmlhbnQsXG5cdFx0XHRvcHRpb25zLndlaWdodCxcblx0XHRcdHNpemUsXG5cdFx0XHRvcHRpb25zLmZhbWlseSk7XG5cdFx0Y29udGV4dC50ZXh0QWxpZ24gPSBvcHRpb25zLmFsaWduO1xuXHRcdGNvbnRleHQudGV4dEJhc2VsaW5lID0gb3B0aW9ucy5iYXNlbGluZTtcblxuXHRcdHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gdHJ1ZTtcblx0cmV0dXJuIHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0ZWQoKSA/IGluaXRpYWxpemUoKSA6IChmdW5jdGlvbigpIHtcblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gZmFsc2U7XG5cdHJldHVybiB3aWR0aDtcbn0oKSk7XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwibGV0IHNiZ25TdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9zYmduU3R5bGUvJyk7XG5cbmxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY3l0b3NjYXBlKXtcbiAgcmV0dXJuIHNiZ25TdHlsZVNoZWV0KGN5dG9zY2FwZSk7XG59O1xuIiwiY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuL3V0aWwvc2Jnbi5qcycpO1xuXG5jb25zdCBzYmduU3R5bGUgPSBuZXcgTWFwKClcbi5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIHt3OiAzMiwgaDogMzIsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywge3c6IDQ4LCBoOiA0OCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwgbXVsdGltZXInLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ21hY3JvbW9sZWN1bGUnLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdtYWNyb21vbGVjdWxlIG11bHRpbWVyJywge3c6IDk2LCBoOiA0OCwgc2hhcGU6ICdyb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCB7dzogODgsIGg6IDU2LCBzaGFwZTogJ2JvdHRvbXJvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lcicsIHt3OiA4OCwgaDogNTIsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ2NvbXBsZXgnLCB7dzogMCwgaDogMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcbi5zZXQoJ2NvbXBsZXggbXVsdGltZXInLCB7dzogMCwgaDogMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHt3OiA2MCwgaDogNjAsIHNoYXBlOiAncG9seWdvbid9KVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2NvbmNhdmVoZXhhZ29uJ30pXG5cbi5zZXQoJ3BoZW5vdHlwZScsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2hleGFnb24nfSlcbi5zZXQoJ3Byb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXG4uc2V0KCd1bmNlcnRhaW4gcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ29taXR0ZWQgcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ2Fzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXG5cbi5zZXQoJ2NvbXBhcnRtZW50Jywge3c6IDIwMCwgaDogMTUwLCBzaGFwZTogJ2JhcnJlbCd9KVxuXG4uc2V0KCd0YWcnLCB7dzogMTAwLCBoOiA2NSwgc2hhcGU6ICd0YWcnfSlcbi5zZXQoJ2FuZCcsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnb3InLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ25vdCcsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KTtcblxuY29uc3Qgc2JnbkFycm93TWFwID0gbmV3IE1hcCgpXG4uc2V0KCduZWNlc3Nhcnkgc3RpbXVsYXRpb24nLCAndHJpYW5nbGUtY3Jvc3MnKVxuLnNldCgnaW5oaWJpdGlvbicsICd0ZWUnKVxuLnNldCgnY2F0YWx5c2lzJywgJ2NpcmNsZScpXG4uc2V0KCdzdGltdWxhdGlvbicsICd0cmlhbmdsZScpXG4uc2V0KCdwcm9kdWN0aW9uJywgJ3RyaWFuZ2xlJylcbi5zZXQoJ21vZHVsYXRpb24nLCAnZGlhbW9uZCcpO1xuXG5cbmNvbnN0IHNjYWxlZFRleHRTaXplID0gKGhlaWdodCwgc2l6ZUNvZWZmaWNpZW50ID0gMSkgPT4ge1xuICByZXR1cm4gKGhlaWdodCAvIDIuNDUpICogc2l6ZUNvZWZmaWNpZW50O1xufTtcblxuY29uc3QgZWxlbWVudFN0eWxlID0ge1xuICBzYmduU2hhcGUgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICAgIGNvbnN0IHN0eWxlID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzdHlsZSA/IHN0eWxlLnNoYXBlIDogJ2VsbGlwc2UnO1xuICB9LFxuXG4gIHNiZ25BcnJvd1NoYXBlIChlZGdlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKGVkZ2UpO1xuICAgIGNvbnN0IHNoYXBlID0gc2JnbkFycm93TWFwLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzaGFwZSA/IHNoYXBlIDogJ25vbmUnO1xuICB9LFxuXG4gIHNiZ25Db250ZW50IChub2RlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgICBsZXQgY29udGVudCA9IHNiZ25EYXRhLnNiZ25MYWJlbChub2RlKTtcblxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ2FuZCcpIHtcbiAgICAgIGNvbnRlbnQgPSAnQU5EJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb3InKSB7XG4gICAgICBjb250ZW50ID0gJ09SJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnbm90Jykge1xuICAgICAgY29udGVudCA9ICdOT1QnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdvbWl0dGVkIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJ1xcXFxcXFxcJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAndW5jZXJ0YWluIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJz8nO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9LFxuXG4gIGRpbWVuc2lvbnMgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgY29uc3QgZGltID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIGlmIChkaW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0YCk7XG4gICAgfVxuICAgIHJldHVybiBkaW07XG4gIH0sXG5cbiAgd2lkdGggKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLnc7XG4gIH0sXG5cbiAgaGVpZ2h0IChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS5oO1xuICB9LFxuXG4gIGxhYmVsVGV4dFNpemUgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgY29uc3QgdGV4dFNjYWxpbmdDb25zdGFudCA9IDQwO1xuXG4gICAgaWYgKHNiZ25DbGFzcyA9PT0gJ2Fzc29jaWF0aW9uJyB8fCBzYmduQ2xhc3MgPT09ICdkaXNzb2NpYXRpb24nKSB7XG4gICAgICByZXR1cm4gMjA7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MuaW5jbHVkZXMoJ2NvbXBsZXgnKSkge1xuICAgICAgcmV0dXJuIDE2O1xuICAgIH1cblxuICAgIGlmIChzYmduQ2xhc3MgPT09ICdjb21wYXJ0bWVudCcpIHtcbiAgICAgIHJldHVybiA1MDtcbiAgICB9XG5cbiAgICBpZiAoc2JnbkNsYXNzLmVuZHNXaXRoKCdwcm9jZXNzJykpIHtcbiAgICAgIHJldHVybiBzY2FsZWRUZXh0U2l6ZSh0ZXh0U2NhbGluZ0NvbnN0YW50LCAxLjUpO1xuICAgIH1cblxuICAgIHJldHVybiBzY2FsZWRUZXh0U2l6ZSh0ZXh0U2NhbGluZ0NvbnN0YW50KTtcbiAgfSxcblxuICBjYXJkaW5hbGl0eURpc3RhbmNlIChlZGdlKSB7XG4gICAgY29uc3Qgc3JjUG9zID0gZWRnZS5zb3VyY2UoKS5wb3NpdGlvbigpO1xuICAgIGNvbnN0IHRndFBvcyA9IGVkZ2UudGFyZ2V0KCkucG9zaXRpb24oKTtcblxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KChzcmNQb3MueCAtIHRndFBvcy54KSwgMikgKyBNYXRoLnBvdygoc3JjUG9zLnkgLSB0Z3RQb3MueSksIDIpKTtcbiAgICByZXR1cm4gZGlzdGFuY2UgKiAwLjE1O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRTdHlsZTtcbiIsImNvbnN0IHRleHRXaWR0aCA9IHJlcXVpcmUoJ3RleHQtd2lkdGgnKTtcblxuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcy5qcycpO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSB7XG5cbiAgbXVsdGlJbWdDbG9uZU1hcmtlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgY29uc3QgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XG4gIH0sXG5cbiAgbXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdUluZm8sIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XG4gICAgY29uc3QgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdUluZm9XaWR0aCA9IHRleHRXaWR0aCh0ZXh0LCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDU7XG5cbiAgICBjb25zdCB1bml0T2ZJbmZvcm1hdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlKHgsIHksIHVJbmZvV2lkdGgsIGhlaWdodCwgdWluZm9SZWN0U3R5bGUpfVxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQodGV4dCwgeCArICh1SW5mb1dpZHRoIC8gMiksIHkgKyAoIGhlaWdodCAvIDIpLCAgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHVuaXRPZkluZm9ybWF0aW9uU3ZnO1xuICB9LFxuXG4gIG11bHRpSW1nU3RhdGVWYXIgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXRlVmFyLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xuXG4gICAgY29uc3Qgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdHcgPSB0ZXh0V2lkdGgoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgMTA7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KHR3LCAzMCk7XG4gICAgY29uc3Qgc3RhdGV2YXJpYWJsZVN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnN0YWRpdW0oeCwgeSwgdywgaGVpZ2h0LCBzdGF0ZVZhclN0eWxlKX1cbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB4ICsgKCB3IC8gMiApLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XG4gIH0sXG5cbiAgY2xvbmVNYXJrZXIgKG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgc2hhcGVGbiwgc2hhcGVGbkFyZ3MpIHtcbiAgICBjb25zdCBjbGlwSWQgPSAnY2xvbmVtYXJrZXInO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdjbGlwLXBhdGgnLCBgdXJsKCMke2NsaXBJZH0pYClcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2xpcFBhdGgoY2xpcElkLCBiYXNlU2hhcGVzLnJlY3RhbmdsZSwgIFswLCAzICogbm9kZUhlaWdodCAvIDQsIG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgbmV3IE1hcCgpXSl9XG4gICAgICAke3NoYXBlRm4oLi4uc2hhcGVGbkFyZ3MsIGNsb25lTWFya2VyU3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gY2xvbmVNYXJrZXJTdmc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXV4aWxpYXJ5SXRlbXM7XG4iLCJjb25zdCBzdHlsZU1hcDJTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2Zy5qcycpLnN0eWxlTWFwMlN0cjtcblxubGV0IGJhc2VSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgdywgaCwgcjEsIHIyLCByMywgcjQsIHN0eWxlTWFwKSB7XG4gIHJldHVybiBgXG4gIDxwYXRoICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gZD0nXG4gICAgTSAke3ggKyByMX0gJHt5fVxuICAgIEwgJHt4ICsgdyAtIHIyfSAke3l9IFEgJHt4ICsgd30gJHt5fSAke3ggKyB3fSAke3kgKyByMn1cbiAgICBMICR7eCArIHcgfSAke3kgKyBoIC0gcjN9IFEgJHt4ICsgd30gJHt5ICsgaH0gJHt4ICsgdyAtIHIzfSAke3kgKyBofVxuICAgIEwgJHt4ICsgcjR9ICR7eSArIGh9IFEgJHt4fSAke3kgKyBofSAke3h9ICR7eSArIGggLSByNH1cbiAgICBMICR7eH0gJHt5ICsgcjF9IFEgJHt4fSAke3l9ICR7eCArIHIxfSAke3l9XG4gICAgWidcbiAgLz5cbiAgYDtcbn07XG5cbmNvbnN0IGJhc2VTaGFwZXMgPSB7XG4gIGJhcnJlbCAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuXG4gICAgPGcgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT5cbiAgICAgIDxwYXRoIGQ9XCJNICR7MCp3aWR0aCArIHh9ICR7LjAzKmhlaWdodCArIHl9IEwgJHswKndpZHRoICsgeH0gJHsuOTcqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAke2hlaWdodCArIHl9ICR7MC4yNSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX1cIi8+XG5cbiAgICAgIDxwYXRoIGQ9XCJNICR7MC4yNSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gTCAkezAuNzUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IFEgJHswLjk1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAke3dpZHRoICsgeH0gJHswLjk1KmhlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAke3dpZHRoICsgeH0gJHsuOTUqaGVpZ2h0ICsgeX0gTCAke3dpZHRoICsgeH0gJHswLjA1KmhlaWdodCArIHl9IFEgJHt3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX1cIi8+XG5cbiAgICAgIDxwYXRoIGQ9XCJNICR7MC43NSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSBMICR7MC4yNSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSBRICR7MC4wNip3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSAkezAqd2lkdGggKyB4fSAkezAuMDMqaGVpZ2h0ICsgeX1cIi8+XG4gICAgPC9nPlxuXG4gICAgYDtcbiAgfSxcblxuICBjaXJjbGUgKGN4LCBjeSwgciwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYDxjaXJjbGUgY3g9JyR7Y3h9JyBjeT0nJHtjeX0nIHI9JyR7cn0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5gO1xuICB9LFxuXG4gIGNsaXBQYXRoIChpZCwgYmFzZVNoYXBlRm4sIGJhc2VTaGFwZUZuQXJncywgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD0nJHtpZH0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XG4gICAgICAgICR7YmFzZVNoYXBlRm4oLi4uYmFzZVNoYXBlRm5BcmdzKX1cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICBgO1xuICB9LFxuXG4gIGNvbmNhdmVIZXhhZ29uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPScke3ggKyAwfSwgJHt5ICsgMH0sICR7eCArIHdpZHRofSwgJHt5ICsgMH0sICR7eCArIDAuODUqd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgd2lkdGh9LCAke3kgKyBoZWlnaHR9LCAke3ggKyAwfSwgJHt5ICsgaGVpZ2h0fSwgJHsgeCArIDAuMTUqd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSdcbiAgICAvPmA7XG4gIH0sXG5cbiAgY3V0UmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb3JuZXJMZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XG4gICAgICBwb2ludHM9J1xuICAgICAgJHt4ICsgMCp3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofSAke3ggKyBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aCAtIGNvcm5lckxlbmd0aH0gJHt5ICsgMCpoZWlnaHR9ICR7eCArIHdpZHRofSAke3kgKyBjb3JuZXJMZW5ndGh9XG4gICAgICAke3ggKyB3aWR0aH0gJHt5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RofSAke3ggKyB3aWR0aCAtIGNvcm5lckxlbmd0aH0gJHt5ICsgaGVpZ2h0fSAke3ggKyBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgMCp3aWR0aH0gJHt5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RofVxuICAgICAgJ1xuICAgIC8+XG4gICAgYDtcbiAgfSxcblxuICBlbGxpcHNlIChjeCwgY3ksIHJ4LCByeSwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGVsbGlwc2UgY3g9JyR7Y3h9JyBjeT0nJHtjeX0nIHJ4PScke3J4fScgcnk9JyR7cnl9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+XG4gICAgYDtcbiAgfSxcblxuICBoZXhhZ29uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPScke3ggKyAwfSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIDAuMjUqd2lkdGh9LCAke3kgKyAwKmhlaWdodH0sICR7eCArIDAuNzUqd2lkdGh9LCAke3kgKyAwKmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIDAuNzUqd2lkdGh9LCAke3kgKyBoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSdcbiAgICAvPmA7XG4gIH0sXG5cbiAgbGluZSAoeDEsIHkxLCB4MiwgeTIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8bGluZSB4MT0nJHt4MX0nIHkxPScke3kxfScgeDI9JyR7eDJ9JyB5Mj0nJHt5Mn0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5gO1xuICB9LFxuXG4gIHJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAwLCAwLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgcm91bmRCb3R0b21SZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgLjMqaGVpZ2h0LCAuMypoZWlnaHQsIHN0eWxlTWFwKTtcbiAgfSxcblxuICByb3VuZFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIHN0eWxlTWFwKTtcbiAgfSxcblxuICBzdGFkaXVtICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gLjI0ICogTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHN0eWxlTWFwKTtcbiAgfSxcblxuICBzcXVhcmUgKHgsIHksIGxlbmd0aCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCBsZW5ndGgsIGxlbmd0aCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHRleHQgKHQsIHgsIHksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8dGV4dCB4PScke3h9JyB5PScke3l9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PiR7dH08L3RleHQ+YDtcbiAgfVxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNoYXBlcztcbiIsImNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcbmNvbnN0IG1lbW9pemUgPSByZXF1aXJlKCdsb2Rhc2gubWVtb2l6ZScpO1xuXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcbmNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcblxuY29uc3QgY29udGFpbmVyTm9kZXMgPSB7XG5cbiAgY29tcGFydG1lbnQgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSA2MDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gNDA7XG4gICAgY29uc3QgdUluZm9zID0gc2JnbkRhdGEuZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0pIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgbGV0IGxpbmVTdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbbGluZVN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMjUlJ10sXG4gICAgICBiZ1Bvc1k6IFsnMTlweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY29udGFpbicsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICczOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAnNCdcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lck5vZGVzO1xuIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5cbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3QgZ2V0VW5pdEluZm9zID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0VW5pdEluZm9zO1xuY29uc3QgZ2V0U3RhdGVWYXJzID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0U3RhdGVWYXJzO1xuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcblxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuXG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSB7XG5cbiAgdW5zcGVjaWZpZWRFbnRpdHkgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICczMnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcblxuICB9LFxuXG4gIHNpbXBsZUNoZW1pY2FsIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzEycHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc0OHB4JywgJzBweCddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9LFxuXG4gIG1hY3JvbW9sZWN1bGUobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07ICB9LFxuXG4gIG51Y2xlaWNBY2lkRmVhdHVyZSAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcblxuICBjb21wbGV4IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gNjA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDI0O1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0pIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjUlJywgJzg4JSddLFxuICAgICAgYmdQb3NZOiBbJzEwMCUnLCAnMTFweCcsICcxMDAlJywgJzAlJywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydub25lJywgJ25vbmUnLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICcyMnB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiA0XG4gICAgfTtcbiAgfSxcblxuICBzb3VyY2VBbmRTaW5rIChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBlbGVtZW50LmRpbWVuc2lvbnMobm9kZSk7XG5cbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKG53IC0gMikgLyAyO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLWxpbmVjYXAnLCAnc3F1YXJlJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IHNoYXBlQXJncyA9IFtjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXNdO1xuXG4gICAgY29uc3Qgc291cmNlQW5kU2lua1N2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudywgbmgsIGJhc2VTaGFwZXMuY2lyY2xlLCBzaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke2Jhc2VTaGFwZXMubGluZSgwLCBuaCwgbncsIDAsIHN0eWxlTWFwKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN2Z1N0cihzb3VyY2VBbmRTaW5rU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGVydHVyYmluZ0FnZW50IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzhweCcsICc1NnB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW50aXR5UG9vbE5vZGVzO1xuIiwiY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XG5cbmNvbnN0IGNvbnRhaW5lck5vZGVzID0gcmVxdWlyZSgnLi9jb250YWluZXJOb2Rlcy5qcycpO1xuY29uc3QgZW50aXR5UG9vbE5vZGVzID0gcmVxdWlyZSgnLi9lbnRpdHlQb29sTm9kZXMuanMnKTtcbmNvbnN0IHByb2Nlc3NOb2RlcyA9IHJlcXVpcmUoJy4vcHJvY2Vzc05vZGVzLmpzJyk7XG5cbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduLmpzJyk7XG5cbmNvbnN0IGNhY2hlS2V5Rm4gPSAobm9kZSkgPT4gJycgKyBKU09OLnN0cmluZ2lmeShub2RlLmlkKCkpO1xuXG5jb25zdCBzYmduTm9kZVNoYXBlTWFwID0gbmV3IE1hcCgpXG4vLyBwcm9jZXNzIG5vZGVzXG4uc2V0KCdkaXNzb2NpYXRpb24nLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5kaXNzb2NpYXRpb24sIGNhY2hlS2V5Rm4pKVxuLnNldCgncGhlbm90eXBlJywgbWVtb2l6ZShwcm9jZXNzTm9kZXMucGhlbm90eXBlLCBjYWNoZUtleUZuKSlcblxuLy8gZW50aXR5IHBvb2wgbm9kZXNcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnNvdXJjZUFuZFNpbmssIGNhY2hlS2V5Rm4pKVxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMudW5zcGVjaWZpZWRFbnRpdHksIGNhY2hlS2V5Rm4pKVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwsIGNhY2hlS2V5Rm4pKVxuLnNldCgnbWFjcm9tb2xlY3VsZScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLm1hY3JvbW9sZWN1bGUsIGNhY2hlS2V5Rm4pKVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUsIGNhY2hlS2V5Rm4pKVxuLnNldCgnY29tcGxleCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgsIGNhY2hlS2V5Rm4pKVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnBlcnR1cmJpbmdBZ2VudCwgY2FjaGVLZXlGbikpXG5cbi8vIGNvbnRhaW5lciBub2Rlc1xuLnNldCgnY29tcGFydG1lbnQnLCBtZW1vaXplKGNvbnRhaW5lck5vZGVzLmNvbXBhcnRtZW50LCBjYWNoZUtleUZuKSk7XG5cblxuY29uc3QgZHJhdyA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gIGxldCBzaGFwZUZuID0gc2Jnbk5vZGVTaGFwZU1hcC5nZXQoc2JnbkNsYXNzKTtcbiAgaWYgKHNoYXBlRm4gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7c2JnbkNsYXNzfSBkb2VzIG5vdCBoYXZlIGEgc2hhcGUgaW1wbGVtZW50YXRpb25gKTtcbiAgfVxuICByZXR1cm4gc2hhcGVGbihub2RlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkcmF3OiBkcmF3XG59O1xuIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5cbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcblxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgcHJvY2Vzc05vZGVzID0ge1xuXG4gIGRpc3NvY2lhdGlvbiAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xuXG4gICAgY29uc3QgY2VudGVyWCA9IG53IC8gMjtcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xuICAgIGNvbnN0IG91dGVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDI7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMztcblxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcyJylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IGRpc3NvY2lhdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBvdXRlclJhZGl1cywgc3R5bGVNYXApfVxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBpbm5lclJhZGl1cywgc3R5bGVNYXApfVxuICAgIGA7XG4gICAgcmV0dXJuIHN2Z1N0cihkaXNzb2NpYXRpb25TdmcsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGhlbm90eXBlIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIGNsb25lTWFya2VyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzU2cHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc05vZGVzO1xuIiwiY29uc3QgZWxlbWVudFN0eWxlID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5jb25zdCBzYmduc3ZnID0gcmVxdWlyZSgnLi9nbHlwaCcpO1xuXG5jb25zdCBzYmduU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChjeXRvc2NhcGUpIHtcblxuICByZXR1cm4gY3l0b3NjYXBlLnN0eWxlc2hlZXQoKVxuICAgICAgICAvLyBnZW5lcmFsIG5vZGUgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NoYXBlJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduU2hhcGUobm9kZSksXG4gICAgICAgICAgJ2NvbnRlbnQnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25Db250ZW50KG5vZGUpLFxuICAgICAgICAgICdmb250LXNpemUnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLmxhYmVsVGV4dFNpemUobm9kZSksXG4gICAgICAgICAgJ3dpZHRoJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5oZWlnaHQobm9kZSksXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmNmY2ZjYnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAwLjUsXG4gICAgICAgICAgJ3RleHQtb3BhY2l0eSc6IDEsXG4gICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnd2hpdGUnLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtb3BhY2l0eSc6IDEsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS13aWR0aCc6IDAuNzVcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlOnNlbGVjdGVkJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjMDAwJyxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJyMwMDAnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTphY3RpdmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMC43LFxuICAgICAgICAgICdvdmVybGF5LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdvdmVybGF5LXBhZGRpbmcnOiAnMTQnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZHJhdyBzYmduIHNwZWNpZmljIHN0eWxpbmcgKGF1eGlsaWFyeSBpdGVtcywgY2xvbmVtYXJrZXIsIGV0Yy4pXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInVuc3BlY2lmaWVkIGVudGl0eVwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsXCJdLCBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlXCJdLCBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmVcIl0sIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGVydHVyYmluZyBhZ2VudFwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGhlbm90eXBlXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ltYWdlLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1dpZHRoLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1ksXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ZpdCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0NsaXAsXG4gICAgICAgICAgJ3BhZGRpbmcnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLnBhZGRpbmcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYm9yZGVyV2lkdGhcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb21wb3VuZCBub2RlIHNwZWNpZmljIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnY29tcG91bmQtc2l6aW5nLXdydC1sYWJlbHMnOiAnZXhjbHVkZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IC4yLFxuICAgICAgICAgICd0ZXh0LXZhbGlnbic6ICdib3R0b20nLFxuICAgICAgICAgICd0ZXh0LWhhbGlnbic6ICdjZW50ZXInLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHByb2Nlc3Mgbm9kZSBzcGVjaWZpYyBzdHlsZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXSwgbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAxXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImFzc29jaWF0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzZCNkI2QidcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxuICAgICAgICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwic291cmNlIGFuZCBzaW5rXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6ICdub25lJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1oZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6ICdub25lJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMCxcbiAgICAgICAgICAnc2hhcGUtcG9seWdvbi1wb2ludHMnOiAnLTAuODYsIDAuNSwgLTAuNzUsIDAuNjUsIC0xLCAwLjk1LCAtMC45NSwgMSwgLTAuNjUsIDAuNzUsIC0wLjUsIDAuODYsIDAsIDEsIDAuNSwgMC44NiwgMC43MSwgMC43MSwgMC44NiwgMC41LCAxLCAwLCAwLjg2LCAtMC41LCAwLjc1LCAtMC42NSwgMSwgLTAuOTUsIDAuOTUsIC0xLCAwLjY1LCAtMC43NSwgMC41LCAtMC44NiwgMCwgLTEsIC0wLjUsIC0wLjg2LCAtMC43MSwgLTAuNzEsIC0wLjg2LCAtMC41LCAtMSwgMCcsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZWRnZSBzdHlsaW5nXG4gICAgICAgIC5zZWxlY3RvcignZWRnZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdhcnJvdy1zY2FsZSc6IDEuNzUsXG4gICAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ2JlemllcicsXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2hvbGxvdycsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1maWxsJzogJ2hvbGxvdycsXG4gICAgICAgICAgJ3dpZHRoJzogMS41LFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjNTU1JyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ2NvbG9yJzogJyM1NTUnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdjb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNkNjc2MTQnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTphY3RpdmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMC43LCAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzgnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjYXJkaW5hbGl0eSA+IDBdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RleHQtcm90YXRpb24nOiAnYXV0b3JvdGF0ZScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1zaGFwZSc6ICdyZWN0YW5nbGUnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci1vcGFjaXR5JzogJzEnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci13aWR0aCc6ICcxJyxcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLW9wYWNpdHknOiAnMSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiY29uc3VtcHRpb25cIl1bY2FyZGluYWxpdHkgPiAwXSwgZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl1bY2FyZGluYWxpdHkgPiAwXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzb3VyY2UtbGFiZWwnOiAoZWRnZSkgPT4gJycgKyBlZGdlLmRhdGEoJ2NhcmRpbmFsaXR5JyksXG4gICAgICAgICAgJ3NvdXJjZS10ZXh0LW1hcmdpbi15JzogJy0xMCcsXG4gICAgICAgICAgJ3NvdXJjZS10ZXh0LW9mZnNldCc6IChlZGdlKSA9PiBlbGVtZW50U3R5bGUuY2FyZGluYWxpdHlEaXN0YW5jZShlZGdlKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3NdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6IChlZGdlKSA9PiBlbGVtZW50U3R5bGUuc2JnbkFycm93U2hhcGUoZWRnZSksXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1zaGFwZSc6ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJpbmhpYml0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBjb3JlXG4gICAgICAgIC5zZWxlY3RvcignY29yZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzZWxlY3Rpb24tYm94LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdzZWxlY3Rpb24tYm94LW9wYWNpdHknOiAnMC4yJywgJ3NlbGVjdGlvbi1ib3gtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnXG4gICAgICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzYmduU3R5bGVTaGVldDtcbiIsImNvbnN0IHNiZ25EYXRhSGFuZGxlciA9IHtcbiAgaXNNdWx0aW1lciAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ2NsYXNzJykuaW5jbHVkZXMoJ211bHRpbWVyJyk7XG4gIH0sXG4gIGhhc0Nsb25lbWFya2VyIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xvbmVtYXJrZXInKTtcbiAgfSxcbiAgZ2V0U3RhdGVWYXJzIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKTtcbiAgfSxcbiAgZ2V0VW5pdEluZm9zIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJyk7XG4gIH0sXG4gIGhhc0F1eEl0ZW1zIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJykubGVuZ3RoICsgbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKS5sZW5ndGggPiAwKTtcbiAgfSxcbiAgc2JnbkNsYXNzIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnY2xhc3MnKTtcbiAgfSxcbiAgc2JnbkxhYmVsIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnbGFiZWwnKTtcbiAgfSxcbiAgc3RhdGVWYXJMYWJlbCAoc3RhdGVWYXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHN0YXRlVmFyLnN0YXRlLnZhcmlhYmxlO1xuICAgIGNvbnN0IHZhbHVlID0gc3RhdGVWYXIuc3RhdGUudmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHZhcmlhYmxlKSB7XG4gICAgICByZXR1cm4gYCR7dmFsdWV9QCR7dmFyaWFibGV9YDtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzYmduRGF0YUhhbmRsZXI7XG4iLCJjb25zdCBzdHlsZU1hcDJTdHIgPSAoc3R5bGVNYXApID0+IHtcbiAgaWYoICFzdHlsZU1hcCApe1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzID0gJyc7XG5cbiAgZm9yKCBsZXQgW2ssIHZdIG9mIHN0eWxlTWFwICl7XG4gICAgcyArPSBrICsgJz0nICsgJ1wiJyArIHYgKyAnXCInICsgJyAnO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59O1xuXG5jb25zdCBzdmcgPSAoc3ZnU3RyLCB3aWR0aCA9IDEwMCwgaGVpZ2h0ID0gMTAwKSA9PiB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IHN2Z1RleHQgPVxuICBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PCFET0NUWVBFIHN2Zz48c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgdmVyc2lvbj0nMS4xJyB3aWR0aD0nJHt3aWR0aH0nIGhlaWdodD0nJHtoZWlnaHR9Jz4ke3N2Z1N0cn08L3N2Zz5gO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdUZXh0LCAndGV4dC94bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG59O1xuXG5jb25zdCBzdmdTdHIgPSAoc3ZnVGV4dCwgdmlld1BvcnRXaWR0aCwgdmlld1BvcnRIZWlnaHQsIHZpZXdCb3hYLCB2aWV3Qm94WSwgdmlld0JveFdpZHRoLCB2aWV3Qm94SGVpZ2h0KSA9PiB7XG4gIGxldCBzID0gc3ZnKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCk7XG5cbiAgLy8gYmFzZTY0XG4gIC8vIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIGJ0b2Eocy5vdXRlckhUTUwpO1xuXG4gIC8vIHVyaSBjb21wb25lbnQgc3RyaW5nXG4gIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgKyBlbmNvZGVVUklDb21wb25lbnQocy5vdXRlckhUTUwpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN2Z1N0cjogc3ZnU3RyLFxuICBzdHlsZU1hcDJTdHI6IHN0eWxlTWFwMlN0clxufTtcbiJdfQ==
