module.exports = /*(graphJSON) =>*/ {
  asdf: function(nodesIn){
    for(var i = 0; i < nodesIn.length; i++){
      for(var j = 0; j < nodesIn.length; j++){
        if(nodesIn[i].data.id === nodesIn[j].data.parent){
          if(nodesIn[i].children === undefined){
            nodesIn[i].children = [];
          }
          nodesIn[i].children.push(nodesIn[j]);
        }
      }
    }
    var nodes = nodesIn;
    var newPositions = [];
    var nextY = 0;

    var cell = [];
    cell.push({id: 'extracellularregion'});
    cell.push({id: 'plasmamembrane'});
    cell.push({id: 'earlyendosomemembrane'});
    cell.push({id: 'cytosol'});
    cell.push({id: 'nucleoplasm'});
    cell.push({id: 'mitochondrialinnermembrane'});
    cell.push({id: 'mitochondrialintermembranespace'});
    cell.push({id: 'httppathwaycommonsorgpc2complex8ba27a3b58a30a081662c9c7620c64db'});

    function createList(nodeListIn){
      var nextX = 0;
      for(var i = 0; i < cell.length; i++){
        for(var j = 0; j < nodeListIn.length; j++){
          if(nodeListIn[j].data.id.toLowerCase().replace(/_/g, "" ).replace(/ /g, "") === cell[i].id){
            if(nodeListIn[j].data.id === 'Cytosol'){
              console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
            }
            createList(nodeListIn[j].children);
            nextY += nodeListIn[j].data.bbox.h + 100;
            break;
          }
        }
      }
      // neeed to switch nodeList in and cell because reasons
      nextX = 0;
      var match = false;
      for(var i = 0; i < nodeListIn.length; i++){
        //console.log(nodeListIn[i].data.label);
        var matchIndex;
        for(var j = 0; j < cell.length; j++){
          if(nodeListIn[i].data.id.toLowerCase().replace(/_/g, "" ).replace(/ /g, "") === cell[j].id){
            match = true;
            matchIndex = j;
            break;
          }
        }
        if(!match){
          newPositions.push({id: nodeListIn[i].data.id, data: {x: nextX, y: nextY}});
          nextX += nodeListIn[i].data.bbox.w + 100;
        }
        match = false;
      }
    }

    var getRandomPos = function( i, ele ){
      console.log("REASSIGN");
      for(var j = 0; j < newPositions.length; j++){
        if(ele.data.id === newPositions[j].id){
          console.log(ele.data.id);
          console.log(newPositions[j].id)
          console.log(newPositions[j].data.x);
          console.log(newPositions[j].data.y);
          return {
            x: newPositions[j].data.x,
            y: newPositions[j].data.y
          };
        }
      }
      return {
        x: Math.round( Math.random() * 400 ) - 100,
        y: -200,
      };
    };

    var tempOut;
    createList(nodes);
    for(var i = 0; i < nodesIn.length; i++){
      /*console.log(nodesIn[i].data.id);
      console.log(nodesIn[i])
      console.log(nodesIn[i].data.bbox.x);
      console.log(nodesIn[i].data.bbox.y);*/
      var temp = getRandomPos(i, nodesIn[i]);
      tempOut[i] = temp.x;
      tempOut[i] = temp.y;
      /*console.log(nodesIn[i].data.bbox.x);
      console.log(nodesIn[i].data.bbox.y);*/
    }

    return tempOut;

  }
};
