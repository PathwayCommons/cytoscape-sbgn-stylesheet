# SBGNViz Data Field Exploration

The purpose of this document is to provide lower level details about how sbgnviz works, and how it interacts with cytoscape.js.  
The subject of study will be the data contained in sbgn graph json, and how it is consumed by sbgnviz.

## SBGN Graph JSON

SBGN Graph JSON is valid JSON of the form:

{
  "nodes": [list of SBGN Nodes],
  "edges": [list of SBGN Edges]
}


## SBGN Node JSON
Each node in the SBGN graph is represented by a JSON object in the nodes array.

SBGN Node JSON is valid JSON and takes the form similar to this example:

       {
            "data": {
                "id": "glyph4",
                "bbox": {
                    "x": 318.1589165885067,
                    "y": 162.59898679973332,
                    "w": "60.0",
                    "h": "60.0"
                },
                "class": "simple chemical",
                "label": "ATP",
                "statesandinfos": [],
                "parent": "",
                "clonemarker": true,
                "ports": []
            }
        }

There are eight fields contained in SBGN node JSON data.

They are: 
* ```id```: Represents the node id
* ```bbox```: Represents the bounding box of the node -- used to calculate the initial position of the node when rendering the sbgn graph
* ```class```: The SBGN specific graphic to be displayed e.g (simple chemical, macromolecule, etc.)
* ```label```: The label often represents the actual name of biological entity (PolyQ aggregates, Hsp70, Sis1, etc.)
* ```stateandinfos```: An array of extra quantitative information such as state variables and units of information
* ```clonemarker```: A marker to determine whether or not this node already appears.
* ```parent```: The node's parent
* ```ports```: An array of something.  I am having a hard time trying to find a node that has anything other than an empty array for this value

## SBGN Edge JSON

Each edge in the SBGN graph is represented by a JSON object in the edges array.

SBGN edge JSON is valid JSON and takes the form similar to this example:

        {
            "data": {
                "id": "arc0",
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph36",
                "target": "glyph67",
                "portsource": "glyph36",
                "porttarget": "glyph67.1"
            }
        }
        
* ```class```: Represents the relationship between the source and target
* ```bendPointPositions```: Usage unknown -- assumed to be the points at which the edge can bend
* ```cardinality```: Usage unknown -- not sure what cardinality means in this context
* ```source```: Source node id
* ```target```: Target node id
* ```portsource```: At what port in the source node does the edge attach to
* ```porttarget```: At what port in the target node does the edge attach to

# How the Data is Used

This section will explain how the data fiels in nodes above are use in SBGNViz

## Graph Styling

These fields are used to style the graph such that SBGN is approximately represented in cytoscape.js.


### [https://github.com/d2fong/sbgn-renderer/tree/master/src/style/nodeProperties.js](https://github.com/d2fong/sbgn-renderer/blob/master/src/style/nodeProperties.js)

These functions map nodes to presentational values.  

#### Example: 

graphStyleSheet.js
```js 

        .selector('node[class]')
        .css({
          'shape': function (cyNode) {
            return nodeProperties.getCyShape(cyNode);
          }
        })
```
nodeProperties.js
```js
nodeProperties.getCyShape = function(cyNode) {
  var _class = cyNode.data('class');
  if (_class.endsWith(' multimer')) {
    _class = _class.replace(' multimer', '');
  }

  if (_class == 'compartment') {
    return 'roundrectangle';
  }
  if (_class == 'phenotype') {
    return 'hexagon';
  }
  if (_class == 'perturbing agent' || _class == 'tag') {
    return 'polygon';
  }
  if (_class == 'source and sink' || _class == 'nucleic acid feature' || _class == 'dissociation'
      || _class == 'macromolecule' || _class == 'simple chemical' || _class == 'complex'
      || _class == 'unspecified entity' || _class == 'process' || _class == 'omitted process'
      || _class == 'uncertain process' || _class == 'association') {
    return _class;
  }
  return 'ellipse';
};
```
Cytoscape.js renders the node with different shapes depending on the values in the node JSON.


## Graph Rendering

The fields in the graph JSON are used extensively when rendering the graph.  Please read [sbgnviz-augment-exploration](https://github.com/d2fong/sbgn-renderer/edit/master/documentation/sbgnviz-augment-exploration.md)

# Thoughts and Observations

## Consistency of data fields

* The Sbgnml converter does not generate node data consistenly.  For example, clonemarker is either in the node and is set to true, or is not in the node -- I think that clonemarker should always appear and be set to either true or false
* Label seems to be the most accurate identifier to what the node actually represents -- might be useful when considering data mapping for the painter
* In most of the sample sbgnml files, nodes have an id of glyph_number.  In one file however, ids take the form of http___www.reactome.org_biopax_48887PhysicalEntity136_http___www.reactome.org_biopax_48887Complex2698.  Perhaps this is another piece of the puzzle for mapping data fields to ids in the painter app

## Thinking about the future

* The current way that SBGNviz styles elements based on SBGN rules is not sustainable for the future.  SBGN is an evolving language.  New layers (1.1, 1.2, 1.3) of the language have been developed since the original and having the presentational mapping in a set of functions in nodeProperties.js is not the ideal way to handle this problem.  I think that a config based approach would be better. Instead of creating these functions and then referencing them in the stylesheet, create a config, mapping nodes to values and then accessing them directly from the config in the graph stylesheet.


## Nice to haves

* A client app that can generate a large sample of sbgnml to json data, and a way to query this data.


