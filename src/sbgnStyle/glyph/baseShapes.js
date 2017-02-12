const baseShapes = {
  styleMap2Str (styleMap) {
    return `${[...styleMap].map(([k, v]) => `${k}: ${v};`).join(' ')}`;
  },

  baseRectangle(x, y, w, h, r1, r2, r3, r4, styleMap) {
    return `
    <path style='${this.styleMap2Str(styleMap)}' d='
      M ${x + r1} ${y}
      L ${x + w - r2} ${y} Q ${x + w} ${y} ${x + w} ${y + r2}
      L ${x + w } ${y + h - r3} Q ${x + w} ${y + h} ${x + w - r3} ${y + h}
      L ${x + r4} ${y + h} Q ${x} ${y + h} ${x} ${y + h - r4}
      L ${x} ${y + r1} Q ${x} ${y} ${x + r1} ${y}
      Z'
    />
    `;
  },

  barrel(width, height, styleMap) {
    return `

    <g style="${this.styleMap2Str(styleMap)}">
      <path d="M ${0*width} ${.03*height} L ${0*width} ${.97*height} Q ${0.06*width} ${height} ${0.25*width} ${height}"/>

      <path d="M ${0.25*width} ${height} L ${0.75*width} ${height} Q ${0.95*width} ${height} ${width} ${0.95*height}"/>

      <path d="M ${width} ${.95*height} L ${width} ${0.05*height} Q ${width} ${0*height} ${0.75*width} ${0*height}"/>

      <path d="M ${0.75*width} ${0*height} L ${0.25*width} ${0*height} Q ${0.06*width} ${0*height} ${0*width} ${0.03*height}"/>
    </g>
    
    `;
  },

  circle(cx, cy, r, styleMap) {
    return `<circle cx='${cx}' cy='${cy}' r='${r}' style='${this.styleMap2Str(styleMap)}' />`;
  },

  concaveHexagon(width, height, styleMap) {
    return `
    <polygon style='${this.styleMap2Str(styleMap)}'
      points='${0}, ${0}, ${width}, ${0}, ${0.85*width}, ${0.5*height}, ${width}, ${height}, ${0}, ${height}, ${0.15*width}, ${0.5*height}'
    />`;
  },

  cutRectangle(width, height, styleMap) {
    return `
    <polygon style='${this.styleMap2Str(styleMap)}'
      points='
      ${0*width} ${0.05*height} ${0.05*width} ${0*height} ${0.95*width} ${0*height} ${width} ${0.05*height}
      ${width} ${0.95*height} ${0.95*width} ${height} ${0.05*width} ${height} ${0*width} ${0.95*height}
      '
    />
    `;
  },

  ellipse(cx, cy, rx, ry, styleMap) {
    return `
      <ellipse cx='${cx}' cy='${cy}' rx='${rx}' cx='${ry}' style='${this.styleMap2Str(styleMap)}' />
    `;
  },

  hexagon(width, height, styleMap) {
    return `
    <polygon style='${this.styleMap2Str(styleMap)}'
      points='${0}, ${0.5*width}, ${0.33*width}, ${0}, ${0.66*width}, ${0}, ${width}, ${0.5*height}, ${0.66*width}, ${height}, ${0.33*width}, ${height}'
    />`;
  },

  line(x1, x2, y1, y2, styleMap) {
    return `<line x1='${x1} x2='${x2} y1='${y1} y2='${y2} style='${this.styleMap2Str(styleMap)}'`;
  },

  rectangle(x, y, width, height, styleMap) {
    return this.baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap);
  },

  roundBottomRectangle(x, y, width, height, styleMap) {
    return this.baseRectangle(x, y, width, height, 0, 0, .1*width, .1*height, styleMap);
  },

  roundRectangle(x, y, width, height, styleMap) {
    return this.baseRectangle(x, y, width, height, .1*width, .1*height, .1*width, .1*height, styleMap);
  },

  square(x, y, length, styleMap) {
    return this.baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
  },

};


module.exports = baseShapes;
