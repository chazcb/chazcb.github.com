(function () {
    'use strict';
    var fs  = require('fs');

    var splitLine = function (line) {
        // `.map()` is available in Node.js but no all browsers
        return line.split(' ').map(Number);
    };

    /**
     * Return a fizzbuzz'd string based on input values.
     *
     * @param  {Number} firstDiv  Fizz (or F)
     * @param  {Number} secondDiv Buss (or B)
     * @param  {Number} upTo      How far do we count?
     * @return {String}
     */
    var fizzbuzzes = function (firstDiv, secondDiv, upTo) {

        var getFizzOrBuzz = function (count) {
            if (count % firstDiv === 0 && count % secondDiv === 0)
                return 'FB';
            if (count % firstDiv === 0)
                return 'F';
            if (count % secondDiv === 0)
                return 'B';
            return count;
        };

        var count = 0;
        var output = [];
        while (count < upTo) {
            count ++;
            output.push(getFizzOrBuzz(count));
        }
        return output.join(' ');
    };

    fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
        if (line !== '') {
            console.log(fizzbuzzes.apply(this, splitLine(line)));
        }
    });
})();
