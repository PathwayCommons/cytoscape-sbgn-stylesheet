# History - Revealing the Black Box

This document provides context for the sbgn-renderer project.  It explores the history
and reasoning behind some of the design decisions that were made and how they have shaped the construction of this module.

## Order in the Chaos

The main factor that influenced the creation of this module was to reduce chaos.  To
provide a simple interface for rendering sbgn graphs.  

## Exposing the Roots

Most of the code in this module has been pulled from [sbgnviz.js](https://github.com/iVis-at-Bilkent/sbgnviz.js).  

The ancestry for the code of each file in this repository can be mapped back to a file in sbgnviz.js


#### src/augmentCytoscape.js
* https://github.com/iVis-at-Bilkent/sbgnviz.js/blob/master/src/sbgn-extensions/sbgn-cy-renderer.js
*  This file contains the core functionality of sbgn-renderer.  It handles the responsibility of drawing sbgn related graphics to a HTML5 canvas in conjunction with cytoscape.js.

#### src/style/graphStyleSheet.js
* https://github.com/iVis-at-Bilkent/sbgnviz.js/blob/master/src/sbgn-extensions/sbgn-cy-instance.js
* This file contains the styling of the graph.  In particular, how each node and edge looks according to some ruleset.

#### src/style/nodeProperties.js
https://github.com/iVis-at-Bilkent/sbgnviz.js/blob/master/src/utilities/element-utilities.js
* The file contains sbgn specific settings for the styling of nodes.  Based on node properties, these functions return style values that determine how these nodes will look in the graph.

#### src/index.js:```renderGraph(cytoscapeGraphJson)```
https://github.com/iVis-at-Bilkent/sbgnviz.js/blob/master/src/utilities/graph-utilities.js
* The main interface for the renderer.  It takes in a specifically formatted json graph, and renders it to the canvas.  


## Fork of My Fork

Cytoscape.js does not support drawing SBGN specific shapes out of the box.  During the early
iterations of sbgnviz.js development, a local copy of cytoscape was kept and modified to implement the functionality to support drawing SBGN shapes.  

A readme that described what changes were made, along with the modified cytoscape file
were available here:

https://github.com/iVis-at-Bilkent/sbgnviz.js/tree/6ecf9c54438b2f0d0f48aa6f16fe29e82a70c70a/lib

Today, the modified cytoscape file lives in its own official Fork:
https://github.com/iVis-at-Bilkent/cytoscape.js

It is available for installtion via npm.  It goes by the name of ```cytoscape-for-sbgnviz```.

While the modified cytoscape.js code in ```cytoscape-for-sbgnviz``` can be considered a 'hack' -- to this day it remains as the core component of this module.  sbgn-renderer will not work with out it.

Outside of the functionality that was changed in cytoscape.js renderer, it works mostly
the same as vanilla cytoscape.js.

# Architecture - Down the Rabbit Hole

## Stand on the Shoulders of Giants

sbgn-renderer is designed as a light wrapper around [the modified cytoscape.js](https://github.com/cytoscape/cytoscape.js); Leveraging its power and ease of use.

A large portion of the code in the renderer will make more sense by reading the cytoscape.js [documentation](http://js.cytoscape.org/) and the cytoscape.js [source code](https://github.com/cytoscape/cytoscape.js/tree/master/src).  

#### SbgnRenderer.cy()

A instance of cytoscape embedded in the renderer.  All cytoscape.js related actions that you want to perform on the graph can be accessed through this embedded instance.  

Painting nodes, saving images, the possibilities are limited only by what cytoscape.js provides.  

## Don't Repeat Yourself

The sbgn renderer is a critical component in a variety of apps that are coming down the pipeline.  It will be used in a viewer app, a painter app, a searcher app, and also serve as an embeddable widget.  By doing one thing well, this component will serve as the foundation for the future.
