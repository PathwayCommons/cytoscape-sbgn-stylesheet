const baseShapes = require('./baseShapes.js');
const svgStr = require('../util/svg.js').svgStr;

const containerNodes = {

  compartment (node) {
    const nh = node.outerHeight();
    const nw = node.outerWidth();

    const style = new Map()
      .set('stroke-width', '3.75')
      .set('fill', 'none')
      .set('stroke', '#6A6A6A');

    const compartmentSvg =
    `
      ${baseShapes.barrel(nw, nh, style)}
    `;
    return svgStr(compartmentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = containerNodes;