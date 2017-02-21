const baseShapes = require('./baseShapes.js');
const auxillaryItems = require('./auxillaryItems.js');
const svgStr = require('../util/svg.js').svgStr;

const entityPoolNodes = {

  unspecifiedEntity (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    const shapeArgs = [nw / 2, nh / 2, ( nh - 2 ) / 2, ( nw - 2 ) / 2];

    let unspecEntitySvg =
    `
      ${baseShapes.ellipse(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.ellipse, shapeArgs) : ''}
    `;
    return svgStr(unspecEntitySvg, nw, nh, 0, 0, nw, nh);
  },

  simpleChemical (node) {
    let nw = node.width();
    let nh = node.height();

    let ow = node.outerWidth();
    let oh = node.outerHeight();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const hw = nw / 2;
    const hh = nh / 2;

    // let shapeArgs = [(ow - 3) / 2, (oh - 3) / 2, (Math.min(oh, ow) - 2 - 3) / 2];
    let shapeArgs = [(ow - 5) / 2, (oh - 5) / 2, (Math.min(oh, ow) - 2 - 5) / 2];

    // if (node.class.includes('multimer')) {
    //   shapeArgs = [nw / 3, nh / 3, Math.min(nw, nh) - 2 / 3];
    // }
    // shapeArgs = [hw, hh, (Math.min(nw, nh) - 2) / 2];

    const multimerArgs = [(ow + 3) / 2, (ow + 3) / 2, (Math.min(ow, oh) - 3) / 2];

    let simpleChemicalSvg =
    `
      ${node.data('class').includes('multimer') ? auxillaryItems.multimer(node, baseShapes.circle, shapeArgs) : ''}
      ${auxillaryItems.multimer(node, baseShapes.circle, multimerArgs)}
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.circle, shapeArgs) : ''}
      ${auxillaryItems.cloneMarker(node, baseShapes.circle, shapeArgs)}

    `;
    return svgStr(simpleChemicalSvg, ow, oh, 0, 0, ow, oh);
  },

  macromolecule (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    const shapeArgs = [0, 0, nw, nh];

    let macromoleculeSvg =
    `
      ${baseShapes.roundRectangle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.roundRectangle, shapeArgs) : ''}
    `;
    return svgStr(macromoleculeSvg, nw, nh, 0, 0, nw, nh);
  },

  nucleicAcidFeature (node) {
    let nw = node.width();
    let nh = node.height();

    let ow = node.outerWidth();
    let oh = node.outerHeight();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    const shapeArgs = [0, 0, nw, nh];

    let nucleicAcidFeatureSvg =
    `
      ${baseShapes.roundBottomRectangle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.roundBottomRectangle, shapeArgs) : ''}
    `;
    return svgStr(nucleicAcidFeatureSvg, ow, oh, 0, 0, ow, oh);
  },

  complex (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    const shapeArgs = [nw, nh];

    let complexSvg =
    `
      ${baseShapes.cutRectangle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.cutRectangle, shapeArgs) : ''}

    `;
    return svgStr(complexSvg, nw, nh, 0, 0, nw, nh);
  },

  sourceAndSink (node) {
    let centerX = node.width() / 2;
    let centerY = node.height() / 2;
    let radius = (node.width() - 2) / 2;

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-linecap', 'square')
    .set('stroke-width', '1.5')
    .set('fill', 'none');

    let shapeArgs = [centerX, centerY, radius];

    const sourceAndSinkSvg =
    `
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.circle, shapeArgs) : ''}
      ${baseShapes.line(0, node.height(), node.width(), 0, styleMap)}
    `;

    return svgStr(sourceAndSinkSvg, node.width(), node.height(), 0, 0, node.width(), node.height());
  },

  perturbingAgent (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    let shapeArgs = [nw, nh];

    let perturbingAgentSvg =
    `
      ${baseShapes.concaveHexagon(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.concaveHexagon, shapeArgs) : ''}

    `;
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;