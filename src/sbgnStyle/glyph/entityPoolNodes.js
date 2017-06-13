const baseShapes = require('./baseShapes');
const auxiliaryItems = require('./auxiliaryItems');

const svgStr = require('../util/svg').svgStr;
const getUnitInfos = require('../util/sbgn').getUnitInfos;
const getStateVars = require('../util/sbgn').getStateVars;
const hasClonemarker = require('../util/sbgn').hasClonemarker;

const element = require('../element');


const entityPoolNodes = {

  unspecifiedEntity (node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;
    const borderWidth = 2;
    const fontSize = 8;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );
    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '32px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };

  },

  simpleChemical (node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;
    const borderWidth = 2;
    const fontSize = 8;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    return [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg]; // ordering of svg images matters
  },

  macromolecule(node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;
    const borderWidth = 2;
    const fontSize = 8;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    return [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg]; // ordering of svg images matters
  },

  nucleicAcidFeature (node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;
    const borderWidth = 2;
    const fontSize = 8;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    return [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg]; // ordering of svg images matters
  },

  complex (node) {
    const auxItemWidth = 60;
    const auxItemHeight = 24;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#555555')
    .set('stroke-width', '6');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '',
      auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0]) : '',
      auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '25%', '88%'],
      bgPosY: ['100%', '11px', '100%', '0%', '0%'],
      bgFit: ['none', 'none', 'none', 'none'],
      bgClip: 'node',
      padding: '22px',
      borderWidth: 4
    };
  },

  sourceAndSink (node) {
    const {w: nw, h: nh} = element.dimensions(node);


    const centerX = nw / 2;
    const centerY = nh / 2;
    const radius = (nw - 2) / 2;

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-linecap', 'square')
    .set('stroke-width', '1.5')
    .set('fill', 'none');

    const shapeArgs = [centerX, centerY, radius];

    const sourceAndSinkSvg =
    `
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
      ${baseShapes.line(0, nh, nw, 0, styleMap)}
    `;

    return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
  },

  perturbingAgent (node) {
    const auxItemWidth = 100;
    const auxItemHeight = 20;
    const borderWidth = 2;
    const fontSize = 8;
    const uInfos = getUnitInfos(node);
    const sVars = getStateVars(node);

    const style = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '1');

    const cloneMarkerSvg = svgStr(
      hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '',
      auxItemWidth, auxItemHeight
    );

    const uInfoSvg = svgStr(
      uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const sVarSvg = svgStr(
      sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '',
      auxItemWidth, auxItemHeight
    );

    const topLine = svgStr(
      uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    const bottomLine = svgStr(
      hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '',
      auxItemWidth, auxItemHeight
    );

    return [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg]; // ordering of svg images matters
  }
};

module.exports = entityPoolNodes;
