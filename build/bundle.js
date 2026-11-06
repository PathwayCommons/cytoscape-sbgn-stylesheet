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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

        var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight / 4, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

        return cloneMarkerSvg;
    }
};

module.exports = auxiliaryItems;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStyleSheet = __webpack_require__(6);

module.exports = function (cytoscape) {
  return sbgnStyleSheet(cytoscape);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 8 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmY2VmOGM4MmNhNjhmNWZhMjZiYyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9hdXhpbGlhcnlJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gubWVtb2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanMiXSwibmFtZXMiOlsic2JnbkRhdGFIYW5kbGVyIiwiaXNNdWx0aW1lciIsIm5vZGUiLCJkYXRhIiwiaW5jbHVkZXMiLCJoYXNDbG9uZW1hcmtlciIsImdldFN0YXRlVmFycyIsImdldFVuaXRJbmZvcyIsImhhc0F1eEl0ZW1zIiwibGVuZ3RoIiwic2JnbkNsYXNzIiwiZWxlbWVudCIsInNiZ25MYWJlbCIsInN0YXRlVmFyTGFiZWwiLCJzdGF0ZVZhciIsInZhcmlhYmxlIiwic3RhdGUiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZU1hcDJTdHIiLCJzdHlsZU1hcCIsInMiLCJrIiwidiIsInN2ZyIsInN2Z1N0ciIsIndpZHRoIiwiaGVpZ2h0IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwic3ZnVGV4dCIsInBhcnNlRnJvbVN0cmluZyIsImRvY3VtZW50RWxlbWVudCIsInZpZXdQb3J0V2lkdGgiLCJ2aWV3UG9ydEhlaWdodCIsInZpZXdCb3hYIiwidmlld0JveFkiLCJ2aWV3Qm94V2lkdGgiLCJ2aWV3Qm94SGVpZ2h0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3V0ZXJIVE1MIiwicmVxdWlyZSIsImJhc2VSZWN0YW5nbGUiLCJ4IiwieSIsInciLCJoIiwicjEiLCJyMiIsInIzIiwicjQiLCJiYXNlU2hhcGVzIiwiYmFycmVsIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJjbGlwUGF0aCIsImlkIiwiYmFzZVNoYXBlRm4iLCJiYXNlU2hhcGVGbkFyZ3MiLCJjb25jYXZlSGV4YWdvbiIsImN1dFJlY3RhbmdsZSIsImNvcm5lckxlbmd0aCIsImVsbGlwc2UiLCJyeCIsInJ5IiwiaGV4YWdvbiIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInJlY3RhbmdsZSIsInJvdW5kQm90dG9tUmVjdGFuZ2xlIiwicm91bmRSZWN0YW5nbGUiLCJzdGFkaXVtIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwibWF4Iiwic3F1YXJlIiwidGV4dCIsInQiLCJzYmduRGF0YSIsInNiZ25TdHlsZSIsIk1hcCIsInNldCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnblNoYXBlIiwicmVwbGFjZSIsInN0eWxlIiwiZ2V0Iiwic2JnbkFycm93U2hhcGUiLCJlZGdlIiwic2JnbkNvbnRlbnQiLCJjb250ZW50IiwiZGltZW5zaW9ucyIsImRpbSIsIlR5cGVFcnJvciIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwibXVsdGlJbWdDbG9uZU1hcmtlciIsImNsb25lU3R5bGUiLCJtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uIiwidUluZm8iLCJib3JkZXJXaWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJtdWx0aUltZ1N0YXRlVmFyIiwic3RhdGVWYXJTdHlsZSIsInR3Iiwic3RhdGV2YXJpYWJsZVN2ZyIsImNsb25lTWFya2VyIiwibm9kZVdpZHRoIiwibm9kZUhlaWdodCIsInNoYXBlRm4iLCJzaGFwZUZuQXJncyIsImNsaXBJZCIsImNsb25lTWFya2VyU3R5bGUiLCJjbG9uZU1hcmtlclN2ZyIsInNiZ25TdHlsZVNoZWV0IiwiY3l0b3NjYXBlIiwic2JnbnN2ZyIsInN0eWxlc2hlZXQiLCJzZWxlY3RvciIsImNzcyIsImRyYXciLCJiZ0ltYWdlIiwiYmdXaWR0aCIsImJnUG9zWCIsImJnUG9zWSIsImJnRml0IiwiYmdDbGlwIiwicGFkZGluZyIsIm1lbW9pemUiLCJjb250YWluZXJOb2RlcyIsImVudGl0eVBvb2xOb2RlcyIsInByb2Nlc3NOb2RlcyIsImNhY2hlS2V5Rm4iLCJKU09OIiwic3RyaW5naWZ5Iiwic2Jnbk5vZGVTaGFwZU1hcCIsImRpc3NvY2lhdGlvbiIsInBoZW5vdHlwZSIsInNvdXJjZUFuZFNpbmsiLCJ1bnNwZWNpZmllZEVudGl0eSIsInNpbXBsZUNoZW1pY2FsIiwibWFjcm9tb2xlY3VsZSIsIm51Y2xlaWNBY2lkRmVhdHVyZSIsImNvbXBsZXgiLCJwZXJ0dXJiaW5nQWdlbnQiLCJjb21wYXJ0bWVudCIsImF1eEl0ZW1XaWR0aCIsImF1eEl0ZW1IZWlnaHQiLCJ1SW5mb3MiLCJ1SW5mb1N2ZyIsImxpbmVTdmciLCJzVmFycyIsInNWYXJTdmciLCJ0b3BMaW5lIiwiYm90dG9tTGluZSIsImJnSGVpZ2h0IiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsInRvcExpbmVTdmciLCJwdXNoIiwiYm90dG9tTGluZVN2ZyIsImNsb25lU3ZnIiwibnciLCJuaCIsImNlbnRlclgiLCJjZW50ZXJZIiwicmFkaXVzIiwic2hhcGVBcmdzIiwic291cmNlQW5kU2lua1N2ZyIsIm91dGVyUmFkaXVzIiwibWluIiwiaW5uZXJSYWRpdXMiLCJkaXNzb2NpYXRpb25TdmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7QUM3REEsSUFBTUEsa0JBQWtCO0FBQ3RC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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxP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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLEVBQW9COztBQUUvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsRUFBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLG1EQUFtRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOXJCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUosR0FDYkMsR0FEYSxDQUNULFFBRFMsRUFDQyxTQURELEVBRWJBLEdBRmEsQ0FFVCxjQUZTLEVBRU8sR0FGUCxDQUFkOztBQUlBLFFBQU15QyxpQkFBaUJ0RyxPQUNyQnJCLGVBQWVILElBQWYsSUFBdUJxRyxlQUFlQyxtQkFBZixDQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxFQUF5Q3lELFlBQXpDLEVBQXVEQyxnQkFBZ0IsQ0FBdkUsQ0FBdkIsR0FBbUcsRUFEOUUsRUFFckJELFlBRnFCLEVBRVBDLGFBRk8sRUFFUSxDQUZSLEVBRVcsQ0FGWCxFQUVjRCxZQUZkLEVBRTRCQyxhQUY1QixDQUF2Qjs7QUFLQSxRQUFNTyxhQUFhL0ksT0FDakJyQixlQUFlSCxJQUFmLElBQXVCa0QsV0FBV2lCLElBQVgsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0I0RixZQUF0QixFQUFvQyxDQUFwQyxFQUF1Q3BFLEtBQXZDLENBQXZCLEdBQXVFLEVBRHRELEVBRWpCb0UsWUFGaUIsRUFFSEMsYUFGRyxFQUVZLENBRlosRUFFZSxDQUZmLEVBRWtCRCxZQUZsQixFQUVnQ0MsYUFGaEMsQ0FBbkI7O0FBS0EsV0FBTztBQUNMMUIsZUFBUyxDQUFDaUMsVUFBRCxFQUFhekMsY0FBYixDQURKO0FBRUxTLGVBQVMsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUZKO0FBR0xDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhIO0FBSUxDLGNBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUpIO0FBS0xDLGFBQU8sQ0FBQyxPQUFELEVBQVUsTUFBVixDQUxGO0FBTUxDLGNBQVEsTUFOSDtBQU9MQyxlQUFTLEtBUEo7QUFRTGxDLG1CQUFhO0FBUlIsS0FBUDtBQVVEO0FBbkRrQixDQUFyQjs7QUFzREExRixPQUFPQyxPQUFQLEdBQWlCK0gsWUFBakIsQyIsImZpbGUiOiIuL2J1aWxkL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImN5dG9zY2FwZVNiZ25TdHlsZXNoZWV0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImN5dG9zY2FwZVNiZ25TdHlsZXNoZWV0XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmY2VmOGM4MmNhNjhmNWZhMjZiYyIsImNvbnN0IHNiZ25EYXRhSGFuZGxlciA9IHtcclxuICBpc011bHRpbWVyIChub2RlKSB7XHJcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbGFzcycpLmluY2x1ZGVzKCdtdWx0aW1lcicpO1xyXG4gIH0sXHJcbiAgaGFzQ2xvbmVtYXJrZXIgKG5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLmRhdGEoJ2Nsb25lbWFya2VyJyk7XHJcbiAgfSxcclxuICBnZXRTdGF0ZVZhcnMgKG5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLmRhdGEoJ3N0YXRlVmFyaWFibGVzJyk7XHJcbiAgfSxcclxuICBnZXRVbml0SW5mb3MgKG5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpO1xyXG4gIH0sXHJcbiAgaGFzQXV4SXRlbXMgKG5vZGUpIHtcclxuICAgIHJldHVybiAobm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpLmxlbmd0aCArIG5vZGUuZGF0YSgndW5pdHNPZkluZm9ybWF0aW9uJykubGVuZ3RoID4gMCk7XHJcbiAgfSxcclxuICBzYmduQ2xhc3MgKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmRhdGEoJ2NsYXNzJyk7XHJcbiAgfSxcclxuICBzYmduTGFiZWwgKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmRhdGEoJ2xhYmVsJyk7XHJcbiAgfSxcclxuICBzdGF0ZVZhckxhYmVsIChzdGF0ZVZhcikge1xyXG4gICAgY29uc3QgdmFyaWFibGUgPSBzdGF0ZVZhci5zdGF0ZS52YXJpYWJsZTtcclxuICAgIGNvbnN0IHZhbHVlID0gc3RhdGVWYXIuc3RhdGUudmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFyaWFibGUpIHtcclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfUAke3ZhcmlhYmxlfWA7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YXJpYWJsZSkge1xyXG4gICAgICByZXR1cm4gdmFyaWFibGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzYmduRGF0YUhhbmRsZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XHJcbiAgaWYoICFzdHlsZU1hcCApe1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgbGV0IHMgPSAnJztcclxuXHJcbiAgZm9yKCBsZXQgW2ssIHZdIG9mIHN0eWxlTWFwICl7XHJcbiAgICBzICs9IGsgKyAnPScgKyAnXCInICsgdiArICdcIicgKyAnICc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcztcclxufTtcclxuXHJcbmNvbnN0IHN2ZyA9IChzdmdTdHIsIHdpZHRoID0gMTAwLCBoZWlnaHQgPSAxMDApID0+IHtcclxuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgbGV0IHN2Z1RleHQgPVxyXG4gIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48IURPQ1RZUEUgc3ZnPjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2ZXJzaW9uPScxLjEnIHdpZHRoPScke3dpZHRofScgaGVpZ2h0PScke2hlaWdodH0nPiR7c3ZnU3RyfTwvc3ZnPmA7XHJcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xyXG59O1xyXG5cclxuY29uc3Qgc3ZnU3RyID0gKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkgPT4ge1xyXG4gIGxldCBzID0gc3ZnKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCk7XHJcblxyXG4gIC8vIGJhc2U2NFxyXG4gIC8vIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIGJ0b2Eocy5vdXRlckhUTUwpO1xyXG5cclxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xyXG4gIGxldCBkYXRhID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgKyBlbmNvZGVVUklDb21wb25lbnQocy5vdXRlckhUTUwpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHN2Z1N0cjogc3ZnU3RyLFxyXG4gIHN0eWxlTWFwMlN0cjogc3R5bGVNYXAyU3RyXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvdXRpbC9zdmcuanMiLCJjb25zdCBzdHlsZU1hcDJTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2Zy5qcycpLnN0eWxlTWFwMlN0cjtcclxuXHJcbmxldCBiYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHcsIGgsIHIxLCByMiwgcjMsIHI0LCBzdHlsZU1hcCkge1xyXG4gIHJldHVybiBgXHJcbiAgPHBhdGggJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSBkPSdcclxuICAgIE0gJHt4ICsgcjF9ICR7eX1cclxuICAgIEwgJHt4ICsgdyAtIHIyfSAke3l9IFEgJHt4ICsgd30gJHt5fSAke3ggKyB3fSAke3kgKyByMn1cclxuICAgIEwgJHt4ICsgdyB9ICR7eSArIGggLSByM30gUSAke3ggKyB3fSAke3kgKyBofSAke3ggKyB3IC0gcjN9ICR7eSArIGh9XHJcbiAgICBMICR7eCArIHI0fSAke3kgKyBofSBRICR7eH0gJHt5ICsgaH0gJHt4fSAke3kgKyBoIC0gcjR9XHJcbiAgICBMICR7eH0gJHt5ICsgcjF9IFEgJHt4fSAke3l9ICR7eCArIHIxfSAke3l9XHJcbiAgICBaJ1xyXG4gIC8+XHJcbiAgYDtcclxufTtcclxuXHJcbmNvbnN0IGJhc2VTaGFwZXMgPSB7XHJcbiAgYmFycmVsICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGBcclxuXHJcbiAgICA8ZyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxyXG4gICAgICA8cGF0aCBkPVwiTSAkezAqd2lkdGggKyB4fSAkey4wMypoZWlnaHQgKyB5fSBMICR7MCp3aWR0aCArIHh9ICR7Ljk3KmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9XCIvPlxyXG5cclxuICAgICAgPHBhdGggZD1cIk0gJHswLjI1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBMICR7MC43NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gUSAkezAuOTUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9ICR7d2lkdGggKyB4fSAkezAuOTUqaGVpZ2h0ICsgeX1cIi8+XHJcblxyXG4gICAgICA8cGF0aCBkPVwiTSAke3dpZHRoICsgeH0gJHsuOTUqaGVpZ2h0ICsgeX0gTCAke3dpZHRoICsgeH0gJHswLjA1KmhlaWdodCArIHl9IFEgJHt3aWR0aCArIHh9ICR7MCpoZWlnaHQgKyB5fSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX1cIi8+XHJcblxyXG4gICAgICA8cGF0aCBkPVwiTSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gTCAkezAuMjUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswKndpZHRoICsgeH0gJHswLjAzKmhlaWdodCArIHl9XCIvPlxyXG4gICAgPC9nPlxyXG5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgY2lyY2xlIChjeCwgY3ksIHIsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYDxjaXJjbGUgY3g9JyR7Y3h9JyBjeT0nJHtjeX0nIHI9JyR7cn0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5gO1xyXG4gIH0sXHJcblxyXG4gIGNsaXBQYXRoIChpZCwgYmFzZVNoYXBlRm4sIGJhc2VTaGFwZUZuQXJncywgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD0nJHtpZH0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XHJcbiAgICAgICAgJHtiYXNlU2hhcGVGbiguLi5iYXNlU2hhcGVGbkFyZ3MpfVxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgY29uY2F2ZUhleGFnb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxyXG4gICAgICBwb2ludHM9JyR7eCArIDB9LCAke3kgKyAwfSwgJHt4ICsgd2lkdGh9LCAke3kgKyAwfSwgJHt4ICsgMC44NSp3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIGhlaWdodH0sICR7eCArIDB9LCAke3kgKyBoZWlnaHR9LCAkeyB4ICsgMC4xNSp3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9J1xyXG4gICAgLz5gO1xyXG4gIH0sXHJcblxyXG4gIGN1dFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29ybmVyTGVuZ3RoLCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cclxuICAgICAgcG9pbnRzPSdcclxuICAgICAgJHt4ICsgMCp3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofSAke3ggKyBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aCAtIGNvcm5lckxlbmd0aH0gJHt5ICsgMCpoZWlnaHR9ICR7eCArIHdpZHRofSAke3kgKyBjb3JuZXJMZW5ndGh9XHJcbiAgICAgICR7eCArIHdpZHRofSAke3kgKyBoZWlnaHQgLSBjb3JuZXJMZW5ndGh9ICR7eCArIHdpZHRoIC0gY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIGNvcm5lckxlbmd0aH0gJHt5ICsgaGVpZ2h0fSAke3ggKyAwKndpZHRofSAke3kgKyBoZWlnaHQgLSBjb3JuZXJMZW5ndGh9XHJcbiAgICAgICdcclxuICAgIC8+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGVsbGlwc2UgKGN4LCBjeSwgcngsIHJ5LCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGVsbGlwc2UgY3g9JyR7Y3h9JyBjeT0nJHtjeX0nIHJ4PScke3J4fScgcnk9JyR7cnl9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGhleGFnb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxyXG4gICAgICBwb2ludHM9JyR7eCArIDB9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIDAqaGVpZ2h0fSwgJHt4ICsgMC43NSp3aWR0aH0sICR7eSArIDAqaGVpZ2h0fSwgJHt4ICsgd2lkdGh9LCAke3kgKyAwLjUqaGVpZ2h0fSwgJHt4ICsgMC43NSp3aWR0aH0sICR7eSArIGhlaWdodH0sICR7eCArIDAuMjUqd2lkdGh9LCAke3kgKyBoZWlnaHR9J1xyXG4gICAgLz5gO1xyXG4gIH0sXHJcblxyXG4gIGxpbmUgKHgxLCB5MSwgeDIsIHkyLCBzdHlsZU1hcCkge1xyXG4gICAgcmV0dXJuIGA8bGluZSB4MT0nJHt4MX0nIHkxPScke3kxfScgeDI9JyR7eDJ9JyB5Mj0nJHt5Mn0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0gLz5gO1xyXG4gIH0sXHJcblxyXG4gIHJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcclxuICB9LFxyXG5cclxuICByb3VuZEJvdHRvbVJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcclxuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIC4zKmhlaWdodCwgLjMqaGVpZ2h0LCBzdHlsZU1hcCk7XHJcbiAgfSxcclxuXHJcbiAgcm91bmRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIHN0eWxlTWFwKTtcclxuICB9LFxyXG5cclxuICBzdGFkaXVtICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xyXG4gICAgY29uc3QgcmFkaXVzUmF0aW8gPSAuMjQgKiBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCBzdHlsZU1hcCk7XHJcbiAgfSxcclxuXHJcbiAgc3F1YXJlICh4LCB5LCBsZW5ndGgsIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYmFzZVJlY3RhbmdsZSh4LCB5LCBsZW5ndGgsIGxlbmd0aCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xyXG4gIH0sXHJcblxyXG4gIHRleHQgKHQsIHgsIHksIHN0eWxlTWFwKSB7XHJcbiAgICByZXR1cm4gYDx0ZXh0IHg9JyR7eH0nIHk9JyR7eX0nICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+JHt0fTwvdGV4dD5gO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2hhcGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2Jhc2VTaGFwZXMuanMiLCJjb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4vdXRpbC9zYmduLmpzJyk7XHJcblxyXG5jb25zdCBzYmduU3R5bGUgPSBuZXcgTWFwKClcclxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5Jywge3c6IDMyLCBoOiAzMiwgc2hhcGU6ICdlbGxpcHNlJ30pXHJcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCcsIHt3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwgbXVsdGltZXInLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcclxuLnNldCgnbWFjcm9tb2xlY3VsZScsIHt3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnfSlcclxuLnNldCgnbWFjcm9tb2xlY3VsZSBtdWx0aW1lcicsIHt3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnfSlcclxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCB7dzogODgsIGg6IDU2LCBzaGFwZTogJ2JvdHRvbXJvdW5kcmVjdGFuZ2xlJ30pXHJcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyJywge3c6IDg4LCBoOiA1Miwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZSd9KVxyXG4uc2V0KCdjb21wbGV4Jywge3c6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcclxuLnNldCgnY29tcGxleCBtdWx0aW1lcicsIHt3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJ30pXHJcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHt3OiA2MCwgaDogNjAsIHNoYXBlOiAncG9seWdvbid9KVxyXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50Jywge3c6IDE0MCwgaDogNjAsIHNoYXBlOiAnY29uY2F2ZWhleGFnb24nfSlcclxuXHJcbi5zZXQoJ3BoZW5vdHlwZScsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2hleGFnb24nfSlcclxuLnNldCgncHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcclxuLnNldCgndW5jZXJ0YWluIHByb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXHJcbi5zZXQoJ29taXR0ZWQgcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcclxuLnNldCgnYXNzb2NpYXRpb24nLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG4uc2V0KCdkaXNzb2NpYXRpb24nLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG5cclxuLnNldCgnY29tcGFydG1lbnQnLCB7dzogNTAsIGg6IDUwLCBzaGFwZTogJ2JhcnJlbCd9KVxyXG5cclxuLnNldCgndGFnJywge3c6IDEwMCwgaDogNjUsIHNoYXBlOiAndGFnJ30pXHJcbi5zZXQoJ2FuZCcsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG4uc2V0KCdvcicsIHt3OiA0MCwgaDogNDAsIHNoYXBlOiAnZWxsaXBzZSd9KVxyXG4uc2V0KCdub3QnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSk7XHJcblxyXG5jb25zdCBzYmduQXJyb3dNYXAgPSBuZXcgTWFwKClcclxuLnNldCgnbmVjZXNzYXJ5IHN0aW11bGF0aW9uJywgJ3RyaWFuZ2xlLWNyb3NzJylcclxuLnNldCgnaW5oaWJpdGlvbicsICd0ZWUnKVxyXG4uc2V0KCdjYXRhbHlzaXMnLCAnY2lyY2xlJylcclxuLnNldCgnc3RpbXVsYXRpb24nLCAndHJpYW5nbGUnKVxyXG4uc2V0KCdwcm9kdWN0aW9uJywgJ3RyaWFuZ2xlJylcclxuLnNldCgnbW9kdWxhdGlvbicsICdkaWFtb25kJyk7XHJcblxyXG5jb25zdCBlbGVtZW50U3R5bGUgPSB7XHJcbiAgc2JnblNoYXBlIChub2RlKSB7XHJcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBzYmduU3R5bGUuZ2V0KHNiZ25DbGFzcyk7XHJcbiAgICByZXR1cm4gc3R5bGUgPyBzdHlsZS5zaGFwZSA6ICdlbGxpcHNlJztcclxuICB9LFxyXG5cclxuICBzYmduQXJyb3dTaGFwZSAoZWRnZSkge1xyXG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKGVkZ2UpO1xyXG4gICAgY29uc3Qgc2hhcGUgPSBzYmduQXJyb3dNYXAuZ2V0KHNiZ25DbGFzcyk7XHJcbiAgICByZXR1cm4gc2hhcGUgPyBzaGFwZSA6ICdub25lJztcclxuICB9LFxyXG5cclxuICBzYmduQ29udGVudCAobm9kZSkge1xyXG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcclxuICAgIGxldCBjb250ZW50ID0gc2JnbkRhdGEuc2JnbkxhYmVsKG5vZGUpO1xyXG5cclxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ2FuZCcpIHtcclxuICAgICAgY29udGVudCA9ICdBTkQnO1xyXG4gICAgfVxyXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb3InKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAnT1InO1xyXG4gICAgfVxyXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnbm90Jykge1xyXG4gICAgICBjb250ZW50ID0gJ05PVCc7XHJcbiAgICB9XHJcbiAgICBpZiAoc2JnbkNsYXNzID09ICdvbWl0dGVkIHByb2Nlc3MnKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAnXFxcXFxcXFwnO1xyXG4gICAgfVxyXG4gICAgaWYgKHNiZ25DbGFzcyA9PSAndW5jZXJ0YWluIHByb2Nlc3MnKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAnPyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfSxcclxuXHJcbiAgZGltZW5zaW9ucyAobm9kZSkge1xyXG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpO1xyXG4gICAgY29uc3QgZGltID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xyXG4gICAgaWYgKGRpbSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7c2JnbkNsYXNzfSBkb2VzIG5vdCBoYXZlIGEgZGVmYXVsdCB3aWR0aCAvIGhlaWdodGApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpbTtcclxuICB9LFxyXG5cclxuICB3aWR0aCAobm9kZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS53O1xyXG4gIH0sXHJcblxyXG4gIGhlaWdodCAobm9kZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS5oO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZWxlbWVudFN0eWxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJjb25zdCB0ZXh0V2lkdGggPSByZXF1aXJlKCd0ZXh0LXdpZHRoJyk7XHJcblxyXG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzLmpzJyk7XHJcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJyk7XHJcblxyXG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHtcclxuXHJcbiAgbXVsdGlJbWdDbG9uZU1hcmtlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cclxuICAgIGNvbnN0IGNsb25lU3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJylcclxuICAgIC5zZXQoJ2ZpbGwnLCAnI0QyRDJEMicpO1xyXG5cclxuICAgIHJldHVybiBiYXNlU2hhcGVzLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjbG9uZVN0eWxlKTtcclxuICB9LFxyXG5cclxuICBtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB1SW5mbywgYm9yZGVyV2lkdGg9MywgZm9udFNpemU9MTQpIHtcclxuICAgIGNvbnN0IHRleHQgPSB1SW5mby5sYWJlbC50ZXh0O1xyXG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsIGAke2JvcmRlcldpZHRofWApXHJcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcclxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xyXG5cclxuXHJcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxyXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxyXG4gICAgLnNldCgnZm9udC1mYW1pbHknLCAnSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZicpXHJcbiAgICAuc2V0KCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1dpZHRoID0gdGV4dFdpZHRoKHRleHQsIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgNTtcclxuXHJcbiAgICBjb25zdCB1bml0T2ZJbmZvcm1hdGlvblN2ZyA9XHJcbiAgICBgXHJcbiAgICAgICR7YmFzZVNoYXBlcy5yb3VuZFJlY3RhbmdsZSh4LCB5LCB1SW5mb1dpZHRoLCBoZWlnaHQsIHVpbmZvUmVjdFN0eWxlKX1cclxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQodGV4dCwgeCArICh1SW5mb1dpZHRoIC8gMiksIHkgKyAoIGhlaWdodCAvIDIpLCAgdGV4dFN0eWxlKX1cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIHVuaXRPZkluZm9ybWF0aW9uU3ZnO1xyXG4gIH0sXHJcblxyXG4gIG11bHRpSW1nU3RhdGVWYXIgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXRlVmFyLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xyXG5cclxuICAgIGNvbnN0IHN0YXRlVmFyU3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsIGAke2JvcmRlcldpZHRofWApXHJcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcclxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xyXG5cclxuICAgIGNvbnN0IHRleHRTdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXHJcbiAgICAuc2V0KCdmb250LXNpemUnLCBgJHtmb250U2l6ZX1weGApXHJcbiAgICAuc2V0KCdmb250LWZhbWlseScsICdIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcclxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xyXG5cclxuICAgIGNvbnN0IHR3ID0gdGV4dFdpZHRoKHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDEwO1xyXG4gICAgY29uc3QgdyA9IE1hdGgubWF4KHR3LCAzMCk7XHJcbiAgICBjb25zdCBzdGF0ZXZhcmlhYmxlU3ZnID1cclxuICAgIGBcclxuICAgICAgJHtiYXNlU2hhcGVzLnN0YWRpdW0oeCwgeSwgdywgaGVpZ2h0LCBzdGF0ZVZhclN0eWxlKX1cclxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHggKyAoIHcgLyAyICksIHkgKyBoZWlnaHQgLyAyLCB0ZXh0U3R5bGUpfVxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gc3RhdGV2YXJpYWJsZVN2ZztcclxuICB9LFxyXG5cclxuICBjbG9uZU1hcmtlciAobm9kZVdpZHRoLCBub2RlSGVpZ2h0LCBzaGFwZUZuLCBzaGFwZUZuQXJncykge1xyXG4gICAgY29uc3QgY2xpcElkID0gJ2Nsb25lbWFya2VyJztcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcclxuICAgIC5zZXQoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7Y2xpcElkfSlgKVxyXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPVxyXG4gICAgYFxyXG4gICAgICAke2Jhc2VTaGFwZXMuY2xpcFBhdGgoY2xpcElkLCBiYXNlU2hhcGVzLnJlY3RhbmdsZSwgWzAsIDMgKiBub2RlSGVpZ2h0IC8gNCwgbm9kZVdpZHRoLCBub2RlSGVpZ2h0IC8gNCwgbmV3IE1hcCgpXSl9XHJcbiAgICAgICR7c2hhcGVGbiguLi5zaGFwZUZuQXJncywgY2xvbmVNYXJrZXJTdHlsZSl9XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiBjbG9uZU1hcmtlclN2ZztcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGF1eGlsaWFyeUl0ZW1zO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwibGV0IHNiZ25TdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9zYmduU3R5bGUvJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN5dG9zY2FwZSl7XHJcbiAgcmV0dXJuIHNiZ25TdHlsZVNoZWV0KGN5dG9zY2FwZSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IGVsZW1lbnRTdHlsZSA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xyXG5jb25zdCBzYmduc3ZnID0gcmVxdWlyZSgnLi9nbHlwaCcpO1xyXG5cclxuY29uc3Qgc2JnblN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoY3l0b3NjYXBlKSB7XHJcblxyXG4gIHJldHVybiBjeXRvc2NhcGUuc3R5bGVzaGVldCgpXHJcbiAgICAgICAgLy8gZ2VuZXJhbCBub2RlIHN0eWxlXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdzaGFwZSc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuc2JnblNoYXBlKG5vZGUpLFxyXG4gICAgICAgICAgJ2NvbnRlbnQnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25Db250ZW50KG5vZGUpLFxyXG4gICAgICAgICAgJ2ZvbnQtc2l6ZSc6IDIwLFxyXG4gICAgICAgICAgJ3dpZHRoJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS53aWR0aChub2RlKSxcclxuICAgICAgICAgICdoZWlnaHQnOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLmhlaWdodChub2RlKSxcclxuICAgICAgICAgICd0ZXh0LXZhbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXHJcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMS41LFxyXG4gICAgICAgICAgJ2JvcmRlci1jb2xvcic6ICcjNTU1JyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmNmY2ZjYnLFxyXG4gICAgICAgICAgJ3RleHQtb3BhY2l0eSc6IDEsXHJcbiAgICAgICAgICAnb3BhY2l0eSc6IDEsXHJcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJ3doaXRlJyxcclxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtb3BhY2l0eSc6IDEsXHJcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLXdpZHRoJzogMC43NVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlOnNlbGVjdGVkJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjMDAwJyxcclxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnIzAwMCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTphY3RpdmUnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzE0J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2JnbiBzcGVjaWZpYyBzdHlsaW5nIChhdXhpbGlhcnkgaXRlbXMsIGNsb25lbWFya2VyLCBldGMuKVxyXG4gICAgICAgIC5zZWxlY3RvcihgXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwidW5zcGVjaWZpZWQgZW50aXR5XCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbFwiXSwgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlXCJdLCBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZVwiXSwgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInBlcnR1cmJpbmcgYWdlbnRcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGhlbm90eXBlXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl1cclxuICAgICAgICBgKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnSW1hZ2UsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdXaWR0aCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWSxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdGaXQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0NsaXAsXHJcbiAgICAgICAgICAncGFkZGluZyc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkucGFkZGluZyxcclxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJvcmRlcldpZHRoXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnNlbGVjdG9yKGBcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdXHJcbiAgICAgICAgYClcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdnaG9zdCc6ICd5ZXMnLFxyXG4gICAgICAgICAgJ2dob3N0LW9wYWNpdHknOiAxXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLnNlbGVjdG9yKGBcclxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdXHJcbiAgICAgICAgYClcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteCc6IDEyLFxyXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogMTJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuc2VsZWN0b3IoYFxyXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiA1LFxyXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogNVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zZWxlY3RvcihgXHJcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxNixcclxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteSc6IDE2XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gY29tcG91bmQgbm9kZSBzcGVjaWZpYyBzdHlsZVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2NvbXBvdW5kLXNpemluZy13cnQtbGFiZWxzJzogJ2V4Y2x1ZGUnLFxyXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIG5vZGUgc3BlY2lmaWMgc3R5bGVcclxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXSwgbm9kZVtjbGFzcz1cImRpc3NvY2lhdGlvblwiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzZCNkI2QidcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxyXG4gICAgICAgIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxyXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cInNvdXJjZSBhbmQgc2lua1wiXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSksXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6ICcxMDAlJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAwLFxyXG4gICAgICAgICAgJ3NoYXBlLXBvbHlnb24tcG9pbnRzJzogJy0wLjg2LCAwLjUsIC0wLjc1LCAwLjY1LCAtMSwgMC45NSwgLTAuOTUsIDEsIC0wLjY1LCAwLjc1LCAtMC41LCAwLjg2LCAwLCAxLCAwLjUsIDAuODYsIDAuNzEsIDAuNzEsIDAuODYsIDAuNSwgMSwgMCwgMC44NiwgLTAuNSwgMC43NSwgLTAuNjUsIDEsIC0wLjk1LCAwLjk1LCAtMSwgMC42NSwgLTAuNzUsIDAuNSwgLTAuODYsIDAsIC0xLCAtMC41LCAtMC44NiwgLTAuNzEsIC0wLjcxLCAtMC44NiwgLTAuNSwgLTEsIDAnLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXHJcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXHJcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiZGlzc29jaWF0aW9uXCJdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6ICdub25lJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6ICdub25lJyxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gZWRnZSBzdHlsaW5nXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICdhcnJvdy1zY2FsZSc6IDEuNzUsXHJcbiAgICAgICAgICAnY3VydmUtc3R5bGUnOiAnYmV6aWVyJyxcclxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyM1NTUnLFxyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2hvbGxvdycsXHJcbiAgICAgICAgICAnc291cmNlLWFycm93LWZpbGwnOiAnaG9sbG93JyxcclxuICAgICAgICAgICd3aWR0aCc6IDEuNSxcclxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzU1NScsXHJcbiAgICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyM1NTUnLFxyXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxyXG4gICAgICAgICAgJ2NvbG9yJzogJyM1NTUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2U6c2VsZWN0ZWQnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ2NvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCcsXHJcbiAgICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyNkNjc2MTQnLFxyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjZDY3NjE0J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlOmFjdGl2ZScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMC43LCAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICdvdmVybGF5LXBhZGRpbmcnOiAnOCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjYXJkaW5hbGl0eSA+IDBdJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtc2hhcGUnOiAncmVjdGFuZ2xlJyxcclxuICAgICAgICAgICd0ZXh0LWJvcmRlci1vcGFjaXR5JzogJzEnLFxyXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLXdpZHRoJzogJzEnLFxyXG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1jb2xvcic6ICd3aGl0ZScsXHJcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLW9wYWNpdHknOiAnMSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImNvbnN1bXB0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0sIGVkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdW2NhcmRpbmFsaXR5ID4gMF0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3NvdXJjZS1sYWJlbCc6IChlZGdlKSA9PiAnJyArIGVkZ2UuZGF0YSgnY2FyZGluYWxpdHknKSxcclxuICAgICAgICAgICdzb3VyY2UtdGV4dC1vZmZzZXQnOiAxMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzXScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogKGVkZ2UpID0+IGVsZW1lbnRTdHlsZS5zYmduQXJyb3dTaGFwZShlZGdlKSxcclxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctc2hhcGUnOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImluaGliaXRpb25cIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl0nKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgLy8gY29yZVxyXG4gICAgICAgIC5zZWxlY3RvcignY29yZScpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAnc2VsZWN0aW9uLWJveC1jb2xvcic6ICcjZDY3NjE0JyxcclxuICAgICAgICAgICdzZWxlY3Rpb24tYm94LW9wYWNpdHknOiAnMC4yJywgJ3NlbGVjdGlvbi1ib3gtYm9yZGVyLWNvbG9yJzogJyNkNjc2MTQnXHJcbiAgICAgICAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25TdHlsZVNoZWV0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2luZGV4LmpzIiwiY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XHJcblxyXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHJlcXVpcmUoJy4vY29udGFpbmVyTm9kZXMuanMnKTtcclxuY29uc3QgZW50aXR5UG9vbE5vZGVzID0gcmVxdWlyZSgnLi9lbnRpdHlQb29sTm9kZXMuanMnKTtcclxuY29uc3QgcHJvY2Vzc05vZGVzID0gcmVxdWlyZSgnLi9wcm9jZXNzTm9kZXMuanMnKTtcclxuXHJcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduLmpzJyk7XHJcblxyXG5jb25zdCBjYWNoZUtleUZuID0gKG5vZGUpID0+ICcnICsgSlNPTi5zdHJpbmdpZnkobm9kZS5pZCgpKTtcclxuXHJcbmNvbnN0IHNiZ25Ob2RlU2hhcGVNYXAgPSBuZXcgTWFwKClcclxuLy8gcHJvY2VzcyBub2Rlc1xyXG4uc2V0KCdkaXNzb2NpYXRpb24nLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5kaXNzb2NpYXRpb24sIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdwaGVub3R5cGUnLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5waGVub3R5cGUsIGNhY2hlS2V5Rm4pKVxyXG5cclxuLy8gZW50aXR5IHBvb2wgbm9kZXNcclxuLnNldCgnc291cmNlIGFuZCBzaW5rJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc291cmNlQW5kU2luaywgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnVuc3BlY2lmaWVkRW50aXR5LCBjYWNoZUtleUZuKSlcclxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwsIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdtYWNyb21vbGVjdWxlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubWFjcm9tb2xlY3VsZSwgY2FjaGVLZXlGbikpXHJcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubnVjbGVpY0FjaWRGZWF0dXJlLCBjYWNoZUtleUZuKSlcclxuLnNldCgnY29tcGxleCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgsIGNhY2hlS2V5Rm4pKVxyXG4uc2V0KCdwZXJ0dXJiaW5nIGFnZW50JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMucGVydHVyYmluZ0FnZW50LCBjYWNoZUtleUZuKSlcclxuXHJcbi8vIGNvbnRhaW5lciBub2Rlc1xyXG4uc2V0KCdjb21wYXJ0bWVudCcsIG1lbW9pemUoY29udGFpbmVyTm9kZXMuY29tcGFydG1lbnQsIGNhY2hlS2V5Rm4pKTtcclxuXHJcblxyXG5jb25zdCBkcmF3ID0gKG5vZGUpID0+IHtcclxuICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xyXG4gIGxldCBzaGFwZUZuID0gc2Jnbk5vZGVTaGFwZU1hcC5nZXQoc2JnbkNsYXNzKTtcclxuICBpZiAoc2hhcGVGbiA9PSBudWxsKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3NiZ25DbGFzc30gZG9lcyBub3QgaGF2ZSBhIHNoYXBlIGltcGxlbWVudGF0aW9uYCk7XHJcbiAgfVxyXG4gIHJldHVybiBzaGFwZUZuKG5vZGUpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZHJhdzogZHJhd1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2luZGV4LmpzIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcclxuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcclxuXHJcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xyXG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XHJcblxyXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHtcclxuXHJcbiAgY29tcGFydG1lbnQgKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDYwO1xyXG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDQwO1xyXG4gICAgY29uc3QgdUluZm9zID0gc2JnbkRhdGEuZ2V0VW5pdEluZm9zKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXHJcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXHJcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xyXG5cclxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBsaW5lU3ZnID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmdJbWFnZTogW2xpbmVTdmcsIHVJbmZvU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcyNSUnXSxcclxuICAgICAgYmdQb3NZOiBbJzE5cHgnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY29udGFpbicsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnMzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAnNCdcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJOb2RlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9jb250YWluZXJOb2Rlcy5qcyIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBzdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0aWYodHlwZW9mIGNhbnZhcy5nZXRDb250ZXh0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0cmV0dXJuICEhY29udGV4dCAmJiAodHlwZW9mIGNvbnRleHQubWVhc3VyZVRleHQgPT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBleHRlbmQoe1xuXHRcdFx0c3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0dmFyaWFudDogJ25vcm1hbCcsXG5cdFx0XHR3ZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRmYW1pbHk6ICdzYW5zLXNlcmlmJyxcblx0XHRcdGFsaWduOiAnc3RhcnQnLFxuXHRcdFx0YmFzZWxpbmU6ICdhbHBoYWJldGljJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIHNpemUgPSBvcHRpb25zLnNpemU7XG5cdFx0aWYodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSBzaXplID0gc2l6ZSArICdweCc7XG5cblx0XHRjb250ZXh0LmZvbnQgPSB1dGlsLmZvcm1hdCgnJXMgJXMgJXMgJXMgJXMnLFxuXHRcdFx0b3B0aW9ucy5zdHlsZSxcblx0XHRcdG9wdGlvbnMudmFyaWFudCxcblx0XHRcdG9wdGlvbnMud2VpZ2h0LFxuXHRcdFx0c2l6ZSxcblx0XHRcdG9wdGlvbnMuZmFtaWx5KTtcblx0XHRjb250ZXh0LnRleHRBbGlnbiA9IG9wdGlvbnMuYWxpZ247XG5cdFx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQoc3RyKS53aWR0aDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSB0cnVlO1xuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRlZCgpID8gaW5pdGlhbGl6ZSgpIDogKGZ1bmN0aW9uKCkge1xuXHR2YXIgd2lkdGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR3aWR0aC5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHdpZHRoO1xufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcclxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XHJcblxyXG5jb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcclxuY29uc3QgZ2V0VW5pdEluZm9zID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0VW5pdEluZm9zO1xyXG5jb25zdCBnZXRTdGF0ZVZhcnMgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5nZXRTdGF0ZVZhcnM7XHJcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XHJcblxyXG5jb25zdCBlbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xyXG5cclxuXHJcbmNvbnN0IGVudGl0eVBvb2xOb2RlcyA9IHtcclxuXHJcbiAgdW5zcGVjaWZpZWRFbnRpdHkgKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcclxuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcclxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcclxuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XHJcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XHJcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxyXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnSGVpZ2h0OiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcclxuICAgICAgYmdQb3NZOiBbJzEwMCUnLCAnOHB4JywgJzEwMCUnLCAnNDRweCcsICcwJSddLFxyXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcclxuICAgICAgYmdDbGlwOiAnbm9kZScsXHJcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgfTtcclxuXHJcbiAgfSxcclxuXHJcbiAgc2ltcGxlQ2hlbWljYWwgKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcclxuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcclxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcclxuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XHJcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxyXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnSGVpZ2h0OiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcxMnB4J10sXHJcbiAgICAgIGJnUG9zWTogWycxMDAlJywgJzhweCcsICcxMDAlJywgJzBweCddLFxyXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcclxuICAgICAgYmdDbGlwOiAnbm9kZScsXHJcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBtYWNyb21vbGVjdWxlKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcclxuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcclxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcclxuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XHJcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XHJcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcclxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxyXG4gICAgICBiZ0hlaWdodDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxyXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXHJcbiAgICAgIGJnUG9zWTogWycxMDAlJywgJzhweCcsICcxMDAlJywgJzQ0cHgnLCAnMCUnXSxcclxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07ICB9LFxyXG5cclxuICBudWNsZWljQWNpZEZlYXR1cmUgKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcclxuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcclxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcclxuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XHJcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XHJcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcclxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcclxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxyXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnSGVpZ2h0OiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcclxuICAgICAgYmdQb3NZOiBbJzEwMCUnLCAnOHB4JywgJzEwMCUnLCAnNDRweCcsICcwJSddLFxyXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcclxuICAgICAgYmdDbGlwOiAnbm9kZScsXHJcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBjb21wbGV4IChub2RlKSB7XHJcbiAgICBjb25zdCBpdGVtVyA9IDYwO1xyXG4gICAgY29uc3QgaXRlbUggPSAyNDtcclxuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcclxuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IFtdO1xyXG4gICAgY29uc3QgYmdXaWR0aCA9IFtdO1xyXG4gICAgY29uc3QgYmdQb3NYID0gW107XHJcbiAgICBjb25zdCBiZ1Bvc1kgPSBbXTtcclxuICAgIGNvbnN0IGJnRml0ID0gW107XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XHJcblxyXG4gICAgLy8gb3JkZXIgb2Ygc3ZnIGltYWdlIGdlbmVyYXRpb24gbWF0dGVyc1xyXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHRvcExpbmVTdmcgPSBzdmdTdHIoYmFzZVNoYXBlcy5saW5lKDAsIDAsIGl0ZW1XLCAwLCBzdHlsZSksIGl0ZW1XLCBpdGVtSCk7XHJcbiAgICAgIGltYWdlcy5wdXNoKHRvcExpbmVTdmcpO1xyXG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcclxuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XHJcbiAgICAgIGJnUG9zWS5wdXNoKCcxMXB4Jyk7XHJcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzQ2xvbmVtYXJrZXIobm9kZSkpIHtcclxuICAgICAgY29uc3QgYm90dG9tTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcclxuICAgICAgaW1hZ2VzLnB1c2goYm90dG9tTGluZVN2Zyk7XHJcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcclxuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xyXG4gICAgICBjb25zdCBjbG9uZVN2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGl0ZW1XLCBpdGVtSCAtIDMpLCBpdGVtVywgaXRlbUgpO1xyXG4gICAgICBpbWFnZXMucHVzaChjbG9uZVN2Zyk7XHJcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xyXG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcclxuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcclxuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1SW5mb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGl0ZW1XIC0gNSwgaXRlbUggLSAzLCB1SW5mb3NbMF0pLCBpdGVtVywgaXRlbUgpO1xyXG4gICAgICBpbWFnZXMucHVzaCh1SW5mb1N2Zyk7XHJcbiAgICAgIGJnUG9zWC5wdXNoKCcyNSUnKTtcclxuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XHJcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc1ZhcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHNWYXJzWzBdKSwgaXRlbVcsIGl0ZW1IKTtcclxuICAgICAgaW1hZ2VzLnB1c2goc1ZhclN2Zyk7XHJcbiAgICAgIGJnUG9zWC5wdXNoKCc4OCUnKTtcclxuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XHJcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZ0ltYWdlOiBpbWFnZXMsXHJcbiAgICAgIGJnV2lkdGg6IGJnV2lkdGgsXHJcbiAgICAgIGJnUG9zWDogYmdQb3NYLFxyXG4gICAgICBiZ1Bvc1k6IGJnUG9zWSxcclxuICAgICAgYmdGaXQ6IGJnRml0LFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzIycHgnLFxyXG4gICAgICBib3JkZXJXaWR0aDogNFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBzb3VyY2VBbmRTaW5rIChub2RlKSB7XHJcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGVsZW1lbnQuZGltZW5zaW9ucyhub2RlKTtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJYID0gbncgLyAyO1xyXG4gICAgY29uc3QgY2VudGVyWSA9IG5oIC8gMjtcclxuICAgIGNvbnN0IHJhZGl1cyA9IChudyAtIDIpIC8gMjtcclxuXHJcbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLWxpbmVjYXAnLCAnc3F1YXJlJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxyXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XHJcblxyXG4gICAgY29uc3Qgc2hhcGVBcmdzID0gW2NlbnRlclgsIGNlbnRlclksIHJhZGl1c107XHJcblxyXG4gICAgY29uc3Qgc291cmNlQW5kU2lua1N2ZyA9XHJcbiAgICBgXHJcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoLi4uc2hhcGVBcmdzLCBzdHlsZU1hcCl9XHJcbiAgICAgICR7aGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5jbG9uZU1hcmtlcihudywgbmgsIGJhc2VTaGFwZXMuY2lyY2xlLCBzaGFwZUFyZ3MpIDogJyd9XHJcbiAgICAgICR7YmFzZVNoYXBlcy5saW5lKDAsIG5oLCBudywgMCwgc3R5bGVNYXApfVxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gc3ZnU3RyKHNvdXJjZUFuZFNpbmtTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcclxuICB9LFxyXG5cclxuICBwZXJ0dXJiaW5nQWdlbnQgKG5vZGUpIHtcclxuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcclxuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcclxuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcclxuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XHJcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXHJcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXHJcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxyXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcclxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcclxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxyXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnSGVpZ2h0OiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXHJcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4J10sXHJcbiAgICAgIGJnUG9zWTogWycxMDAlJywgJzhweCcsICcxMDAlJywgJzAlJ10sXHJcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxyXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcclxuICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW50aXR5UG9vbE5vZGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2VudGl0eVBvb2xOb2Rlcy5qcyIsImNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcclxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XHJcblxyXG5jb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcclxuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XHJcblxyXG5jb25zdCBwcm9jZXNzTm9kZXMgPSB7XHJcblxyXG4gIGRpc3NvY2lhdGlvbiAobm9kZSkge1xyXG4gICAgY29uc3Qge3c6IG53LCBoOiBuaH0gPSBlbGVtZW50LmRpbWVuc2lvbnMobm9kZSk7XHJcblxyXG4gICAgY29uc3QgY2VudGVyWCA9IG53IC8gMjtcclxuICAgIGNvbnN0IGNlbnRlclkgPSBuaCAvIDI7XHJcbiAgICBjb25zdCBvdXRlclJhZGl1cyA9IChNYXRoLm1pbihudywgbmgpIC0gMikgLyAyO1xyXG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMztcclxuXHJcbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxyXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxyXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzInKVxyXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XHJcblxyXG4gICAgY29uc3QgZGlzc29jaWF0aW9uU3ZnID1cclxuICAgIGBcclxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBvdXRlclJhZGl1cywgc3R5bGVNYXApfVxyXG4gICAgICAke2Jhc2VTaGFwZXMuY2lyY2xlKGNlbnRlclgsIGNlbnRlclksIGlubmVyUmFkaXVzLCBzdHlsZU1hcCl9XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIHN2Z1N0cihkaXNzb2NpYXRpb25TdmcsIG53LCBuaCk7XHJcbiAgfSxcclxuXHJcbiAgcGhlbm90eXBlIChub2RlKSB7XHJcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcclxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcclxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XHJcblxyXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXHJcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxyXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxyXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgY2xvbmVNYXJrZXJTdmddLFxyXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJSddLFxyXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnXSxcclxuICAgICAgYmdQb3NZOiBbJzU2cHgnLCAnNTZweCddLFxyXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdub25lJ10sXHJcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxyXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzTm9kZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==