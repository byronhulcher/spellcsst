"use strict";

var webshot = require('webshot');

let template = (className) => {
    return `
        <head>
            <link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">
            <style>
                body, figure {
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <figure class="${className}">
              <img src="http://www.metaspoon.com/wp-content/uploads/2014/04/horse1.jpg">
            </figure>
        </body>
    `;
};

const filters = ['aden', 'reyes', 'perpetua', 'inkwell', 'toaster', 'walden', 'hudson', 'gingham', 'mayfair', 'lofi', 'xpro2', '_1977', 'brooklyn', 'nashville', 'lark', 'moon', 'clarendon', 'willow']

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
