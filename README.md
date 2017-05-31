# SBGN Renderer
A JavaSript library that renders biological networks using cytoscape.js and the System Biology Graphical Notation language

### Purpose
To render SBGN(Systems Biology Graphical Notation) graphs -- a visual language for representing biological processes.

### Requirements
Input needs to be formatted Cytoscape.js graph JSON.  

The following graph JSON structure is required:
```
{
  nodes: [],  // array of nodes
  edges: []   // array of edges
}
```

#### Supported SBGN classes
Nodes:
* simple chemical
* simple chemical multimer
* macromolecule
* macromolecule multimer
* nucleic acid feature
* nucleic acid feature multimer
* compartment
* unspecified entity
* perturbing agent
* complex
* phenotype
* tag
* process
* uncertain process
* omitted process
* source and sink
* dissociation
* association
* and
* or
* not

Edges:
* necessary stimulation
* production
* consumption
* stimulation
* catalysis
* inhibition


The following node JSON structure is required:
```
      "data": {
        "id": "glyph23",                   // id of the node
        "class": "simple chemical",        // class of the node (see classes section for a list of supported sbgn glyphs
        "label": "Ca2+",                   // label to be displayed on the node
        "parent": "glyph2",                // parent node id if any
        "clonemarker": false,              // whether the node has a clonemarker or not
        "stateVariables": [],              // an array of state variables
        "unitsOfInformation": [],          // an array of units of information
      }
```
The following edge JSON structure is required:
```
      "data": {
        "id": "glyph19-glyph5",            // id
        "class": "production",             // sbgn class
        "cardinality": 0,                  // cardinality
        "source": "glyph19",               // source node id
        "target": "glyph5",                // target node id
        "portSource": "glyph19",           // port of the source
        "portTarget": "glyph5"             // port of the target
      }
```

To get Cytoscape.js graph JSON, you need the following:
* SBGN-ML files; xml files that represent biological networks.
* An [SBGN-ML to Cytoscape.js converter](https://github.com/PathwayCommons/sbgnml-to-cytoscape).


### Installation
SBGN Renderer can be installed via npm

```
npm install sbgn-renderer
```

### Usage

SBGNRenderer provides Cytoscape.js's API, as well as SBGN specific functions for SBGN graph analysis.
Learn how to use SBGNRenderer by learning how to use [Cytoscape.js](http://js.cytoscape.org/#introduction)
Learn how to use the [SBGN API] ()

CommonJS Usage
```js
var SBGNRenderer = require('sbgn-renderer');

var renderer = new SBGNRenderer(/* opts */);
renderer.nodes();    // get cytoscape graph nodes
renderer.edges();    // get cytoscape graph edges
// renderer.<cytoscape-api-method-here>
```

##### Demo
For a detailed example, refer to the code in the [demo](https://github.com/PathwayCommons/sbgn-renderer/tree/master/demo):

###### Running the Demo
Clone this repository
```
git clone https://github.com/PathwayCommons/sbgn-renderer
```

Change directory to the newly cloned folder
```
cd sbgn-renderer
```

Run a local server
```
node http-server -p <PORT>
```

Open your browser and type the following address:
```
localhost:<PORT>/demo/
```

### Building the Library

The following npm scripts are available.  To run a script, type:

```
npm run <command>
```

* ```build```: Builds the sbgn-renderer library; Places it in the dist folder
* ```build-demo```: Builds the browserify version of the demo app in the demo folder
* ```clean```: Removes the browserify demo bundle and the contents of the dist folder
* ```watch```: Watches for changes in the src directory and builds the library in response
* ```watch-demo```: Watches for changes in demo/browserify-entry.js and builds the demo in response
