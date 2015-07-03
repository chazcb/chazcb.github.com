(function () {
    'use strict';

    var fs = require('fs');

    var fib = function (n) {
        if (n === 0 || n === 1)
            return n;

        return fib(n - 1) + fib(n - 2);
    };

    fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
        if (line !== '') {
            console.log(fib(Number(line)));
        }
    });
})();
