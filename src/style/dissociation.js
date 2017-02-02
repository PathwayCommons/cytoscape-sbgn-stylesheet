let svgb64Str = require('./svgUtil.js');


const svgUri = (node, strokeColor = 'grey' , edgeWidth = 2.3) => {
  let nodeCenterX = node.width() / 2;
  let nodeCenterY = node.height() / 2;
  let outerCircleRadius = (node.width() - 2) / 2;
  let innerCircleRadius = (node.width() - 2) / 3;
  const dissociation = 
  `
    <circle cx='${nodeCenterX}' cy='${nodeCenterY}' r='${outerCircleRadius}' fill='none' stroke='${strokeColor}' stroke-width='${edgeWidth}'  />
    <circle cx='${nodeCenterX}' cy='${nodeCenterY}' r='${innerCircleRadius}' fill='none' stroke='${strokeColor}' stroke-width='${edgeWidth}'  />

  `;
  return svgb64Str(dissociation, node.width(), node.height());
};

module.exports = {
  svgUri: svgUri
};