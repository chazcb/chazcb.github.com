/* global Reveal */
(function () {
    'use strict';

    // Convert HR separated markdown output to individual
    // slides for Reveal.js.
    (function () {
        var wrapper = document.getElementById('slides');
        var fragment = document.createDocumentFragment();

        // Loop through each of the elements in the
        // wrapper and group them by the HR separater.
        var slide = document.createElement('section');
        var children = wrapper.childNodes;
        children = Array.prototype.slice.call(children);
        children.forEach(function (el) {
            if (el.tagName === 'HR') {
                fragment.appendChild(slide);
                slide = document.createElement('section');
            } else {
                slide.appendChild(el);
            }
        });

        // Cleanup anything left over by the for loop.
        fragment.appendChild(slide);

        // Remove all els from the wrapper if there are
        // any left.
        while (wrapper.firstChild)
            wrapper.removeChild(wrapper.firstChild);

        // Append the slideshow fragment to the wrapper.
        wrapper.appendChild(fragment);
    })();

    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration

    Reveal.initialize({
        controls: false,
        progress: true,
        history: true,
        center: true,
        mouseWheel: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        dependencies: [
            { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
            // { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            // { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            // { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: 'plugin/notes/notes.js', async: true }
        ]
    });
})();
