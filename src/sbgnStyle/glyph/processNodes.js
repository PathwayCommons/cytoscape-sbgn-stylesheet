const baseShapes = require('./baseShapes');
const auxiliaryItems = require('./auxiliaryItems');

const svgStr = require('../util/svg').svgStr;
const hasClonemarker = require('../util/sbgn').hasClonemarker;

const element = require('../element');

const processNodes = {

  dissociation (node) {
    const {w: nw, h: nh} = element.dimensions(node);

    const centerX = nw / 2;
    const centerY = nh / 2;
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
    return svgStr(dissociationSvg, nw, nh);
  },

  phenotype (node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight
    );

    return {
      bgImage: [bottomLine, cloneMarkerSvg],
      bgWidth: ['100%', '100%'],
      bgPosX: ['0%', '0%'],
      bgPosY: ['56px', '56px'],
      bgFit: ['cover', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  }
};

module.exports = processNodes;
