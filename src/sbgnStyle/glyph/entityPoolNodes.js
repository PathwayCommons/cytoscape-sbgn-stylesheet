const baseShapes = require('./baseShapes.js');
const auxiliaryItems = require('./auxiliaryItems.js');

const svgStr = require('../util/svg.js').svgStr;
const getUnitInfos = require('../util/sbgn.js').getUnitInfos;
const getStateVars = require('../util/sbgn.js').getStateVars;
const hasClonemarker = require('../util/sbgn.js').hasClonemarker;
const isMultimer = require('../util/sbgn.js').isMultimer;

const entityPoolNodes = {

  unspecifiedEntity (node) {
    const nw = node.width();
    const nh = node.height();

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
    const nw = node.outerWidth();
    const nh = node.outerHeight();


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

  macromolecule (node) {
    const nw = node.outerWidth();
    const nh = node.outerHeight();

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
    const nw = node.width();
    const nh = node.height();

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
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    let shapeArgs = [1, 1, nw - 2, nh - 2, 10];
    const multimerShapeArgs = [15, 15, .93*nw, .93*nh, 10];

    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    if (uInfos.length > 0) {
      shapeArgs[0] += 5;
      shapeArgs[1] += 10;
      shapeArgs[2] *= .95;
      shapeArgs[3] *= .9;
    }

    if (sVars.length > 0) {
      shapeArgs[3] = .85*nh;
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 10, .93*nw, .9*nh, 10];
    }

    const uinfoW = Math.min(100, 0.4*nw);
    const uinfoH = Math.min(25, 0.2*nh);
    const sVarRadius = 15;

    let complexSvg =
    `
      ${isMultimer(node) ? auxiliaryItems.multimer(baseShapes.cutRectangle, multimerShapeArgs) : ''}
      ${baseShapes.cutRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.cutRectangle, shapeArgs) : ''}
      ${uInfos.length > 0 ? auxiliaryItems.unitOfInformation((nw / 3), 1, uinfoW, uinfoH, uInfos[0]) : ''}
      ${sVars.length > 0 ? auxiliaryItems.stateVariable((2 * nw / 4), shapeArgs[3] + shapeArgs[1] - 5, sVarRadius, sVars[0]) : ''}
    `;
    return svgStr(complexSvg, nw, nh, 0, 0, nw, nh);
  },

  sourceAndSink (node) {
    const nw = node.width();
    const nh = node.height();

    const centerX = node.width() / 2;
    const centerY = node.height() / 2;
    const radius = (node.width() - 2) / 2;

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
    const nw = node.width();
    const nh = node.height();

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
