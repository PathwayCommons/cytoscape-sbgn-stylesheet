# sbgn-renderer
A JavaSript library that renders biological networks using cytoscape.js and the System Biology Graphical Notation language

# Purpose
The purpose of this library is to take json that represents biological networks i.e graphs, and display them in the browser using
System Biology Graphical Notation.  A standard notation for describing and visually representing biological processes.

# Installation
There are two ways to install this module

1. npm:
```
npm install sbgn-renderer
```
2. Copy the pre-built library from the [dist](https://github.com/d2fong/sbgn-renderer/blob/master/dist/sbgnRenderer.js) folder and link it in your html file
```
<html>
...
<script src="sbgn-renderer.js"></script>
...
</html>
```


# Running the Demo:
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
