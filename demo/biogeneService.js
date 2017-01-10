/* global $ */


// this is a service, when this demo grows large enough, it should go under a services module

// example: http://pathwaycommons.org/biogene/retrieve.do?query=53BP1&org=human&format=json
var pathwayCommonsUrl = 'http://wwww.pathwaycommons.org/biogene/retrieve.do';


var getBiogeneContent = function (node) {
  var geneClass = node._private.data.class;
  var opts = {
    query: node._private.data.label,
    org: 'human',
    format: 'json'
  };

  var geneInfo = {};

  if (geneClass !== 'macromolecule' 
    && geneClass !== 'nucleic acid feature' 
    && geneClass != 'unspecified entity') {
    return geneInfo;
  }

  $.ajax({
    type: 'GET', 
    url: pathwayCommonsUrl,
    async: true,
    data: opts
  })
  .then(function (res) {
    geneInfo = res;    
  }, function (xhr, status, err) {
    throw err;
  });

  return geneInfo;
};

// .then(function (queryResult) {
//     // - json parse is not required when no PHP involved
//     if (queryResult.count > 0 && queryParams.query)
//     {
//         var info = (new BioGeneView(
//             {
//                 el: '#biogene-container',
//                 model: queryResult.geneInfo[0]
//             })).render();
//         var html = $('#biogene-container').html();
//         api.set('content.text', html);
//     }
//     else {
//         api.set('content.text', "No additional information available &#013; for the selected node!");
//     }
// }, function (xhr, status, error) {
//             api.set('content.text', "Error retrieving data: " + error);
//         });
//           api.set('content.title', node._private.data.label);
//           return _.template($("#loading-small-template").html());
//       }

module.exports = getBiogeneContent;
