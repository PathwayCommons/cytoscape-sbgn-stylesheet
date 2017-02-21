const styleMap2Str = require('../util/svg.js').styleMap2Str;

let baseRectangle = function (x, y, w, h, r1, r2, r3, r4, styleMap, transform) {
  return `
  <path style='${styleMap2Str(styleMap)}' transform='${transform}' d='
    M ${x + r1} ${y}
    L ${x + w - r2} ${y} Q ${x + w} ${y} ${x + w} ${y + r2}
    L ${x + w } ${y + h - r3} Q ${x + w} ${y + h} ${x + w - r3} ${y + h}
    L ${x + r4} ${y + h} Q ${x} ${y + h} ${x} ${y + h - r4}
    L ${x} ${y + r1} Q ${x} ${y} ${x + r1} ${y}
    Z'
  />
  `;
};

const baseShapes = {
  barrel (width, height, styleMap={}, transform='') {
    return `

    <g style="${styleMap2Str(styleMap)}" transform='${transform}'>
      <path d="M ${0*width} ${.03*height} L ${0*width} ${.97*height} Q ${0.06*width} ${height} ${0.25*width} ${height}"/>

      <path d="M ${0.25*width} ${height} L ${0.75*width} ${height} Q ${0.95*width} ${height} ${width} ${0.95*height}"/>

      <path d="M ${width} ${.95*height} L ${width} ${0.05*height} Q ${width} ${0*height} ${0.75*width} ${0*height}"/>

      <path d="M ${0.75*width} ${0*height} L ${0.25*width} ${0*height} Q ${0.06*width} ${0*height} ${0*width} ${0.03*height}"/>
    </g>

    `;
  },

  circle (cx, cy, r, styleMap={}, transform='') {
    return `<circle cx='${cx}' cy='${cy}' r='${r}' style='${styleMap2Str(styleMap)}' transform='${transform}' />`;
  },

  clipPath (id, baseShapeFn, baseShapeFnArgs, styleMap={}) {
    return `
      <defs>
        <clipPath id='${id}' styleMap='${styleMap2Str(styleMap)}'>
        ${baseShapeFn(...baseShapeFnArgs)}
        </clipPath>
      </defs>
    `;
  },

  concaveHexagon (width, height, styleMap={}, transform='') {
    return `
    <polygon style='${styleMap2Str(styleMap)}' transform='${transform}'
      points='${0}, ${0}, ${width}, ${0}, ${0.85*width}, ${0.5*height}, ${width}, ${height}, ${0}, ${height}, ${0.15*width}, ${0.5*height}'
    />`;
  },

  cutRectangle (x, y, width, height, styleMap={}, transform='') {
    return `
    <polygon style='${styleMap2Str(styleMap)}' transform='${transform}'
      points='
      ${x + 0*width} ${y + 0.05*height} ${x + 0.05*width} ${y + 0*height} ${x + 0.95*width} ${y + 0*height} ${x + width} ${y + 0.05*height}
      ${x + width} ${y + 0.95*height} ${x + 0.95*width} ${y + height} ${x + 0.05*width} ${y + height} ${x + 0*width} ${y + 0.95*height}
      '
    />
    `;
  },

  ellipse (cx, cy, rx, ry, styleMap={}, transform='') {
    return `
      <ellipse cx='${cx}' cy='${cy}' rx='${rx}' ry='${ry}' style='${styleMap2Str(styleMap)}' transform='${transform}' />
    `;
  },

  hexagon (width, height, styleMap={}, transform='') {
    return `
    <polygon style='${styleMap2Str(styleMap)}' transform='${transform}'
      points='${0}, ${0.5*height}, ${0.25*width}, ${0*height}, ${0.75*width}, ${0*height}, ${width}, ${0.5*height}, ${0.75*width}, ${height}, ${0.25*width}, ${height}'
    />`;
  },

  line (x1, y1, x2, y2, styleMap={}, transform='') {
    return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' style='${styleMap2Str(styleMap)}' transform='${transform}' />`;
  },

  rectangle (x, y, width, height, styleMap={}, transform='') {
    return baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap, transform);
  },

  roundBottomRectangle (x, y, width, height, styleMap={}, transform='') {
    return baseRectangle(x, y, width, height, 0, 0, .3*height, .3*height, styleMap, transform);
  },

  roundRectangle (x, y, width, height, styleMap={}, transform='') {
    return baseRectangle(x, y, width, height, .3*height, .3*height, .3*height, .3*height, styleMap, transform);
  },

  square (x, y, length, styleMap={}, transform='') {
    return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap, transform);
  },

  text (t, x, y, textAnchor, styleMap={}, transform='') {
    return `<text x='${x}' y='${y}' transform='${transform}' textAnchor='${textAnchor}' style='${styleMap2Str(styleMap)}'>${t}</text>`;
  }

};


module.exports = baseShapes;
