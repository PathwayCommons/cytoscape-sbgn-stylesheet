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
  barrel (x, y, width, height, styleMap={}, transform='') {
    return `

    <g style="${styleMap2Str(styleMap)}" transform='${transform}'>
      <path d="M ${0*width + x} ${.03*height + y} L ${0*width + x} ${.97*height + y} Q ${0.06*width + x} ${height + y} ${0.25*width + x} ${height + y}"/>

      <path d="M ${0.25*width + x} ${height + y} L ${0.75*width + x} ${height + y} Q ${0.95*width + x} ${height + y} ${width + x} ${0.95*height + y}"/>

      <path d="M ${width + x} ${.95*height + y} L ${width + x} ${0.05*height + y} Q ${width + x} ${0*height + y} ${0.75*width + x} ${0*height + y}"/>

      <path d="M ${0.75*width + x} ${0*height + y} L ${0.25*width + x} ${0*height + y} Q ${0.06*width + x} ${0*height + y} ${0*width + x} ${0.03*height + y}"/>
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

  concaveHexagon (x, y, width, height, styleMap={}, transform='') {
    return `
    <polygon style='${styleMap2Str(styleMap)}' transform='${transform}'
      points='${x + 0}, ${y + 0}, ${x + width}, ${y + 0}, ${x + 0.85*width}, ${y + 0.5*height}, ${x + width}, ${y + height}, ${x + 0}, ${y + height}, ${ x + 0.15*width}, ${y + 0.5*height}'
    />`;
  },

  cutRectangle (x, y, width, height, cornerLength, styleMap={}, transform='') {
    return `
    <polygon style='${styleMap2Str(styleMap)}' transform='${transform}'
      points='
      ${x + 0*width} ${y + cornerLength} ${x + cornerLength} ${y + 0*height} ${x + width - cornerLength} ${y + 0*height} ${x + width} ${y + cornerLength}
      ${x + width} ${y + height - cornerLength} ${x + width - cornerLength} ${y + height} ${x + cornerLength} ${y + height} ${x + 0*width} ${y + height - cornerLength}
      '
    />
    `;
  },

  ellipse (cx, cy, rx, ry, styleMap={}, transform='') {
    return `
      <ellipse cx='${cx}' cy='${cy}' rx='${rx}' ry='${ry}' style='${styleMap2Str(styleMap)}' transform='${transform}' />
    `;
  },

  hexagon (x, y, width, height, styleMap={}, transform='') {
    return `
    <polygon style='${styleMap2Str(styleMap)}' transform='${transform}'
      points='${x + 0}, ${y + 0.5*height}, ${x + 0.25*width}, ${y + 0*height}, ${x + 0.75*width}, ${y + 0*height}, ${x + width}, ${y + 0.5*height}, ${x + 0.75*width}, ${y + height}, ${x + 0.25*width}, ${y + height}'
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
    return baseRectangle(x, y, width, height, .1*width, .1*width, .1*width, .1*width, styleMap, transform);
  },

  square (x, y, length, styleMap={}, transform='') {
    return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap, transform);
  },

  text (t, x, y, styleMap={}, transform='') {
    return `<text x='${x}' y='${y}' transform='${transform}' style='${styleMap2Str(styleMap)}'>${t}</text>`;
  }

};


module.exports = baseShapes;
