(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeSbgnStylesheet"] = factory();
	else
		root["cytoscapeSbgnStylesheet"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var textWidth = __webpack_require__(11);

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

/***/ }),
/* 5 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStyleSheet = __webpack_require__(7);

var defaultOptions = {};

module.exports = function (cytoscape) {
  return sbgnStyleSheet(cytoscape);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__(5);

var containerNodes = __webpack_require__(10);
var entityPoolNodes = __webpack_require__(17);
var processNodes = __webpack_require__(18);

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

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var extend = __webpack_require__(16);

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
/* 12 */
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

exports.isBuffer = __webpack_require__(14);

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
exports.inherits = __webpack_require__(15);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 15 */
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
/* 16 */
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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NjNjY2FhMzY2NDE0ZDE5NjhiZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9hdXhpbGlhcnlJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanMiXSwibmFtZXMiOlsic2JnbkRhdGFIYW5kbGVyIiwiaXNNdWx0aW1lciIsIm5vZGUiLCJkYXRhIiwiaW5jbHVkZXMiLCJoYXNDbG9uZW1hcmtlciIsImdldFN0YXRlVmFycyIsImdldFVuaXRJbmZvcyIsImhhc0F1eEl0ZW1zIiwibGVuZ3RoIiwic2JnbkNsYXNzIiwiZWxlbWVudCIsInNiZ25MYWJlbCIsInN0YXRlVmFyTGFiZWwiLCJzdGF0ZVZhciIsInZhcmlhYmxlIiwic3RhdGUiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZU1hcDJTdHIiLCJzdHlsZU1hcCIsInMiLCJrIiwidiIsInN2ZyIsInN2Z1N0ciIsIndpZHRoIiwiaGVpZ2h0IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwic3ZnVGV4dCIsInBhcnNlRnJvbVN0cmluZyIsImRvY3VtZW50RWxlbWVudCIsInZpZXdQb3J0V2lkdGgiLCJ2aWV3UG9ydEhlaWdodCIsInZpZXdCb3hYIiwidmlld0JveFkiLCJ2aWV3Qm94V2lkdGgiLCJ2aWV3Qm94SGVpZ2h0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3V0ZXJIVE1MIiwicmVxdWlyZSIsImJhc2VSZWN0YW5nbGUiLCJ4IiwieSIsInciLCJoIiwicjEiLCJyMiIsInIzIiwicjQiLCJiYXNlU2hhcGVzIiwiYmFycmVsIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJjbGlwUGF0aCIsImlkIiwiYmFzZVNoYXBlRm4iLCJiYXNlU2hhcGVGbkFyZ3MiLCJjb25jYXZlSGV4YWdvbiIsImN1dFJlY3RhbmdsZSIsImNvcm5lckxlbmd0aCIsImVsbGlwc2UiLCJyeCIsInJ5IiwiaGV4YWdvbiIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInJlY3RhbmdsZSIsInJvdW5kQm90dG9tUmVjdGFuZ2xlIiwicm91bmRSZWN0YW5nbGUiLCJzdGFkaXVtIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwibWF4Iiwic3F1YXJlIiwidGV4dCIsInQiLCJzYmduRGF0YSIsInNiZ25TdHlsZSIsIk1hcCIsInNldCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnblNoYXBlIiwicmVwbGFjZSIsInN0eWxlIiwiZ2V0Iiwic2JnbkFycm93U2hhcGUiLCJlZGdlIiwic2JnbkNvbnRlbnQiLCJjb250ZW50IiwiZGltZW5zaW9ucyIsImRpbSIsIlR5cGVFcnJvciIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwibXVsdGlJbWdDbG9uZU1hcmtlciIsImNsb25lU3R5bGUiLCJtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uIiwidUluZm8iLCJib3JkZXJXaWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJtdWx0aUltZ1N0YXRlVmFyIiwic3RhdGVWYXJTdHlsZSIsInR3Iiwic3RhdGV2YXJpYWJsZVN2ZyIsImNsb25lTWFya2VyIiwibm9kZVdpZHRoIiwibm9kZUhlaWdodCIsInNoYXBlRm4iLCJzaGFwZUZuQXJncyIsImNsaXBJZCIsImNsb25lTWFya2VyU3R5bGUiLCJjbG9uZU1hcmtlclN2ZyIsInNiZ25TdHlsZVNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJjeXRvc2NhcGUiLCJzYmduc3ZnIiwic3R5bGVzaGVldCIsInNlbGVjdG9yIiwiY3NzIiwiZHJhdyIsImJnSW1hZ2UiLCJiZ1dpZHRoIiwiYmdQb3NYIiwiYmdQb3NZIiwiYmdGaXQiLCJiZ0NsaXAiLCJwYWRkaW5nIiwibWVtb2l6ZSIsImNvbnRhaW5lck5vZGVzIiwiZW50aXR5UG9vbE5vZGVzIiwicHJvY2Vzc05vZGVzIiwiY2FjaGVLZXlGbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYmduTm9kZVNoYXBlTWFwIiwiZGlzc29jaWF0aW9uIiwicGhlbm90eXBlIiwic291cmNlQW5kU2luayIsInVuc3BlY2lmaWVkRW50aXR5Iiwic2ltcGxlQ2hlbWljYWwiLCJtYWNyb21vbGVjdWxlIiwibnVjbGVpY0FjaWRGZWF0dXJlIiwiY29tcGxleCIsInBlcnR1cmJpbmdBZ2VudCIsImNvbXBhcnRtZW50IiwiYXV4SXRlbVdpZHRoIiwiYXV4SXRlbUhlaWdodCIsInVJbmZvcyIsInVJbmZvU3ZnIiwibGluZVN2ZyIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsInB1c2giLCJib3R0b21MaW5lU3ZnIiwiY2xvbmVTdmciLCJudyIsIm5oIiwiY2VudGVyWCIsImNlbnRlclkiLCJyYWRpdXMiLCJzaGFwZUFyZ3MiLCJzb3VyY2VBbmRTaW5rU3ZnIiwib3V0ZXJSYWRpdXMiLCJtaW4iLCJpbm5lclJhZGl1cyIsImRpc3NvY2lhdGlvblN2ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7OztBQzdEQSxJ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QVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFX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QUNILHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsRUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFVOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QXRDLEVBQXlDMEQsWUFBekMsRUFBdURDLGdCQUFnQixDQUF2RSxDQUF2QixHQUFtRyxFQUQ5RSxFQUVyQkQsWUFGcUIsRUFFUEMsYUFGTyxFQUVRLENBRlIsRUFFVyxDQUZYLEVBRWNELFlBRmQsRUFFNEJDLGFBRjVCLENBQXZCOztBQUtBLFFBQU1PLGFBQWFoSixPQUNqQnJCLGVBQWVILElBQWYsSUFBdUJrRCxXQUFXaUIsSUFBWCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQjZGLFlBQXRCLEVBQW9DLENBQXBDLEVBQXVDckUsS0FBdkMsQ0FBdkIsR0FBdUUsRUFEdEQsRUFFakJxRSxZQUZpQixFQUVIQyxhQUZHLEVBRVksQ0FGWixFQUVlLENBRmYsRUFFa0JELFlBRmxCLEVBRWdDQyxhQUZoQyxDQUFuQjs7QUFLQSxXQUFPO0FBQ0wxQixlQUFTLENBQUNpQyxVQUFELEVBQWExQyxjQUFiLENBREo7QUFFTFUsZUFBUyxDQUFDLE1BQUQsRUFBUyxNQUFULENBRko7QUFHTEMsY0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLENBSEg7QUFJTEMsY0FBUSxDQUFDLE1BQUQsRUFBUyxNQUFULENBSkg7QUFLTEMsYUFBTyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBTEY7QUFNTEMsY0FBUSxNQU5IO0FBT0xDLGVBQVMsS0FQSjtBQVFMbkMsbUJBQWE7QUFSUixLQUFQO0FBVUQ7QUFuRGtCLENBQXJCOztBQXNEQTFGLE9BQU9DLE9BQVAsR0FBaUJnSSxZQUFqQixDIiwiZmlsZSI6Ii4vYnVpbGQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2M2NjYWEzNjY0MTRkMTk2OGJkIiwiY29uc3Qgc2JnbkRhdGFIYW5kbGVyID0ge1xuICBpc011bHRpbWVyIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xhc3MnKS5pbmNsdWRlcygnbXVsdGltZXInKTtcbiAgfSxcbiAgaGFzQ2xvbmVtYXJrZXIgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbG9uZW1hcmtlcicpO1xuICB9LFxuICBnZXRTdGF0ZVZhcnMgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpO1xuICB9LFxuICBnZXRVbml0SW5mb3MgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKTtcbiAgfSxcbiAgaGFzQXV4SXRlbXMgKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKS5sZW5ndGggKyBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpLmxlbmd0aCA+IDApO1xuICB9LFxuICBzYmduQ2xhc3MgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdjbGFzcycpO1xuICB9LFxuICBzYmduTGFiZWwgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdsYWJlbCcpO1xuICB9LFxuICBzdGF0ZVZhckxhYmVsIChzdGF0ZVZhcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gc3RhdGVWYXIuc3RhdGUudmFyaWFibGU7XG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZVZhci5zdGF0ZS52YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdmFyaWFibGUpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1AJHt2YXJpYWJsZX1gO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUpIHtcbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25EYXRhSGFuZGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XG4gIGlmKCAhc3R5bGVNYXAgKXtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgcyA9ICcnO1xuXG4gIGZvciggbGV0IFtrLCB2XSBvZiBzdHlsZU1hcCApe1xuICAgIHMgKz0gayArICc9JyArICdcIicgKyB2ICsgJ1wiJyArICcgJztcbiAgfVxuXG4gIHJldHVybiBzO1xufTtcblxuY29uc3Qgc3ZnID0gKHN2Z1N0ciwgd2lkdGggPSAxMDAsIGhlaWdodCA9IDEwMCkgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBzdmdUZXh0ID1cbiAgYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PjwhRE9DVFlQRSBzdmc+PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JyR7d2lkdGh9JyBoZWlnaHQ9JyR7aGVpZ2h0fSc+JHtzdmdTdHJ9PC9zdmc+YDtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xufTtcblxuY29uc3Qgc3ZnU3RyID0gKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkgPT4ge1xuICBsZXQgcyA9IHN2ZyhzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xuXG4gIC8vIGJhc2U2NFxuICAvLyBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBidG9hKHMub3V0ZXJIVE1MKTtcblxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xuICBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMub3V0ZXJIVE1MKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdmdTdHI6IHN2Z1N0cixcbiAgc3R5bGVNYXAyU3RyOiBzdHlsZU1hcDJTdHJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcuanMnKS5zdHlsZU1hcDJTdHI7XG5cbmxldCBiYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHcsIGgsIHIxLCByMiwgcjMsIHI0LCBzdHlsZU1hcCkge1xuICByZXR1cm4gYFxuICA8cGF0aCAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IGQ9J1xuICAgIE0gJHt4ICsgcjF9ICR7eX1cbiAgICBMICR7eCArIHcgLSByMn0gJHt5fSBRICR7eCArIHd9ICR7eX0gJHt4ICsgd30gJHt5ICsgcjJ9XG4gICAgTCAke3ggKyB3IH0gJHt5ICsgaCAtIHIzfSBRICR7eCArIHd9ICR7eSArIGh9ICR7eCArIHcgLSByM30gJHt5ICsgaH1cbiAgICBMICR7eCArIHI0fSAke3kgKyBofSBRICR7eH0gJHt5ICsgaH0gJHt4fSAke3kgKyBoIC0gcjR9XG4gICAgTCAke3h9ICR7eSArIHIxfSBRICR7eH0gJHt5fSAke3ggKyByMX0gJHt5fVxuICAgIFonXG4gIC8+XG4gIGA7XG59O1xuXG5jb25zdCBiYXNlU2hhcGVzID0ge1xuICBiYXJyZWwgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcblxuICAgIDxnICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XG4gICAgICA8cGF0aCBkPVwiTSAkezAqd2lkdGggKyB4fSAkey4wMypoZWlnaHQgKyB5fSBMICR7MCp3aWR0aCArIHh9ICR7Ljk3KmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IEwgJHswLjc1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBRICR7MC45NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHt3aWR0aCArIHh9ICR7MC45NSpoZWlnaHQgKyB5fVwiLz5cblxuICAgICAgPHBhdGggZD1cIk0gJHt3aWR0aCArIHh9ICR7Ljk1KmhlaWdodCArIHl9IEwgJHt3aWR0aCArIHh9ICR7MC4wNSpoZWlnaHQgKyB5fSBRICR7d2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gTCAkezAuMjUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswKndpZHRoICsgeH0gJHswLjAzKmhlaWdodCArIHl9XCIvPlxuICAgIDwvZz5cblxuICAgIGA7XG4gIH0sXG5cbiAgY2lyY2xlIChjeCwgY3ksIHIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8Y2lyY2xlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByPScke3J9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICBjbGlwUGF0aCAoaWQsIGJhc2VTaGFwZUZuLCBiYXNlU2hhcGVGbkFyZ3MsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9JyR7aWR9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxuICAgICAgICAke2Jhc2VTaGFwZUZuKC4uLmJhc2VTaGFwZUZuQXJncyl9XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgYDtcbiAgfSxcblxuICBjb25jYXZlSGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDB9LCAke3ggKyB3aWR0aH0sICR7eSArIDB9LCAke3ggKyAwLjg1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMH0sICR7eSArIGhlaWdodH0sICR7IHggKyAwLjE1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGN1dFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29ybmVyTGVuZ3RoLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPSdcbiAgICAgICR7eCArIDAqd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofVxuICAgICAgJHt4ICsgd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIDAqd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH1cbiAgICAgICdcbiAgICAvPlxuICAgIGA7XG4gIH0sXG5cbiAgZWxsaXBzZSAoY3gsIGN5LCByeCwgcnksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxlbGxpcHNlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByeD0nJHtyeH0nIHJ5PScke3J5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPlxuICAgIGA7XG4gIH0sXG5cbiAgaGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIGhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGxpbmUgKHgxLCB5MSwgeDIsIHkyLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPGxpbmUgeDE9JyR7eDF9JyB5MT0nJHt5MX0nIHgyPScke3gyfScgeTI9JyR7eTJ9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICByZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHJvdW5kQm90dG9tUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIC4zKmhlaWdodCwgLjMqaGVpZ2h0LCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgcm91bmRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3RhZGl1bSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICBjb25zdCByYWRpdXNSYXRpbyA9IC4yNCAqIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3F1YXJlICh4LCB5LCBsZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcbiAgfSxcblxuICB0ZXh0ICh0LCB4LCB5LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPHRleHQgeD0nJHt4fScgeT0nJHt5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT4ke3R9PC90ZXh0PmA7XG4gIH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTaGFwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2Jhc2VTaGFwZXMuanMiLCJjb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4vdXRpbC9zYmduLmpzJyk7XG5cbmNvbnN0IHNiZ25TdHlsZSA9IG5ldyBNYXAoKVxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5Jywge3c6IDMyLCBoOiAzMiwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicsIHt3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnbWFjcm9tb2xlY3VsZScsIHt3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIHt3OiA4OCwgaDogNTYsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyJywge3c6IDg4LCBoOiA1Miwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnY29tcGxleCcsIHt3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJ30pXG4uc2V0KCdjb21wbGV4IG11bHRpbWVyJywge3c6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHt3OiA2MCwgaDogNjAsIHNoYXBlOiAncG9seWdvbid9KVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2NvbmNhdmVoZXhhZ29uJ30pXG5cbi5zZXQoJ3BoZW5vdHlwZScsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2hleGFnb24nfSlcbi5zZXQoJ3Byb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXG4uc2V0KCd1bmNlcnRhaW4gcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ29taXR0ZWQgcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ2Fzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXG5cbi5zZXQoJ2NvbXBhcnRtZW50Jywge3c6IDUwLCBoOiA1MCwgc2hhcGU6ICdiYXJyZWwnfSlcblxuLnNldCgndGFnJywge3c6IDEwMCwgaDogNjUsIHNoYXBlOiAndGFnJ30pXG4uc2V0KCdhbmQnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ29yJywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdub3QnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSk7XG5cbmNvbnN0IHNiZ25BcnJvd01hcCA9IG5ldyBNYXAoKVxuLnNldCgnbmVjZXNzYXJ5IHN0aW11bGF0aW9uJywgJ3RyaWFuZ2xlLWNyb3NzJylcbi5zZXQoJ2luaGliaXRpb24nLCAndGVlJylcbi5zZXQoJ2NhdGFseXNpcycsICdjaXJjbGUnKVxuLnNldCgnc3RpbXVsYXRpb24nLCAndHJpYW5nbGUnKVxuLnNldCgncHJvZHVjdGlvbicsICd0cmlhbmdsZScpXG4uc2V0KCdtb2R1bGF0aW9uJywgJ2RpYW1vbmQnKTtcblxuY29uc3QgZWxlbWVudFN0eWxlID0ge1xuICBzYmduU2hhcGUgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICAgIGNvbnN0IHN0eWxlID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzdHlsZSA/IHN0eWxlLnNoYXBlIDogJ2VsbGlwc2UnO1xuICB9LFxuXG4gIHNiZ25BcnJvd1NoYXBlIChlZGdlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKGVkZ2UpO1xuICAgIGNvbnN0IHNoYXBlID0gc2JnbkFycm93TWFwLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzaGFwZSA/IHNoYXBlIDogJ25vbmUnO1xuICB9LFxuXG4gIHNiZ25Db250ZW50IChub2RlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgICBsZXQgY29udGVudCA9IHNiZ25EYXRhLnNiZ25MYWJlbChub2RlKTtcblxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ2FuZCcpIHtcbiAgICAgIGNvbnRlbnQgPSAnQU5EJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb3InKSB7XG4gICAgICBjb250ZW50ID0gJ09SJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnbm90Jykge1xuICAgICAgY29udGVudCA9ICdOT1QnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdvbWl0dGVkIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJ1xcXFxcXFxcJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAndW5jZXJ0YWluIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJz8nO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9LFxuXG4gIGRpbWVuc2lvbnMgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgY29uc3QgZGltID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIGlmIChkaW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0YCk7XG4gICAgfVxuICAgIHJldHVybiBkaW07XG4gIH0sXG5cbiAgd2lkdGggKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLnc7XG4gIH0sXG5cbiAgaGVpZ2h0IChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS5oO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRTdHlsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsImNvbnN0IHRleHRXaWR0aCA9IHJlcXVpcmUoJ3RleHQtd2lkdGgnKTtcblxuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcy5qcycpO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSB7XG5cbiAgbXVsdGlJbWdDbG9uZU1hcmtlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgY29uc3QgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XG4gIH0sXG5cbiAgbXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdUluZm8sIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XG4gICAgY29uc3QgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdUluZm9XaWR0aCA9IHRleHRXaWR0aCh0ZXh0LCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDU7XG5cbiAgICBjb25zdCB1bml0T2ZJbmZvcm1hdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlKHgsIHksIHVJbmZvV2lkdGgsIGhlaWdodCwgdWluZm9SZWN0U3R5bGUpfVxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQodGV4dCwgeCArICh1SW5mb1dpZHRoIC8gMiksIHkgKyAoIGhlaWdodCAvIDIpLCAgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHVuaXRPZkluZm9ybWF0aW9uU3ZnO1xuICB9LFxuXG4gIG11bHRpSW1nU3RhdGVWYXIgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXRlVmFyLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xuXG4gICAgY29uc3Qgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdHcgPSB0ZXh0V2lkdGgoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgMTA7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KHR3LCAzMCk7XG4gICAgY29uc3Qgc3RhdGV2YXJpYWJsZVN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnN0YWRpdW0oeCwgeSwgdywgaGVpZ2h0LCBzdGF0ZVZhclN0eWxlKX1cbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB4ICsgKCB3IC8gMiApLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XG4gIH0sXG5cbiAgY2xvbmVNYXJrZXIgKG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgc2hhcGVGbiwgc2hhcGVGbkFyZ3MpIHtcbiAgICBjb25zdCBjbGlwSWQgPSAnY2xvbmVtYXJrZXInO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdjbGlwLXBhdGgnLCBgdXJsKCMke2NsaXBJZH0pYClcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2xpcFBhdGgoY2xpcElkLCBiYXNlU2hhcGVzLnJlY3RhbmdsZSwgIFswLCAzICogbm9kZUhlaWdodCAvIDQsIG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgbmV3IE1hcCgpXSl9XG4gICAgICAke3NoYXBlRm4oLi4uc2hhcGVGbkFyZ3MsIGNsb25lTWFya2VyU3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gY2xvbmVNYXJrZXJTdmc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXV4aWxpYXJ5SXRlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBzYmduU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vc2JnblN0eWxlLycpO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN5dG9zY2FwZSl7XG4gIHJldHVybiBzYmduU3R5bGVTaGVldChjeXRvc2NhcGUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IGVsZW1lbnRTdHlsZSA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuY29uc3Qgc2JnbnN2ZyA9IHJlcXVpcmUoJy4vZ2x5cGgnKTtcblxuY29uc3Qgc2JnblN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoY3l0b3NjYXBlKSB7XG5cbiAgcmV0dXJuIGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgICAgICAgLy8gZ2VuZXJhbCBub2RlIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzaGFwZSc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuc2JnblNoYXBlKG5vZGUpLFxuICAgICAgICAgICdjb250ZW50JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduQ29udGVudChub2RlKSxcbiAgICAgICAgICAnZm9udC1zaXplJzogMjAsXG4gICAgICAgICAgJ3dpZHRoJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5oZWlnaHQobm9kZSksXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmNmY2ZjYnLFxuICAgICAgICAgICd0ZXh0LW9wYWNpdHknOiAxLFxuICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLW9wYWNpdHknOiAxLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtd2lkdGgnOiAwLjc1XG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzAwMCcsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICcjMDAwJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICcxNCdcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBkcmF3IHNiZ24gc3BlY2lmaWMgc3R5bGluZyAoYXV4aWxpYXJ5IGl0ZW1zLCBjbG9uZW1hcmtlciwgZXRjLilcbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwidW5zcGVjaWZpZWQgZW50aXR5XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWxcIl0sIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGVcIl0sIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZVwiXSwgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwaGVub3R5cGVcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnSW1hZ2UsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnV2lkdGgsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NYLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnRml0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnQ2xpcCxcbiAgICAgICAgICAncGFkZGluZyc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkucGFkZGluZyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5ib3JkZXJXaWR0aFxuICAgICAgICB9KVxuXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0JzogJ3llcycsXG4gICAgICAgICAgJ2dob3N0LW9wYWNpdHknOiAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogMTIsXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogMTJcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogNSxcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiA1XG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxNixcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxNlxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbXBvdW5kIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiY29tcGxleFwiXSwgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl0sIG5vZGVbY2xhc3M9XCJjb21wYXJ0bWVudFwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdjb21wb3VuZC1zaXppbmctd3J0LWxhYmVscyc6ICdleGNsdWRlJyxcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnYm90dG9tJyxcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBwcm9jZXNzIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QjZCNkInXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cInNvdXJjZSBhbmQgc2lua1wiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXG4gICAgICAgICAgJ3NoYXBlLXBvbHlnb24tcG9pbnRzJzogJy0wLjg2LCAwLjUsIC0wLjc1LCAwLjY1LCAtMSwgMC45NSwgLTAuOTUsIDEsIC0wLjY1LCAwLjc1LCAtMC41LCAwLjg2LCAwLCAxLCAwLjUsIDAuODYsIDAuNzEsIDAuNzEsIDAuODYsIDAuNSwgMSwgMCwgMC44NiwgLTAuNSwgMC43NSwgLTAuNjUsIDEsIC0wLjk1LCAwLjk1LCAtMSwgMC42NSwgLTAuNzUsIDAuNSwgLTAuODYsIDAsIC0xLCAtMC41LCAtMC44NiwgLTAuNzEsIC0wLjcxLCAtMC44NiwgLTAuNSwgLTEsIDAnLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXG4gICAgICAgIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSksXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAwLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGVkZ2Ugc3R5bGluZ1xuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYXJyb3ctc2NhbGUnOiAxLjc1LFxuICAgICAgICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICAgICAgICd3aWR0aCc6IDEuNSxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdjb2xvcic6ICcjNTU1J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6c2VsZWN0ZWQnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjZDY3NjE0J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAuNywgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICc4J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2FyZGluYWxpdHkgPiAwXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtc2hhcGUnOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItd2lkdGgnOiAnMScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1jb2xvcic6ICd3aGl0ZScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1vcGFjaXR5JzogJzEnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImNvbnN1bXB0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0sIGVkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnc291cmNlLWxhYmVsJzogKGVkZ2UpID0+ICcnICsgZWRnZS5kYXRhKCdjYXJkaW5hbGl0eScpLFxuICAgICAgICAgICdzb3VyY2UtdGV4dC1vZmZzZXQnOiAxMFxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3NdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6IChlZGdlKSA9PiBlbGVtZW50U3R5bGUuc2JnbkFycm93U2hhcGUoZWRnZSksXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1zaGFwZSc6ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJpbmhpYml0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBjb3JlXG4gICAgICAgIC5zZWxlY3RvcignY29yZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzZWxlY3Rpb24tYm94LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdzZWxlY3Rpb24tYm94LW9wYWNpdHknOiAnMC4yJywgJ3NlbGVjdGlvbi1ib3gtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnXG4gICAgICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzYmduU3R5bGVTaGVldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvaW5kZXguanMiLCJjb25zdCBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoLm1lbW9pemUnKTtcblxuY29uc3QgY29udGFpbmVyTm9kZXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lck5vZGVzLmpzJyk7XG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSByZXF1aXJlKCcuL2VudGl0eVBvb2xOb2Rlcy5qcycpO1xuY29uc3QgcHJvY2Vzc05vZGVzID0gcmVxdWlyZSgnLi9wcm9jZXNzTm9kZXMuanMnKTtcblxuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24uanMnKTtcblxuY29uc3QgY2FjaGVLZXlGbiA9IChub2RlKSA9PiAnJyArIEpTT04uc3RyaW5naWZ5KG5vZGUuaWQoKSk7XG5cbmNvbnN0IHNiZ25Ob2RlU2hhcGVNYXAgPSBuZXcgTWFwKClcbi8vIHByb2Nlc3Mgbm9kZXNcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIG1lbW9pemUocHJvY2Vzc05vZGVzLmRpc3NvY2lhdGlvbiwgY2FjaGVLZXlGbikpXG4uc2V0KCdwaGVub3R5cGUnLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5waGVub3R5cGUsIGNhY2hlS2V5Rm4pKVxuXG4vLyBlbnRpdHkgcG9vbCBub2Rlc1xuLnNldCgnc291cmNlIGFuZCBzaW5rJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc291cmNlQW5kU2luaywgY2FjaGVLZXlGbikpXG4uc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy51bnNwZWNpZmllZEVudGl0eSwgY2FjaGVLZXlGbikpXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5zaW1wbGVDaGVtaWNhbCwgY2FjaGVLZXlGbikpXG4uc2V0KCdtYWNyb21vbGVjdWxlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubWFjcm9tb2xlY3VsZSwgY2FjaGVLZXlGbikpXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLm51Y2xlaWNBY2lkRmVhdHVyZSwgY2FjaGVLZXlGbikpXG4uc2V0KCdjb21wbGV4JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuY29tcGxleCwgY2FjaGVLZXlGbikpXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMucGVydHVyYmluZ0FnZW50LCBjYWNoZUtleUZuKSlcblxuLy8gY29udGFpbmVyIG5vZGVzXG4uc2V0KCdjb21wYXJ0bWVudCcsIG1lbW9pemUoY29udGFpbmVyTm9kZXMuY29tcGFydG1lbnQsIGNhY2hlS2V5Rm4pKTtcblxuXG5jb25zdCBkcmF3ID0gKG5vZGUpID0+IHtcbiAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgbGV0IHNoYXBlRm4gPSBzYmduTm9kZVNoYXBlTWFwLmdldChzYmduQ2xhc3MpO1xuICBpZiAoc2hhcGVGbiA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBzaGFwZSBpbXBsZW1lbnRhdGlvbmApO1xuICB9XG4gIHJldHVybiBzaGFwZUZuKG5vZGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRyYXc6IGRyYXdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcbmNvbnN0IG1lbW9pemUgPSByZXF1aXJlKCdsb2Rhc2gubWVtb2l6ZScpO1xuXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcbmNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcblxuY29uc3QgY29udGFpbmVyTm9kZXMgPSB7XG5cbiAgY29tcGFydG1lbnQgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSA2MDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gNDA7XG4gICAgY29uc3QgdUluZm9zID0gc2JnbkRhdGEuZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0pIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgbGV0IGxpbmVTdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbbGluZVN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMjUlJ10sXG4gICAgICBiZ1Bvc1k6IFsnMTlweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY29udGFpbicsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICczOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAnNCdcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lck5vZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9jb250YWluZXJOb2Rlcy5qcyIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBzdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0aWYodHlwZW9mIGNhbnZhcy5nZXRDb250ZXh0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0cmV0dXJuICEhY29udGV4dCAmJiAodHlwZW9mIGNvbnRleHQubWVhc3VyZVRleHQgPT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBleHRlbmQoe1xuXHRcdFx0c3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0dmFyaWFudDogJ25vcm1hbCcsXG5cdFx0XHR3ZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRmYW1pbHk6ICdzYW5zLXNlcmlmJyxcblx0XHRcdGFsaWduOiAnc3RhcnQnLFxuXHRcdFx0YmFzZWxpbmU6ICdhbHBoYWJldGljJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIHNpemUgPSBvcHRpb25zLnNpemU7XG5cdFx0aWYodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSBzaXplID0gc2l6ZSArICdweCc7XG5cblx0XHRjb250ZXh0LmZvbnQgPSB1dGlsLmZvcm1hdCgnJXMgJXMgJXMgJXMgJXMnLFxuXHRcdFx0b3B0aW9ucy5zdHlsZSxcblx0XHRcdG9wdGlvbnMudmFyaWFudCxcblx0XHRcdG9wdGlvbnMud2VpZ2h0LFxuXHRcdFx0c2l6ZSxcblx0XHRcdG9wdGlvbnMuZmFtaWx5KTtcblx0XHRjb250ZXh0LnRleHRBbGlnbiA9IG9wdGlvbnMuYWxpZ247XG5cdFx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSB0cnVlO1xuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRlZCgpID8gaW5pdGlhbGl6ZSgpIDogKGZ1bmN0aW9uKCkge1xuXHR2YXIgd2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHdpZHRoO1xufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xuXG5jb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcbmNvbnN0IGdldFVuaXRJbmZvcyA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmdldFVuaXRJbmZvcztcbmNvbnN0IGdldFN0YXRlVmFycyA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmdldFN0YXRlVmFycztcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XG5cbmNvbnN0IGVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cblxuY29uc3QgZW50aXR5UG9vbE5vZGVzID0ge1xuXG4gIHVuc3BlY2lmaWVkRW50aXR5IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnMzJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG5cbiAgfSxcblxuICBzaW1wbGVDaGVtaWNhbCAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcxMnB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNDhweCcsICcwcHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcblxuICBtYWNyb21vbGVjdWxlKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzUycHgnLCAnNDRweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9OyAgfSxcblxuICBudWNsZWljQWNpZEZlYXR1cmUgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG5cbiAgY29tcGxleCAobm9kZSkge1xuICAgIGNvbnN0IGl0ZW1XID0gNjA7XG4gICAgY29uc3QgaXRlbUggPSAyNDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgICBjb25zdCBiZ1dpZHRoID0gW107XG4gICAgY29uc3QgYmdIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBiZ1Bvc1ggPSBbXTtcbiAgICBjb25zdCBiZ1Bvc1kgPSBbXTtcbiAgICBjb25zdCBiZ0ZpdCA9IFtdO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcblxuICAgIC8vIG9yZGVyIG9mIHN2ZyBpbWFnZSBnZW5lcmF0aW9uIG1hdHRlcnNcbiAgICBpZiAodUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcExpbmVTdmcgPSBzdmdTdHIoYmFzZVNoYXBlcy5saW5lKDAsIDAsIGl0ZW1XLCAwLCBzdHlsZSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaCh0b3BMaW5lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTFweCcpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xuICAgICAgY29uc3QgYm90dG9tTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKGJvdHRvbUxpbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XG4gICAgICBjb25zdCBjbG9uZVN2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGl0ZW1XLCBpdGVtSCAtIDMpLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goY2xvbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGl0ZW1XIC0gNSwgaXRlbUggLSAzLCB1SW5mb3NbMF0pLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2godUluZm9TdmcpO1xuICAgICAgYmdQb3NYLnB1c2goJzI1JScpO1xuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKHNWYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBpdGVtVyAtIDUsIGl0ZW1IIC0gMywgc1ZhcnNbMF0pLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goc1ZhclN2Zyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnODglJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogaW1hZ2VzLFxuICAgICAgYmdXaWR0aDogYmdXaWR0aCxcbiAgICAgIGJnUG9zWDogYmdQb3NYLFxuICAgICAgYmdQb3NZOiBiZ1Bvc1ksXG4gICAgICBiZ0ZpdDogYmdGaXQsXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICcyMnB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiA0XG4gICAgfTtcbiAgfSxcblxuICBzb3VyY2VBbmRTaW5rIChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBlbGVtZW50LmRpbWVuc2lvbnMobm9kZSk7XG5cbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKG53IC0gMikgLyAyO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLWxpbmVjYXAnLCAnc3F1YXJlJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IHNoYXBlQXJncyA9IFtjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXNdO1xuXG4gICAgY29uc3Qgc291cmNlQW5kU2lua1N2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudywgbmgsIGJhc2VTaGFwZXMuY2lyY2xlLCBzaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke2Jhc2VTaGFwZXMubGluZSgwLCBuaCwgbncsIDAsIHN0eWxlTWFwKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN2Z1N0cihzb3VyY2VBbmRTaW5rU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGVydHVyYmluZ0FnZW50IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzhweCcsICc1NnB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW50aXR5UG9vbE5vZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJjb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcblxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XG5jb25zdCBoYXNDbG9uZW1hcmtlciA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmhhc0Nsb25lbWFya2VyO1xuXG5jb25zdCBlbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jb25zdCBwcm9jZXNzTm9kZXMgPSB7XG5cbiAgZGlzc29jaWF0aW9uIChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBlbGVtZW50LmRpbWVuc2lvbnMobm9kZSk7XG5cbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XG4gICAgY29uc3Qgb3V0ZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMjtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IChNYXRoLm1pbihudywgbmgpIC0gMikgLyAzO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzInKVxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgY29uc3QgZGlzc29jaWF0aW9uU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2lyY2xlKGNlbnRlclgsIGNlbnRlclksIG91dGVyUmFkaXVzLCBzdHlsZU1hcCl9XG4gICAgICAke2Jhc2VTaGFwZXMuY2lyY2xlKGNlbnRlclgsIGNlbnRlclksIGlubmVyUmFkaXVzLCBzdHlsZU1hcCl9XG4gICAgYDtcbiAgICByZXR1cm4gc3ZnU3RyKGRpc3NvY2lhdGlvblN2ZywgbncsIG5oKTtcbiAgfSxcblxuICBwaGVub3R5cGUgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgY2xvbmVNYXJrZXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJSddLFxuICAgICAgYmdQb3NZOiBbJzU2cHgnLCAnNTZweCddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzTm9kZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL3Byb2Nlc3NOb2Rlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=