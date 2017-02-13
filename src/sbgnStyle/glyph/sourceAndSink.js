let svgb64Str = require('../util/svg.js');
let baseShapes = require('./baseShapes.js');

// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD4  | QUAD3
// (-, +) |  (+, +)
const quad1 = '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1';

const quad2 = '0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0';

const quad3 = '0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1';

const quad4 = '-0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0,';

const points = () => {
  return `${quad1}, ${quad2}, ${quad3}, ${quad4}`;
};

const svgUri = (node, strokeColor = 'grey' , edgeWidth = 1) => {
  let cloneMarker = '';
  let clipPath = '';

  let nodeCenterX = node.width() / 2;
  let nodeCenterY = node.height() / 2;
  let circleRadius = (node.width() - 2) / 2;

  if (node.data('clonemarker')) {
    clipPath = `
    <defs>
      <clipPath id="cut-off-bottom">
        <rect x="0" y="${2 * node.height() / 3}" width="${node.width()}" height="${node.width()}" />
      </clipPath>
    </defs>
    `;
    cloneMarker = `
    <circle cx="${nodeCenterX}" cy="${nodeCenterY}" r="${circleRadius}" fill='#D2D2D2' stroke='grey' clip-path="url(#cut-off-bottom)" />
    `;
  }

  let style = new Map()
  .set('fill', 'none')
  .set('stroke', strokeColor)
  .set('stroke-width', edgeWidth);

  const sourceAndSink = 
  `
    ${baseShapes.circle(nodeCenterX, nodeCenterY, circleRadius, style)}
    ${clipPath}
    ${cloneMarker}
    ${baseShapes.line(0, node.height(), node.width(), 0, style)}
  `;

  return svgb64Str(sourceAndSink, node.width(), node.height(), 0, 0, node.width(), node.height());
};

module.exports = {
  svgUri: svgUri,
  points: points
};
