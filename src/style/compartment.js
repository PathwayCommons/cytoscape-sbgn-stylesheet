let svgb64Str = require('./svgUtil.js');
// QUAD1  |  QUAD2
// (-, -) |  (+, -)
// -------------
// QUAD4  | QUAD3
// (-, +) |  (+, +)
const quad1 = '-1, -0.9, -0.95, -0.95, -0.33, -1';

const quad2 = '0.33, -1, 0.9, -0.93, 1, -0.85';

const quad3 = '1, 0.8, 0.9, 0.89, 0.33, 1';

const quad4 = '-0.33, 1, -0.9, 0.9, -1, 0.8';



const points = () => {
  return `${quad1}, ${quad2}, ${quad3}, ${quad4}`;
};

const svgUri = (node, borderWidth = 3.75) => {

  let nh = node.height();
  let nw = node.width();

  const compartment =
  `
  <g style="stroke: #6A6A6A; fill: none; stroke-width: ${borderWidth};">
    <path d="M ${0*nw} ${.03*nh} L ${0*nw} ${.97*nh} Q ${0.06*nw} ${nh} ${0.25*nw} ${nh}"/>
    
    <path d="M ${0.25*nw} ${nh} L ${0.75*nw} ${nh} Q ${0.93*nw} ${nh} ${nw} ${.97*nh}"/>

    <path d="M ${nw} ${.97*nh} L ${nw} ${0.03*nh} Q ${0.97*nw} ${0*nh} ${0.75*nw} ${0*nh}"/>

    <path d="M ${0.75*nw} ${0*nh} L ${0.25*nw} ${0*nh} Q ${0.06*nw} ${0*nh} ${0*nw} ${0.03*nh}"/>
  </g>
  `;

  return svgb64Str(compartment, nw, nh, 0, 0, nw, nh);
};

module.exports = {
  points: points,
  svgUri: svgUri
};
