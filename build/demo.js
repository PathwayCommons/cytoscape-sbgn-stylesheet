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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStylesheet = __webpack_require__(3);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0), __webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

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
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
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

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjljNDAxNmE2MzdmYzA5Mjg5MWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvYnVuZGxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6WyJzYmduU3R5bGVzaGVldCIsInJlcXVpcmUiLCJjeXRvc2NhcGUiLCJ3aW5kb3ciLCJjeSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbGVtZW50cyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJsYXlvdXQiLCJuYW1lIiwic3R5bGUiLCJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsInNlbGYiLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXyIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJzYmduRGF0YUhhbmRsZXIiLCJpc011bHRpbWVyIiwibm9kZSIsImRhdGEiLCJpbmNsdWRlcyIsImhhc0Nsb25lbWFya2VyIiwiZ2V0U3RhdGVWYXJzIiwiZ2V0VW5pdEluZm9zIiwiaGFzQXV4SXRlbXMiLCJsZW5ndGgiLCJzYmduQ2xhc3MiLCJlbGVtZW50Iiwic2JnbkxhYmVsIiwic3RhdGVWYXJMYWJlbCIsInN0YXRlVmFyIiwidmFyaWFibGUiLCJzdGF0ZSIsInZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJzbGljZUl0ZXJhdG9yIiwiYXJyIiwiX2FyciIsIl9uIiwiX2QiLCJfZSIsInVuZGVmaW5lZCIsIl9pIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIm5leHQiLCJkb25lIiwicHVzaCIsImVyciIsIkFycmF5IiwiaXNBcnJheSIsIlR5cGVFcnJvciIsInN0eWxlTWFwMlN0ciIsInN0eWxlTWFwIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIl9yZWYiLCJfcmVmMiIsImsiLCJ2IiwicmV0dXJuIiwic3ZnIiwic3ZnU3RyIiwid2lkdGgiLCJhcmd1bWVudHMiLCJoZWlnaHQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJzdmdUZXh0IiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50Iiwidmlld1BvcnRXaWR0aCIsInZpZXdQb3J0SGVpZ2h0Iiwidmlld0JveFgiLCJ2aWV3Qm94WSIsInZpZXdCb3hXaWR0aCIsInZpZXdCb3hIZWlnaHQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvdXRlckhUTUwiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIyIiwiZnJvbSIsImJhc2VSZWN0YW5nbGUiLCJ4IiwieSIsInciLCJoIiwicjEiLCJyMiIsInIzIiwicjQiLCJiYXNlU2hhcGVzIiwiYmFycmVsIiwiY2lyY2xlIiwiY3giLCJyIiwiY2xpcFBhdGgiLCJpZCIsImJhc2VTaGFwZUZuIiwiYmFzZVNoYXBlRm5BcmdzIiwiYXBwbHkiLCJjb25jYXZlSGV4YWdvbiIsImN1dFJlY3RhbmdsZSIsImNvcm5lckxlbmd0aCIsImVsbGlwc2UiLCJyeCIsInJ5IiwiaGV4YWdvbiIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInJlY3RhbmdsZSIsInJvdW5kQm90dG9tUmVjdGFuZ2xlIiwicm91bmRSZWN0YW5nbGUiLCJzdGFkaXVtIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwibWF4Iiwic3F1YXJlIiwidGV4dCIsInQiLCJzYmduRGF0YSIsInNiZ25TdHlsZSIsIk1hcCIsInNldCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnblNoYXBlIiwicmVwbGFjZSIsInNiZ25BcnJvd1NoYXBlIiwiZWRnZSIsInNiZ25Db250ZW50IiwiY29udGVudCIsImRpbWVuc2lvbnMiLCJkaW0iLCJ0ZXh0V2lkdGgiLCJhdXhpbGlhcnlJdGVtcyIsIm11bHRpSW1nQ2xvbmVNYXJrZXIiLCJjbG9uZVN0eWxlIiwibXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiIsInVJbmZvIiwiYm9yZGVyV2lkdGgiLCJmb250U2l6ZSIsImxhYmVsIiwidWluZm9SZWN0U3R5bGUiLCJ0ZXh0U3R5bGUiLCJ1SW5mb1dpZHRoIiwiZmFtaWx5Iiwic2l6ZSIsInVuaXRPZkluZm9ybWF0aW9uU3ZnIiwibXVsdGlJbWdTdGF0ZVZhciIsInN0YXRlVmFyU3R5bGUiLCJ0dyIsInN0YXRldmFyaWFibGVTdmciLCJjbG9uZU1hcmtlciIsIm5vZGVXaWR0aCIsIm5vZGVIZWlnaHQiLCJzaGFwZUZuIiwic2hhcGVGbkFyZ3MiLCJjbGlwSWQiLCJjbG9uZU1hcmtlclN0eWxlIiwiY2xvbmVNYXJrZXJTdmciLCJjb25jYXQiLCJzYmduU3R5bGVTaGVldCIsImRlZmF1bHRPcHRpb25zIiwic2JnbnN2ZyIsInN0eWxlc2hlZXQiLCJzZWxlY3RvciIsImNzcyIsImJhY2tncm91bmRJbWFnZSIsImRyYXciLCJiZ0ltYWdlIiwiYmFja2dyb3VuZFdpZHRoIiwiYmdXaWR0aCIsImJhY2tncm91bmRQb3NpdGlvblgiLCJiZ1Bvc1giLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmdQb3NZIiwiYmFja2dyb3VuZEZpdCIsImJnRml0IiwiYmFja2dyb3VuZENsaXAiLCJiZ0NsaXAiLCJwYWRkaW5nIiwic291cmNlTGFiZWwiLCJ0YXJnZXRBcnJvd1NoYXBlIiwibWVtb2l6ZSIsImNvbnRhaW5lck5vZGVzIiwiZW50aXR5UG9vbE5vZGVzIiwicHJvY2Vzc05vZGVzIiwiY2FjaGVLZXlGbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYmduTm9kZVNoYXBlTWFwIiwiZGlzc29jaWF0aW9uIiwicGhlbm90eXBlIiwic291cmNlQW5kU2luayIsInVuc3BlY2lmaWVkRW50aXR5Iiwic2ltcGxlQ2hlbWljYWwiLCJtYWNyb21vbGVjdWxlIiwibnVjbGVpY0FjaWRGZWF0dXJlIiwiY29tcGxleCIsInBlcnR1cmJpbmdBZ2VudCIsImNvbXBhcnRtZW50IiwiYXV4SXRlbVdpZHRoIiwiYXV4SXRlbUhlaWdodCIsInVJbmZvcyIsInVJbmZvU3ZnIiwibGluZVN2ZyIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsImJvdHRvbUxpbmVTdmciLCJjbG9uZVN2ZyIsIl9lbGVtZW50JGRpbWVuc2lvbnMiLCJudyIsIm5oIiwiY2VudGVyWCIsImNlbnRlclkiLCJyYWRpdXMiLCJzaGFwZUFyZ3MiLCJzb3VyY2VBbmRTaW5rU3ZnIiwib3V0ZXJSYWRpdXMiLCJtaW4iLCJpbm5lclJhZGl1cyIsImRpc3NvY2lhdGlvblN2ZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixh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QTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLENBQW9COztBQUUvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsQ0FBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLG1EQUFtRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOXJCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vYnVpbGQvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5YzQwMTZhNjM3ZmMwOTI4OTFjIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBzdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0aWYodHlwZW9mIGNhbnZhcy5nZXRDb250ZXh0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0cmV0dXJuICEhY29udGV4dCAmJiAodHlwZW9mIGNvbnRleHQubWVhc3VyZVRleHQgPT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBleHRlbmQoe1xuXHRcdFx0c3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0dmFyaWFudDogJ25vcm1hbCcsXG5cdFx0XHR3ZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRmYW1pbHk6ICdzYW5zLXNlcmlmJyxcblx0XHRcdGFsaWduOiAnc3RhcnQnLFxuXHRcdFx0YmFzZWxpbmU6ICdhbHBoYWJldGljJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIHNpemUgPSBvcHRpb25zLnNpemU7XG5cdFx0aWYodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSBzaXplID0gc2l6ZSArICdweCc7XG5cblx0XHRjb250ZXh0LmZvbnQgPSB1dGlsLmZvcm1hdCgnJXMgJXMgJXMgJXMgJXMnLFxuXHRcdFx0b3B0aW9ucy5zdHlsZSxcblx0XHRcdG9wdGlvbnMudmFyaWFudCxcblx0XHRcdG9wdGlvbnMud2VpZ2h0LFxuXHRcdFx0c2l6ZSxcblx0XHRcdG9wdGlvbnMuZmFtaWx5KTtcblx0XHRjb250ZXh0LnRleHRBbGlnbiA9IG9wdGlvbnMuYWxpZ247XG5cdFx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSB0cnVlO1xuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRlZCgpID8gaW5pdGlhbGl6ZSgpIDogKGZ1bmN0aW9uKCkge1xuXHR2YXIgd2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHdpZHRoO1xufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNiZ25TdHlsZXNoZWV0ID0gcmVxdWlyZSgnLi9idWlsZC9idW5kbGUuanMnKTtcbnZhciBjeXRvc2NhcGUgPSB3aW5kb3cuY3l0b3NjYXBlO1xuXG52YXIgY3kgPSB3aW5kb3cuY3kgPSBjeXRvc2NhcGUoe1xuICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjeScpLFxuICBlbGVtZW50czogZmV0Y2goJy4vZGVtby5qc29uJykudGhlbiggcmVzID0+IHJlcy5qc29uKCkgKSxcbiAgbGF5b3V0OiB7IG5hbWU6ICdwcmVzZXQnIH0sXG4gIHN0eWxlOiBzYmduU3R5bGVzaGVldChjeXRvc2NhcGUpXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoLm1lbW9pemVcIiksIHJlcXVpcmUoXCJ0ZXh0LXdpZHRoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaC5tZW1vaXplXCIsIFwidGV4dC13aWR0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTYmduU3R5bGVzaGVldFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaC5tZW1vaXplXCIpLCByZXF1aXJlKFwidGV4dC13aWR0aFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2gubWVtb2l6ZVwiXSwgcm9vdFtcInRleHQtd2lkdGhcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBzYmduRGF0YUhhbmRsZXIgPSB7XG4gIGlzTXVsdGltZXI6IGZ1bmN0aW9uIGlzTXVsdGltZXIobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ2NsYXNzJykuaW5jbHVkZXMoJ211bHRpbWVyJyk7XG4gIH0sXG4gIGhhc0Nsb25lbWFya2VyOiBmdW5jdGlvbiBoYXNDbG9uZW1hcmtlcihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xvbmVtYXJrZXInKTtcbiAgfSxcbiAgZ2V0U3RhdGVWYXJzOiBmdW5jdGlvbiBnZXRTdGF0ZVZhcnMobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJyk7XG4gIH0sXG4gIGdldFVuaXRJbmZvczogZnVuY3Rpb24gZ2V0VW5pdEluZm9zKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKTtcbiAgfSxcbiAgaGFzQXV4SXRlbXM6IGZ1bmN0aW9uIGhhc0F1eEl0ZW1zKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpLmxlbmd0aCArIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJykubGVuZ3RoID4gMDtcbiAgfSxcbiAgc2JnbkNsYXNzOiBmdW5jdGlvbiBzYmduQ2xhc3MoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGEoJ2NsYXNzJyk7XG4gIH0sXG4gIHNiZ25MYWJlbDogZnVuY3Rpb24gc2JnbkxhYmVsKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdsYWJlbCcpO1xuICB9LFxuICBzdGF0ZVZhckxhYmVsOiBmdW5jdGlvbiBzdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSB7XG4gICAgdmFyIHZhcmlhYmxlID0gc3RhdGVWYXIuc3RhdGUudmFyaWFibGU7XG4gICAgdmFyIHZhbHVlID0gc3RhdGVWYXIuc3RhdGUudmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHZhcmlhYmxlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgKyAnQCcgKyB2YXJpYWJsZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzYmduRGF0YUhhbmRsZXI7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBzdHlsZU1hcDJTdHIgPSBmdW5jdGlvbiBzdHlsZU1hcDJTdHIoc3R5bGVNYXApIHtcbiAgaWYgKCFzdHlsZU1hcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBzID0gJyc7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gc3R5bGVNYXBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgX3JlZiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKTtcblxuICAgICAgdmFyIGsgPSBfcmVmMlswXTtcbiAgICAgIHZhciB2ID0gX3JlZjJbMV07XG5cbiAgICAgIHMgKz0gayArICc9JyArICdcIicgKyB2ICsgJ1wiJyArICcgJztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHM7XG59O1xuXG52YXIgc3ZnID0gZnVuY3Rpb24gc3ZnKHN2Z1N0cikge1xuICB2YXIgd2lkdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDtcbiAgdmFyIGhlaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTAwO1xuXG4gIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIHZhciBzdmdUZXh0ID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PjwhRE9DVFlQRSBzdmc+PHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyB2ZXJzaW9uPVxcJzEuMVxcJyB3aWR0aD1cXCcnICsgd2lkdGggKyAnXFwnIGhlaWdodD1cXCcnICsgaGVpZ2h0ICsgJ1xcJz4nICsgc3ZnU3RyICsgJzwvc3ZnPic7XG4gIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1RleHQsICd0ZXh0L3htbCcpLmRvY3VtZW50RWxlbWVudDtcbn07XG5cbnZhciBzdmdTdHIgPSBmdW5jdGlvbiBzdmdTdHIoc3ZnVGV4dCwgdmlld1BvcnRXaWR0aCwgdmlld1BvcnRIZWlnaHQsIHZpZXdCb3hYLCB2aWV3Qm94WSwgdmlld0JveFdpZHRoLCB2aWV3Qm94SGVpZ2h0KSB7XG4gIHZhciBzID0gc3ZnKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCk7XG5cbiAgLy8gYmFzZTY0XG4gIC8vIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIGJ0b2Eocy5vdXRlckhUTUwpO1xuXG4gIC8vIHVyaSBjb21wb25lbnQgc3RyaW5nXG4gIHZhciBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgKyBlbmNvZGVVUklDb21wb25lbnQocy5vdXRlckhUTUwpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN2Z1N0cjogc3ZnU3RyLFxuICBzdHlsZU1hcDJTdHI6IHN0eWxlTWFwMlN0clxufTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgc3R5bGVNYXAyU3RyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKS5zdHlsZU1hcDJTdHI7XG5cbnZhciBiYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24gYmFzZVJlY3RhbmdsZSh4LCB5LCB3LCBoLCByMSwgcjIsIHIzLCByNCwgc3R5bGVNYXApIHtcbiAgcmV0dXJuICdcXG4gIDxwYXRoICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJyBkPVxcJ1xcbiAgICBNICcgKyAoeCArIHIxKSArICcgJyArIHkgKyAnXFxuICAgIEwgJyArICh4ICsgdyAtIHIyKSArICcgJyArIHkgKyAnIFEgJyArICh4ICsgdykgKyAnICcgKyB5ICsgJyAnICsgKHggKyB3KSArICcgJyArICh5ICsgcjIpICsgJ1xcbiAgICBMICcgKyAoeCArIHcpICsgJyAnICsgKHkgKyBoIC0gcjMpICsgJyBRICcgKyAoeCArIHcpICsgJyAnICsgKHkgKyBoKSArICcgJyArICh4ICsgdyAtIHIzKSArICcgJyArICh5ICsgaCkgKyAnXFxuICAgIEwgJyArICh4ICsgcjQpICsgJyAnICsgKHkgKyBoKSArICcgUSAnICsgeCArICcgJyArICh5ICsgaCkgKyAnICcgKyB4ICsgJyAnICsgKHkgKyBoIC0gcjQpICsgJ1xcbiAgICBMICcgKyB4ICsgJyAnICsgKHkgKyByMSkgKyAnIFEgJyArIHggKyAnICcgKyB5ICsgJyAnICsgKHggKyByMSkgKyAnICcgKyB5ICsgJ1xcbiAgICBaXFwnXFxuICAvPlxcbiAgJztcbn07XG5cbnZhciBiYXNlU2hhcGVzID0ge1xuICBiYXJyZWw6IGZ1bmN0aW9uIGJhcnJlbCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnXFxuXFxuICAgIDxnICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJz5cXG4gICAgICA8cGF0aCBkPVwiTSAnICsgKDAgKiB3aWR0aCArIHgpICsgJyAnICsgKC4wMyAqIGhlaWdodCArIHkpICsgJyBMICcgKyAoMCAqIHdpZHRoICsgeCkgKyAnICcgKyAoLjk3ICogaGVpZ2h0ICsgeSkgKyAnIFEgJyArICgwLjA2ICogd2lkdGggKyB4KSArICcgJyArIChoZWlnaHQgKyB5KSArICcgJyArICgwLjI1ICogd2lkdGggKyB4KSArICcgJyArIChoZWlnaHQgKyB5KSArICdcIi8+XFxuXFxuICAgICAgPHBhdGggZD1cIk0gJyArICgwLjI1ICogd2lkdGggKyB4KSArICcgJyArIChoZWlnaHQgKyB5KSArICcgTCAnICsgKDAuNzUgKiB3aWR0aCArIHgpICsgJyAnICsgKGhlaWdodCArIHkpICsgJyBRICcgKyAoMC45NSAqIHdpZHRoICsgeCkgKyAnICcgKyAoaGVpZ2h0ICsgeSkgKyAnICcgKyAod2lkdGggKyB4KSArICcgJyArICgwLjk1ICogaGVpZ2h0ICsgeSkgKyAnXCIvPlxcblxcbiAgICAgIDxwYXRoIGQ9XCJNICcgKyAod2lkdGggKyB4KSArICcgJyArICguOTUgKiBoZWlnaHQgKyB5KSArICcgTCAnICsgKHdpZHRoICsgeCkgKyAnICcgKyAoMC4wNSAqIGhlaWdodCArIHkpICsgJyBRICcgKyAod2lkdGggKyB4KSArICcgJyArICgwICogaGVpZ2h0ICsgeSkgKyAnICcgKyAoMC43NSAqIHdpZHRoICsgeCkgKyAnICcgKyAoMCAqIGhlaWdodCArIHkpICsgJ1wiLz5cXG5cXG4gICAgICA8cGF0aCBkPVwiTSAnICsgKDAuNzUgKiB3aWR0aCArIHgpICsgJyAnICsgKDAgKiBoZWlnaHQgKyB5KSArICcgTCAnICsgKDAuMjUgKiB3aWR0aCArIHgpICsgJyAnICsgKDAgKiBoZWlnaHQgKyB5KSArICcgUSAnICsgKDAuMDYgKiB3aWR0aCArIHgpICsgJyAnICsgKDAgKiBoZWlnaHQgKyB5KSArICcgJyArICgwICogd2lkdGggKyB4KSArICcgJyArICgwLjAzICogaGVpZ2h0ICsgeSkgKyAnXCIvPlxcbiAgICA8L2c+XFxuXFxuICAgICc7XG4gIH0sXG4gIGNpcmNsZTogZnVuY3Rpb24gY2lyY2xlKGN4LCBjeSwgciwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gJzxjaXJjbGUgY3g9XFwnJyArIGN4ICsgJ1xcJyBjeT1cXCcnICsgY3kgKyAnXFwnIHI9XFwnJyArIHIgKyAnXFwnICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJyAvPic7XG4gIH0sXG4gIGNsaXBQYXRoOiBmdW5jdGlvbiBjbGlwUGF0aChpZCwgYmFzZVNoYXBlRm4sIGJhc2VTaGFwZUZuQXJncywgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gJ1xcbiAgICAgIDxkZWZzPlxcbiAgICAgICAgPGNsaXBQYXRoIGlkPVxcJycgKyBpZCArICdcXCcgJyArIHN0eWxlTWFwMlN0cihzdHlsZU1hcCkgKyAnPlxcbiAgICAgICAgJyArIGJhc2VTaGFwZUZuLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGJhc2VTaGFwZUZuQXJncykpICsgJ1xcbiAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICA8L2RlZnM+XFxuICAgICc7XG4gIH0sXG4gIGNvbmNhdmVIZXhhZ29uOiBmdW5jdGlvbiBjb25jYXZlSGV4YWdvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiAnXFxuICAgIDxwb2x5Z29uICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJ1xcbiAgICAgIHBvaW50cz1cXCcnICsgKHggKyAwKSArICcsICcgKyAoeSArIDApICsgJywgJyArICh4ICsgd2lkdGgpICsgJywgJyArICh5ICsgMCkgKyAnLCAnICsgKHggKyAwLjg1ICogd2lkdGgpICsgJywgJyArICh5ICsgMC41ICogaGVpZ2h0KSArICcsICcgKyAoeCArIHdpZHRoKSArICcsICcgKyAoeSArIGhlaWdodCkgKyAnLCAnICsgKHggKyAwKSArICcsICcgKyAoeSArIGhlaWdodCkgKyAnLCAnICsgKHggKyAwLjE1ICogd2lkdGgpICsgJywgJyArICh5ICsgMC41ICogaGVpZ2h0KSArICdcXCdcXG4gICAgLz4nO1xuICB9LFxuICBjdXRSZWN0YW5nbGU6IGZ1bmN0aW9uIGN1dFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb3JuZXJMZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICdcXG4gICAgPHBvbHlnb24gJyArIHN0eWxlTWFwMlN0cihzdHlsZU1hcCkgKyAnXFxuICAgICAgcG9pbnRzPVxcJ1xcbiAgICAgICcgKyAoeCArIDAgKiB3aWR0aCkgKyAnICcgKyAoeSArIGNvcm5lckxlbmd0aCkgKyAnICcgKyAoeCArIGNvcm5lckxlbmd0aCkgKyAnICcgKyAoeSArIDAgKiBoZWlnaHQpICsgJyAnICsgKHggKyB3aWR0aCAtIGNvcm5lckxlbmd0aCkgKyAnICcgKyAoeSArIDAgKiBoZWlnaHQpICsgJyAnICsgKHggKyB3aWR0aCkgKyAnICcgKyAoeSArIGNvcm5lckxlbmd0aCkgKyAnXFxuICAgICAgJyArICh4ICsgd2lkdGgpICsgJyAnICsgKHkgKyBoZWlnaHQgLSBjb3JuZXJMZW5ndGgpICsgJyAnICsgKHggKyB3aWR0aCAtIGNvcm5lckxlbmd0aCkgKyAnICcgKyAoeSArIGhlaWdodCkgKyAnICcgKyAoeCArIGNvcm5lckxlbmd0aCkgKyAnICcgKyAoeSArIGhlaWdodCkgKyAnICcgKyAoeCArIDAgKiB3aWR0aCkgKyAnICcgKyAoeSArIGhlaWdodCAtIGNvcm5lckxlbmd0aCkgKyAnXFxuICAgICAgXFwnXFxuICAgIC8+XFxuICAgICc7XG4gIH0sXG4gIGVsbGlwc2U6IGZ1bmN0aW9uIGVsbGlwc2UoY3gsIGN5LCByeCwgcnksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICdcXG4gICAgICA8ZWxsaXBzZSBjeD1cXCcnICsgY3ggKyAnXFwnIGN5PVxcJycgKyBjeSArICdcXCcgcng9XFwnJyArIHJ4ICsgJ1xcJyByeT1cXCcnICsgcnkgKyAnXFwnICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJyAvPlxcbiAgICAnO1xuICB9LFxuICBoZXhhZ29uOiBmdW5jdGlvbiBoZXhhZ29uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICdcXG4gICAgPHBvbHlnb24gJyArIHN0eWxlTWFwMlN0cihzdHlsZU1hcCkgKyAnXFxuICAgICAgcG9pbnRzPVxcJycgKyAoeCArIDApICsgJywgJyArICh5ICsgMC41ICogaGVpZ2h0KSArICcsICcgKyAoeCArIDAuMjUgKiB3aWR0aCkgKyAnLCAnICsgKHkgKyAwICogaGVpZ2h0KSArICcsICcgKyAoeCArIDAuNzUgKiB3aWR0aCkgKyAnLCAnICsgKHkgKyAwICogaGVpZ2h0KSArICcsICcgKyAoeCArIHdpZHRoKSArICcsICcgKyAoeSArIDAuNSAqIGhlaWdodCkgKyAnLCAnICsgKHggKyAwLjc1ICogd2lkdGgpICsgJywgJyArICh5ICsgaGVpZ2h0KSArICcsICcgKyAoeCArIDAuMjUgKiB3aWR0aCkgKyAnLCAnICsgKHkgKyBoZWlnaHQpICsgJ1xcJ1xcbiAgICAvPic7XG4gIH0sXG4gIGxpbmU6IGZ1bmN0aW9uIGxpbmUoeDEsIHkxLCB4MiwgeTIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICc8bGluZSB4MT1cXCcnICsgeDEgKyAnXFwnIHkxPVxcJycgKyB5MSArICdcXCcgeDI9XFwnJyArIHgyICsgJ1xcJyB5Mj1cXCcnICsgeTIgKyAnXFwnICcgKyBzdHlsZU1hcDJTdHIoc3R5bGVNYXApICsgJyAvPic7XG4gIH0sXG4gIHJlY3RhbmdsZTogZnVuY3Rpb24gcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuICByb3VuZEJvdHRvbVJlY3RhbmdsZTogZnVuY3Rpb24gcm91bmRCb3R0b21SZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAuMyAqIGhlaWdodCwgLjMgKiBoZWlnaHQsIHN0eWxlTWFwKTtcbiAgfSxcbiAgcm91bmRSZWN0YW5nbGU6IGZ1bmN0aW9uIHJvdW5kUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgLjA0ICogd2lkdGgsIC4wNCAqIHdpZHRoLCAuMDQgKiB3aWR0aCwgLjA0ICogd2lkdGgsIHN0eWxlTWFwKTtcbiAgfSxcbiAgc3RhZGl1bTogZnVuY3Rpb24gc3RhZGl1bSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHZhciByYWRpdXNSYXRpbyA9IC4yNCAqIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCBzdHlsZU1hcCk7XG4gIH0sXG4gIHNxdWFyZTogZnVuY3Rpb24gc3F1YXJlKHgsIHksIGxlbmd0aCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCBsZW5ndGgsIGxlbmd0aCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuICB0ZXh0OiBmdW5jdGlvbiB0ZXh0KHQsIHgsIHksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuICc8dGV4dCB4PVxcJycgKyB4ICsgJ1xcJyB5PVxcJycgKyB5ICsgJ1xcJyAnICsgc3R5bGVNYXAyU3RyKHN0eWxlTWFwKSArICc+JyArIHQgKyAnPC90ZXh0Pic7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNoYXBlcztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBzYmduRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBzYmduU3R5bGUgPSBuZXcgTWFwKCkuc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCB7IHc6IDMyLCBoOiAzMiwgc2hhcGU6ICdlbGxpcHNlJyB9KS5zZXQoJ3NpbXBsZSBjaGVtaWNhbCcsIHsgdzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnIH0pLnNldCgnc2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyJywgeyB3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZScgfSkuc2V0KCdtYWNyb21vbGVjdWxlJywgeyB3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnIH0pLnNldCgnbWFjcm9tb2xlY3VsZSBtdWx0aW1lcicsIHsgdzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJyB9KS5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywgeyB3OiA4OCwgaDogNTYsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnIH0pLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXInLCB7IHc6IDg4LCBoOiA1Miwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZScgfSkuc2V0KCdjb21wbGV4JywgeyB3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJyB9KS5zZXQoJ2NvbXBsZXggbXVsdGltZXInLCB7IHc6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnIH0pLnNldCgnc291cmNlIGFuZCBzaW5rJywgeyB3OiA2MCwgaDogNjAsIHNoYXBlOiAncG9seWdvbicgfSkuc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgeyB3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2NvbmNhdmVoZXhhZ29uJyB9KS5zZXQoJ3BoZW5vdHlwZScsIHsgdzogMTQwLCBoOiA2MCwgc2hhcGU6ICdoZXhhZ29uJyB9KS5zZXQoJ3Byb2Nlc3MnLCB7IHc6IDI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnIH0pLnNldCgndW5jZXJ0YWluIHByb2Nlc3MnLCB7IHc6IDI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnIH0pLnNldCgnb21pdHRlZCBwcm9jZXNzJywgeyB3OiAyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJyB9KS5zZXQoJ2Fzc29jaWF0aW9uJywgeyB3OiAyNSwgaDogMjUsIHNoYXBlOiAnZWxsaXBzZScgfSkuc2V0KCdkaXNzb2NpYXRpb24nLCB7IHc6IDI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJyB9KS5zZXQoJ2NvbXBhcnRtZW50JywgeyB3OiA1MCwgaDogNTAsIHNoYXBlOiAnYmFycmVsJyB9KS5zZXQoJ3RhZycsIHsgdzogMTAwLCBoOiA2NSwgc2hhcGU6ICd0YWcnIH0pLnNldCgnYW5kJywgeyB3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZScgfSkuc2V0KCdvcicsIHsgdzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnIH0pLnNldCgnbm90JywgeyB3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZScgfSk7XG5cbnZhciBzYmduQXJyb3dNYXAgPSBuZXcgTWFwKCkuc2V0KCduZWNlc3Nhcnkgc3RpbXVsYXRpb24nLCAndHJpYW5nbGUtY3Jvc3MnKS5zZXQoJ2luaGliaXRpb24nLCAndGVlJykuc2V0KCdjYXRhbHlzaXMnLCAnY2lyY2xlJykuc2V0KCdzdGltdWxhdGlvbicsICd0cmlhbmdsZScpLnNldCgncHJvZHVjdGlvbicsICd0cmlhbmdsZScpLnNldCgnbW9kdWxhdGlvbicsICdkaWFtb25kJyk7XG5cbnZhciBlbGVtZW50U3R5bGUgPSB7XG4gIHNiZ25TaGFwZTogZnVuY3Rpb24gc2JnblNoYXBlKG5vZGUpIHtcbiAgICB2YXIgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgICB2YXIgc3R5bGUgPSBzYmduU3R5bGUuZ2V0KHNiZ25DbGFzcyk7XG4gICAgcmV0dXJuIHN0eWxlID8gc3R5bGUuc2hhcGUgOiAnZWxsaXBzZSc7XG4gIH0sXG4gIHNiZ25BcnJvd1NoYXBlOiBmdW5jdGlvbiBzYmduQXJyb3dTaGFwZShlZGdlKSB7XG4gICAgdmFyIHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhlZGdlKTtcbiAgICB2YXIgc2hhcGUgPSBzYmduQXJyb3dNYXAuZ2V0KHNiZ25DbGFzcyk7XG4gICAgcmV0dXJuIHNoYXBlID8gc2hhcGUgOiAnbm9uZSc7XG4gIH0sXG4gIHNiZ25Db250ZW50OiBmdW5jdGlvbiBzYmduQ29udGVudChub2RlKSB7XG4gICAgdmFyIHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gICAgdmFyIGNvbnRlbnQgPSBzYmduRGF0YS5zYmduTGFiZWwobm9kZSk7XG5cbiAgICBpZiAoc2JnbkNsYXNzID09ICdhbmQnKSB7XG4gICAgICBjb250ZW50ID0gJ0FORCc7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ29yJykge1xuICAgICAgY29udGVudCA9ICdPUic7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ25vdCcpIHtcbiAgICAgIGNvbnRlbnQgPSAnTk9UJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb21pdHRlZCBwcm9jZXNzJykge1xuICAgICAgY29udGVudCA9ICdcXFxcXFxcXCc7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ3VuY2VydGFpbiBwcm9jZXNzJykge1xuICAgICAgY29udGVudCA9ICc/JztcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfSxcbiAgZGltZW5zaW9uczogZnVuY3Rpb24gZGltZW5zaW9ucyhub2RlKSB7XG4gICAgdmFyIHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKTtcbiAgICB2YXIgZGltID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIGlmIChkaW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzYmduQ2xhc3MgKyAnIGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0Jyk7XG4gICAgfVxuICAgIHJldHVybiBkaW07XG4gIH0sXG4gIHdpZHRoOiBmdW5jdGlvbiB3aWR0aChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS53O1xuICB9LFxuICBoZWlnaHQ6IGZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS5oO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRTdHlsZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgdGV4dFdpZHRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbnZhciBiYXNlU2hhcGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBzYmduRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBhdXhpbGlhcnlJdGVtcyA9IHtcbiAgbXVsdGlJbWdDbG9uZU1hcmtlcjogZnVuY3Rpb24gbXVsdGlJbWdDbG9uZU1hcmtlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICB2YXIgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XG4gIH0sXG4gIG11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb246IGZ1bmN0aW9uIG11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgdUluZm8pIHtcbiAgICB2YXIgYm9yZGVyV2lkdGggPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDM7XG4gICAgdmFyIGZvbnRTaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiAxNDtcblxuICAgIHZhciB0ZXh0ID0gdUluZm8ubGFiZWwudGV4dDtcbiAgICB2YXIgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJycgKyBib3JkZXJXaWR0aCkuc2V0KCdmaWxsJywgJ3doaXRlJykuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIHZhciB0ZXh0U3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJykuc2V0KCdmb250LXNpemUnLCBmb250U2l6ZSArICdweCcpLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbiAgICB2YXIgdUluZm9XaWR0aCA9IHRleHRXaWR0aCh0ZXh0LCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemUgfSkgKyA1O1xuXG4gICAgdmFyIHVuaXRPZkluZm9ybWF0aW9uU3ZnID0gJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlKHgsIHksIHVJbmZvV2lkdGgsIGhlaWdodCwgdWluZm9SZWN0U3R5bGUpICsgJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLnRleHQodGV4dCwgeCArIHVJbmZvV2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKSArICdcXG4gICAgJztcblxuICAgIHJldHVybiB1bml0T2ZJbmZvcm1hdGlvblN2ZztcbiAgfSxcbiAgbXVsdGlJbWdTdGF0ZVZhcjogZnVuY3Rpb24gbXVsdGlJbWdTdGF0ZVZhcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGF0ZVZhcikge1xuICAgIHZhciBib3JkZXJXaWR0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogMztcbiAgICB2YXIgZm9udFNpemUgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IDE0O1xuXG5cbiAgICB2YXIgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNTU1NTU1Jykuc2V0KCdzdHJva2Utd2lkdGgnLCAnJyArIGJvcmRlcldpZHRoKS5zZXQoJ2ZpbGwnLCAnd2hpdGUnKS5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgdmFyIHRleHRTdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKS5zZXQoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplICsgJ3B4Jykuc2V0KCdmb250LWZhbWlseScsICdIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJykuc2V0KCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcblxuICAgIHZhciB0dyA9IHRleHRXaWR0aChzYmduRGF0YS5zdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplIH0pICsgMTA7XG4gICAgdmFyIHcgPSBNYXRoLm1heCh0dywgMzApO1xuICAgIHZhciBzdGF0ZXZhcmlhYmxlU3ZnID0gJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLnN0YWRpdW0oeCwgeSwgdywgaGVpZ2h0LCBzdGF0ZVZhclN0eWxlKSArICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy50ZXh0KHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB4ICsgdyAvIDIsIHkgKyBoZWlnaHQgLyAyLCB0ZXh0U3R5bGUpICsgJ1xcbiAgICAnO1xuXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XG4gIH0sXG4gIGNsb25lTWFya2VyOiBmdW5jdGlvbiBjbG9uZU1hcmtlcihub2RlV2lkdGgsIG5vZGVIZWlnaHQsIHNoYXBlRm4sIHNoYXBlRm5BcmdzKSB7XG4gICAgdmFyIGNsaXBJZCA9ICdjbG9uZW1hcmtlcic7XG5cbiAgICB2YXIgY2xvbmVNYXJrZXJTdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41Jykuc2V0KCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcElkICsgJyknKS5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xuXG4gICAgdmFyIGNsb25lTWFya2VyU3ZnID0gJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLmNsaXBQYXRoKGNsaXBJZCwgYmFzZVNoYXBlcy5yZWN0YW5nbGUsIFswLCAzICogbm9kZUhlaWdodCAvIDQsIG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgbmV3IE1hcCgpXSkgKyAnXFxuICAgICAgJyArIHNoYXBlRm4uYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoc2hhcGVGbkFyZ3MpLmNvbmNhdChbY2xvbmVNYXJrZXJTdHlsZV0pKSArICdcXG4gICAgJztcblxuICAgIHJldHVybiBjbG9uZU1hcmtlclN2ZztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdXhpbGlhcnlJdGVtcztcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgc2JnblN0eWxlU2hlZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3l0b3NjYXBlKSB7XG4gIHJldHVybiBzYmduU3R5bGVTaGVldChjeXRvc2NhcGUpO1xufTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBlbGVtZW50U3R5bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIHNiZ25zdmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgc2JnblN0eWxlU2hlZXQgPSBmdW5jdGlvbiBzYmduU3R5bGVTaGVldChjeXRvc2NhcGUpIHtcblxuICByZXR1cm4gY3l0b3NjYXBlLnN0eWxlc2hlZXQoKVxuICAvLyBnZW5lcmFsIG5vZGUgc3R5bGVcbiAgLnNlbGVjdG9yKCdub2RlJykuY3NzKHtcbiAgICAnc2hhcGUnOiBmdW5jdGlvbiBzaGFwZShub2RlKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFN0eWxlLnNiZ25TaGFwZShub2RlKTtcbiAgICB9LFxuICAgICdjb250ZW50JzogZnVuY3Rpb24gY29udGVudChub2RlKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFN0eWxlLnNiZ25Db250ZW50KG5vZGUpO1xuICAgIH0sXG4gICAgJ2ZvbnQtc2l6ZSc6IDIwLFxuICAgICd3aWR0aCc6IGZ1bmN0aW9uIHdpZHRoKG5vZGUpIHtcbiAgICAgIHJldHVybiBlbGVtZW50U3R5bGUud2lkdGgobm9kZSk7XG4gICAgfSxcbiAgICAnaGVpZ2h0JzogZnVuY3Rpb24gaGVpZ2h0KG5vZGUpIHtcbiAgICAgIHJldHVybiBlbGVtZW50U3R5bGUuaGVpZ2h0KG5vZGUpO1xuICAgIH0sXG4gICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcbiAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmNmY2ZjYnLFxuICAgICd0ZXh0LW9wYWNpdHknOiAxLFxuICAgICdvcGFjaXR5JzogMSxcbiAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJ3doaXRlJyxcbiAgICAndGV4dC1vdXRsaW5lLW9wYWNpdHknOiAxLFxuICAgICd0ZXh0LW91dGxpbmUtd2lkdGgnOiAwLjc1XG4gIH0pLnNlbGVjdG9yKCdub2RlOnNlbGVjdGVkJykuY3NzKHtcbiAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyMwMDAnLFxuICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnIzAwMCdcbiAgfSkuc2VsZWN0b3IoJ25vZGU6YWN0aXZlJykuY3NzKHtcbiAgICAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzE0J1xuICB9KVxuXG4gIC8vIGRyYXcgc2JnbiBzcGVjaWZpYyBzdHlsaW5nIChhdXhpbGlhcnkgaXRlbXMsIGNsb25lbWFya2VyLCBldGMuKVxuICAuc2VsZWN0b3IoJ1xcbiAgICAgICAgICBub2RlW2NsYXNzPVwidW5zcGVjaWZpZWQgZW50aXR5XCJdLFxcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsXCJdLCBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZVwiXSwgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZVwiXSwgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGVydHVyYmluZyBhZ2VudFwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBoZW5vdHlwZVwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl1cXG4gICAgICAgICcpLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBmdW5jdGlvbiBiYWNrZ3JvdW5kSW1hZ2Uobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ltYWdlO1xuICAgIH0sXG4gICAgJ2JhY2tncm91bmQtd2lkdGgnOiBmdW5jdGlvbiBiYWNrZ3JvdW5kV2lkdGgobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5iZ1dpZHRoO1xuICAgIH0sXG4gICAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IGZ1bmN0aW9uIGJhY2tncm91bmRQb3NpdGlvblgobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1g7XG4gICAgfSxcbiAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogZnVuY3Rpb24gYmFja2dyb3VuZFBvc2l0aW9uWShub2RlKSB7XG4gICAgICByZXR1cm4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWTtcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLWZpdCc6IGZ1bmN0aW9uIGJhY2tncm91bmRGaXQobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ZpdDtcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLWNsaXAnOiBmdW5jdGlvbiBiYWNrZ3JvdW5kQ2xpcChub2RlKSB7XG4gICAgICByZXR1cm4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnQ2xpcDtcbiAgICB9LFxuICAgICdwYWRkaW5nJzogZnVuY3Rpb24gcGFkZGluZyhub2RlKSB7XG4gICAgICByZXR1cm4gc2JnbnN2Zy5kcmF3KG5vZGUpLnBhZGRpbmc7XG4gICAgfSxcbiAgICAnYm9yZGVyLXdpZHRoJzogZnVuY3Rpb24gYm9yZGVyV2lkdGgobm9kZSkge1xuICAgICAgcmV0dXJuIHNiZ25zdmcuZHJhdyhub2RlKS5ib3JkZXJXaWR0aDtcbiAgICB9XG4gIH0pLnNlbGVjdG9yKCdcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cXG4gICAgICAgICcpLmNzcyh7XG4gICAgJ2dob3N0JzogJ3llcycsXG4gICAgJ2dob3N0LW9wYWNpdHknOiAxXG4gIH0pLnNlbGVjdG9yKCdcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXVxcbiAgICAgICAgJykuY3NzKHtcbiAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxMixcbiAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxMlxuICB9KS5zZWxlY3RvcignXFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl1cXG4gICAgICAgICcpLmNzcyh7XG4gICAgJ2dob3N0LW9mZnNldC14JzogNSxcbiAgICAnZ2hvc3Qtb2Zmc2V0LXknOiA1XG4gIH0pLnNlbGVjdG9yKCdcXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cXG4gICAgICAgICcpLmNzcyh7XG4gICAgJ2dob3N0LW9mZnNldC14JzogMTYsXG4gICAgJ2dob3N0LW9mZnNldC15JzogMTZcbiAgfSlcblxuICAvLyBjb21wb3VuZCBub2RlIHNwZWNpZmljIHN0eWxlXG4gIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl0nKS5jc3Moe1xuICAgICdjb21wb3VuZC1zaXppbmctd3J0LWxhYmVscyc6ICdleGNsdWRlJyxcbiAgICAndGV4dC12YWxpZ24nOiAnYm90dG9tJyxcbiAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJ1xuICB9KVxuXG4gIC8vIHByb2Nlc3Mgbm9kZSBzcGVjaWZpYyBzdHlsZVxuICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXSwgbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDFcbiAgfSkuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXScpLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzZCNkI2QidcbiAgfSlcblxuICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxuICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcbiAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwic291cmNlIGFuZCBzaW5rXCJdJykuY3NzKHtcbiAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGZ1bmN0aW9uIGJhY2tncm91bmRJbWFnZShub2RlKSB7XG4gICAgICByZXR1cm4gc2JnbnN2Zy5kcmF3KG5vZGUpO1xuICAgIH0sXG4gICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxuICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxuICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcbiAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxuICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICdib3JkZXItd2lkdGgnOiAwLFxuICAgICdzaGFwZS1wb2x5Z29uLXBvaW50cyc6ICctMC44NiwgMC41LCAtMC43NSwgMC42NSwgLTEsIDAuOTUsIC0wLjk1LCAxLCAtMC42NSwgMC43NSwgLTAuNSwgMC44NiwgMCwgMSwgMC41LCAwLjg2LCAwLjcxLCAwLjcxLCAwLjg2LCAwLjUsIDEsIDAsIDAuODYsIC0wLjUsIDAuNzUsIC0wLjY1LCAxLCAtMC45NSwgMC45NSwgLTEsIDAuNjUsIC0wLjc1LCAwLjUsIC0wLjg2LCAwLCAtMSwgLTAuNSwgLTAuODYsIC0wLjcxLCAtMC43MSwgLTAuODYsIC0wLjUsIC0xLCAwJ1xuICB9KVxuXG4gIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXG4gIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxuICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKS5jc3Moe1xuICAgICdiYWNrZ3JvdW5kLWltYWdlJzogZnVuY3Rpb24gYmFja2dyb3VuZEltYWdlKG5vZGUpIHtcbiAgICAgIHJldHVybiBzYmduc3ZnLmRyYXcobm9kZSk7XG4gICAgfSxcbiAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgJ2JvcmRlci13aWR0aCc6IDBcbiAgfSlcblxuICAvLyBlZGdlIHN0eWxpbmdcbiAgLnNlbGVjdG9yKCdlZGdlJykuY3NzKHtcbiAgICAnYXJyb3ctc2NhbGUnOiAxLjc1LFxuICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxuICAgICdsaW5lLWNvbG9yJzogJyM1NTUnLFxuICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICdzb3VyY2UtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICd3aWR0aCc6IDEuNSxcbiAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyM1NTUnLFxuICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICdjb2xvcic6ICcjNTU1J1xuICB9KS5zZWxlY3RvcignZWRnZTpzZWxlY3RlZCcpLmNzcyh7XG4gICAgJ2NvbG9yJzogJyNkNjc2MTQnLFxuICAgICdsaW5lLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICd0ZXh0LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCdcbiAgfSkuc2VsZWN0b3IoJ2VkZ2U6YWN0aXZlJykuY3NzKHtcbiAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMC43LCAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzgnXG4gIH0pLnNlbGVjdG9yKCdlZGdlW2NhcmRpbmFsaXR5ID4gMF0nKS5jc3Moe1xuICAgICd0ZXh0LWJhY2tncm91bmQtc2hhcGUnOiAncmVjdGFuZ2xlJyxcbiAgICAndGV4dC1ib3JkZXItb3BhY2l0eSc6ICcxJyxcbiAgICAndGV4dC1ib3JkZXItd2lkdGgnOiAnMScsXG4gICAgJ3RleHQtYmFja2dyb3VuZC1jb2xvcic6ICd3aGl0ZScsXG4gICAgJ3RleHQtYmFja2dyb3VuZC1vcGFjaXR5JzogJzEnXG4gIH0pLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiY29uc3VtcHRpb25cIl1bY2FyZGluYWxpdHkgPiAwXSwgZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl1bY2FyZGluYWxpdHkgPiAwXScpLmNzcyh7XG4gICAgJ3NvdXJjZS1sYWJlbCc6IGZ1bmN0aW9uIHNvdXJjZUxhYmVsKGVkZ2UpIHtcbiAgICAgIHJldHVybiAnJyArIGVkZ2UuZGF0YSgnY2FyZGluYWxpdHknKTtcbiAgICB9LFxuICAgICdzb3VyY2UtdGV4dC1vZmZzZXQnOiAxMFxuICB9KS5zZWxlY3RvcignZWRnZVtjbGFzc10nKS5jc3Moe1xuICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiBmdW5jdGlvbiB0YXJnZXRBcnJvd1NoYXBlKGVkZ2UpIHtcbiAgICAgIHJldHVybiBlbGVtZW50U3R5bGUuc2JnbkFycm93U2hhcGUoZWRnZSk7XG4gICAgfSxcbiAgICAnc291cmNlLWFycm93LXNoYXBlJzogJ25vbmUnXG4gIH0pLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiaW5oaWJpdGlvblwiXScpLmNzcyh7XG4gICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgfSkuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdJykuY3NzKHtcbiAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xuICB9KVxuXG4gIC8vIGNvcmVcbiAgLnNlbGVjdG9yKCdjb3JlJykuY3NzKHtcbiAgICAnc2VsZWN0aW9uLWJveC1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAnc2VsZWN0aW9uLWJveC1vcGFjaXR5JzogJzAuMicsICdzZWxlY3Rpb24tYm94LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0J1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2JnblN0eWxlU2hlZXQ7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgbWVtb2l6ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBjb250YWluZXJOb2RlcyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgZW50aXR5UG9vbE5vZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgcHJvY2Vzc05vZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbnZhciBzYmduRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBjYWNoZUtleUZuID0gZnVuY3Rpb24gY2FjaGVLZXlGbihub2RlKSB7XG4gIHJldHVybiAnJyArIEpTT04uc3RyaW5naWZ5KG5vZGUuaWQoKSk7XG59O1xuXG52YXIgc2Jnbk5vZGVTaGFwZU1hcCA9IG5ldyBNYXAoKVxuLy8gcHJvY2VzcyBub2Rlc1xuLnNldCgnZGlzc29jaWF0aW9uJywgbWVtb2l6ZShwcm9jZXNzTm9kZXMuZGlzc29jaWF0aW9uLCBjYWNoZUtleUZuKSkuc2V0KCdwaGVub3R5cGUnLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5waGVub3R5cGUsIGNhY2hlS2V5Rm4pKVxuXG4vLyBlbnRpdHkgcG9vbCBub2Rlc1xuLnNldCgnc291cmNlIGFuZCBzaW5rJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc291cmNlQW5kU2luaywgY2FjaGVLZXlGbikpLnNldCgndW5zcGVjaWZpZWQgZW50aXR5JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMudW5zcGVjaWZpZWRFbnRpdHksIGNhY2hlS2V5Rm4pKS5zZXQoJ3NpbXBsZSBjaGVtaWNhbCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnNpbXBsZUNoZW1pY2FsLCBjYWNoZUtleUZuKSkuc2V0KCdtYWNyb21vbGVjdWxlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubWFjcm9tb2xlY3VsZSwgY2FjaGVLZXlGbikpLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUsIGNhY2hlS2V5Rm4pKS5zZXQoJ2NvbXBsZXgnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5jb21wbGV4LCBjYWNoZUtleUZuKSkuc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMucGVydHVyYmluZ0FnZW50LCBjYWNoZUtleUZuKSlcblxuLy8gY29udGFpbmVyIG5vZGVzXG4uc2V0KCdjb21wYXJ0bWVudCcsIG1lbW9pemUoY29udGFpbmVyTm9kZXMuY29tcGFydG1lbnQsIGNhY2hlS2V5Rm4pKTtcblxudmFyIGRyYXcgPSBmdW5jdGlvbiBkcmF3KG5vZGUpIHtcbiAgdmFyIHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gIHZhciBzaGFwZUZuID0gc2Jnbk5vZGVTaGFwZU1hcC5nZXQoc2JnbkNsYXNzKTtcbiAgaWYgKHNoYXBlRm4gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc2JnbkNsYXNzICsgJyBkb2VzIG5vdCBoYXZlIGEgc2hhcGUgaW1wbGVtZW50YXRpb24nKTtcbiAgfVxuICByZXR1cm4gc2hhcGVGbihub2RlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkcmF3OiBkcmF3XG59O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHN2Z1N0ciA9IF9fd2VicGFja19yZXF1aXJlX18oMSkuc3ZnU3RyO1xudmFyIHNiZ25EYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBtZW1vaXplID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIGF1eGlsaWFyeUl0ZW1zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBiYXNlU2hhcGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIGNvbnRhaW5lck5vZGVzID0ge1xuICBjb21wYXJ0bWVudDogZnVuY3Rpb24gY29tcGFydG1lbnQobm9kZSkge1xuICAgIHZhciBhdXhJdGVtV2lkdGggPSA2MDtcbiAgICB2YXIgYXV4SXRlbUhlaWdodCA9IDQwO1xuICAgIHZhciB1SW5mb3MgPSBzYmduRGF0YS5nZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICB2YXIgc3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcblxuICAgIHZhciB1SW5mb1N2ZyA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBsaW5lU3ZnID0gc3ZnU3RyKHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2xpbmVTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzI1JSddLFxuICAgICAgYmdQb3NZOiBbJzE5cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvbnRhaW4nLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnMzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogJzQnXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJOb2RlcztcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmFzZVNoYXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgYXV4aWxpYXJ5SXRlbXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgc3ZnU3RyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKS5zdmdTdHI7XG52YXIgZ2V0VW5pdEluZm9zID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKS5nZXRVbml0SW5mb3M7XG52YXIgZ2V0U3RhdGVWYXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKS5nZXRTdGF0ZVZhcnM7XG52YXIgaGFzQ2xvbmVtYXJrZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLmhhc0Nsb25lbWFya2VyO1xuXG52YXIgZWxlbWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBlbnRpdHlQb29sTm9kZXMgPSB7XG4gIHVuc3BlY2lmaWVkRW50aXR5OiBmdW5jdGlvbiB1bnNwZWNpZmllZEVudGl0eShub2RlKSB7XG4gICAgdmFyIGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICB2YXIgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIHZhciBib3JkZXJXaWR0aCA9IDI7XG4gICAgdmFyIGZvbnRTaXplID0gMTA7XG4gICAgdmFyIHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICB2YXIgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICB2YXIgc3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIHZhciBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciB1SW5mb1N2ZyA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHNWYXJTdmcgPSBzdmdTdHIoc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdG9wTGluZSA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIGJvdHRvbUxpbmUgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnMzJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG4gIHNpbXBsZUNoZW1pY2FsOiBmdW5jdGlvbiBzaW1wbGVDaGVtaWNhbChub2RlKSB7XG4gICAgdmFyIGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICB2YXIgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIHZhciBib3JkZXJXaWR0aCA9IDI7XG4gICAgdmFyIGZvbnRTaXplID0gMTA7XG4gICAgdmFyIHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIHZhciBzdHlsZSA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgdmFyIGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHVJbmZvU3ZnID0gc3ZnU3RyKHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdG9wTGluZSA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIGJvdHRvbUxpbmUgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcxMnB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNDhweCcsICcwcHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcbiAgbWFjcm9tb2xlY3VsZTogZnVuY3Rpb24gbWFjcm9tb2xlY3VsZShub2RlKSB7XG4gICAgdmFyIGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICB2YXIgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIHZhciBib3JkZXJXaWR0aCA9IDI7XG4gICAgdmFyIGZvbnRTaXplID0gMTA7XG4gICAgdmFyIHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICB2YXIgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICB2YXIgc3R5bGUgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIHZhciBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciB1SW5mb1N2ZyA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHNWYXJTdmcgPSBzdmdTdHIoc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdG9wTGluZSA9IHN2Z1N0cih1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIGJvdHRvbUxpbmUgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcbiAgbnVjbGVpY0FjaWRGZWF0dXJlOiBmdW5jdGlvbiBudWNsZWljQWNpZEZlYXR1cmUobm9kZSkge1xuICAgIHZhciBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgdmFyIGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICB2YXIgYm9yZGVyV2lkdGggPSAyO1xuICAgIHZhciBmb250U2l6ZSA9IDEwO1xuICAgIHZhciB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgdmFyIHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICB2YXIgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdUluZm9TdmcgPSBzdmdTdHIodUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBzVmFyU3ZnID0gc3ZnU3RyKHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIHRvcExpbmUgPSBzdmdTdHIoc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgdmFyIGJvdHRvbUxpbmUgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcbiAgY29tcGxleDogZnVuY3Rpb24gY29tcGxleChub2RlKSB7XG4gICAgdmFyIGl0ZW1XID0gNjA7XG4gICAgdmFyIGl0ZW1IID0gMjQ7XG4gICAgdmFyIHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICB2YXIgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICB2YXIgaW1hZ2VzID0gW107XG4gICAgdmFyIGJnV2lkdGggPSBbXTtcbiAgICB2YXIgYmdIZWlnaHQgPSBbXTtcbiAgICB2YXIgYmdQb3NYID0gW107XG4gICAgdmFyIGJnUG9zWSA9IFtdO1xuICAgIHZhciBiZ0ZpdCA9IFtdO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XG5cbiAgICAvLyBvcmRlciBvZiBzdmcgaW1hZ2UgZ2VuZXJhdGlvbiBtYXR0ZXJzXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdG9wTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKHRvcExpbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMXB4Jyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XG4gICAgICB2YXIgYm90dG9tTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKGJvdHRvbUxpbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XG4gICAgICB2YXIgY2xvbmVTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBpdGVtVywgaXRlbUggLSAzKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKGNsb25lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmICh1SW5mb3MubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHVJbmZvU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHVJbmZvc1swXSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaCh1SW5mb1N2Zyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMjUlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAoc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHNWYXJTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBpdGVtVyAtIDUsIGl0ZW1IIC0gMywgc1ZhcnNbMF0pLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goc1ZhclN2Zyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnODglJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogaW1hZ2VzLFxuICAgICAgYmdXaWR0aDogYmdXaWR0aCxcbiAgICAgIGJnUG9zWDogYmdQb3NYLFxuICAgICAgYmdQb3NZOiBiZ1Bvc1ksXG4gICAgICBiZ0ZpdDogYmdGaXQsXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICcyMnB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiA0XG4gICAgfTtcbiAgfSxcbiAgc291cmNlQW5kU2luazogZnVuY3Rpb24gc291cmNlQW5kU2luayhub2RlKSB7XG4gICAgdmFyIF9lbGVtZW50JGRpbWVuc2lvbnMgPSBlbGVtZW50LmRpbWVuc2lvbnMobm9kZSksXG4gICAgICAgIG53ID0gX2VsZW1lbnQkZGltZW5zaW9ucy53LFxuICAgICAgICBuaCA9IF9lbGVtZW50JGRpbWVuc2lvbnMuaDtcblxuICAgIHZhciBjZW50ZXJYID0gbncgLyAyO1xuICAgIHZhciBjZW50ZXJZID0gbmggLyAyO1xuICAgIHZhciByYWRpdXMgPSAobncgLSAyKSAvIDI7XG5cbiAgICB2YXIgc3R5bGVNYXAgPSBuZXcgTWFwKCkuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpLnNldCgnc3Ryb2tlLWxpbmVjYXAnLCAnc3F1YXJlJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41Jykuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIHZhciBzaGFwZUFyZ3MgPSBbY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzXTtcblxuICAgIHZhciBzb3VyY2VBbmRTaW5rU3ZnID0gJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLmNpcmNsZS5hcHBseShiYXNlU2hhcGVzLCBzaGFwZUFyZ3MuY29uY2F0KFtzdHlsZU1hcF0pKSArICdcXG4gICAgICAnICsgKGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMuY2xvbmVNYXJrZXIobncsIG5oLCBiYXNlU2hhcGVzLmNpcmNsZSwgc2hhcGVBcmdzKSA6ICcnKSArICdcXG4gICAgICAnICsgYmFzZVNoYXBlcy5saW5lKDAsIG5oLCBudywgMCwgc3R5bGVNYXApICsgJ1xcbiAgICAnO1xuXG4gICAgcmV0dXJuIHN2Z1N0cihzb3VyY2VBbmRTaW5rU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG4gIHBlcnR1cmJpbmdBZ2VudDogZnVuY3Rpb24gcGVydHVyYmluZ0FnZW50KG5vZGUpIHtcbiAgICB2YXIgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIHZhciBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgdmFyIGJvcmRlcldpZHRoID0gMjtcbiAgICB2YXIgZm9udFNpemUgPSAxMDtcbiAgICB2YXIgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICB2YXIgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgdUluZm9TdmcgPSBzdmdTdHIodUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJywgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciB0b3BMaW5lID0gc3ZnU3RyKHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCk7XG5cbiAgICB2YXIgYm90dG9tTGluZSA9IHN2Z1N0cihoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzhweCcsICc1NnB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW50aXR5UG9vbE5vZGVzO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBiYXNlU2hhcGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBhdXhpbGlhcnlJdGVtcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBzdmdTdHIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLnN2Z1N0cjtcbnZhciBoYXNDbG9uZW1hcmtlciA9IF9fd2VicGFja19yZXF1aXJlX18oMCkuaGFzQ2xvbmVtYXJrZXI7XG5cbnZhciBlbGVtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIHByb2Nlc3NOb2RlcyA9IHtcbiAgZGlzc29jaWF0aW9uOiBmdW5jdGlvbiBkaXNzb2NpYXRpb24obm9kZSkge1xuICAgIHZhciBfZWxlbWVudCRkaW1lbnNpb25zID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpLFxuICAgICAgICBudyA9IF9lbGVtZW50JGRpbWVuc2lvbnMudyxcbiAgICAgICAgbmggPSBfZWxlbWVudCRkaW1lbnNpb25zLmg7XG5cbiAgICB2YXIgY2VudGVyWCA9IG53IC8gMjtcbiAgICB2YXIgY2VudGVyWSA9IG5oIC8gMjtcbiAgICB2YXIgb3V0ZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMjtcbiAgICB2YXIgaW5uZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMztcblxuICAgIHZhciBzdHlsZU1hcCA9IG5ldyBNYXAoKS5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJykuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICB2YXIgZGlzc29jaWF0aW9uU3ZnID0gJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBvdXRlclJhZGl1cywgc3R5bGVNYXApICsgJ1xcbiAgICAgICcgKyBiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBpbm5lclJhZGl1cywgc3R5bGVNYXApICsgJ1xcbiAgICAnO1xuICAgIHJldHVybiBzdmdTdHIoZGlzc29jaWF0aW9uU3ZnLCBudywgbmgpO1xuICB9LFxuICBwaGVub3R5cGU6IGZ1bmN0aW9uIHBoZW5vdHlwZShub2RlKSB7XG4gICAgdmFyIGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICB2YXIgYXV4SXRlbUhlaWdodCA9IDIwO1xuXG4gICAgdmFyIHN0eWxlID0gbmV3IE1hcCgpLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKS5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICB2YXIgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHZhciBib3R0b21MaW5lID0gc3ZnU3RyKGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgY2xvbmVNYXJrZXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJSddLFxuICAgICAgYmdQb3NZOiBbJzU2cHgnLCAnNTZweCddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzTm9kZXM7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2J1aWxkL2J1bmRsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9