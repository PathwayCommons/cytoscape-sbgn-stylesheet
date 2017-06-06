const memoize = require('lodash.memoize');

const baseShapes = require('./baseShapes');
const auxiliaryItems = require('./auxiliaryItems');

const svgStr = require('../util/svg').svgStr;
const getUnitInfos = require('../util/sbgn').getUnitInfos;
const getStateVars = require('../util/sbgn').getStateVars;
const hasClonemarker = require('../util/sbgn').hasClonemarker;
const isMultimer = require('../util/sbgn').isMultimer;
const element = require('../element');


const entityPoolNodes = {

  unspecifiedEntity (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    let shapeArgs = [nw / 2, nh / 2, ( nh - 2 ) / 2, ( nw - 2 ) / 2];

    let unspecEntitySvg =
    `
      ${baseShapes.ellipse(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.ellipse, shapeArgs) : ''}
    `;
    return svgStr(unspecEntitySvg, nw, nh, 0, 0, nw, nh);
  },

  simpleChemical (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const multimerShapeArgs = [(nw + 3) / 2, (nh + 3) / 2, (Math.min(nw, nh) - 2 - 5) / 2];
    let shapeArgs = [(nw) / 2, (nh) / 2, (Math.min(nh, nw) - 2) / 2];

    const uInfos = getUnitInfos(node);
    if (uInfos.length > 0) {
      shapeArgs = [(nw) / 2, (nh) / 2, (Math.min(nh, nw) - 2  - 5) / 2];
    }

    if (isMultimer(node)) {
      shapeArgs = [(nw - 3) / 2, (nh - 3) / 2, (Math.min(nh, nw) - 2 - 7) / 2];
    }

    const simpleChemicalSvg =
    `
      ${isMultimer(node) ? auxiliaryItems.multimer(baseShapes.circle, multimerShapeArgs) : ''}
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
      ${uInfos.length > 0 ? auxiliaryItems.unitOfInformation((nw / 2), 1, 0.4*nw, 0.2*nh, uInfos[0]) : ''}
    `;

    return svgStr(simpleChemicalSvg, nw, nh, 0, 0, nw, nh);
  },

  macromolecule(node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const multimerShapeArgs = [15, 10, .8*nw, .8*nh];
    let shapeArgs = [5, 5, nw - 10, nh - 10];

    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    if (uInfos.length > 0) {
      shapeArgs = [5, 5, .9*nw, .9*nh];
    }

    if (sVars.length > 0) {
      shapeArgs[3] = .85*nh;
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 5, .83*nw, .78*nh];
    }

    let macromoleculeSvg =
    `
      ${isMultimer(node) ? auxiliaryItems.multimer(baseShapes.roundRectangle, multimerShapeArgs) : ''}
      ${baseShapes.roundRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.roundRectangle, shapeArgs) : ''}
      ${uInfos.length > 0 ? auxiliaryItems.unitOfInformation((nw / 3), 1, 0.4*nw, 0.2*nh, uInfos[0]) : ''}
      ${sVars.length > 0 ? auxiliaryItems.stateVariable((2 * nw / 4), nh - (0.225*nh / 2), 0.1*nh, sVars[0]) : ''}
    `;
    return svgStr(macromoleculeSvg, nw, nh, 0, 0, nw, nh);
  },

  nucleicAcidFeature (node) {
    const {w: nw, h: nh} = element.dimensions(node);


    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const multimerShapeArgs = [15, 10, .8*nw, .8*nh];
    let shapeArgs = [1.5, 1.5, nw - 3, nh - 3];

    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    if (uInfos.length > 0) {
      shapeArgs = [5, 5, .9*nw, .88*nh];
    }

    if (sVars.length > 0) {
      shapeArgs[3] = .85*nh;
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 5, .83*nw, .78*nh];
    }

    let nucleicAcidFeatureSvg =
    `
      ${isMultimer(node) ? auxiliaryItems.multimer(baseShapes.roundBottomRectangle, multimerShapeArgs) : ''}
      ${baseShapes.roundBottomRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.roundBottomRectangle, shapeArgs) : ''}
      ${uInfos.length > 0 ? auxiliaryItems.unitOfInformation((nw / 3), 1, 0.4*nw, 0.2*nh, uInfos[0]) : ''}
      ${sVars.length > 0 ? auxiliaryItems.stateVariable((2 * nw / 4), nh - (0.225*nh / 2), 0.1*nh, sVars[0]) : ''}
    `;
    return svgStr(nucleicAcidFeatureSvg, nw, nh, 0, 0, nw, nh);
  },

  complex (node) {
    const auxItemWidth = 60;
    const auxItemHeight = 24;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', '6');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.compoundCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.compoundUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight, uInfos[0]) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.compoundStateVar(2, 0, auxItemWidth - 5, auxItemHeight, sVars[0]) : '',
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
  },

  sourceAndSink (node) {
    const {w: nw, h: nh} = element.dimensions(node);


    const centerX = nw / 2;
    const centerY = nh / 2;
    const radius = (nw - 2) / 2;

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-linecap', 'square')
    .set('stroke-width', '1.5')
    .set('fill', 'none');

    const shapeArgs = [centerX, centerY, radius];

    const sourceAndSinkSvg =
    `
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
      ${baseShapes.line(0, nh, nw, 0, styleMap)}
    `;

    return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
  },

  perturbingAgent (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    let shapeArgs = [1, 1, nw - 4, nh - 2];

    const uInfos = getUnitInfos(node);

    if (uInfos.length > 0) {
      shapeArgs = [5, 5, .9*nw, .9*nh];
    }

    const perturbingAgentSvg =
    `
      ${baseShapes.concaveHexagon(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.concaveHexagon, shapeArgs) : ''}
      ${uInfos.length > 0 ? auxiliaryItems.unitOfInformation((nw / 3), 1, 0.4*nw, 0.2*nh, uInfos[0]) : ''}
    `;
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;
