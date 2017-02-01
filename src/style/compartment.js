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
const svg = (str, width = 100, height = 100) => {
  let parser = new DOMParser();
  let svgText = 
  `
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='${width}' height='${height}'>
    ${str}
    </svg>
  `;
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svg2b64Str = (svg) => {
  let b64Data = btoa(svg.outerHTML);
  return `data:image/svg+xml;base64,${b64Data}`;
};

const svgUri = (node, borderWidth = 3.75) => {
  const compartment =
  `
    <rect width="${node.width()}" height="${node.height()}" fill="none" stroke="black" stroke-width="${borderWidth}" />
  `;
  return svg2b64Str(svg(compartment, node.width(), node.height()));
};

module.exports = {
  points: points,
  svgUri: svgUri
};
