const baseShapes = require('./baseShapes.js');
const svgStr = require('../util/svg.js');

const processNodes = {

  process(node) {
    const nw = node.width();
    const nh = node.height();

    const lineStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1')
    .set('fill', 'none');

    const squareStyle = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const line = baseShapes.line(0, nh / 2, nw, nh / 2, lineStyle);

    const processSvg =
    `
      ${baseShapes.square(0.1*nw, 0.1*nh, 0.8*Math.max(nw, nh), squareStyle)}
    `;
    return svgStr(processSvg, nw, nh, 0, 0, nw, nh);
  },

  association(node) {
    const nw = node.width();
    const nh = node.height();

    const centerX = nw / 2;
    const centerY = nh / 2;
    const radius = (Math.min(nw, nh) - 2) / 2;

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', '#6A6A6A');

    const line = baseShapes.line(0, nh / 2, nw, nh / 2, styleMap);

    const associationSvg =
    `
      ${baseShapes.circle(centerX, centerY, radius, styleMap)}
    `;
    return svgStr(associationSvg, nw, nh, 0, 0, nw, nh);
  },

  dissociation(node) {
    const nw = node.width();
    const nh = node.height();

    const centerX = node.width() / 2;
    const centerY = node.height() / 2;
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
    return svgStr(dissociationSvg, nw, nh, 0, 0, nw, nh);
  },

  phenotype(node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '3')
    .set('fill', 'none');

    let phenotypeSvg =
    `
      ${baseShapes.hexagon(nw, nh, styleMap)}
    `;
    return svgStr(phenotypeSvg, nw, nh, 0, 0, nw, nh);
  }
};

const processMap = new Map()
.set('process', processNodes.process)
.set('omitted process', processNodes.process)
.set('uncertain process', processNodes.process)
.set('association', processNodes.association)
.set('dissociation', processNodes.dissociation)
.set('phenotype', processNodes.phenotype);

const draw = (node) => {
  return processMap.get(node.data('class'))(node) || '';
};

module.exports = {
  draw: draw
};