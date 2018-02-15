/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(6);
var extend = __webpack_require__(10);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStylesheet = __webpack_require__(4);
var cytoscape = window.cytoscape;

var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  elements: fetch('./demo.json').then(function (res) {
    return res.json();
  }),
  layout: { name: 'preset' },
  style: sbgnStylesheet(cytoscape)
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0), __webpack_require__(2));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["cytoscapeSbgnStylesheet"] = factory(require("lodash.memoize"), require("text-width"));else root["cytoscapeSbgnStylesheet"] = factory(root["lodash.memoize"], root["text-width"]);
})(typeof self !== 'undefined' ? self : undefined, function (__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_10__) {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 6);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

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

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

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
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var k = _ref2[0];
            var v = _ref2[1];

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

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var styleMap2Str = __webpack_require__(1).styleMap2Str;

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

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnData = __webpack_require__(0);

      var sbgnStyle = new Map().set('unspecified entity', { w: 32, h: 32, shape: 'ellipse' }).set('simple chemical', { w: 48, h: 48, shape: 'ellipse' }).set('simple chemical multimer', { w: 48, h: 48, shape: 'ellipse' }).set('macromolecule', { w: 96, h: 48, shape: 'roundrectangle' }).set('macromolecule multimer', { w: 96, h: 48, shape: 'roundrectangle' }).set('nucleic acid feature', { w: 88, h: 56, shape: 'bottomroundrectangle' }).set('nucleic acid feature multimer', { w: 88, h: 52, shape: 'bottomroundrectangle' }).set('complex', { w: 10, h: 10, shape: 'cutrectangle' }).set('complex multimer', { w: 10, h: 10, shape: 'cutrectangle' }).set('source and sink', { w: 60, h: 60, shape: 'polygon' }).set('perturbing agent', { w: 140, h: 60, shape: 'concavehexagon' }).set('phenotype', { w: 140, h: 60, shape: 'hexagon' }).set('process', { w: 25, h: 25, shape: 'square' }).set('uncertain process', { w: 25, h: 25, shape: 'square' }).set('omitted process', { w: 25, h: 25, shape: 'square' }).set('association', { w: 25, h: 25, shape: 'ellipse' }).set('dissociation', { w: 25, h: 25, shape: 'ellipse' }).set('compartment', { w: 50, h: 50, shape: 'barrel' }).set('tag', { w: 100, h: 65, shape: 'tag' }).set('and', { w: 40, h: 40, shape: 'ellipse' }).set('or', { w: 40, h: 40, shape: 'ellipse' }).set('not', { w: 40, h: 40, shape: 'ellipse' });

      var sbgnArrowMap = new Map().set('necessary stimulation', 'triangle-cross').set('inhibition', 'tee').set('catalysis', 'circle').set('stimulation', 'triangle').set('production', 'triangle').set('modulation', 'diamond');

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
        }
      };

      module.exports = elementStyle;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      var textWidth = __webpack_require__(10);

      var baseShapes = __webpack_require__(2);
      var sbgnData = __webpack_require__(0);

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

      /***/
    },
    /* 5 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnStyleSheet = __webpack_require__(7);

      var defaultOptions = {};

      module.exports = function (cytoscape) {
        return sbgnStyleSheet(cytoscape);
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var elementStyle = __webpack_require__(3);
      var sbgnsvg = __webpack_require__(8);

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
          'font-size': 20,
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
          'overlay-color': '#d67614',
          'overlay-padding': '14'
        })

        // draw sbgn specific styling (auxiliary items, clonemarker, etc.)
        .selector('\n          node[class="unspecified entity"],\n          node[class="simple chemical"], node[class="simple chemical multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="perturbing agent"],\n          node[class="phenotype"],\n          node[class="complex"], node[class="complex multimer"], node[class="compartment"]\n        ').css({
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
        }).selector('\n          node[class="simple chemical multimer"],\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"],\n          node[class="complex multimer"]\n        ').css({
          'ghost': 'yes',
          'ghost-opacity': 1
        }).selector('\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"]\n        ').css({
          'ghost-offset-x': 12,
          'ghost-offset-y': 12
        }).selector('\n          node[class="simple chemical multimer"]\n        ').css({
          'ghost-offset-x': 5,
          'ghost-offset-y': 5
        }).selector('\n          node[class="complex multimer"]\n        ').css({
          'ghost-offset-x': 16,
          'ghost-offset-y': 16
        })

        // compound node specific style
        .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]').css({
          'compound-sizing-wrt-labels': 'exclude',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })

        // process node specific style
        .selector('node[class="association"], node[class="dissociation"]').css({
          'background-opacity': 1
        }).selector('node[class="association"]').css({
          'background-color': '#6B6B6B'
        })

        // source and sink and dissociation are drawn differently because
        // of their unique shape
        .selector('node[class="source and sink"]').css({
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
        })

        // source and sink and dissociation are drawn differently because
        // of their unique shape
        .selector('node[class="dissociation"]').css({
          'background-image': function backgroundImage(node) {
            return sbgnsvg.draw(node);
          },
          'background-fit': 'none',
          'background-width': '100%',
          'background-height': '100%',
          'background-clip': 'none',
          'background-repeat': 'no-repeat',
          'border-width': 0
        })

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
          'text-background-shape': 'rectangle',
          'text-border-opacity': '1',
          'text-border-width': '1',
          'text-background-color': 'white',
          'text-background-opacity': '1'
        }).selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]').css({
          'source-label': function sourceLabel(edge) {
            return '' + edge.data('cardinality');
          },
          'source-text-offset': 10
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

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var memoize = __webpack_require__(5);

      var containerNodes = __webpack_require__(9);
      var entityPoolNodes = __webpack_require__(11);
      var processNodes = __webpack_require__(12);

      var sbgnData = __webpack_require__(0);

      var cacheKeyFn = function cacheKeyFn(node) {
        return '' + JSON.stringify(node.id());
      };

      var sbgnNodeShapeMap = new Map()
      // process nodes
      .set('dissociation', memoize(processNodes.dissociation, cacheKeyFn)).set('phenotype', memoize(processNodes.phenotype, cacheKeyFn))

      // entity pool nodes
      .set('source and sink', memoize(entityPoolNodes.sourceAndSink, cacheKeyFn)).set('unspecified entity', memoize(entityPoolNodes.unspecifiedEntity, cacheKeyFn)).set('simple chemical', memoize(entityPoolNodes.simpleChemical, cacheKeyFn)).set('macromolecule', memoize(entityPoolNodes.macromolecule, cacheKeyFn)).set('nucleic acid feature', memoize(entityPoolNodes.nucleicAcidFeature, cacheKeyFn)).set('complex', memoize(entityPoolNodes.complex, cacheKeyFn)).set('perturbing agent', memoize(entityPoolNodes.perturbingAgent, cacheKeyFn))

      // container nodes
      .set('compartment', memoize(containerNodes.compartment, cacheKeyFn));

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

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var svgStr = __webpack_require__(1).svgStr;
      var sbgnData = __webpack_require__(0);
      var memoize = __webpack_require__(5);

      var auxiliaryItems = __webpack_require__(4);
      var baseShapes = __webpack_require__(2);

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

      /***/
    },
    /* 10 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var baseShapes = __webpack_require__(2);
      var auxiliaryItems = __webpack_require__(4);

      var svgStr = __webpack_require__(1).svgStr;
      var getUnitInfos = __webpack_require__(0).getUnitInfos;
      var getStateVars = __webpack_require__(0).getStateVars;
      var hasClonemarker = __webpack_require__(0).hasClonemarker;

      var element = __webpack_require__(3);

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
          var itemW = 60;
          var itemH = 24;
          var uInfos = getUnitInfos(node);
          var sVars = getStateVars(node);

          var images = [];
          var bgWidth = [];
          var bgHeight = [];
          var bgPosX = [];
          var bgPosY = [];
          var bgFit = [];

          var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

          // order of svg image generation matters
          if (uInfos.length + sVars.length > 0) {
            var topLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
            images.push(topLineSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('11px');
            bgFit.push('none');
          }

          if (hasClonemarker(node)) {
            var bottomLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
            images.push(bottomLineSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('100%');
            bgFit.push('none');
          }

          if (hasClonemarker(node)) {
            var cloneSvg = svgStr(auxiliaryItems.multiImgCloneMarker(0, 2, itemW, itemH - 3), itemW, itemH);
            images.push(cloneSvg);
            bgWidth.push('100%');
            bgPosX.push('0%');
            bgPosY.push('100%');
            bgFit.push('none');
          }

          if (uInfos.length > 0) {
            var uInfoSvg = svgStr(auxiliaryItems.multiImgUnitOfInformation(2, 0, itemW - 5, itemH - 3, uInfos[0]), itemW, itemH);
            images.push(uInfoSvg);
            bgPosX.push('25%');
            bgPosY.push('0%');
            bgFit.push('none');
          }

          if (sVars.length > 0) {
            var sVarSvg = svgStr(auxiliaryItems.multiImgStateVar(2, 0, itemW - 5, itemH - 3, sVars[0]), itemW, itemH);
            images.push(sVarSvg);
            bgPosX.push('88%');
            bgPosY.push('0%');
            bgFit.push('none');
          }

          return {
            bgImage: images,
            bgWidth: bgWidth,
            bgPosX: bgPosX,
            bgPosY: bgPosY,
            bgFit: bgFit,
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

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var baseShapes = __webpack_require__(2);
      var auxiliaryItems = __webpack_require__(4);

      var svgStr = __webpack_require__(1).svgStr;
      var hasClonemarker = __webpack_require__(0).hasClonemarker;

      var element = __webpack_require__(3);

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

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
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

exports.isBuffer = __webpack_require__(8);

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
exports.inherits = __webpack_require__(9);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

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


/***/ }),
/* 10 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTc3YjRhMWFkNWFjZGQ0NGU2NmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6WyJzYmduU3R5bGVzaGVldCIsInJlcXVpcmUiLCJjeXRvc2NhcGUiLCJ3aW5kb3ciLCJjeSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbGVtZW50cyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJsYXlvdXQiLCJuYW1lIiwic3R5bGUiLCJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInNlbGYiLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXyIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJzYmduRGF0YUhhbmRsZXIiLCJpc011bHRpbWVyIiwibm9kZSIsImRhdGEiLCJpbmNsdWRlcyIsImhhc0Nsb25lbWFya2VyIiwiZ2V0U3RhdGVWYXJzIiwiZ2V0VW5pdEluZm9zIiwiaGFzQXV4SXRlbXMiLCJsZW5ndGgiLCJzYmduQ2xhc3MiLCJlbGVtZW50Iiwic2JnbkxhYmVsIiwic3RhdGVWYXJMYWJlbCIsInN0YXRlVmFyIiwidmFyaWFibGUiLCJzdGF0ZSIsInZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJzbGljZUl0ZXJhdG9yIiwiYXJyIiwiX2FyciIsIl9uIiwiX2QiLCJfZSIsInVuZGVmaW5lZCIsIl9pIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIm5leHQiLCJkb25lIiwicHVzaCIsImVyciIsIkFycmF5IiwiaXNBcnJheSIsIlR5cGVFcnJvciIsInN0eWxlTWFwMlN0ciIsInN0eWxlTWFwIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIl9yZWYiLCJfcmVmMiIsImsiLCJ2IiwicmV0dXJuIiwic3ZnIiwic3ZnU3RyIiwid2lkdGgiLCJhcmd1bWVudHMiLCJoZWlnaHQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJzdmdUZXh0IiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50Iiwidmlld1BvcnRXaWR0aCIsInZpZXdQb3J0SGVpZ2h0Iiwidmlld0JveFgiLCJ2aWV3Qm94WSIsInZpZXdCb3hXaWR0aCIsInZpZXdCb3hIZWlnaHQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvdXRlckhUTUwiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIyIiwiZnJvbSIsImJhc2VSZWN0YW5nbGUiLCJ4IiwieSIsInciLCJoIiwicjEiLCJyMiIsInIzIiwicjQiLCJiYXNlU2hhcGVzIiwiYmFycmVsIiwiY2lyY2xlIiwiY3giLCJyIiwiY2xpcFBhdGgiLCJpZCIsImJhc2VTaGFwZUZuIiwiYmFzZVNoYXBlRm5BcmdzIiwiYXBwbHkiLCJjb25jYXZlSGV4YWdvbiIsImN1dFJlY3RhbmdsZSIsImNvcm5lckxlbmd0aCIsImVsbGlwc2UiLCJyeCIsInJ5IiwiaGV4YWdvbiIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInJlY3RhbmdsZSIsInJvdW5kQm90dG9tUmVjdGFuZ2xlIiwicm91bmRSZWN0YW5nbGUiLCJzdGFkaXVtIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwibWF4Iiwic3F1YXJlIiwidGV4dCIsInQiLCJzYmduRGF0YSIsInNiZ25TdHlsZSIsIk1hcCIsInNldCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnblNoYXBlIiwicmVwbGFjZSIsInNiZ25BcnJvd1NoYXBlIiwiZWRnZSIsInNiZ25Db250ZW50IiwiY29udGVudCIsImRpbWVuc2lvbnMiLCJkaW0iLCJ0ZXh0V2lkdGgiLCJhdXhpbGlhcnlJdGVtcyIsIm11bHRpSW1nQ2xvbmVNYXJrZXIiLCJjbG9uZVN0eWxlIiwibXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiIsInVJbmZvIiwiYm9yZGVyV2lkdGgiLCJmb250U2l6ZSIsImxhYmVsIiwidWluZm9SZWN0U3R5bGUiLCJ0ZXh0U3R5bGUiLCJ1SW5mb1dpZHRoIiwiZmFtaWx5Iiwic2l6ZSIsInVuaXRPZkluZm9ybWF0aW9uU3ZnIiwibXVsdGlJbWdTdGF0ZVZhciIsInN0YXRlVmFyU3R5bGUiLCJ0dyIsInN0YXRldmFyaWFibGVTdmciLCJjbG9uZU1hcmtlciIsIm5vZGVXaWR0aCIsIm5vZGVIZWlnaHQiLCJzaGFwZUZuIiwic2hhcGVGbkFyZ3MiLCJjbGlwSWQiLCJjbG9uZU1hcmtlclN0eWxlIiwiY2xvbmVNYXJrZXJTdmciLCJjb25jYXQiLCJzYmduU3R5bGVTaGVldCIsImRlZmF1bHRPcHRpb25zIiwic2JnbnN2ZyIsInN0eWxlc2hlZXQiLCJzZWxlY3RvciIsImNzcyIsImJhY2tncm91bmRJbWFnZSIsImRyYXciLCJiZ0ltYWdlIiwiYmFja2dyb3VuZFdpZHRoIiwiYmdXaWR0aCIsImJhY2tncm91bmRQb3NpdGlvblgiLCJiZ1Bvc1giLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmdQb3NZIiwiYmFja2dyb3VuZEZpdCIsImJnRml0IiwiYmFja2dyb3VuZENsaXAiLCJiZ0NsaXAiLCJwYWRkaW5nIiwic291cmNlTGFiZWwiLCJ0YXJnZXRBcnJvd1NoYXBlIiwibWVtb2l6ZSIsImNvbnRhaW5lck5vZGVzIiwiZW50aXR5UG9vbE5vZGVzIiwicHJvY2Vzc05vZGVzIiwiY2FjaGVLZXlGbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYmduTm9kZVNoYXBlTWFwIiwiZGlzc29jaWF0aW9uIiwicGhlbm90eXBlIiwic291cmNlQW5kU2luayIsInVuc3BlY2lmaWVkRW50aXR5Iiwic2ltcGxlQ2hlbWljYWwiLCJtYWNyb21vbGVjdWxlIiwibnVjbGVpY0FjaWRGZWF0dXJlIiwiY29tcGxleCIsInBlcnR1cmJpbmdBZ2VudCIsImNvbXBhcnRtZW50IiwiYXV4SXRlbVdpZHRoIiwiYXV4SXRlbUhlaWdodCIsInVJbmZvcyIsInVJbmZvU3ZnIiwibGluZVN2ZyIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsImJvdHRvbUxpbmVTdmciLCJjbG9uZVN2ZyIsIl9lbGVtZW50JGRpbWVuc2lvbnMiLCJudyIsIm5oIiwiY2VudGVyWCIsImNlbnRlclkiLCJyYWRpdXMiLCJzaGFwZUFyZ3MiLCJzb3VyY2VBbmRTaW5rU3ZnIiwib3V0ZXJSYWRpdXMiLCJtaW4iLCJpbm5lclJhZGl1cyIsImRpc3NvY2lhdGlvblN2ZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNucUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDemtCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vYnVpbGQvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE3N2I0YTFhZDVhY2RkNDRlNjZjIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgc3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGlmKHR5cGVvZiBjYW52YXMuZ2V0Q29udGV4dCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdHJldHVybiAhIWNvbnRleHQgJiYgKHR5cGVvZiBjb250ZXh0Lm1lYXN1cmVUZXh0ID09PSAnZnVuY3Rpb24nKTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHR2YXIgd2lkdGggPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gZXh0ZW5kKHtcblx0XHRcdHN0eWxlOiAnbm9ybWFsJyxcblx0XHRcdHZhcmlhbnQ6ICdub3JtYWwnLFxuXHRcdFx0d2VpZ2h0OiAnbm9ybWFsJyxcblx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0ZmFtaWx5OiAnc2Fucy1zZXJpZicsXG5cdFx0XHRhbGlnbjogJ3N0YXJ0Jyxcblx0XHRcdGJhc2VsaW5lOiAnYWxwaGFiZXRpYydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHZhciBzaXplID0gb3B0aW9ucy5zaXplO1xuXHRcdGlmKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykgc2l6ZSA9IHNpemUgKyAncHgnO1xuXG5cdFx0Y29udGV4dC5mb250ID0gdXRpbC5mb3JtYXQoJyVzICVzICVzICVzICVzJyxcblx0XHRcdG9wdGlvbnMuc3R5bGUsXG5cdFx0XHRvcHRpb25zLnZhcmlhbnQsXG5cdFx0XHRvcHRpb25zLndlaWdodCxcblx0XHRcdHNpemUsXG5cdFx0XHRvcHRpb25zLmZhbWlseSk7XG5cdFx0Y29udGV4dC50ZXh0QWxpZ24gPSBvcHRpb25zLmFsaWduO1xuXHRcdGNvbnRleHQudGV4dEJhc2VsaW5lID0gb3B0aW9ucy5iYXNlbGluZTtcblxuXHRcdHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gdHJ1ZTtcblx0cmV0dXJuIHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0ZWQoKSA/IGluaXRpYWxpemUoKSA6IChmdW5jdGlvbigpIHtcblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gZmFsc2U7XG5cdHJldHVybiB3aWR0aDtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzYmduU3R5bGVzaGVldCA9IHJlcXVpcmUoJy4vYnVpbGQvYnVuZGxlLmpzJyk7XG52YXIgY3l0b3NjYXBlID0gd2luZG93LmN5dG9zY2FwZTtcblxudmFyIGN5ID0gd2luZG93LmN5ID0gY3l0b3NjYXBlKHtcbiAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3knKSxcbiAgZWxlbWVudHM6IGZldGNoKCcuL2RlbW8uanNvbicpLnRoZW4oIHJlcyA9PiByZXMuanNvbigpICksXG4gIGxheW91dDogeyBuYW1lOiAncHJlc2V0JyB9LFxuICBzdHlsZTogc2JnblN0eWxlc2hlZXQoY3l0b3NjYXBlKVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaC5tZW1vaXplXCIpLCByZXF1aXJlKFwidGV4dC13aWR0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2gubWVtb2l6ZVwiLCBcInRleHQtd2lkdGhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2gubWVtb2l6ZVwiKSwgcmVxdWlyZShcInRleHQtd2lkdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5dG9zY2FwZVNiZ25TdHlsZXNoZWV0XCJdID0gZmFjdG9yeShyb290W1wibG9kYXNoLm1lbW9pemVcIl0sIHJvb3RbXCJ0ZXh0LXdpZHRoXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgc2JnbkRhdGFIYW5kbGVyID0ge1xuICBpc011bHRpbWVyOiBmdW5jdGlvbiBpc011bHRpbWVyKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbGFzcycpLmluY2x1ZGVzKCdtdWx0aW1lcicpO1xuICB9LFxuICBoYXNDbG9uZW1hcmtlcjogZnVuY3Rpb24gaGFzQ2xvbmVtYXJrZXIobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ2Nsb25lbWFya2VyJyk7XG4gIH0sXG4gIGdldFN0YXRlVmFyczogZnVuY3Rpb24gZ2V0U3RhdGVWYXJzKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpO1xuICB9LFxuICBnZXRVbml0SW5mb3M6IGZ1bmN0aW9uIGdldFVuaXRJbmZvcyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJyk7XG4gIH0sXG4gIGhhc0F1eEl0ZW1zOiBmdW5jdGlvbiBoYXNBdXhJdGVtcyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKS5sZW5ndGggKyBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpLmxlbmd0aCA+IDA7XG4gIH0sXG4gIHNiZ25DbGFzczogZnVuY3Rpb24gc2JnbkNsYXNzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdjbGFzcycpO1xuICB9LFxuICBzYmduTGFiZWw6IGZ1bmN0aW9uIHNiZ25MYWJlbChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgnbGFiZWwnKTtcbiAgfSxcbiAgc3RhdGVWYXJMYWJlbDogZnVuY3Rpb24gc3RhdGVWYXJMYWJlbChzdGF0ZVZhcikge1xuICAgIHZhciB2YXJpYWJsZSA9IHN0YXRlVmFyLnN0YXRlLnZhcmlhYmxlO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlVmFyLnN0YXRlLnZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB2YXJpYWJsZSkge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJ0AnICsgdmFyaWFibGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2JnbkRhdGFIYW5kbGVyO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgc3R5bGVNYXAyU3RyID0gZnVuY3Rpb24gc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSB7XG4gIGlmICghc3R5bGVNYXApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgcyA9ICcnO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHN0eWxlTWFwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIF9yZWYgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMik7XG5cbiAgICAgIHZhciBrID0gX3JlZjJbMF07XG4gICAgICB2YXIgdiA9IF9yZWYyWzFdO1xuXG4gICAgICBzICs9IGsgKyAnPScgKyAnXCInICsgdiArICdcIicgKyAnICc7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzO1xufTtcblxudmFyIHN2ZyA9IGZ1bmN0aW9uIHN2ZyhzdmdTdHIpIHtcbiAgdmFyIHdpZHRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDA7XG4gIHZhciBoZWlnaHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDEwMDtcblxuICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICB2YXIgc3ZnVGV4dCA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48IURPQ1RZUEUgc3ZnPjxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCcgdmVyc2lvbj1cXCcxLjFcXCcgd2lkdGg9XFwnJyArIHdpZHRoICsgJ1xcJyBoZWlnaHQ9XFwnJyArIGhlaWdodCArICdcXCc+JyArIHN2Z1N0ciArICc8L3N2Zz4nO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdUZXh0LCAndGV4dC94bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG59O1xuXG52YXIgc3ZnU3RyID0gZnVuY3Rpb24gc3ZnU3RyKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkge1xuICB2YXIgcyA9IHN2ZyhzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xuXG4gIC8vIGJhc2U2NFxuICAvLyBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBidG9hKHMub3V0ZXJIVE1MKTtcblxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xuICB2YXIgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMub3V0ZXJIVE1MKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdmdTdHI6IHN2Z1N0cixcbiAgc3R5bGVNYXAyU3RyOiBzdHlsZU1hcDJTdHJcbn07XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIHN0eWxlTWFwMlN0ciA9IF9fd2VicGFja19yZXF1aXJlX18oMSkuc3R5bGVNYXAyU3RyO1xuXG52YXIgYmFzZVJlY3RhbmdsZSA9IGZ1bmN0aW9uIGJhc2VSZWN0YW5nbGUoeCwgeSwgdywgaCwgcjEsIHIyLCByMywgcjQsIHN0eWxlTWFwKSB7XG4gIHJldHVybiAnXFxuICA8cGF0aCAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICcgZD1cXCdcXG4gICAgTSAnICsgKHggKyByMSkgKyAnICcgKyB5ICsgJ1xcbiAgICBMICcgKyAoeCArIHcgLSByMikgKyAnICcgKyB5ICsgJyBRICcgKyAoeCArIHcpICsgJyAnICsgeSArICcgJyArICh4ICsgdykgKyAnICcgKyAoeSArIHIyKSArICdcXG4gICAgTCAnICsgKHggKyB3KSArICcgJyArICh5ICsgaCAtIHIzKSArICcgUSAnICsgKHggKyB3KSArICcgJyArICh5ICsgaCkgKyAnICcgKyAoeCArIHcgLSByMykgKyAnICcgKyAoeSArIGgpICsgJ1xcbiAgICBMICcgKyAoeCArIHI0KSArICcgJyArICh5ICsgaCkgKyAnIFEgJyArIHggKyAnICcgKyAoeSArIGgpICsgJyAnICsgeCArICcgJyArICh5ICsgaCAtIHI0KSArICdcXG4gICAgTCAnICsgeCArICcgJyArICh5ICsgcjEpICsgJyBRICcgKyB4ICsgJyAnICsgeSArICcgJyArICh4ICsgcjEpICsgJyAnICsgeSArICdcXG4gICAgWlxcJ1xcbiAgLz5cXG4gICc7XG59O1xuXG52YXIgYmFzZVNoYXBlcyA9IHtcbiAgYmFycmVsOiBmdW5jdGlvbiBiYXJyZWwoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gJ1xcblxcbiAgICA8ZyAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICc+XFxuICAgICAgPHBhdGggZD1cIk0gJyArICgwICogd2lkdGggKyB4KSArICcgJyArICguMDMgKiBoZWlnaHQgKyB5KSArICcgTCAnICsgKDAgKiB3aWR0aCArIHgpICsgJyAnICsgKC45NyAqIGhlaWdodCArIHkpICsgJyBRICcgKyAoMC4wNiAqIHdpZHRoICsgeCkgKyAnICcgKyAoaGVpZ2h0ICsgeSkgKyAnICcgKyAoMC4yNSAqIHdpZHRoICsgeCkgKyAnICcgKyAoaGVpZ2h0ICsgeSkgKyAnXCIvPlxcblxcbiAgICAgIDxwYXRoIGQ9XCJNICcgKyAoMC4yNSAqIHdpZHRoICsgeCkgKyAnICcgKyAoaGVpZ2h0ICsgeSkgKyAnIEwgJyArICgwLjc1ICogd2lkdGggKyB4KSArICcgJyArIChoZWlnaHQgKyB5KSArICcgUSAnICsgKDAuOTUgKiB3aWR0aCArIHgpICsgJyAnICsgKGhlaWdodCArIHkpICsgJyAnICsgKHdpZHRoICsgeCkgKyAnICcgKyAoMC45NSAqIGhlaWdodCArIHkpICsgJ1wiLz5cXG5cXG4gICAgICA8cGF0aCBkPVwiTSAnICsgKHdpZHRoICsgeCkgKyAnICcgKyAoLjk1ICogaGVpZ2h0ICsgeSkgKyAnIEwgJyArICh3aWR0aCArIHgpICsgJyAnICsgKDAuMDUgKiBoZWlnaHQgKyB5KSArICcgUSAnICsgKHdpZHRoICsgeCkgKyAnICcgKyAoMCAqIGhlaWdodCArIHkpICsgJyAnICsgKDAuNzUgKiB3aWR0aCArIHgpICsgJyAnICsgKDAgKiBoZWlnaHQgKyB5KSArICdcIi8+XFxuXFxuICAgICAgPHBhdGggZD1cIk0gJyArICgwLjc1ICogd2lkdGggKyB4KSArICcgJyArICgwICogaGVpZ2h0ICsgeSkgKyAnIEwgJyArICgwLjI1ICogd2lkdGggKyB4KSArICcgJyArICgwICogaGVpZ2h0ICsgeSkgKyAnIFEgJyArICgwLjA2ICogd2lkdGggKyB4KSArICcgJyArICgwICogaGVpZ2h0ICsgeSkgKyAnICcgKyAoMCAqIHdpZHRoICsgeCkgKyAnICcgKyAoMC4wMyAqIGhlaWdodCArIHkpICsgJ1wiLz5cXG4gICAgPC9nPlxcblxcbiAgICAnO1xuICB9LFxuICBjaXJjbGU6IGZ1bmN0aW9uIGNpcmNsZShjeCwgY3ksIHIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICc8Y2lyY2xlIGN4PVxcJycgKyBjeCArICdcXCcgY3k9XFwnJyArIGN5ICsgJ1xcJyByPVxcJycgKyByICsgJ1xcJyAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICcgLz4nO1xuICB9LFxuICBjbGlwUGF0aDogZnVuY3Rpb24gY2xpcFBhdGgoaWQsIGJhc2VTaGFwZUZuLCBiYXNlU2hhcGVGbkFyZ3MsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICdcXG4gICAgICA8ZGVmcz5cXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cXCcnICsgaWQgKyAnXFwnICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJz5cXG4gICAgICAgICcgKyBiYXNlU2hhcGVGbi5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShiYXNlU2hhcGVGbkFyZ3MpKSArICdcXG4gICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgPC9kZWZzPlxcbiAgICAnO1xuICB9LFxuICBjb25jYXZlSGV4YWdvbjogZnVuY3Rpb24gY29uY2F2ZUhleGFnb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gJ1xcbiAgICA8cG9seWdvbiAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICdcXG4gICAgICBwb2ludHM9XFwnJyArICh4ICsgMCkgKyAnLCAnICsgKHkgKyAwKSArICcsICcgKyAoeCArIHdpZHRoKSArICcsICcgKyAoeSArIDApICsgJywgJyArICh4ICsgMC44NSAqIHdpZHRoKSArICcsICcgKyAoeSArIDAuNSAqIGhlaWdodCkgKyAnLCAnICsgKHggKyB3aWR0aCkgKyAnLCAnICsgKHkgKyBoZWlnaHQpICsgJywgJyArICh4ICsgMCkgKyAnLCAnICsgKHkgKyBoZWlnaHQpICsgJywgJyArICh4ICsgMC4xNSAqIHdpZHRoKSArICcsICcgKyAoeSArIDAuNSAqIGhlaWdodCkgKyAnXFwnXFxuICAgIC8+JztcbiAgfSxcbiAgY3V0UmVjdGFuZ2xlOiBmdW5jdGlvbiBjdXRSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29ybmVyTGVuZ3RoLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnXFxuICAgIDxwb2x5Z29uICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJ1xcbiAgICAgIHBvaW50cz1cXCdcXG4gICAgICAnICsgKHggKyAwICogd2lkdGgpICsgJyAnICsgKHkgKyBjb3JuZXJMZW5ndGgpICsgJyAnICsgKHggKyBjb3JuZXJMZW5ndGgpICsgJyAnICsgKHkgKyAwICogaGVpZ2h0KSArICcgJyArICh4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGgpICsgJyAnICsgKHkgKyAwICogaGVpZ2h0KSArICcgJyArICh4ICsgd2lkdGgpICsgJyAnICsgKHkgKyBjb3JuZXJMZW5ndGgpICsgJ1xcbiAgICAgICcgKyAoeCArIHdpZHRoKSArICcgJyArICh5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RoKSArICcgJyArICh4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGgpICsgJyAnICsgKHkgKyBoZWlnaHQpICsgJyAnICsgKHggKyBjb3JuZXJMZW5ndGgpICsgJyAnICsgKHkgKyBoZWlnaHQpICsgJyAnICsgKHggKyAwICogd2lkdGgpICsgJyAnICsgKHkgKyBoZWlnaHQgLSBjb3JuZXJMZW5ndGgpICsgJ1xcbiAgICAgIFxcJ1xcbiAgICAvPlxcbiAgICAnO1xuICB9LFxuICBlbGxpcHNlOiBmdW5jdGlvbiBlbGxpcHNlKGN4LCBjeSwgcngsIHJ5LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnXFxuICAgICAgPGVsbGlwc2UgY3g9XFwnJyArIGN4ICsgJ1xcJyBjeT1cXCcnICsgY3kgKyAnXFwnIHJ4PVxcJycgKyByeCArICdcXCcgcnk9XFwnJyArIHJ5ICsgJ1xcJyAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICcgLz5cXG4gICAgJztcbiAgfSxcbiAgaGV4YWdvbjogZnVuY3Rpb24gaGV4YWdvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnXFxuICAgIDxwb2x5Z29uICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJ1xcbiAgICAgIHBvaW50cz1cXCcnICsgKHggKyAwKSArICcsICcgKyAoeSArIDAuNSAqIGhlaWdodCkgKyAnLCAnICsgKHggKyAwLjI1ICogd2lkdGgpICsgJywgJyArICh5ICsgMCAqIGhlaWdodCkgKyAnLCAnICsgKHggKyAwLjc1ICogd2lkdGgpICsgJywgJyArICh5ICsgMCAqIGhlaWdodCkgKyAnLCAnICsgKHggKyB3aWR0aCkgKyAnLCAnICsgKHkgKyAwLjUgKiBoZWlnaHQpICsgJywgJyArICh4ICsgMC43NSAqIHdpZHRoKSArICcsICcgKyAoeSArIGhlaWdodCkgKyAnLCAnICsgKHggKyAwLjI1ICogd2lkdGgpICsgJywgJyArICh5ICsgaGVpZ2h0KSArICdcXCdcXG4gICAgLz4nO1xuICB9LFxuICBsaW5lOiBmdW5jdGlvbiBsaW5lKHgxLCB5MSwgeDIsIHkyLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnPGxpbmUgeDE9XFwnJyArIHgxICsgJ1xcJyB5MT1cXCcnICsgeTEgKyAnXFwnIHgyPVxcJycgKyB4MiArICdcXCcgeTI9XFwnJyArIHkyICsgJ1xcJyAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICcgLz4nO1xuICB9LFxuICByZWN0YW5nbGU6IGZ1bmN0aW9uIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcbiAgfSxcbiAgcm91bmRCb3R0b21SZWN0YW5nbGU6IGZ1bmN0aW9uIHJvdW5kQm90dG9tUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgLjMgKiBoZWlnaHQsIC4zICogaGVpZ2h0LCBzdHlsZU1hcCk7XG4gIH0sXG4gIHJvdW5kUmVjdGFuZ2xlOiBmdW5jdGlvbiByb3VuZFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIC4wNCAqIHdpZHRoLCAuMDQgKiB3aWR0aCwgLjA0ICogd2lkdGgsIC4wNCAqIHdpZHRoLCBzdHlsZU1hcCk7XG4gIH0sXG4gIHN0YWRpdW06IGZ1bmN0aW9uIHN0YWRpdW0oeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICB2YXIgcmFkaXVzUmF0aW8gPSAuMjQgKiBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgc3R5bGVNYXApO1xuICB9LFxuICBzcXVhcmU6IGZ1bmN0aW9uIHNxdWFyZSh4LCB5LCBsZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcbiAgfSxcbiAgdGV4dDogZnVuY3Rpb24gdGV4dCh0LCB4LCB5LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnPHRleHQgeD1cXCcnICsgeCArICdcXCcgeT1cXCcnICsgeSArICdcXCcgJyArIHN0eWxlTWFwMlN0cihzdHlsZU1hcCkgKyAnPicgKyB0ICsgJzwvdGV4dD4nO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTaGFwZXM7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgc2JnbkRhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgc2JnblN0eWxlID0gbmV3IE1hcCgpLnNldCgndW5zcGVjaWZpZWQgZW50aXR5JywgeyB3OiAzMiwgaDogMzIsIHNoYXBlOiAnZWxsaXBzZScgfSkuc2V0KCdzaW1wbGUgY2hlbWljYWwnLCB7IHc6IDQ4LCBoOiA0OCwgc2hhcGU6ICdlbGxpcHNlJyB9KS5zZXQoJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicsIHsgdzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnIH0pLnNldCgnbWFjcm9tb2xlY3VsZScsIHsgdzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJyB9KS5zZXQoJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInLCB7IHc6IDk2LCBoOiA0OCwgc2hhcGU6ICdyb3VuZHJlY3RhbmdsZScgfSkuc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIHsgdzogODgsIGg6IDU2LCBzaGFwZTogJ2JvdHRvbXJvdW5kcmVjdGFuZ2xlJyB9KS5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyJywgeyB3OiA4OCwgaDogNTIsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnIH0pLnNldCgnY29tcGxleCcsIHsgdzogMTAsIGg6IDEwLCBzaGFwZTogJ2N1dHJlY3RhbmdsZScgfSkuc2V0KCdjb21wbGV4IG11bHRpbWVyJywgeyB3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJyB9KS5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHsgdzogNjAsIGg6IDYwLCBzaGFwZTogJ3BvbHlnb24nIH0pLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHsgdzogMTQwLCBoOiA2MCwgc2hhcGU6ICdjb25jYXZlaGV4YWdvbicgfSkuc2V0KCdwaGVub3R5cGUnLCB7IHc6IDE0MCwgaDogNjAsIHNoYXBlOiAnaGV4YWdvbicgfSkuc2V0KCdwcm9jZXNzJywgeyB3OiAyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJyB9KS5zZXQoJ3VuY2VydGFpbiBwcm9jZXNzJywgeyB3OiAyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJyB9KS5zZXQoJ29taXR0ZWQgcHJvY2VzcycsIHsgdzogMjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZScgfSkuc2V0KCdhc3NvY2lhdGlvbicsIHsgdzogMjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnIH0pLnNldCgnZGlzc29jaWF0aW9uJywgeyB3OiAyNSwgaDogMjUsIHNoYXBlOiAnZWxsaXBzZScgfSkuc2V0KCdjb21wYXJ0bWVudCcsIHsgdzogNTAsIGg6IDUwLCBzaGFwZTogJ2JhcnJlbCcgfSkuc2V0KCd0YWcnLCB7IHc6IDEwMCwgaDogNjUsIHNoYXBlOiAndGFnJyB9KS5zZXQoJ2FuZCcsIHsgdzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnIH0pLnNldCgnb3InLCB7IHc6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJyB9KS5zZXQoJ25vdCcsIHsgdzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnIH0pO1xuXG52YXIgc2JnbkFycm93TWFwID0gbmV3IE1hcCgpLnNldCgnbmVjZXNzYXJ5IHN0aW11bGF0aW9uJywgJ3RyaWFuZ2xlLWNyb3NzJykuc2V0KCdpbmhpYml0aW9uJywgJ3RlZScpLnNldCgnY2F0YWx5c2lzJywgJ2NpcmNsZScpLnNldCgnc3RpbXVsYXRpb24nLCAndHJpYW5nbGUnKS5zZXQoJ3Byb2R1Y3Rpb24nLCAndHJpYW5nbGUnKS5zZXQoJ21vZHVsYXRpb24nLCAnZGlhbW9uZCcpO1xuXG52YXIgZWxlbWVudFN0eWxlID0ge1xuICBzYmduU2hhcGU6IGZ1bmN0aW9uIHNiZ25TaGFwZShub2RlKSB7XG4gICAgdmFyIHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gICAgdmFyIHN0eWxlID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzdHlsZSA/IHN0eWxlLnNoYXBlIDogJ2VsbGlwc2UnO1xuICB9LFxuICBzYmduQXJyb3dTaGFwZTogZnVuY3Rpb24gc2JnbkFycm93U2hhcGUoZWRnZSkge1xuICAgIHZhciBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3MoZWRnZSk7XG4gICAgdmFyIHNoYXBlID0gc2JnbkFycm93TWFwLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzaGFwZSA/IHNoYXBlIDogJ25vbmUnO1xuICB9LFxuICBzYmduQ29udGVudDogZnVuY3Rpb24gc2JnbkNvbnRlbnQobm9kZSkge1xuICAgIHZhciBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICAgIHZhciBjb250ZW50ID0gc2JnbkRhdGEuc2JnbkxhYmVsKG5vZGUpO1xuXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnYW5kJykge1xuICAgICAgY29udGVudCA9ICdBTkQnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdvcicpIHtcbiAgICAgIGNvbnRlbnQgPSAnT1InO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdub3QnKSB7XG4gICAgICBjb250ZW50ID0gJ05PVCc7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ29taXR0ZWQgcHJvY2VzcycpIHtcbiAgICAgIGNvbnRlbnQgPSAnXFxcXFxcXFwnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICd1bmNlcnRhaW4gcHJvY2VzcycpIHtcbiAgICAgIGNvbnRlbnQgPSAnPyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0sXG4gIGRpbWVuc2lvbnM6IGZ1bmN0aW9uIGRpbWVuc2lvbnMobm9kZSkge1xuICAgIHZhciBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgdmFyIGRpbSA9IHNiZ25TdHlsZS5nZXQoc2JnbkNsYXNzKTtcbiAgICBpZiAoZGltID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc2JnbkNsYXNzICsgJyBkb2VzIG5vdCBoYXZlIGEgZGVmYXVsdCB3aWR0aCAvIGhlaWdodCcpO1xuICAgIH1cbiAgICByZXR1cm4gZGltO1xuICB9LFxuICB3aWR0aDogZnVuY3Rpb24gd2lkdGgobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMobm9kZSkudztcbiAgfSxcbiAgaGVpZ2h0OiBmdW5jdGlvbiBoZWlnaHQobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMobm9kZSkuaDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50U3R5bGU7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIHRleHRXaWR0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG52YXIgYmFzZVNoYXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgc2JnbkRhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgYXV4aWxpYXJ5SXRlbXMgPSB7XG4gIG11bHRpSW1nQ2xvbmVNYXJrZXI6IGZ1bmN0aW9uIG11bHRpSW1nQ2xvbmVNYXJrZXIoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgdmFyIGNsb25lU3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKS5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xuXG4gICAgcmV0dXJuIGJhc2VTaGFwZXMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNsb25lU3R5bGUpO1xuICB9LFxuICBtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uOiBmdW5jdGlvbiBtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHVJbmZvKSB7XG4gICAgdmFyIGJvcmRlcldpZHRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiAzO1xuICAgIHZhciBmb250U2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogMTQ7XG5cbiAgICB2YXIgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XG4gICAgdmFyIHVpbmZvUmVjdFN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICcnICsgYm9yZGVyV2lkdGgpLnNldCgnZmlsbCcsICd3aGl0ZScpLnNldCgnZmlsbC1vcGFjaXR5JywgMSk7XG5cbiAgICB2YXIgdGV4dFN0eWxlID0gbmV3IE1hcCgpLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpLnNldCgnZm9udC1zaXplJywgZm9udFNpemUgKyAncHgnKS5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKS5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgdmFyIHVJbmZvV2lkdGggPSB0ZXh0V2lkdGgodGV4dCwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplIH0pICsgNTtcblxuICAgIHZhciB1bml0T2ZJbmZvcm1hdGlvblN2ZyA9ICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5yb3VuZFJlY3RhbmdsZSh4LCB5LCB1SW5mb1dpZHRoLCBoZWlnaHQsIHVpbmZvUmVjdFN0eWxlKSArICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy50ZXh0KHRleHQsIHggKyB1SW5mb1dpZHRoIC8gMiwgeSArIGhlaWdodCAvIDIsIHRleHRTdHlsZSkgKyAnXFxuICAgICc7XG5cbiAgICByZXR1cm4gdW5pdE9mSW5mb3JtYXRpb25Tdmc7XG4gIH0sXG4gIG11bHRpSW1nU3RhdGVWYXI6IGZ1bmN0aW9uIG11bHRpSW1nU3RhdGVWYXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhdGVWYXIpIHtcbiAgICB2YXIgYm9yZGVyV2lkdGggPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDM7XG4gICAgdmFyIGZvbnRTaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiAxNDtcblxuXG4gICAgdmFyIHN0YXRlVmFyU3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJycgKyBib3JkZXJXaWR0aCkuc2V0KCdmaWxsJywgJ3doaXRlJykuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIHZhciB0ZXh0U3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJykuc2V0KCdmb250LXNpemUnLCBmb250U2l6ZSArICdweCcpLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbiAgICB2YXIgdHcgPSB0ZXh0V2lkdGgoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZSB9KSArIDEwO1xuICAgIHZhciB3ID0gTWF0aC5tYXgodHcsIDMwKTtcbiAgICB2YXIgc3RhdGV2YXJpYWJsZVN2ZyA9ICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5zdGFkaXVtKHgsIHksIHcsIGhlaWdodCwgc3RhdGVWYXJTdHlsZSkgKyAnXFxuICAgICAgJyArIGJhc2VTaGFwZXMudGV4dChzYmduRGF0YS5zdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeCArIHcgLyAyLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKSArICdcXG4gICAgJztcblxuICAgIHJldHVybiBzdGF0ZXZhcmlhYmxlU3ZnO1xuICB9LFxuICBjbG9uZU1hcmtlcjogZnVuY3Rpb24gY2xvbmVNYXJrZXIobm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBzaGFwZUZuLCBzaGFwZUZuQXJncykge1xuICAgIHZhciBjbGlwSWQgPSAnY2xvbmVtYXJrZXInO1xuXG4gICAgdmFyIGNsb25lTWFya2VyU3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpLnNldCgnY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBJZCArICcpJykuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcblxuICAgIHZhciBjbG9uZU1hcmtlclN2ZyA9ICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5jbGlwUGF0aChjbGlwSWQsIGJhc2VTaGFwZXMucmVjdGFuZ2xlLCBbMCwgMyAqIG5vZGVIZWlnaHQgLyA0LCBub2RlV2lkdGgsIG5vZGVIZWlnaHQsIG5ldyBNYXAoKV0pICsgJ1xcbiAgICAgICcgKyBzaGFwZUZuLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHNoYXBlRm5BcmdzKS5jb25jYXQoW2Nsb25lTWFya2VyU3R5bGVdKSkgKyAnXFxuICAgICc7XG5cbiAgICByZXR1cm4gY2xvbmVNYXJrZXJTdmc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXV4aWxpYXJ5SXRlbXM7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHNiZ25TdHlsZVNoZWV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN5dG9zY2FwZSkge1xuICByZXR1cm4gc2JnblN0eWxlU2hlZXQoY3l0b3NjYXBlKTtcbn07XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZWxlbWVudFN0eWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBzYmduc3ZnID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIHNiZ25TdHlsZVNoZWV0ID0gZnVuY3Rpb24gc2JnblN0eWxlU2hlZXQoY3l0b3NjYXBlKSB7XG5cbiAgcmV0dXJuIGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgLy8gZ2VuZXJhbCBub2RlIHN0eWxlXG4gIC5zZWxlY3Rvcignbm9kZScpLmNzcyh7XG4gICAgJ3NoYXBlJzogZnVuY3Rpb24gc2hhcGUobm9kZSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRTdHlsZS5zYmduU2hhcGUobm9kZSk7XG4gICAgfSxcbiAgICAnY29udGVudCc6IGZ1bmN0aW9uIGNvbnRlbnQobm9kZSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRTdHlsZS5zYmduQ29udGVudChub2RlKTtcbiAgICB9LFxuICAgICdmb250LXNpemUnOiAyMCxcbiAgICAnd2lkdGgnOiBmdW5jdGlvbiB3aWR0aChub2RlKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFN0eWxlLndpZHRoKG5vZGUpO1xuICAgIH0sXG4gICAgJ2hlaWdodCc6IGZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFN0eWxlLmhlaWdodChub2RlKTtcbiAgICB9LFxuICAgICd0ZXh0LXZhbGlnbic6ICdjZW50ZXInLFxuICAgICd0ZXh0LWhhbGlnbic6ICdjZW50ZXInLFxuICAgICdib3JkZXItd2lkdGgnOiAxLjUsXG4gICAgJ2JvcmRlci1jb2xvcic6ICcjNTU1JyxcbiAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZjZmNmY2JyxcbiAgICAndGV4dC1vcGFjaXR5JzogMSxcbiAgICAnb3BhY2l0eSc6IDEsXG4gICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICd3aGl0ZScsXG4gICAgJ3RleHQtb3V0bGluZS1vcGFjaXR5JzogMSxcbiAgICAndGV4dC1vdXRsaW5lLXdpZHRoJzogMC43NVxuICB9KS5zZWxlY3Rvcignbm9kZTpzZWxlY3RlZCcpLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjMDAwJyxcbiAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJyMwMDAnXG4gIH0pLnNlbGVjdG9yKCdub2RlOmFjdGl2ZScpLmNzcyh7XG4gICAgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgJ292ZXJsYXktcGFkZGluZyc6ICcxNCdcbiAgfSlcblxuICAvLyBkcmF3IHNiZ24gc3BlY2lmaWMgc3R5bGluZyAoYXV4aWxpYXJ5IGl0ZW1zLCBjbG9uZW1hcmtlciwgZXRjLilcbiAgLnNlbGVjdG9yKCdcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInVuc3BlY2lmaWVkIGVudGl0eVwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbFwiXSwgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGVcIl0sIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmVcIl0sIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBlcnR1cmJpbmcgYWdlbnRcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwaGVub3R5cGVcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdXFxuICAgICAgICAnKS5jc3Moe1xuICAgICdiYWNrZ3JvdW5kLWltYWdlJzogZnVuY3Rpb24gYmFja2dyb3VuZEltYWdlKG5vZGUpIHtcbiAgICAgIHJldHVybiBzYmduc3ZnLmRyYXcobm9kZSkuYmdJbWFnZTtcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogZnVuY3Rpb24gYmFja2dyb3VuZFdpZHRoKG5vZGUpIHtcbiAgICAgIHJldHVybiBzYmduc3ZnLmRyYXcobm9kZSkuYmdXaWR0aDtcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiBmdW5jdGlvbiBiYWNrZ3JvdW5kUG9zaXRpb25YKG5vZGUpIHtcbiAgICAgIHJldHVybiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NYO1xuICAgIH0sXG4gICAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IGZ1bmN0aW9uIGJhY2tncm91bmRQb3NpdGlvblkobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1k7XG4gICAgfSxcbiAgICAnYmFja2dyb3VuZC1maXQnOiBmdW5jdGlvbiBiYWNrZ3JvdW5kRml0KG5vZGUpIHtcbiAgICAgIHJldHVybiBzYmduc3ZnLmRyYXcobm9kZSkuYmdGaXQ7XG4gICAgfSxcbiAgICAnYmFja2dyb3VuZC1jbGlwJzogZnVuY3Rpb24gYmFja2dyb3VuZENsaXAobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5iZ0NsaXA7XG4gICAgfSxcbiAgICAncGFkZGluZyc6IGZ1bmN0aW9uIHBhZGRpbmcobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5wYWRkaW5nO1xuICAgIH0sXG4gICAgJ2JvcmRlci13aWR0aCc6IGZ1bmN0aW9uIGJvcmRlcldpZHRoKG5vZGUpIHtcbiAgICAgIHJldHVybiBzYmduc3ZnLmRyYXcobm9kZSkuYm9yZGVyV2lkdGg7XG4gICAgfVxuICB9KS5zZWxlY3RvcignXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdXFxuICAgICAgICAnKS5jc3Moe1xuICAgICdnaG9zdCc6ICd5ZXMnLFxuICAgICdnaG9zdC1vcGFjaXR5JzogMVxuICB9KS5zZWxlY3RvcignXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl1cXG4gICAgICAgICcpLmNzcyh7XG4gICAgJ2dob3N0LW9mZnNldC14JzogMTIsXG4gICAgJ2dob3N0LW9mZnNldC15JzogMTJcbiAgfSkuc2VsZWN0b3IoJ1xcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdXFxuICAgICAgICAnKS5jc3Moe1xuICAgICdnaG9zdC1vZmZzZXQteCc6IDUsXG4gICAgJ2dob3N0LW9mZnNldC15JzogNVxuICB9KS5zZWxlY3RvcignXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdXFxuICAgICAgICAnKS5jc3Moe1xuICAgICdnaG9zdC1vZmZzZXQteCc6IDE2LFxuICAgICdnaG9zdC1vZmZzZXQteSc6IDE2XG4gIH0pXG5cbiAgLy8gY29tcG91bmQgbm9kZSBzcGVjaWZpYyBzdHlsZVxuICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdJykuY3NzKHtcbiAgICAnY29tcG91bmQtc2l6aW5nLXdydC1sYWJlbHMnOiAnZXhjbHVkZScsXG4gICAgJ3RleHQtdmFsaWduJzogJ2JvdHRvbScsXG4gICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcidcbiAgfSlcblxuICAvLyBwcm9jZXNzIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKS5jc3Moe1xuICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAxXG4gIH0pLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0nKS5jc3Moe1xuICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QjZCNkInXG4gIH0pXG5cbiAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcbiAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXG4gIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cInNvdXJjZSBhbmQgc2lua1wiXScpLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBmdW5jdGlvbiBiYWNrZ3JvdW5kSW1hZ2Uobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKTtcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLWZpdCc6ICdub25lJyxcbiAgICAnYmFja2dyb3VuZC13aWR0aCc6ICcxMDAlJyxcbiAgICAnYmFja2dyb3VuZC1oZWlnaHQnOiAnMTAwJScsXG4gICAgJ2JhY2tncm91bmQtY2xpcCc6ICdub25lJyxcbiAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAnYm9yZGVyLXdpZHRoJzogMCxcbiAgICAnc2hhcGUtcG9seWdvbi1wb2ludHMnOiAnLTAuODYsIDAuNSwgLTAuNzUsIDAuNjUsIC0xLCAwLjk1LCAtMC45NSwgMSwgLTAuNjUsIDAuNzUsIC0wLjUsIDAuODYsIDAsIDEsIDAuNSwgMC44NiwgMC43MSwgMC43MSwgMC44NiwgMC41LCAxLCAwLCAwLjg2LCAtMC41LCAwLjc1LCAtMC42NSwgMSwgLTAuOTUsIDAuOTUsIC0xLCAwLjY1LCAtMC43NSwgMC41LCAtMC44NiwgMCwgLTEsIC0wLjUsIC0wLjg2LCAtMC43MSwgLTAuNzEsIC0wLjg2LCAtMC41LCAtMSwgMCdcbiAgfSlcblxuICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxuICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcbiAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiZGlzc29jaWF0aW9uXCJdJykuY3NzKHtcbiAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGZ1bmN0aW9uIGJhY2tncm91bmRJbWFnZShub2RlKSB7XG4gICAgICByZXR1cm4gc2JnbnN2Zy5kcmF3KG5vZGUpO1xuICAgIH0sXG4gICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxuICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxuICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcbiAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxuICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICdib3JkZXItd2lkdGgnOiAwXG4gIH0pXG5cbiAgLy8gZWRnZSBzdHlsaW5nXG4gIC5zZWxlY3RvcignZWRnZScpLmNzcyh7XG4gICAgJ2Fycm93LXNjYWxlJzogMS43NSxcbiAgICAnY3VydmUtc3R5bGUnOiAnYmV6aWVyJyxcbiAgICAnbGluZS1jb2xvcic6ICcjNTU1JyxcbiAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnaG9sbG93JyxcbiAgICAnc291cmNlLWFycm93LWZpbGwnOiAnaG9sbG93JyxcbiAgICAnd2lkdGgnOiAxLjUsXG4gICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjNTU1JyxcbiAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyM1NTUnLFxuICAgICd0ZXh0LWJvcmRlci1jb2xvcic6ICcjNTU1JyxcbiAgICAnY29sb3InOiAnIzU1NSdcbiAgfSkuc2VsZWN0b3IoJ2VkZ2U6c2VsZWN0ZWQnKS5jc3Moe1xuICAgICdjb2xvcic6ICcjZDY3NjE0JyxcbiAgICAnbGluZS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAndGV4dC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNkNjc2MTQnXG4gIH0pLnNlbGVjdG9yKCdlZGdlOmFjdGl2ZScpLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAuNywgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgJ292ZXJsYXktcGFkZGluZyc6ICc4J1xuICB9KS5zZWxlY3RvcignZWRnZVtjYXJkaW5hbGl0eSA+IDBdJykuY3NzKHtcbiAgICAndGV4dC1iYWNrZ3JvdW5kLXNoYXBlJzogJ3JlY3RhbmdsZScsXG4gICAgJ3RleHQtYm9yZGVyLW9wYWNpdHknOiAnMScsXG4gICAgJ3RleHQtYm9yZGVyLXdpZHRoJzogJzEnLFxuICAgICd0ZXh0LWJhY2tncm91bmQtY29sb3InOiAnd2hpdGUnLFxuICAgICd0ZXh0LWJhY2tncm91bmQtb3BhY2l0eSc6ICcxJ1xuICB9KS5zZWxlY3RvcignZWRnZVtjbGFzcz1cImNvbnN1bXB0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0sIGVkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0nKS5jc3Moe1xuICAgICdzb3VyY2UtbGFiZWwnOiBmdW5jdGlvbiBzb3VyY2VMYWJlbChlZGdlKSB7XG4gICAgICByZXR1cm4gJycgKyBlZGdlLmRhdGEoJ2NhcmRpbmFsaXR5Jyk7XG4gICAgfSxcbiAgICAnc291cmNlLXRleHQtb2Zmc2V0JzogMTBcbiAgfSkuc2VsZWN0b3IoJ2VkZ2VbY2xhc3NdJykuY3NzKHtcbiAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogZnVuY3Rpb24gdGFyZ2V0QXJyb3dTaGFwZShlZGdlKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFN0eWxlLnNiZ25BcnJvd1NoYXBlKGVkZ2UpO1xuICAgIH0sXG4gICAgJ3NvdXJjZS1hcnJvdy1zaGFwZSc6ICdub25lJ1xuICB9KS5zZWxlY3RvcignZWRnZVtjbGFzcz1cImluaGliaXRpb25cIl0nKS5jc3Moe1xuICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXG4gIH0pLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXScpLmNzcyh7XG4gICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgfSlcblxuICAvLyBjb3JlXG4gIC5zZWxlY3RvcignY29yZScpLmNzcyh7XG4gICAgJ3NlbGVjdGlvbi1ib3gtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgJ3NlbGVjdGlvbi1ib3gtb3BhY2l0eSc6ICcwLjInLCAnc2VsZWN0aW9uLWJveC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCdcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25TdHlsZVNoZWV0O1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIG1lbW9pemUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgY29udGFpbmVyTm9kZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIGVudGl0eVBvb2xOb2RlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIHByb2Nlc3NOb2RlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG52YXIgc2JnbkRhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgY2FjaGVLZXlGbiA9IGZ1bmN0aW9uIGNhY2hlS2V5Rm4obm9kZSkge1xuICByZXR1cm4gJycgKyBKU09OLnN0cmluZ2lmeShub2RlLmlkKCkpO1xufTtcblxudmFyIHNiZ25Ob2RlU2hhcGVNYXAgPSBuZXcgTWFwKClcbi8vIHByb2Nlc3Mgbm9kZXNcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIG1lbW9pemUocHJvY2Vzc05vZGVzLmRpc3NvY2lhdGlvbiwgY2FjaGVLZXlGbikpLnNldCgncGhlbm90eXBlJywgbWVtb2l6ZShwcm9jZXNzTm9kZXMucGhlbm90eXBlLCBjYWNoZUtleUZuKSlcblxuLy8gZW50aXR5IHBvb2wgbm9kZXNcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnNvdXJjZUFuZFNpbmssIGNhY2hlS2V5Rm4pKS5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnVuc3BlY2lmaWVkRW50aXR5LCBjYWNoZUtleUZuKSkuc2V0KCdzaW1wbGUgY2hlbWljYWwnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5zaW1wbGVDaGVtaWNhbCwgY2FjaGVLZXlGbikpLnNldCgnbWFjcm9tb2xlY3VsZScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLm1hY3JvbW9sZWN1bGUsIGNhY2hlS2V5Rm4pKS5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubnVjbGVpY0FjaWRGZWF0dXJlLCBjYWNoZUtleUZuKSkuc2V0KCdjb21wbGV4JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuY29tcGxleCwgY2FjaGVLZXlGbikpLnNldCgncGVydHVyYmluZyBhZ2VudCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnBlcnR1cmJpbmdBZ2VudCwgY2FjaGVLZXlGbikpXG5cbi8vIGNvbnRhaW5lciBub2Rlc1xuLnNldCgnY29tcGFydG1lbnQnLCBtZW1vaXplKGNvbnRhaW5lck5vZGVzLmNvbXBhcnRtZW50LCBjYWNoZUtleUZuKSk7XG5cbnZhciBkcmF3ID0gZnVuY3Rpb24gZHJhdyhub2RlKSB7XG4gIHZhciBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICB2YXIgc2hhcGVGbiA9IHNiZ25Ob2RlU2hhcGVNYXAuZ2V0KHNiZ25DbGFzcyk7XG4gIGlmIChzaGFwZUZuID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNiZ25DbGFzcyArICcgZG9lcyBub3QgaGF2ZSBhIHNoYXBlIGltcGxlbWVudGF0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlRm4obm9kZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZHJhdzogZHJhd1xufTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBzdmdTdHIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLnN2Z1N0cjtcbnZhciBzYmduRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgbWVtb2l6ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBhdXhpbGlhcnlJdGVtcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgYmFzZVNoYXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBjb250YWluZXJOb2RlcyA9IHtcbiAgY29tcGFydG1lbnQ6IGZ1bmN0aW9uIGNvbXBhcnRtZW50KG5vZGUpIHtcbiAgICB2YXIgYXV4SXRlbVdpZHRoID0gNjA7XG4gICAgdmFyIGF1eEl0ZW1IZWlnaHQgPSA0MDtcbiAgICB2YXIgdUluZm9zID0gc2JnbkRhdGEuZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XG5cbiAgICB2YXIgdUluZm9TdmcgPSBzdmdTdHIodUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0pIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgbGluZVN2ZyA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtsaW5lU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcyNSUnXSxcbiAgICAgIGJnUG9zWTogWycxOXB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb250YWluJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzM4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6ICc0J1xuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVyTm9kZXM7XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGJhc2VTaGFwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIGF1eGlsaWFyeUl0ZW1zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIHN2Z1N0ciA9IF9fd2VicGFja19yZXF1aXJlX18oMSkuc3ZnU3RyO1xudmFyIGdldFVuaXRJbmZvcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkuZ2V0VW5pdEluZm9zO1xudmFyIGdldFN0YXRlVmFycyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkuZ2V0U3RhdGVWYXJzO1xudmFyIGhhc0Nsb25lbWFya2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKS5oYXNDbG9uZW1hcmtlcjtcblxudmFyIGVsZW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgZW50aXR5UG9vbE5vZGVzID0ge1xuICB1bnNwZWNpZmllZEVudGl0eTogZnVuY3Rpb24gdW5zcGVjaWZpZWRFbnRpdHkobm9kZSkge1xuICAgIHZhciBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgdmFyIGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICB2YXIgYm9yZGVyV2lkdGggPSAyO1xuICAgIHZhciBmb250U2l6ZSA9IDEwO1xuICAgIHZhciB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgdmFyIHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICB2YXIgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdUluZm9TdmcgPSBzdmdTdHIodUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBzVmFyU3ZnID0gc3ZnU3RyKHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHRvcExpbmUgPSBzdmdTdHIodUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBib3R0b21MaW5lID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzMycHgnLCAnNDRweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9LFxuICBzaW1wbGVDaGVtaWNhbDogZnVuY3Rpb24gc2ltcGxlQ2hlbWljYWwobm9kZSkge1xuICAgIHZhciBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgdmFyIGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICB2YXIgYm9yZGVyV2lkdGggPSAyO1xuICAgIHZhciBmb250U2l6ZSA9IDEwO1xuICAgIHZhciB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICB2YXIgc3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIHZhciBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciB1SW5mb1N2ZyA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHRvcExpbmUgPSBzdmdTdHIodUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBib3R0b21MaW5lID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMTJweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzQ4cHgnLCAnMHB4J10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG4gIG1hY3JvbW9sZWN1bGU6IGZ1bmN0aW9uIG1hY3JvbW9sZWN1bGUobm9kZSkge1xuICAgIHZhciBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgdmFyIGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICB2YXIgYm9yZGVyV2lkdGggPSAyO1xuICAgIHZhciBmb250U2l6ZSA9IDEwO1xuICAgIHZhciB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgdmFyIHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICB2YXIgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdUluZm9TdmcgPSBzdmdTdHIodUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBzVmFyU3ZnID0gc3ZnU3RyKHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHRvcExpbmUgPSBzdmdTdHIodUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBib3R0b21MaW5lID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG4gIG51Y2xlaWNBY2lkRmVhdHVyZTogZnVuY3Rpb24gbnVjbGVpY0FjaWRGZWF0dXJlKG5vZGUpIHtcbiAgICB2YXIgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIHZhciBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgdmFyIGJvcmRlcldpZHRoID0gMjtcbiAgICB2YXIgZm9udFNpemUgPSAxMDtcbiAgICB2YXIgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIHZhciBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIHZhciBzdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgdmFyIGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHVJbmZvU3ZnID0gc3ZnU3RyKHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgc1ZhclN2ZyA9IHN2Z1N0cihzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciB0b3BMaW5lID0gc3ZnU3RyKHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBib3R0b21MaW5lID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG4gIGNvbXBsZXg6IGZ1bmN0aW9uIGNvbXBsZXgobm9kZSkge1xuICAgIHZhciBpdGVtVyA9IDYwO1xuICAgIHZhciBpdGVtSCA9IDI0O1xuICAgIHZhciB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgdmFyIHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgdmFyIGltYWdlcyA9IFtdO1xuICAgIHZhciBiZ1dpZHRoID0gW107XG4gICAgdmFyIGJnSGVpZ2h0ID0gW107XG4gICAgdmFyIGJnUG9zWCA9IFtdO1xuICAgIHZhciBiZ1Bvc1kgPSBbXTtcbiAgICB2YXIgYmdGaXQgPSBbXTtcblxuICAgIHZhciBzdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNTU1NTU1Jykuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xuXG4gICAgLy8gb3JkZXIgb2Ygc3ZnIGltYWdlIGdlbmVyYXRpb24gbWF0dGVyc1xuICAgIGlmICh1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHRvcExpbmVTdmcgPSBzdmdTdHIoYmFzZVNoYXBlcy5saW5lKDAsIDAsIGl0ZW1XLCAwLCBzdHlsZSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaCh0b3BMaW5lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTFweCcpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xuICAgICAgdmFyIGJvdHRvbUxpbmVTdmcgPSBzdmdTdHIoYmFzZVNoYXBlcy5saW5lKDAsIDAsIGl0ZW1XLCAwLCBzdHlsZSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChib3R0b21MaW5lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xuICAgICAgdmFyIGNsb25lU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgaXRlbVcsIGl0ZW1IIC0gMyksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChjbG9uZVN2Zyk7XG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAodUluZm9zLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB1SW5mb1N2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGl0ZW1XIC0gNSwgaXRlbUggLSAzLCB1SW5mb3NbMF0pLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2godUluZm9TdmcpO1xuICAgICAgYmdQb3NYLnB1c2goJzI1JScpO1xuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKHNWYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBzVmFyU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHNWYXJzWzBdKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKHNWYXJTdmcpO1xuICAgICAgYmdQb3NYLnB1c2goJzg4JScpO1xuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IGltYWdlcyxcbiAgICAgIGJnV2lkdGg6IGJnV2lkdGgsXG4gICAgICBiZ1Bvc1g6IGJnUG9zWCxcbiAgICAgIGJnUG9zWTogYmdQb3NZLFxuICAgICAgYmdGaXQ6IGJnRml0LFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnMjJweCcsXG4gICAgICBib3JkZXJXaWR0aDogNFxuICAgIH07XG4gIH0sXG4gIHNvdXJjZUFuZFNpbms6IGZ1bmN0aW9uIHNvdXJjZUFuZFNpbmsobm9kZSkge1xuICAgIHZhciBfZWxlbWVudCRkaW1lbnNpb25zID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpLFxuICAgICAgICBudyA9IF9lbGVtZW50JGRpbWVuc2lvbnMudyxcbiAgICAgICAgbmggPSBfZWxlbWVudCRkaW1lbnNpb25zLmg7XG5cbiAgICB2YXIgY2VudGVyWCA9IG53IC8gMjtcbiAgICB2YXIgY2VudGVyWSA9IG5oIC8gMjtcbiAgICB2YXIgcmFkaXVzID0gKG53IC0gMikgLyAyO1xuXG4gICAgdmFyIHN0eWxlTWFwID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKS5zZXQoJ3N0cm9rZS1saW5lY2FwJywgJ3NxdWFyZScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICB2YXIgc2hhcGVBcmdzID0gW2NlbnRlclgsIGNlbnRlclksIHJhZGl1c107XG5cbiAgICB2YXIgc291cmNlQW5kU2lua1N2ZyA9ICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5jaXJjbGUuYXBwbHkoYmFzZVNoYXBlcywgc2hhcGVBcmdzLmNvbmNhdChbc3R5bGVNYXBdKSkgKyAnXFxuICAgICAgJyArIChoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLmNsb25lTWFya2VyKG53LCBuaCwgYmFzZVNoYXBlcy5jaXJjbGUsIHNoYXBlQXJncykgOiAnJykgKyAnXFxuICAgICAgJyArIGJhc2VTaGFwZXMubGluZSgwLCBuaCwgbncsIDAsIHN0eWxlTWFwKSArICdcXG4gICAgJztcblxuICAgIHJldHVybiBzdmdTdHIoc291cmNlQW5kU2lua1N2ZywgbncsIG5oLCAwLCAwLCBudywgbmgpO1xuICB9LFxuICBwZXJ0dXJiaW5nQWdlbnQ6IGZ1bmN0aW9uIHBlcnR1cmJpbmdBZ2VudChub2RlKSB7XG4gICAgdmFyIGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICB2YXIgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIHZhciBib3JkZXJXaWR0aCA9IDI7XG4gICAgdmFyIGZvbnRTaXplID0gMTA7XG4gICAgdmFyIHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIHZhciBzdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgdmFyIGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHVJbmZvU3ZnID0gc3ZnU3RyKHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdG9wTGluZSA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIGJvdHRvbUxpbmUgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTZweCcsICc4cHgnLCAnNTZweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudGl0eVBvb2xOb2RlcztcblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmFzZVNoYXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgYXV4aWxpYXJ5SXRlbXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgc3ZnU3RyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKS5zdmdTdHI7XG52YXIgaGFzQ2xvbmVtYXJrZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLmhhc0Nsb25lbWFya2VyO1xuXG52YXIgZWxlbWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBwcm9jZXNzTm9kZXMgPSB7XG4gIGRpc3NvY2lhdGlvbjogZnVuY3Rpb24gZGlzc29jaWF0aW9uKG5vZGUpIHtcbiAgICB2YXIgX2VsZW1lbnQkZGltZW5zaW9ucyA9IGVsZW1lbnQuZGltZW5zaW9ucyhub2RlKSxcbiAgICAgICAgbncgPSBfZWxlbWVudCRkaW1lbnNpb25zLncsXG4gICAgICAgIG5oID0gX2VsZW1lbnQkZGltZW5zaW9ucy5oO1xuXG4gICAgdmFyIGNlbnRlclggPSBudyAvIDI7XG4gICAgdmFyIGNlbnRlclkgPSBuaCAvIDI7XG4gICAgdmFyIG91dGVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDI7XG4gICAgdmFyIGlubmVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDM7XG5cbiAgICB2YXIgc3R5bGVNYXAgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzInKS5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgdmFyIGRpc3NvY2lhdGlvblN2ZyA9ICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgb3V0ZXJSYWRpdXMsIHN0eWxlTWFwKSArICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgaW5uZXJSYWRpdXMsIHN0eWxlTWFwKSArICdcXG4gICAgJztcbiAgICByZXR1cm4gc3ZnU3RyKGRpc3NvY2lhdGlvblN2ZywgbncsIG5oKTtcbiAgfSxcbiAgcGhlbm90eXBlOiBmdW5jdGlvbiBwaGVub3R5cGUobm9kZSkge1xuICAgIHZhciBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgdmFyIGF1eEl0ZW1IZWlnaHQgPSAyMDtcblxuICAgIHZhciBzdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgdmFyIGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgYm90dG9tTGluZSA9IHN2Z1N0cihoYXNDbG9uZW1hcmtlcihub2RlKSA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIGNsb25lTWFya2VyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzU2cHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc05vZGVzO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9idWlsZC9idW5kbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=