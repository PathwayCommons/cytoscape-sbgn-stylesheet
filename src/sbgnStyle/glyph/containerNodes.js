const svgStr = require('../util/svg.js').svgStr;
const sbgnData = require('../util/sbgn.js');

const auxiliaryItems = require('./auxiliaryItems.js');
const baseShapes = require('./baseShapes.js');

const containerNodes = {

  compartment (node) {
    const nh = node.outerHeight();
    const nw = node.outerWidth();

    const style = new Map()
      .set('stroke-width', '3.75')
      .set('fill', 'none')
      .set('stroke', '#6A6A6A');

    const unitInfos = sbgnData.getUnitInfos(node);
    const uinfoW = Math.min(100, 0.4*nw);
    const uinfoH = Math.min(25, 0.2*nh);

    let shapeArgs = [10, 5, nw - 20, nh - 10];

    if (unitInfos.length > 0) {
      shapeArgs = [10, (uinfoH / 2), nw - 20, nh - 10];
    }

    const compartmentSvg =
    `
      ${baseShapes.barrel(...shapeArgs, style)}
      ${unitInfos.length > 0 ? auxiliaryItems.unitOfInformation((nh / 3), 5, uinfoW, uinfoH, unitInfos[0]) : ''}
    `;
    return svgStr(compartmentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = containerNodes;
