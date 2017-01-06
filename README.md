# sbgn-renderer (Working Title.  It will most likely be merged back into SBGNViz.js)
A JavaSript library that renders biological networks using cytoscape.js and the System Biology Graphical Notation language

## Purpose
To render SBGN(Systems Biology Graphical Notation) graphs -- a visual language for representing biological processes.

## Requirements
Input needs to be formatted Cytoscape.js graph JSON.  

To get Cytoscape.js graph JSON, you need the following:
* SBGN-ML files; xml files that represent biological networks.
* An [SBGN-ML to Cytoscape.js converter](https://github.com/PathwayCommons/sbgnml-to-cytoscape).

## Installation
SBGNViz.js can be installed via npm or by downloading the dist file.

1. npm:
```
npm install sbgnviz.js
```
OR
2. The pre-built library from [the dist directory](https://github.com/d2fong/sbgn-renderer/blob/master/dist/sbgnvjz.js).
```
<html>
...
<script src="sbgnviz.js"></script>
...
</html>
```

## Usage

SBGNViz is a Cytoscape.js instance under the hood.  Learn how to use SBGNViz by learning how to use [Cytoscape.js](http://js.cytoscape.org/#introduction)

```js
var renderer = new SBGNViz(/* opts */);

renderer.nodes();    // get cytoscape graph nodes
renderer.edges();    // get cytoscape graph edges
// renderer.<cytoscape-api-method-here>

```

## Running the Demo:
Clone this repository
```
git clone https://github.com/d2fong/sbgn-renderer
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
localhost:<PORT>/demo/with-browserify.html
```

## Building the Library

The following npm scripts are available.  To run a script, type:

```
npm run <command>
```

* ```build```: Builds the sbgn-renderer library; Places it in the dist folder
* ```build-demo```: Builds the browserify version of the demo app in the demo folder
* ```clean```: Removes the browserify demo bundle and the contents of the dist folder
* ```watch```: Watches for changes in the src directory and builds the library in response
* ```watch-demo```: Watches for changes in demo/browserify-entry.js and builds the demo in response

## Credits
Most of the code in this repository is derived from [sbgnviz.js](https://github.com/iVis-at-Bilkent/sbgnviz.js).
Credit and recognition to the team at Bilkent University, Turkey.

#### Bilkent team members:

* Metin Can Siper, Selim Firat Yilmaz, Ugur Dogrusoz, Alper Karacelik of [i-Vis at Bilkent University](http://www.cs.bilkent.edu.tr/~ivis).

