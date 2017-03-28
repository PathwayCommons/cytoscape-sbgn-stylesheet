const styleMap2Str = (styleMap) => {
  if( !styleMap ){
    return '';
  }

  let s = '';

  for( let [k, v] of styleMap ){
    s += k + '=' + "'" + v + "'" + ' ';
  }

  return s;
};

const svg = (svgStr, width = 100, height = 100, vbX = 0, vbY = 0, vbWidth = 100, vbHeight = 100) => {
  const parser = new DOMParser();
  let svgText =`<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='${width}' height='${height}' viewBox='${vbX} ${vbY} ${vbWidth} ${vbHeight}'>${svgStr}</svg>`;
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svgStr = (svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) => {
  let s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);
  let data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

  return data;
};

module.exports = {
  svgStr: svgStr,
  styleMap2Str: styleMap2Str
};
