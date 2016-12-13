# Modified Cytoscape.js Changes Documentation

## Purpose
The purpose of this document is to explain some of changes made to Cytoscape.js.

[The original document](https://raw.githubusercontent.com/iVis-at-Bilkent/cytoscape.js/unstable/cy-modifications.txt)


### cytoscape/src/extensions/renderer/base/coord-ele-math.js

#### Commented out code

##### checkNode -- line 268
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


####

### cytoscape/src/extensions/renderer/base/node-shapes.js

### cytoscape/src/extensions/renderer/base/arrow-shapes.js

### cytoscape/src/extensions/renderer/canvas/arrow-shapes.js

### cytoscape/src/extensions/renderer/canvas/drawing-edges.js

### cytoscape/src/extensions/renderer/canvas/drawing-nodes.js

### cytoscape/src/extensions/renderer/canvas/index.js

### cytoscape/src/collection/dimensions.js

### cytoscape/src/index.js

### cytoscape/src/sbgn.js





In coord-ele-math.js
    
    In checkNode function inside findNearestElement, and BRp.findEdgeControlPoints shape.checkPoint and similar function calls are
    replaced. An example replaced statement is "sbgn.isNodeShapeTotallyOverriden(self, node)?shape.checkPoint( x, y, node, 0 ):shape.checkPoint(x, y, 0, width, height, pos.x, pos.y)"

    In BRp.findEdgeControlPoints portsource and porttarget are considered while swapping src and tgt.
    
    IntersectLine function calls are conditinally replaced(If the shape of that node is totally overriden).
    An example call is here.
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
     
    In 'BRp.findEndpoints' 
        add  'var porttarget = edge._private.data.porttarget;'
             'var portsource = edge._private.data.portsource;' inside variables.
        append
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
          }
        to the end of 'else if( lines )'

        change dx and dy while calculating vectorNorm as the following

        "var dy = ( tgtPos.y - srcPos.y );
        var dx = ( tgtPos.x - srcPos.x );"

In node-shapes.js
    In BRp.registerNodeShapes function 
        Add "BRp.nodeShapes = {};" immediately after "var BRp = {};"
        "var nodeShapes = this.nodeShapes = {}" => "var nodeShapes = this.nodeShapes = BRp.nodeShapes;"
        Add "sbgn.registerSbgnNodeShapes();" statement to BRp.registerNodeShapes function.

In drawing-nodes.js and drawing-edges.js
    Change draw function calls of nodeshapes.
    An example call is 
    "if(sbgn.sbgnShapes[this.getNodeShape(node)]){
        r.nodeShapes[this.getNodeShape(node)].draw(
            context,
            node);
    }
    else{
        r.nodeShapes[r.getNodeShape(node)].draw(
          context,
          nodeX, nodeY,
          nodeW, nodeH);
    }"

In extensions\renderer\canvas\index.js
    CRp.usePaths returns false

In index.js
    Expose more things for sbgnviz

In extensions\renderer\base\arrow-shapes.js
    Add 'sbgn.registerSbgnArrowShapes();' to the end of 'registerArrowShapes' function
    Add 'BRp.arrowShapes = {};' immediately after 'var BRp = {}';
    Replace 'var arrowShapes = this.arrowShapes = {};' at the beggining of 'registerArrowShapes' function with 'var arrowShapes = this.arrowShapes = BRp.arrowShapes;'

In extensions\renderer\canvas\arrow-shapes.js
    In 'triangle-tee' function remove 'context.beginPath()' and 'context.endPath()'
    Replace the order of drawing 'triangle' and 'tee' (triangle must come first)
    In total we use the old (Same as Cytoscape.js 2.7.5) implementation for this

In dimensions.js
    consider state-infos, multimers, ports on bounding box calculation 
    (refer to 'https://github.com/iVis-at-Bilkent/sbgnviz-js/commit/12d400fef6cec4784c33abc10f680b7efe4ca34b' and 
    'https://github.com/iVis-at-Bilkent/sbgnviz-js/commit/9f63661e1597df4ecf8f3ea6bbb585ee3c91a301')
    Note that nomore there is cyVariables require node-shapes under base folder and use its nodeShapes property instead of using 'cyVariables.cyNodeShapes'

Add sbgn.js under src folder and require it whenever it is used.
