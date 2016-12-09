var colors = require('./colors');

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

// var drawEllipse 

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
    $$.sbgn.drawEllipse(context, portX, portY, 2, 2);
    context.fillStyle = oldStyle;
    context.stroke();
  }
};


module.exports = {
  drawPolygonPath: drawPolygonPath,
  drawRoundRectanglePath: drawRoundRectanglePath,
  drawPortsToPolygonShape: drawPortsToPolygonShape
};
