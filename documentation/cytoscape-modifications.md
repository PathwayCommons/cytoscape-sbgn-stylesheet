# Modified Cytoscape.js Changes Documentation

## Purpose
The purpose of this document is to explain some of changes made to Cytoscape.js.

[The original document](https://raw.githubusercontent.com/iVis-at-Bilkent/cytoscape.js/unstable/cy-modifications.txt)


### cytoscape/src/extensions/renderer/base/coord-ele-math.js

##### checkNode -- line 268
Remove bounding box condition checks
```js
//    if(
//      pos.x - hw <= x && x <= pos.x + hw // bb check x
//        &&
//      pos.y - hh <= y && y <= pos.y + hh // bb check y
//    ){
```

##### Brp.getNodeShape -- line 538 
To remove the restriction of a parent needing to have a specific shape.

```js
BRp.getNodeShape = function( node ){
  var r = this;
  var shape = node.pstyle( 'shape' ).value;

//  if( node.isParent() ){
//    if( shape === 'rectangle' || shape === 'roundrectangle' ){
//      return shape;
//    } else {
//      return 'rectangle';
//    }
//  }
```


##### BRp.findNearestElements.checkNode et. al
Conditionally perform overriden functionality if the shape implements overriden functionality.

```js
line 276 
sbgn.isNodeShapeTotallyOverriden(self, node)?shape.checkPoint( x, y, node, 0 ):shape.checkPoint(x, y, 0, width, height, pos.x, pos.y)
```

Conditionally perform overriden intersection functionality if the node is a sbgn shape.

```js 
line 1257
     "if(sbgn.isNodeShapeTotallyOverriden(this, src))
        srcOutside = srcShape.intersectLine(src, tgtPos.x, tgtPos.y, edge._private.data.porttarget);
      else
        srcOutside = srcShape.intersectLine(
          srcPos.x,
          srcPos.y,
          srcW,
          srcH,
          tgtPos.x,
          tgtPos.y,
          0
        );"
```

##### BRp.findEndPoints -- line 2039-2040
Node data port target and port source considered in the find edge points computation
```js
var porttarget = edge._private.data.porttarget;
var portsource = edge._private.data.portsource;
```

### cytoscape/src/extensions/renderer/base/node-shapes.js

#### Brp -- line 8, 166, 250
Register the custom SBGN node shapes in augmentCytoscape.js.
Expose a nodeShapes object that gets populated with custom SBGN node shapes.

```js
  line 250
  sbgn.registerSbgnNodeShapes();
```

### cytoscape/src/extensions/renderer/base/arrow-shapes.js
Register the custom SBGN arrow shapes in augmentCytoscape.js.
Expose a arrowShapes object that gets populated with custom SBGN arrow shapes.

```js
line 271
  sbgn.registerSbgnNodeShapes();
```

### cytoscape/src/extensions/renderer/canvas/arrow-shapes.js
In 'triangle-tee' function remove 'context.beginPath()' and 'context.endPath()'
Replace the order of drawing 'triangle' and 'tee' (triangle must come first)
In total we use the old (Same as Cytoscape.js 2.7.5) implementation for this


### cytoscape/src/extensions/renderer/canvas/drawing-edges.js
Custom SBGN edges rendering is executed here.  
Checks if a edge is an SBGN egde.  If it is, executes custom drawing.

### cytoscape/src/extensions/renderer/canvas/drawing-nodes.js

Custom SBGN node rendering is executed here.  
Checks if a node is an SBGN node.  If it is, executes custom drawing.

### cytoscape/src/extensions/renderer/canvas/index.js
CRp.usePaths returns false

### cytoscape/src/collection/dimensions.js
Custom bounding box calculation logic for SBGN nodes.

### cytoscape/src/index.js
Exposes cymath, cyNodeShapes, cyArrowShapes, etc. for use in augmentCytoscape.js

### cytoscape/src/sbgn.js
Create and export an empty object.  This object is populated by augmentCytoscape.js.
It is then required by multiple files.

