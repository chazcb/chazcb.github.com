/* global DISQUS, console */


/**
 * Scrap book for the bookmarklets page.
 *
 * Should contain all the uncompressed bookmarklet scripts and
 * any code used to generate fixtures for the bookmarklets.
 *
 * To create a bookmarklet, first compress your script using a minifier like YUI,
 * then head to one of the many bookmarklet generators on the internets. For instance:
 * 1) http://refresh-sf.com/yui/
 * 2) http://mrcoles.com/bookmarklet/
 *
 * TODO: would be nice to have a handlebars helper or something that
 * would automatigically generate the bookmarklet from scripts.
 */


// ------- Set experiment cookie:
(function (win, doc) {
    'use strict';
    var errorMessage = 'Run this script from a disqus domain.';
    if (doc.domain.indexOf('disqus') === -1) {
        win.alert(errorMessage);
        throw errorMessage;
    }
    var experiment = win.prompt('What experiment do you want to run? Enter the name here:'),
    expires = (new Date().getTime()) + (1000 * 60 * 60 * 24 * 7);
    doc.cookie = [
        'experiment=',
        experiment,
        '; expires="',
        new Date(expires),
        '"; path=/; domain=.',
        doc.domain.split('.').slice(-2).join('.')
    ].join('');
})(window, document);

// ------- Set hash for a particular percent:
(function (doc, win) {
    'use strict';
    var errorMessage = 'Run this script from a disqus domain.',
    HASHES = {
        0: '',
        1: 'e',
        2: 'l6',
        3: 'g',
        4: 'l8',
        5: 'i2',
        6: 'bS7',
        7: 'eL',
        8: 'l',
        9: 'aR2',
        10: 'L6',
        11: 'yP2',
        12: 'p',
        13: 'eR',
        14: 'r',
        15: 's',
        16: 't',
        17: 'u',
        18: 'v',
        19: 'w',
        20: 'c3',
        21: 'bS',
        22: 'c5',
        23: 'bU',
        24: 'cH5',
        25: 'p5',
        26: 'lN',
        27: 'uE3',
        28: 'S7',
        29: 'lQ',
        30: 'C5',
        31: 'yP',
        32: 'C7',
        33: 'm6',
        34: 'P6',
        35: 'm8',
        36: 'P8',
        37: 'sH',
        38: 'iS',
        39: 'sJ',
        40: 'iU',
        41: 'cH',
        42: 'cI',
        43: 'g2',
        44: 'w7',
        45: 'bA4',
        46: 'J4',
        47: 'J5',
        48: 'W3',
        49: 'W4',
        50: '2',
        51: '3',
        52: '4',
        53: '5',
        54: '6',
        55: '7',
        56: '8',
        57: 'a2',
        58: 'q7',
        59: 'kC7',
        60: 'n2',
        61: 'wH',
        62: 'lN8',
        63: 'oE5',
        64: 'n6',
        65: 'Q6',
        66: 'gI',
        67: 'C',
        68: 'gK',
        69: 'E',
        70: 'F',
        71: 'eL6',
        72: 'H',
        73: 'I',
        74: 'N8',
        75: 'K',
        76: 'L',
        77: 'K4',
        78: 'N',
        79: 'u4',
        80: 'u5',
        81: 'Q',
        82: 'R',
        83: 'S',
        84: 'kC',
        85: 'H5',
        86: 'V',
        87: 'cW3',
        88: 'H8',
        89: 'aR',
        90: 'E3',
        91: 'U8',
        92: 'R2',
        93: 'b7',
        94: 'uC',
        95: 'o6',
        96: 'uE',
        97: 'a',
        98: 'b',
        99: 'c'
    },
    expires = (new Date().getTime()) + (1000 * 60 * 60 * 24 * 7);
    if (doc.domain.indexOf('disqus') === -1) {
        win.alert(errorMessage);
        throw errorMessage;
    }
    var percent = win.prompt('What percent do you want to be in?'),
    hash = HASHES[percent];
    win.console.log(percent, hash);
    doc.cookie = [
        'disqus_unique=',
        hash,
        '; expires="',
        new Date(expires),
        '"; path=/; domain=.',
        doc.domain.split('.').slice(-2).join('.')
    ].join('');
})(document, window);


// ----- worksheets for bookmarklets below

// Reverse hash finder:
(function () {
    'use strict';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var hashes = {};
    var hashesFound = 0;

    var perm = function (set) {
        var results = (function acc(xs, set) {
            var x = xs[0];
            if (!x) {
                return set;
            }

            for (var i = 0, l = set.length; i < l; ++i) {
                set.push(set[i].concat(x));
            }

            return acc(xs.slice(1), set);
        })(set, [[]]);
        return results;
    };

    var permutations, hash, percent;

    while (hashesFound < 100) {

        permutations = perm([
            alphabet[Math.floor(Math.random() * 25)],
            ALPHABET[Math.floor(Math.random() * 25)],
            numbers[Math.floor(Math.random() * 9)]
        ]);

        while (hashesFound < 100 && permutations.length) {
            hash = permutations.pop().join('');
            percent = Math.abs(DISQUS.next.experiment.getHashCode(hash)) % 100;

            if (!(percent in hashes)) {
                console.log('Found', percent, hash);
                hashes[percent] = hash;
                hashesFound ++;
            }
        }
    }

    return hashes;
})();
