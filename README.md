# sbgn-renderer (Working Title.  It will most likely be merged back into SBGNViz.js)
A JavaSript library that renders biological networks using cytoscape.js and the System Biology Graphical Notation language

## Purpose
The purpose of this library is to take json that represents biological networks i.e graphs, and display them in the browser using
System Biology Graphical Notation.  A standard notation for describing and visually representing biological processes.

## Requirements
The renderer expects cytoscape graph JSON.  To get cytoscape graph JSON, you need the following:
* SBGN-ML files: xml files that represent biological networks.
* A way to convert these files into graph JSON.  This is a nice [package](https://github.com/PathwayCommons/sbgnml-to-cytoscape) that does the job

## Installation
There are two ways to install this module

1. npm:
```
npm install sbgnviz.js
```
OR
2. Copy the pre-built library from the [dist](https://github.com/d2fong/sbgn-renderer/blob/master/dist/sbgnRenderer.js) folder and link it in your html file
```
<html>
...
<script src="sbgnviz.js"></script>
...
</html>
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

Run a local server (any one will do)
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

```build```: Builds the sbgn-renderer library; Places it in the dist folder
```build-demo```: Builds the browserify version of the demo app in the demo folder
```clean```: Removes the browserify demo bundle and the contents of the dist folder
```watch```: Watches for changes in the src directory and builds the library in response
```watch-demo```: Watches for changes in demo/browserify-entry.js and builds the demo in response

## Credits

This repository borrows heavily from the code in [sbgnviz.js](https://github.com/iVis-at-Bilkent/sbgnviz.js).
Therefore, credit and recognition must be given to the team at Bilkent University, Turkey.

#### Bilkent team members:

* Metin Can Siper, Selim Firat Yilmaz, Ugur Dogrusoz, Alper Karacelik of [i-Vis at Bilkent University](http://www.cs.bilkent.edu.tr/~ivis).

While the code is similar, PathwayCommons and i-Vis at Bilkent have different needs and different goals.  Sbgn-render exists to put PathwayCommons into a position that more closely aligns with these needs and goals.

