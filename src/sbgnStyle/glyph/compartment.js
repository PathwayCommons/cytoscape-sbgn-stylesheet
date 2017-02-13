let baseShapes = require('./baseShapes.js');

let svgb64Str = require('../util/svg.js');
let unitOfInfo = require('./unitOfInformation.js');
// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD4  | QUAD3
// (-, +) |  (+, +)
const quad1 = '-1, -0.9, -0.95, -0.95, -0.33, -1';

const quad2 = '0.33, -1, 0.9, -0.95, 1, -0.9';

const quad3 = '1, 0.9, 0.95, 0.95, 0.33, 1';

const quad4 = '-0.33, 1, -0.95, 0.95, -1, 0.9';

const points = () => {
  return `${quad1}, ${quad2}, ${quad3}, ${quad4}`;
};

const svgUri = (node, borderWidth = 3.75) => {

  let nh = node.outerHeight();
  let nw = node.outerWidth();

  let uInfo = '';

  if (node.data('statesandinfos').length > 0) {
    const info = node.data('statesandinfos')[0].label.text; // fragile
    uInfo = unitOfInfo.place(info, 0, nh / 2, .1*nw, 0.05*nw, nw, nh);
  }

  let style = new Map()
    .set('stroke-width', borderWidth)
    .set('fill', 'none')
    .set('stroke', '#6A6A6A');

  const compartment =
  `
  ${baseShapes.barrel(nw, nh, style)}
  ${uInfo}
  `;

  return svgb64Str(compartment, nw, nh, 0, 0, nw, nh);
};

module.exports = {
  points: points,
  svgUri: svgUri
};
