(function () {
    'use strict';
    var fs  = require('fs');

    var reverseWordsInLine = function (line) {
        return line.split(' ').reverse().join(' ');
    };

    fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
        if (line !== '') {
            console.log(reverseWordsInLine(line));
        }
    });
})();
