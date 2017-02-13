/* global describe, it */

const expect = require('chai').expect;

const s = require('../src/sbgnStyle/glyph/baseShapes.js');

const browser = !(typeof window === 'undefined');

describe('shape style', () => {
  it('should convert style maps to a svg style string', () => {
    const styleMap = new Map()
    .set('stroke-width', '3')
    .set('fill', 'none')
    .set('stroke', '#6A6A6A');

    const styleString = 'stroke-width: 3; fill: none; stroke: #6A6A6A;';

    expect(s.styleMap2Str(styleMap)).to.equal(styleString);
  });
  it('should produce an empty string for an empty map', () => {
    const styleMap = new Map();

    const styleString = '';

    expect(s.styleMap2Str(styleMap)).to.equal(styleString);
  });
});

describe('shape svg', function () {
  it('(browser only) should produce valid svg when parsed', function () {

    if (browser) {

      const validSvg = (svg) => {
        const parser = new DOMParser();
        let doc = parser.parseFromString(svg, 'text/xml');
        let parseError = doc.getElementsByTagName('parsererror');
        return parseError.length === 0;
      };

      const styleMap = new Map()
      .set('stroke-width', '3')
      .set('fill', 'none')
      .set('stroke', '#6A6A6A');

      const x = 0;
      const y = 0;
      const w = 100;
      const h = 100;
      const r1 = 0;
      const r2 = 0;
      const r3 = 0;
      const r4 = 0;


      expect(validSvg(s.baseRectangle(x, y, w, h, r1, r2, r3, r4, styleMap))).to.equal(true);
      expect(validSvg(s.rectangle(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.roundBottomRectangle(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.roundRectangle(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.square(x, y, w, styleMap))).to.equal(true);
      expect(validSvg(s.barrel(w, h, styleMap))).to.equal(true);
      expect(validSvg(s.circle(x, y, w, styleMap))).to.equal(true);
      expect(validSvg(s.concaveHexagon(w, h, styleMap))).to.equal(true);
      expect(validSvg(s.cutRectangle(w, h, styleMap))).to.equal(true);
      expect(validSvg(s.ellipse(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.hexagon(w, h, styleMap))).to.equal(true);
      expect(validSvg(s.line(x, y, w, h, styleMap))).to.equal(true);

    } else {
      this.skip();
    }
  });

});

