# cytoscape-sbgn-stylesheet
A Cytoscape.js package that provides SBGN specific glyph styles ([demo](https://pathwaycommons.github.io/cytoscape-sbgn-stylesheet/))

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
  style: sbgnStylesheet(cytoscape),
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

## Run targets

- `npm run build` : build project
- `npm run build-prod` : build the project for production
- `npm run bundle-profile` : visualise the bundle dependencies
- `npm run clean` : clean the project
- `npm run watch` : watch mode (debug mode enabled, autorebuild, autoreload)
- `npm test` : run tests
- `npm run lint` : lint the project

## Testing

All files `/test` will be run by [Mocha](https://mochajs.org/).  You can `npm test` to run all tests, or you can run `mocha -g specific-test-name` (prerequisite: `npm install -g mocha`) to run specific tests.

[Chai](http://chaijs.com/) is included to make the tests easier to read and write.

## Publishing a release

1. Make sure the tests are passing: `npm test`
1. Do a prod build: `npm run build-prod`
1. Make sure the linting is passing: `npm run lint`
1. Bump the version number with `npm version`, in accordance with [semver](http://semver.org/).  The `version` command in `npm` updates both `package.json` and git tags, but note that it uses a `v` prefix on the tags (e.g. `v1.2.3`).
  1. For a bug fix / patch release, run `npm version patch`.
  1. For a new feature release, run `npm version minor`.
  1. For a breaking API change, run `npm version major.`
  1. For a specific version number (e.g. 1.2.3), run `npm version 1.2.3`.
1. Push the release: `git push origin --tags`
1. Publish to npm: `npm publish .`
