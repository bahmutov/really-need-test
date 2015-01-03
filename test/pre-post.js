require = require('really-need');
var preCalled;
var foo = require('./foo', {
  debug: true,
  pre: function (source, filename) {
    console.log('in pre', filename);
    preCalled = true;
    return 'console.log("loading ' + filename + '");\n' + source;
  },
  post: function (exported, filename) {
    console.log('in post', filename);
    return function () { return 'bar'; };
  }
});
console.assert(preCalled, 'pre called');
console.assert(foo() === 'bar', 'post worked ' + foo.toString());
