'use strict';

exports.__esModule = true;
exports.all = exports.css = undefined;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n    <head>\n        <link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">\n        <style>\n            body, figure {\n                margin: 0;\n            }\n        </style>\n    </head>\n    <body>\n        <figure class="', '">\n          <img src="http://www.metaspoon.com/wp-content/uploads/2014/04/horse1.jpg">\n        </figure>\n    </body>\n'], ['\n    <head>\n        <link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">\n        <style>\n            body, figure {\n                margin: 0;\n            }\n        </style>\n    </head>\n    <body>\n        <figure class="', '">\n          <img src="http://www.metaspoon.com/wp-content/uploads/2014/04/horse1.jpg">\n        </figure>\n    </body>\n']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = tag(_templateObject, className);

var filters = ['aden', 'reyes', 'perpetua', 'inkwell', 'toaster', 'walden', 'hudson', 'gingham', 'mayfair', 'lofi', 'xpro2', '_1977', 'brooklyn', 'nashville', 'lark', 'moon', 'clarendon', 'willow'];

var css = function css(className) {
    webshot(template, 'horse-' + className + '.png', { siteType: 'html' }, function () {});
};

var all = function all() {
    filters.map(webshot);
};

exports.css = css;
exports.all = all;