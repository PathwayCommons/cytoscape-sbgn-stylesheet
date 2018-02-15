const styleMap2Str = require('../util/svg.js').styleMap2Str;

let baseRectangle = function (x, y, w, h, r1, r2, r3, r4, styleMap) {
  return `
  <path ${styleMap2Str(styleMap)} d='
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
  barrel (x, y, width, height, styleMap) {
    return `

    <g ${styleMap2Str(styleMap)}>
      <path d="M ${0*width + x} ${.03*height + y} L ${0*width + x} ${.97*height + y} Q ${0.06*width + x} ${height + y} ${0.25*width + x} ${height + y}"/>

      <path d="M ${0.25*width + x} ${height + y} L ${0.75*width + x} ${height + y} Q ${0.95*width + x} ${height + y} ${width + x} ${0.95*height + y}"/>

      <path d="M ${width + x} ${.95*height + y} L ${width + x} ${0.05*height + y} Q ${width + x} ${0*height + y} ${0.75*width + x} ${0*height + y}"/>

      <path d="M ${0.75*width + x} ${0*height + y} L ${0.25*width + x} ${0*height + y} Q ${0.06*width + x} ${0*height + y} ${0*width + x} ${0.03*height + y}"/>
    </g>

    `;
  },

  circle (cx, cy, r, styleMap) {
    return `<circle cx='${cx}' cy='${cy}' r='${r}' ${styleMap2Str(styleMap)} />`;
  },

  clipPath (id, baseShapeFn, baseShapeFnArgs, styleMap) {
    return `
      <defs>
        <clipPath id='${id}' ${styleMap2Str(styleMap)}>
        ${baseShapeFn(...baseShapeFnArgs)}
        </clipPath>
      </defs>
    `;
  },

  concaveHexagon (x, y, width, height, styleMap) {
    return `
    <polygon ${styleMap2Str(styleMap)}
      points='${x + 0}, ${y + 0}, ${x + width}, ${y + 0}, ${x + 0.85*width}, ${y + 0.5*height}, ${x + width}, ${y + height}, ${x + 0}, ${y + height}, ${ x + 0.15*width}, ${y + 0.5*height}'
    />`;
  },

  cutRectangle (x, y, width, height, cornerLength, styleMap) {
    return `
    <polygon ${styleMap2Str(styleMap)}
      points='
      ${x + 0*width} ${y + cornerLength} ${x + cornerLength} ${y + 0*height} ${x + width - cornerLength} ${y + 0*height} ${x + width} ${y + cornerLength}
      ${x + width} ${y + height - cornerLength} ${x + width - cornerLength} ${y + height} ${x + cornerLength} ${y + height} ${x + 0*width} ${y + height - cornerLength}
      '
    />
    `;
  },

  ellipse (cx, cy, rx, ry, styleMap) {
    return `
      <ellipse cx='${cx}' cy='${cy}' rx='${rx}' ry='${ry}' ${styleMap2Str(styleMap)} />
    `;
  },

  hexagon (x, y, width, height, styleMap) {
    return `
    <polygon ${styleMap2Str(styleMap)}
      points='${x + 0}, ${y + 0.5*height}, ${x + 0.25*width}, ${y + 0*height}, ${x + 0.75*width}, ${y + 0*height}, ${x + width}, ${y + 0.5*height}, ${x + 0.75*width}, ${y + height}, ${x + 0.25*width}, ${y + height}'
    />`;
  },

  line (x1, y1, x2, y2, styleMap) {
    return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' ${styleMap2Str(styleMap)} />`;
  },

  rectangle (x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap);
  },

  roundBottomRectangle (x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, 0, 0, .3*height, .3*height, styleMap);
  },

  roundRectangle (x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, .04*width, .04*width, .04*width, .04*width, styleMap);
  },

  stadium (x, y, width, height, styleMap) {
    const radiusRatio = .24 * Math.max(width, height);
    return baseRectangle(x, y, width, height, radiusRatio, radiusRatio, radiusRatio, radiusRatio, styleMap);
  },

  square (x, y, length, styleMap) {
    return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
  },

  text (t, x, y, styleMap) {
    return `<text x='${x}' y='${y}' ${styleMap2Str(styleMap)}>${t}</text>`;
  }

};


module.exports = baseShapes;
