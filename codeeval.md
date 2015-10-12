---
layout: slides
---

# Code Eval Snippets


## Fib
```javascript
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
```


## Fizzbuzz

```javascript
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
```


## Lower

```javascript
(function () {
    'use strict';
    var fs  = require('fs');

    fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
        if (line !== '') {
            console.log(line.toLowerCase());
        }
    });
})();
```

## Reverse Words

```js
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
```

## Sum Primes
```js
(function () {
    'use strict';

    var sumFirstNPrimes = (function () {

        var primesSet = {2: true};
        var primes = [2];

        var isPrime = function (n) {
            for (var i = 0; i < primes.length; i++) {
                if (n % primes[i] === 0) {
                    return false;
                }
            }
            return true;
        };

        return function (n) {
            var counter = 3;
            var sum = 2;
            while (primes.length < n) {
                if (!(counter in primesSet) && isPrime(counter)) {
                    primesSet[counter] = true;
                    primes.push(counter);
                    sum += counter;
                }
                counter += 1;
            }
            return sum;
        };
    })();

    console.log(sumFirstNPrimes(1000));
})();
```
