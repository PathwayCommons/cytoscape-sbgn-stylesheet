/* global describe, it */

const expect = require('chai').expect;

const svgUtil = require('../src/sbgnStyle/util/svg.js');
const s = require('../src/sbgnStyle/glyph/baseShapes.js');

const sbgnShapes = require('../src/sbgnStyle/glyph/');
const auxiliaryItems = require('../src/sbgnStyle/glyph/auxiliaryItems.js');
const entityPoolNodes = require('../src/sbgnStyle/glyph/entityPoolNodes.js');

const browser = !(typeof window === 'undefined');

describe('shape style', () => {
  it('should convert style maps to a svg style string', () => {
    const styleMap = new Map()
    .set('stroke-width', '3')
    .set('fill', 'none')
    .set('stroke', '#6A6A6A');

    const styleString = `stroke-width="3" fill="none" stroke="#6A6A6A" `;
    expect(svgUtil.styleMap2Str(styleMap)).to.equal(styleString);
  });
  it('should produce an empty string for an empty map', () => {
    const styleMap = new Map();

    const styleString = '';

    expect(svgUtil.styleMap2Str(styleMap)).to.equal(styleString);
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

      expect(validSvg(s.rectangle(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.roundBottomRectangle(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.roundRectangle(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.square(x, y, w, styleMap))).to.equal(true);
      expect(validSvg(s.barrel(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.circle(x, y, w, styleMap))).to.equal(true);
      expect(validSvg(s.concaveHexagon(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.cutRectangle(x, y, w, h, 10, styleMap))).to.equal(true);
      expect(validSvg(s.ellipse(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.hexagon(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.line(x, y, w, h, styleMap))).to.equal(true);
      expect(validSvg(s.text('blah', x, y, styleMap))).to.equal(true);
    } else {
      this.skip();
    }
  });
});

describe('sbgn shape svg', function () {
  it('should throw an error when a incorrect node class is specified', function () {
    let dummyNode = {
      data() {
        return 'not a sbgn class';
      }
    };
    expect(sbgnShapes.draw.bind(dummyNode)).to.throw(TypeError);
  });
});

describe('auxiliaryItems cloneMarker', () => {
  it('should clip with height equal to nodeHeight / 4', () => {
    const nw = 100;
    const nh = 80;
    const svg = auxiliaryItems.cloneMarker(nw, nh, s.rectangle, [0, 0, nw, nh]);
    expect(svg).to.contain('M 0 60');
    expect(svg).to.not.contain('140');
  });
});

describe('entityPoolNodes clone marker styling', () => {
  before(() => {
    if (typeof global.DOMParser === 'undefined') {
      global.DOMParser = function () {
        this.parseFromString = function (str) {
          return {
            documentElement: {
              outerHTML: str
            }
          };
        };
      };
    }
  });

  const dummyNode = {
    data(key) {
      const data = {
        clonemarker: true,
        unitsOfInformation: [],
        stateVariables: []
      };
      return data[key];
    }
  };

  const types = [
    'unspecifiedEntity',
    'simpleChemical',
    'macromolecule',
    'nucleicAcidFeature',
    'perturbingAgent'
  ];

  types.forEach((type) => {
    it(`${type} should have 100% bgHeight and 100% bgPosY for bottomLine and cloneMarkerSvg`, () => {
      const style = entityPoolNodes[type](dummyNode);
      expect(style.bgHeight).to.deep.equal(['100%', '100%', '100%']);
      expect(style.bgPosY[0]).to.equal('100%');
      expect(style.bgPosY[2]).to.equal('100%');
    });
  });
});
