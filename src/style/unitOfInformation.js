let svgb64Str = require('./svgUtil.js');


const pointOnNodePerimeter = (x, y, node) => {
  return ( ( x === 0 || x === node.width() ) && ( 0 <= y <= node.height() ) )
   || ( ( y === 0 || y === node.height() ) && ( 0 <= x <= node.width() ) ); 
};

const place = (label, x, y, width, height) => {
  let unitOfInfo = 
  `
  <rect fill='black' stroke='black' x='${x}' y='${y}' width='${width}' height='${height}' />
  <text x='50%' y='50%' text-anchor='middle' stroke='black' stroke-width='1px'>${label}</text>

  `;
  return svgb64Str(unitOfInfo, 2*width, 2*height, 0, 0, 100, 100);
};

module.exports = {
  place: place
};
