/*!
 * to-gfm-code-block <https://github.com/jonschlinkert/to-gfm-code-block>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var mdpre = require('./');

describe('pre', function () {
  it('should return create a code example from the string', function() {
    mdpre('function foo(a, b, c) {\n  return a + b + c;\n}').should.equal([
      '```',
      'function foo(a, b, c) {',
      '  return a + b + c;',
      '}',
      '```'
    ].join('\n'));
  });

  it('should add the language next to the first code fence.', function() {
    mdpre('function foo(a, b, c) {\n  return a + b + c;\n}', 'js').should.equal([
      '```js',
      'function foo(a, b, c) {',
      '  return a + b + c;',
      '}',
      '```'
    ].join('\n'));
  });

  it('should throw an error:', function () {
    (function () {
      mdpre();
    }).should.throw('markdown-pre expects a string.');
  });
});
