const svgStr = require('../util/svg').svgStr;
const sbgnData = require('../util/sbgn');
const memoize = require('lodash.memoize');

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
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '',
      auxItemWidth, auxItemHeight
    );

    let lineSvg = svgStr(
      uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    return {
      bgImage: [lineSvg, uInfoSvg],
      bgWidth: ['100%'],
      bgPosX: ['0%', '25%'],
      bgPosY: ['19px', '0%'],
      bgFit: ['contain', 'none'],
      bgClip: 'node',
      padding: '38px',
      borderWidth: '4'
    };
  }
};

module.exports = containerNodes;
