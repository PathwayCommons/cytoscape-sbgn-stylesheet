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
const svg = (str) => {
  let parser = new DOMParser();
  let svgText = 
  `
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='500' height='500'>
    ${str}
    </svg>
  `;
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svg2b64Str = (svg) => {
  let b64Data = btoa(svg.outerHTML);
  return `data:image/svg+xml;base64,${b64Data}`;
};

const svgUri = (node) => {
  const sourceAndSink = 
  `
    <path d="M200, 200 V200, 300"/>
  `;
  return svg2b64Str(svg(sourceAndSink));
};

module.exports = {
  points: points,
  svgUri: svgUri
};
