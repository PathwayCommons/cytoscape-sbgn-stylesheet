# sbgn-renderer
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
npm install sbgn-renderer
```
OR
2. Copy the pre-built library from the [dist](https://github.com/d2fong/sbgn-renderer/blob/master/dist/sbgnRenderer.js) folder and link it in your html file
```
<html>
...
<script src="sbgn-renderer.js"></script>
...
</html>
```

## Usage

```js
var SbgnRenderer = require('sbgn-renderer');
var convertSbgnml = require('sbgnml-to-cytoscape');

var myFileText = ... // some text that represents sbgnml
var myGraph = convertSbgnml(myFileText);

var myContainer = document.getElementById('#my-container');
var renderer = new SbgnRenderer({container: myContainer});

renderer.renderGraph(myGraph);

```
## API

### SbgnRenderer

Creates new renderer instances

#### Initialization
```js
var renderer = new SbgnRenderer({
  container: document.getElementById('#myContainer')
});
```
#### Options

```container```: A HTML DOM element in which the graph should be rendered


### SbgnRenderer.renderGraph(cytoscapeGraphJson)

Renders the given graph

#### input
```cytoscapeGraphJson```: JSON representing your biological network.  

Please look at the requirements for more information on how to acquire valid input 


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
localhost:<PORT>/demo/with-plainjs.html
```
