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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStylesheet = __webpack_require__(1);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["cytoscapeSbgnStylesheet"] = factory();else root["cytoscapeSbgnStylesheet"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
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
      /******/return __webpack_require__(__webpack_require__.s = 5);
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

          var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight / 4, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

          return cloneMarkerSvg;
        }
      };

      module.exports = auxiliaryItems;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sbgnStyleSheet = __webpack_require__(6);

      module.exports = function (cytoscape) {
        return sbgnStyleSheet(cytoscape);
      };

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var elementStyle = __webpack_require__(3);
      var sbgnsvg = __webpack_require__(7);

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
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var memoize = __webpack_require__(8);

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

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
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
        var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

        /** Detect free variable `self`. */
        var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

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
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();

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
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

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
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
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
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
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
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
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
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
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
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
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
              return func + '';
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
          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function memoized() {
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
          memoized.cache = new (memoize.Cache || MapCache)();
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
          return value === other || value !== value && other !== other;
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
          var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
          return !!value && (type == 'object' || type == 'function');
        }

        module.exports = memoize;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(9));

      /***/
    },
    /* 9 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var svgStr = __webpack_require__(1).svgStr;
      var sbgnData = __webpack_require__(0);

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
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      var util = __webpack_require__(12);
      var extend = __webpack_require__(16);

      var supported = function supported() {
        if (typeof document === 'undefined' || typeof document.createElement !== 'function') return false;

        var canvas = document.createElement('canvas');
        if (typeof canvas.getContext !== 'function') return false;

        var context = canvas.getContext('2d');
        return !!context && typeof context.measureText === 'function';
      };

      var initialize = function initialize() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        var width = function width(str, options) {
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
          if (typeof size === 'number') size = size + 'px';

          context.font = util.format('%s %s %s %s %s', options.style, options.variant, options.weight, size, options.family);
          context.textAlign = options.align;
          context.textBaseline = options.baseline;

          return context.measureText(str).width;
        };

        width.supported = true;
        return width;
      };

      module.exports = supported() ? initialize() : function () {
        var width = function width() {
          return 0;
        };

        width.supported = false;
        return width;
      }();

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (process) {
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

        var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
          var keys = Object.keys(obj);
          var descriptors = {};
          for (var i = 0; i < keys.length; i++) {
            descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
          }
          return descriptors;
        };

        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
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
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
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
        exports.deprecate = function (fn, msg) {
          if (typeof process !== 'undefined' && process.noDeprecation === true) {
            return fn;
          }

          // Allow for deprecating things in the process of starting up.
          if (typeof process === 'undefined') {
            return function () {
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
        exports.debuglog = function (set) {
          if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
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
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
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
            return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }

        function stylizeNoColor(str, styleType) {
          return str;
        }

        function arrayToHash(array) {
          var hash = {};

          array.forEach(function (val, idx) {
            hash[val] = true;
          });

          return hash;
        }

        function formatValue(ctx, value, recurseTimes) {
          // Provide a hook for user-specified inspect functions.
          // Check that value is an object with an inspect function on it
          if (ctx.customInspect && value && isFunction(value.inspect) &&
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
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
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

          var base = '',
              array = false,
              braces = ['{', '}'];

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
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }

          ctx.seen.pop();

          return reduceToSingleString(output, base, braces);
        }

        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
          // For some reason typeof null is "object", so special case here.
          if (isNull(value)) return ctx.stylize('null', 'null');
        }

        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }

        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
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
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
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
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }

          return name + ': ' + str;
        }

        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);

          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
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
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
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
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
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

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // 26 Feb 16:19:34
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }

        // log is just a thin wrapper to console.log that prepends a timestamp
        exports.log = function () {
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

        exports._extend = function (origin, add) {
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
          if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

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
          return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
        };

        exports.promisify.custom = kCustomPromisifiedSymbol;

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
            var cb = function cb() {
              return maybeCb.apply(self, arguments);
            };
            // In true node style we process the callback on `nextTick` with all the
            // implications (stack, `uncaughtException`, `async_hooks`)
            original.apply(this, args).then(function (ret) {
              process.nextTick(cb, null, ret);
            }, function (rej) {
              process.nextTick(callbackifyOnRejected, rej, cb);
            });
          }

          Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
          Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
          return callbackified;
        }
        exports.callbackify = callbackify;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(13));

      /***/
    },
    /* 13 */
    /***/function (module, exports) {

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
      function defaultClearTimeout() {
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
      })();
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
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
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
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
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
        while (len) {
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

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports) {

      module.exports = function isBuffer(arg) {
        return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports) {

      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
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
          ctor.super_ = superCtor;
          var TempCtor = function TempCtor() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }

      /***/
    },
    /* 16 */
    /***/function (module, exports) {

      module.exports = extend;

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      function extend() {
        var target = {};

        for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      }

      /***/
    },
    /* 17 */
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
            bgHeight: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['100%', '8px', '100%', '44px', '0%'],
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
            bgHeight: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '12px'],
            bgPosY: ['100%', '8px', '100%', '0px'],
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
            bgHeight: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['100%', '8px', '100%', '44px', '0%'],
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
            bgHeight: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px', '40px'],
            bgPosY: ['100%', '8px', '100%', '44px', '0%'],
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
            bgHeight: ['100%', '100%', '100%'],
            bgPosX: ['0%', '0%', '0%', '20px'],
            bgPosY: ['100%', '8px', '100%', '0%'],
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
    /* 18 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmZjNjQ3YTI3NTU1MTE4MWRlNDAiLCJ3ZWJwYWNrOi8vLy4vZGVtby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGZjZWY4YzgyY2E2OGY1ZmEyNmJjIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsic2JnblN0eWxlc2hlZXQiLCJyZXF1aXJlIiwiY3l0b3NjYXBlIiwid2luZG93IiwiY3kiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbWVudHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGF5b3V0IiwibmFtZSIsInN0eWxlIiwic2JnbkRhdGFIYW5kbGVyIiwibm9kZSIsImVsZW1lbnQiLCJ2YXJpYWJsZSIsInN0YXRlVmFyIiwidmFsdWUiLCJtb2R1bGUiLCJzdHlsZU1hcDJTdHIiLCJzIiwiayIsInYiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInBhcnNlciIsInN2Z1RleHQiLCJzdmdTdHIiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYmFzZVJlY3RhbmdsZSIsIngiLCJ5IiwiYmFzZVNoYXBlcyIsImJhc2VTaGFwZUZuIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwic2JnbkRhdGEiLCJzYmduU3R5bGUiLCJ3IiwiaCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnbkNsYXNzIiwiY29udGVudCIsImRpbSIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwiY2xvbmVTdHlsZSIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJ0ZXh0IiwidUluZm8iLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJzdGF0ZVZhclN0eWxlIiwidHciLCJzdGF0ZXZhcmlhYmxlU3ZnIiwiY2xpcElkIiwiY2xvbmVNYXJrZXJTdHlsZSIsImNsb25lTWFya2VyU3ZnIiwibm9kZUhlaWdodCIsInNoYXBlRm4iLCJzYmduU3R5bGVTaGVldCIsInNiZ25zdmciLCJlZGdlIiwibWVtb2l6ZSIsImNvbnRhaW5lck5vZGVzIiwiZW50aXR5UG9vbE5vZGVzIiwicHJvY2Vzc05vZGVzIiwiY2FjaGVLZXlGbiIsIkpTT04iLCJzYmduTm9kZVNoYXBlTWFwIiwiZHJhdyIsImF1eEl0ZW1XaWR0aCIsImF1eEl0ZW1IZWlnaHQiLCJ1SW5mb3MiLCJ1SW5mb1N2ZyIsImxpbmVTdmciLCJiZ0ltYWdlIiwiYmdXaWR0aCIsImJnUG9zWCIsImJnUG9zWSIsImJnRml0IiwiYmdDbGlwIiwicGFkZGluZyIsImdldFVuaXRJbmZvcyIsImdldFN0YXRlVmFycyIsImhhc0Nsb25lbWFya2VyIiwic1ZhcnMiLCJzVmFyU3ZnIiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJiZ0hlaWdodCIsIml0ZW1XIiwiaXRlbUgiLCJpbWFnZXMiLCJ0b3BMaW5lU3ZnIiwiYm90dG9tTGluZVN2ZyIsImNsb25lU3ZnIiwiY2VudGVyWCIsIm53IiwiY2VudGVyWSIsIm5oIiwicmFkaXVzIiwic3R5bGVNYXAiLCJzaGFwZUFyZ3MiLCJzb3VyY2VBbmRTaW5rU3ZnIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsImRpc3NvY2lhdGlvblN2ZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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Q0EscUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGNBQ0EscUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUEsY0FDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxXQUZILE1BRUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBLGNBQ0EsK0JBREE7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUFBLGNBQ0EsK0JBREE7O0FBR0E7QUFDQTtBQUNHLFdBRkgsTUFFRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQSxjQUNBLHFDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDJDQUZBO0FBR0E7QUFIQTtBQUtBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2J1aWxkL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZmM2NDdhMjc1NTUxMTgxZGU0MCIsInZhciBzYmduU3R5bGVzaGVldCA9IHJlcXVpcmUoJy4vYnVpbGQvYnVuZGxlLmpzJyk7XHJcbnZhciBjeXRvc2NhcGUgPSB3aW5kb3cuY3l0b3NjYXBlO1xyXG5cclxudmFyIGN5ID0gd2luZG93LmN5ID0gY3l0b3NjYXBlKHtcclxuICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjeScpLFxyXG4gIGVsZW1lbnRzOiBmZXRjaCgnLi9kZW1vLmpzb24nKS50aGVuKCByZXMgPT4gcmVzLmpzb24oKSApLFxyXG4gIGxheW91dDogeyBuYW1lOiAncHJlc2V0JyB9LFxyXG4gIHN0eWxlOiBzYmduU3R5bGVzaGVldChjeXRvc2NhcGUpXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8uanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTYmduU3R5bGVzaGVldFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeXRvc2NhcGVTYmduU3R5bGVzaGVldFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmNlZjhjODJjYTY4ZjVmYTI2YmNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovd2VicGFjay9ib290c3RyYXAgZmNlZjhjODJjYTY4ZjVmYTI2YmMiLCJjb25zdCBzYmduRGF0YUhhbmRsZXIgPSB7XHJcbiAgaXNNdWx0aW1lciAobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xhc3MnKS5pbmNsdWRlcygnbXVsdGltZXInKTtcclxuICB9LFxyXG4gIGhhc0Nsb25lbWFya2VyIChub2RlKSB7XHJcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbG9uZW1hcmtlcicpO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGVWYXJzIChub2RlKSB7XHJcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpO1xyXG4gIH0sXHJcbiAgZ2V0VW5pdEluZm9zIChub2RlKSB7XHJcbiAgICByZXR1cm4gbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKTtcclxuICB9LFxyXG4gIGhhc0F1eEl0ZW1zIChub2RlKSB7XHJcbiAgICByZXR1cm4gKG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKS5sZW5ndGggKyBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpLmxlbmd0aCA+IDApO1xyXG4gIH0sXHJcbiAgc2JnbkNsYXNzIChlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdjbGFzcycpO1xyXG4gIH0sXHJcbiAgc2JnbkxhYmVsIChlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdsYWJlbCcpO1xyXG4gIH0sXHJcbiAgc3RhdGVWYXJMYWJlbCAoc3RhdGVWYXIpIHtcclxuICAgIGNvbnN0IHZhcmlhYmxlID0gc3RhdGVWYXIuc3RhdGUudmFyaWFibGU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHN0YXRlVmFyLnN0YXRlLnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHZhcmlhYmxlKSB7XHJcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1AJHt2YXJpYWJsZX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFyaWFibGUpIHtcclxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2JnbkRhdGFIYW5kbGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XHJcbiAgaWYoICFzdHlsZU1hcCApe1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgbGV0IHMgPSAnJztcclxuXHJcbiAgZm9yKCBsZXQgW2ssIHZdIG9mIHN0eWxlTWFwICl7XHJcbiAgICBzICs9IGsgKyAnPScgKyAnXCInICsgdiArICdcIicgKyAnICc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcztcclxufTtcclxuXHJcbmNvbnN0IHN2ZyA9IChzdmdTdHIsIHdpZHRoID0gMTAwLCBoZWlnaHQgPSAxMDApID0+IHtcclxuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgbGV0IHN2Z1RleHQgPVxyXG4gIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48IURPQ1RZUEUgc3ZnPjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2ZXJzaW9uPScxLjEnIHdpZHRoPScke3dpZHRofScgaGVpZ2h0PScke2hlaWdodH0nPiR7c3ZnU3RyfTwvc3ZnPmA7XHJcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xyXG59O1xyXG5cclxuY29uc3Qgc3ZnU3RyID0gKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkgPT4ge1xyXG4gIGxldCBzID0gc3ZnKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCk7XHJcblxyXG4gIC8vIGJhc2U2NFxyXG4gIC8vIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIGJ0b2Eocy5vdXRlckhUTUwpO1xyXG5cclxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xyXG4gIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgKyBlbmNvZGVVUklDb21wb25lbnQocy5vdXRlckhUTUwpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHN2Z1N0cjogc3ZnU3RyLFxyXG4gIHN0eWxlTWFwMlN0cjogc3R5bGVNYXAyU3RyXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcuanMnKS5zdHlsZU1hcDJTdHI7XHJcblxyXG5sZXQgYmFzZVJlY3RhbmdsZSA9IGZ1bmN0aW9uICh4LCB5LCB3LCBoLCByMSwgcjIsIHIzLCByNCwgc3R5bGVNYXApIHtcclxuICByZXR1cm4gYFxyXG4gIDxwYXRoICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gZD0nXHJcbiAgICBNICR7eCArIHIxfSAke3l9XHJcbiAgICBMICR7eCArIHcgLSByMn0gJHt5fSBRICR7eCArIHd9ICR7eX0gJHt4ICsgd30gJHt5ICsgcjJ9XHJcbiAgICBMICR7eCArIHcgfSAke3kgKyBoIC0gcjN9IFEgJHt4ICsgd30gJHt5ICsgaH0gJHt4ICsgdyAtIHIzfSAke3kgKyBofVxyXG4gICAgTCAke3ggKyByNH0gJHt5ICsgaH0gUSAke3h9ICR7eSArIGh9ICR7eH0gJHt5ICsgaCAtIHI0fVxyXG4gICAgTCAke3h9ICR7eSArIHIxfSBRICR7eH0gJHt5fSAke3ggKyByMX0gJHt5fVxyXG4gICAgWidcclxuICAvPlxyXG4gIGA7XHJcbn07XHJcblxyXG5jb25zdCBiYXNlU2hhcGVzID0ge1xyXG4gIGJhcnJlbCAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgXHJcblxyXG4gICAgPGcgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT5cclxuICAgICAgPHBhdGggZD1cIk0gJHswKndpZHRoICsgeH0gJHsuMDMqaGVpZ2h0ICsgeX0gTCAkezAqd2lkdGggKyB4fSAkey45NypoZWlnaHQgKyB5fSBRICR7MC4wNip3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHswLjI1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fVwiLz5cclxuXHJcbiAgICAgIDxwYXRoIGQ9XCJNICR7MC4yNSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gTCAkezAuNzUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IFEgJHswLjk1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAke3dpZHRoICsgeH0gJHswLjk1KmhlaWdodCArIHl9XCIvPlxyXG5cclxuICAgICAgPHBhdGggZD1cIk0gJHt3aWR0aCArIHh9ICR7Ljk1KmhlaWdodCArIHl9IEwgJHt3aWR0aCArIHh9ICR7MC4wNSpoZWlnaHQgKyB5fSBRICR7d2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9XCIvPlxyXG5cclxuICAgICAgPHBhdGggZD1cIk0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9IEwgJHswLjI1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9ICR7MCp3aWR0aCArIHh9ICR7MC4wMypoZWlnaHQgKyB5fVwiLz5cclxuICAgIDwvZz5cclxuXHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGNpcmNsZSAoY3gsIGN5LCByLCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGA8Y2lyY2xlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByPScke3J9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcclxuICB9LFxyXG5cclxuICBjbGlwUGF0aCAoaWQsIGJhc2VTaGFwZUZuLCBiYXNlU2hhcGVGbkFyZ3MsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggaWQ9JyR7aWR9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxyXG4gICAgICAgICR7YmFzZVNoYXBlRm4oLi4uYmFzZVNoYXBlRm5BcmdzKX1cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGNvbmNhdmVIZXhhZ29uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cclxuICAgICAgcG9pbnRzPScke3ggKyAwfSwgJHt5ICsgMH0sICR7eCArIHdpZHRofSwgJHt5ICsgMH0sICR7eCArIDAuODUqd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgd2lkdGh9LCAke3kgKyBoZWlnaHR9LCAke3ggKyAwfSwgJHt5ICsgaGVpZ2h0fSwgJHsgeCArIDAuMTUqd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSdcclxuICAgIC8+YDtcclxuICB9LFxyXG5cclxuICBjdXRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvcm5lckxlbmd0aCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XHJcbiAgICAgIHBvaW50cz0nXHJcbiAgICAgICR7eCArIDAqd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofVxyXG4gICAgICAke3ggKyB3aWR0aH0gJHt5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RofSAke3ggKyB3aWR0aCAtIGNvcm5lckxlbmd0aH0gJHt5ICsgaGVpZ2h0fSAke3ggKyBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgMCp3aWR0aH0gJHt5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RofVxyXG4gICAgICAnXHJcbiAgICAvPlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBlbGxpcHNlIChjeCwgY3ksIHJ4LCByeSwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxlbGxpcHNlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByeD0nJHtyeH0nIHJ5PScke3J5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBoZXhhZ29uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cclxuICAgICAgcG9pbnRzPScke3ggKyAwfSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIDAuMjUqd2lkdGh9LCAke3kgKyAwKmhlaWdodH0sICR7eCArIDAuNzUqd2lkdGh9LCAke3kgKyAwKmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIDAuNzUqd2lkdGh9LCAke3kgKyBoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSdcclxuICAgIC8+YDtcclxuICB9LFxyXG5cclxuICBsaW5lICh4MSwgeTEsIHgyLCB5Miwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgPGxpbmUgeDE9JyR7eDF9JyB5MT0nJHt5MX0nIHgyPScke3gyfScgeTI9JyR7eTJ9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcclxuICB9LFxyXG5cclxuICByZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAwLCAwLCBzdHlsZU1hcCk7XHJcbiAgfSxcclxuXHJcbiAgcm91bmRCb3R0b21SZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAuMypoZWlnaHQsIC4zKmhlaWdodCwgc3R5bGVNYXApO1xyXG4gIH0sXHJcblxyXG4gIHJvdW5kUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCBzdHlsZU1hcCk7XHJcbiAgfSxcclxuXHJcbiAgc3RhZGl1bSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gLjI0ICogTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XHJcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgc3R5bGVNYXApO1xyXG4gIH0sXHJcblxyXG4gIHNxdWFyZSAoeCwgeSwgbGVuZ3RoLCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcclxuICB9LFxyXG5cclxuICB0ZXh0ICh0LCB4LCB5LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGA8dGV4dCB4PScke3h9JyB5PScke3l9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PiR7dH08L3RleHQ+YDtcclxuICB9XHJcblxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZVNoYXBlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwiY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuL3V0aWwvc2Jnbi5qcycpO1xyXG5cclxuY29uc3Qgc2JnblN0eWxlID0gbmV3IE1hcCgpXHJcbi5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIHt3OiAzMiwgaDogMzIsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuLnNldCgnc2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyJywge3c6IDQ4LCBoOiA0OCwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcbi5zZXQoJ21hY3JvbW9sZWN1bGUnLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXHJcbi5zZXQoJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXHJcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywge3c6IDg4LCBoOiA1Niwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZSd9KVxyXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lcicsIHt3OiA4OCwgaDogNTIsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcclxuLnNldCgnY29tcGxleCcsIHt3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJ30pXHJcbi5zZXQoJ2NvbXBsZXggbXVsdGltZXInLCB7dzogMTAsIGg6IDEwLCBzaGFwZTogJ2N1dHJlY3RhbmdsZSd9KVxyXG4uc2V0KCdzb3VyY2UgYW5kIHNpbmsnLCB7dzogNjAsIGg6IDYwLCBzaGFwZTogJ3BvbHlnb24nfSlcclxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2NvbmNhdmVoZXhhZ29uJ30pXHJcblxyXG4uc2V0KCdwaGVub3R5cGUnLCB7dzogMTQwLCBoOiA2MCwgc2hhcGU6ICdoZXhhZ29uJ30pXHJcbi5zZXQoJ3Byb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXHJcbi5zZXQoJ3VuY2VydGFpbiBwcm9jZXNzJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZSd9KVxyXG4uc2V0KCdvbWl0dGVkIHByb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXHJcbi5zZXQoJ2Fzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuLnNldCgnZGlzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuXHJcbi5zZXQoJ2NvbXBhcnRtZW50Jywge3c6IDUwLCBoOiA1MCwgc2hhcGU6ICdiYXJyZWwnfSlcclxuXHJcbi5zZXQoJ3RhZycsIHt3OiAxMDAsIGg6IDY1LCBzaGFwZTogJ3RhZyd9KVxyXG4uc2V0KCdhbmQnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuLnNldCgnb3InLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuLnNldCgnbm90Jywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pO1xyXG5cclxuY29uc3Qgc2JnbkFycm93TWFwID0gbmV3IE1hcCgpXHJcbi5zZXQoJ25lY2Vzc2FyeSBzdGltdWxhdGlvbicsICd0cmlhbmdsZS1jcm9zcycpXHJcbi5zZXQoJ2luaGliaXRpb24nLCAndGVlJylcclxuLnNldCgnY2F0YWx5c2lzJywgJ2NpcmNsZScpXHJcbi5zZXQoJ3N0aW11bGF0aW9uJywgJ3RyaWFuZ2xlJylcclxuLnNldCgncHJvZHVjdGlvbicsICd0cmlhbmdsZScpXHJcbi5zZXQoJ21vZHVsYXRpb24nLCAnZGlhbW9uZCcpO1xyXG5cclxuY29uc3QgZWxlbWVudFN0eWxlID0ge1xyXG4gIHNiZ25TaGFwZSAobm9kZSkge1xyXG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcclxuICAgIGNvbnN0IHN0eWxlID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xyXG4gICAgcmV0dXJuIHN0eWxlID8gc3R5bGUuc2hhcGUgOiAnZWxsaXBzZSc7XHJcbiAgfSxcclxuXHJcbiAgc2JnbkFycm93U2hhcGUgKGVkZ2UpIHtcclxuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhlZGdlKTtcclxuICAgIGNvbnN0IHNoYXBlID0gc2JnbkFycm93TWFwLmdldChzYmduQ2xhc3MpO1xyXG4gICAgcmV0dXJuIHNoYXBlID8gc2hhcGUgOiAnbm9uZSc7XHJcbiAgfSxcclxuXHJcbiAgc2JnbkNvbnRlbnQgKG5vZGUpIHtcclxuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XHJcbiAgICBsZXQgY29udGVudCA9IHNiZ25EYXRhLnNiZ25MYWJlbChub2RlKTtcclxuXHJcbiAgICBpZiAoc2JnbkNsYXNzID09ICdhbmQnKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAnQU5EJztcclxuICAgIH1cclxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ29yJykge1xyXG4gICAgICBjb250ZW50ID0gJ09SJztcclxuICAgIH1cclxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ25vdCcpIHtcclxuICAgICAgY29udGVudCA9ICdOT1QnO1xyXG4gICAgfVxyXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb21pdHRlZCBwcm9jZXNzJykge1xyXG4gICAgICBjb250ZW50ID0gJ1xcXFxcXFxcJztcclxuICAgIH1cclxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ3VuY2VydGFpbiBwcm9jZXNzJykge1xyXG4gICAgICBjb250ZW50ID0gJz8nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH0sXHJcblxyXG4gIGRpbWVuc2lvbnMgKG5vZGUpIHtcclxuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKTtcclxuICAgIGNvbnN0IGRpbSA9IHNiZ25TdHlsZS5nZXQoc2JnbkNsYXNzKTtcclxuICAgIGlmIChkaW0gPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3NiZ25DbGFzc30gZG9lcyBub3QgaGF2ZSBhIGRlZmF1bHQgd2lkdGggLyBoZWlnaHRgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaW07XHJcbiAgfSxcclxuXHJcbiAgd2lkdGggKG5vZGUpIHtcclxuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMobm9kZSkudztcclxuICB9LFxyXG5cclxuICBoZWlnaHQgKG5vZGUpIHtcclxuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMobm9kZSkuaDtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRTdHlsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9lbGVtZW50LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9lbGVtZW50LmpzIiwiY29uc3QgdGV4dFdpZHRoID0gcmVxdWlyZSgndGV4dC13aWR0aCcpO1xyXG5cclxuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcy5qcycpO1xyXG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpO1xyXG5cclxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSB7XHJcblxyXG4gIG11bHRpSW1nQ2xvbmVNYXJrZXIgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcbiAgICBjb25zdCBjbG9uZVN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpXHJcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcclxuXHJcbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XHJcbiAgfSxcclxuXHJcbiAgbXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdUluZm8sIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdUluZm8ubGFiZWwudGV4dDtcclxuICAgIGNvbnN0IHVpbmZvUmVjdFN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxyXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXHJcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcclxuXHJcblxyXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcclxuICAgIC5zZXQoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplfXB4YClcclxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxyXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XHJcblxyXG4gICAgY29uc3QgdUluZm9XaWR0aCA9IHRleHRXaWR0aCh0ZXh0LCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDU7XHJcblxyXG4gICAgY29uc3QgdW5pdE9mSW5mb3JtYXRpb25TdmcgPVxyXG4gICAgYFxyXG4gICAgICAke2Jhc2VTaGFwZXMucm91bmRSZWN0YW5nbGUoeCwgeSwgdUluZm9XaWR0aCwgaGVpZ2h0LCB1aW5mb1JlY3RTdHlsZSl9XHJcbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHRleHQsIHggKyAodUluZm9XaWR0aCAvIDIpLCB5ICsgKCBoZWlnaHQgLyAyKSwgIHRleHRTdHlsZSl9XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiB1bml0T2ZJbmZvcm1hdGlvblN2ZztcclxuICB9LFxyXG5cclxuICBtdWx0aUltZ1N0YXRlVmFyICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGF0ZVZhciwgYm9yZGVyV2lkdGg9MywgZm9udFNpemU9MTQpIHtcclxuXHJcbiAgICBjb25zdCBzdGF0ZVZhclN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxyXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXHJcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxyXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxyXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXHJcbiAgICAuc2V0KCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcclxuXHJcbiAgICBjb25zdCB0dyA9IHRleHRXaWR0aChzYmduRGF0YS5zdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplfSkgKyAxMDtcclxuICAgIGNvbnN0IHcgPSBNYXRoLm1heCh0dywgMzApO1xyXG4gICAgY29uc3Qgc3RhdGV2YXJpYWJsZVN2ZyA9XHJcbiAgICBgXHJcbiAgICAgICR7YmFzZVNoYXBlcy5zdGFkaXVtKHgsIHksIHcsIGhlaWdodCwgc3RhdGVWYXJTdHlsZSl9XHJcbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB4ICsgKCB3IC8gMiApLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKX1cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XHJcbiAgfSxcclxuXHJcbiAgY2xvbmVNYXJrZXIgKG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgc2hhcGVGbiwgc2hhcGVGbkFyZ3MpIHtcclxuICAgIGNvbnN0IGNsaXBJZCA9ICdjbG9uZW1hcmtlcic7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXHJcbiAgICAuc2V0KCdjbGlwLXBhdGgnLCBgdXJsKCMke2NsaXBJZH0pYClcclxuICAgIC5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID1cclxuICAgIGBcclxuICAgICAgJHtiYXNlU2hhcGVzLmNsaXBQYXRoKGNsaXBJZCwgYmFzZVNoYXBlcy5yZWN0YW5nbGUsIFswLCAzICogbm9kZUhlaWdodCAvIDQsIG5vZGVXaWR0aCwgbm9kZUhlaWdodCAvIDQsIG5ldyBNYXAoKV0pfVxyXG4gICAgICAke3NoYXBlRm4oLi4uc2hhcGVGbkFyZ3MsIGNsb25lTWFya2VyU3R5bGUpfVxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gY2xvbmVNYXJrZXJTdmc7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhdXhpbGlhcnlJdGVtcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9hdXhpbGlhcnlJdGVtcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvYXV4aWxpYXJ5SXRlbXMuanMiLCJsZXQgc2JnblN0eWxlU2hlZXQgPSByZXF1aXJlKCcuL3NiZ25TdHlsZS8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY3l0b3NjYXBlKXtcclxuICByZXR1cm4gc2JnblN0eWxlU2hlZXQoY3l0b3NjYXBlKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2luZGV4LmpzIiwiY29uc3QgZWxlbWVudFN0eWxlID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XHJcbmNvbnN0IHNiZ25zdmcgPSByZXF1aXJlKCcuL2dseXBoJyk7XHJcblxyXG5jb25zdCBzYmduU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChjeXRvc2NhcGUpIHtcclxuXHJcbiAgcmV0dXJuIGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcclxuICAgICAgICAvLyBnZW5lcmFsIG5vZGUgc3R5bGVcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGUnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3NoYXBlJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduU2hhcGUobm9kZSksXHJcbiAgICAgICAgICAnY29udGVudCc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuc2JnbkNvbnRlbnQobm9kZSksXHJcbiAgICAgICAgICAnZm9udC1zaXplJzogMjAsXHJcbiAgICAgICAgICAnd2lkdGgnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLndpZHRoKG5vZGUpLFxyXG4gICAgICAgICAgJ2hlaWdodCc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuaGVpZ2h0KG5vZGUpLFxyXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXHJcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcclxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAxLjUsXHJcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Y2ZjZmNicsXHJcbiAgICAgICAgICAndGV4dC1vcGFjaXR5JzogMSxcclxuICAgICAgICAgICdvcGFjaXR5JzogMSxcclxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnd2hpdGUnLFxyXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1vcGFjaXR5JzogMSxcclxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtd2lkdGgnOiAwLjc1XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6c2VsZWN0ZWQnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyMwMDAnLFxyXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICcjMDAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlOmFjdGl2ZScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICdvdmVybGF5LXBhZGRpbmcnOiAnMTQnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzYmduIHNwZWNpZmljIHN0eWxpbmcgKGF1eGlsaWFyeSBpdGVtcywgY2xvbmVtYXJrZXIsIGV0Yy4pXHJcbiAgICAgICAgLnNlbGVjdG9yKGBcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJ1bnNwZWNpZmllZCBlbnRpdHlcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsXCJdLCBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGVcIl0sIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlXCJdLCBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGVydHVyYmluZyBhZ2VudFwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwaGVub3R5cGVcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleFwiXSwgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl0sIG5vZGVbY2xhc3M9XCJjb21wYXJ0bWVudFwiXVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdJbWFnZSxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1dpZHRoLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NYLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NZLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ZpdCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnQ2xpcCxcclxuICAgICAgICAgICdwYWRkaW5nJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5wYWRkaW5nLFxyXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYm9yZGVyV2lkdGhcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuc2VsZWN0b3IoYFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cclxuICAgICAgICBgKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2dob3N0JzogJ3llcycsXHJcbiAgICAgICAgICAnZ2hvc3Qtb3BhY2l0eSc6IDFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuc2VsZWN0b3IoYFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl1cclxuICAgICAgICBgKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogMTIsXHJcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxMlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zZWxlY3RvcihgXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdXHJcbiAgICAgICAgYClcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteCc6IDUsXHJcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiA1XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnNlbGVjdG9yKGBcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdXHJcbiAgICAgICAgYClcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteCc6IDE2LFxyXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogMTZcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBjb21wb3VuZCBub2RlIHNwZWNpZmljIHN0eWxlXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiY29tcGxleFwiXSwgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl0sIG5vZGVbY2xhc3M9XCJjb21wYXJ0bWVudFwiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnY29tcG91bmQtc2l6aW5nLXdydC1sYWJlbHMnOiAnZXhjbHVkZScsXHJcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnYm90dG9tJyxcclxuICAgICAgICAgICd0ZXh0LWhhbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3Mgbm9kZSBzcGVjaWZpYyBzdHlsZVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImFzc29jaWF0aW9uXCJdLCBub2RlW2NsYXNzPVwiZGlzc29jaWF0aW9uXCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAxXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNkI2QjZCJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXHJcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwic291cmNlIGFuZCBzaW5rXCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6ICdub25lJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6ICdub25lJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXHJcbiAgICAgICAgICAnc2hhcGUtcG9seWdvbi1wb2ludHMnOiAnLTAuODYsIDAuNSwgLTAuNzUsIDAuNjUsIC0xLCAwLjk1LCAtMC45NSwgMSwgLTAuNjUsIDAuNzUsIC0wLjUsIDAuODYsIDAsIDEsIDAuNSwgMC44NiwgMC43MSwgMC43MSwgMC44NiwgMC41LCAxLCAwLCAwLjg2LCAtMC41LCAwLjc1LCAtMC42NSwgMSwgLTAuOTUsIDAuOTUsIC0xLCAwLjY1LCAtMC43NSwgMC41LCAtMC44NiwgMCwgLTEsIC0wLjUsIC0wLjg2LCAtMC43MSwgLTAuNzEsIC0wLjg2LCAtMC41LCAtMSwgMCcsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcclxuICAgICAgICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1oZWlnaHQnOiAnMTAwJScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBlZGdlIHN0eWxpbmdcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2Fycm93LXNjYWxlJzogMS43NSxcclxuICAgICAgICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxyXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnIzU1NScsXHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnaG9sbG93JyxcclxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxyXG4gICAgICAgICAgJ3dpZHRoJzogMS41LFxyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjNTU1JyxcclxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnIzU1NScsXHJcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnIzU1NScsXHJcbiAgICAgICAgICAnY29sb3InOiAnIzU1NSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTpzZWxlY3RlZCcpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICd0ZXh0LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNkNjc2MTQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6YWN0aXZlJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAwLjcsICdvdmVybGF5LWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICc4J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NhcmRpbmFsaXR5ID4gMF0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1zaGFwZSc6ICdyZWN0YW5nbGUnLFxyXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLW9wYWNpdHknOiAnMScsXHJcbiAgICAgICAgICAndGV4dC1ib3JkZXItd2lkdGgnOiAnMScsXHJcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLWNvbG9yJzogJ3doaXRlJyxcclxuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtb3BhY2l0eSc6ICcxJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiY29uc3VtcHRpb25cIl1bY2FyZGluYWxpdHkgPiAwXSwgZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl1bY2FyZGluYWxpdHkgPiAwXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnc291cmNlLWxhYmVsJzogKGVkZ2UpID0+ICcnICsgZWRnZS5kYXRhKCdjYXJkaW5hbGl0eScpLFxyXG4gICAgICAgICAgJ3NvdXJjZS10ZXh0LW9mZnNldCc6IDEwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3NdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiAoZWRnZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25BcnJvd1NoYXBlKGVkZ2UpLFxyXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1zaGFwZSc6ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiaW5oaWJpdGlvblwiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAvLyBjb3JlXHJcbiAgICAgICAgLnNlbGVjdG9yKCdjb3JlJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdzZWxlY3Rpb24tYm94LWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ3NlbGVjdGlvbi1ib3gtb3BhY2l0eSc6ICcwLjInLCAnc2VsZWN0aW9uLWJveC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCdcclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2JnblN0eWxlU2hlZXQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvaW5kZXguanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2luZGV4LmpzIiwiY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XHJcblxyXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHJlcXVpcmUoJy4vY29udGFpbmVyTm9kZXMuanMnKTtcclxuY29uc3QgZW50aXR5UG9vbE5vZGVzID0gcmVxdWlyZSgnLi9lbnRpdHlQb29sTm9kZXMuanMnKTtcclxuY29uc3QgcHJvY2Vzc05vZGVzID0gcmVxdWlyZSgnLi9wcm9jZXNzTm9kZXMuanMnKTtcclxuXHJcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduLmpzJyk7XHJcblxyXG5jb25zdCBjYWNoZUtleUZuID0gKG5vZGUpID0+ICcnICsgSlNPTi5zdHJpbmdpZnkobm9kZS5pZCgpKTtcclxuXHJcbmNvbnN0IHNiZ25Ob2RlU2hhcGVNYXAgPSBuZXcgTWFwKClcclxuLy8gcHJvY2VzcyBub2Rlc1xyXG4uc2V0KCdkaXNzb2NpYXRpb24nLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5kaXNzb2NpYXRpb24sIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdwaGVub3R5cGUnLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5waGVub3R5cGUsIGNhY2hlS2V5Rm4pKVxyXG5cclxuLy8gZW50aXR5IHBvb2wgbm9kZXNcclxuLnNldCgnc291cmNlIGFuZCBzaW5rJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc291cmNlQW5kU2luaywgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnVuc3BlY2lmaWVkRW50aXR5LCBjYWNoZUtleUZuKSlcclxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwsIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdtYWNyb21vbGVjdWxlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubWFjcm9tb2xlY3VsZSwgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubnVjbGVpY0FjaWRGZWF0dXJlLCBjYWNoZUtleUZuKSlcclxuLnNldCgnY29tcGxleCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgsIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMucGVydHVyYmluZ0FnZW50LCBjYWNoZUtleUZuKSlcclxuXHJcbi8vIGNvbnRhaW5lciBub2Rlc1xyXG4uc2V0KCdjb21wYXJ0bWVudCcsIG1lbW9pemUoY29udGFpbmVyTm9kZXMuY29tcGFydG1lbnQsIGNhY2hlS2V5Rm4pKTtcclxuXHJcblxyXG5jb25zdCBkcmF3ID0gKG5vZGUpID0+IHtcclxuICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xyXG4gIGxldCBzaGFwZUZuID0gc2Jnbk5vZGVTaGFwZU1hcC5nZXQoc2JnbkNsYXNzKTtcclxuICBpZiAoc2hhcGVGbiA9PSBudWxsKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3NiZ25DbGFzc30gZG9lcyBub3QgaGF2ZSBhIHNoYXBlIGltcGxlbWVudGF0aW9uYCk7XHJcbiAgfVxyXG4gIHJldHVybiBzaGFwZUZuKG5vZGUpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZHJhdzogZHJhd1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XHJcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJyk7XHJcblxyXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcclxuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xyXG5cclxuY29uc3QgY29udGFpbmVyTm9kZXMgPSB7XHJcblxyXG4gIGNvbXBhcnRtZW50IChub2RlKSB7XHJcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSA2MDtcclxuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSA0MDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IHNiZ25EYXRhLmdldFVuaXRJbmZvcyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0pIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgbGluZVN2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IFtsaW5lU3ZnLCB1SW5mb1N2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJSddLFxyXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMjUlJ10sXHJcbiAgICAgIGJnUG9zWTogWycxOXB4JywgJzAlJ10sXHJcbiAgICAgIGJnRml0OiBbJ2NvbnRhaW4nLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzM4cHgnLFxyXG4gICAgICBib3JkZXJXaWR0aDogJzQnXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVyTm9kZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIHN1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRpZih0eXBlb2YgY2FudmFzLmdldENvbnRleHQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRyZXR1cm4gISFjb250ZXh0ICYmICh0eXBlb2YgY29udGV4dC5tZWFzdXJlVGV4dCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG52YXIgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oc3RyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IGV4dGVuZCh7XG5cdFx0XHRzdHlsZTogJ25vcm1hbCcsXG5cdFx0XHR2YXJpYW50OiAnbm9ybWFsJyxcblx0XHRcdHdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdGZhbWlseTogJ3NhbnMtc2VyaWYnLFxuXHRcdFx0YWxpZ246ICdzdGFydCcsXG5cdFx0XHRiYXNlbGluZTogJ2FscGhhYmV0aWMnXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHR2YXIgc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcblx0XHRpZih0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHNpemUgPSBzaXplICsgJ3B4JztcblxuXHRcdGNvbnRleHQuZm9udCA9IHV0aWwuZm9ybWF0KCclcyAlcyAlcyAlcyAlcycsXG5cdFx0XHRvcHRpb25zLnN0eWxlLFxuXHRcdFx0b3B0aW9ucy52YXJpYW50LFxuXHRcdFx0b3B0aW9ucy53ZWlnaHQsXG5cdFx0XHRzaXplLFxuXHRcdFx0b3B0aW9ucy5mYW1pbHkpO1xuXHRcdGNvbnRleHQudGV4dEFsaWduID0gb3B0aW9ucy5hbGlnbjtcblx0XHRjb250ZXh0LnRleHRCYXNlbGluZSA9IG9wdGlvbnMuYmFzZWxpbmU7XG5cblx0XHRyZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dChzdHIpLndpZHRoO1xuXHR9O1xuXG5cdHdpZHRoLnN1cHBvcnRlZCA9IHRydWU7XG5cdHJldHVybiB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydGVkKCkgPyBpbml0aWFsaXplKCkgOiAoZnVuY3Rpb24oKSB7XG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHdpZHRoLnN1cHBvcnRlZCA9IGZhbHNlO1xuXHRyZXR1cm4gd2lkdGg7XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGV4dC13aWR0aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xyXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcclxuXHJcbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xyXG5jb25zdCBnZXRVbml0SW5mb3MgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5nZXRVbml0SW5mb3M7XHJcbmNvbnN0IGdldFN0YXRlVmFycyA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmdldFN0YXRlVmFycztcclxuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XHJcblxyXG5cclxuY29uc3QgZW50aXR5UG9vbE5vZGVzID0ge1xyXG5cclxuICB1bnNwZWNpZmllZEVudGl0eSAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xyXG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcclxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdIZWlnaHQ6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxyXG4gICAgICBiZ1Bvc1k6IFsnMTAwJScsICc4cHgnLCAnMTAwJScsICc0NHB4JywgJzAlJ10sXHJcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9O1xyXG5cclxuICB9LFxyXG5cclxuICBzaW1wbGVDaGVtaWNhbCAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xyXG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdIZWlnaHQ6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzEycHgnXSxcclxuICAgICAgYmdQb3NZOiBbJzEwMCUnLCAnOHB4JywgJzEwMCUnLCAnMHB4J10sXHJcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1hY3JvbW9sZWN1bGUobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xyXG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcclxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxyXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnSGVpZ2h0OiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcclxuICAgICAgYmdQb3NZOiBbJzEwMCUnLCAnOHB4JywgJzEwMCUnLCAnNDRweCcsICcwJSddLFxyXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcclxuICAgICAgYmdDbGlwOiAnbm9kZScsXHJcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgfTsgIH0sXHJcblxyXG4gIG51Y2xlaWNBY2lkRmVhdHVyZSAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xyXG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcclxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxyXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdIZWlnaHQ6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxyXG4gICAgICBiZ1Bvc1k6IFsnMTAwJScsICc4cHgnLCAnMTAwJScsICc0NHB4JywgJzAlJ10sXHJcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXBsZXggKG5vZGUpIHtcclxuICAgIGNvbnN0IGl0ZW1XID0gNjA7XHJcbiAgICBjb25zdCBpdGVtSCA9IDI0O1xyXG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzID0gW107XHJcbiAgICBjb25zdCBiZ1dpZHRoID0gW107XHJcbiAgICBjb25zdCBiZ1Bvc1ggPSBbXTtcclxuICAgIGNvbnN0IGJnUG9zWSA9IFtdO1xyXG4gICAgY29uc3QgYmdGaXQgPSBbXTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcclxuXHJcbiAgICAvLyBvcmRlciBvZiBzdmcgaW1hZ2UgZ2VuZXJhdGlvbiBtYXR0ZXJzXHJcbiAgICBpZiAodUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgdG9wTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcclxuICAgICAgaW1hZ2VzLnB1c2godG9wTGluZVN2Zyk7XHJcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcclxuICAgICAgYmdQb3NZLnB1c2goJzExcHgnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xyXG4gICAgICBjb25zdCBib3R0b21MaW5lU3ZnID0gc3ZnU3RyKGJhc2VTaGFwZXMubGluZSgwLCAwLCBpdGVtVywgMCwgc3R5bGUpLCBpdGVtVywgaXRlbUgpO1xyXG4gICAgICBpbWFnZXMucHVzaChib3R0b21MaW5lU3ZnKTtcclxuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XHJcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XHJcbiAgICAgIGNvbnN0IGNsb25lU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgaXRlbVcsIGl0ZW1IIC0gMyksIGl0ZW1XLCBpdGVtSCk7XHJcbiAgICAgIGltYWdlcy5wdXNoKGNsb25lU3ZnKTtcclxuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XHJcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHVJbmZvc1swXSksIGl0ZW1XLCBpdGVtSCk7XHJcbiAgICAgIGltYWdlcy5wdXNoKHVJbmZvU3ZnKTtcclxuICAgICAgYmdQb3NYLnB1c2goJzI1JScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzVmFycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBpdGVtVyAtIDUsIGl0ZW1IIC0gMywgc1ZhcnNbMF0pLCBpdGVtVywgaXRlbUgpO1xyXG4gICAgICBpbWFnZXMucHVzaChzVmFyU3ZnKTtcclxuICAgICAgYmdQb3NYLnB1c2goJzg4JScpO1xyXG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IGltYWdlcyxcclxuICAgICAgYmdXaWR0aDogYmdXaWR0aCxcclxuICAgICAgYmdQb3NYOiBiZ1Bvc1gsXHJcbiAgICAgIGJnUG9zWTogYmdQb3NZLFxyXG4gICAgICBiZ0ZpdDogYmdGaXQsXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnMjJweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiA0XHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIHNvdXJjZUFuZFNpbmsgKG5vZGUpIHtcclxuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xyXG4gICAgY29uc3QgcmFkaXVzID0gKG53IC0gMikgLyAyO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2UtbGluZWNhcCcsICdzcXVhcmUnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXHJcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcclxuXHJcbiAgICBjb25zdCBzaGFwZUFyZ3MgPSBbY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzXTtcclxuXHJcbiAgICBjb25zdCBzb3VyY2VBbmRTaW5rU3ZnID1cclxuICAgIGBcclxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cclxuICAgICAgJHtoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLmNsb25lTWFya2VyKG53LCBuaCwgYmFzZVNoYXBlcy5jaXJjbGUsIHNoYXBlQXJncykgOiAnJ31cclxuICAgICAgJHtiYXNlU2hhcGVzLmxpbmUoMCwgbmgsIG53LCAwLCBzdHlsZU1hcCl9XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiBzdmdTdHIoc291cmNlQW5kU2lua1N2ZywgbncsIG5oLCAwLCAwLCBudywgbmgpO1xyXG4gIH0sXHJcblxyXG4gIHBlcnR1cmJpbmdBZ2VudCAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xyXG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXHJcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdIZWlnaHQ6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnXSxcclxuICAgICAgYmdQb3NZOiBbJzEwMCUnLCAnOHB4JywgJzEwMCUnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRpdHlQb29sTm9kZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJjb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XHJcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xyXG5cclxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XHJcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XHJcblxyXG5jb25zdCBlbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xyXG5cclxuY29uc3QgcHJvY2Vzc05vZGVzID0ge1xyXG5cclxuICBkaXNzb2NpYXRpb24gKG5vZGUpIHtcclxuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xyXG4gICAgY29uc3Qgb3V0ZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMjtcclxuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDM7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcyJylcclxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0IGRpc3NvY2lhdGlvblN2ZyA9XHJcbiAgICBgXHJcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgb3V0ZXJSYWRpdXMsIHN0eWxlTWFwKX1cclxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBpbm5lclJhZGl1cywgc3R5bGVNYXApfVxyXG4gICAgYDtcclxuICAgIHJldHVybiBzdmdTdHIoZGlzc29jaWF0aW9uU3ZnLCBudywgbmgpO1xyXG4gIH0sXHJcblxyXG4gIHBoZW5vdHlwZSAobm9kZSkge1xyXG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIGNsb25lTWFya2VyU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnXSxcclxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJ10sXHJcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzU2cHgnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc05vZGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL3Byb2Nlc3NOb2Rlcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=