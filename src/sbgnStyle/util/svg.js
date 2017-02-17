const styleMap2Str = (styleMap) => {
  return `${[...styleMap].map(([k, v]) => `${k}: ${v};`).join(' ')}`;
};

const svg = (svgStr, width = 100, height = 100, vbX = 0, vbY = 0, vbWidth = 100, vbHeight = 100) => {
  const parser = new DOMParser();
  let svgText =
  `
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='${width}' height='${height}' viewBox='${vbX} ${vbY} ${vbWidth} ${vbHeight}'>
    ${svgStr}
    </svg>
  `;
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svgb64Str = (svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) => {
  let svgEl = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);
  let b64Data = `data:image/svg+xml;base64,${btoa(svgEl.outerHTML)}`;

  return b64Data;
};

module.exports = {
  svgStr: svgb64Str,
  styleMap2Str: styleMap2Str
};