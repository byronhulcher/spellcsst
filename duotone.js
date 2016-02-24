'use strict';

var page = require('webpage').create();
var fs = require('fs');
console.log(phantom.args);
var filepath = "file://" + fs.absolute(phantom.args[0]);
var cssFilepath = "file://" + fs.absolute("duotone.css");
var className = phantom.args[1];
page.onLoadFinished = function(status){
  var size = page.evaluate(function(){
    var element = document.getElementById('image');
    return {width: element.naturalWidth, height: element.naturalHeight};
  });
  console.log('width ' + size.width)
  console.log('height ' + size.height);
  page.viewportSize = size;
  var outputPath = phantom.args[0].replace(/(\.[^\.]+)$/, '_'+className+'$1');
  console.log(outputPath);
  page.render(outputPath);
  page.release();
  slimer.exit();
}
page.setContent("<head>\n  <link rel=\"stylesheet\" href=\"" + cssFilepath + "\">\n  </head>\n<body>\n    <div class=\"poster " + className + " \">\n      <img id='image' src=\"" + filepath + "\">\n    </div>\n</body>", 'file:///test.html');

