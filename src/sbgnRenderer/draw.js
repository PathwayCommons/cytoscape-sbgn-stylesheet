var colors = require('./colors');
var cyMath = require('./cyMath');
var cyShapes = require('./cyShapes');

var drawRoundRectanglePath = function(
  context, x, y, width, height, radius ){

  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var cornerRadius = radius || Math.min(width / 4, height / 4, 8);

  if( context.beginPath ){ context.beginPath(); }

  // Start at top middle
  context.moveTo( x, y - halfHeight );
  // Arc from middle top to right side
  context.arcTo( x + halfWidth, y - halfHeight, x + halfWidth, y, cornerRadius );
  // Arc from right side to bottom
  context.arcTo( x + halfWidth, y + halfHeight, x, y + halfHeight, cornerRadius );
  // Arc from bottom to left side
  context.arcTo( x - halfWidth, y + halfHeight, x - halfWidth, y, cornerRadius );
  // Arc from left side to topBorder
  context.arcTo( x - halfWidth, y - halfHeight, x, y - halfHeight, cornerRadius );
  // Join line
  context.lineTo( x, y - halfHeight );


  context.closePath();
};

// Taken from cytoscape.js
var drawPolygonPath = function(
  context, x, y, width, height, points ){

  var halfW = width / 2;
  var halfH = height / 2;

  if( context.beginPath ){ context.beginPath(); }

  context.moveTo( x + halfW * points[0], y + halfH * points[1] );

  for( var i = 1; i < points.length / 2; i++ ){
    context.lineTo( x + halfW * points[ i * 2], y + halfH * points[ i * 2 + 1] );
  }

  context.closePath();
};

var drawEllipse = function(context, x, y, width, height) {
  cyShapes['ellipse'].draw(context, x, y, width, height);
};


var drawPortsToPolygonShape = function (context, node, points) {
  var width = node.width();
  var height = node.height();
  var centerX = node._private.position.x;
  var centerY = node._private.position.y;
  var padding = parseInt(node.css('border-width')) / 2;

  for (var i = 0; i < node._private.data.ports.length; i++) {
    var port = node._private.data.ports[i];
    var portX = port.x * width / 100 + centerX;
    var portY = port.y * height / 100 + centerY;
    var closestPoint = cyMath.polygonIntersectLine(portX, portY,
            points, centerX, centerY, width / 2, height / 2, padding);
    context.beginPath();
    context.moveTo(portX, portY);
    context.lineTo(closestPoint[0], closestPoint[1]);
    context.stroke();
    context.closePath();


    //add a little black circle to ports
    var oldStyle = context.fillStyle;
    context.fillStyle = colors.port;
    drawEllipse(context, portX, portY, 2, 2);
    context.fillStyle = oldStyle;
    context.stroke();
  }
};

var drawStateText = function (context, textProp) {
  var stateValue = textProp.state.value || '';
  var stateVariable = textProp.state.variable || '';

  var stateLabel = stateValue + (stateVariable
          ? '@' + stateVariable
          : '');

  var fontSize = parseInt(textProp.height / 1.5);

  textProp.font = fontSize + 'px Arial';
  textProp.label = stateLabel;
  textProp.color = '#0f0f0f';
  drawText(context, textProp);
};

var drawInfoText = function (context, textProp) {
  var fontSize = parseInt(textProp.height / 1.5);
  textProp.font = fontSize + 'px Arial';
  textProp.color = '#0f0f0f';
  drawText(context, textProp);
};

var drawText = function (context, textProp) {
  var oldFont = context.font;
  context.font = textProp.font;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  var oldStyle = context.fillStyle;
  context.fillStyle = textProp.color;
  var oldOpacity = context.globalAlpha;
  context.globalAlpha = textProp.opacity;
  var text;

  textProp.label = textProp.label || '';

  text = textProp.label;

  context.fillText(text, textProp.centerX, textProp.centerY);
  context.fillStyle = oldStyle;
  context.font = oldFont;
  context.globalAlpha = oldOpacity;
};

