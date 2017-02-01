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

const svgUri = (node, strokeColor = 'grey' , edgeWidth = 7) => {
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
    <circle cx='250' cy='250' r='150' fill='none' stroke='${strokeColor}' stroke-width='${edgeWidth}'  />
    ${cloneMarker}
    <line x1='100' y1='400' x2='400' y2='100' stroke-width='${edgeWidth}' stroke='${strokeColor}'/>
  `;
  return svg2b64Str(svg(sourceAndSink));
};

module.exports = {
  svgUri: svgUri,
  points: points
};
