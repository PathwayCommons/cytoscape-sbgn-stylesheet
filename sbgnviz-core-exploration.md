# SBGNViz Core Function Notes

The purpose of this document is to provide lower level details about how sbgnviz works, and how it interacts with cytoscape.js.  
There are two areas in particular that will be the subject of study.

1. The data contained in sbgn graph json, and how it is consumed by sbgnviz
2. The functions that are augmented onto cytoscape and exposed to the global scope

## SBGN Graph JSON

SBGN Graph JSON is valid JSON of the form:

{
  "nodes": [list of SBGN Nodes],
  "edges": [list of SBGN Edges]
}


### SBGN Node JSON
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

There are five fields contained in SBGN node JSON data.
They are: id, bbox, class, stateandinfos, parent and ports