var drawStateAndInfos = function (node, context, centerX, centerY) {  
  var unitOfInfoRadius = 4;
  var stateVarRadius = 15;

  var stateAndInfos = node._private.data.statesandinfos;

  for (var i = 0; i < stateAndInfos.length && i < 4; i++) {
    var state = stateAndInfos[i];
    var stateWidth = state.bbox.w;
    var stateHeight = state.bbox.h;
    var stateCenterX = state.bbox.x * node.width() / 100 + centerX;
    var stateCenterY = state.bbox.y * node.height() / 100 + centerY;

    var textProp = {'centerX': stateCenterX, 'centerY': stateCenterY,
      'opacity': node.css('text-opacity') * node.css('opacity'),
      'width': stateWidth, 'height': stateHeight};

    if (state.clazz == 'state variable') {//draw ellipse
      //var stateLabel = state.state.value;
      drawRoundRectanglePath(context, stateCenterX, stateCenterY,
              stateWidth, stateHeight, Math.min(stateWidth / 2, stateHeight / 2, stateVarRadius));

      context.fill();
      textProp.state = state.state;
      drawStateText(context, textProp);

      context.stroke();

    } else if (state.clazz == 'unit of information') {//draw rectangle
      drawRoundRectanglePath(context,
              stateCenterX, stateCenterY,
              stateWidth, stateHeight,
              Math.min(stateWidth / 2, stateHeight / 2, unitOfInfoRadius));

      context.fill();

      textProp.label = state.label.text || '';
      drawInfoText(context, textProp);

      context.stroke();
    }
  }
  drawEllipse(context, centerX, centerY, 0, 0);
};

var drawComplexStateAndInfo = function (context, node, stateAndInfos,
        centerX, centerY, width, height) {

  var unitOfInfoRadius = 4;
  var stateVarRadius = 15;

  drawEllipse(context, centerX, centerY, 0, 0);

  var upWidth = 0, downWidth = 0;
  var boxPadding = 10;
  var beginPosY = height / 2, beginPosX = width / 2;

  for (var i = 0; i < stateAndInfos.length; i++) {
    var state = stateAndInfos[i];
    var stateWidth = state.bbox.w;
    var stateHeight = state.bbox.h;
    var relativeYPos = state.bbox.y;
    var stateCenterX, stateCenterY;

    if (relativeYPos < 0) {
      if (upWidth + stateWidth < width) {
        stateCenterX = centerX - beginPosX + boxPadding + upWidth + stateWidth / 2;
        stateCenterY = centerY - beginPosY;

        var textProp = {'centerX': stateCenterX, 'centerY': stateCenterY,
          'opacity': node.css('text-opacity') * node.css('opacity'),
          'width': stateWidth, 'height': stateHeight};

        if (state.clazz == 'state variable') {//draw ellipse
          drawRoundRectanglePath(context,
                  stateCenterX, stateCenterY,
                  stateWidth, stateHeight, Math.min(stateWidth / 2, stateHeight / 2, stateVarRadius));
          context.fill();

          textProp.state = state.state;
          drawStateText(context, textProp);
        } else if (state.clazz == 'unit of information') {//draw rectangle
          drawRoundRectanglePath(context,
                  stateCenterX, stateCenterY,
                  stateWidth, stateHeight,
                  Math.min(stateWidth / 2, stateHeight / 2, unitOfInfoRadius));
          context.fill();

          textProp.label = state.label.text;
          drawInfoText(context, textProp);
        }
      }
      upWidth = upWidth + width + boxPadding;
    } else if (relativeYPos > 0) {
      if (downWidth + stateWidth < width) {
        stateCenterX = centerX - beginPosX + boxPadding + downWidth + stateWidth / 2;
        stateCenterY = centerY + beginPosY;

        var textProp = {'centerX': stateCenterX, 'centerY': stateCenterY,
          'opacity': node.css('text-opacity') * node.css('opacity'),
          'width': stateWidth, 'height': stateHeight};

        if (state.clazz == 'state variable') {//draw ellipse
          drawRoundRectanglePath(context,
                  stateCenterX, stateCenterY,
                  stateWidth, stateHeight, Math.min(stateWidth / 2, stateHeight / 2, stateVarRadius));
          context.fill();

          textProp.state = state.state;
          drawStateText(context, textProp);
        } else if (state.clazz == 'unit of information') {//draw rectangle
          drawRoundRectanglePath(context,
                  stateCenterX, stateCenterY,
                  stateWidth, stateHeight,
                  Math.min(stateWidth / 2, stateHeight / 2, unitOfInfoRadius));
          context.fill();

          textProp.label = state.label.text;
          drawInfoText(context, textProp);
        }
      }
      downWidth = downWidth + width + boxPadding;
    }
    context.stroke();

    //This is a temporary workaround
    drawEllipse(context, centerX, centerY, 0, 0);

    //update new state and info position(relative to node center)
    state.bbox.x = (stateCenterX - centerX) * 100 / node.width();
    state.bbox.y = (stateCenterY - centerY) * 100 / node.height();
  }
};
var drawSimpleChemicalPath = function (context, x, y, width, height) {

  var halfWidth = width / 2;
  var halfHeight = height / 2;
  //var cornerRadius = $$.math.getRoundRectangleRadius(width, height);
  var cornerRadius = Math.min(halfWidth, halfHeight);
  context.translate(x, y);

  context.beginPath();

  // Start at top middle
  context.moveTo(0, -halfHeight);
  // Arc from middle top to right side
  context.arcTo(halfWidth, -halfHeight, halfWidth, 0, cornerRadius);
  // Arc from right side to bottom
  context.arcTo(halfWidth, halfHeight, 0, halfHeight, cornerRadius);
  // Arc from bottom to left side
  context.arcTo(-halfWidth, halfHeight, -halfWidth, 0, cornerRadius);
  // Arc from left side to topBorder
  context.arcTo(-halfWidth, -halfHeight, 0, -halfHeight, cornerRadius);
  // Join line
  context.lineTo(0, -halfHeight);

  context.closePath();

  context.translate(-x, -y);
};


