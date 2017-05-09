const svgStr = require('../util/svg').svgStr;
const sbgnData = require('../util/sbgn');


const auxiliaryItems = require('./auxiliaryItems');
const baseShapes = require('./baseShapes');

const containerNodes = {

  compartment (node) {
    const auxItemWidth = 60;
    const auxItemHeight = 40;
    const uInfos = sbgnData.getUnitInfos(node);

    const style = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', '6');

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.compoundUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight, uInfos[0]) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    let lineSvg = svgStr(
      uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    return [lineSvg, uInfoSvg]; // ordering of svg images matters
  }
};

module.exports = containerNodes;
