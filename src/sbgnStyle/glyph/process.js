let svgb64Str = require('../util/svg.js');
// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD4  | QUAD3
// (-, +) |  (+, +)
const quad1 = '-1, -0.05, -0.33, -0.05, -0.33, -0.33';

const quad2 = '0.33, -0.33, 0.33, -0.05, 1, -0.05';

const quad3 = '1, 0.05, 0.33, 0.05, 0.33, 0.33';

const quad4 = '-0.33, 0.33, -0.33, 0.05, -1, 0.05';

const points = () => {
  return `${quad1}, ${quad2}, ${quad3}, ${quad4}`;
};

const svgUri = (node, borderWidth = 3.75) => {

  let nh = node.outerHeight();
  let nw = node.outerWidth();

  const proc =
  `
  <rect fill='white' stroke='black' x='${0}' y='${0}' width='${nw}' height='${nh}' />
  `;

  return svgb64Str(proc, nw, nh, 0, 0, nw, nh);
};

module.exports = {
  points: points,
  svgUri: svgUri
};
