'use strict';


var path     = require('path');
var generate = require('markdown-it-testgen');

/*eslint-env mocha*/

describe('markdown-it-samll', function () {
  var md = require('markdown-it')()
              .use(require('../'));

  generate(path.join(__dirname, 'fixtures/small.txt'), md);
});
