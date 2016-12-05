(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var Renderer = require('../src/index');

$(document).ready(function () {

    var data = {
    "nodes": [
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
        },
        {
            "data": {
                "id": "glyph5",
                "bbox": {
                    "x": 368.7150698032765,
                    "y": 353.3425311332147,
                    "w": "60.0",
                    "h": "60.0"
                },
                "class": "simple chemical",
                "label": "ADP",
                "statesandinfos": [],
                "parent": "",
                "clonemarker": true,
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph7",
                "bbox": {
                    "x": 423.4601247086921,
                    "y": 103.68144699737059,
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
        },
        {
            "data": {
                "id": "glyph6",
                "bbox": {
                    "x": 514.8286564804162,
                    "y": 40.16169718646756,
                    "w": "60.0",
                    "h": "60.0"
                },
                "class": "simple chemical",
                "label": "ADP",
                "statesandinfos": [],
                "parent": "",
                "clonemarker": true,
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph10",
                "bbox": {
                    "x": 588.775693273037,
                    "y": 410.5318087906144,
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
        },
        {
            "data": {
                "id": "glyph9",
                "bbox": {
                    "x": 497.6859428037237,
                    "y": 352.2241646137692,
                    "w": "60.0",
                    "h": "60.0"
                },
                "class": "simple chemical",
                "label": "ADP",
                "statesandinfos": [],
                "parent": "",
                "clonemarker": true,
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph2",
                "bbox": {
                    "x": 467.18302213209245,
                    "y": 240.2873064873903,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "RAF",
                "statesandinfos": [
                    {
                        "id": "glyph2a",
                        "clazz": "state variable",
                        "state": {
                            "value": "P"
                        },
                        "bbox": {
                            "x": 0,
                            "y": 50,
                            "w": "25.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph18",
                "bbox": {
                    "x": 944.040949176361,
                    "y": 284.0657446868406,
                    "w": "60.0",
                    "h": "60.0"
                },
                "class": "simple chemical",
                "label": "ADP",
                "statesandinfos": [],
                "parent": "",
                "clonemarker": true,
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph16",
                "bbox": {
                    "x": 689.1314585303767,
                    "y": 482.44467100584745,
                    "w": "60.0",
                    "h": "60.0"
                },
                "class": "simple chemical",
                "label": "ADP",
                "statesandinfos": [],
                "parent": "",
                "clonemarker": true,
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph15",
                "bbox": {
                    "x": 882.8443326294546,
                    "y": 482.5246268128043,
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
        },
        {
            "data": {
                "id": "glyph17",
                "bbox": {
                    "x": 759.9810408902129,
                    "y": 220.58540441014577,
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
        },
        {
            "data": {
                "id": "glyph12",
                "bbox": {
                    "x": 722.5240088762721,
                    "y": 352.770069365478,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "MEK",
                "statesandinfos": [
                    {
                        "id": "glyph12a",
                        "clazz": "state variable",
                        "state": {
                            "value": "2P"
                        },
                        "bbox": {
                            "x": 0,
                            "y": 50,
                            "w": "32.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph19",
                "bbox": {
                    "x": 887.0312955929699,
                    "y": 188.01104320899924,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "ERK",
                "statesandinfos": [
                    {
                        "id": "glyph19a",
                        "clazz": "state variable",
                        "state": {
                            "value": "2P"
                        },
                        "bbox": {
                            "x": -25,
                            "y": 50,
                            "w": "32.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph20",
                "bbox": {
                    "x": 971.0567176507191,
                    "y": 84.6685272739719,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "tag",
                "label": "ERK",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph1",
                "bbox": {
                    "x": 213.55056132706864,
                    "y": 236.18933213306605,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "RAS",
                "statesandinfos": [
                    {
                        "id": "glyph1a",
                        "clazz": "state variable",
                        "state": {
                            "value": "active"
                        },
                        "bbox": {
                            "x": 0,
                            "y": 50,
                            "w": "50.0",
                            "h": "26.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph0",
                "bbox": {
                    "x": 60.134389512288635,
                    "y": 200.02587224541605,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "tag",
                "label": "RAS",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph24",
                "bbox": {
                    "x": 607.5584862953788,
                    "y": 216.36466489184716,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "MEK",
                "statesandinfos": [
                    {
                        "id": "glyph24a",
                        "clazz": "state variable",
                        "state": {
                            "value": "P"
                        },
                        "bbox": {
                            "x": -25,
                            "y": 50,
                            "w": "25.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph11",
                "bbox": {
                    "x": 592.6185230656652,
                    "y": 313.4502085225929,
                    "w": "20.0",
                    "h": "20.0"
                },
                "class": "process",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph25",
                "bbox": {
                    "x": 247.4431965319236,
                    "y": 338.29565236558483,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "RAF",
                "statesandinfos": [
                    {
                        "id": "glyph25a",
                        "clazz": "state variable",
                        "state": {},
                        "bbox": {
                            "x": 0,
                            "y": 50,
                            "w": "20.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph3",
                "bbox": {
                    "x": 337.77918025112933,
                    "y": 259.13454532846924,
                    "w": "20.0",
                    "h": "20.0"
                },
                "class": "process",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph23",
                "bbox": {
                    "x": 631.3665810796247,
                    "y": 93.61445750305336,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "MEK",
                "statesandinfos": [
                    {
                        "id": "glyph23a",
                        "clazz": "state variable",
                        "state": {},
                        "bbox": {
                            "x": -25,
                            "y": 50,
                            "w": "20.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph8",
                "bbox": {
                    "x": 516.9252315842282,
                    "y": 142.01290840429613,
                    "w": "20.0",
                    "h": "20.0"
                },
                "class": "process",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph22",
                "bbox": {
                    "x": 786.1602768573573,
                    "y": 557.4534904328991,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "ERK",
                "statesandinfos": [
                    {
                        "id": "glyph22a",
                        "clazz": "state variable",
                        "state": {},
                        "bbox": {
                            "x": -25,
                            "y": 50,
                            "w": "20.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph13",
                "bbox": {
                    "x": 844.4300288939096,
                    "y": 284.87165823750354,
                    "w": "20.0",
                    "h": "20.0"
                },
                "class": "process",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph14",
                "bbox": {
                    "x": 783.7402046808443,
                    "y": 453.1501505501591,
                    "w": "20.0",
                    "h": "20.0"
                },
                "class": "process",
                "statesandinfos": [],
                "parent": "",
                "ports": []
            }
        },
        {
            "data": {
                "id": "glyph21",
                "bbox": {
                    "x": 872.1517334162531,
                    "y": 378.5680972732039,
                    "w": "100.0",
                    "h": "60.0"
                },
                "class": "macromolecule",
                "label": "ERK",
                "statesandinfos": [
                    {
                        "id": "glyph21a",
                        "clazz": "state variable",
                        "state": {
                            "value": "P"
                        },
                        "bbox": {
                            "x": -25,
                            "y": 50,
                            "w": "25.0",
                            "h": "22.0"
                        }
                    }
                ],
                "parent": "",
                "ports": []
            }
        }
    ],
    "edges": [
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph3",
                "target": "glyph2",
                "portsource": "glyph3",
                "porttarget": "glyph2"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph4",
                "target": "glyph3",
                "portsource": "glyph4",
                "porttarget": "glyph3"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph3",
                "target": "glyph5",
                "portsource": "glyph3",
                "porttarget": "glyph5"
            }
        },
        {
            "data": {
                "class": "catalysis",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph1",
                "target": "glyph3",
                "portsource": "glyph1",
                "porttarget": "glyph3"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph7",
                "target": "glyph8",
                "portsource": "glyph7",
                "porttarget": "glyph8"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph8",
                "target": "glyph6",
                "portsource": "glyph8",
                "porttarget": "glyph6"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph10",
                "target": "glyph11",
                "portsource": "glyph10",
                "porttarget": "glyph11"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph11",
                "target": "glyph12",
                "portsource": "glyph11",
                "porttarget": "glyph12"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph11",
                "target": "glyph9",
                "portsource": "glyph11",
                "porttarget": "glyph9"
            }
        },
        {
            "data": {
                "class": "catalysis",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph2",
                "target": "glyph11",
                "portsource": "glyph2",
                "porttarget": "glyph11"
            }
        },
        {
            "data": {
                "class": "catalysis",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph2",
                "target": "glyph8",
                "portsource": "glyph2",
                "porttarget": "glyph8"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph13",
                "target": "glyph19",
                "portsource": "glyph13",
                "porttarget": "glyph19"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph13",
                "target": "glyph18",
                "portsource": "glyph13",
                "porttarget": "glyph18"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph14",
                "target": "glyph16",
                "portsource": "glyph14",
                "porttarget": "glyph16"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph15",
                "target": "glyph14",
                "portsource": "glyph15",
                "porttarget": "glyph14"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph17",
                "target": "glyph13",
                "portsource": "glyph17",
                "porttarget": "glyph13"
            }
        },
        {
            "data": {
                "class": "catalysis",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph12",
                "target": "glyph13",
                "portsource": "glyph12",
                "porttarget": "glyph13"
            }
        },
        {
            "data": {
                "class": "catalysis",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph12",
                "target": "glyph14",
                "portsource": "glyph12",
                "porttarget": "glyph14"
            }
        },
        {
            "data": {
                "class": "equivalence arc",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph19",
                "target": "glyph20",
                "portsource": "glyph19",
                "porttarget": "glyph20"
            }
        },
        {
            "data": {
                "class": "equivalence arc",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph1",
                "target": "glyph0",
                "portsource": "glyph1",
                "porttarget": "glyph0"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph8",
                "target": "glyph24",
                "portsource": "glyph8",
                "porttarget": "glyph24"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph24",
                "target": "glyph11",
                "portsource": "glyph24",
                "porttarget": "glyph11"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph25",
                "target": "glyph3",
                "portsource": "glyph25",
                "porttarget": "glyph3"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph23",
                "target": "glyph8",
                "portsource": "glyph23",
                "porttarget": "glyph8"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph22",
                "target": "glyph14",
                "portsource": "glyph22",
                "porttarget": "glyph14"
            }
        },
        {
            "data": {
                "class": "consumption",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph21",
                "target": "glyph13",
                "portsource": "glyph21",
                "porttarget": "glyph13"
            }
        },
        {
            "data": {
                "class": "production",
                "bendPointPositions": [],
                "cardinality": 0,
                "source": "glyph14",
                "target": "glyph21",
                "portsource": "glyph14",
                "porttarget": "glyph21"
            }
        }
    ]
};


    var container = $('#sbgn-network-container');

    var libs = {};
    libs.jquery = $;
    libs.cytoscape = cytoscape;

    var renderer = new Renderer({
        container: container
    }, libs);


    console.log(renderer);
    console.log(renderer.renderGraph);

    renderer.cy.ready(function () {
      renderer.renderGraph(data);
    });

    // renderer.renderGraph(data);
    global.window.renderer = renderer;
    global.window.Renderer = Renderer;


});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src/index":3}],2:[function(require,module,exports){

// At the core of the renderer is cytoscape.
// We need to augment it to render SBGN specific graphics

module.exports = function (cytoscape, jquery) {
  var cyMath = cytoscape.math;
  var cyBaseNodeShapes = cytoscape.baseNodeShapes;
  var cyStyleProperties = cytoscape.styleProperties;
  var cyBaseArrowShapes = cytoscape.baseArrowShapes;
  var $$ = cytoscape;

  var drawRoundRectanglePath = function(
    context, x, y, width, height, radius ){

    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var cornerRadius = radius || Math.min(width / 4, height / 4, 8);

    if( context.beginPath ){ context.beginPath(); }

    // Start at top middle
    context.moveTo( x, y - halfHeight );
    // Arc from middle top to right side
    context.arcTo( x + halfWidth, y - halfHeight, x + halfWidth, y, cornerRadius );
    // Arc from right side to bottom
    context.arcTo( x + halfWidth, y + halfHeight, x, y + halfHeight, cornerRadius );
    // Arc from bottom to left side
    context.arcTo( x - halfWidth, y + halfHeight, x - halfWidth, y, cornerRadius );
    // Arc from left side to topBorder
    context.arcTo( x - halfWidth, y - halfHeight, x, y - halfHeight, cornerRadius );
    // Join line
    context.lineTo( x, y - halfHeight );


    context.closePath();
  };

  // Taken from cytoscape.js
  var drawPolygonPath = function(
    context, x, y, width, height, points ){

    var halfW = width / 2;
    var halfH = height / 2;

    if( context.beginPath ){ context.beginPath(); }

    context.moveTo( x + halfW * points[0], y + halfH * points[1] );

    for( var i = 1; i < points.length / 2; i++ ){
      context.lineTo( x + halfW * points[ i * 2], y + halfH * points[ i * 2 + 1] );
    }

    context.closePath();
  };

  var sbgnShapes = $$.sbgn.sbgnShapes = {
    'source and sink': true,
    'nucleic acid feature': true,
    'complex': true,
    'dissociation': true,
    'macromolecule': true,
    'simple chemical': true,
    'unspecified entity': true,
    'necessary stimulation': true,
    'process': true,
    'uncertain process': true,
    'omitted process': true,
    'association': true
  };

  var totallyOverridenNodeShapes = $$.sbgn.totallyOverridenNodeShapes = {
    'macromolecule': true,
    'nucleic acid feature': true,
    'simple chemical': true,
    'complex': true,
    'unspecified entity': true,
    'process': true,
    'uncertain process': true,
    'omitted process': true,
    'dissociation': true,
    'association': true
  };

  $$.sbgn.addPortReplacementIfAny = function (node, edgePort) {
    var posX = node.position().x;
    var posY = node.position().y;
    if (typeof node._private.data.ports != 'undefined') {
      for (var i = 0; i < node._private.data.ports.length; i++) {
        var port = node._private.data.ports[i];
        if (port.id == edgePort) {
          posX = posX + port.x * node.width() / 100;
          posY = posY + port.y * node.height() / 100;
          break;
        }
      }
    }
    return {'x': posX, 'y': posY};
  }
  ;

  $$.sbgn.drawPortsToPolygonShape = function (context, node, points) {
    var width = node.width();
    var height = node.height();
    var centerX = node._private.position.x;
    var centerY = node._private.position.y;
    var padding = parseInt(node.css('border-width')) / 2;

    for (var i = 0; i < node._private.data.ports.length; i++) {
      var port = node._private.data.ports[i];
      var portX = port.x * width / 100 + centerX;
      var portY = port.y * height / 100 + centerY;
      var closestPoint = cyMath.polygonIntersectLine(portX, portY,
              points, centerX, centerY, width / 2, height / 2, padding);
      context.beginPath();
      context.moveTo(portX, portY);
      context.lineTo(closestPoint[0], closestPoint[1]);
      context.stroke();
      context.closePath();


      //add a little black circle to ports
      var oldStyle = context.fillStyle;
      context.fillStyle = $$.sbgn.colors.port;
      $$.sbgn.drawEllipse(context, portX, portY, 2, 2);
      context.fillStyle = oldStyle;
      context.stroke();
    }
  };

  var unitOfInfoRadius = 4;
  var stateVarRadius = 15;
  $$.sbgn.drawComplexStateAndInfo = function (context, node, stateAndInfos,
          centerX, centerY, width, height) {

    //This is a temporary workaround
    $$.sbgn.drawEllipse(context, centerX, centerY, 0, 0);

    var upWidth = 0, downWidth = 0;
    var boxPadding = 10, betweenBoxPadding = 5;
    var beginPosY = height / 2, beginPosX = width / 2;

    stateAndInfos.sort($$.sbgn.compareStates);

    for (var i = 0; i < stateAndInfos.length; i++) {
      var state = stateAndInfos[i];
      var stateWidth = state.bbox.w;
      var stateHeight = state.bbox.h;
//      var stateLabel = state.state.value;
      var relativeYPos = state.bbox.y;
      var stateCenterX, stateCenterY;

      if (relativeYPos < 0) {
        if (upWidth + stateWidth < width) {
          stateCenterX = centerX - beginPosX + boxPadding + upWidth + stateWidth / 2;
          stateCenterY = centerY - beginPosY;

          var textProp = {'centerX': stateCenterX, 'centerY': stateCenterY,
            'opacity': node.css('text-opacity') * node.css('opacity'),
            'width': stateWidth, 'height': stateHeight};

          if (state.clazz == 'state variable') {//draw ellipse
            drawRoundRectanglePath(context,
                    stateCenterX, stateCenterY,
                    stateWidth, stateHeight, Math.min(stateWidth / 2, stateHeight / 2, stateVarRadius));
            context.fill();

            textProp.state = state.state;
            $$.sbgn.drawStateText(context, textProp);
          } else if (state.clazz == 'unit of information') {//draw rectangle
            drawRoundRectanglePath(context,
                    stateCenterX, stateCenterY,
                    stateWidth, stateHeight,
                    Math.min(stateWidth / 2, stateHeight / 2, unitOfInfoRadius));
            context.fill();

            textProp.label = state.label.text;
            $$.sbgn.drawInfoText(context, textProp);
          }
        }
        upWidth = upWidth + width + boxPadding;
      } else if (relativeYPos > 0) {
        if (downWidth + stateWidth < width) {
          stateCenterX = centerX - beginPosX + boxPadding + downWidth + stateWidth / 2;
          stateCenterY = centerY + beginPosY;

          var textProp = {'centerX': stateCenterX, 'centerY': stateCenterY,
            'opacity': node.css('text-opacity') * node.css('opacity'),
            'width': stateWidth, 'height': stateHeight};

          if (state.clazz == "state variable") {//draw ellipse
            drawRoundRectanglePath(context,
                    stateCenterX, stateCenterY,
                    stateWidth, stateHeight, Math.min(stateWidth / 2, stateHeight / 2, stateVarRadius));
            context.fill();

            textProp.state = state.state;
            $$.sbgn.drawStateText(context, textProp);
          } else if (state.clazz == "unit of information") {//draw rectangle
            drawRoundRectanglePath(context,
                    stateCenterX, stateCenterY,
                    stateWidth, stateHeight,
                    Math.min(stateWidth / 2, stateHeight / 2, unitOfInfoRadius));
            context.fill();

            textProp.label = state.label.text;
            $$.sbgn.drawInfoText(context, textProp);
          }
        }
        downWidth = downWidth + width + boxPadding;
      }
      context.stroke();

      //This is a temporary workaround
      $$.sbgn.drawEllipse(context, centerX, centerY, 0, 0);

      //update new state and info position(relative to node center)
      state.bbox.x = (stateCenterX - centerX) * 100 / node.width();
      state.bbox.y = (stateCenterY - centerY) * 100 / node.height();
    }
  };

  $$.sbgn.drawStateText = function (context, textProp) {
    var stateValue = textProp.state.value || '';
    var stateVariable = textProp.state.variable || '';

    var stateLabel = stateValue + (stateVariable
            ? "@" + stateVariable
            : "");

    var fontSize = parseInt(textProp.height / 1.5);

    textProp.font = fontSize + "px Arial";
    textProp.label = stateLabel;
    textProp.color = "#0f0f0f";
    $$.sbgn.drawText(context, textProp);
  };

  $$.sbgn.drawInfoText = function (context, textProp) {
    var fontSize = parseInt(textProp.height / 1.5);
    textProp.font = fontSize + "px Arial";
    textProp.color = "#0f0f0f";
    $$.sbgn.drawText(context, textProp);
  };

  $$.sbgn.drawText = function (context, textProp, truncate) {
    var oldFont = context.font;
    context.font = textProp.font;
    context.textAlign = "center";
    context.textBaseline = "middle";
    var oldStyle = context.fillStyle;
    context.fillStyle = textProp.color;
    var oldOpacity = context.globalAlpha;
    context.globalAlpha = textProp.opacity;
    var text;

    textProp.label = textProp.label || '';

    text = textProp.label;

    context.fillText(text, textProp.centerX, textProp.centerY);
    context.fillStyle = oldStyle;
    context.font = oldFont;
    context.globalAlpha = oldOpacity;
    //context.stroke();
  };

  cyMath.calculateDistance = function (point1, point2) {
    var distance = Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
    return Math.sqrt(distance);
  };

  $$.sbgn.colors = {
    clone: "#a9a9a9",
    association: "#6B6B6B",
    port: "#6B6B6B"
  };


  $$.sbgn.drawStateAndInfos = function (node, context, centerX, centerY) {
    var stateAndInfos = node._private.data.statesandinfos;

    for (var i = 0; i < stateAndInfos.length && i < 4; i++) {
      var state = stateAndInfos[i];
      var stateWidth = state.bbox.w;
      var stateHeight = state.bbox.h;
      var stateCenterX = state.bbox.x * node.width() / 100 + centerX;
      var stateCenterY = state.bbox.y * node.height() / 100 + centerY;

      var textProp = {'centerX': stateCenterX, 'centerY': stateCenterY,
        'opacity': node.css('text-opacity') * node.css('opacity'),
        'width': stateWidth, 'height': stateHeight};

      if (state.clazz == "state variable") {//draw ellipse
        //var stateLabel = state.state.value;
        drawRoundRectanglePath(context, stateCenterX, stateCenterY,
                stateWidth, stateHeight, Math.min(stateWidth / 2, stateHeight / 2, stateVarRadius));

        context.fill();
        textProp.state = state.state;
        $$.sbgn.drawStateText(context, textProp);

        context.stroke();

      } else if (state.clazz == "unit of information") {//draw rectangle
        drawRoundRectanglePath(context,
                stateCenterX, stateCenterY,
                stateWidth, stateHeight,
                Math.min(stateWidth / 2, stateHeight / 2, unitOfInfoRadius));

        context.fill();

        textProp.label = state.label.text || '';
        $$.sbgn.drawInfoText(context, textProp);

        context.stroke();
      }
    }
    //This is a temporary workaround
    $$.sbgn.drawEllipse(context, centerX, centerY, 0, 0);
  };

  $$.sbgn.nucleicAcidCheckPoint = function (x, y, centerX, centerY, node, threshold, points, cornerRadius) {
    var width = node.width();
    var height = node.height();
    var padding = parseInt(node.css('border-width')) / 2;

    //check rectangle at top
    if (cyMath.pointInsidePolygon(x, y, points,
            centerX, centerY - cornerRadius / 2, width, height - cornerRadius / 3, [0, -1],
            padding)) {
      return true;
    }

    //check rectangle at bottom
    if (cyMath.pointInsidePolygon(x, y, points,
            centerX, centerY + height / 2 - cornerRadius / 2, width - 2 * cornerRadius, cornerRadius, [0, -1],
            padding)) {
      return true;
    }

    //check ellipses
    var checkInEllipse = function (x, y, centerX, centerY, width, height, padding) {
      x -= centerX;
      y -= centerY;

      x /= (width / 2 + padding);
      y /= (height / 2 + padding);

      return (Math.pow(x, 2) + Math.pow(y, 2) <= 1);
    };

    // Check bottom right quarter circle
    if (checkInEllipse(x, y,
            centerX + width / 2 - cornerRadius,
            centerY + height / 2 - cornerRadius,
            cornerRadius * 2, cornerRadius * 2, padding)) {

      return true;
    }

    // Check bottom left quarter circle
    if (checkInEllipse(x, y,
            centerX - width / 2 + cornerRadius,
            centerY + height / 2 - cornerRadius,
            cornerRadius * 2, cornerRadius * 2, padding)) {

      return true;
    }

    return false;
  };

  //we need to force opacity to 1 since we might have state and info boxes.
  //having opaque nodes which have state and info boxes gives unpleasent results.
  $$.sbgn.forceOpacityToOne = function (node, context) {
    var parentOpacity = node.effectiveOpacity();
    if (parentOpacity === 0) {
      return;
    }

    context.fillStyle = 'rgba('
            + node._private.style['background-color'].value[0] + ','
            + node._private.style['background-color'].value[1] + ','
            + node._private.style['background-color'].value[2] + ','
            + (1 * node.css('opacity') * parentOpacity) + ')';
  };

  $$.sbgn.drawSimpleChemicalPath = function (
          context, x, y, width, height) {

    var halfWidth = width / 2;
    var halfHeight = height / 2;
    //var cornerRadius = $$.math.getRoundRectangleRadius(width, height);
    var cornerRadius = Math.min(halfWidth, halfHeight);
    context.translate(x, y);

    context.beginPath();

    // Start at top middle
    context.moveTo(0, -halfHeight);
    // Arc from middle top to right side
    context.arcTo(halfWidth, -halfHeight, halfWidth, 0, cornerRadius);
    // Arc from right side to bottom
    context.arcTo(halfWidth, halfHeight, 0, halfHeight, cornerRadius);
    // Arc from bottom to left side
    context.arcTo(-halfWidth, halfHeight, -halfWidth, 0, cornerRadius);
    // Arc from left side to topBorder
    context.arcTo(-halfWidth, -halfHeight, 0, -halfHeight, cornerRadius);
    // Join line
    context.lineTo(0, -halfHeight);

    context.closePath();

    context.translate(-x, -y);
  };

  $$.sbgn.drawSimpleChemical = function (
          context, x, y, width, height) {
    $$.sbgn.drawSimpleChemicalPath(context, x, y, width, height);
    context.fill();
  };

  function simpleChemicalLeftClone(context, centerX, centerY,
          width, height, cloneMarker, opacity) {
    if (cloneMarker != null) {
      var oldGlobalAlpha = context.globalAlpha;
      context.globalAlpha = opacity;
      var oldStyle = context.fillStyle;
      context.fillStyle = $$.sbgn.colors.clone;

      context.beginPath();
      context.translate(centerX, centerY);
      context.scale(width / 2, height / 2);

      var markerBeginX = -1 * Math.sin(Math.PI / 3);
      var markerBeginY = Math.cos(Math.PI / 3);
      var markerEndX = 0;
      var markerEndY = markerBeginY;

      context.moveTo(markerBeginX, markerBeginY);
      context.lineTo(markerEndX, markerEndY);
      context.arc(0, 0, 1, 3 * Math.PI / 6, 5 * Math.PI / 6);

      context.scale(2 / width, 2 / height);
      context.translate(-centerX, -centerY);
      context.closePath();

      context.fill();
      context.fillStyle = oldStyle;
      context.globalAlpha = oldGlobalAlpha;
    }
  }

  function simpleChemicalRightClone(context, centerX, centerY,
          width, height, cloneMarker, opacity) {
    if (cloneMarker != null) {
      var oldGlobalAlpha = context.globalAlpha;
      context.globalAlpha = opacity;
      var oldStyle = context.fillStyle;
      context.fillStyle = $$.sbgn.colors.clone;

      context.beginPath();
      context.translate(centerX, centerY);
      context.scale(width / 2, height / 2);

      var markerBeginX = 0;
      var markerBeginY = Math.cos(Math.PI / 3);
      var markerEndX = 1 * Math.sin(Math.PI / 3);
      var markerEndY = markerBeginY;

      context.moveTo(markerBeginX, markerBeginY);
      context.lineTo(markerEndX, markerEndY);
      context.arc(0, 0, 1, Math.PI / 6, 3 * Math.PI / 6);

      context.scale(2 / width, 2 / height);
      context.translate(-centerX, -centerY);
      context.closePath();

      context.fill();
      context.fillStyle = oldStyle;
      context.globalAlpha = oldGlobalAlpha;
    }
  }

  $$.sbgn.drawEllipsePath = function (context, x, y, width, height) {
    cyBaseNodeShapes['ellipse'].drawPath(context, x, y, width, height);
  };

  $$.sbgn.drawNucAcidFeature = function (context, width, height,
          centerX, centerY, cornerRadius) {
    var halfWidth = width / 2;
    var halfHeight = height / 2;

    context.translate(centerX, centerY);
    context.beginPath();

    context.moveTo(-halfWidth, -halfHeight);
    context.lineTo(halfWidth, -halfHeight);
    context.lineTo(halfWidth, 0);
    context.arcTo(halfWidth, halfHeight, 0, halfHeight, cornerRadius);
    context.arcTo(-halfWidth, halfHeight, -halfWidth, 0, cornerRadius);
    context.lineTo(-halfWidth, -halfHeight);

    context.closePath();
    context.translate(-centerX, -centerY);
    context.fill();
  };

  $$.sbgn.isMultimer = function (node) {
    var sbgnClass = node._private.data.class;
    if (sbgnClass && sbgnClass.indexOf('multimer') != -1)
      return true;
    return false;
  };

  //this function is created to have same corner length when
  //complex's width or height is changed
  $$.sbgn.generateComplexShapePoints = function (cornerLength, width, height) {
    //cp stands for corner proportion
    var cpX = cornerLength / width;
    var cpY = cornerLength / height;

    var complexPoints = [-1 + cpX, -1, -1, -1 + cpY, -1, 1 - cpY, -1 + cpX,
      1, 1 - cpX, 1, 1, 1 - cpY, 1, -1 + cpY, 1 - cpX, -1];

    return complexPoints;
  };

  $$.sbgn.drawPortsToEllipseShape = function (context, node) {
    var width = node.width();
    var height = node.height();
    var centerX = node._private.position.x;
    var centerY = node._private.position.y;
    var padding = parseInt(node.css('border-width')) / 2;

    for (var i = 0; i < node._private.data.ports.length; i++) {
      var port = node._private.data.ports[i];
      var portX = port.x * width / 100 + centerX;
      var portY = port.y * height / 100 + centerY;
      var closestPoint = cyMath.intersectLineEllipse(
              portX, portY, centerX, centerY, width / 2, height / 2);
      context.moveTo(portX, portY);
      context.lineTo(closestPoint[0], closestPoint[1]);
      context.stroke();

      //add a little black circle to ports
      var oldStyle = context.fillStyle;
      context.fillStyle = $$.sbgn.colors.port;
      $$.sbgn.drawEllipse(context, portX, portY, 2, 2);
      context.fillStyle = oldStyle;
      context.stroke();
    }
  };

  cyStyleProperties.types.nodeShape.enums.push('source and sink');
  cyStyleProperties.types.nodeShape.enums.push('nucleic acid feature');
  cyStyleProperties.types.nodeShape.enums.push('complex');
  cyStyleProperties.types.nodeShape.enums.push('dissociation');
  cyStyleProperties.types.nodeShape.enums.push('macromolecule');
  cyStyleProperties.types.nodeShape.enums.push('simple chemical');
  cyStyleProperties.types.nodeShape.enums.push('unspecified entity');
  cyStyleProperties.types.nodeShape.enums.push('process');
  cyStyleProperties.types.nodeShape.enums.push('omitted process');
  cyStyleProperties.types.nodeShape.enums.push('uncertain process');
  cyStyleProperties.types.nodeShape.enums.push('association');

  cyStyleProperties.types.lineStyle.enums.push('consumption');
  cyStyleProperties.types.lineStyle.enums.push('production');

  cyStyleProperties.types.arrowShape.enums.push('necessary stimulation');

  $$.sbgn.registerSbgnArrowShapes = function () {
    cyBaseArrowShapes['necessary stimulation'] = jquery.extend({}, cyBaseArrowShapes['triangle-tee']);
    cyBaseArrowShapes['necessary stimulation'].pointsTee = [
      -0.18, -0.43,
      0.18, -0.43
    ];
  };

  $$.sbgn.registerSbgnNodeShapes = function () {
    cyBaseNodeShapes['process'] = {
      points: cyMath.generateUnitNgonPointsFitToSquare(4, 0),
      label: '',
      draw: function (context, node) {
        var width = node.width();
        var height = node.height();
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var padding = parseInt(node.css('border-width')) / 2;

        drawPolygonPath(context,
                centerX, centerY,
                width, height,
                cyBaseNodeShapes['process'].points);
        context.fill();

        context.stroke();

        $$.sbgn.drawPortsToPolygonShape(context, node, this.points);
      },
      intersectLine: function (node, x, y, portId) {
        var nodeX = node._private.position.x;
        var nodeY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        return cyMath.polygonIntersectLine(
                x, y,
                cyBaseNodeShapes['process'].points,
                nodeX,
                nodeY,
                width / 2, height / 2,
                padding);
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        return cyMath.pointInsidePolygon(x, y, cyBaseNodeShapes['process'].points,
                centerX, centerY, width, height, [0, -1], padding);
      }
    };

    cyBaseNodeShapes['omitted process'] = jquery.extend(true, {}, cyBaseNodeShapes['process']);
    cyBaseNodeShapes['omitted process'].label = '\\\\';

    cyBaseNodeShapes['uncertain process'] = jquery.extend(true, {}, cyBaseNodeShapes['process']);
    cyBaseNodeShapes['uncertain process'].label = '?';

    cyBaseNodeShapes["unspecified entity"] = {
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var sbgnClass = node._private.data.class;
        var label = node._private.data.label;
        var cloneMarker = node._private.data.clonemarker;

        $$.sbgn.drawEllipse(context, centerX, centerY, width, height);

        context.stroke();

        $$.sbgn.cloneMarker.unspecifiedEntity(context, centerX, centerY,
                width, height, cloneMarker,
                node.css('background-opacity'));

        $$.sbgn.forceOpacityToOne(node, context);
        $$.sbgn.drawStateAndInfos(node, context, centerX, centerY);
      },
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        var stateAndInfoIntersectLines = $$.sbgn.intersectLineStateAndInfoBoxes(
                node, x, y);

        var nodeIntersectLines = cyBaseNodeShapes["ellipse"].intersectLine(centerX, centerY, width,
                height, x, y, padding);

        var intersections = stateAndInfoIntersectLines.concat(nodeIntersectLines);
        return $$.sbgn.closestIntersectionPoint([x, y], intersections);

      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        var nodeCheckPoint = cyBaseNodeShapes["ellipse"].checkPoint(x, y,
                padding, width, height,
                centerX, centerY);

        var stateAndInfoCheckPoint = $$.sbgn.checkPointStateAndInfoBoxes(x, y, node,
                threshold);

        return nodeCheckPoint || stateAndInfoCheckPoint;
      }
    };

    cyBaseNodeShapes['simple chemical'] = {
      multimerPadding: 5,
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var multimerPadding = cyBaseNodeShapes['simple chemical'].multimerPadding;
        var label = node._private.data.label;
        var padding = parseInt(node.css('border-width'));
        var cloneMarker = node._private.data.clonemarker;

        if ($$.sbgn.isMultimer(node)) {
          //add multimer shape
          $$.sbgn.drawSimpleChemical(context, centerX + multimerPadding,
                  centerY + multimerPadding, width, height);

          context.stroke();

          $$.sbgn.cloneMarker.simpleChemical(context,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width - padding, height - padding, cloneMarker, true,
                  node.css('background-opacity'));

          //context.stroke();
        }

        $$.sbgn.drawSimpleChemical(context,
                centerX, centerY,
                width, height);

        context.stroke();

        $$.sbgn.cloneMarker.simpleChemical(context, centerX, centerY,
                width - padding, height - padding, cloneMarker, false,
                node.css('background-opacity'));

//        var nodeProp = {'label': label, 'centerX': centerX, 'centerY': centerY,
//          'opacity': node._private.style['text-opacity'].value, 'width': node.width(), 'height': node.height()};
//        $$.sbgn.drawDynamicLabelText(context, nodeProp);

        var oldStyle = context.fillStyle;
        $$.sbgn.forceOpacityToOne(node, context);
        $$.sbgn.drawStateAndInfos(node, context, centerX, centerY);
        context.fillStyle = oldStyle;
      },
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width'));
        var multimerPadding = cyBaseNodeShapes['simple chemical'].multimerPadding;

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        var stateAndInfoIntersectLines = $$.sbgn.intersectLineStateAndInfoBoxes(
                node, x, y);

        var nodeIntersectLines = cyBaseNodeShapes['ellipse'].intersectLine(
                centerX, centerY, width, height, x, y, padding);

        //check whether sbgn class includes multimer substring or not
        var multimerIntersectionLines = [];
        if ($$.sbgn.isMultimer(node)) {
          multimerIntersectionLines = cyBaseNodeShapes['ellipse'].intersectLine(
                  centerX + multimerPadding, centerY + multimerPadding, width,
                  height, x, y, padding);
        }

        var intersections = stateAndInfoIntersectLines.concat(nodeIntersectLines, multimerIntersectionLines);

        return $$.sbgn.closestIntersectionPoint([x, y], intersections);
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;
        var multimerPadding = cyBaseNodeShapes['simple chemical'].multimerPadding;

        var nodeCheckPoint = cyBaseNodeShapes['roundrectangle'].checkPoint(x, y,
                padding, width, height,
                centerX, centerY);

        var stateAndInfoCheckPoint = $$.sbgn.checkPointStateAndInfoBoxes(x, y, node,
                threshold);

        //check whether sbgn class includes multimer substring or not
        var multimerCheckPoint = false;
        if ($$.sbgn.isMultimer(node)) {
          multimerCheckPoint = cyBaseNodeShapes['ellipse'].checkPoint(x, y,
                  padding, width, height,
                  centerX + multimerPadding, centerY + multimerPadding);
        }

        return nodeCheckPoint || stateAndInfoCheckPoint || multimerCheckPoint;
      }
    };

    cyBaseNodeShapes['macromolecule'] = {
      points: cyMath.generateUnitNgonPoints(4, 0),
      multimerPadding: 5,
      draw: function (context, node) {
        var width = node.width();
        var height = node.height();
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var label = node._private.data.label;
        var multimerPadding = cyBaseNodeShapes['macromolecule'].multimerPadding;
        var cloneMarker = node._private.data.clonemarker;
        var padding = parseInt(node.css('border-width'));

        //check whether sbgn class includes multimer substring or not
        if ($$.sbgn.isMultimer(node)) {
          //add multimer shape
          drawRoundRectanglePath(context,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height);

          context.fill();
          context.stroke();

          $$.sbgn.cloneMarker.macromolecule(context,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height, cloneMarker, true,
                  node.css('background-opacity'));

          //context.stroke();
        }

        drawRoundRectanglePath(context,
                centerX, centerY,
                width, height);
        context.fill();

        context.stroke();

        $$.sbgn.cloneMarker.macromolecule(context, centerX, centerY,
                width, height, cloneMarker, false,
                node.css('background-opacity'));

        var oldStyle = context.fillStyle;
        $$.sbgn.forceOpacityToOne(node, context);
        $$.sbgn.drawStateAndInfos(node, context, centerX, centerY);
        context.fillStyle = oldStyle;

//        var nodeProp = {'label': label, 'centerX': centerX, 'centerY': centerY,
//          'opacity': node._private.style['text-opacity'].value, 'width': node.width(), 'height': node.height()};
      },
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;
        var multimerPadding = cyBaseNodeShapes['macromolecule'].multimerPadding;
        var cornerRadius = cyMath.getRoundRectangleRadius(width, height);

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        var stateAndInfoIntersectLines = $$.sbgn.intersectLineStateAndInfoBoxes(
                node, x, y);

        var nodeIntersectLines = $$.sbgn.roundRectangleIntersectLine(
                x, y,
                centerX, centerY,
                centerX, centerY,
                width, height,
                cornerRadius, padding);

        //check whether sbgn class includes multimer substring or not
        var multimerIntersectionLines = [];
        if ($$.sbgn.isMultimer(node)) {
          multimerIntersectionLines = $$.sbgn.roundRectangleIntersectLine(
                  x, y,
                  centerX, centerY,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height,
                  cornerRadius, padding);
        }

        var intersections = stateAndInfoIntersectLines.concat(nodeIntersectLines, multimerIntersectionLines);

        return $$.sbgn.closestIntersectionPoint([x, y], intersections);
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width() + threshold;
        var height = node.height() + threshold;
        var padding = parseInt(node.css('border-width')) / 2;
        var multimerPadding = cyBaseNodeShapes['macromolecule'].multimerPadding;

        var nodeCheckPoint = cyBaseNodeShapes['roundrectangle'].checkPoint(x, y, padding,
                width, height, centerX, centerY);
        var stateAndInfoCheckPoint = $$.sbgn.checkPointStateAndInfoBoxes(x, y, node,
                threshold);

        //check whether sbgn class includes multimer substring or not
        var multimerCheckPoint = false;
        if ($$.sbgn.isMultimer(node)) {
          multimerCheckPoint = cyBaseNodeShapes['roundrectangle'].checkPoint(x, y, padding,
                  width, height, centerX + multimerPadding, centerY + multimerPadding);
        }

        return nodeCheckPoint || stateAndInfoCheckPoint || multimerCheckPoint;
      }
    };

    cyBaseNodeShapes['association'] = {
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width'));

        cyBaseNodeShapes['ellipse'].draw(context, centerX, centerY, width, height);
        context.fill();
        context.stroke();

        $$.sbgn.drawPortsToEllipseShape(context, node);
      },
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        var intersect = cyMath.intersectLineEllipse(
                x, y,
                centerX,
                centerY,
                width / 2 + padding,
                height / 2 + padding);

        return intersect;
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        x -= centerX;
        y -= centerY;

        x /= (width / 2 + padding);
        y /= (height / 2 + padding);

        return (Math.pow(x, 2) + Math.pow(y, 2) <= 1);
      }
    };

    cyBaseNodeShapes['dissociation'] = {
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();

        context.beginPath();
        context.translate(centerX, centerY);
        context.scale(width / 4, height / 4);

        // At origin, radius 1, 0 to 2pi
        context.arc(0, 0, 1, 0, Math.PI * 2 * 0.999, false); // *0.999 b/c chrome rendering bug on full circle

        context.closePath();
        context.scale(4 / width, 4 / height);
        context.translate(-centerX, -centerY);

        $$.sbgn.drawEllipse(context, centerX, centerY, width / 2, height / 2);

        context.stroke();

        $$.sbgn.drawEllipse(context, centerX, centerY, width, height);

        context.stroke();

        context.fill();

        $$.sbgn.drawPortsToEllipseShape(context, node);

      },
      intersectLine: function (node, x, y, portId) {
        var nodeX = node._private.position.x;
        var nodeY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        return cyMath.intersectLineEllipse(
                x, y,
                nodeX,
                nodeY,
                width / 2 + padding,
                height / 2 + padding);
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var width = node.width();
        var height = node.height();
        var padding = parseInt(node.css('border-width')) / 2;

        x -= centerX;
        y -= centerY;

        x /= (width / 2 + padding);
        y /= (height / 2 + padding);

        return (Math.pow(x, 2) + Math.pow(y, 2) <= 1);
      }
    };

    cyBaseNodeShapes['complex'] = {
      points: [],
      multimerPadding: 5,
      cornerLength: 12,
      draw: function (context, node) {
        var hasChildren = node.children().length > 0;
        var width = hasChildren ? node.outerWidth() : node.width();
        var height = hasChildren ? node.outerHeight() : node.height();
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var stateAndInfos = node._private.data.statesandinfos;
        var label = node._private.data.label;
        var cornerLength = cyBaseNodeShapes['complex'].cornerLength;
        var multimerPadding = cyBaseNodeShapes['complex'].multimerPadding;
        var cloneMarker = node._private.data.clonemarker;

        cyBaseNodeShapes['complex'].points = $$.sbgn.generateComplexShapePoints(cornerLength,
                width, height);

        //check whether sbgn class includes multimer substring or not
        if ($$.sbgn.isMultimer(node)) {
          //add multimer shape
          drawPolygonPath(context,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height, cyBaseNodeShapes['complex'].points);
          context.fill();

          context.stroke();

          $$.sbgn.cloneMarker.complex(context,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height, cornerLength, cloneMarker, true,
                  node.css('background-opacity'));

          //context.stroke();
        }

        drawPolygonPath(context,
                centerX, centerY,
                width, height, cyBaseNodeShapes["complex"].points);
        context.fill();

        context.stroke();

        $$.sbgn.cloneMarker.complex(context, centerX, centerY,
                width, height, cornerLength, cloneMarker, false,
                node.css('background-opacity'));

        var oldStyle = context.fillStyle;
        $$.sbgn.forceOpacityToOne(node, context);
        $$.sbgn.drawComplexStateAndInfo(context, node, stateAndInfos, centerX, centerY, width, height);
        context.fillStyle = oldStyle;
      },
//      intersectLine: cyBaseNodeShapes["roundrectangle"].intersectLine,
//      checkPoint: cyBaseNodeShapes["roundrectangle"].checkPoint
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var hasChildren = node.children().length > 0;
        var width = hasChildren ? node.outerWidth() : node.width();
        var height = hasChildren ? node.outerHeight() : node.height();
        var padding = parseInt(node.css('border-width')) / 2;
        var multimerPadding = cyBaseNodeShapes["complex"].multimerPadding;
        var cornerLength = cyBaseNodeShapes["complex"].cornerLength;

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        cyBaseNodeShapes["complex"].points = $$.sbgn.generateComplexShapePoints(cornerLength,
                width, height);

        var stateAndInfoIntersectLines = $$.sbgn.intersectLineStateAndInfoBoxes(
                node, x, y);

        var nodeIntersectLines = cyMath.polygonIntersectLine(
                x, y,
                cyBaseNodeShapes["complex"].points,
                centerX,
                centerY,
                width / 2, height / 2,
                padding);

        //check whether sbgn class includes multimer substring or not
        var multimerIntersectionLines = [];
        if ($$.sbgn.isMultimer(node)) {
          multimerIntersectionLines = cyMath.polygonIntersectLine(
                  x, y,
                  cyBaseNodeShapes["complex"].points,
                  centerX + multimerPadding,
                  centerY + multimerPadding,
                  width / 2, height / 2,
                  padding);
        }

        var intersections = stateAndInfoIntersectLines.concat(nodeIntersectLines, multimerIntersectionLines);

        return $$.sbgn.closestIntersectionPoint([x, y], intersections);
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var hasChildren = node.children().length > 0;
        var width = (hasChildren ? node.outerWidth() : node.width()) + threshold;
        var height = (hasChildren ? node.outerHeight() : node.height()) + threshold;
        var padding = parseInt(node.css('border-width')) / 2;
        var multimerPadding = cyBaseNodeShapes["complex"].multimerPadding;
        var cornerLength = cyBaseNodeShapes["complex"].cornerLength;

        cyBaseNodeShapes["complex"].points = $$.sbgn.generateComplexShapePoints(cornerLength,
                width, height);

        var nodeCheckPoint = cyMath.pointInsidePolygon(x, y, cyBaseNodeShapes["complex"].points,
                centerX, centerY, width, height, [0, -1], padding);

        var stateAndInfoCheckPoint = $$.sbgn.checkPointStateAndInfoBoxes(x, y, node,
                threshold);

        //check whether sbgn class includes multimer substring or not
        var multimerCheckPoint = false;
        if ($$.sbgn.isMultimer(node)) {
          multimerCheckPoint = cyMath.pointInsidePolygon(x, y,
                  cyBaseNodeShapes["complex"].points,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height, [0, -1], padding);

        }

        return nodeCheckPoint || stateAndInfoCheckPoint || multimerCheckPoint;
      }
    };

    cyBaseNodeShapes["nucleic acid feature"] = {
      points: cyMath.generateUnitNgonPointsFitToSquare(4, 0),
      multimerPadding: 5,
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        ;
        var width = node.width();
        var height = node.height();
        var label = node._private.data.label;
        var cornerRadius = cyMath.getRoundRectangleRadius(width, height);
        var multimerPadding = cyBaseNodeShapes["nucleic acid feature"].multimerPadding;
        var cloneMarker = node._private.data.clonemarker;

        //check whether sbgn class includes multimer substring or not
        if ($$.sbgn.isMultimer(node)) {
          //add multimer shape
          $$.sbgn.drawNucAcidFeature(context, width, height,
                  centerX + multimerPadding,
                  centerY + multimerPadding, cornerRadius);

          context.stroke();

          $$.sbgn.cloneMarker.nucleicAcidFeature(context,
                  centerX + multimerPadding, centerY + multimerPadding,
                  width, height, cloneMarker, true,
                  node.css('background-opacity'));

          //context.stroke();
        }

        $$.sbgn.drawNucAcidFeature(context, width, height, centerX,
                centerY, cornerRadius);

        context.stroke();

        $$.sbgn.cloneMarker.nucleicAcidFeature(context, centerX, centerY,
                width, height, cloneMarker, false,
                node.css('background-opacity'));

//        var nodeProp = {'label': label, 'centerX': centerX, 'centerY': centerY,
//          'opacity': node._private.style['text-opacity'].value, 'width': node.width(), 'height': node.height()};

//        $$.sbgn.drawDynamicLabelText(context, nodeProp);
        var oldStyle = context.fillStyle;
        $$.sbgn.forceOpacityToOne(node, context);
        $$.sbgn.drawStateAndInfos(node, context, centerX, centerY);
        context.fillStyle = oldStyle;
      },
      drawPath: function (context, node) {

      },
      intersectLine: function (node, x, y, portId) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var multimerPadding = cyBaseNodeShapes["nucleic acid feature"].multimerPadding;
        var width = node.width();
        var height = node.height();
        var cornerRadius = cyMath.getRoundRectangleRadius(width, height);

        var portIntersection = $$.sbgn.intersectLinePorts(node, x, y, portId);
        if (portIntersection.length > 0) {
          return portIntersection;
        }

        var stateAndInfoIntersectLines = $$.sbgn.intersectLineStateAndInfoBoxes(
                node, x, y);

        var nodeIntersectLines = $$.sbgn.nucleicAcidIntersectionLine(node,
                x, y, centerX, centerY, cornerRadius);

        //check whether sbgn class includes multimer substring or not
        var multimerIntersectionLines = [];
        if ($$.sbgn.isMultimer(node)) {
          multimerIntersectionLines = $$.sbgn.nucleicAcidIntersectionLine(node,
                  x, y, centerX + multimerPadding, centerY + multimerPadding,
                  cornerRadius);
        }

        var intersections = stateAndInfoIntersectLines.concat(nodeIntersectLines,
                multimerIntersectionLines);

        return $$.sbgn.closestIntersectionPoint([x, y], intersections);
      },
      checkPoint: function (x, y, node, threshold) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;
        var multimerPadding = cyBaseNodeShapes["nucleic acid feature"].multimerPadding;
        var width = node.width();
        var height = node.height();
        var cornerRadius = cyMath.getRoundRectangleRadius(width, height);

        var nodeCheckPoint = $$.sbgn.nucleicAcidCheckPoint(x, y, centerX, centerY,
                node, threshold, this.points, cornerRadius);
        var stateAndInfoCheckPoint = $$.sbgn.checkPointStateAndInfoBoxes(x, y, node,
                threshold);

        //check whether sbgn class includes multimer substring or not
        var multimerCheckPoint = false;
        if ($$.sbgn.isMultimer(node)) {
          multimerCheckPoint = $$.sbgn.nucleicAcidCheckPoint(x, y,
                  centerX + multimerPadding, centerY + multimerPadding,
                  node, threshold, this.points, cornerRadius);
        }

        return nodeCheckPoint || stateAndInfoCheckPoint || multimerCheckPoint;
      }
    };
    cyBaseNodeShapes["source and sink"] = {
      points: cyMath.generateUnitNgonPoints(4, 0),
      draw: function (context, node) {
        var centerX = node._private.position.x;
        var centerY = node._private.position.y;

        var width = node.width();
        var height = node.height();
        var label = node._private.data.label;
        var pts = cyBaseNodeShapes["source and sink"].points;
        var cloneMarker = node._private.data.clonemarker;

        $$.sbgn.drawEllipse(context, centerX, centerY,
                width, height);

        context.stroke();

        context.beginPath();
        context.translate(centerX, centerY);
        context.scale(width * Math.sqrt(2) / 2, height * Math.sqrt(2) / 2);

        context.moveTo(pts[2], pts[3]);
        context.lineTo(pts[6], pts[7]);
        context.closePath();

        context.scale(2 / (width * Math.sqrt(2)), 2 / (height * Math.sqrt(2)));
        context.translate(-centerX, -centerY);

        context.stroke();

        $$.sbgn.cloneMarker.sourceAndSink(context, centerX, centerY,
                width, height, cloneMarker,
                node.css('background-opacity'));

      },
      intersectLine: cyBaseNodeShapes["ellipse"].intersectLine,
      checkPoint: cyBaseNodeShapes["ellipse"].checkPoint
    };
  };

  $$.sbgn.drawEllipse = function (context, x, y, width, height) {
    //$$.sbgn.drawEllipsePath(context, x, y, width, height);
    //context.fill();
    cyBaseNodeShapes['ellipse'].draw(context, x, y, width, height);
  };

  $$.sbgn.cloneMarker = {
    unspecifiedEntity: function (context, centerX, centerY,
            width, height, cloneMarker, opacity) {
      if (cloneMarker != null) {
        var oldGlobalAlpha = context.globalAlpha;
        context.globalAlpha = opacity;
        var oldStyle = context.fillStyle;
        context.fillStyle = $$.sbgn.colors.clone;

        context.beginPath();
        context.translate(centerX, centerY);
        context.scale(width / 2, height / 2);

        var markerBeginX = -1 * Math.sin(Math.PI / 3);
        var markerBeginY = Math.cos(Math.PI / 3);
        var markerEndX = 1 * Math.sin(Math.PI / 3);
        var markerEndY = markerBeginY;

        context.moveTo(markerBeginX, markerBeginY);
        context.lineTo(markerEndX, markerEndY);
        context.arc(0, 0, 1, Math.PI / 6, 5 * Math.PI / 6);

        context.scale(2 / width, 2 / height);
        context.translate(-centerX, -centerY);
        context.closePath();

        context.fill();
        context.fillStyle = oldStyle;
        context.globalAlpha = oldGlobalAlpha;
      }
    },
    sourceAndSink: function (context, centerX, centerY,
            width, height, cloneMarker, opacity) {
      $$.sbgn.cloneMarker.unspecifiedEntity(context, centerX, centerY,
              width, height, cloneMarker, opacity);
    },
    simpleChemical: function (context, centerX, centerY,
            width, height, cloneMarker, isMultimer, opacity) {
      if (cloneMarker != null) {
        var cornerRadius = Math.min(width / 2, height / 2);

        var firstCircleCenterX = centerX - width / 2 + cornerRadius;
        var firstCircleCenterY = centerY;
        var secondCircleCenterX = centerX + width / 2 - cornerRadius;
        var secondCircleCenterY = centerY;

        simpleChemicalLeftClone(context, firstCircleCenterX, firstCircleCenterY,
                2 * cornerRadius, 2 * cornerRadius, cloneMarker, opacity);

        simpleChemicalRightClone(context, secondCircleCenterX, secondCircleCenterY,
                2 * cornerRadius, 2 * cornerRadius, cloneMarker, opacity);

        var oldStyle = context.fillStyle;
        context.fillStyle = $$.sbgn.colors.clone;
        var oldGlobalAlpha = context.globalAlpha;
        context.globalAlpha = opacity;

        var recPoints = cyMath.generateUnitNgonPointsFitToSquare(4, 0);
        var cloneX = centerX;
        var cloneY = centerY + 3 / 4 * cornerRadius;
        var cloneWidth = width - 2 * cornerRadius;
        var cloneHeight = cornerRadius / 2;

        drawPolygonPath(context, cloneX, cloneY, cloneWidth, cloneHeight, recPoints);
        context.fill();
        context.fillStyle = oldStyle;
        context.globalAlpha = oldGlobalAlpha;
      }
    },
    perturbingAgent: function (context, centerX, centerY,
            width, height, cloneMarker, opacity) {
      if (cloneMarker != null) {
        var cloneWidth = width;
        var cloneHeight = height / 4;
        var cloneX = centerX;
        var cloneY = centerY + height / 2 - height / 8;

        var markerPoints = [-5 / 6, -1, 5 / 6, -1, 1, 1, -1, 1];

        var oldStyle = context.fillStyle;
        context.fillStyle = $$.sbgn.colors.clone;
        var oldGlobalAlpha = context.globalAlpha;
        context.globalAlpha = opacity;

        renderer.drawPolygon(context,
                cloneX, cloneY,
                cloneWidth, cloneHeight, markerPoints);

        context.fill();

        context.fillStyle = oldStyle;
        context.globalAlpha = oldGlobalAlpha;
        //context.stroke();
      }
    },
    nucleicAcidFeature: function (context, centerX, centerY,
            width, height, cloneMarker, isMultimer, opacity) {
      if (cloneMarker != null) {
        var cloneWidth = width;
        var cloneHeight = height / 4;
        var cloneX = centerX;
        var cloneY = centerY + 3 * height / 8;

        var oldStyle = context.fillStyle;
        context.fillStyle = $$.sbgn.colors.clone;
        var oldGlobalAlpha = context.globalAlpha;
        context.globalAlpha = opacity;

        var cornerRadius = cyMath.getRoundRectangleRadius(width, height);

        $$.sbgn.drawNucAcidFeature(context, cloneWidth, cloneHeight,
                cloneX, cloneY, cornerRadius, opacity);

        context.fillStyle = oldStyle;
        context.globalAlpha = oldGlobalAlpha;
        //context.stroke();
      }
    },
    macromolecule: function (context, centerX, centerY,
            width, height, cloneMarker, isMultimer, opacity) {
      $$.sbgn.cloneMarker.nucleicAcidFeature(context, centerX, centerY,
              width, height, cloneMarker, isMultimer, opacity);
    },
    complex: function (context, centerX, centerY,
            width, height, cornerLength, cloneMarker, isMultimer, opacity) {
      if (cloneMarker != null) {
        var cpX = cornerLength / width;
        var cpY = cornerLength / height;
        var cloneWidth = width;
        var cloneHeight = height * cpY / 2;
        var cloneX = centerX;
        var cloneY = centerY + height / 2 - cloneHeight / 2;

        var markerPoints = [-1, -1, 1, -1, 1 - cpX, 1, -1 + cpX, 1];

        var oldStyle = context.fillStyle;
        context.fillStyle = $$.sbgn.colors.clone;
        var oldGlobalAlpha = context.globalAlpha;
        context.globalAlpha = opacity;

        drawPolygonPath(context,
                cloneX, cloneY,
                cloneWidth, cloneHeight, markerPoints);
        context.fill();

        context.fillStyle = oldStyle;
        context.globalAlpha = oldGlobalAlpha;

//                context.stroke();
      }
    }
  };

  $$.sbgn.intersectLinePorts = function (node, x, y, portId) {
    var ports = node._private.data.ports;
    if (ports.length < 0)
      return [];

    var nodeX = node._private.position.x;
    var nodeY = node._private.position.y;
    var width = node.width();
    var height = node.height();
    var padding = parseInt(node.css('border-width')) / 2;

    for (var i = 0; i < node._private.data.ports.length; i++) {
      var port = node._private.data.ports[i];
      if (portId == port.id) {
        return cyMath.intersectLineEllipse(
                x, y, port.x * width / 100 + nodeX, port.y * height / 100 + nodeY, 1, 1);
      }
    }
    return [];
  };

  $$.sbgn.closestIntersectionPoint = function (point, intersections) {
    if (intersections.length <= 0)
      return [];

    var closestIntersection = [];
    var minDistance = Number.MAX_VALUE;

    for (var i = 0; i < intersections.length; i = i + 2) {
      var checkPoint = [intersections[i], intersections[i + 1]];
      var distance = cyMath.calculateDistance(point, checkPoint);

      if (distance < minDistance) {
        minDistance = distance;
        closestIntersection = checkPoint;
      }
    }

    return closestIntersection;
  };

  $$.sbgn.nucleicAcidIntersectionLine = function (node, x, y, nodeX, nodeY, cornerRadius) {
    var nodeX = node._private.position.x;
    var nodeY = node._private.position.y;
    var width = node.width();
    var height = node.height();
    var padding = parseInt(node.css('border-width')) / 2;

    var halfWidth = width / 2;
    var halfHeight = height / 2;

    var straightLineIntersections;

    // Top segment, left to right
    {
      var topStartX = nodeX - halfWidth - padding;
      var topStartY = nodeY - halfHeight - padding;
      var topEndX = nodeX + halfWidth + padding;
      var topEndY = topStartY;

      straightLineIntersections = cyMath.finiteLinesIntersect(
              x, y, nodeX, nodeY, topStartX, topStartY, topEndX, topEndY, false);

      if (straightLineIntersections.length > 0) {
        return straightLineIntersections;
      }
    }

    // Right segment, top to bottom
    {
      var rightStartX = nodeX + halfWidth + padding;
      var rightStartY = nodeY - halfHeight - padding;
      var rightEndX = rightStartX;
      var rightEndY = nodeY + halfHeight - cornerRadius + padding;

      straightLineIntersections = cyMath.finiteLinesIntersect(
              x, y, nodeX, nodeY, rightStartX, rightStartY, rightEndX, rightEndY, false);

      if (straightLineIntersections.length > 0) {
        return straightLineIntersections;
      }
    }

    // Bottom segment, left to right
    {
      var bottomStartX = nodeX - halfWidth + cornerRadius - padding;
      var bottomStartY = nodeY + halfHeight + padding;
      var bottomEndX = nodeX + halfWidth - cornerRadius + padding;
      var bottomEndY = bottomStartY;

      straightLineIntersections = cyMath.finiteLinesIntersect(
              x, y, nodeX, nodeY, bottomStartX, bottomStartY, bottomEndX, bottomEndY, false);

      if (straightLineIntersections.length > 0) {
        return straightLineIntersections;
      }
    }

    // Left segment, top to bottom
    {
      var leftStartX = nodeX - halfWidth - padding;
      var leftStartY = nodeY - halfHeight - padding;
      var leftEndX = leftStartX;
      var leftEndY = nodeY + halfHeight - cornerRadius + padding;

      straightLineIntersections = cyMath.finiteLinesIntersect(
              x, y, nodeX, nodeY, leftStartX, leftStartY, leftEndX, leftEndY, false);

      if (straightLineIntersections.length > 0) {
        return straightLineIntersections;
      }
    }

    // Check intersections with arc segments, we have only two arcs for
    //nucleic acid features
    var arcIntersections;

    // Bottom Right
    {
      var bottomRightCenterX = nodeX + halfWidth - cornerRadius;
      var bottomRightCenterY = nodeY + halfHeight - cornerRadius
      arcIntersections = cyMath.intersectLineCircle(
              x, y, nodeX, nodeY,
              bottomRightCenterX, bottomRightCenterY, cornerRadius + padding);

      // Ensure the intersection is on the desired quarter of the circle
      if (arcIntersections.length > 0
              && arcIntersections[0] >= bottomRightCenterX
              && arcIntersections[1] >= bottomRightCenterY) {
        return [arcIntersections[0], arcIntersections[1]];
      }
    }

    // Bottom Left
    {
      var bottomLeftCenterX = nodeX - halfWidth + cornerRadius;
      var bottomLeftCenterY = nodeY + halfHeight - cornerRadius
      arcIntersections = cyMath.intersectLineCircle(
              x, y, nodeX, nodeY,
              bottomLeftCenterX, bottomLeftCenterY, cornerRadius + padding);

      // Ensure the intersection is on the desired quarter of the circle
      if (arcIntersections.length > 0
              && arcIntersections[0] <= bottomLeftCenterX
              && arcIntersections[1] >= bottomLeftCenterY) {
        return [arcIntersections[0], arcIntersections[1]];
      }
    }
    return []; // if nothing
  };

  //this function gives the intersections of any line with a round rectangle
  $$.sbgn.roundRectangleIntersectLine = function (
          x1, y1, x2, y2, nodeX, nodeY, width, height, cornerRadius, padding) {

    var halfWidth = width / 2;
    var halfHeight = height / 2;

    // Check intersections with straight line segments
    var straightLineIntersections = [];

    // Top segment, left to right
    {
      var topStartX = nodeX - halfWidth + cornerRadius - padding;
      var topStartY = nodeY - halfHeight - padding;
      var topEndX = nodeX + halfWidth - cornerRadius + padding;
      var topEndY = topStartY;

      var intersection = cyMath.finiteLinesIntersect(
              x1, y1, x2, y2, topStartX, topStartY, topEndX, topEndY, false);

      if (intersection.length > 0) {
        straightLineIntersections = straightLineIntersections.concat(intersection);
      }
    }

    // Right segment, top to bottom
    {
      var rightStartX = nodeX + halfWidth + padding;
      var rightStartY = nodeY - halfHeight + cornerRadius - padding;
      var rightEndX = rightStartX;
      var rightEndY = nodeY + halfHeight - cornerRadius + padding;

      var intersection = cyMath.finiteLinesIntersect(
              x1, y1, x2, y2, rightStartX, rightStartY, rightEndX, rightEndY, false);

      if (intersection.length > 0) {
        straightLineIntersections = straightLineIntersections.concat(intersection);
      }
    }

    // Bottom segment, left to right
    {
      var bottomStartX = nodeX - halfWidth + cornerRadius - padding;
      var bottomStartY = nodeY + halfHeight + padding;
      var bottomEndX = nodeX + halfWidth - cornerRadius + padding;
      var bottomEndY = bottomStartY;

      var intersection = cyMath.finiteLinesIntersect(
              x1, y1, x2, y2, bottomStartX, bottomStartY, bottomEndX, bottomEndY, false);

      if (intersection.length > 0) {
        straightLineIntersections = straightLineIntersections.concat(intersection);
      }
    }

    // Left segment, top to bottom
    {
      var leftStartX = nodeX - halfWidth - padding;
      var leftStartY = nodeY - halfHeight + cornerRadius - padding;
      var leftEndX = leftStartX;
      var leftEndY = nodeY + halfHeight - cornerRadius + padding;

      var intersection = cyMath.finiteLinesIntersect(
              x1, y1, x2, y2, leftStartX, leftStartY, leftEndX, leftEndY, false);

      if (intersection.length > 0) {
        straightLineIntersections = straightLineIntersections.concat(intersection);
      }
    }

    // Check intersections with arc segments
    var arcIntersections;

    // Top Left
    {
      var topLeftCenterX = nodeX - halfWidth + cornerRadius;
      var topLeftCenterY = nodeY - halfHeight + cornerRadius
      arcIntersections = cyMath.intersectLineCircle(
              x1, y1, x2, y2,
              topLeftCenterX, topLeftCenterY, cornerRadius + padding);

      // Ensure the intersection is on the desired quarter of the circle
      if (arcIntersections.length > 0
              && arcIntersections[0] <= topLeftCenterX
              && arcIntersections[1] <= topLeftCenterY) {
        straightLineIntersections = straightLineIntersections.concat(arcIntersections);
      }
    }

    // Top Right
    {
      var topRightCenterX = nodeX + halfWidth - cornerRadius;
      var topRightCenterY = nodeY - halfHeight + cornerRadius
      arcIntersections = cyMath.intersectLineCircle(
              x1, y1, x2, y2,
              topRightCenterX, topRightCenterY, cornerRadius + padding);

      // Ensure the intersection is on the desired quarter of the circle
      if (arcIntersections.length > 0
              && arcIntersections[0] >= topRightCenterX
              && arcIntersections[1] <= topRightCenterY) {
        straightLineIntersections = straightLineIntersections.concat(arcIntersections);
      }
    }

    // Bottom Right
    {
      var bottomRightCenterX = nodeX + halfWidth - cornerRadius;
      var bottomRightCenterY = nodeY + halfHeight - cornerRadius
      arcIntersections = cyMath.intersectLineCircle(
              x1, y1, x2, y2,
              bottomRightCenterX, bottomRightCenterY, cornerRadius + padding);

      // Ensure the intersection is on the desired quarter of the circle
      if (arcIntersections.length > 0
              && arcIntersections[0] >= bottomRightCenterX
              && arcIntersections[1] >= bottomRightCenterY) {
        straightLineIntersections = straightLineIntersections.concat(arcIntersections);
      }
    }

    // Bottom Left
    {
      var bottomLeftCenterX = nodeX - halfWidth + cornerRadius;
      var bottomLeftCenterY = nodeY + halfHeight - cornerRadius
      arcIntersections = cyMath.intersectLineCircle(
              x1, y1, x2, y2,
              bottomLeftCenterX, bottomLeftCenterY, cornerRadius + padding);

      // Ensure the intersection is on the desired quarter of the circle
      if (arcIntersections.length > 0
              && arcIntersections[0] <= bottomLeftCenterX
              && arcIntersections[1] >= bottomLeftCenterY) {
        straightLineIntersections = straightLineIntersections.concat(arcIntersections);
      }
    }

    if (straightLineIntersections.length > 0)
      return straightLineIntersections;
    return []; // if nothing
  };

  $$.sbgn.intersectLineEllipse = function (
          x1, y1, x2, y2, centerX, centerY, width, height, padding) {

    var w = width / 2 + padding;
    var h = height / 2 + padding;
    var an = centerX;
    var bn = centerY;

    var d = [x2 - x1, y2 - y1];

    var m = d[1] / d[0];
    var n = -1 * m * x2 + y2;
    var a = h * h + w * w * m * m;
    var b = -2 * an * h * h + 2 * m * n * w * w - 2 * bn * m * w * w;
    var c = an * an * h * h + n * n * w * w - 2 * bn * w * w * n +
            bn * bn * w * w - h * h * w * w;

    var discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return [];
    }

    var t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    var xMin = Math.min(t1, t2);
    var xMax = Math.max(t1, t2);

    var yMin = m * xMin - m * x2 + y2;
    var yMax = m * xMax - m * x2 + y2;

    return [xMin, yMin, xMax, yMax];
  };

  $$.sbgn.intersectLineStateAndInfoBoxes = function (node, x, y) {
    var centerX = node._private.position.x;
    var centerY = node._private.position.y;
    var padding = parseInt(node.css('border-width')) / 2;

    var stateAndInfos = node._private.data.statesandinfos;

    var stateCount = 0, infoCount = 0;

    var intersections = [];

    for (var i = 0; i < stateAndInfos.length; i++) {
      var state = stateAndInfos[i];
      var stateWidth = state.bbox.w;
      var stateHeight = state.bbox.h;
      var stateCenterX = state.bbox.x * node.width() / 100 + centerX;
      var stateCenterY = state.bbox.y * node.height() / 100 + centerY;

      if (state.clazz == "state variable" && stateCount < 2) {//draw ellipse
        var stateIntersectLines = $$.sbgn.intersectLineEllipse(x, y, centerX, centerY,
                stateCenterX, stateCenterY, stateWidth, stateHeight, padding);

        if (stateIntersectLines.length > 0)
          intersections = intersections.concat(stateIntersectLines);

        stateCount++;
      } else if (state.clazz == "unit of information" && infoCount < 2) {//draw rectangle
        var infoIntersectLines = $$.sbgn.roundRectangleIntersectLine(x, y, centerX, centerY,
                stateCenterX, stateCenterY, stateWidth, stateHeight, 5, padding);

        if (infoIntersectLines.length > 0)
          intersections = intersections.concat(infoIntersectLines);

        infoCount++;
      }

    }
    if (intersections.length > 0)
      return intersections;
    return [];
  };

  $$.sbgn.checkPointStateAndInfoBoxes = function (x, y, node, threshold) {
    var centerX = node._private.position.x;
    var centerY = node._private.position.y;
    var padding =parseInt(node.css('border-width')) / 2;
    var stateAndInfos = node._private.data.statesandinfos;

    var stateCount = 0, infoCount = 0;
//    threshold = parseFloat(threshold);

    for (var i = 0; i < stateAndInfos.length; i++) {
      var state = stateAndInfos[i];
      var stateWidth = parseFloat(state.bbox.w) + threshold;
      var stateHeight = parseFloat(state.bbox.h) + threshold;
      var stateCenterX = state.bbox.x * node.width() / 100 + centerX;
      var stateCenterY = state.bbox.y * node.height() / 100 + centerY;

      if (state.clazz == "state variable" && stateCount < 2) {//draw ellipse
        var stateCheckPoint = cyBaseNodeShapes["ellipse"].checkPoint(
                x, y, padding, stateWidth, stateHeight, stateCenterX, stateCenterY);

        if (stateCheckPoint == true)
          return true;

        stateCount++;
      } else if (state.clazz == "unit of information" && infoCount < 2) {//draw rectangle
        var infoCheckPoint = cyBaseNodeShapes["roundrectangle"].checkPoint(
                x, y, padding, stateWidth, stateHeight, stateCenterX, stateCenterY);

        if (infoCheckPoint == true)
          return true;

        infoCount++;
      }

    }
    return false;
  };

  $$.sbgn.isNodeShapeTotallyOverriden = function (render, node) {
    if (totallyOverridenNodeShapes[render.getNodeShape(node)]) {
      return true;
    }

    return false;
  };
};

},{}],3:[function(require,module,exports){
var augmentCytoscape = require('./augmentCytoscape');
var graphStyleSheet = require('./style/graphStyleSheet');
var util = require('./util');

// SbgnRenderer needs specific libraries to work, but we dont want to
// include them in the dist script so they need to be passed in.

var SbgnRenderer = function (opts, libs) {
  
  if (!(this instanceof SbgnRenderer)) {
    return new SbgnRenderer();
  }
  
  augmentCytoscape(libs.cytoscape, libs.jquery);

  this.opts = opts;
  this.libs = libs;

  this.cy = libs.cytoscape({
    container: opts.container,
    style: graphStyleSheet(libs.cytoscape),
    boxSelectionEnabled: opts.boxSelectionEnabled || true,
    showOverlay: opts.showOverlay || false,
    minZoom: opts.minZoom || false,
    maxZoom: opts.maxZoom || false,
    motionBlur: opts.motionBlur || false,
    wheelSensitivity: opts.wheelSensitivity || 0.1,
    ready: function () {

    }
  });
};

// Terrible,
// this should call the cytoscape add/remove functions
// perform a layout
// calculate the paddings
SbgnRenderer.prototype.renderGraph = function (cytoscapeGraphJson) {
  var cy = this.cy;

  cy.startBatch();
  cy.remove('*');
  cy.add(cytoscapeGraphJson);

  var nodePositions = {};
  for (var i = 0; i < cytoscapeGraphJson.nodes.length; i++) {
    var xPos = cytoscapeGraphJson.nodes[i].data.bbox.x;
    var yPos = cytoscapeGraphJson.nodes[i].data.bbox.y;
    nodePositions[cytoscapeGraphJson.nodes[i].data.id] = {'x': xPos, 'y': yPos};
  }

  cy.layout({
    name: 'preset',
    positions: nodePositions,
    fit: true,
    padding: 50
  });

  var compoundPadding = this.opts.compoundPadding || 10;

  var nodes = cy.nodes();
  var totalPadding = 0;
  var numSimpleNodes = 0;
  for (var j = 0; j < nodes.length; j++) {
    var currNode = nodes[j];
    if (currNode.children() == null || currNode.children().length == 0) {
      totalPadding += Number(currNode.width());
      totalPadding += Number(currNode.height());
      numSimpleNodes++;
    }
  }

  var padding = (compoundPadding / 100) * Math.floor(totalPadding / (2 * numSimpleNodes));
  if (padding < 5) {
    padding = 5;
  }

  var compounds = nodes.filter('$node > node');
  compounds.css('padding-left', padding);
  compounds.css('padding-right', padding);
  compounds.css('padding-top', padding);
  compounds.css('padding-bottom', padding);

  cy.endBatch();
};

SbgnRenderer.prototype.saveAsPng = function (filename) {
  var pngContent = this.cy.png({scale: 3, full: true});

  var b64Data = pngContent.substr(pngContent.indexOf(',') + 1);

  var fileBlob = util.b64toBlob(b64Data, 'image/png');

  this.libs.filesaverjs.saveAs(fileBlob, filename);
};

SbgnRenderer.prototype.saveAsJpg = function (filename) {
  var jpgContent = this.cy.jpg({scale: 3, full: true});

  var b64Data = jpgContent.substr(jpgContent.indexOf(',') + 1);

  var fileBlob = util.b64toBlob(b64Data, 'image/jpeg');

  this.libs.filesaverjs.saveAs(fileBlob, filename);
};

module.exports = SbgnRenderer;

},{"./augmentCytoscape":2,"./style/graphStyleSheet":4,"./util":6}],4:[function(require,module,exports){
var nodeProperties = require('./nodeProperties.js');

// A function that creates a cytoscape style sheet from a given
// cytoscape instance
var graphStyleSheet = function(cytoscape) {

  return cytoscape.stylesheet()
        .selector('node')
        .css({
          'content': function (cyNode) {
            return nodeProperties.getNodeContent(cyNode);
          },
          'font-size': function (cyNode) {
            return nodeProperties.getLabelTextSize(cyNode);
          },
          'text-valign': 'center',
          'text-halign': 'center',
          'border-width': 1.5,
          'border-color': '#555',
          'background-color': '#f6f6f6',
          'background-opacity': 0.5,
          'text-opacity': 1,
          'opacity': 1
        })
        .selector('node[?clonemarker][class="perturbing agent"]')
        .css({
          'background-image': function () {
            return nodeProperties.getcloneMarkerImagePath();
          },
          'background-position-x': '50%',
          'background-position-y': '100%',
          'background-width': '100%',
          'background-height': '25%',
          'background-fit': 'none',
          'background-image-opacity': function (cyNode) {
            if (!cyNode.data('clonemarker')) {
              return 0;
            }
            return cyNode.css('background-opacity');
          }
        })
        .selector('node[class]')
        .css({
          'shape': function (cyNode) {
            return nodeProperties.getCyShape(cyNode);
          }
        })
        .selector('node[class="perturbing agent"]')
        .css({
          'shape-polygon-points': '-1, -1,   -0.5, 0,  -1, 1,   1, 1,   0.5, 0, 1, -1'
        })
        .selector('node[class="tag"]')
        .css({
          'shape-polygon-points': '-1, -1,   0.25, -1,   1, 0,    0.25, 1,    -1, 1'
        })
        .selector('node[class="association"]')
        .css({
          'background-color': '#6B6B6B'
        })
        .selector('node[class="complex"]')
        .css({
          'background-color': '#F4F3EE',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })
        .selector('node[class="compartment"]')
        .css({
          'border-width': 3.75,
          'background-opacity': 0,
          'background-color': '#FFFFFF',
          'text-valign': 'bottom',
          'text-halign': 'center'
        })
        .selector('node[bbox][class][class!="complex"][class!="compartment"][class!="submap"]')
        .css({
          'width': 'data(bbox.w)',
          'height': 'data(bbox.h)'
        })
        .selector('node[expanded-collapsed="collapsed"]')
        .css({
          'width': 36,
          'height': 36
        })
        .selector('node:selected')
        .css({
          'border-color': '#d67614',
          'target-arrow-color': '#000',
          'text-outline-color': '#000'
        })
        .selector('node:active')
        .css({
          'background-opacity': 0.7, 'overlay-color': '#d67614',
          'overlay-padding': '14'
        })
        .selector('edge')
        .css({
          'curve-style': 'bezier',
          'line-color': '#555',
          'target-arrow-fill': 'hollow',
          'source-arrow-fill': 'hollow',
          'width': 1.5,
          'target-arrow-color': '#555',
          'source-arrow-color': '#555',
          'text-border-color': function (cyNode) {
            if (cyNode.selected()) {
              return '#d67614';
            }
            return cyNode.css('line-color');
          },
          'color': function (cyNode) {
            if (cyNode.selected()) {
              return '#d67614';
            }
            return cyNode.css('line-color');
          }
        })
        .selector('edge:selected')
        .css({
          'line-color': '#d67614',
          'source-arrow-color': '#d67614',
          'target-arrow-color': '#d67614'
        })
        .selector('edge:active')
        .css({
          'background-opacity': 0.7, 'overlay-color': '#d67614',
          'overlay-padding': '8'
        })
        .selector('edge[cardinality > 0]')
        .css({
          'text-rotation': 'autorotate',
          'text-background-shape': 'rectangle',
          'text-border-opacity': '1',
          'text-border-width': '1',
          'text-background-color': 'white',
          'text-background-opacity': '1'
        })
        .selector('edge[class="consumption"][cardinality > 0]')
        .css({
          'source-label': function (cyNode) {
            return '' + cyNode.data('cardinality');
          },
          'source-text-margin-y': '-10',
          'source-text-offset': function (cyNode) {
            return nodeProperties.getCardinalityDistance(cyNode);
          }
        })
        .selector('edge[class="production"][cardinality > 0]')
        .css({
          'target-label': function (cyNode) {
            return '' + cyNode.data('cardinality');
          },
          'target-text-margin-y': '-10',
          'target-text-offset': function (cyNode) {
            return nodeProperties.getCardinalityDistance(cyNode);
          }
        })
        .selector('edge[class]')
        .css({
          'target-arrow-shape': function (cyNode) {
            return nodeProperties.getCyArrowShape(cyNode);
          },
          'source-arrow-shape': 'none'
        })
        .selector('edge[class="inhibition"]')
        .css({
          'target-arrow-fill': 'filled'
        })
        .selector('edge[class="production"]')
        .css({
          'target-arrow-fill': 'filled'
        })
        .selector('core')
        .css({
          'selection-box-color': '#d67614',
          'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
        });
};

module.exports = graphStyleSheet;

},{"./nodeProperties.js":5}],5:[function(require,module,exports){

// render node properties based on SBGN

var nodeProperties = {};

nodeProperties.getCloneMarkerImgPath = function () {
  return '';
};

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

nodeProperties.getCyArrowShape = function(cyNode) {
  var _class = cyNode.data('class');
  if (_class == 'necessary stimulation') {
    return 'necessary stimulation';
  }
  if (_class == 'inhibition') {
    return 'tee';
  }
  if (_class == 'catalysis') {
    return 'circle';
  }
  if (_class == 'stimulation' || _class == 'production') {
    return 'triangle';
  }
  if (_class == 'modulation') {
    return 'diamond';
  }
  return 'none';
};

nodeProperties.getNodeContent = function(cyNode) {
  var _class = cyNode.data('class');

  if (_class.endsWith(' multimer')) {
    _class = _class.replace(' multimer', '');
  }

  var content = '';
  if (_class == 'macromolecule' || _class == 'simple chemical'
      || _class == 'phenotype'
      || _class == 'unspecified entity' || _class == 'nucleic acid feature'
      || _class == 'perturbing agent' || _class == 'tag') {
    content = cyNode.data('label') ? cyNode.data('label') : '';
  }
  else if(_class == 'compartment'){
    content = cyNode.data('label') ? cyNode.data('label') : '';
  }
  else if(_class == 'complex'){
    if(cyNode.children().length == 0){
      if(cyNode.data('label')){
        content = cyNode.data('label');
      }
      else if(cyNode.data('infoLabel')){
        content = cyNode.data('infoLabel');
      }
      else{
        content = '';
      }
    }
    else{
      content = '';
    }
  }
  else if (_class == 'and') {
    content = 'AND';
  }
  else if (_class == 'or') {
    content = 'OR';
  }
  else if (_class == 'not') {
    content = 'NOT';
  }
  else if (_class == 'omitted process') {
    content = '\\\\';
  }
  else if (_class == 'uncertain process') {
    content = '?';
  }

  return content;
};

nodeProperties.getLabelTextSize = function (cyNode) {
  var _class = cyNode.data('class');

  // Dirty legacy hack.  These types of nodes are not supposed to have labels
  // but apparently they need to have a text size
  if (_class === 'association' || _class === 'dissociation') {
    return 20;
  }

  if (_class === 'and' || _class === 'or' || _class === 'not') {
    return nodeProperties.getDynamicLabelTextSize(cyNode, 1);
  }

  if (_class.endsWith('process')) {
    return nodeProperties.getDynamicLabelTextSize(cyNode, 1.5);
  }

  if (_class === 'complex' || _class === 'compartment') {
    return 16;
  }

  return nodeProperties.getDynamicLabelTextSize(cyNode);
};

nodeProperties.getCardinalityDistance = function (cyNode) {
  var srcPos = cyNode.source().position();
  var tgtPos = cyNode.target().position();

  var distance = Math.sqrt(Math.pow((srcPos.x - tgtPos.x), 2) + Math.pow((srcPos.y - tgtPos.y), 2));
  return distance * 0.15;
};

nodeProperties.getDynamicLabelTextSize = function (cyNode, sizeCoefficient) {
  var labelSizeCoefficient = sizeCoefficient || 1.5;
  
  var h = cyNode.height();
  var textHeight = parseInt(h / 2.45) * labelSizeCoefficient;

  return textHeight;
};

module.exports = nodeProperties;
},{}],6:[function(require,module,exports){
/* global Uint8Array */

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

module.exports = {
  b64toBlob: b64toBlob
};
},{}]},{},[1]);
