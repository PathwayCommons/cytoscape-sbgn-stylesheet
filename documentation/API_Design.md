# Cytoscape-sbgn API ideas

## Key Goals

* To provide a thin biological layer over Cytoscape.js
* To provide 'SBGN-Aware' functionality ontop of the existing Cytoscape.js functionality

## Core API

### style()

This is a proxy of the regular Cytoscape.js style() function.

Benefits of this function:
1. it allows Bilkent to have their options for text size and text wrapping
2. flexibility to support different versions of SBGN 


* ```sbgn.style( stylesheet )```: an object representing a stylesheet can be set
* ```sbgn.style()```: get the current style object

### render()

Render an sbgn graph. 

This function:
1. uses Cytoscape to add the graph JSON
2. position each node to the position specified in the JSON
3. set compound padding

* ```sbgn.render( sbgnGraphJSON )```: render the given graph JSON

### processDescriptionGlyphs()

Return the SBGN specific elements that this library recognizes.
This allows the library to be flexible and adopt SBGN language changes.

Example use:  default to SBGN layer 1, but allow users to configure it to a different layer that could contain new elements.

* ```sbgn.processDescriptionGlyphs()```: returns an object detailing what aux units, entity pool nodes, etc. are currently considered valid.
* ```sbgn.processDescriptionGlyphs( glyphJSON )```: set the process description 


## Collection API

Functions that operate on the nodes and edges of the graph.

### compartmentNodes()

Returns the compartment nodes in the graph.

### processNodes()

Returns the process nodes in the graph.

### nodes( selector )

Proxy of Cytoscape.js advertised with the ability to search nodes that have a specific sbgn class.
e.g sbgn.nodes('class["macromolecule"]')

### edges ( selector )

Proxy of Cytoscape.js advertised with the ability to search edges that have a specific sbgn class.
e.g sbgn.edges('class["consumption"]')

### sbgnInfo( seletor )

Gets the sbgn specific data for each of the elements returned by selector.

### neighbours( node )

Returns the nodes that are neighbours to the given node.



