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

      /***/
    },
    /* 5 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE4YzVmMDQ5MDQwMTIzMDZiMzEiLCJ3ZWJwYWNrOi8vLy4vZGVtby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDg2M2NjYWEzNjY0MTRkMTk2OGJkIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9iYXNlU2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsic2JnblN0eWxlc2hlZXQiLCJyZXF1aXJlIiwiY3l0b3NjYXBlIiwid2luZG93IiwiY3kiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbWVudHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGF5b3V0IiwibmFtZSIsInN0eWxlIiwic2JnbkRhdGFIYW5kbGVyIiwibm9kZSIsImVsZW1lbnQiLCJ2YXJpYWJsZSIsInN0YXRlVmFyIiwidmFsdWUiLCJtb2R1bGUiLCJzdHlsZU1hcDJTdHIiLCJzIiwiayIsInYiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInBhcnNlciIsInN2Z1RleHQiLCJzdmdTdHIiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYmFzZVJlY3RhbmdsZSIsIngiLCJ5IiwiYmFzZVNoYXBlcyIsImJhc2VTaGFwZUZuIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwic2JnbkRhdGEiLCJzYmduU3R5bGUiLCJ3IiwiaCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnbkNsYXNzIiwiY29udGVudCIsImRpbSIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwiY2xvbmVTdHlsZSIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJ0ZXh0IiwidUluZm8iLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJzdGF0ZVZhclN0eWxlIiwidHciLCJzdGF0ZXZhcmlhYmxlU3ZnIiwiY2xpcElkIiwiY2xvbmVNYXJrZXJTdHlsZSIsImNsb25lTWFya2VyU3ZnIiwic2hhcGVGbiIsInNiZ25TdHlsZVNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJzYmduc3ZnIiwiZWRnZSIsIm1lbW9pemUiLCJjb250YWluZXJOb2RlcyIsImVudGl0eVBvb2xOb2RlcyIsInByb2Nlc3NOb2RlcyIsImNhY2hlS2V5Rm4iLCJKU09OIiwic2Jnbk5vZGVTaGFwZU1hcCIsImRyYXciLCJhdXhJdGVtV2lkdGgiLCJhdXhJdGVtSGVpZ2h0IiwidUluZm9zIiwidUluZm9TdmciLCJsaW5lU3ZnIiwiYmdJbWFnZSIsImJnV2lkdGgiLCJiZ1Bvc1giLCJiZ1Bvc1kiLCJiZ0ZpdCIsImJnQ2xpcCIsInBhZGRpbmciLCJnZXRVbml0SW5mb3MiLCJnZXRTdGF0ZVZhcnMiLCJoYXNDbG9uZW1hcmtlciIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsImJvdHRvbUxpbmVTdmciLCJjbG9uZVN2ZyIsImNlbnRlclgiLCJudyIsImNlbnRlclkiLCJuaCIsInJhZGl1cyIsInN0eWxlTWFwIiwic2hhcGVBcmdzIiwic291cmNlQW5kU2lua1N2ZyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJkaXNzb2NpYXRpb25TdmciXSwibWFwcGluZ3MiOiI7UUFB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Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUEsY0FDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0csV0FGSCxNQUVHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGNBQ0EscUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsMkNBRkE7QUFHQTtBQUhBO0FBS0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxrQ0FDQSxnREFEQSxHQUVBLFFBRkE7QUFHQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSxpR0FDQSxxQkFEQSxHQUVBLGNBRkE7QUFHQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssYUFGTCxDQUVLO0FBQ0w7QUFDQTtBQUNLLGFBRkwsQ0FFSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZ0JBQ0EscURBREE7QUFBQSxnQkFFQSxzQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVhBO0FBWUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7T0FucUJBLEUsSUFBQSxDLE9BQUEsRSxzQkFBQTs7Ozs7Ozs7O0FDQUEsVUFBSWtELGlCQUFpQnZFLG9CQUFyQixDQUFxQkEsQ0FBckI7O0FBRUEsVUFBSXdFLGlCQUFKOztBQUdBbkQsdUJBQWlCLHFCQUFtQjtBQUNsQyxlQUFPa0QsZUFBUCxTQUFPQSxDQUFQO0FBREZsRDs7Ozs7Ozs7O0FDTEEsVUFBTTBCLGVBQWUvQyxvQkFBckIsQ0FBcUJBLENBQXJCO0FBQ0EsVUFBTXlFLFVBQVV6RSxvQkFBaEIsQ0FBZ0JBLENBQWhCOztBQUVBLFVBQU11RSxpQkFBaUIsU0FBakJBLGNBQWlCLFlBQXFCOztBQUUxQyxlQUFPO0FBQ0Q7QUFEQyw4QkFHSTtBQUNILG1CQUFTO0FBQUEsbUJBQVV4Qix1QkFBVixJQUFVQSxDQUFWO0FBRE47QUFFSCxxQkFBVztBQUFBLG1CQUFVQSx5QkFBVixJQUFVQSxDQUFWO0FBRlI7QUFHSCx1QkFIRztBQUlILG1CQUFTO0FBQUEsbUJBQVVBLG1CQUFWLElBQVVBLENBQVY7QUFKTjtBQUtILG9CQUFVO0FBQUEsbUJBQVVBLG9CQUFWLElBQVVBLENBQVY7QUFMUDtBQU1ILHlCQU5HO0FBT0gseUJBUEc7QUFRSCwwQkFSRztBQVNILDBCQVRHO0FBVUgsOEJBVkc7QUFXSCwwQkFYRztBQVlILHFCQVpHO0FBYUgsZ0NBYkc7QUFjSCxrQ0FkRztBQWVILGdDQUFzQjtBQWZuQixTQUhKLGdDQXFCSTtBQUNILDhCQURHO0FBRUgsZ0NBRkc7QUFHSCxnQ0FBc0I7QUFIbkIsU0FyQkosOEJBMkJJO0FBQ0gsMkJBREc7QUFFSCw2QkFBbUI7QUFGaEIsU0EzQko7O0FBZ0NEO0FBaENDLHdmQTBDSTtBQUNILDhCQUFvQjtBQUFBLG1CQUFVMEIsbUJBQVY7QUFEakI7QUFFSCw4QkFBb0I7QUFBQSxtQkFBVUEsbUJBQVY7QUFGakI7QUFHSCxtQ0FBeUI7QUFBQSxtQkFBVUEsbUJBQVY7QUFIdEI7QUFJSCxtQ0FBeUI7QUFBQSxtQkFBVUEsbUJBQVY7QUFKdEI7QUFLSCw0QkFBa0I7QUFBQSxtQkFBVUEsbUJBQVY7QUFMZjtBQU1ILDZCQUFtQjtBQUFBLG1CQUFVQSxtQkFBVjtBQU5oQjtBQU9ILHFCQUFXO0FBQUEsbUJBQVVBLG1CQUFWO0FBUFI7QUFRSCwwQkFBZ0I7QUFBQSxtQkFBVUEsbUJBQVY7QUFBQTtBQVJiLFNBMUNKLG1PQTJESTtBQUNILG1CQURHO0FBRUgsMkJBQWlCO0FBRmQsU0EzREoscUlBb0VJO0FBQ0gsNEJBREc7QUFFSCw0QkFBa0I7QUFGZixTQXBFSiwrRUE0RUk7QUFDSCw0QkFERztBQUVILDRCQUFrQjtBQUZmLFNBNUVKLHVFQW9GSTtBQUNILDRCQURHO0FBRUgsNEJBQWtCO0FBRmYsU0FwRko7O0FBeUZEO0FBekZDLDBHQTJGSTtBQUNILHdDQURHO0FBRUgseUJBRkc7QUFHSCx5QkFBZTtBQUhaLFNBM0ZKOztBQWlHRDtBQWpHQywrRUFtR0k7QUFDSCxnQ0FBc0I7QUFEbkIsU0FuR0osNENBdUdJO0FBQ0gsOEJBQW9CO0FBRGpCLFNBdkdKOztBQTJHRDtBQUNBO0FBNUdDLHVEQThHSTtBQUNILDhCQUFvQjtBQUFBLG1CQUFVQSxhQUFWLElBQVVBLENBQVY7QUFEakI7QUFFSCw0QkFGRztBQUdILDhCQUhHO0FBSUgsK0JBSkc7QUFLSCw2QkFMRztBQU1ILCtCQU5HO0FBT0gsMEJBUEc7QUFRSCxrQ0FBd0I7QUFSckIsU0E5R0o7O0FBeUhEO0FBQ0E7QUExSEMsb0RBNEhJO0FBQ0gsOEJBQW9CO0FBQUEsbUJBQVVBLGFBQVYsSUFBVUEsQ0FBVjtBQURqQjtBQUVILDRCQUZHO0FBR0gsOEJBSEc7QUFJSCwrQkFKRztBQUtILDZCQUxHO0FBTUgsK0JBTkc7QUFPSCwwQkFBZ0I7QUFQYixTQTVISjs7QUFzSUQ7QUF0SUMsOEJBd0lJO0FBQ0gseUJBREc7QUFFSCx5QkFGRztBQUdILHdCQUhHO0FBSUgsK0JBSkc7QUFLSCwrQkFMRztBQU1ILG1CQU5HO0FBT0gsZ0NBUEc7QUFRSCxnQ0FSRztBQVNILCtCQVRHO0FBVUgsbUJBQVM7QUFWTixTQXhJSixnQ0FxSkk7QUFDSCxtQkFERztBQUVILHdCQUZHO0FBR0gsK0JBSEc7QUFJSCxnQ0FKRztBQUtILGdDQUFzQjtBQUxuQixTQXJKSiw4QkE2Skk7QUFDSCxnQ0FERyxLQUN3QixpQkFEeEI7QUFFSCw2QkFBbUI7QUFGaEIsU0E3Skosd0NBa0tJO0FBQ0gsbUNBREc7QUFFSCxpQ0FGRztBQUdILCtCQUhHO0FBSUgsbUNBSkc7QUFLSCxxQ0FBMkI7QUFMeEIsU0FsS0osd0dBMEtJO0FBQ0gsMEJBQWdCO0FBQUEsbUJBQVUsS0FBS0MsVUFBZixhQUFlQSxDQUFmO0FBRGI7QUFFSCxnQ0FBc0I7QUFGbkIsU0ExS0osOEJBK0tJO0FBQ0gsZ0NBQXNCO0FBQUEsbUJBQVUzQiw0QkFBVixJQUFVQSxDQUFWO0FBRG5CO0FBRUgsZ0NBQXNCO0FBRm5CLFNBL0tKLDJDQW9MSTtBQUNILCtCQUFxQjtBQURsQixTQXBMSiwyQ0F3TEk7QUFDSCwrQkFBcUI7QUFEbEIsU0F4TEo7O0FBNkxEO0FBN0xDLDhCQStMSTtBQUNILGlDQURHO0FBRUgsbUNBRkcsT0FFNkIsOEJBQThCO0FBRjNELFNBL0xKLENBQVA7QUFGRjs7QUF1TUExQjs7Ozs7Ozs7O0FDMU1BLFVBQU1zRCxVQUFVM0Usb0JBQWhCLENBQWdCQSxDQUFoQjs7QUFFQSxVQUFNNEUsaUJBQWlCNUUsb0JBQXZCLEVBQXVCQSxDQUF2QjtBQUNBLFVBQU02RSxrQkFBa0I3RSxvQkFBeEIsRUFBd0JBLENBQXhCO0FBQ0EsVUFBTThFLGVBQWU5RSxvQkFBckIsRUFBcUJBLENBQXJCOztBQUVBLFVBQU15QyxXQUFXekMsb0JBQWpCLENBQWlCQSxDQUFqQjs7QUFFQSxVQUFNK0UsYUFBYSxTQUFiQSxVQUFhO0FBQUEsZUFBVSxLQUFLQyxlQUFlaEUsS0FBOUIsRUFBOEJBLEVBQWZnRSxDQUFmO0FBQW5COztBQUVBLFVBQU1DLG1CQUFtQjtBQUN6QjtBQUR5QiwyQkFFSk4sUUFBUUcsYUFBUkgsY0FGSSxVQUVKQSxDQUZJLG1CQUdQQSxRQUFRRyxhQUFSSCxXQUhPLFVBR1BBLENBSE87O0FBS3pCO0FBTHlCLDhCQU1EQSxRQUFRRSxnQkFBUkYsZUFOQyxVQU1EQSxDQU5DLDRCQU9FQSxRQUFRRSxnQkFBUkYsbUJBUEYsVUFPRUEsQ0FQRix5QkFRREEsUUFBUUUsZ0JBQVJGLGdCQVJDLFVBUURBLENBUkMsdUJBU0hBLFFBQVFFLGdCQUFSRixlQVRHLFVBU0hBLENBVEcsOEJBVUlBLFFBQVFFLGdCQUFSRixvQkFWSixVQVVJQSxDQVZKLGlCQVdUQSxRQUFRRSxnQkFBUkYsU0FYUyxVQVdUQSxDQVhTLDBCQVlBQSxRQUFRRSxnQkFBUkYsaUJBWkEsVUFZQUEsQ0FaQTs7QUFjekI7QUFkeUIsMEJBZUxBLFFBQVFDLGVBQVJELGFBZnBCLFVBZW9CQSxDQWZLLENBQXpCOztBQWtCQSxVQUFNTyxPQUFPLFNBQVBBLElBQU8sT0FBVTtBQUNyQixZQUFNbEMsWUFBWVAsOENBQWxCLEVBQWtCQSxDQUFsQjtBQUNBLFlBQUk2QixVQUFVVyxxQkFBZCxTQUFjQSxDQUFkO0FBQ0EsWUFBSVgsV0FBSixNQUFxQjtBQUNuQixnQkFBTSwwQkFBTix1Q0FBTSxDQUFOO0FBQ0Q7QUFDRCxlQUFPQSxRQUFQLElBQU9BLENBQVA7QUFORjs7QUFTQWpELHVCQUFpQjtBQUNmNkQsY0FBTUE7QUFEUyxPQUFqQjdEOzs7Ozs7O0FDckNBOztBQUVBO0FBQ0E7QUFDQTtBQUNDLE9BRkQ7O0FBSUE7QUFDQTtBQUNBO0FBQ0MsT0FIRCxDQUdDO0FBQ0Q7QUFDQSwwRkFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDcEJBLFVBQU1VLFNBQVMvQix1QkFBZjtBQUNBLFVBQU15QyxXQUFXekMsb0JBQWpCLENBQWlCQSxDQUFqQjtBQUNBLFVBQU0yRSxVQUFVM0Usb0JBQWhCLENBQWdCQSxDQUFoQjs7QUFFQSxVQUFNb0QsaUJBQWlCcEQsb0JBQXZCLENBQXVCQSxDQUF2QjtBQUNBLFVBQU1xQyxhQUFhckMsb0JBQW5CLENBQW1CQSxDQUFuQjs7QUFFQSxVQUFNNEUsaUJBQWlCO0FBQUEsZ0RBRUY7QUFDakIsY0FBTU8sZUFBTjtBQUNBLGNBQU1DLGdCQUFOO0FBQ0EsY0FBTUMsU0FBUzVDLHNCQUFmLElBQWVBLENBQWY7O0FBRUEsY0FBTTNCLFFBQVEsdURBQWQsR0FBYyxDQUFkOztBQUlBLGNBQU13RSxXQUFXdkQsT0FDZnNELG9CQUFvQmpDLCtDQUErQytCLGVBQS9DL0IsR0FBaUVnQyxnQkFBakVoQyxHQUFvRmlDLE9BQXhHQSxDQUF3R0EsQ0FBcEZqQyxDQUFwQmlDLEdBRGV0RCxrQkFBakIsYUFBaUJBLENBQWpCOztBQUtBLGNBQUl3RCxVQUFVeEQsT0FDWnNELG9CQUFvQmhELHVDQUFwQmdELEtBQW9CaEQsQ0FBcEJnRCxHQURZdEQsa0JBQWQsYUFBY0EsQ0FBZDs7QUFLQSxpQkFBTztBQUNMeUQscUJBQVMsVUFESixRQUNJLENBREo7QUFFTEMscUJBQVMsQ0FGSixNQUVJLENBRko7QUFHTEMsb0JBQVEsT0FISCxLQUdHLENBSEg7QUFJTEMsb0JBQVEsU0FKSCxJQUlHLENBSkg7QUFLTEMsbUJBQU8sWUFMRixNQUtFLENBTEY7QUFNTEMsb0JBTks7QUFPTEMscUJBUEs7QUFRTHhDLHlCQUFhO0FBUlIsV0FBUDtBQVVEO0FBL0JvQixPQUF2Qjs7QUFrQ0FqQzs7Ozs7OztBQ3pDQSxpQkFBVyxvQkFBUSxFQUFSLENBQVg7QUFDQSxtQkFBYSxvQkFBUSxFQUFSLENBQWI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQVJBOztBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLDRCQUhBO0FBSUEsMEJBSkE7QUFLQSxnQ0FMQTtBQU1BLDBCQU5BO0FBT0E7QUFQQSxhQVFHLE9BUkg7O0FBVUE7QUFDQTs7QUFFQSx1REFDQSxhQURBLEVBRUEsZUFGQSxFQUdBLGNBSEEsRUFJQSxJQUpBLEVBS0EsY0FMQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQSxTQXhCQTs7QUEwQkE7QUFDQTtBQUNBLE9BaENBOztBQWtDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQyxPQVBEOzs7Ozs7O0FDL0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUIsZUFBbkIsRUFBb0MsR0FBcEMsRUFBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFtQixvQkFBbkIsRUFBeUMsR0FBekMsRUFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNTLGlCQUZULENBRVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUcsV0FmSDtBQWdCQSxnQ0FBdUIsT0FBdkIsRUFBZ0MsYUFBaEMsRUFBZ0M7QUFDaEM7QUFDQTtBQUNLLGFBRkwsTUFFSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FwQ0E7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxlQUZQLE1BRU87QUFDUDtBQUNPLGVBRkEsTUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBNUJBOztBQStCQTtBQUNBO0FBQ0E7QUFDQSx5Q0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFIQTtBQUlLLGFBTkwsTUFNSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FoQkE7O0FBbUJBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxXQUhILE1BR0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsMkJBRkE7QUFHQSw4QkFIQTtBQUlBLDRCQUpBO0FBS0EsMkJBTEE7QUFNQSwwQkFOQTtBQU9BLDJCQVBBO0FBUUEsMEJBUkE7QUFTQSwwQkFUQTtBQVVBLDJCQVZBO0FBV0EsNkJBWEE7QUFZQSx5QkFaQTtBQWFBO0FBYkE7O0FBZ0JBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDRCQUZBO0FBR0EsNkJBSEE7QUFJQSw2QkFKQTtBQUtBLHdCQUxBO0FBTUEsMkJBTkE7QUFPQSwyQkFQQTtBQVFBO0FBQ0E7QUFUQTs7QUFhQTtBQUNBOztBQUVBO0FBQ0Esb0VBQ0EsT0FEQSxHQUNBLHdCQURBLEdBQ0EsR0FEQTtBQUVHLFdBSEgsTUFHRztBQUNIO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0csV0FGSDs7QUFJQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1DQUNBLEtBREEsSUFFQSx5QkFGQTtBQUdBO0FBQ0EsMkNBSkE7QUFLQTtBQUNBLHVFQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FDQSxnRUFEQSxHQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUEsNkJBQTRDLEdBQTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0ssYUFGTCxNQUVLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNHLFdBRkgsTUFFRztBQUNIO0FBQ0E7QUFDSyxhQUZMO0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFHQTtBQUNBLGtDQUNBO0FBQ0E7QUFDQSw0RUFDQSxPQURBLENBQ0EsSUFEQSxFQUNBLEtBREEsRUFFQSxPQUZBLENBRUEsTUFGQSxFQUVBLEdBRkEsSUFFQSxJQUZBO0FBR0E7QUFDQTtBQUNBLCtCQUNBO0FBQ0EsZ0NBQ0E7QUFDQTtBQUNBLDZCQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQSw0Q0FBbUMsS0FBbkMsRUFBMEMsR0FBMUMsRUFBMEM7QUFDMUM7QUFDQSxnRkFDQSxTQURBLEVBQ0EsSUFEQTtBQUVLLGFBSEwsTUFHSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFDQSxHQURBLEVBQ0EsSUFEQTtBQUVBO0FBQ0csV0FMSDtBQU1BO0FBQ0E7O0FBR0E7QUFDQTtBQUNBLGtFQUF5RCxpQkFBekQ7QUFDQTtBQUNBO0FBQ0E7QUFDSyxhQUZMLE1BRUs7QUFDTDtBQUNBO0FBQ0csV0FOSCxNQU1HO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGVBRlAsTUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNXLG1CQUZYLEVBRVcsSUFGWCxDQUVXLElBRlgsRUFFVyxNQUZYLENBRVcsQ0FGWDtBQUdTLGlCQUpULE1BSVM7QUFDVDtBQUNBO0FBQ1csbUJBRlgsRUFFVyxJQUZYLENBRVcsSUFGWDtBQUdBO0FBQ0E7QUFDSyxhQWpCTCxNQWlCSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxhQUhMLE1BR0s7QUFDTCwrQ0FDQSxPQURBLENBQ0EsTUFEQSxFQUNBLEdBREEsRUFFQSxPQUZBLENBRUEsVUFGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxXQUpILEVBSUcsQ0FKSDs7QUFNQTtBQUNBLGdDQUNBLCtCQURBLElBRUEsR0FGQSxHQUdBLG9CQUhBLEdBSUEsR0FKQSxHQUtBLFNBTEE7QUFNQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUNBLDREQURBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUNBLHdCQURBLElBRUEsdUJBRkEsSUFHQSx1QkFIQSxJQUlBLHNFQUpBLElBSUE7QUFDQSxvQ0FMQTtBQU1BO0FBQ0E7O0FBRUEsMkJBQW1CLG9CQUFRLEVBQVIsQ0FBbkI7O0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFHQSxxRkFDQSxLQURBLEVBQ0EsS0FEQSxFQUNBLEtBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EseUNBQ0EsbUJBREEsRUFFQSxtQkFGQSxFQUVBLElBRkEsQ0FFQSxHQUZBO0FBR0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUZBOztBQUtBOzs7Ozs7Ozs7Ozs7O0FBYUEsMkJBQW1CLG9CQUFRLEVBQVIsQ0FBbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBVkE7O0FBWUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOENBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREEsRUFDQSxpQkFEQSxFQUNBLGVBREEsRUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssYUFITDs7QUFLQTtBQUNBLDRCQUFtQixvQkFBbkIsRUFBeUMsR0FBekMsRUFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGVBRlAsTUFFTztBQUNQO0FBQ0E7QUFDSyxhQU5MOztBQVFBO0FBQ0E7QUFDSyxhQUZMLENBRUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFEQSxFQUNBLGlCQURBLEVBQ0EsZUFEQSxFQUNBO0FBREE7QUFHQSx5Q0FDQSxFQURBLEVBRUEsbUNBRkE7QUFJQSxTQXBEQTs7QUFzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBbUIsb0JBQW5CLEVBQXlDLEdBQXpDLEVBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0E7QUFDQTtBQUNBLHVDQUNBLElBREEsQ0FDQTtBQUEyQjtBQUFrQyxhQUQ3RCxFQUVBO0FBQTJCO0FBQW1ELGFBRjlFO0FBR0E7O0FBRUE7QUFDQSxpREFDQSxtQ0FEQTtBQUVBO0FBQ0E7QUFDQTs7O09BOXJCQSxFLElBQUEsQyxPQUFBLEUsdUJBQUE7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUyxXQUZULE1BRVM7QUFDVDtBQUNBO0FBQ0ssU0FOTCxDQU1LO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNTLFdBRlQsTUFFUztBQUNUO0FBQ0E7QUFDSyxTQU5MLENBTUs7QUFDTDtBQUNBO0FBQ0MsT0FuQkQ7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxTQUhMLENBR0s7QUFDTDtBQUNBO0FBQ0E7QUFDUyxXQUhULENBR1M7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxTQUhMLENBR0s7QUFDTDtBQUNBO0FBQ0E7QUFDUyxXQUhULENBR1M7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNLLFNBRkwsTUFFSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQXVCLG9CQUF2QixFQUE2QyxHQUE3QyxFQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWEE7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQixDQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBcUM7QUFBQSxPQUFyQzs7QUFFQTtBQUNBO0FBQ0EsT0FGQTs7QUFJQTtBQUEyQjtBQUFBLE9BQTNCO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUE0QjtBQUFVLE9BQXRDOzs7Ozs7O0FDdkxBO0FBQ0EsZ0dBQ0EsOEJBREEsSUFFQSw4QkFGQSxJQUdBLG1DQUhBO09BREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLCtCQUZBO0FBR0EsNEJBSEE7QUFJQTtBQUpBO0FBREE7QUFRQSxTQVZBO0FBV0MsT0FiRCxNQWFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQU5BO0FBT0E7Ozs7Ozs7QUN0QkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3QkFBbUIsb0JBQW5CLEVBQXlDLEdBQXpDLEVBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNsQkEsVUFBTWdCLGFBQWFyQyxvQkFBbkIsQ0FBbUJBLENBQW5CO0FBQ0EsVUFBTW9ELGlCQUFpQnBELG9CQUF2QixDQUF1QkEsQ0FBdkI7O0FBRUEsVUFBTStCLFNBQVMvQix1QkFBZjtBQUNBLFVBQU0rRixlQUFlL0YsdUJBQXJCO0FBQ0EsVUFBTWdHLGVBQWVoRyx1QkFBckI7QUFDQSxVQUFNaUcsaUJBQWlCakcsdUJBQXZCOztBQUVBLFVBQU1pQixVQUFVakIsb0JBQWhCLENBQWdCQSxDQUFoQjs7QUFHQSxVQUFNNkUsa0JBQWtCO0FBQUEsNERBRUc7QUFDdkIsY0FBTU0sZUFBTjtBQUNBLGNBQU1DLGdCQUFOO0FBQ0EsY0FBTTlCLGNBQU47QUFDQSxjQUFNQyxXQUFOO0FBQ0EsY0FBTThCLFNBQVNVLGFBQWYsSUFBZUEsQ0FBZjtBQUNBLGNBQU1HLFFBQVFGLGFBQWQsSUFBY0EsQ0FBZDs7QUFFQSxjQUFNbEYsUUFBUSx1REFBZCxHQUFjLENBQWQ7O0FBSUEsY0FBTXVELGlCQUFpQnRDLE9BQ3JCa0UsdUJBQXVCN0MsdURBQXVEZ0MsZ0JBQTlFYSxDQUF1QjdDLENBQXZCNkMsR0FEcUJsRSxrQkFBdkIsYUFBdUJBLENBQXZCOztBQUtBLGNBQU11RCxXQUFXdkQsT0FDZnNELG9CQUFvQmpDLCtDQUErQytCLGVBQS9DL0IsR0FBaUVnQyxnQkFBakVoQyxHQUFvRmlDLE9BQXBGakMsQ0FBb0ZpQyxDQUFwRmpDLGVBQXBCaUMsUUFBb0JqQyxDQUFwQmlDLEdBRGV0RCxrQkFBakIsYUFBaUJBLENBQWpCOztBQUtBLGNBQU1vRSxVQUFVcEUsT0FDZG1FLG1CQUFtQjlDLHNDQUFzQytCLGVBQXRDL0IsR0FBd0RnQyxnQkFBeERoQyxHQUEyRThDLE1BQTNFOUMsQ0FBMkU4QyxDQUEzRTlDLGVBQW5COEMsUUFBbUI5QyxDQUFuQjhDLEdBRGNuRSxrQkFBaEIsYUFBZ0JBLENBQWhCOztBQUtBLGNBQU1xRSxVQUFVckUsT0FDZHNELGdCQUFnQmEsTUFBaEJiLGFBQW1DaEQsdUNBQW5DZ0QsS0FBbUNoRCxDQUFuQ2dELEdBRGN0RCxrQkFBaEIsYUFBZ0JBLENBQWhCOztBQUtBLGNBQU1zRSxhQUFhdEUsT0FDakJrRSx3QkFBd0JaLGdCQUF4QlksSUFBNEM1RCx1Q0FBNUM0RCxLQUE0QzVELENBQTVDNEQsR0FEaUJsRSxrQkFBbkIsYUFBbUJBLENBQW5CO0FBSUEsaUJBQU87QUFDTHlELHFCQUFTLGdEQURKLE9BQ0ksQ0FESjtBQUVMQyxxQkFBUyxpQkFGSixNQUVJLENBRko7QUFHTEMsb0JBQVEsMkJBSEgsTUFHRyxDQUhIO0FBSUxDLG9CQUFRLGdDQUpILElBSUcsQ0FKSDtBQUtMQyxtQkFBTywyQkFMRixNQUtFLENBTEY7QUFNTEMsb0JBTks7QUFPTEMscUJBUEs7QUFRTHhDLHlCQUFhO0FBUlIsV0FBUDtBQXRDb0I7QUFBQSxzREFtREE7QUFDcEIsY0FBTTZCLGVBQU47QUFDQSxjQUFNQyxnQkFBTjtBQUNBLGNBQU05QixjQUFOO0FBQ0EsY0FBTUMsV0FBTjtBQUNBLGNBQU04QixTQUFTVSxhQUFmLElBQWVBLENBQWY7O0FBRUEsY0FBTWpGLFFBQVEsdURBQWQsR0FBYyxDQUFkOztBQUlBLGNBQU11RCxpQkFBaUJ0QyxPQUNyQmtFLHVCQUF1QjdDLHVEQUF1RGdDLGdCQUE5RWEsQ0FBdUI3QyxDQUF2QjZDLEdBRHFCbEUsa0JBQXZCLGFBQXVCQSxDQUF2Qjs7QUFLQSxjQUFNdUQsV0FBV3ZELE9BQ2ZzRCxvQkFBb0JqQywrQ0FBK0MrQixlQUEvQy9CLEdBQWlFZ0MsZ0JBQWpFaEMsR0FBb0ZpQyxPQUFwRmpDLENBQW9GaUMsQ0FBcEZqQyxlQUFwQmlDLFFBQW9CakMsQ0FBcEJpQyxHQURldEQsa0JBQWpCLGFBQWlCQSxDQUFqQjs7QUFLQSxjQUFNcUUsVUFBVXJFLE9BQ2RzRCxvQkFBb0JoRCx1Q0FBcEJnRCxLQUFvQmhELENBQXBCZ0QsR0FEY3RELGtCQUFoQixhQUFnQkEsQ0FBaEI7O0FBS0EsY0FBTXNFLGFBQWF0RSxPQUNqQmtFLHdCQUF3QlosZ0JBQXhCWSxJQUE0QzVELHVDQUE1QzRELEtBQTRDNUQsQ0FBNUM0RCxHQURpQmxFLGtCQUFuQixhQUFtQkEsQ0FBbkI7O0FBS0EsaUJBQU87QUFDTHlELHFCQUFTLHNDQURKLFFBQ0ksQ0FESjtBQUVMQyxxQkFBUyxpQkFGSixNQUVJLENBRko7QUFHTEMsb0JBQVEsbUJBSEgsTUFHRyxDQUhIO0FBSUxDLG9CQUFRLHdCQUpILEtBSUcsQ0FKSDtBQUtMQyxtQkFBTywyQkFMRixNQUtFLENBTEY7QUFNTEMsb0JBTks7QUFPTEMscUJBUEs7QUFRTHhDLHlCQUFhO0FBUlIsV0FBUDtBQWxGb0I7QUFBQSxvREE4RkY7QUFDbEIsY0FBTTZCLGVBQU47QUFDQSxjQUFNQyxnQkFBTjtBQUNBLGNBQU05QixjQUFOO0FBQ0EsY0FBTUMsV0FBTjtBQUNBLGNBQU04QixTQUFTVSxhQUFmLElBQWVBLENBQWY7QUFDQSxjQUFNRyxRQUFRRixhQUFkLElBQWNBLENBQWQ7O0FBRUEsY0FBTWxGLFFBQVEsdURBQWQsR0FBYyxDQUFkOztBQUlBLGNBQU11RCxpQkFBaUJ0QyxPQUNyQmtFLHVCQUF1QjdDLHVEQUF1RGdDLGdCQUE5RWEsQ0FBdUI3QyxDQUF2QjZDLEdBRHFCbEUsa0JBQXZCLGFBQXVCQSxDQUF2Qjs7QUFLQSxjQUFNdUQsV0FBV3ZELE9BQ2ZzRCxvQkFBb0JqQywrQ0FBK0MrQixlQUEvQy9CLEdBQWlFZ0MsZ0JBQWpFaEMsR0FBb0ZpQyxPQUFwRmpDLENBQW9GaUMsQ0FBcEZqQyxlQUFwQmlDLFFBQW9CakMsQ0FBcEJpQyxHQURldEQsa0JBQWpCLGFBQWlCQSxDQUFqQjs7QUFLQSxjQUFNb0UsVUFBVXBFLE9BQ2RtRSxtQkFBbUI5QyxzQ0FBc0MrQixlQUF0Qy9CLEdBQXdEZ0MsZ0JBQXhEaEMsR0FBMkU4QyxNQUEzRTlDLENBQTJFOEMsQ0FBM0U5QyxlQUFuQjhDLFFBQW1COUMsQ0FBbkI4QyxHQURjbkUsa0JBQWhCLGFBQWdCQSxDQUFoQjs7QUFLQSxjQUFNcUUsVUFBVXJFLE9BQ2RzRCxnQkFBZ0JhLE1BQWhCYixhQUFtQ2hELHVDQUFuQ2dELEtBQW1DaEQsQ0FBbkNnRCxHQURjdEQsa0JBQWhCLGFBQWdCQSxDQUFoQjs7QUFLQSxjQUFNc0UsYUFBYXRFLE9BQ2pCa0Usd0JBQXdCWixnQkFBeEJZLElBQTRDNUQsdUNBQTVDNEQsS0FBNEM1RCxDQUE1QzRELEdBRGlCbEUsa0JBQW5CLGFBQW1CQSxDQUFuQjs7QUFLQSxpQkFBTztBQUNMeUQscUJBQVMsZ0RBREosT0FDSSxDQURKO0FBRUxDLHFCQUFTLGlCQUZKLE1BRUksQ0FGSjtBQUdMQyxvQkFBUSwyQkFISCxNQUdHLENBSEg7QUFJTEMsb0JBQVEsZ0NBSkgsSUFJRyxDQUpIO0FBS0xDLG1CQUFPLDJCQUxGLE1BS0UsQ0FMRjtBQU1MQyxvQkFOSztBQU9MQyxxQkFQSztBQVFMeEMseUJBQWE7QUFSUixXQUFQO0FBbklvQjtBQUFBLDhEQThJSTtBQUN4QixjQUFNNkIsZUFBTjtBQUNBLGNBQU1DLGdCQUFOO0FBQ0EsY0FBTTlCLGNBQU47QUFDQSxjQUFNQyxXQUFOO0FBQ0EsY0FBTThCLFNBQVNVLGFBQWYsSUFBZUEsQ0FBZjtBQUNBLGNBQU1HLFFBQVFGLGFBQWQsSUFBY0EsQ0FBZDs7QUFFQSxjQUFNbEYsUUFBUSx1REFBZCxHQUFjLENBQWQ7O0FBSUEsY0FBTXVELGlCQUFpQnRDLE9BQ3JCa0UsdUJBQXVCN0MsdURBQXVEZ0MsZ0JBQTlFYSxDQUF1QjdDLENBQXZCNkMsR0FEcUJsRSxrQkFBdkIsYUFBdUJBLENBQXZCOztBQUtBLGNBQU11RCxXQUFXdkQsT0FDZnNELG9CQUFvQmpDLCtDQUErQytCLGVBQS9DL0IsR0FBaUVnQyxnQkFBakVoQyxHQUFvRmlDLE9BQXBGakMsQ0FBb0ZpQyxDQUFwRmpDLGVBQXBCaUMsUUFBb0JqQyxDQUFwQmlDLEdBRGV0RCxrQkFBakIsYUFBaUJBLENBQWpCOztBQUtBLGNBQU1vRSxVQUFVcEUsT0FDZG1FLG1CQUFtQjlDLHNDQUFzQytCLGVBQXRDL0IsR0FBd0RnQyxnQkFBeERoQyxHQUEyRThDLE1BQTNFOUMsQ0FBMkU4QyxDQUEzRTlDLGVBQW5COEMsUUFBbUI5QyxDQUFuQjhDLEdBRGNuRSxrQkFBaEIsYUFBZ0JBLENBQWhCOztBQUtBLGNBQU1xRSxVQUFVckUsT0FDZG1FLG1CQUFtQjdELHVDQUFuQjZELEtBQW1CN0QsQ0FBbkI2RCxHQURjbkUsa0JBQWhCLGFBQWdCQSxDQUFoQjs7QUFLQSxjQUFNc0UsYUFBYXRFLE9BQ2pCa0Usd0JBQXdCWixnQkFBeEJZLElBQTRDNUQsdUNBQTVDNEQsS0FBNEM1RCxDQUE1QzRELEdBRGlCbEUsa0JBQW5CLGFBQW1CQSxDQUFuQjs7QUFLQSxpQkFBTztBQUNMeUQscUJBQVMsZ0RBREosT0FDSSxDQURKO0FBRUxDLHFCQUFTLGlCQUZKLE1BRUksQ0FGSjtBQUdMQyxvQkFBUSwyQkFISCxNQUdHLENBSEg7QUFJTEMsb0JBQVEsZ0NBSkgsSUFJRyxDQUpIO0FBS0xDLG1CQUFPLDJCQUxGLE1BS0UsQ0FMRjtBQU1MQyxvQkFOSztBQU9MQyxxQkFQSztBQVFMeEMseUJBQWE7QUFSUixXQUFQO0FBbkxvQjtBQUFBLHdDQStMUDtBQUNiLGNBQU1nRCxRQUFOO0FBQ0EsY0FBTUMsUUFBTjtBQUNBLGNBQU1sQixTQUFTVSxhQUFmLElBQWVBLENBQWY7QUFDQSxjQUFNRyxRQUFRRixhQUFkLElBQWNBLENBQWQ7O0FBRUEsY0FBTVEsU0FBTjtBQUNBLGNBQU1mLFVBQU47QUFDQSxjQUFNZ0IsV0FBTjtBQUNBLGNBQU1mLFNBQU47QUFDQSxjQUFNQyxTQUFOO0FBQ0EsY0FBTUMsUUFBTjs7QUFFQSxjQUFNOUUsUUFBUSx1REFBZCxHQUFjLENBQWQ7O0FBSUE7QUFDQSxjQUFJdUUsZ0JBQWdCYSxNQUFoQmIsU0FBSixHQUFzQztBQUNwQyxnQkFBTXFCLGFBQWEzRSxPQUFPTSxnQ0FBUE4sS0FBT00sQ0FBUE4sU0FBbkIsS0FBbUJBLENBQW5CO0FBQ0F5RTtBQUNBZjtBQUNBQztBQUNBQztBQUNBQztBQUNEOztBQUVELGNBQUlLLGVBQUosSUFBSUEsQ0FBSixFQUEwQjtBQUN4QixnQkFBTVUsZ0JBQWdCNUUsT0FBT00sZ0NBQVBOLEtBQU9NLENBQVBOLFNBQXRCLEtBQXNCQSxDQUF0QjtBQUNBeUU7QUFDQWY7QUFDQUM7QUFDQUM7QUFDQUM7QUFDRDs7QUFFRCxjQUFJSyxlQUFKLElBQUlBLENBQUosRUFBMEI7QUFDeEIsZ0JBQU1XLFdBQVc3RSxPQUFPcUIsZ0RBQWdEbUQsUUFBdkR4RSxDQUFPcUIsQ0FBUHJCLFNBQWpCLEtBQWlCQSxDQUFqQjtBQUNBeUU7QUFDQWY7QUFDQUM7QUFDQUM7QUFDQUM7QUFDRDs7QUFFRCxjQUFJUCxnQkFBSixHQUF1QjtBQUNyQixnQkFBTUMsV0FBV3ZELE9BQU9xQiwrQ0FBK0NrRCxRQUEvQ2xELEdBQTBEbUQsUUFBMURuRCxHQUFxRWlDLE9BQTVFdEQsQ0FBNEVzRCxDQUFyRWpDLENBQVByQixTQUFqQixLQUFpQkEsQ0FBakI7QUFDQXlFO0FBQ0FkO0FBQ0FDO0FBQ0FDO0FBQ0Q7O0FBRUQsY0FBSU0sZUFBSixHQUFzQjtBQUNwQixnQkFBTUMsVUFBVXBFLE9BQU9xQixzQ0FBc0NrRCxRQUF0Q2xELEdBQWlEbUQsUUFBakRuRCxHQUE0RDhDLE1BQW5FbkUsQ0FBbUVtRSxDQUE1RDlDLENBQVByQixTQUFoQixLQUFnQkEsQ0FBaEI7QUFDQXlFO0FBQ0FkO0FBQ0FDO0FBQ0FDO0FBQ0Q7O0FBRUQsaUJBQU87QUFDTEoscUJBREs7QUFFTEMscUJBRks7QUFHTEMsb0JBSEs7QUFJTEMsb0JBSks7QUFLTEMsbUJBTEs7QUFNTEMsb0JBTks7QUFPTEMscUJBUEs7QUFRTHhDLHlCQUFhO0FBUlIsV0FBUDtBQTVQb0I7QUFBQSxvREF3UUQ7QUFBQSxvQ0FDSXJDLG1CQURKLElBQ0lBLENBREo7QUFBQTtBQUFBOztBQUduQixjQUFNNEYsVUFBVUMsS0FBaEI7QUFDQSxjQUFNQyxVQUFVQyxLQUFoQjtBQUNBLGNBQU1DLFNBQVMsQ0FBQ0gsS0FBRCxLQUFmOztBQUVBLGNBQU1JLFdBQVcsMEdBQWpCLE1BQWlCLENBQWpCOztBQU1BLGNBQU1DLFlBQVksbUJBQWxCLE1BQWtCLENBQWxCOztBQUVBLGNBQU1DLGdDQUVGL0Usc0RBRkUrRSxRQUVGL0UsR0FGRStFLGlCQUdGbkIsdUJBQXVCN0MsbUNBQW1DZixXQUFuQ2UsUUFBdkI2QyxTQUF1QjdDLENBQXZCNkMsR0FIRW1CLG1CQUlGL0UsOEJBSkUrRSxRQUlGL0UsQ0FKRStFLEdBQU47O0FBT0EsaUJBQU9yRiwyQ0FBUCxFQUFPQSxDQUFQO0FBOVJvQjtBQUFBLHdEQWlTQztBQUNyQixjQUFNb0QsZUFBTjtBQUNBLGNBQU1DLGdCQUFOO0FBQ0EsY0FBTTlCLGNBQU47QUFDQSxjQUFNQyxXQUFOO0FBQ0EsY0FBTThCLFNBQVNVLGFBQWYsSUFBZUEsQ0FBZjs7QUFFQSxjQUFNakYsUUFBUSx1REFBZCxHQUFjLENBQWQ7O0FBSUEsY0FBTXVELGlCQUFpQnRDLE9BQ3JCa0UsdUJBQXVCN0MsdURBQXVEZ0MsZ0JBQTlFYSxDQUF1QjdDLENBQXZCNkMsR0FEcUJsRSxrQkFBdkIsYUFBdUJBLENBQXZCOztBQUtBLGNBQU11RCxXQUFXdkQsT0FDZnNELG9CQUFvQmpDLCtDQUErQytCLGVBQS9DL0IsR0FBaUVnQyxnQkFBakVoQyxHQUFvRmlDLE9BQXBGakMsQ0FBb0ZpQyxDQUFwRmpDLGVBQXBCaUMsUUFBb0JqQyxDQUFwQmlDLEdBRGV0RCxrQkFBakIsYUFBaUJBLENBQWpCOztBQUtBLGNBQU1xRSxVQUFVckUsT0FDZHNELG9CQUFvQmhELHVDQUFwQmdELEtBQW9CaEQsQ0FBcEJnRCxHQURjdEQsa0JBQWhCLGFBQWdCQSxDQUFoQjs7QUFLQSxjQUFNc0UsYUFBYXRFLE9BQ2pCa0Usd0JBQXdCWixnQkFBeEJZLElBQTRDNUQsdUNBQTVDNEQsS0FBNEM1RCxDQUE1QzRELEdBRGlCbEUsa0JBQW5CLGFBQW1CQSxDQUFuQjs7QUFLQSxpQkFBTztBQUNMeUQscUJBQVMsc0NBREosUUFDSSxDQURKO0FBRUxDLHFCQUFTLGlCQUZKLE1BRUksQ0FGSjtBQUdMQyxvQkFBUSxtQkFISCxNQUdHLENBSEg7QUFJTEMsb0JBQVEsd0JBSkgsSUFJRyxDQUpIO0FBS0xDLG1CQUFPLDJCQUxGLE1BS0UsQ0FMRjtBQU1MQyxvQkFOSztBQU9MQyxxQkFQSztBQVFMeEMseUJBQWE7QUFSUixXQUFQO0FBVUQ7QUExVXFCLE9BQXhCOztBQTZVQWpDOzs7Ozs7Ozs7QUN4VkEsVUFBTWdCLGFBQWFyQyxvQkFBbkIsQ0FBbUJBLENBQW5CO0FBQ0EsVUFBTW9ELGlCQUFpQnBELG9CQUF2QixDQUF1QkEsQ0FBdkI7O0FBRUEsVUFBTStCLFNBQVMvQix1QkFBZjtBQUNBLFVBQU1pRyxpQkFBaUJqRyx1QkFBdkI7O0FBRUEsVUFBTWlCLFVBQVVqQixvQkFBaEIsQ0FBZ0JBLENBQWhCOztBQUVBLFVBQU04RSxlQUFlO0FBQUEsa0RBRUM7QUFBQSxvQ0FDSzdELG1CQURMLElBQ0tBLENBREw7QUFBQTtBQUFBOztBQUdsQixjQUFNNEYsVUFBVUMsS0FBaEI7QUFDQSxjQUFNQyxVQUFVQyxLQUFoQjtBQUNBLGNBQU1LLGNBQWMsQ0FBQzdFLG1CQUFELEtBQXBCO0FBQ0EsY0FBTThFLGNBQWMsQ0FBQzlFLG1CQUFELEtBQXBCOztBQUVBLGNBQU0wRSxXQUFXLHdFQUFqQixNQUFpQixDQUFqQjs7QUFLQSxjQUFNSywrQkFFRmxGLGlEQUZFa0YsUUFFRmxGLENBRkVrRixnQkFHRmxGLGlEQUhFa0YsUUFHRmxGLENBSEVrRixHQUFOO0FBS0EsaUJBQU94Riw0QkFBUCxFQUFPQSxDQUFQO0FBcEJpQjtBQUFBLDRDQXVCRjtBQUNmLGNBQU1vRCxlQUFOO0FBQ0EsY0FBTUMsZ0JBQU47O0FBRUEsY0FBTXRFLFFBQVEsdURBQWQsR0FBYyxDQUFkOztBQUlBLGNBQU11RCxpQkFBaUJ0QyxPQUNyQmtFLHVCQUF1QjdDLHVEQUF1RGdDLGdCQUE5RWEsQ0FBdUI3QyxDQUF2QjZDLEdBRHFCbEUscURBQXZCLGFBQXVCQSxDQUF2Qjs7QUFLQSxjQUFNc0UsYUFBYXRFLE9BQ2pCa0UsdUJBQXVCNUQsdUNBQXZCNEQsS0FBdUI1RCxDQUF2QjRELEdBRGlCbEUscURBQW5CLGFBQW1CQSxDQUFuQjs7QUFLQSxpQkFBTztBQUNMeUQscUJBQVMsYUFESixjQUNJLENBREo7QUFFTEMscUJBQVMsU0FGSixNQUVJLENBRko7QUFHTEMsb0JBQVEsT0FISCxJQUdHLENBSEg7QUFJTEMsb0JBQVEsU0FKSCxNQUlHLENBSkg7QUFLTEMsbUJBQU8sVUFMRixNQUtFLENBTEY7QUFNTEMsb0JBTks7QUFPTEMscUJBUEs7QUFRTHhDLHlCQUFhO0FBUlIsV0FBUDtBQVVEO0FBbkRrQixPQUFyQjs7QUFzREFqQzs7Ozs7QXBCcERBO0NBVkEsRTs7Ozs7OztBcUJBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9idWlsZC9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWE4YzVmMDQ5MDQwMTIzMDZiMzEiLCJ2YXIgc2JnblN0eWxlc2hlZXQgPSByZXF1aXJlKCcuL2J1aWxkL2J1bmRsZS5qcycpO1xudmFyIGN5dG9zY2FwZSA9IHdpbmRvdy5jeXRvc2NhcGU7XG5cbnZhciBjeSA9IHdpbmRvdy5jeSA9IGN5dG9zY2FwZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N5JyksXG4gIGVsZW1lbnRzOiBmZXRjaCgnLi9kZW1vLmpzb24nKS50aGVuKCByZXMgPT4gcmVzLmpzb24oKSApLFxuICBsYXlvdXQ6IHsgbmFtZTogJ3ByZXNldCcgfSxcbiAgc3R5bGU6IHNiZ25TdHlsZXNoZWV0KGN5dG9zY2FwZSlcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8uanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVTYmduU3R5bGVzaGVldFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeXRvc2NhcGVTYmduU3R5bGVzaGVldFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODYzY2NhYTM2NjQxNGQxOTY4YmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovd2VicGFjay9ib290c3RyYXAgODYzY2NhYTM2NjQxNGQxOTY4YmQiLCJjb25zdCBzYmduRGF0YUhhbmRsZXIgPSB7XG4gIGlzTXVsdGltZXIgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbGFzcycpLmluY2x1ZGVzKCdtdWx0aW1lcicpO1xuICB9LFxuICBoYXNDbG9uZW1hcmtlciAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ2Nsb25lbWFya2VyJyk7XG4gIH0sXG4gIGdldFN0YXRlVmFycyAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJyk7XG4gIH0sXG4gIGdldFVuaXRJbmZvcyAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpO1xuICB9LFxuICBoYXNBdXhJdGVtcyAobm9kZSkge1xuICAgIHJldHVybiAobm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpLmxlbmd0aCArIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJykubGVuZ3RoID4gMCk7XG4gIH0sXG4gIHNiZ25DbGFzcyAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGEoJ2NsYXNzJyk7XG4gIH0sXG4gIHNiZ25MYWJlbCAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGEoJ2xhYmVsJyk7XG4gIH0sXG4gIHN0YXRlVmFyTGFiZWwgKHN0YXRlVmFyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBzdGF0ZVZhci5zdGF0ZS52YXJpYWJsZTtcbiAgICBjb25zdCB2YWx1ZSA9IHN0YXRlVmFyLnN0YXRlLnZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB2YXJpYWJsZSkge1xuICAgICAgcmV0dXJuIGAke3ZhbHVlfUAke3ZhcmlhYmxlfWA7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2JnbkRhdGFIYW5kbGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS91dGlsL3NiZ24uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qcyIsImNvbnN0IHN0eWxlTWFwMlN0ciA9IChzdHlsZU1hcCkgPT4ge1xuICBpZiggIXN0eWxlTWFwICl7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHMgPSAnJztcblxuICBmb3IoIGxldCBbaywgdl0gb2Ygc3R5bGVNYXAgKXtcbiAgICBzICs9IGsgKyAnPScgKyAnXCInICsgdiArICdcIicgKyAnICc7XG4gIH1cblxuICByZXR1cm4gcztcbn07XG5cbmNvbnN0IHN2ZyA9IChzdmdTdHIsIHdpZHRoID0gMTAwLCBoZWlnaHQgPSAxMDApID0+IHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgc3ZnVGV4dCA9XG4gIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48IURPQ1RZUEUgc3ZnPjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2ZXJzaW9uPScxLjEnIHdpZHRoPScke3dpZHRofScgaGVpZ2h0PScke2hlaWdodH0nPiR7c3ZnU3RyfTwvc3ZnPmA7XG4gIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1RleHQsICd0ZXh0L3htbCcpLmRvY3VtZW50RWxlbWVudDtcbn07XG5cbmNvbnN0IHN2Z1N0ciA9IChzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpID0+IHtcbiAgbGV0IHMgPSBzdmcoc3ZnVGV4dCwgdmlld1BvcnRXaWR0aCwgdmlld1BvcnRIZWlnaHQsIHZpZXdCb3hYLCB2aWV3Qm94WSwgdmlld0JveFdpZHRoLCB2aWV3Qm94SGVpZ2h0KTtcblxuICAvLyBiYXNlNjRcbiAgLy8gbGV0IGRhdGEgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgYnRvYShzLm91dGVySFRNTCk7XG5cbiAgLy8gdXJpIGNvbXBvbmVudCBzdHJpbmdcbiAgbGV0IGRhdGEgPSAnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJyArIGVuY29kZVVSSUNvbXBvbmVudChzLm91dGVySFRNTCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3ZnU3RyOiBzdmdTdHIsXG4gIHN0eWxlTWFwMlN0cjogc3R5bGVNYXAyU3RyXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS91dGlsL3N2Zy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanMiLCJjb25zdCBzdHlsZU1hcDJTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2Zy5qcycpLnN0eWxlTWFwMlN0cjtcblxubGV0IGJhc2VSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgdywgaCwgcjEsIHIyLCByMywgcjQsIHN0eWxlTWFwKSB7XG4gIHJldHVybiBgXG4gIDxwYXRoICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gZD0nXG4gICAgTSAke3ggKyByMX0gJHt5fVxuICAgIEwgJHt4ICsgdyAtIHIyfSAke3l9IFEgJHt4ICsgd30gJHt5fSAke3ggKyB3fSAke3kgKyByMn1cbiAgICBMICR7eCArIHcgfSAke3kgKyBoIC0gcjN9IFEgJHt4ICsgd30gJHt5ICsgaH0gJHt4ICsgdyAtIHIzfSAke3kgKyBofVxuICAgIEwgJHt4ICsgcjR9ICR7eSArIGh9IFEgJHt4fSAke3kgKyBofSAke3h9ICR7eSArIGggLSByNH1cbiAgICBMICR7eH0gJHt5ICsgcjF9IFEgJHt4fSAke3l9ICR7eCArIHIxfSAke3l9XG4gICAgWidcbiAgLz5cbiAgYDtcbn07XG5cbmNvbnN0IGJhc2VTaGFwZXMgPSB7XG4gIGJhcnJlbCAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuXG4gICAgPGcgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT5cbiAgICAgIDxwYXRoIGQ9XCJNICR7MCp3aWR0aCArIHh9ICR7LjAzKmhlaWdodCArIHl9IEwgJHswKndpZHRoICsgeH0gJHsuOTcqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAke2hlaWdodCArIHl9ICR7MC4yNSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX1cIi8+XG5cbiAgICAgIDxwYXRoIGQ9XCJNICR7MC4yNSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gTCAkezAuNzUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IFEgJHswLjk1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAke3dpZHRoICsgeH0gJHswLjk1KmhlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAke3dpZHRoICsgeH0gJHsuOTUqaGVpZ2h0ICsgeX0gTCAke3dpZHRoICsgeH0gJHswLjA1KmhlaWdodCArIHl9IFEgJHt3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX1cIi8+XG5cbiAgICAgIDxwYXRoIGQ9XCJNICR7MC43NSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSBMICR7MC4yNSp3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSBRICR7MC4wNip3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSAkezAqd2lkdGggKyB4fSAkezAuMDMqaGVpZ2h0ICsgeX1cIi8+XG4gICAgPC9nPlxuXG4gICAgYDtcbiAgfSxcblxuICBjaXJjbGUgKGN4LCBjeSwgciwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYDxjaXJjbGUgY3g9JyR7Y3h9JyBjeT0nJHtjeX0nIHI9JyR7cn0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5gO1xuICB9LFxuXG4gIGNsaXBQYXRoIChpZCwgYmFzZVNoYXBlRm4sIGJhc2VTaGFwZUZuQXJncywgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD0nJHtpZH0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XG4gICAgICAgICR7YmFzZVNoYXBlRm4oLi4uYmFzZVNoYXBlRm5BcmdzKX1cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICBgO1xuICB9LFxuXG4gIGNvbmNhdmVIZXhhZ29uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPScke3ggKyAwfSwgJHt5ICsgMH0sICR7eCArIHdpZHRofSwgJHt5ICsgMH0sICR7eCArIDAuODUqd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgd2lkdGh9LCAke3kgKyBoZWlnaHR9LCAke3ggKyAwfSwgJHt5ICsgaGVpZ2h0fSwgJHsgeCArIDAuMTUqd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSdcbiAgICAvPmA7XG4gIH0sXG5cbiAgY3V0UmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb3JuZXJMZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8cG9seWdvbiAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9XG4gICAgICBwb2ludHM9J1xuICAgICAgJHt4ICsgMCp3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofSAke3ggKyBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aCAtIGNvcm5lckxlbmd0aH0gJHt5ICsgMCpoZWlnaHR9ICR7eCArIHdpZHRofSAke3kgKyBjb3JuZXJMZW5ndGh9XG4gICAgICAke3ggKyB3aWR0aH0gJHt5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RofSAke3ggKyB3aWR0aCAtIGNvcm5lckxlbmd0aH0gJHt5ICsgaGVpZ2h0fSAke3ggKyBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgMCp3aWR0aH0gJHt5ICsgaGVpZ2h0IC0gY29ybmVyTGVuZ3RofVxuICAgICAgJ1xuICAgIC8+XG4gICAgYDtcbiAgfSxcblxuICBlbGxpcHNlIChjeCwgY3ksIHJ4LCByeSwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGVsbGlwc2UgY3g9JyR7Y3h9JyBjeT0nJHtjeX0nIHJ4PScke3J4fScgcnk9JyR7cnl9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+XG4gICAgYDtcbiAgfSxcblxuICBoZXhhZ29uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPScke3ggKyAwfSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIDAuMjUqd2lkdGh9LCAke3kgKyAwKmhlaWdodH0sICR7eCArIDAuNzUqd2lkdGh9LCAke3kgKyAwKmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIDAuNzUqd2lkdGh9LCAke3kgKyBoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSdcbiAgICAvPmA7XG4gIH0sXG5cbiAgbGluZSAoeDEsIHkxLCB4MiwgeTIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8bGluZSB4MT0nJHt4MX0nIHkxPScke3kxfScgeDI9JyR7eDJ9JyB5Mj0nJHt5Mn0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5gO1xuICB9LFxuXG4gIHJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCAwLCAwLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgcm91bmRCb3R0b21SZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgLjMqaGVpZ2h0LCAuMypoZWlnaHQsIHN0eWxlTWFwKTtcbiAgfSxcblxuICByb3VuZFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIHN0eWxlTWFwKTtcbiAgfSxcblxuICBzdGFkaXVtICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIGNvbnN0IHJhZGl1c1JhdGlvID0gLjI0ICogTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHN0eWxlTWFwKTtcbiAgfSxcblxuICBzcXVhcmUgKHgsIHksIGxlbmd0aCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCBsZW5ndGgsIGxlbmd0aCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHRleHQgKHQsIHgsIHksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8dGV4dCB4PScke3h9JyB5PScke3l9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PiR7dH08L3RleHQ+YDtcbiAgfVxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNoYXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qcyIsImNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi91dGlsL3NiZ24uanMnKTtcblxuY29uc3Qgc2JnblN0eWxlID0gbmV3IE1hcCgpXG4uc2V0KCd1bnNwZWNpZmllZCBlbnRpdHknLCB7dzogMzIsIGg6IDMyLCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCcsIHt3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyJywge3c6IDQ4LCBoOiA0OCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdtYWNyb21vbGVjdWxlJywge3c6IDk2LCBoOiA0OCwgc2hhcGU6ICdyb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnbWFjcm9tb2xlY3VsZSBtdWx0aW1lcicsIHt3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywge3c6IDg4LCBoOiA1Niwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXInLCB7dzogODgsIGg6IDUyLCBzaGFwZTogJ2JvdHRvbXJvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdjb21wbGV4Jywge3c6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcbi5zZXQoJ2NvbXBsZXggbXVsdGltZXInLCB7dzogMTAsIGg6IDEwLCBzaGFwZTogJ2N1dHJlY3RhbmdsZSd9KVxuLnNldCgnc291cmNlIGFuZCBzaW5rJywge3c6IDYwLCBoOiA2MCwgc2hhcGU6ICdwb2x5Z29uJ30pXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50Jywge3c6IDE0MCwgaDogNjAsIHNoYXBlOiAnY29uY2F2ZWhleGFnb24nfSlcblxuLnNldCgncGhlbm90eXBlJywge3c6IDE0MCwgaDogNjAsIHNoYXBlOiAnaGV4YWdvbid9KVxuLnNldCgncHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ3VuY2VydGFpbiBwcm9jZXNzJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZSd9KVxuLnNldCgnb21pdHRlZCBwcm9jZXNzJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ3NxdWFyZSd9KVxuLnNldCgnYXNzb2NpYXRpb24nLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnZGlzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcblxuLnNldCgnY29tcGFydG1lbnQnLCB7dzogNTAsIGg6IDUwLCBzaGFwZTogJ2JhcnJlbCd9KVxuXG4uc2V0KCd0YWcnLCB7dzogMTAwLCBoOiA2NSwgc2hhcGU6ICd0YWcnfSlcbi5zZXQoJ2FuZCcsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnb3InLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ25vdCcsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KTtcblxuY29uc3Qgc2JnbkFycm93TWFwID0gbmV3IE1hcCgpXG4uc2V0KCduZWNlc3Nhcnkgc3RpbXVsYXRpb24nLCAndHJpYW5nbGUtY3Jvc3MnKVxuLnNldCgnaW5oaWJpdGlvbicsICd0ZWUnKVxuLnNldCgnY2F0YWx5c2lzJywgJ2NpcmNsZScpXG4uc2V0KCdzdGltdWxhdGlvbicsICd0cmlhbmdsZScpXG4uc2V0KCdwcm9kdWN0aW9uJywgJ3RyaWFuZ2xlJylcbi5zZXQoJ21vZHVsYXRpb24nLCAnZGlhbW9uZCcpO1xuXG5jb25zdCBlbGVtZW50U3R5bGUgPSB7XG4gIHNiZ25TaGFwZSAobm9kZSkge1xuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBzYmduU3R5bGUuZ2V0KHNiZ25DbGFzcyk7XG4gICAgcmV0dXJuIHN0eWxlID8gc3R5bGUuc2hhcGUgOiAnZWxsaXBzZSc7XG4gIH0sXG5cbiAgc2JnbkFycm93U2hhcGUgKGVkZ2UpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3MoZWRnZSk7XG4gICAgY29uc3Qgc2hhcGUgPSBzYmduQXJyb3dNYXAuZ2V0KHNiZ25DbGFzcyk7XG4gICAgcmV0dXJuIHNoYXBlID8gc2hhcGUgOiAnbm9uZSc7XG4gIH0sXG5cbiAgc2JnbkNvbnRlbnQgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICAgIGxldCBjb250ZW50ID0gc2JnbkRhdGEuc2JnbkxhYmVsKG5vZGUpO1xuXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnYW5kJykge1xuICAgICAgY29udGVudCA9ICdBTkQnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdvcicpIHtcbiAgICAgIGNvbnRlbnQgPSAnT1InO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdub3QnKSB7XG4gICAgICBjb250ZW50ID0gJ05PVCc7XG4gICAgfVxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ29taXR0ZWQgcHJvY2VzcycpIHtcbiAgICAgIGNvbnRlbnQgPSAnXFxcXFxcXFwnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICd1bmNlcnRhaW4gcHJvY2VzcycpIHtcbiAgICAgIGNvbnRlbnQgPSAnPyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0sXG5cbiAgZGltZW5zaW9ucyAobm9kZSkge1xuICAgIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKTtcbiAgICBjb25zdCBkaW0gPSBzYmduU3R5bGUuZ2V0KHNiZ25DbGFzcyk7XG4gICAgaWYgKGRpbSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3NiZ25DbGFzc30gZG9lcyBub3QgaGF2ZSBhIGRlZmF1bHQgd2lkdGggLyBoZWlnaHRgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpbTtcbiAgfSxcblxuICB3aWR0aCAobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMobm9kZSkudztcbiAgfSxcblxuICBoZWlnaHQgKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLmg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWxlbWVudFN0eWxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9lbGVtZW50LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9lbGVtZW50LmpzIiwiY29uc3QgdGV4dFdpZHRoID0gcmVxdWlyZSgndGV4dC13aWR0aCcpO1xuXG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzLmpzJyk7XG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpO1xuXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHtcblxuICBtdWx0aUltZ0Nsb25lTWFya2VyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICBjb25zdCBjbG9uZVN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJylcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcblxuICAgIHJldHVybiBiYXNlU2hhcGVzLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjbG9uZVN0eWxlKTtcbiAgfSxcblxuICBtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB1SW5mbywgYm9yZGVyV2lkdGg9MywgZm9udFNpemU9MTQpIHtcbiAgICBjb25zdCB0ZXh0ID0gdUluZm8ubGFiZWwudGV4dDtcbiAgICBjb25zdCB1aW5mb1JlY3RTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcbiAgICAuc2V0KCdmb250LXNpemUnLCBgJHtmb250U2l6ZX1weGApXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbiAgICBjb25zdCB1SW5mb1dpZHRoID0gdGV4dFdpZHRoKHRleHQsIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgNTtcblxuICAgIGNvbnN0IHVuaXRPZkluZm9ybWF0aW9uU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMucm91bmRSZWN0YW5nbGUoeCwgeSwgdUluZm9XaWR0aCwgaGVpZ2h0LCB1aW5mb1JlY3RTdHlsZSl9XG4gICAgICAke2Jhc2VTaGFwZXMudGV4dCh0ZXh0LCB4ICsgKHVJbmZvV2lkdGggLyAyKSwgeSArICggaGVpZ2h0IC8gMiksICB0ZXh0U3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gdW5pdE9mSW5mb3JtYXRpb25Tdmc7XG4gIH0sXG5cbiAgbXVsdGlJbWdTdGF0ZVZhciAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RhdGVWYXIsIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XG5cbiAgICBjb25zdCBzdGF0ZVZhclN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsIGAke2JvcmRlcldpZHRofWApXG4gICAgLnNldCgnZmlsbCcsICd3aGl0ZScpXG4gICAgLnNldCgnZmlsbC1vcGFjaXR5JywgMSk7XG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJylcbiAgICAuc2V0KCdmb250LXNpemUnLCBgJHtmb250U2l6ZX1weGApXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXG4gICAgLnNldCgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbiAgICBjb25zdCB0dyA9IHRleHRXaWR0aChzYmduRGF0YS5zdGF0ZVZhckxhYmVsKHN0YXRlVmFyKSwgeyBmYW1pbHk6IHRleHRTdHlsZS5nZXQoJ2ZvbnQtZmFtaWx5JyksIHNpemU6IGZvbnRTaXplfSkgKyAxMDtcbiAgICBjb25zdCB3ID0gTWF0aC5tYXgodHcsIDMwKTtcbiAgICBjb25zdCBzdGF0ZXZhcmlhYmxlU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuc3RhZGl1bSh4LCB5LCB3LCBoZWlnaHQsIHN0YXRlVmFyU3R5bGUpfVxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHggKyAoIHcgLyAyICksIHkgKyBoZWlnaHQgLyAyLCB0ZXh0U3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gc3RhdGV2YXJpYWJsZVN2ZztcbiAgfSxcblxuICBjbG9uZU1hcmtlciAobm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBzaGFwZUZuLCBzaGFwZUZuQXJncykge1xuICAgIGNvbnN0IGNsaXBJZCA9ICdjbG9uZW1hcmtlcic7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxuICAgIC5zZXQoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7Y2xpcElkfSlgKVxuICAgIC5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jbGlwUGF0aChjbGlwSWQsIGJhc2VTaGFwZXMucmVjdGFuZ2xlLCAgWzAsIDMgKiBub2RlSGVpZ2h0IC8gNCwgbm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBuZXcgTWFwKCldKX1cbiAgICAgICR7c2hhcGVGbiguLi5zaGFwZUZuQXJncywgY2xvbmVNYXJrZXJTdHlsZSl9XG4gICAgYDtcblxuICAgIHJldHVybiBjbG9uZU1hcmtlclN2ZztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdXhpbGlhcnlJdGVtcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvYXV4aWxpYXJ5SXRlbXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qcyIsImxldCBzYmduU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vc2JnblN0eWxlLycpO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN5dG9zY2FwZSl7XG4gIHJldHVybiBzYmduU3R5bGVTaGVldChjeXRvc2NhcGUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcyIsImNvbnN0IGVsZW1lbnRTdHlsZSA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuY29uc3Qgc2JnbnN2ZyA9IHJlcXVpcmUoJy4vZ2x5cGgnKTtcblxuY29uc3Qgc2JnblN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoY3l0b3NjYXBlKSB7XG5cbiAgcmV0dXJuIGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgICAgICAgLy8gZ2VuZXJhbCBub2RlIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzaGFwZSc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuc2JnblNoYXBlKG5vZGUpLFxuICAgICAgICAgICdjb250ZW50JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduQ29udGVudChub2RlKSxcbiAgICAgICAgICAnZm9udC1zaXplJzogMjAsXG4gICAgICAgICAgJ3dpZHRoJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5oZWlnaHQobm9kZSksXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmNmY2ZjYnLFxuICAgICAgICAgICd0ZXh0LW9wYWNpdHknOiAxLFxuICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLW9wYWNpdHknOiAxLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtd2lkdGgnOiAwLjc1XG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzAwMCcsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICcjMDAwJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICcxNCdcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBkcmF3IHNiZ24gc3BlY2lmaWMgc3R5bGluZyAoYXV4aWxpYXJ5IGl0ZW1zLCBjbG9uZW1hcmtlciwgZXRjLilcbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwidW5zcGVjaWZpZWQgZW50aXR5XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWxcIl0sIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGVcIl0sIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZVwiXSwgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwaGVub3R5cGVcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnSW1hZ2UsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnV2lkdGgsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NYLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnRml0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnQ2xpcCxcbiAgICAgICAgICAncGFkZGluZyc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkucGFkZGluZyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5ib3JkZXJXaWR0aFxuICAgICAgICB9KVxuXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0JzogJ3llcycsXG4gICAgICAgICAgJ2dob3N0LW9wYWNpdHknOiAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogMTIsXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogMTJcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogNSxcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiA1XG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxNixcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxNlxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbXBvdW5kIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiY29tcGxleFwiXSwgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl0sIG5vZGVbY2xhc3M9XCJjb21wYXJ0bWVudFwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdjb21wb3VuZC1zaXppbmctd3J0LWxhYmVscyc6ICdleGNsdWRlJyxcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnYm90dG9tJyxcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBwcm9jZXNzIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QjZCNkInXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cInNvdXJjZSBhbmQgc2lua1wiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXG4gICAgICAgICAgJ3NoYXBlLXBvbHlnb24tcG9pbnRzJzogJy0wLjg2LCAwLjUsIC0wLjc1LCAwLjY1LCAtMSwgMC45NSwgLTAuOTUsIDEsIC0wLjY1LCAwLjc1LCAtMC41LCAwLjg2LCAwLCAxLCAwLjUsIDAuODYsIDAuNzEsIDAuNzEsIDAuODYsIDAuNSwgMSwgMCwgMC44NiwgLTAuNSwgMC43NSwgLTAuNjUsIDEsIC0wLjk1LCAwLjk1LCAtMSwgMC42NSwgLTAuNzUsIDAuNSwgLTAuODYsIDAsIC0xLCAtMC41LCAtMC44NiwgLTAuNzEsIC0wLjcxLCAtMC44NiwgLTAuNSwgLTEsIDAnLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXG4gICAgICAgIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSksXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAwLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGVkZ2Ugc3R5bGluZ1xuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYXJyb3ctc2NhbGUnOiAxLjc1LFxuICAgICAgICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctZmlsbCc6ICdob2xsb3cnLFxuICAgICAgICAgICd3aWR0aCc6IDEuNSxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdjb2xvcic6ICcjNTU1J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6c2VsZWN0ZWQnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjZDY3NjE0J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAuNywgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICc4J1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2FyZGluYWxpdHkgPiAwXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtc2hhcGUnOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItd2lkdGgnOiAnMScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1jb2xvcic6ICd3aGl0ZScsXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1vcGFjaXR5JzogJzEnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImNvbnN1bXB0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0sIGVkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnc291cmNlLWxhYmVsJzogKGVkZ2UpID0+ICcnICsgZWRnZS5kYXRhKCdjYXJkaW5hbGl0eScpLFxuICAgICAgICAgICdzb3VyY2UtdGV4dC1vZmZzZXQnOiAxMFxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3NdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6IChlZGdlKSA9PiBlbGVtZW50U3R5bGUuc2JnbkFycm93U2hhcGUoZWRnZSksXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1zaGFwZSc6ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJpbmhpYml0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBjb3JlXG4gICAgICAgIC5zZWxlY3RvcignY29yZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzZWxlY3Rpb24tYm94LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdzZWxlY3Rpb24tYm94LW9wYWNpdHknOiAnMC4yJywgJ3NlbGVjdGlvbi1ib3gtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnXG4gICAgICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzYmduU3R5bGVTaGVldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvaW5kZXguanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2luZGV4LmpzIiwiY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XG5cbmNvbnN0IGNvbnRhaW5lck5vZGVzID0gcmVxdWlyZSgnLi9jb250YWluZXJOb2Rlcy5qcycpO1xuY29uc3QgZW50aXR5UG9vbE5vZGVzID0gcmVxdWlyZSgnLi9lbnRpdHlQb29sTm9kZXMuanMnKTtcbmNvbnN0IHByb2Nlc3NOb2RlcyA9IHJlcXVpcmUoJy4vcHJvY2Vzc05vZGVzLmpzJyk7XG5cbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduLmpzJyk7XG5cbmNvbnN0IGNhY2hlS2V5Rm4gPSAobm9kZSkgPT4gJycgKyBKU09OLnN0cmluZ2lmeShub2RlLmlkKCkpO1xuXG5jb25zdCBzYmduTm9kZVNoYXBlTWFwID0gbmV3IE1hcCgpXG4vLyBwcm9jZXNzIG5vZGVzXG4uc2V0KCdkaXNzb2NpYXRpb24nLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5kaXNzb2NpYXRpb24sIGNhY2hlS2V5Rm4pKVxuLnNldCgncGhlbm90eXBlJywgbWVtb2l6ZShwcm9jZXNzTm9kZXMucGhlbm90eXBlLCBjYWNoZUtleUZuKSlcblxuLy8gZW50aXR5IHBvb2wgbm9kZXNcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnNvdXJjZUFuZFNpbmssIGNhY2hlS2V5Rm4pKVxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMudW5zcGVjaWZpZWRFbnRpdHksIGNhY2hlS2V5Rm4pKVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwsIGNhY2hlS2V5Rm4pKVxuLnNldCgnbWFjcm9tb2xlY3VsZScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLm1hY3JvbW9sZWN1bGUsIGNhY2hlS2V5Rm4pKVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUsIGNhY2hlS2V5Rm4pKVxuLnNldCgnY29tcGxleCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgsIGNhY2hlS2V5Rm4pKVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnBlcnR1cmJpbmdBZ2VudCwgY2FjaGVLZXlGbikpXG5cbi8vIGNvbnRhaW5lciBub2Rlc1xuLnNldCgnY29tcGFydG1lbnQnLCBtZW1vaXplKGNvbnRhaW5lck5vZGVzLmNvbXBhcnRtZW50LCBjYWNoZUtleUZuKSk7XG5cblxuY29uc3QgZHJhdyA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gIGxldCBzaGFwZUZuID0gc2Jnbk5vZGVTaGFwZU1hcC5nZXQoc2JnbkNsYXNzKTtcbiAgaWYgKHNoYXBlRm4gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7c2JnbkNsYXNzfSBkb2VzIG5vdCBoYXZlIGEgc2hhcGUgaW1wbGVtZW50YXRpb25gKTtcbiAgfVxuICByZXR1cm4gc2hhcGVGbihub2RlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkcmF3OiBkcmF3XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9zYmduU3R5bGUvZ2x5cGgvaW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpO1xuY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XG5cbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHtcblxuICBjb21wYXJ0bWVudCAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDYwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSA0MDtcbiAgICBjb25zdCB1SW5mb3MgPSBzYmduRGF0YS5nZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBsZXQgbGluZVN2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtsaW5lU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcyNSUnXSxcbiAgICAgIGJnUG9zWTogWycxOXB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb250YWluJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzM4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6ICc0J1xuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVyTm9kZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9jb250YWluZXJOb2Rlcy5qcyIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBzdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0aWYodHlwZW9mIGNhbnZhcy5nZXRDb250ZXh0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0cmV0dXJuICEhY29udGV4dCAmJiAodHlwZW9mIGNvbnRleHQubWVhc3VyZVRleHQgPT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBleHRlbmQoe1xuXHRcdFx0c3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0dmFyaWFudDogJ25vcm1hbCcsXG5cdFx0XHR3ZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRmYW1pbHk6ICdzYW5zLXNlcmlmJyxcblx0XHRcdGFsaWduOiAnc3RhcnQnLFxuXHRcdFx0YmFzZWxpbmU6ICdhbHBoYWJldGljJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIHNpemUgPSBvcHRpb25zLnNpemU7XG5cdFx0aWYodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSBzaXplID0gc2l6ZSArICdweCc7XG5cblx0XHRjb250ZXh0LmZvbnQgPSB1dGlsLmZvcm1hdCgnJXMgJXMgJXMgJXMgJXMnLFxuXHRcdFx0b3B0aW9ucy5zdHlsZSxcblx0XHRcdG9wdGlvbnMudmFyaWFudCxcblx0XHRcdG9wdGlvbnMud2VpZ2h0LFxuXHRcdFx0c2l6ZSxcblx0XHRcdG9wdGlvbnMuZmFtaWx5KTtcblx0XHRjb250ZXh0LnRleHRBbGlnbiA9IG9wdGlvbnMuYWxpZ247XG5cdFx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSB0cnVlO1xuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRlZCgpID8gaW5pdGlhbGl6ZSgpIDogKGZ1bmN0aW9uKCkge1xuXHR2YXIgd2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHdpZHRoO1xufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsImNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xuXG5jb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcbmNvbnN0IGdldFVuaXRJbmZvcyA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmdldFVuaXRJbmZvcztcbmNvbnN0IGdldFN0YXRlVmFycyA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmdldFN0YXRlVmFycztcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XG5cbmNvbnN0IGVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cblxuY29uc3QgZW50aXR5UG9vbE5vZGVzID0ge1xuXG4gIHVuc3BlY2lmaWVkRW50aXR5IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnMzJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG5cbiAgfSxcblxuICBzaW1wbGVDaGVtaWNhbCAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcxMnB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNDhweCcsICcwcHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcblxuICBtYWNyb21vbGVjdWxlKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzUycHgnLCAnNDRweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9OyAgfSxcblxuICBudWNsZWljQWNpZEZlYXR1cmUgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG5cbiAgY29tcGxleCAobm9kZSkge1xuICAgIGNvbnN0IGl0ZW1XID0gNjA7XG4gICAgY29uc3QgaXRlbUggPSAyNDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgICBjb25zdCBiZ1dpZHRoID0gW107XG4gICAgY29uc3QgYmdIZWlnaHQgPSBbXTtcbiAgICBjb25zdCBiZ1Bvc1ggPSBbXTtcbiAgICBjb25zdCBiZ1Bvc1kgPSBbXTtcbiAgICBjb25zdCBiZ0ZpdCA9IFtdO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzYnKTtcblxuICAgIC8vIG9yZGVyIG9mIHN2ZyBpbWFnZSBnZW5lcmF0aW9uIG1hdHRlcnNcbiAgICBpZiAodUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcExpbmVTdmcgPSBzdmdTdHIoYmFzZVNoYXBlcy5saW5lKDAsIDAsIGl0ZW1XLCAwLCBzdHlsZSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaCh0b3BMaW5lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTFweCcpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xuICAgICAgY29uc3QgYm90dG9tTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKGJvdHRvbUxpbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XG4gICAgICBjb25zdCBjbG9uZVN2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGl0ZW1XLCBpdGVtSCAtIDMpLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goY2xvbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGl0ZW1XIC0gNSwgaXRlbUggLSAzLCB1SW5mb3NbMF0pLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2godUluZm9TdmcpO1xuICAgICAgYmdQb3NYLnB1c2goJzI1JScpO1xuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKHNWYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBpdGVtVyAtIDUsIGl0ZW1IIC0gMywgc1ZhcnNbMF0pLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goc1ZhclN2Zyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnODglJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogaW1hZ2VzLFxuICAgICAgYmdXaWR0aDogYmdXaWR0aCxcbiAgICAgIGJnUG9zWDogYmdQb3NYLFxuICAgICAgYmdQb3NZOiBiZ1Bvc1ksXG4gICAgICBiZ0ZpdDogYmdGaXQsXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICcyMnB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiA0XG4gICAgfTtcbiAgfSxcblxuICBzb3VyY2VBbmRTaW5rIChub2RlKSB7XG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBlbGVtZW50LmRpbWVuc2lvbnMobm9kZSk7XG5cbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XG4gICAgY29uc3QgcmFkaXVzID0gKG53IC0gMikgLyAyO1xuXG4gICAgY29uc3Qgc3R5bGVNYXAgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLWxpbmVjYXAnLCAnc3F1YXJlJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IHNoYXBlQXJncyA9IFtjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXNdO1xuXG4gICAgY29uc3Qgc291cmNlQW5kU2lua1N2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZSguLi5zaGFwZUFyZ3MsIHN0eWxlTWFwKX1cbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudywgbmgsIGJhc2VTaGFwZXMuY2lyY2xlLCBzaGFwZUFyZ3MpIDogJyd9XG4gICAgICAke2Jhc2VTaGFwZXMubGluZSgwLCBuaCwgbncsIDAsIHN0eWxlTWFwKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN2Z1N0cihzb3VyY2VBbmRTaW5rU3ZnLCBudywgbmgsIDAsIDAsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGVydHVyYmluZ0FnZW50IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzhweCcsICc1NnB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW50aXR5UG9vbE5vZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvc2JnblN0eWxlL2dseXBoL2VudGl0eVBvb2xOb2Rlcy5qcyIsImNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xuXG5jb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XG5cbmNvbnN0IGVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNvbnN0IHByb2Nlc3NOb2RlcyA9IHtcblxuICBkaXNzb2NpYXRpb24gKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGVsZW1lbnQuZGltZW5zaW9ucyhub2RlKTtcblxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XG4gICAgY29uc3QgY2VudGVyWSA9IG5oIC8gMjtcbiAgICBjb25zdCBvdXRlclJhZGl1cyA9IChNYXRoLm1pbihudywgbmgpIC0gMikgLyAyO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDM7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICBjb25zdCBkaXNzb2NpYXRpb25TdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgb3V0ZXJSYWRpdXMsIHN0eWxlTWFwKX1cbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgaW5uZXJSYWRpdXMsIHN0eWxlTWFwKX1cbiAgICBgO1xuICAgIHJldHVybiBzdmdTdHIoZGlzc29jaWF0aW9uU3ZnLCBudywgbmgpO1xuICB9LFxuXG4gIHBoZW5vdHlwZSAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCBjbG9uZU1hcmtlclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJ10sXG4gICAgICBiZ1Bvc1k6IFsnNTZweCcsICc1NnB4J10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3NOb2RlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==