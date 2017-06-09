const baseShapes = require('./baseShapes');
const auxiliaryItems = require('./auxiliaryItems');

const svgStr = require('../util/svg').svgStr;
const hasClonemarker = require('../util/sbgn').hasClonemarker;
const getUnitInfos = require('../util/sbgn').getUnitInfos;
const getStateVars = require('../util/sbgn').getStateVars;

const element = require('../element');

const processNodes = {

  process (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const squareStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    const processSvg =
    `
      ${baseShapes.square(1, 1, Math.min(nw, nh) - 2, squareStyle)}
    `;
    return svgStr(processSvg, nw, nh);
  },

  association (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const centerX = nw / 2;
    const centerY = nh / 2;
    const radius = (Math.min(nw, nh) - 2) / 2;

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', '#6A6A6A')
    .set('fill-opacity', '0');

    const associationSvg =
    `
      ${baseShapes.circle(centerX, centerY, radius, styleMap)}
    `;
    return svgStr(associationSvg, nw, nh);
  },

  dissociation (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const centerX = nw / 2;
    const centerY = nh / 2;
    const outerRadius = (Math.min(nw, nh) - 2) / 2;
    const innerRadius = (Math.min(nw, nh) - 2) / 3;

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    const dissociationSvg =
    `
      ${baseShapes.circle(centerX, centerY, outerRadius, styleMap)}
      ${baseShapes.circle(centerX, centerY, innerRadius, styleMap)}
    `;
    return svgStr(dissociationSvg, nw, nh);
  },

  phenotype (node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;
    const borderWidth = 2;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    return [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg]; // ordering of svg images matters
  }
};

module.exports = processNodes;
