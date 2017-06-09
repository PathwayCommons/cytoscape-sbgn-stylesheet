const styleMap2Str = (styleMap) => {
  if( !styleMap ){
    return '';
  }

  let s = '';

  for( let [k, v] of styleMap ){
    s += k + '=' + '"' + v + '"' + ' ';
  }

  return s;
};

const svg = (svgStr, width = 100, height = 100) => {
  const parser = new DOMParser();
  let svgText =
  `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg><svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='${width}' height='${height}'>${svgStr}</svg>`;
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

const svgStr = (svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) => {
  let s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);

  // base64
  // let data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

  // uri component string
  let data = 'data:image/svg+xml;utf8,' + encodeURIComponent(s.outerHTML);

  return data;
};

module.exports = {
  svgStr: svgStr,
  styleMap2Str: styleMap2Str
};
