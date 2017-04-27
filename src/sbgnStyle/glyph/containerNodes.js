const svgStr = require('../util/svg').svgStr;
const sbgnData = require('../util/sbgn');


const auxiliaryItems = require('./auxiliaryItems');
const baseShapes = require('./baseShapes');

const containerNodes = {

  compartment (node) {
    const nw = 60;
    const nh = 40;
    const uInfos = sbgnData.getUnitInfos(node);

    const style = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', '6');

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.compoundUnitOfInformation(2, 0, nw - 5, nh, uInfos[0]) : '',
      nw, nh, 0, 0, nw, nh
    );

    let lineSvg = svgStr(
      uInfos.length > 0 ? baseShapes.line(0, 0, nw, 0, style) : '',
      nw, nh, 0, 0, nw, nh
    );

    return [lineSvg, uInfoSvg]; // ordering of svg images matters
  }
};

module.exports = containerNodes;
