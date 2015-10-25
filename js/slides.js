/* global Reveal */
(function () {
    'use strict';

    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        mouseWheel: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        dependencies: [
            { src: 'plugin/markedslides/markedslides.js', async: false },
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: 'plugin/notes/notes.js', async: true }
        ]
    });
})();
