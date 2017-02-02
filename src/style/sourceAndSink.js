let svgb64Str = require('./svgUtil.js');

// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD3  | QUAD4
// (+, +) |  (-, +)
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
  if (node.data('clonemarker')) {
    clipPath = `
    <defs>
      <clipPath id="cut-off-bottom">
        <rect x="130" y="300" width="300" height="200" />
      </clipPath>
    </defs>
    `;
    cloneMarker = `
    <circle cx="250" cy="250" r="150" fill='#D2D2D2' stroke='grey' clip-path="url(#cut-off-bottom)" />
    `;
  }

  const sourceAndSink = 
  `
    ${clipPath}
    <circle cx='${node.width() / 2}' cy='${node.height() / 2}' r='${(node.width() - 2) / 2}' fill='none' stroke='${strokeColor}' stroke-width='${edgeWidth}'  />
    ${cloneMarker}
    <line x1='0' y1='${node.height()}' x2='${node.width()}' y2='0' stroke-width='${edgeWidth}' stroke='${strokeColor}'/>
  `;
  return svgb64Str(sourceAndSink, node.width(), node.height());
};

module.exports = {
  svgUri: svgUri,
  points: points
};
