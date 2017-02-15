const baseShapes = require('./baseShapes.js');
const svgStr = require('../util/svg.js');

const entityPoolNodes = {

  unspecifiedEntity (node) {
    let nw = node.width();
    let nh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    let unspecEntitySvg =
    `
      ${baseShapes.ellipse(nw / 2, nh / 2, ( nh - 2 ) / 2, ( nw - 2 ) / 2, styleMap)}
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

    let simpleChemicalSvg =
    `
      ${baseShapes.circle(nw / 2, nh / 2, (Math.min(nw, nh) - 2) / 2, styleMap)}
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

    let macromoleculeSvg =
    `
      ${baseShapes.roundRectangle(0, 0, nw, nh, styleMap)}
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

    let nucleicAcidFeatureSvg =
    `
      ${baseShapes.roundBottomRectangle(0, 0, nw, nh, styleMap)}
    `;
    return svgStr(nucleicAcidFeatureSvg, nw, nh, 0, 0, nw, nh);
  },

  complex (node) {
    let nw = node.outerWidth();
    let nh = node.outerHeight();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    let complexSvg =
    `
      ${baseShapes.cutRectangle(nw, nh, styleMap)}
    `;
    return svgStr(complexSvg, nw, nh, 0, 0, nw, nh);
  },

  sourceAndSink (node) {
    let nodeCenterX = node.width() / 2;
    let nodeCenterY = node.height() / 2;
    let circleRadius = (node.width() - 2) / 2;

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-linecap', 'square')
    .set('stroke-width', '1.5')
    .set('fill', 'none');

    const sourceAndSinkSvg =
    `
      ${baseShapes.circle(nodeCenterX, nodeCenterY, circleRadius, styleMap)}
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

    let perturbingAgentSvg =
    `
      ${baseShapes.concaveHexagon(nw, nh, styleMap)}
    `;
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;