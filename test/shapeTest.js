/* global describe, it */
const expect = require('chai').expect;
const s = require('../src/sbgnStyle/glyph/baseShapes.js');

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