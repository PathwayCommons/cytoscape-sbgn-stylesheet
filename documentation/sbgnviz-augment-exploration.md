# SBGNRenderer Augment Exploration

The purpose of this document is to provide lower level details about how SBGNRenderer works, and how it interacts with cytoscape.js
The subject of study will be the functions that are appended on to cytoscape.js via the augment function.

## Key Functions of augmentCytoscape.js

1.  To register custom shapes within cytoscape.js
2.  To provide rendering implementations for these custom node shapes

### Registering custom node/arrow/line shapes

SBGNRenderer exposes the cytoscape's base nodeShapes - and adds new shapes to this collection.  

Example:
Here are the sbgn specific shapes that are being added.
```js
  cyStyleProperties.types.nodeShape.enums.push('source and sink');
  cyStyleProperties.types.nodeShape.enums.push('nucleic acid feature');
  cyStyleProperties.types.nodeShape.enums.push('complex');
  cyStyleProperties.types.nodeShape.enums.push('dissociation');
  cyStyleProperties.types.nodeShape.enums.push('macromolecule');
  cyStyleProperties.types.nodeShape.enums.push('simple chemical');
  cyStyleProperties.types.nodeShape.enums.push('unspecified entity');
  cyStyleProperties.types.nodeShape.enums.push('process');
  cyStyleProperties.types.nodeShape.enums.push('omitted process');
  cyStyleProperties.types.nodeShape.enums.push('uncertain process');
  cyStyleProperties.types.nodeShape.enums.push('association');

  cyStyleProperties.types.lineStyle.enums.push('consumption');
  cyStyleProperties.types.lineStyle.enums.push('production');

  cyStyleProperties.types.arrowShape.enums.push('necessary stimulation');
```


### Rendering Implementations

Each new node/line/arrow shape added to the base nodeShapes collection has it's own draw, intersect, and checkpoint functions implemented.
Most of the time, these functions call a few custom functions designed to render these nodes according to the SBGN spec.

Example:
```js
    cyShapes['association'] = {
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();

        cyShapes['ellipse'].draw(context, centerX, centerY, width, height);
        context.fill();
        context.stroke();

        draw.drawPortsToEllipseShape(context, node);                                                 // CUSTOM DRAWING FUNCTION
      },
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        var portIntersection = renderIntersect.intersectLinePorts(node, x, y, portId);               // CUSTOM INTERSECT FUNCTION
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        var intersect = cyMath.intersectLineEllipse(
                x, y,
                centerX,
                centerY,
                width / 2 + padding,
                height / 2 + padding);

        return intersect;
      },
      checkPoint: function (x, y, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        x -= centerX;
        y -= centerY;

        x /= (width / 2 + padding);
        y /= (height / 2 + padding);

        return (Math.pow(x, 2) + Math.pow(y, 2) <= 1);
      }
    };
```
## Global Cytoscape Namespace

Most of the functions that used to be in the modified cytoscape.sbgn namespace did not need to be there.  These were draw/intersect/point functions. However, there are a few functions that are still required to be in cytoscape.sbgn.

These are the functions and objects that are needed by the modified cytoscape.js (removing them breaks SBGNRenderer).  

* ```sbgnShapes```: A map/object of custom sbgn shapes that were added to cytoscape's base node shapes
* ```isNodeShapeTotallyOverriden```: Checks if the custom node implements each of {draw, intersect, checkPoint}
* ```isMultimer```: Check if a node has the class of multimer
* ```addPortReplacementIfAny```:  Not sure what it does exactly, but modified cytoscape throws an error if it is not defined

### Where these functions are used in modified cytoscape.js


#### $$.sbgn.isMultimer(node)

* Number of times used: 1
* Location: ```src/collection/dimensions.js```
* line:  ```567```
* function: ```boundingBoxImpl```

```js
      if(sbgn.isMultimer(ele)) {
        var shape = ele.css('shape');
        var multimerPadding =  baseNodeShapes[shape].multimerPadding;
        ex2 += multimerPadding;
        ey2 += multimerPadding;
      }
```

#### $$.sbgn.isNodeShapeTotallyOverriden(node):

* Number of times used: 9
* Location:
  * ```src/extensions/renderer/base/coord-ele-math.js``` lines 276, 1257, 1273, 1322, 1623, 1666, 2019, 2121
```js
sbgn.isNodeShapeTotallyOverriden(self, node) ? shape.checkPoint(x, y, node, 0) : shape.checkPoint(x, y, 0, width, height, pos.x, pos.y)

```

#### $$.sbgn.sbgnShapes

* Number of times used: 4
* Locations:
  * ```src/extensions/renderer/canvas/drawing-images.js``` lines 121, 146 ```CRp.drawInscribedImage```
  * ```src/extensions/renderer/canvas/drawing-nodes.js``` lines 144, 189 ```CRp.drawNode```
```js
        if(sbgn.sbgnShapes[this.getNodeShape(node)]) {
            this.nodeShapes[this.getNodeShape(node)].draw(context, node);
        }
```

#### $$.sbgn.addPortReplacementIfAny

* Number of times used: 2
* Location:
  * ```src/extensions/renderer/base/coord-ele-math.js``` lines 2068, 2069
```js
    if(!segments){
      var portP1 = sbgn.addPortReplacementIfAny(source, portsource);
      var portP2 = sbgn.addPortReplacementIfAny(target, porttarget);

      if(portP1.x != srcPos.x || portP1.y != srcPos.y){
        p1[0] = portP1.x;
        p1[1] = portP1.y;
      }

      if(portP2.x != tgtPos.x || portP2.y != tgtPos.y){
        p2[0] = portP2.x;
        p2[1] = portP2.y;
      }
```
