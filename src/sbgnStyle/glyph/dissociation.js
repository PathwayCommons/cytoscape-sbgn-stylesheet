let svgb64Str = require('../util/svg.js');
let baseShapes = require('./baseShapes.js');

const svgUri = (node, strokeColor = 'grey' , edgeWidth = 2.3) => {
  let nodeCenterX = node.width() / 2;
  let nodeCenterY = node.height() / 2;
  let outerCircleRadius = (node.width() - 2) / 2;
  let innerCircleRadius = (node.width() - 2) / 3;

  let style = new Map()
  .set('fill', 'none')
  .set('stroke', strokeColor)
  .set('stroke-width', edgeWidth);

  const dissociation = 
  `
    ${baseShapes.circle(nodeCenterX, nodeCenterY, outerCircleRadius, style)}
    ${baseShapes.circle(nodeCenterY, nodeCenterY, innerCircleRadius, style)}
  `;
  return svgb64Str(dissociation, node.width(), node.height(), 0, 0, node.width(), node.height());
};

module.exports = {
  svgUri: svgUri
};