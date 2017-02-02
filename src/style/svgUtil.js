const parser = new DOMParser();


const svg = (str, width = 100, height = 100) => {
  let svgText = 
  `
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='${width}' height='${height}'>
    ${str}
    </svg>
  `;
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svgb64Str = (svgText, viewPortWidth, viewPortHeight) => {
  let svgEl = svg(svgText, viewPortWidth, viewPortHeight);
  let b64Data = `data:image/svg+xml;base64,${btoa(svgEl.outerHTML)}`;

  return b64Data;
};

module.exports = svgb64Str;