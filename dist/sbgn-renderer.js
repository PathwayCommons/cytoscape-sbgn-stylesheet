(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sbgnRenderer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

var sbgnStyleSheet = _dereq_('./sbgnStyle/graph');

var defaultOptions = {};

module.exports = function (cytoscape) {
  return sbgnStyleSheet(cytoscape);
};

},{"./sbgnStyle/graph":17}],9:[function(_dereq_,module,exports){
'use strict';

var sbgnData = _dereq_('./util/sbgn.js');

var sbgnNodeDimensions = new Map().set('unspecified entity', { w: 40, h: 40 }).set('simple chemical', { w: 60, h: 60 }).set('simple chemical multimer', { w: 60, h: 60 }).set('macromolecule', { w: 100, h: 60 }).set('macromolecule multimer', { w: 100, h: 60 }).set('nucleic acid feature', { w: 100, h: 60 }).set('nucleic acid feature multimer', { w: 100, h: 60 }).set('complex', { w: 0, h: 0 }).set('complex multimer', { w: 0, h: 0 }).set('source and sink', { w: 60, h: 60 }).set('perturbing agent', { w: 140, h: 60 }).set('phenotype', { w: 140, h: 60 }).set('process', { w: 25, h: 25 }).set('uncertain process', { w: 25, h: 25 }).set('omitted process', { w: 25, h: 25 }).set('association', { w: 25, h: 25 }).set('dissociation', { w: 25, h: 25 }).set('compartment', { w: 200, h: 150 }).set('tag', { w: 100, h: 65 }).set('and', { w: 40, h: 40 }).set('or', { w: 40, h: 40 }).set('not', { w: 40, h: 40 });

var get = function get(node) {
  var sbgnClass = sbgnData.sbgnClass(node);
  var dim = sbgnNodeDimensions.get(sbgnClass);
  if (dim === undefined) {
    throw new TypeError(sbgnClass + ' does not have a default width / height');
  }
  return dim;
};

var width = function width(node) {
  return get(node).w;
};

var height = function height(node) {
  return get(node).h;
};

module.exports = {
  height: height,
  width: width,
  get: get
};

},{"./util/sbgn.js":18}],10:[function(_dereq_,module,exports){
'use strict';

var sbgnData = _dereq_('./util/sbgn.js');
var elementStyle = {};

elementStyle.sbgnShape = function (node) {
  var sbgnClass = sbgnData.sbgnClass(node);
  if (sbgnClass.endsWith(' multimer')) {
    sbgnClass = sbgnClass.replace(' multimer', '');
  }

  if (sbgnClass == 'phenotype') {
    return 'hexagon';
  }

  if (sbgnClass == 'compartment') {
    return 'barrel';
  }

  if (sbgnClass == 'process' || sbgnClass == 'omitted process' || sbgnClass == 'uncertain process') {
    return 'square';
  }

  if (sbgnClass == 'perturbing agent' || sbgnClass == 'tag' || sbgnClass == 'source and sink') {
    return 'polygon';
  }

  if (sbgnClass == 'dissociation' || sbgnClass == 'association' || sbgnClass == 'simple chemical') {
    return 'ellipse';
  }

  if (sbgnClass == 'nucleic acid feature' || sbgnClass == 'macromolecule') {
    return 'roundrectangle';
  }

  if (sbgnClass == 'complex') {
    return 'cutrectangle';
  }
  return 'ellipse';
};

elementStyle.sbgnArrowShape = function (edge) {
  var sbgnClass = sbgnData.sbgnClass(edge);
  if (sbgnClass == 'necessary stimulation') {
    return 'triangle-cross';
  }
  if (sbgnClass == 'inhibition') {
    return 'tee';
  }
  if (sbgnClass == 'catalysis') {
    return 'circle';
  }
  if (sbgnClass == 'stimulation' || sbgnClass == 'production') {
    return 'triangle';
  }
  if (sbgnClass == 'modulation') {
    return 'diamond';
  }
  return 'none';
};

elementStyle.sbgnContent = function (node) {
  var sbgnClass = sbgnData.sbgnClass(node);
  var content = '';

  if (sbgnClass.endsWith(' multimer')) {
    sbgnClass = sbgnClass.replace(' multimer', '');
  }

  if (sbgnClass === 'macromolecule' || sbgnClass === 'simple chemical' || sbgnClass === 'phenotype' || sbgnClass === 'unspecified entity' || sbgnClass === 'nucleic acid feature' || sbgnClass === 'perturbing agent' || sbgnClass === 'tag' || sbgnClass === 'compartment' || sbgnClass === 'complex') {
    content = node.data('label') ? node.data('label') : '';
  }
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
};

var scaledTextSize = function scaledTextSize(height) {
  var sizeCoefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return height / 2.45 * sizeCoefficient;
};

elementStyle.labelTextSize = function (node) {
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
};

elementStyle.cardinalityDistance = function (edge) {
  var srcPos = edge.source().position();
  var tgtPos = edge.target().position();

  var distance = Math.sqrt(Math.pow(srcPos.x - tgtPos.x, 2) + Math.pow(srcPos.y - tgtPos.y, 2));
  return distance * 0.15;
};

module.exports = elementStyle;

},{"./util/sbgn.js":18}],11:[function(_dereq_,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var textWidth = _dereq_('text-width');

var baseShapes = _dereq_('./baseShapes.js');

var stateVarLabel = function stateVarLabel(stateVar) {
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
};

var auxiliaryItems = {
  compoundCloneMarker: function compoundCloneMarker(x, y, width, height) {

    var cloneStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1').set('fill', '#D2D2D2');

    return baseShapes.rectangle(x, y, width, height, cloneStyle);
  },
  compoundUnitOfInformation: function compoundUnitOfInformation(x, y, width, height, uInfo) {
    var fontSize = 14;
    var text = uInfo.label.text;
    var uinfoRectStyle = new Map().set('stroke', '#555555').set('stroke-width', '4').set('fill', 'none');

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', '' + fontSize).set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle').set('stroke', 'black');

    var uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize }) + 5;

    var unitOfInformationSvg = '\n      ' + baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle) + '\n      ' + baseShapes.text(text, x + uInfoWidth / 2, y + height / 2, textStyle) + '\n    ';

    return unitOfInformationSvg;
  },
  compoundStateVar: function compoundStateVar(x, y, width, height, stateVar) {
    var fontSize = 14;

    var stateVarStyle = new Map().set('stroke', '#555555').set('stroke-width', '4').set('fill', 'none');

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', '' + fontSize).set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle').set('stroke', 'black');

    var tw = textWidth(stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize }) + 10;
    var w = Math.max(tw, 30);
    var statevariableSvg = '\n      ' + baseShapes.stadium(x, y, w, height, stateVarStyle) + '\n      ' + baseShapes.text(stateVarLabel(stateVar), x + w / 2, y + height / 2, textStyle) + '\n    ';

    return statevariableSvg;
  },
  stateVariable: function stateVariable(x, y, radius, stateVar) {

    var fontSize = 12;

    var stateVarStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('fill', 'white').set('fill-opacity', '1');

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', '' + fontSize).set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle').set('stroke', 'black');

    var tw = textWidth(stateVarLabel(stateVar, { family: textStyle.get('font-family'), size: fontSize }), 20);
    var stateVarWidth = Math.max(tw * .5, 20);

    var statevariableSvg = '\n      ' + baseShapes.ellipse(x, y, stateVarWidth, radius, stateVarStyle) + '\n      ' + baseShapes.text(stateVarLabel(stateVar), x, y, textStyle) + '\n    ';

    return statevariableSvg;
  },
  unitOfInformation: function unitOfInformation(x, y, width, height, unitInfo) {

    var fontSize = 12;
    var text = unitInfo.label.text;

    var uinfoRectStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('fill', 'white').set('fill-opacity', '1');

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', '' + fontSize).set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle').set('stroke', 'black');

    var uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize }) + 5;

    var unitOfInformationSvg = '\n      ' + baseShapes.roundRectangle(x - uInfoWidth / 2, y, uInfoWidth, height, uinfoRectStyle) + '\n      ' + baseShapes.text(text, x, y + height / 2, textStyle) + '\n    ';

    return unitOfInformationSvg;
  },
  cloneMarker: function cloneMarker(nodeWidth, nodeHeight, shapeFn, shapeFnArgs) {
    var clipId = 'clonemarker';

    var cloneMarkerStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('clip-path', 'url(#' + clipId + ')').set('fill', '#D2D2D2');

    var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

    return cloneMarkerSvg;
  },
  multimer: function multimer(shapeFn, shapeFnArgs) {
    var clipId = 'multimer';

    var multimerStyle = new Map().set('stroke', '#6A6A6A').set('fill', 'none').set('stroke-width', '3').set('clip-path', 'url(#' + clipId + ')');

    var multimerSvg = '\n      ' + baseShapes.clipPath(clipId, shapeFn, shapeFnArgs, new Map()) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([multimerStyle])) + '\n    ';
    return multimerSvg;
  }
};

module.exports = auxiliaryItems;

},{"./baseShapes.js":12,"text-width":3}],12:[function(_dereq_,module,exports){
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
    return baseRectangle(x, y, width, height, .32 * width, .32 * width, .32 * width, .32 * width, styleMap);
  },
  square: function square(x, y, length, styleMap) {
    return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
  },
  text: function text(t, x, y, styleMap) {
    return '<text x=\'' + x + '\' y=\'' + y + '\' ' + styleMap2Str(styleMap) + '>' + t + '</text>';
  }
};

