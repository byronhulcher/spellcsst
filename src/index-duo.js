"use strict";

var webshot = require('webshot');

let template = (className) => {
    return `
        <head>
            <link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">
            <style>
html, body {
  width: 100%;
  height: 100%;
  float: left;
  padding: 0;
  margin: 0;
}

body {
  overflow: hidden;
}

.poster {
  width: 100%;
  height: 100%;
  float: left;
}
.poster img {
  width: 100%;
  min-width: 700px;
  -o-object-fit: contain;
     object-fit: contain;
  position: absolute;
}
.blue-red img:after {
  mix-blend-mode: screen;
  display: block;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -webkit-filter: contrast(1.3);
          filter: contrast(1.3);
}
.blue-red img:after {
  background: rgba(250, 0, 47, 0.5);
}

            </style>
        </head>
        <body>
            <div class="poster ${className}">
              <img src="http://www.metaspoon.com/wp-content/uploads/2014/04/horse1.jpg">
            </div>
        </body>
    `;
};

const filters = ['red-blue', 'teal-purple', 'yellow-blue', 'blue-red', 'green-blue', 'yellow-red', 'pink-blue', 'yellow-green']

let css = (className) => {
    webshot(
        template(className), 
        `horse-${className}.png`, 
        {
            siteType:'html', 
            phantomPath: require('phantomjs2').path
        },
        function(){}
    );
};

let all = () => {
    filters.map(css);
}

module.exports = { css, all }
