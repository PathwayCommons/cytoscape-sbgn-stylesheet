# cytoscape-sbgn-stylesheet
A Cytoscape.js package that provides SBGN specific glyph styles

### Purpose
To render SBGN-PD(Systems Biology Graphical Notation) graphs -- a visual language for representing biological processes.

### Installation
Install via npm

```
npm install cytoscape-sbgn-stylesheet
```

### Usage

Initialize cytoscape.js and call this module as a stylesheet parameter

```js
var cytoscape = require('cytoscape');
var sbgnStylesheet = require('cytoscape-sbgn-stylesheet');

var cy = cytoscape({
  container: container,
  stylesheet: sbgnStylesheet(cytoscape),
  // other arguments here
});

```

### Requirements
Input needs to be formatted Cytoscape.js graph JSON.

The following graph JSON structure is required:
```
{
  nodes: [],  // array of nodes
  edges: []   // array of edges
}
```

#### Supported SBGN PD glyphs
* simple chemical multimer
* macromolecule multimer
* nucleic acid feature multimer
* complex multimer
* simple chemical
* macromolecule
* nucleic acid feature
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

#### Supported SBGN PD arcs
* necessary stimulation
* production
* consumption
* stimulation
* catalysis
* inhibition

#### Unsupported SBGN PD glyphs
* submap
* ports


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


#### Style Incompatibilities

The following cytoscape.js style properties are used to render SBGN PD graphics.  Overriding these entirely will produce unexpected behaviour:
* ```shape```
* ```width```
* ```height```
* ```background-image```
* ```background-width```
* ```background-position-x```
* ```background-position-y```
* ```background-fit```
* ```background-clip```
* ```padding```
* ```border-width```


##### Demo
For a detailed example, refer to the code in the [demo](https://github.com/PathwayCommons/cytoscape-sbgn-stylesheet/tree/master/demo):

###### Running the Demo
Clone this repository
```
git clone https://github.com/PathwayCommons/cytoscape-sbgn-stylesheet
```

Change directory to the newly cloned folder
```
cd cytoscape-sbgn-stylesheet
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

* ```build```: Builds the cytoscape-sbgn-stylesheet library; Places it in the dist folder
* ```build-demo```: Builds the browserify version of the demo app in the demo folder
* ```clean```: Removes the browserify demo bundle and the contents of the dist folder
* ```watch```: Watches for changes in the src directory and builds the library in response
* ```watch-demo```: Watches for changes in demo/browserify-entry.js and builds the demo in response