module.exports = baseShapes;

},{"../util/svg.js":19}],13:[function(_dereq_,module,exports){
'use strict';

var svgStr = _dereq_('../util/svg').svgStr;
var sbgnData = _dereq_('../util/sbgn');

var auxiliaryItems = _dereq_('./auxiliaryItems');
var baseShapes = _dereq_('./baseShapes');

var containerNodes = {
  compartment: function compartment(node) {
    var auxItemWidth = 60;
    var auxItemHeight = 40;
    var uInfos = sbgnData.getUnitInfos(node);

    var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.compoundUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight, uInfos[0]) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var lineSvg = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    return [lineSvg, uInfoSvg]; // ordering of svg images matters
  }
};

module.exports = containerNodes;

},{"../util/sbgn":18,"../util/svg":19,"./auxiliaryItems":11,"./baseShapes":12}],14:[function(_dereq_,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var memoize = _dereq_('lodash.memoize');

var baseShapes = _dereq_('./baseShapes');
var auxiliaryItems = _dereq_('./auxiliaryItems');

var svgStr = _dereq_('../util/svg').svgStr;
var getUnitInfos = _dereq_('../util/sbgn').getUnitInfos;
var getStateVars = _dereq_('../util/sbgn').getStateVars;
var hasClonemarker = _dereq_('../util/sbgn').hasClonemarker;
var isMultimer = _dereq_('../util/sbgn').isMultimer;
var dimensions = _dereq_('../dimensions');

var entityPoolNodes = {
  unspecifiedEntity: function unspecifiedEntity(node) {
    var _dimensions$get = dimensions.get(node),
        nw = _dimensions$get.w,
        nh = _dimensions$get.h;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

    var shapeArgs = [nw / 2, nh / 2, (nh - 2) / 2, (nw - 2) / 2];

    var unspecEntitySvg = '\n      ' + baseShapes.ellipse.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.ellipse, shapeArgs) : '') + '\n    ';
    return svgStr(unspecEntitySvg, nw, nh, 0, 0, nw, nh);
  },
  simpleChemical: function simpleChemical(node) {
    var _dimensions$get2 = dimensions.get(node),
        nw = _dimensions$get2.w,
        nh = _dimensions$get2.h;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'white').set('fill-opacity', '1');

    var multimerShapeArgs = [(nw + 3) / 2, (nh + 3) / 2, (Math.min(nw, nh) - 2 - 5) / 2];
    var shapeArgs = [nw / 2, nh / 2, (Math.min(nh, nw) - 2) / 2];

    var uInfos = getUnitInfos(node);
    if (uInfos.length > 0) {
      shapeArgs = [nw / 2, nh / 2, (Math.min(nh, nw) - 2 - 5) / 2];
    }

    if (isMultimer(node)) {
      shapeArgs = [(nw - 3) / 2, (nh - 3) / 2, (Math.min(nh, nw) - 2 - 7) / 2];
    }

    var simpleChemicalSvg = '\n      ' + (isMultimer(node) ? auxiliaryItems.multimer(baseShapes.circle, multimerShapeArgs) : '') + '\n      ' + baseShapes.circle.apply(baseShapes, _toConsumableArray(shapeArgs).concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : '') + '\n      ' + (uInfos.length > 0 ? auxiliaryItems.unitOfInformation(nw / 2, 1, 0.4 * nw, 0.2 * nh, uInfos[0]) : '') + '\n    ';

    return svgStr(simpleChemicalSvg, nw, nh, 0, 0, nw, nh);
  },
  macromolecule: function macromolecule(node) {
    var _dimensions$get3 = dimensions.get(node),
        nw = _dimensions$get3.w,
        nh = _dimensions$get3.h;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none').set('fill', 'white').set('fill-opacity', '1');

    var multimerShapeArgs = [15, 10, .8 * nw, .8 * nh];
    var shapeArgs = [5, 5, nw - 10, nh - 10];

    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    if (uInfos.length > 0) {
      shapeArgs = [5, 5, .9 * nw, .9 * nh];
    }

    if (sVars.length > 0) {
      shapeArgs[3] = .85 * nh;
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 5, .83 * nw, .78 * nh];
    }

    var macromoleculeSvg = '\n      ' + (isMultimer(node) ? auxiliaryItems.multimer(baseShapes.roundRectangle, multimerShapeArgs) : '') + '\n      ' + baseShapes.roundRectangle.apply(baseShapes, _toConsumableArray(shapeArgs).concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.roundRectangle, shapeArgs) : '') + '\n      ' + (uInfos.length > 0 ? auxiliaryItems.unitOfInformation(nw / 3, 1, 0.4 * nw, 0.2 * nh, uInfos[0]) : '') + '\n      ' + (sVars.length > 0 ? auxiliaryItems.stateVariable(2 * nw / 4, nh - 0.225 * nh / 2, 0.1 * nh, sVars[0]) : '') + '\n    ';
    return svgStr(macromoleculeSvg, nw, nh, 0, 0, nw, nh);
  },
  nucleicAcidFeature: function nucleicAcidFeature(node) {
    var _dimensions$get4 = dimensions.get(node),
        nw = _dimensions$get4.w,
        nh = _dimensions$get4.h;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none').set('fill', 'white').set('fill-opacity', '1');

    var multimerShapeArgs = [15, 10, .8 * nw, .8 * nh];
    var shapeArgs = [1.5, 1.5, nw - 3, nh - 3];

    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    if (uInfos.length > 0) {
      shapeArgs = [5, 5, .9 * nw, .88 * nh];
    }

    if (sVars.length > 0) {
      shapeArgs[3] = .85 * nh;
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 5, .83 * nw, .78 * nh];
    }

    var nucleicAcidFeatureSvg = '\n      ' + (isMultimer(node) ? auxiliaryItems.multimer(baseShapes.roundBottomRectangle, multimerShapeArgs) : '') + '\n      ' + baseShapes.roundBottomRectangle.apply(baseShapes, _toConsumableArray(shapeArgs).concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.roundBottomRectangle, shapeArgs) : '') + '\n      ' + (uInfos.length > 0 ? auxiliaryItems.unitOfInformation(nw / 3, 1, 0.4 * nw, 0.2 * nh, uInfos[0]) : '') + '\n      ' + (sVars.length > 0 ? auxiliaryItems.stateVariable(2 * nw / 4, nh - 0.225 * nh / 2, 0.1 * nh, sVars[0]) : '') + '\n    ';
    return svgStr(nucleicAcidFeatureSvg, nw, nh, 0, 0, nw, nh);
  },
  complex: function complex(node) {
    var auxItemWidth = 60;
    var auxItemHeight = 24;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.compoundCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.compoundUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight, uInfos[0]) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.compoundStateVar(2, 0, auxItemWidth - 5, auxItemHeight, sVars[0]) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    return [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg]; // ordering of svg images matters
  },
  sourceAndSink: function sourceAndSink(node) {
    var _dimensions$get5 = dimensions.get(node),
        nw = _dimensions$get5.w,
        nh = _dimensions$get5.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var radius = (nw - 2) / 2;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-linecap', 'square').set('stroke-width', '1.5').set('fill', 'none');

    var shapeArgs = [centerX, centerY, radius];

    var sourceAndSinkSvg = '\n      ' + baseShapes.circle.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : '') + '\n      ' + baseShapes.line(0, nh, nw, 0, styleMap) + '\n    ';

    return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
  },
  perturbingAgent: function perturbingAgent(node) {
    var _dimensions$get6 = dimensions.get(node),
        nw = _dimensions$get6.w,
        nh = _dimensions$get6.h;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

    var shapeArgs = [1, 1, nw - 4, nh - 2];

    var uInfos = getUnitInfos(node);

    if (uInfos.length > 0) {
      shapeArgs = [5, 5, .9 * nw, .9 * nh];
    }

    var perturbingAgentSvg = '\n      ' + baseShapes.concaveHexagon.apply(baseShapes, _toConsumableArray(shapeArgs).concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.concaveHexagon, shapeArgs) : '') + '\n      ' + (uInfos.length > 0 ? auxiliaryItems.unitOfInformation(nw / 3, 1, 0.4 * nw, 0.2 * nh, uInfos[0]) : '') + '\n    ';
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;

},{"../dimensions":9,"../util/sbgn":18,"../util/svg":19,"./auxiliaryItems":11,"./baseShapes":12,"lodash.memoize":1}],15:[function(_dereq_,module,exports){
'use strict';

var containerNodes = _dereq_('./containerNodes.js');
var entityPoolNodes = _dereq_('./entityPoolNodes.js');
var processNodes = _dereq_('./processNodes.js');

var sbgnData = _dereq_('../util/sbgn.js');

var sbgnNodeShapeMap = new Map()
// process nodes
.set('process', processNodes.process).set('omitted process', processNodes.process).set('uncertain process', processNodes.process).set('association', processNodes.association).set('dissociation', processNodes.dissociation).set('phenotype', processNodes.phenotype)

// entity pool nodes
.set('source and sink', entityPoolNodes.sourceAndSink).set('unspecified entity', entityPoolNodes.unspecifiedEntity).set('simple chemical', entityPoolNodes.simpleChemical).set('simple chemical multimer', entityPoolNodes.simpleChemical).set('macromolecule', entityPoolNodes.macromolecule).set('macromolecule multimer', entityPoolNodes.macromolecule).set('nucleic acid feature', entityPoolNodes.nucleicAcidFeature).set('nucleic acid feature multimer', entityPoolNodes.nucleicAcidFeature).set('complex', entityPoolNodes.complex).set('complex multimer', entityPoolNodes.complex).set('perturbing agent', entityPoolNodes.perturbingAgent)

// container nodes
.set('compartment', containerNodes.compartment);

var draw = function draw(node) {
  var sbgnClass = sbgnData.sbgnClass(node);
  var shapeFn = sbgnNodeShapeMap.get(sbgnClass);
  if (shapeFn === undefined) {
    throw new TypeError(sbgnClass + ' does not have a shape implementation');
  }
  return shapeFn(node);
};

module.exports = {
  draw: draw
};

},{"../util/sbgn.js":18,"./containerNodes.js":13,"./entityPoolNodes.js":14,"./processNodes.js":16}],16:[function(_dereq_,module,exports){
'use strict';

var baseShapes = _dereq_('./baseShapes');
var auxiliaryItems = _dereq_('./auxiliaryItems');

var svgStr = _dereq_('../util/svg').svgStr;
var dimensions = _dereq_('../dimensions');

var processNodes = {
  process: function process(node) {
    var _dimensions$get = dimensions.get(node),
        nw = _dimensions$get.w,
        nh = _dimensions$get.h;

    var squareStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

    var processSvg = '\n      ' + baseShapes.square(1, 1, Math.min(nw, nh) - 2, squareStyle) + '\n    ';
    return svgStr(processSvg, nw, nh, 0, 0, nw, nh);
  },
  association: function association(node) {
    var _dimensions$get2 = dimensions.get(node),
        nw = _dimensions$get2.w,
        nh = _dimensions$get2.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var radius = (Math.min(nw, nh) - 2) / 2;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', '#6A6A6A').set('fill-opacity', '0');

    var associationSvg = '\n      ' + baseShapes.circle(centerX, centerY, radius, styleMap) + '\n    ';
    return svgStr(associationSvg, nw, nh, 0, 0, nw, nh);
  },
  dissociation: function dissociation(node) {
    var _dimensions$get3 = dimensions.get(node),
        nw = _dimensions$get3.w,
        nh = _dimensions$get3.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var outerRadius = (Math.min(nw, nh) - 2) / 2;
    var innerRadius = (Math.min(nw, nh) - 2) / 3;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

    var dissociationSvg = '\n      ' + baseShapes.circle(centerX, centerY, outerRadius, styleMap) + '\n      ' + baseShapes.circle(centerX, centerY, innerRadius, styleMap) + '\n    ';
    return svgStr(dissociationSvg, nw, nh, 0, 0, nw, nh);
  },
  phenotype: function phenotype(node) {
    var _dimensions$get4 = dimensions.get(node),
        nw = _dimensions$get4.w,
        nh = _dimensions$get4.h;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '3').set('fill', 'none');

    var shapeArgs = [1, 1, nw - 3, nh - 3];

    var phenotypeSvg = '\n      ' + baseShapes.hexagon.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (node.data('clonemarker') ? auxiliaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.hexagon, shapeArgs) : '') + '\n    ';
    return svgStr(phenotypeSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = processNodes;

},{"../dimensions":9,"../util/svg":19,"./auxiliaryItems":11,"./baseShapes":12}],17:[function(_dereq_,module,exports){
'use strict';

var elementStyle = _dereq_('./element.js');

var sbgnShapes = _dereq_('./glyph');
var sbgnDimensions = _dereq_('./dimensions');

var isMultimer = _dereq_('./util/sbgn.js').isMultimer;
var hasAuxItems = _dereq_('./util/sbgn.js').hasAuxItems;

var sbgnStyleSheet = function sbgnStyleSheet(cytoscape) {

  return cytoscape.stylesheet()
  // general node style
  .selector('node').css({
    'shape': function shape(node) {
      return elementStyle.sbgnShape(node);
    },
    'content': function content(node) {
      return elementStyle.sbgnContent(node);
    },
    'font-size': function fontSize(node) {
      return elementStyle.labelTextSize(node);
    },
    'text-valign': 'center',
    'text-halign': 'center',
    'border-width': 1.5,
    'border-color': '#555',
    'background-color': '#f6f6f6',
    'background-opacity': 0.5,
    'text-opacity': 1,
    'opacity': 1
  }).selector('node:selected').css({
    'background-color': '#d67614',
    'target-arrow-color': '#000',
    'text-outline-color': '#000'
  }).selector('node:active').css({
    'background-opacity': 0.7, 'overlay-color': '#d67614',
    'overlay-padding': '14'
  })

  // every process/entity pool node needs these properties
  .selector('\n          node[class="process"], node[class="uncertain process"], node[class="omitted process"],\n          node[class="association"], node[class="dissociation"],\n          node[class="phenotype"],\n          node[class="source and sink"],\n          node[class="perturbing agent"],\n          node[class="unspecified entity"],\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="simple chemical"], node[class="simple chemical multimer"]\n        ').css({
    'background-image': function backgroundImage(node) {
      return sbgnShapes.draw(node);
    },
    'width': function width(node) {
      return sbgnDimensions.width(node);
    },
    'height': function height(node) {
      return sbgnDimensions.height(node);
    },
    'background-fit': 'none',
    'background-width': '100%',
    'background-height': '100%',
    'background-clip': 'none',
    'background-repeat': 'no-repeat',
    'border-width': 0
  })

  // process node specific style
  .selector('node[class="association"], node[class="dissociation"]').css({
    'background-opacity': 1
  }).selector('node[class="association"]').css({
    'background-color': '#6B6B6B'
  })

  // entity pool node specific styles
  .selector('node[class="source and sink"]').css({
    'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0'
  }).selector('node[class="tag"]').css({
    'width': function width(node) {
      return sbgnDimensions.width(node);
    },
    'height': function height(node) {
      return sbgnDimensions.height(node);
    },
    'shape-polygon-points': '-1, -1,   0.25, -1,   1, 0,    0.25, 1,    -1, 1'
  }).selector('node[class="perturbing agent"]').css({
    'shape-polygon-points': '-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95'
  })

  // entity pool nodes that have one or more of (units of information, state variables, multimer)
  .selector('\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="simple chemical"], node[class="simple chemical multimer"],\n          node[class="perturbing agent"]\n        ').css({
    'padding': function padding(node) {
      return isMultimer(node) || hasAuxItems(node) ? 5 : 0;
    },
    'background-width': function backgroundWidth(node) {
      return isMultimer(node) || hasAuxItems(node) ? '104%' : '100%';
    },
    'background-height': function backgroundHeight(node) {
      return isMultimer(node) || hasAuxItems(node) ? '104%' : '100%';
    }
  })

  // compound node specific style
  .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]').css({
    'border-width': 4,
    'compound-sizing-wrt-labels': 'exclude',
    'background-opacity': .2,
    'text-valign': 'bottom',
    'text-halign': 'center'
  }).selector('node[class="complex"], node[class="complex multimer"]').css({
    'background-image': function backgroundImage(node) {
      return sbgnShapes.draw(node);
    },
    'background-width': ['100%', '100%', '100%'],
    'background-position-x': ['0%', '0%', '0%', '25%', '88%'], // order: line, line, clonemarker, uinfo, svar
    'background-position-y': ['100%', '22px', '100%', '0%', '0%'],
    'background-fit': ['contain', 'contain', 'none', 'none'],
    'background-clip': 'node',
    'padding': '22px',
    'height': '5px',
    'width': '5px'
  }).selector('node[class="compartment"]').css({
    'background-image': function backgroundImage(node) {
      return sbgnShapes.draw(node);
    }, // cache this
    'background-width': ['100%'],
    'background-position-x': ['0%', '25%'], // order: line, line, uinfo
    'background-position-y': ['38px', '0%'],
    'background-fit': ['contain', 'none'],
    'background-clip': 'node',
    'padding': '38px'
  })

  // TODO: cached version of multi-img compounds
  // .selector('node[class="complex"], node[class="complex multimer"]')
  // .css({
  //   // function that generates the bg image and properties
  //   // 'background-image': (node) => sbgnShapes.draw(node).images, // generate img and img properties
  //   // 'background-width': (node) => sbgnShapes.draw(node).widths
  //   // 'background-height': (node) => sbgnShapes.draw(node).heights
  //   // 'background-position-x': (node) => sbgnShapes.draw(node).xPositions
  //   // 'background-position-y': (node) => sbgnShapes.draw(node).yPositions
  //   // 'background-fit': (node) => sbgnShapes.draw(node).imgFits
  //   // 'background-clip': (node) => sbgnShapes.draw(node).imgClips
  // })

  // edge styling
  .selector('edge').css({
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
  })

  // core
  .selector('core').css({
    'selection-box-color': '#d67614',
    'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
  });
};

