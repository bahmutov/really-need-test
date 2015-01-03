require = require('really-need');
var preCalled;
var foo = require('./foo', {
  pre: function (source, filename) {
    console.log('in pre', filename);
    preCalled = true;
    return source;
  },
  post: function (exported, filename) {
    console.log('in post', filename);
    return function () { return 'bar'; };
  }
});
console.assert(preCalled, 'pre called');
console.assert(foo() === 'bar', 'post worked ' + foo.toString());