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
      ${auxillaryItems.cloneMarker(node, baseShapes.ellipse, shapeArgs)}

    `;
    return svgStr(unspecEntitySvg, nw, nh, 0, 0, nw, nh);
  },

  simpleChemical (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    const shapeArgs = [nw / 2, nh / 2, (Math.min(nw, nh) - 2) / 2];

    let simpleChemicalSvg =
    `
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.circle, shapeArgs) : ''}
      ${auxillaryItems.cloneMarker(node, baseShapes.circle, shapeArgs)}

    `;
    return svgStr(simpleChemicalSvg, nw, nh, 0, 0, nw, nh);
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
      ${auxillaryItems.cloneMarker(node, baseShapes.roundRectangle, shapeArgs)}
    `;
    return svgStr(macromoleculeSvg, nw, nh, 0, 0, nw, nh);
  },

  nucleicAcidFeature (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    const shapeArgs = [0, 0, nw, nh];

    let nucleicAcidFeatureSvg =
    `
      ${baseShapes.roundBottomRectangle(...shapeArgs, styleMap)}
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(node, baseShapes.roundBottomRectangle, shapeArgs) : ''}
      ${auxillaryItems.cloneMarker(node, baseShapes.roundBottomRectangle, shapeArgs)}


    `;
    return svgStr(nucleicAcidFeatureSvg, nw, nh, 0, 0, nw, nh);
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
      ${auxillaryItems.cloneMarker(node, baseShapes.cutRectangle, shapeArgs)}

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
      ${node.data('clonemarker') ? auxillaryItems.cloneMarker(baseShapes.circle, shapeArgs) : ''}
      ${auxillaryItems.cloneMarker(node, baseShapes.circle, shapeArgs)}
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
      ${auxillaryItems.cloneMarker(node, baseShapes.concaveHexagon, shapeArgs)}

    `;
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;