module.exports = sbgnStyleSheet;

},{"./dimensions":9,"./element.js":10,"./glyph":15,"./util/sbgn.js":18}],18:[function(_dereq_,module,exports){
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
  }
};

module.exports = sbgnDataHandler;

},{}],19:[function(_dereq_,module,exports){
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

      s += k + '=' + "'" + v + "'" + ' ';
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
  var vbX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var vbY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var vbWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 100;
  var vbHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 100;

  var parser = new DOMParser();
  var svgText = '<svg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' width=\'' + width + '\' height=\'' + height + '\' viewBox=\'' + vbX + ' ' + vbY + ' ' + vbWidth + ' ' + vbHeight + '\'>' + svgStr + '</svg>';
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

var svgStr = function svgStr(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) {
  var s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);
  var data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

  return data;
};

module.exports = {
  svgStr: svgStr,
  styleMap2Str: styleMap2Str
};

},{}]},{},[8])(8)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvc2JnblN0eWxlL2RpbWVuc2lvbnMuanMiLCJzcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJzcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwic3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwic3JjL3NiZ25TdHlsZS9nbHlwaC9jb250YWluZXJOb2Rlcy5qcyIsInNyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwic3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsInNyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwic3JjL3NiZ25TdHlsZS9ncmFwaC5qcyIsInNyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwic3JjL3NiZ25TdHlsZS91dGlsL3N2Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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V2pDLFNBQU8sQ0FBUDtBQUNELENBWkQ7O0FBY0EsSUFBTSxNQUFNLFNBQU4sR0FBTSxDQUFDLE1BQUQsRUFBd0Y7QUFBQSxNQUEvRSxLQUErRSx1RUFBdkUsR0FBdUU7QUFBQSxNQUFsRSxNQUFrRSx1RUFBekQsR0FBeUQ7QUFBQSxNQUFwRCxHQUFvRCx1RUFBOUMsQ0FBOEM7QUFBQSxNQUEzQyxHQUEyQyx1RUFBckMsQ0FBcUM7QUFBQSxNQUFsQyxPQUFrQyx1RUFBeEIsR0FBd0I7QUFBQSxNQUFuQixRQUFtQix1RUFBUixHQUFROztBQUNsRyxNQUFNLFNBQVMsSUFBSSxTQUFKLEVBQWY7QUFDQSxNQUFJLGlGQUF5RSxLQUF6RSxvQkFBMkYsTUFBM0YscUJBQStHLEdBQS9HLFNBQXNILEdBQXRILFNBQTZILE9BQTdILFNBQXdJLFFBQXhJLFdBQXFKLE1BQXJKLFdBQUo7QUFDQSxTQUFPLE9BQU8sZUFBUCxDQUF1QixPQUF2QixFQUFnQyxVQUFoQyxFQUE0QyxlQUFuRDtBQUNELENBSkQ7O0FBTUEsSUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCLGNBQXpCLEVBQXlDLFFBQXpDLEVBQW1ELFFBQW5ELEVBQTZELFlBQTdELEVBQTJFLGFBQTNFLEVBQTZGO0FBQzFHLE1BQUksSUFBSSxJQUFJLE9BQUosRUFBYSxhQUFiLEVBQTRCLGNBQTVCLEVBQTRDLFFBQTVDLEVBQXNELFFBQXRELEVBQWdFLFlBQWhFLEVBQThFLGFBQTlFLENBQVI7QUFDQSxNQUFJLE9BQU8sK0JBQStCLEtBQUssRUFBRSxTQUFQLENBQTFDOztBQUVBLFNBQU8sSUFBUDtBQUNELENBTEQ7O0FBT0EsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsVUFBUSxNQURPO0FBRWYsZ0JBQWM7QUFGQyxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gQXNzaWduIGNhY2hlIHRvIGBfLm1lbW9pemVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBzdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0aWYodHlwZW9mIGNhbnZhcy5nZXRDb250ZXh0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0cmV0dXJuICEhY29udGV4dCAmJiAodHlwZW9mIGNvbnRleHQubWVhc3VyZVRleHQgPT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBleHRlbmQoe1xuXHRcdFx0c3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0dmFyaWFudDogJ25vcm1hbCcsXG5cdFx0XHR3ZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRmYW1pbHk6ICdzYW5zLXNlcmlmJyxcblx0XHRcdGFsaWduOiAnc3RhcnQnLFxuXHRcdFx0YmFzZWxpbmU6ICdhbHBoYWJldGljJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIHNpemUgPSBvcHRpb25zLnNpemU7XG5cdFx0aWYodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSBzaXplID0gc2l6ZSArICdweCc7XG5cblx0XHRjb250ZXh0LmZvbnQgPSB1dGlsLmZvcm1hdCgnJXMgJXMgJXMgJXMgJXMnLFxuXHRcdFx0b3B0aW9ucy5zdHlsZSxcblx0XHRcdG9wdGlvbnMudmFyaWFudCxcblx0XHRcdG9wdGlvbnMud2VpZ2h0LFxuXHRcdFx0c2l6ZSxcblx0XHRcdG9wdGlvbnMuZmFtaWx5KTtcblx0XHRjb250ZXh0LnRleHRBbGlnbiA9IG9wdGlvbnMuYWxpZ247XG5cdFx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSB0cnVlO1xuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRlZCgpID8gaW5pdGlhbGl6ZSgpIDogKGZ1bmN0aW9uKCkge1xuXHR2YXIgd2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHdpZHRoO1xufSgpKTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJsZXQgc2JnblN0eWxlU2hlZXQgPSByZXF1aXJlKCcuL3NiZ25TdHlsZS9ncmFwaCcpO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN5dG9zY2FwZSl7XG4gIHJldHVybiBzYmduU3R5bGVTaGVldChjeXRvc2NhcGUpO1xufTtcbiIsImNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi91dGlsL3NiZ24uanMnKTtcblxuY29uc3Qgc2Jnbk5vZGVEaW1lbnNpb25zID0gbmV3IE1hcCgpXG4uc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCB7dzogNDAsIGg6IDQwfSlcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCcsIHt3OiA2MCwgaDogNjB9KVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyJywge3c6IDYwLCBoOiA2MH0pXG4uc2V0KCdtYWNyb21vbGVjdWxlJywge3c6IDEwMCwgaDogNjB9KVxuLnNldCgnbWFjcm9tb2xlY3VsZSBtdWx0aW1lcicsIHt3OiAxMDAsIGg6IDYwfSlcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywge3c6IDEwMCwgaDogNjB9KVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXInLCB7dzogMTAwLCBoOiA2MH0pXG4uc2V0KCdjb21wbGV4Jywge3c6IDAsIGg6IDB9KVxuLnNldCgnY29tcGxleCBtdWx0aW1lcicsIHt3OiAwLCBoOiAwfSlcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHt3OiA2MCwgaDogNjB9KVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHt3OiAxNDAsIGg6IDYwfSlcblxuLnNldCgncGhlbm90eXBlJywge3c6IDE0MCwgaDogNjB9KVxuLnNldCgncHJvY2VzcycsIHt3OjI1LCBoOiAyNX0pXG4uc2V0KCd1bmNlcnRhaW4gcHJvY2VzcycsIHt3OjI1LCBoOiAyNX0pXG4uc2V0KCdvbWl0dGVkIHByb2Nlc3MnLCB7dzoyNSwgaDogMjV9KVxuLnNldCgnYXNzb2NpYXRpb24nLCB7dzoyNSwgaDogMjV9KVxuLnNldCgnZGlzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1fSlcblxuLnNldCgnY29tcGFydG1lbnQnLCB7dzogMjAwLCBoOiAxNTB9KVxuXG4uc2V0KCd0YWcnLCB7dzogMTAwLCBoOiA2NX0pXG4uc2V0KCdhbmQnLCB7dzogNDAsIGg6IDQwfSlcbi5zZXQoJ29yJywge3c6IDQwLCBoOiA0MH0pXG4uc2V0KCdub3QnLCB7dzogNDAsIGg6IDQwfSk7XG5cblxuXG5jb25zdCBnZXQgPSAobm9kZSkgPT4ge1xuICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gIGNvbnN0IGRpbSA9IHNiZ25Ob2RlRGltZW5zaW9ucy5nZXQoc2JnbkNsYXNzKTtcbiAgaWYgKGRpbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0YCk7XG4gIH1cbiAgcmV0dXJuIGRpbTtcbn07XG5cbmNvbnN0IHdpZHRoID0gKG5vZGUpID0+IHtcbiAgcmV0dXJuIGdldChub2RlKS53O1xufTtcblxuY29uc3QgaGVpZ2h0ID0gKG5vZGUpID0+IHtcbiAgcmV0dXJuIGdldChub2RlKS5oO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhlaWdodDogaGVpZ2h0LFxuICB3aWR0aDogd2lkdGgsXG4gIGdldDogZ2V0XG59O1xuIiwiY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuL3V0aWwvc2Jnbi5qcycpO1xudmFyIGVsZW1lbnRTdHlsZSA9IHt9O1xuXG5lbGVtZW50U3R5bGUuc2JnblNoYXBlID0gKG5vZGUpID0+IHtcbiAgbGV0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKTtcbiAgaWYgKHNiZ25DbGFzcy5lbmRzV2l0aCgnIG11bHRpbWVyJykpIHtcbiAgICBzYmduQ2xhc3MgPSBzYmduQ2xhc3MucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICB9XG5cbiAgaWYgKHNiZ25DbGFzcyA9PSAncGhlbm90eXBlJykge1xuICAgIHJldHVybiAnaGV4YWdvbic7XG4gIH1cblxuICBpZiAoc2JnbkNsYXNzID09ICdjb21wYXJ0bWVudCcpIHtcbiAgICByZXR1cm4gJ2JhcnJlbCc7XG4gIH1cblxuICBpZiAoc2JnbkNsYXNzID09ICdwcm9jZXNzJyB8fCBzYmduQ2xhc3MgPT0gJ29taXR0ZWQgcHJvY2VzcycgfHwgc2JnbkNsYXNzID09ICd1bmNlcnRhaW4gcHJvY2VzcycpIHtcbiAgICByZXR1cm4gJ3NxdWFyZSc7XG4gIH1cblxuICBpZiAoc2JnbkNsYXNzID09ICdwZXJ0dXJiaW5nIGFnZW50JyB8fCBzYmduQ2xhc3MgPT0gJ3RhZydcbiAgICB8fCBzYmduQ2xhc3MgPT0gJ3NvdXJjZSBhbmQgc2luaycpIHtcbiAgICByZXR1cm4gJ3BvbHlnb24nO1xuICB9XG5cbiAgaWYgKHNiZ25DbGFzcyA9PSAnZGlzc29jaWF0aW9uJyB8fCBzYmduQ2xhc3MgPT0gJ2Fzc29jaWF0aW9uJyB8fCBzYmduQ2xhc3MgPT0gJ3NpbXBsZSBjaGVtaWNhbCcpIHtcbiAgICByZXR1cm4gJ2VsbGlwc2UnO1xuICB9XG5cbiAgaWYgKCBzYmduQ2xhc3MgPT0gJ251Y2xlaWMgYWNpZCBmZWF0dXJlJyB8fCBzYmduQ2xhc3MgPT0gJ21hY3JvbW9sZWN1bGUnKSB7XG4gICAgcmV0dXJuICdyb3VuZHJlY3RhbmdsZSc7XG4gIH1cblxuICBpZiAoc2JnbkNsYXNzID09ICdjb21wbGV4Jykge1xuICAgIHJldHVybiAnY3V0cmVjdGFuZ2xlJztcbiAgfVxuICByZXR1cm4gJ2VsbGlwc2UnO1xufTtcblxuZWxlbWVudFN0eWxlLnNiZ25BcnJvd1NoYXBlID0gKGVkZ2UpID0+IHtcbiAgbGV0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhlZGdlKTtcbiAgaWYgKHNiZ25DbGFzcyA9PSAnbmVjZXNzYXJ5IHN0aW11bGF0aW9uJykge1xuICAgIHJldHVybiAndHJpYW5nbGUtY3Jvc3MnO1xuICB9XG4gIGlmIChzYmduQ2xhc3MgPT0gJ2luaGliaXRpb24nKSB7XG4gICAgcmV0dXJuICd0ZWUnO1xuICB9XG4gIGlmIChzYmduQ2xhc3MgPT0gJ2NhdGFseXNpcycpIHtcbiAgICByZXR1cm4gJ2NpcmNsZSc7XG4gIH1cbiAgaWYgKHNiZ25DbGFzcyA9PSAnc3RpbXVsYXRpb24nIHx8IHNiZ25DbGFzcyA9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gJ3RyaWFuZ2xlJztcbiAgfVxuICBpZiAoc2JnbkNsYXNzID09ICdtb2R1bGF0aW9uJykge1xuICAgIHJldHVybiAnZGlhbW9uZCc7XG4gIH1cbiAgcmV0dXJuICdub25lJztcbn07XG5cbmVsZW1lbnRTdHlsZS5zYmduQ29udGVudCA9IChub2RlKSA9PiB7XG4gIGxldCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG5cbiAgaWYgKHNiZ25DbGFzcy5lbmRzV2l0aCgnIG11bHRpbWVyJykpIHtcbiAgICBzYmduQ2xhc3MgPSBzYmduQ2xhc3MucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICB9XG5cbiAgaWYgKHNiZ25DbGFzcyA9PT0gJ21hY3JvbW9sZWN1bGUnIHx8IHNiZ25DbGFzcyA9PT0gJ3NpbXBsZSBjaGVtaWNhbCdcbiAgICAgIHx8IHNiZ25DbGFzcyA9PT0gJ3BoZW5vdHlwZSdcbiAgICAgIHx8IHNiZ25DbGFzcyA9PT0gJ3Vuc3BlY2lmaWVkIGVudGl0eScgfHwgc2JnbkNsYXNzID09PSAnbnVjbGVpYyBhY2lkIGZlYXR1cmUnXG4gICAgICB8fCBzYmduQ2xhc3MgPT09ICdwZXJ0dXJiaW5nIGFnZW50JyB8fCBzYmduQ2xhc3MgPT09ICd0YWcnXG4gICAgICB8fCBzYmduQ2xhc3MgPT09ICdjb21wYXJ0bWVudCcgfHwgc2JnbkNsYXNzID09PSAnY29tcGxleCcpIHtcbiAgICBjb250ZW50ID0gbm9kZS5kYXRhKCdsYWJlbCcpID8gbm9kZS5kYXRhKCdsYWJlbCcpIDogJyc7XG4gIH1cbiAgaWYgKHNiZ25DbGFzcyA9PSAnYW5kJykge1xuICAgIGNvbnRlbnQgPSAnQU5EJztcbiAgfVxuICBpZiAoc2JnbkNsYXNzID09ICdvcicpIHtcbiAgICBjb250ZW50ID0gJ09SJztcbiAgfVxuICBpZiAoc2JnbkNsYXNzID09ICdub3QnKSB7XG4gICAgY29udGVudCA9ICdOT1QnO1xuICB9XG4gIGlmIChzYmduQ2xhc3MgPT0gJ29taXR0ZWQgcHJvY2VzcycpIHtcbiAgICBjb250ZW50ID0gJ1xcXFxcXFxcJztcbiAgfVxuICBpZiAoc2JnbkNsYXNzID09ICd1bmNlcnRhaW4gcHJvY2VzcycpIHtcbiAgICBjb250ZW50ID0gJz8nO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBzY2FsZWRUZXh0U2l6ZSA9IChoZWlnaHQsIHNpemVDb2VmZmljaWVudCA9IDEpID0+IHtcbiAgcmV0dXJuIChoZWlnaHQgLyAyLjQ1KSAqIHNpemVDb2VmZmljaWVudDtcbn07XG5cbmVsZW1lbnRTdHlsZS5sYWJlbFRleHRTaXplID0gKG5vZGUpID0+IHtcbiAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpO1xuICBjb25zdCB0ZXh0U2NhbGluZ0NvbnN0YW50ID0gNDA7XG5cbiAgaWYgKHNiZ25DbGFzcyA9PT0gJ2Fzc29jaWF0aW9uJyB8fCBzYmduQ2xhc3MgPT09ICdkaXNzb2NpYXRpb24nKSB7XG4gICAgcmV0dXJuIDIwO1xuICB9XG4gIGlmIChzYmduQ2xhc3MuaW5jbHVkZXMoJ2NvbXBsZXgnKSkge1xuICAgIHJldHVybiAxNjtcbiAgfVxuXG4gIGlmIChzYmduQ2xhc3MgPT09ICdjb21wYXJ0bWVudCcpIHtcbiAgICByZXR1cm4gNTA7XG4gIH1cblxuICBpZiAoc2JnbkNsYXNzLmVuZHNXaXRoKCdwcm9jZXNzJykpIHtcbiAgICByZXR1cm4gc2NhbGVkVGV4dFNpemUodGV4dFNjYWxpbmdDb25zdGFudCwgMS41KTtcbiAgfVxuXG4gIHJldHVybiBzY2FsZWRUZXh0U2l6ZSh0ZXh0U2NhbGluZ0NvbnN0YW50KTtcbn07XG5cbmVsZW1lbnRTdHlsZS5jYXJkaW5hbGl0eURpc3RhbmNlID0gKGVkZ2UpID0+IHtcbiAgY29uc3Qgc3JjUG9zID0gZWRnZS5zb3VyY2UoKS5wb3NpdGlvbigpO1xuICBjb25zdCB0Z3RQb3MgPSBlZGdlLnRhcmdldCgpLnBvc2l0aW9uKCk7XG5cbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHNyY1Bvcy54IC0gdGd0UG9zLngpLCAyKSArIE1hdGgucG93KChzcmNQb3MueSAtIHRndFBvcy55KSwgMikpO1xuICByZXR1cm4gZGlzdGFuY2UgKiAwLjE1O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50U3R5bGU7XG4iLCJjb25zdCB0ZXh0V2lkdGggPSByZXF1aXJlKCd0ZXh0LXdpZHRoJyk7XG5cbmNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMuanMnKTtcblxuY29uc3Qgc3RhdGVWYXJMYWJlbCA9IChzdGF0ZVZhcikgPT4ge1xuICBjb25zdCB2YXJpYWJsZSA9IHN0YXRlVmFyLnN0YXRlLnZhcmlhYmxlO1xuICBjb25zdCB2YWx1ZSA9IHN0YXRlVmFyLnN0YXRlLnZhbHVlO1xuICBpZiAodmFsdWUgJiYgdmFyaWFibGUpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9QCR7dmFyaWFibGV9YDtcbiAgfVxuICBpZiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSB7XG5cbiAgY29tcG91bmRDbG9uZU1hcmtlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgY29uc3QgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XG4gIH0sXG5cblxuICBjb21wb3VuZFVuaXRPZkluZm9ybWF0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB1SW5mbykge1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTQ7XG4gICAgY29uc3QgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzQnKVxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xuXG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcbiAgICAuc2V0KCdmb250LXNpemUnLCBgJHtmb250U2l6ZX1gKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgLnNldCgnc3Ryb2tlJywgJ2JsYWNrJyk7XG5cbiAgICBjb25zdCB1SW5mb1dpZHRoID0gdGV4dFdpZHRoKHRleHQsIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgNTtcblxuICAgIGNvbnN0IHVuaXRPZkluZm9ybWF0aW9uU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMucm91bmRSZWN0YW5nbGUoeCwgeSwgdUluZm9XaWR0aCwgaGVpZ2h0LCB1aW5mb1JlY3RTdHlsZSl9XG4gICAgICAke2Jhc2VTaGFwZXMudGV4dCh0ZXh0LCB4ICsgKHVJbmZvV2lkdGggLyAyKSwgeSArICggaGVpZ2h0IC8gMiksICB0ZXh0U3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gdW5pdE9mSW5mb3JtYXRpb25Tdmc7XG4gIH0sXG5cbiAgY29tcG91bmRTdGF0ZVZhciAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhdGVWYXIpIHtcbiAgICBjb25zdCBmb250U2l6ZSA9IDE0O1xuXG4gICAgY29uc3Qgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNCcpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfWApXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAuc2V0KCdzdHJva2UnLCAnYmxhY2snKTtcblxuICAgIGNvbnN0IHR3ID0gdGV4dFdpZHRoKHN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDEwO1xuICAgIGNvbnN0IHcgPSBNYXRoLm1heCh0dywgMzApO1xuICAgIGNvbnN0IHN0YXRldmFyaWFibGVTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5zdGFkaXVtKHgsIHksIHcsIGhlaWdodCwgc3RhdGVWYXJTdHlsZSl9XG4gICAgICAke2Jhc2VTaGFwZXMudGV4dChzdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeCArICggdyAvIDIgKSwgeSArIGhlaWdodCAvIDIsIHRleHRTdHlsZSl9XG4gICAgYDtcblxuICAgIHJldHVybiBzdGF0ZXZhcmlhYmxlU3ZnO1xuICB9LFxuXG5cbiAgc3RhdGVWYXJpYWJsZSAoeCwgeSwgcmFkaXVzLCBzdGF0ZVZhcikge1xuXG4gICAgY29uc3QgZm9udFNpemUgPSAxMjtcblxuICAgIGNvbnN0IHN0YXRlVmFyU3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgJzEnKTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfWApXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAuc2V0KCdzdHJva2UnLCAnYmxhY2snKTtcblxuICAgIGNvbnN0IHR3ID0gdGV4dFdpZHRoKHN0YXRlVmFyTGFiZWwoc3RhdGVWYXIsIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pLCAyMCk7XG4gICAgY29uc3Qgc3RhdGVWYXJXaWR0aCA9IE1hdGgubWF4KHR3ICogLjUsIDIwKTtcblxuICAgIGNvbnN0IHN0YXRldmFyaWFibGVTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5lbGxpcHNlKHgsIHksIHN0YXRlVmFyV2lkdGgsIHJhZGl1cywgc3RhdGVWYXJTdHlsZSl9XG4gICAgICAke2Jhc2VTaGFwZXMudGV4dChzdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeCwgeSwgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XG4gIH0sXG5cbiAgdW5pdE9mSW5mb3JtYXRpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHVuaXRJbmZvKSB7XG5cbiAgICBjb25zdCBmb250U2l6ZSA9IDEyO1xuICAgIGNvbnN0IHRleHQgPSB1bml0SW5mby5sYWJlbC50ZXh0O1xuXG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgJzEnKTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfWApXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAuc2V0KCdzdHJva2UnLCAnYmxhY2snKTtcblxuICAgIGNvbnN0IHVJbmZvV2lkdGggPSB0ZXh0V2lkdGgodGV4dCwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplfSkgKyA1O1xuXG4gICAgY29uc3QgdW5pdE9mSW5mb3JtYXRpb25TdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5yb3VuZFJlY3RhbmdsZSh4IC0gKHVJbmZvV2lkdGggLyAyKSwgeSwgdUluZm9XaWR0aCwgaGVpZ2h0LCB1aW5mb1JlY3RTdHlsZSl9XG4gICAgICAke2Jhc2VTaGFwZXMudGV4dCh0ZXh0LCB4LCB5ICsgKCBoZWlnaHQgLyAyKSwgIHRleHRTdHlsZSl9XG4gICAgYDtcblxuICAgIHJldHVybiB1bml0T2ZJbmZvcm1hdGlvblN2ZztcbiAgfSxcblxuICBjbG9uZU1hcmtlciAobm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBzaGFwZUZuLCBzaGFwZUZuQXJncykge1xuICAgIGNvbnN0IGNsaXBJZCA9ICdjbG9uZW1hcmtlcic7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxuICAgIC5zZXQoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7Y2xpcElkfSlgKVxuICAgIC5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jbGlwUGF0aChjbGlwSWQsIGJhc2VTaGFwZXMucmVjdGFuZ2xlLCAgWzAsIDMgKiBub2RlSGVpZ2h0IC8gNCwgbm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBuZXcgTWFwKCldKX1cbiAgICAgICR7c2hhcGVGbiguLi5zaGFwZUZuQXJncywgY2xvbmVNYXJrZXJTdHlsZSl9XG4gICAgYDtcblxuICAgIHJldHVybiBjbG9uZU1hcmtlclN2ZztcbiAgfSxcblxuICBtdWx0aW1lciAoc2hhcGVGbiwgc2hhcGVGbkFyZ3MpIHtcbiAgICBjb25zdCBjbGlwSWQgPSAnbXVsdGltZXInO1xuXG4gICAgY29uc3QgbXVsdGltZXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICczJylcbiAgICAuc2V0KCdjbGlwLXBhdGgnLCBgdXJsKCMke2NsaXBJZH0pYCk7XG5cbiAgICBjb25zdCBtdWx0aW1lclN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNsaXBQYXRoKGNsaXBJZCwgc2hhcGVGbiwgc2hhcGVGbkFyZ3MsIG5ldyBNYXAoKSl9XG4gICAgICAke3NoYXBlRm4oLi4uc2hhcGVGbkFyZ3MsIG11bHRpbWVyU3R5bGUpfVxuICAgIGA7XG4gICAgcmV0dXJuIG11bHRpbWVyU3ZnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF1eGlsaWFyeUl0ZW1zO1xuIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcuanMnKS5zdHlsZU1hcDJTdHI7XG5cbmxldCBiYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHcsIGgsIHIxLCByMiwgcjMsIHI0LCBzdHlsZU1hcCkge1xuICByZXR1cm4gYFxuICA8cGF0aCAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IGQ9J1xuICAgIE0gJHt4ICsgcjF9ICR7eX1cbiAgICBMICR7eCArIHcgLSByMn0gJHt5fSBRICR7eCArIHd9ICR7eX0gJHt4ICsgd30gJHt5ICsgcjJ9XG4gICAgTCAke3ggKyB3IH0gJHt5ICsgaCAtIHIzfSBRICR7eCArIHd9ICR7eSArIGh9ICR7eCArIHcgLSByM30gJHt5ICsgaH1cbiAgICBMICR7eCArIHI0fSAke3kgKyBofSBRICR7eH0gJHt5ICsgaH0gJHt4fSAke3kgKyBoIC0gcjR9XG4gICAgTCAke3h9ICR7eSArIHIxfSBRICR7eH0gJHt5fSAke3ggKyByMX0gJHt5fVxuICAgIFonXG4gIC8+XG4gIGA7XG59O1xuXG5jb25zdCBiYXNlU2hhcGVzID0ge1xuICBiYXJyZWwgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcblxuICAgIDxnICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XG4gICAgICA8cGF0aCBkPVwiTSAkezAqd2lkdGggKyB4fSAkey4wMypoZWlnaHQgKyB5fSBMICR7MCp3aWR0aCArIHh9ICR7Ljk3KmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IEwgJHswLjc1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBRICR7MC45NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHt3aWR0aCArIHh9ICR7MC45NSpoZWlnaHQgKyB5fVwiLz5cblxuICAgICAgPHBhdGggZD1cIk0gJHt3aWR0aCArIHh9ICR7Ljk1KmhlaWdodCArIHl9IEwgJHt3aWR0aCArIHh9ICR7MC4wNSpoZWlnaHQgKyB5fSBRICR7d2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gTCAkezAuMjUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswKndpZHRoICsgeH0gJHswLjAzKmhlaWdodCArIHl9XCIvPlxuICAgIDwvZz5cblxuICAgIGA7XG4gIH0sXG5cbiAgY2lyY2xlIChjeCwgY3ksIHIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8Y2lyY2xlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByPScke3J9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICBjbGlwUGF0aCAoaWQsIGJhc2VTaGFwZUZuLCBiYXNlU2hhcGVGbkFyZ3MsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9JyR7aWR9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxuICAgICAgICAke2Jhc2VTaGFwZUZuKC4uLmJhc2VTaGFwZUZuQXJncyl9XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgYDtcbiAgfSxcblxuICBjb25jYXZlSGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDB9LCAke3ggKyB3aWR0aH0sICR7eSArIDB9LCAke3ggKyAwLjg1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMH0sICR7eSArIGhlaWdodH0sICR7IHggKyAwLjE1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGN1dFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29ybmVyTGVuZ3RoLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPSdcbiAgICAgICR7eCArIDAqd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofVxuICAgICAgJHt4ICsgd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIDAqd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH1cbiAgICAgICdcbiAgICAvPlxuICAgIGA7XG4gIH0sXG5cbiAgZWxsaXBzZSAoY3gsIGN5LCByeCwgcnksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxlbGxpcHNlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByeD0nJHtyeH0nIHJ5PScke3J5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPlxuICAgIGA7XG4gIH0sXG5cbiAgaGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIGhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGxpbmUgKHgxLCB5MSwgeDIsIHkyLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPGxpbmUgeDE9JyR7eDF9JyB5MT0nJHt5MX0nIHgyPScke3gyfScgeTI9JyR7eTJ9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICByZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHJvdW5kQm90dG9tUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIC4zKmhlaWdodCwgLjMqaGVpZ2h0LCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgcm91bmRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3RhZGl1bSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAuMzIqd2lkdGgsIC4zMip3aWR0aCwgLjMyKndpZHRoLCAuMzIqd2lkdGgsIHN0eWxlTWFwKTtcbiAgfSxcblxuICBzcXVhcmUgKHgsIHksIGxlbmd0aCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCBsZW5ndGgsIGxlbmd0aCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHRleHQgKHQsIHgsIHksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8dGV4dCB4PScke3h9JyB5PScke3l9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PiR7dH08L3RleHQ+YDtcbiAgfVxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNoYXBlcztcbiIsImNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcblxuXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcbmNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcblxuY29uc3QgY29udGFpbmVyTm9kZXMgPSB7XG5cbiAgY29tcGFydG1lbnQgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSA2MDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gNDA7XG4gICAgY29uc3QgdUluZm9zID0gc2JnbkRhdGEuZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5jb21wb3VuZFVuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQsIHVJbmZvc1swXSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGxldCBsaW5lU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiBbbGluZVN2ZywgdUluZm9TdmddOyAvLyBvcmRlcmluZyBvZiBzdmcgaW1hZ2VzIG1hdHRlcnNcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJOb2RlcztcbiIsImNvbnN0IG1lbW9pemUgPSByZXF1aXJlKCdsb2Rhc2gubWVtb2l6ZScpO1xuXG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcblxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XG5jb25zdCBnZXRVbml0SW5mb3MgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5nZXRVbml0SW5mb3M7XG5jb25zdCBnZXRTdGF0ZVZhcnMgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5nZXRTdGF0ZVZhcnM7XG5jb25zdCBoYXNDbG9uZW1hcmtlciA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmhhc0Nsb25lbWFya2VyO1xuY29uc3QgaXNNdWx0aW1lciA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmlzTXVsdGltZXI7XG5jb25zdCBkaW1lbnNpb25zID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucycpO1xuXG5cbmNvbnN0IGVudGl0eVBvb2xOb2RlcyA9IHtcblxuICB1bnNwZWNpZmllZEVudGl0eSAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZGltZW5zaW9ucy5nZXQobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICBsZXQgc2hhcGVBcmdzID0gW253IC8gMiwgbmggLyAyLCAoIG5oIC0gMiApIC8gMiwgKCBudyAtIDIgKSAvIDJdO1xuXG4gICAgbGV0IHVuc3BlY0VudGl0eVN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmVsbGlwc2UoLi4uc2hhcGVBcmdzLCBzdHlsZU1hcCl9XG4gICAgICAke2hhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMuY2xvbmVNYXJrZXIobncsIG5oLCBiYXNlU2hhcGVzLmVsbGlwc2UsIHNoYXBlQXJncykgOiAnJ31cbiAgICBgO1xuICAgIHJldHVybiBzdmdTdHIodW5zcGVjRW50aXR5U3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgc2ltcGxlQ2hlbWljYWwgKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGRpbWVuc2lvbnMuZ2V0KG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzInKVxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsICcxJyk7XG5cbiAgICBjb25zdCBtdWx0aW1lclNoYXBlQXJncyA9IFsobncgKyAzKSAvIDIsIChuaCArIDMpIC8gMiwgKE1hdGgubWluKG53LCBuaCkgLSAyIC0gNSkgLyAyXTtcbiAgICBsZXQgc2hhcGVBcmdzID0gWyhudykgLyAyLCAobmgpIC8gMiwgKE1hdGgubWluKG5oLCBudykgLSAyKSAvIDJdO1xuXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGlmICh1SW5mb3MubGVuZ3RoID4gMCkge1xuICAgICAgc2hhcGVBcmdzID0gWyhudykgLyAyLCAobmgpIC8gMiwgKE1hdGgubWluKG5oLCBudykgLSAyICAtIDUpIC8gMl07XG4gICAgfVxuXG4gICAgaWYgKGlzTXVsdGltZXIobm9kZSkpIHtcbiAgICAgIHNoYXBlQXJncyA9IFsobncgLSAzKSAvIDIsIChuaCAtIDMpIC8gMiwgKE1hdGgubWluKG5oLCBudykgLSAyIC0gNykgLyAyXTtcbiAgICB9XG5cbiAgICBjb25zdCBzaW1wbGVDaGVtaWNhbFN2ZyA9XG4gICAgYFxuICAgICAgJHtpc011bHRpbWVyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGltZXIoYmFzZVNoYXBlcy5jaXJjbGUsIG11bHRpbWVyU2hhcGVBcmdzKSA6ICcnfVxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudywgbmgsIGJhc2VTaGFwZXMuY2lyY2xlLCBzaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke3VJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMudW5pdE9mSW5mb3JtYXRpb24oKG53IC8gMiksIDEsIDAuNCpudywgMC4yKm5oLCB1SW5mb3NbMF0pIDogJyd9XG4gICAgYDtcblxuICAgIHJldHVybiBzdmdTdHIoc2ltcGxlQ2hlbWljYWxTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfSxcblxuICBtYWNyb21vbGVjdWxlKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGRpbWVuc2lvbnMuZ2V0KG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzInKVxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgJzEnKTtcblxuICAgIGNvbnN0IG11bHRpbWVyU2hhcGVBcmdzID0gWzE1LCAxMCwgLjgqbncsIC44Km5oXTtcbiAgICBsZXQgc2hhcGVBcmdzID0gWzUsIDUsIG53IC0gMTAsIG5oIC0gMTBdO1xuXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICBzaGFwZUFyZ3MgPSBbNSwgNSwgLjkqbncsIC45Km5oXTtcbiAgICB9XG5cbiAgICBpZiAoc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgc2hhcGVBcmdzWzNdID0gLjg1Km5oO1xuICAgIH1cblxuICAgIGlmIChpc011bHRpbWVyKG5vZGUpKSB7XG4gICAgICBzaGFwZUFyZ3MgPSBbNSwgNSwgLjgzKm53LCAuNzgqbmhdO1xuICAgIH1cblxuICAgIGxldCBtYWNyb21vbGVjdWxlU3ZnID1cbiAgICBgXG4gICAgICAke2lzTXVsdGltZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aW1lcihiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlLCBtdWx0aW1lclNoYXBlQXJncykgOiAnJ31cbiAgICAgICR7YmFzZVNoYXBlcy5yb3VuZFJlY3RhbmdsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudyAtIDMsIG5oIC0gMywgYmFzZVNoYXBlcy5yb3VuZFJlY3RhbmdsZSwgc2hhcGVBcmdzKSA6ICcnfVxuICAgICAgJHt1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLnVuaXRPZkluZm9ybWF0aW9uKChudyAvIDMpLCAxLCAwLjQqbncsIDAuMipuaCwgdUluZm9zWzBdKSA6ICcnfVxuICAgICAgJHtzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMuc3RhdGVWYXJpYWJsZSgoMiAqIG53IC8gNCksIG5oIC0gKDAuMjI1Km5oIC8gMiksIDAuMSpuaCwgc1ZhcnNbMF0pIDogJyd9XG4gICAgYDtcbiAgICByZXR1cm4gc3ZnU3RyKG1hY3JvbW9sZWN1bGVTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfSxcblxuICBudWNsZWljQWNpZEZlYXR1cmUgKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGRpbWVuc2lvbnMuZ2V0KG5vZGUpO1xuXG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICdub25lJylcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAnMScpO1xuXG4gICAgY29uc3QgbXVsdGltZXJTaGFwZUFyZ3MgPSBbMTUsIDEwLCAuOCpudywgLjgqbmhdO1xuICAgIGxldCBzaGFwZUFyZ3MgPSBbMS41LCAxLjUsIG53IC0gMywgbmggLSAzXTtcblxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGlmICh1SW5mb3MubGVuZ3RoID4gMCkge1xuICAgICAgc2hhcGVBcmdzID0gWzUsIDUsIC45Km53LCAuODgqbmhdO1xuICAgIH1cblxuICAgIGlmIChzVmFycy5sZW5ndGggPiAwKSB7XG4gICAgICBzaGFwZUFyZ3NbM10gPSAuODUqbmg7XG4gICAgfVxuXG4gICAgaWYgKGlzTXVsdGltZXIobm9kZSkpIHtcbiAgICAgIHNoYXBlQXJncyA9IFs1LCA1LCAuODMqbncsIC43OCpuaF07XG4gICAgfVxuXG4gICAgbGV0IG51Y2xlaWNBY2lkRmVhdHVyZVN2ZyA9XG4gICAgYFxuICAgICAgJHtpc011bHRpbWVyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGltZXIoYmFzZVNoYXBlcy5yb3VuZEJvdHRvbVJlY3RhbmdsZSwgbXVsdGltZXJTaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke2Jhc2VTaGFwZXMucm91bmRCb3R0b21SZWN0YW5nbGUoLi4uc2hhcGVBcmdzLCBzdHlsZU1hcCl9XG4gICAgICAke2hhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMuY2xvbmVNYXJrZXIobncsIG5oLCBiYXNlU2hhcGVzLnJvdW5kQm90dG9tUmVjdGFuZ2xlLCBzaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke3VJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMudW5pdE9mSW5mb3JtYXRpb24oKG53IC8gMyksIDEsIDAuNCpudywgMC4yKm5oLCB1SW5mb3NbMF0pIDogJyd9XG4gICAgICAke3NWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5zdGF0ZVZhcmlhYmxlKCgyICogbncgLyA0KSwgbmggLSAoMC4yMjUqbmggLyAyKSwgMC4xKm5oLCBzVmFyc1swXSkgOiAnJ31cbiAgICBgO1xuICAgIHJldHVybiBzdmdTdHIobnVjbGVpY0FjaWRGZWF0dXJlU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgY29tcGxleCAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDYwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyNDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLmNvbXBvdW5kQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5jb21wb3VuZFVuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQsIHVJbmZvc1swXSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMuY29tcG91bmRTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0LCBzVmFyc1swXSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4gW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z107IC8vIG9yZGVyaW5nIG9mIHN2ZyBpbWFnZXMgbWF0dGVyc1xuICB9LFxuXG4gIHNvdXJjZUFuZFNpbmsgKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGRpbWVuc2lvbnMuZ2V0KG5vZGUpO1xuXG5cbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKG53IC0gMikgLyAyO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLWxpbmVjYXAnLCAnc3F1YXJlJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IHNoYXBlQXJncyA9IFtjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXNdO1xuXG4gICAgY29uc3Qgc291cmNlQW5kU2lua1N2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudywgbmgsIGJhc2VTaGFwZXMuY2lyY2xlLCBzaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke2Jhc2VTaGFwZXMubGluZSgwLCBuaCwgbncsIDAsIHN0eWxlTWFwKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN2Z1N0cihzb3VyY2VBbmRTaW5rU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGVydHVyYmluZ0FnZW50IChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBkaW1lbnNpb25zLmdldChub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcyJylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGxldCBzaGFwZUFyZ3MgPSBbMSwgMSwgbncgLSA0LCBuaCAtIDJdO1xuXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICBzaGFwZUFyZ3MgPSBbNSwgNSwgLjkqbncsIC45Km5oXTtcbiAgICB9XG5cbiAgICBjb25zdCBwZXJ0dXJiaW5nQWdlbnRTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jb25jYXZlSGV4YWdvbiguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudyAtIDMsIG5oIC0gMywgYmFzZVNoYXBlcy5jb25jYXZlSGV4YWdvbiwgc2hhcGVBcmdzKSA6ICcnfVxuICAgICAgJHt1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLnVuaXRPZkluZm9ybWF0aW9uKChudyAvIDMpLCAxLCAwLjQqbncsIDAuMipuaCwgdUluZm9zWzBdKSA6ICcnfVxuICAgIGA7XG4gICAgcmV0dXJuIHN2Z1N0cihwZXJ0dXJiaW5nQWdlbnRTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRpdHlQb29sTm9kZXM7XG4iLCJjb25zdCBjb250YWluZXJOb2RlcyA9IHJlcXVpcmUoJy4vY29udGFpbmVyTm9kZXMuanMnKTtcbmNvbnN0IGVudGl0eVBvb2xOb2RlcyA9IHJlcXVpcmUoJy4vZW50aXR5UG9vbE5vZGVzLmpzJyk7XG5jb25zdCBwcm9jZXNzTm9kZXMgPSByZXF1aXJlKCcuL3Byb2Nlc3NOb2Rlcy5qcycpO1xuXG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2Jnbi5qcycpO1xuXG5jb25zdCBzYmduTm9kZVNoYXBlTWFwID0gbmV3IE1hcCgpXG4vLyBwcm9jZXNzIG5vZGVzXG4uc2V0KCdwcm9jZXNzJywgcHJvY2Vzc05vZGVzLnByb2Nlc3MpXG4uc2V0KCdvbWl0dGVkIHByb2Nlc3MnLCBwcm9jZXNzTm9kZXMucHJvY2Vzcylcbi5zZXQoJ3VuY2VydGFpbiBwcm9jZXNzJywgcHJvY2Vzc05vZGVzLnByb2Nlc3MpXG4uc2V0KCdhc3NvY2lhdGlvbicsIHByb2Nlc3NOb2Rlcy5hc3NvY2lhdGlvbilcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIHByb2Nlc3NOb2Rlcy5kaXNzb2NpYXRpb24pXG4uc2V0KCdwaGVub3R5cGUnLCBwcm9jZXNzTm9kZXMucGhlbm90eXBlKVxuXG4vLyBlbnRpdHkgcG9vbCBub2Rlc1xuLnNldCgnc291cmNlIGFuZCBzaW5rJywgZW50aXR5UG9vbE5vZGVzLnNvdXJjZUFuZFNpbmspXG4uc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCBlbnRpdHlQb29sTm9kZXMudW5zcGVjaWZpZWRFbnRpdHkpXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCBlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwpXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwgbXVsdGltZXInLCBlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwpXG4uc2V0KCdtYWNyb21vbGVjdWxlJywgZW50aXR5UG9vbE5vZGVzLm1hY3JvbW9sZWN1bGUpXG4uc2V0KCdtYWNyb21vbGVjdWxlIG11bHRpbWVyJywgZW50aXR5UG9vbE5vZGVzLm1hY3JvbW9sZWN1bGUpXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUpXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lcicsIGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUpXG4uc2V0KCdjb21wbGV4JywgZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgpXG4uc2V0KCdjb21wbGV4IG11bHRpbWVyJywgZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgpXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgZW50aXR5UG9vbE5vZGVzLnBlcnR1cmJpbmdBZ2VudClcblxuLy8gY29udGFpbmVyIG5vZGVzXG4uc2V0KCdjb21wYXJ0bWVudCcsIGNvbnRhaW5lck5vZGVzLmNvbXBhcnRtZW50KTtcblxuXG5jb25zdCBkcmF3ID0gKG5vZGUpID0+IHtcbiAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpO1xuICBsZXQgc2hhcGVGbiA9IHNiZ25Ob2RlU2hhcGVNYXAuZ2V0KHNiZ25DbGFzcyk7XG4gIGlmIChzaGFwZUZuID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3NiZ25DbGFzc30gZG9lcyBub3QgaGF2ZSBhIHNoYXBlIGltcGxlbWVudGF0aW9uYCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlRm4obm9kZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZHJhdzogZHJhd1xufTsiLCJjb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcblxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XG5jb25zdCBkaW1lbnNpb25zID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucycpO1xuXG5jb25zdCBwcm9jZXNzTm9kZXMgPSB7XG5cbiAgcHJvY2VzcyAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZGltZW5zaW9ucy5nZXQobm9kZSk7XG5cbiAgICBjb25zdCBzcXVhcmVTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICBjb25zdCBwcm9jZXNzU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuc3F1YXJlKDEsIDEsIE1hdGgubWluKG53LCBuaCkgLSAyLCBzcXVhcmVTdHlsZSl9XG4gICAgYDtcbiAgICByZXR1cm4gc3ZnU3RyKHByb2Nlc3NTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfSxcblxuICBhc3NvY2lhdGlvbiAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZGltZW5zaW9ucy5nZXQobm9kZSk7XG5cbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDI7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICcjNkE2QTZBJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAnMCcpO1xuXG4gICAgY29uc3QgYXNzb2NpYXRpb25TdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdHlsZU1hcCl9XG4gICAgYDtcbiAgICByZXR1cm4gc3ZnU3RyKGFzc29jaWF0aW9uU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgZGlzc29jaWF0aW9uIChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBkaW1lbnNpb25zLmdldChub2RlKTtcblxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XG4gICAgY29uc3QgY2VudGVyWSA9IG5oIC8gMjtcbiAgICBjb25zdCBvdXRlclJhZGl1cyA9IChNYXRoLm1pbihudywgbmgpIC0gMikgLyAyO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDM7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICBjb25zdCBkaXNzb2NpYXRpb25TdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgb3V0ZXJSYWRpdXMsIHN0eWxlTWFwKX1cbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgaW5uZXJSYWRpdXMsIHN0eWxlTWFwKX1cbiAgICBgO1xuICAgIHJldHVybiBzdmdTdHIoZGlzc29jaWF0aW9uU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGhlbm90eXBlIChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBkaW1lbnNpb25zLmdldChub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICczJylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IHNoYXBlQXJncyA9IFsxLCAxLCBudyAtIDMsIG5oIC0gM107XG5cbiAgICBsZXQgcGhlbm90eXBlU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuaGV4YWdvbiguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7bm9kZS5kYXRhKCdjbG9uZW1hcmtlcicpID8gYXV4aWxpYXJ5SXRlbXMuY2xvbmVNYXJrZXIobncgLSAzLCBuaCAtIDMsIGJhc2VTaGFwZXMuaGV4YWdvbiwgc2hhcGVBcmdzKSA6ICcnfVxuICAgIGA7XG4gICAgcmV0dXJuIHN2Z1N0cihwaGVub3R5cGVTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzTm9kZXM7XG4iLCJjb25zdCBlbGVtZW50U3R5bGUgPSByZXF1aXJlKCcuL2VsZW1lbnQuanMnKTtcblxuY29uc3Qgc2JnblNoYXBlcyA9IHJlcXVpcmUoJy4vZ2x5cGgnKTtcbmNvbnN0IHNiZ25EaW1lbnNpb25zID0gcmVxdWlyZSgnLi9kaW1lbnNpb25zJyk7XG5cbmNvbnN0IGlzTXVsdGltZXIgPSByZXF1aXJlKCcuL3V0aWwvc2Jnbi5qcycpLmlzTXVsdGltZXI7XG5jb25zdCBoYXNBdXhJdGVtcyA9IHJlcXVpcmUoJy4vdXRpbC9zYmduLmpzJykuaGFzQXV4SXRlbXM7XG5cbnZhciBzYmduU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChjeXRvc2NhcGUpIHtcblxuICByZXR1cm4gY3l0b3NjYXBlLnN0eWxlc2hlZXQoKVxuICAgICAgICAvLyBnZW5lcmFsIG5vZGUgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NoYXBlJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduU2hhcGUobm9kZSksXG4gICAgICAgICAgJ2NvbnRlbnQnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25Db250ZW50KG5vZGUpLFxuICAgICAgICAgICdmb250LXNpemUnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLmxhYmVsVGV4dFNpemUobm9kZSksXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmNmY2ZjYnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAwLjUsXG4gICAgICAgICAgJ3RleHQtb3BhY2l0eSc6IDEsXG4gICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzAwMCcsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICcjMDAwJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAuNywgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICcxNCdcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIGV2ZXJ5IHByb2Nlc3MvZW50aXR5IHBvb2wgbm9kZSBuZWVkcyB0aGVzZSBwcm9wZXJ0aWVzXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInByb2Nlc3NcIl0sIG5vZGVbY2xhc3M9XCJ1bmNlcnRhaW4gcHJvY2Vzc1wiXSwgbm9kZVtjbGFzcz1cIm9taXR0ZWQgcHJvY2Vzc1wiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBoZW5vdHlwZVwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwic291cmNlIGFuZCBzaW5rXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJ1bnNwZWNpZmllZCBlbnRpdHlcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlXCJdLCBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGVcIl0sIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWxcIl0sIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnblNoYXBlcy5kcmF3KG5vZGUpLFxuICAgICAgICAgICd3aWR0aCc6IChub2RlKSA9PiBzYmduRGltZW5zaW9ucy53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IHNiZ25EaW1lbnNpb25zLmhlaWdodChub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBwcm9jZXNzIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QjZCNkInXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBlbnRpdHkgcG9vbCBub2RlIHNwZWNpZmljIHN0eWxlc1xuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJzb3VyY2UgYW5kIHNpbmtcIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnc2hhcGUtcG9seWdvbi1wb2ludHMnOiAnLTAuODYsIDAuNSwgLTAuNzUsIDAuNjUsIC0xLCAwLjk1LCAtMC45NSwgMSwgLTAuNjUsIDAuNzUsIC0wLjUsIDAuODYsIDAsIDEsIDAuNSwgMC44NiwgMC43MSwgMC43MSwgMC44NiwgMC41LCAxLCAwLCAwLjg2LCAtMC41LCAwLjc1LCAtMC42NSwgMSwgLTAuOTUsIDAuOTUsIC0xLCAwLjY1LCAtMC43NSwgMC41LCAtMC44NiwgMCwgLTEsIC0wLjUsIC0wLjg2LCAtMC43MSwgLTAuNzEsIC0wLjg2LCAtMC41LCAtMSwgMCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cInRhZ1wiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd3aWR0aCc6IChub2RlKSA9PiBzYmduRGltZW5zaW9ucy53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IHNiZ25EaW1lbnNpb25zLmhlaWdodChub2RlKSxcbiAgICAgICAgICAnc2hhcGUtcG9seWdvbi1wb2ludHMnOiAnLTEsIC0xLCAgIDAuMjUsIC0xLCAgIDEsIDAsICAgIDAuMjUsIDEsICAgIC0xLCAxJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NoYXBlLXBvbHlnb24tcG9pbnRzJzogJy0xLCAtMC45NSwgLTAuNzUsIDAsIC0xLCAwLjk1LCAxLCAwLjk1LCAwLjc1LCAwLCAxLCAtMC45NScsXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBlbnRpdHkgcG9vbCBub2RlcyB0aGF0IGhhdmUgb25lIG9yIG1vcmUgb2YgKHVuaXRzIG9mIGluZm9ybWF0aW9uLCBzdGF0ZSB2YXJpYWJsZXMsIG11bHRpbWVyKVxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZVwiXSwgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlXCJdLCBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsXCJdLCBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdwYWRkaW5nJzogKG5vZGUpID0+ICAoaXNNdWx0aW1lcihub2RlKSB8fCBoYXNBdXhJdGVtcyhub2RlKSkgPyA1IDogMCxcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6IChub2RlKSA9PiAgKGlzTXVsdGltZXIobm9kZSkgfHwgaGFzQXV4SXRlbXMobm9kZSkpID8gJzEwNCUnIDogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6IChub2RlKSA9PiAgKGlzTXVsdGltZXIobm9kZSkgfHwgaGFzQXV4SXRlbXMobm9kZSkpID8gJzEwNCUnIDogJzEwMCUnLFxuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gY29tcG91bmQgbm9kZSBzcGVjaWZpYyBzdHlsZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDQsXG4gICAgICAgICAgJ2NvbXBvdW5kLXNpemluZy13cnQtbGFiZWxzJzogJ2V4Y2x1ZGUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAuMixcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnYm90dG9tJyxcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25TaGFwZXMuZHJhdyhub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi14JzogWycwJScsICcwJScsICcwJScsICcyNSUnLCAnODglJ10sICAgICAgICAgIC8vIG9yZGVyOiBsaW5lLCBsaW5lLCBjbG9uZW1hcmtlciwgdWluZm8sIHN2YXJcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogWycxMDAlJywgJzIycHgnLCAnMTAwJScsICcwJScsICcwJSddLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6IFsnY29udGFpbicsICdjb250YWluJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9kZScsXG4gICAgICAgICAgJ3BhZGRpbmcnOiAnMjJweCcsXG4gICAgICAgICAgJ2hlaWdodCc6ICc1cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc1cHgnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduU2hhcGVzLmRyYXcobm9kZSksIC8vIGNhY2hlIHRoaXNcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6IFsnMTAwJSddLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiBbJzAlJywgJzI1JSddLCAgICAgICAgICAvLyBvcmRlcjogbGluZSwgbGluZSwgdWluZm9cbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogWyczOHB4JywgJzAlJ10sXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogWydjb250YWluJywgJ25vbmUnXSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vZGUnLFxuICAgICAgICAgICdwYWRkaW5nJzogJzM4cHgnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVE9ETzogY2FjaGVkIHZlcnNpb24gb2YgbXVsdGktaW1nIGNvbXBvdW5kc1xuICAgICAgICAvLyAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXScpXG4gICAgICAgIC8vIC5jc3Moe1xuICAgICAgICAvLyAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIHRoZSBiZyBpbWFnZSBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyAgIC8vICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25TaGFwZXMuZHJhdyhub2RlKS5pbWFnZXMsIC8vIGdlbmVyYXRlIGltZyBhbmQgaW1nIHByb3BlcnRpZXNcbiAgICAgICAgLy8gICAvLyAnYmFja2dyb3VuZC13aWR0aCc6IChub2RlKSA9PiBzYmduU2hhcGVzLmRyYXcobm9kZSkud2lkdGhzXG4gICAgICAgIC8vICAgLy8gJ2JhY2tncm91bmQtaGVpZ2h0JzogKG5vZGUpID0+IHNiZ25TaGFwZXMuZHJhdyhub2RlKS5oZWlnaHRzXG4gICAgICAgIC8vICAgLy8gJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IChub2RlKSA9PiBzYmduU2hhcGVzLmRyYXcobm9kZSkueFBvc2l0aW9uc1xuICAgICAgICAvLyAgIC8vICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknOiAobm9kZSkgPT4gc2JnblNoYXBlcy5kcmF3KG5vZGUpLnlQb3NpdGlvbnNcbiAgICAgICAgLy8gICAvLyAnYmFja2dyb3VuZC1maXQnOiAobm9kZSkgPT4gc2JnblNoYXBlcy5kcmF3KG5vZGUpLmltZ0ZpdHNcbiAgICAgICAgLy8gICAvLyAnYmFja2dyb3VuZC1jbGlwJzogKG5vZGUpID0+IHNiZ25TaGFwZXMuZHJhdyhub2RlKS5pbWdDbGlwc1xuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIGVkZ2Ugc3R5bGluZ1xuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYXJyb3ctc2NhbGUnOiAxLjc1LFxuICAgICAgICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICAgICAgICd3aWR0aCc6IDEuNSxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdjb2xvcic6ICcjNTU1J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6c2VsZWN0ZWQnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjZDY3NjE0J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAuNywgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICc4J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2FyZGluYWxpdHkgPiAwXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0ZXh0LXJvdGF0aW9uJzogJ2F1dG9yb3RhdGUnLFxuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtc2hhcGUnOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItd2lkdGgnOiAnMScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1jb2xvcic6ICd3aGl0ZScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1vcGFjaXR5JzogJzEnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImNvbnN1bXB0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0sIGVkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnc291cmNlLWxhYmVsJzogKGVkZ2UpID0+ICcnICsgZWRnZS5kYXRhKCdjYXJkaW5hbGl0eScpLFxuICAgICAgICAgICdzb3VyY2UtdGV4dC1tYXJnaW4teSc6ICctMTAnLFxuICAgICAgICAgICdzb3VyY2UtdGV4dC1vZmZzZXQnOiAoZWRnZSkgPT4gZWxlbWVudFN0eWxlLmNhcmRpbmFsaXR5RGlzdGFuY2UoZWRnZSlcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiAoZWRnZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25BcnJvd1NoYXBlKGVkZ2UpLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctc2hhcGUnOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiaW5oaWJpdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gY29yZVxuICAgICAgICAuc2VsZWN0b3IoJ2NvcmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnc2VsZWN0aW9uLWJveC1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnc2VsZWN0aW9uLWJveC1vcGFjaXR5JzogJzAuMicsICdzZWxlY3Rpb24tYm94LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0J1xuICAgICAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2JnblN0eWxlU2hlZXQ7XG4iLCJjb25zdCBzYmduRGF0YUhhbmRsZXIgPSB7XG4gIGlzTXVsdGltZXIgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbGFzcycpLmluY2x1ZGVzKCdtdWx0aW1lcicpO1xuICB9LFxuICBoYXNDbG9uZW1hcmtlciAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ2Nsb25lbWFya2VyJyk7XG4gIH0sXG4gIGdldFN0YXRlVmFycyAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJyk7XG4gIH0sXG4gIGdldFVuaXRJbmZvcyAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpO1xuICB9LFxuICBoYXNBdXhJdGVtcyAobm9kZSkge1xuICAgIHJldHVybiAobm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpLmxlbmd0aCArIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJykubGVuZ3RoID4gMCk7XG4gIH0sXG4gIHNiZ25DbGFzcyAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGEoJ2NsYXNzJyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2JnbkRhdGFIYW5kbGVyO1xuIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XG4gIGlmKCAhc3R5bGVNYXAgKXtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgcyA9ICcnO1xuXG4gIGZvciggbGV0IFtrLCB2XSBvZiBzdHlsZU1hcCApe1xuICAgIHMgKz0gayArICc9JyArIFwiJ1wiICsgdiArIFwiJ1wiICsgJyAnO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59O1xuXG5jb25zdCBzdmcgPSAoc3ZnU3RyLCB3aWR0aCA9IDEwMCwgaGVpZ2h0ID0gMTAwLCB2YlggPSAwLCB2YlkgPSAwLCB2YldpZHRoID0gMTAwLCB2YkhlaWdodCA9IDEwMCkgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBzdmdUZXh0ID1gPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JyR7d2lkdGh9JyBoZWlnaHQ9JyR7aGVpZ2h0fScgdmlld0JveD0nJHt2Ylh9ICR7dmJZfSAke3ZiV2lkdGh9ICR7dmJIZWlnaHR9Jz4ke3N2Z1N0cn08L3N2Zz5gO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdUZXh0LCAndGV4dC94bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG59O1xuXG5jb25zdCBzdmdTdHIgPSAoc3ZnVGV4dCwgdmlld1BvcnRXaWR0aCwgdmlld1BvcnRIZWlnaHQsIHZpZXdCb3hYLCB2aWV3Qm94WSwgdmlld0JveFdpZHRoLCB2aWV3Qm94SGVpZ2h0KSA9PiB7XG4gIGxldCBzID0gc3ZnKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCk7XG4gIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIGJ0b2Eocy5vdXRlckhUTUwpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN2Z1N0cjogc3ZnU3RyLFxuICBzdHlsZU1hcDJTdHI6IHN0eWxlTWFwMlN0clxufTtcbiJdfQ==
