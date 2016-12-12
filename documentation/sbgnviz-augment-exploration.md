# SBGNViz Augment Exploration

The purpose of this document is to provide lower level details about how sbgnviz works, and how it interacts with cytoscape.js
The subject of study will be the functions that are appended on to cytoscape.js via the augment function.

## Key Functions of augmentCytoscape.js

1.  To register custom shapes within cytoscape.js
2.  To provide rendering implementations for these custom node shapes

### Registering custom node/arrow/line shapes

SBGNViz exposes the cytoscape's base nodeShapes - and adds new shapes to this collection.  

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

These are the functions that are needed by the modified cytoscape.js (removing them breaks SBGNViz).  

* ```isNodeShapeTotallyOverriden```: Checks if the custom node implements each of {draw, intersect, checkPoint}
* ```addPortReplacementIfAny```:  Not sure what it does exactly, but modified cytoscape throws an error if it is not defined
* ```isMultimer```: Check if a node has the class of multimer
