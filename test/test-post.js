require = require('really-need');
var foo = require('./foo', {
    post: function (exported, filename) {
        return function () { return 'bar'; }
    }
});
console.assert(foo() === 'bar', 'post worked');