var drawSimpleChemical = function (context, x, y, width, height) {
  drawSimpleChemicalPath(context, x, y, width, height);
  context.fill();
};

var drawNucAcidFeature = function (context, width, height, centerX, centerY, cornerRadius) {
  var halfWidth = width / 2;
  var halfHeight = height / 2;

  context.translate(centerX, centerY);
  context.beginPath();

  context.moveTo(-halfWidth, -halfHeight);
  context.lineTo(halfWidth, -halfHeight);
  context.lineTo(halfWidth, 0);
  context.arcTo(halfWidth, halfHeight, 0, halfHeight, cornerRadius);
  context.arcTo(-halfWidth, halfHeight, -halfWidth, 0, cornerRadius);
  context.lineTo(-halfWidth, -halfHeight);

  context.closePath();
  context.translate(-centerX, -centerY);
  context.fill();
};

var drawPortsToEllipseShape = function (context, node) {
  var width = node.width();
  var height = node.height();
  var centerX = node._private.position.x;
  var centerY = node._private.position.y;

  for (var i = 0; i < node._private.data.ports.length; i++) {
    var port = node._private.data.ports[i];
    var portX = port.x * width / 100 + centerX;
    var portY = port.y * height / 100 + centerY;
    var closestPoint = cyMath.intersectLineEllipse(
            portX, portY, centerX, centerY, width / 2, height / 2);
    context.moveTo(portX, portY);
    context.lineTo(closestPoint[0], closestPoint[1]);
    context.stroke();

    //add a little black circle to ports
    var oldStyle = context.fillStyle;
    context.fillStyle = colors.port;
    drawEllipse(context, portX, portY, 2, 2);
    context.fillStyle = oldStyle;
    context.stroke();
  }
};

module.exports = {
  drawEllipse: drawEllipse,
  drawInfoText: drawInfoText,
  drawStateText: drawStateText,
  drawStateAndInfos: drawStateAndInfos,
  drawComplexStateAndInfo: drawComplexStateAndInfo,
  drawPortsToEllipseShape: drawPortsToEllipseShape,
  drawNucAcidFeature: drawNucAcidFeature,
  drawText: drawText,
  drawPolygonPath: drawPolygonPath,
  drawRoundRectanglePath: drawRoundRectanglePath,
  drawPortsToPolygonShape: drawPortsToPolygonShape,
  drawSimpleChemical: drawSimpleChemical,
  drawSimpleChemicalPath: drawSimpleChemicalPath
};
