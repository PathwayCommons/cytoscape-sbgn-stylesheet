const baseShapes = require('./baseShapes.js');
const svgStr = require('../util/svg.js').svgStr;

const auxiliaryItems = require('./auxiliaryItems.js');
const hasStateAndInfos = require('../util/sbgn.js').hasStateAndInfos;

const randomAuxText = () => {
  const texts = ['P', '2P', 'active', 'e:INFO', 'longthingylong', '@T287', 'P@S334'];
  return texts[Math.floor((Math.random() * texts.length))];
};

const containerNodes = {

  compartment (node) {
    const nh = node.outerHeight();
    const nw = node.outerWidth();

    const style = new Map()
      .set('stroke-width', '3.75')
      .set('fill', 'none')
      .set('stroke', '#6A6A6A');

    const uinfoW = Math.min(100, 0.4*nw);
    const uinfoH = Math.min(25, 0.2*nh);

    let shapeArgs = [2, 2, nw - 3, nh - 3];

    if (hasStateAndInfos(node)) {
      shapeArgs = [2, uinfoH / 2, nw*.95, nh*.9];
    }

    const compartmentSvg =
    `
      ${baseShapes.barrel(...shapeArgs, style)}
      ${hasStateAndInfos(node) ? auxiliaryItems.unitOfInformation((nh / 3) - (uinfoW / 2), 1, uinfoW, uinfoH, randomAuxText()) : ''}
    `;
    return svgStr(compartmentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = containerNodes;