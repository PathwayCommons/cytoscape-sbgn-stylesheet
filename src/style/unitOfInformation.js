const pointOnNodePerimeter = (x, y, node) => {
  return ( ( x === 0 || x === node.width() ) && ( 0 <= y <= node.height() ) )
   || ( ( y === 0 || y === node.height() ) && ( 0 <= x <= node.width() ) ); 
};

const place = (label, x, y, width, height, vpWidth, vpHeight) => {
  return `
  <svg prserveAspectRatio='xMidYMin meet' width='${vpWidth}' height='${vpHeight}' viewBox='0 0 ${vpWidth} ${vpHeight}'>
    <rect fill='white' stroke='black' x='${x}' y='${y}' width='${width}' height='${height}' />
    <text text-anchor='middle' x='${x + (width/2)}' y='${height/2}'>${label}</text>
  </svg>
  `;
};

module.exports = {
  place: place
};
