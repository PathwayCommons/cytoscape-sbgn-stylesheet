let svgb64Str = require('./svgUtil.js');
// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD3  | QUAD4
// (+, +) |  (-, +)
const quad1 = '-1, -0.9, -0.95, -0.95, -0.33, -1';

const quad2 = '0.33, -1, 0.95, -0.95, 1, -0.9';

const quad3 = '1, 0.9, 0.95, 0.95, 0.33, 1';

const quad4 = '-0.33, 1, -0.95, 0.95, -1, 0.9';


const points = () => {
  return `${quad1}, ${quad2}, ${quad3}, ${quad4}`;
};

const svgUri = (node, borderWidth = 3.75) => {
  const compartment =
  `
    <rect width="${node.width()}" height="${node.height()}" fill="none" stroke="black" stroke-width="${borderWidth}" />
  `;
  return svgb64Str(compartment, node.width(), node.height());
};

module.exports = {
  points: points,
  svgUri: svgUri
};
