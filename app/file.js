var loadFileText = function (absFilePath) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else {
    xhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhttp.open('GET', absFilePath, false);
  xhttp.send();
  return xhttp.responseText;
};

var readFile = function (file, cb) {
  var reader = new FileReader();

  reader.onload = function (e) {
    cb(e);
  };

  reader.readAsText(file);
};

module.exports = {
  loadFileText: loadFileText,
  readFile: readFile
};
