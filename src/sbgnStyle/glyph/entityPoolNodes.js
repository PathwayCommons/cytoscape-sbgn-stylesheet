const baseShapes = require('./baseShapes.js');
const auxillaryItems = require('./auxillaryItems.js');
const svgStr = require('../util/svg.js').svgStr;

const isMultimer = (node) => node.data('class').includes('multimer');


const hasClonemarker = (node) => node.data('clonemarker');


const hasStateAndInfos = (node) => (node.data('statesandinfos') && node.data('statesandinfos').length > 0);

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
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.ellipse, shapeArgs) : ''}
    `;
    return svgStr(unspecEntitySvg, nw, nh, 0, 0, nw, nh);
  },

  simpleChemical (node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const multimerShapeArgs = [(nw + 3) / 2, (nh + 3) / 2, (Math.min(nw, nh) - 2 - 5) / 2];
    let shapeArgs = [(nw) / 2, (nh) / 2, (Math.min(nh, nw) - 2) / 2];

    if (isMultimer(node)) {
      shapeArgs = [(nw - 3) / 2, (nh - 3) / 2, (Math.min(nh, nw) - 2 - 7) / 2];
    }

    const simpleChemicalSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(node, baseShapes.circle, multimerShapeArgs) : ''}
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
    `;

    return svgStr(simpleChemicalSvg, nw, nh, 0, 0, nw, nh);
  },

  macromolecule (node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    let shapeArgs = [0, 0, nw, nh];
    const multimerShapeArgs = [5, 5, .9*nw, .9*nh];


    if (isMultimer(node)) {
      shapeArgs = [0, 0, .9*nw, .9*nh];
    }

    let macromoleculeSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(node, baseShapes.roundRectangle, multimerShapeArgs) : ''}
      ${baseShapes.roundRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.roundRectangle, shapeArgs) : ''}
    `;
    return svgStr(macromoleculeSvg, nw, nh, 0, 0, nw, nh);
  },

  nucleicAcidFeature (node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none')
    .set('fill', 'white')
    .set('fill-opacity', '1');


    let shapeArgs = [0, 0, nw, nh];
    const multimerShapeArgs = [5, 5, .9*nw, .9*nh];

    if (isMultimer(node)) {
      shapeArgs = [0, 0, .9*nw, .9*nh];
    }

    let nucleicAcidFeatureSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(node, baseShapes.roundBottomRectangle, multimerShapeArgs) : ''}
      ${baseShapes.roundBottomRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.roundBottomRectangle, shapeArgs) : ''}
    `;
    return svgStr(nucleicAcidFeatureSvg, nw, nh, 0, 0, nw, nh);
  },

  complex (node) {
    let ow = node.outerWidth();
    let oh = node.outerHeight();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    let shapeArgs = [0, 0, ow, oh];
    const multimerShapeArgs = [10, 10, .93*ow, .93*oh];

    if (isMultimer(node)) {
      shapeArgs = [2, 2, .93*ow, .93*oh];
    }

    let complexSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(node, baseShapes.cutRectangle, multimerShapeArgs) : ''}
      ${baseShapes.cutRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(ow, oh, baseShapes.cutRectangle, shapeArgs) : ''}

    `;
    return svgStr(complexSvg, ow, oh, 0, 0, ow, oh);
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
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
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

    const shapeArgs = [0, 0, nw, nh];

    const perturbingAgentSvg =
    `
      ${baseShapes.concaveHexagon(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.concaveHexagon, shapeArgs) : ''}

    `;
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;