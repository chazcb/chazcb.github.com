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
