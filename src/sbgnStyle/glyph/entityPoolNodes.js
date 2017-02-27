const baseShapes = require('./baseShapes.js');
const auxillaryItems = require('./auxillaryItems.js');
const svgStr = require('../util/svg.js').svgStr;

const isMultimer = (node) => node.data('class').includes('multimer');


const hasClonemarker = (node) => node.data('clonemarker');


const hasStateAndInfos = (node) => (node.data('statesandinfos') && node.data('statesandinfos').length > 0);

const randomAuxText = () => {
  const texts = ['P', '2P', 'active', 'e:INFO', 'longthingylong', '@T287', 'P@S334'];
  return texts[Math.floor((Math.random() * texts.length))];
};

const entityPoolNodes = {

  unspecifiedEntity (node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    let shapeArgs = [nw / 2, nh / 2, ( nh - 2 ) / 2, ( nw - 2 ) / 2];

    let unspecEntitySvg =
    `
      ${baseShapes.ellipse(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.ellipse, shapeArgs) : ''}
    `;
    return svgStr(unspecEntitySvg, nw, nh, 0, 0, nw, nh);
  },

  simpleChemical (node) {
    const nw = node.outerWidth();
    const nh = node.outerHeight();


    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const multimerShapeArgs = [(nw + 3) / 2, (nh + 3) / 2, (Math.min(nw, nh) - 2 - 5) / 2];
    let shapeArgs = [(nw) / 2, (nh) / 2, (Math.min(nh, nw) - 2) / 2];

    if (hasStateAndInfos(node)) {
      shapeArgs = [(nw) / 2, (nh) / 2, (Math.min(nh, nw) - 2  - 5) / 2];
    }

    if (isMultimer(node)) {
      shapeArgs = [(nw - 3) / 2, (nh - 3) / 2, (Math.min(nh, nw) - 2 - 7) / 2];
    }

    const simpleChemicalSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(baseShapes.circle, multimerShapeArgs) : ''}
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
      ${hasStateAndInfos(node) ? auxillaryItems.unitOfInformation((nw / 2) - (0.4*nw / 2), 1, 0.4*nw, 0.2*nh, randomAuxText()) : ''}
    `;

    return svgStr(simpleChemicalSvg, nw, nh, 0, 0, nw, nh);
  },

  macromolecule (node) {
    const nw = node.outerWidth();
    const nh = node.outerHeight();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    const multimerShapeArgs = [15, 10, .8*nw, .8*nh];
    let shapeArgs = [1.5, 1.5, nw - 3, nh - 3];

    if (hasStateAndInfos(node)) {
      shapeArgs = [5, 5, .9*nw, .9*nh];
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 5, .83*nw, .78*nh];
    }

    let macromoleculeSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(baseShapes.roundRectangle, multimerShapeArgs) : ''}
      ${baseShapes.roundRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.roundRectangle, shapeArgs) : ''}
      ${hasStateAndInfos(node) ? auxillaryItems.unitOfInformation((nw / 3) - (0.4*nw / 2), 1, 0.4*nw, 0.2*nh, randomAuxText()) : ''}
    `;
    return svgStr(macromoleculeSvg, nw, nh, 0, 0, nw, nh);
  },

  nucleicAcidFeature (node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none')
    .set('fill', 'white')
    .set('fill-opacity', '1');


    let shapeArgs = [5, 5, .9*nw, .85*nh];
    const multimerShapeArgs = [15, 10, .8*nw, .8*nh];

    if (isMultimer(node)) {
      shapeArgs = [5, 5, .83*nw, .78*nh];
    }

    let nucleicAcidFeatureSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(baseShapes.roundBottomRectangle, multimerShapeArgs) : ''}
      ${baseShapes.roundBottomRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.roundBottomRectangle, shapeArgs) : ''}
      ${hasStateAndInfos(node) ? auxillaryItems.unitOfInformation((nw / 3) - (0.4*nw / 2), 0, 0.4*nw, 0.2*nh, '') : ''}
    `;
    return svgStr(nucleicAcidFeatureSvg, nw, nh, 0, 0, nw, nh);
  },

  complex (node) {
    let ow = node.width();
    let oh = node.height();

    let styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'white')
    .set('fill-opacity', '1');

    let shapeArgs = [1, 1, ow - 2, oh - 2];
    const multimerShapeArgs = [15, 15, .93*ow, .93*oh];

    if (hasStateAndInfos(node)) {
      shapeArgs[0] += 5;
      shapeArgs[1] += 10;
      shapeArgs[2] *= .95;
      shapeArgs[3] *= .9;
    }

    if (isMultimer(node)) {
      shapeArgs = [5, 10, .93*ow, .9*oh];
    }

    const uinfoW = Math.min(100, 0.4*ow);
    const uinfoH = Math.min(25, 0.2*oh);


    let complexSvg =
    `
      ${isMultimer(node) ? auxillaryItems.multimer(baseShapes.cutRectangle, multimerShapeArgs) : ''}
      ${baseShapes.cutRectangle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(ow, oh, baseShapes.cutRectangle, shapeArgs) : ''}
      ${hasStateAndInfos(node) ? auxillaryItems.unitOfInformation((ow / 3) - (uinfoW / 2), 0, uinfoW, uinfoH, '') : ''}

    `;
    return svgStr(complexSvg, ow, oh, 0, 0, ow, oh);
  },

  sourceAndSink (node) {
    const nw = node.width();
    const nh = node.height();

    const centerX = node.width() / 2;
    const centerY = node.height() / 2;
    const radius = (node.width() - 2) / 2;

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-linecap', 'square')
    .set('stroke-width', '1.5')
    .set('fill', 'none');

    const shapeArgs = [centerX, centerY, radius];

    const sourceAndSinkSvg =
    `
      ${baseShapes.circle(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : ''}
      ${baseShapes.line(0, nh, nw, 0, styleMap)}
    `;

    return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
  },

  perturbingAgent (node) {
    const nw = node.width();
    const nh = node.height();

    const styleMap = new Map()
    .set('stroke', '#6A6A6A')
    .set('stroke-width', '2')
    .set('fill', 'none');

    const shapeArgs = [1, 1, nw - 4, nh - 2];

    const perturbingAgentSvg =
    `
      ${baseShapes.concaveHexagon(...shapeArgs, styleMap)}
      ${hasClonemarker(node) ? auxillaryItems.cloneMarker(nw - 3, nh - 3, baseShapes.concaveHexagon, shapeArgs) : ''}

    `;
    return svgStr(perturbingAgentSvg, nw, nh, 0, 0, nw, nh);
  }
};

module.exports = entityPoolNodes;