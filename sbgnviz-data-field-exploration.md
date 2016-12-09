# SBGNViz Core Function Notes

The purpose of this document is to provide lower level details about how sbgnviz works, and how it interacts with cytoscape.js.  
The subject of study will be the data contained in sbgn graph json, and how it is consumed by sbgnviz

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










# Thoughts and Observations

## Consistency of data fields

* The Sbgnml converter does not generate node data consistenly.  For example, clonemarker is either in the node and is set to true, or is not in the node -- I think that clonemarker should always appear and be set to either true or false
* Label seems to be the most accurate identifier to what the node actually represents -- might be useful when considering data mapping for the painter
* In most of the sample sbgnml files, nodes have an id of glyph_number.  In one file however, ids take the form of http___www.reactome.org_biopax_48887PhysicalEntity136_http___www.reactome.org_biopax_48887Complex2698.  Perhaps this is another piece of the puzzle for mapping data fields to ids in the painter app

## Nice to haves

* A client app that can generate a large sample of sbgnml to json data, and a way to query this data.


