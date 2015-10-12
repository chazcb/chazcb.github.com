/* global Reveal */
(function () {
    'use strict';

    // Convert H1 & H2 separated markdown output to slides and sub-slides for Reveal.js.
    (function () {
        var wrapper = document.getElementById('slides');

        // Loop through each of the elements in the
        // wrapper and group them by the HR separater.
        var children = Array.prototype.slice.call(wrapper.childNodes);

        var fragment = document.createDocumentFragment();
        var section = null;
        var subsection = null;

        children.forEach(function (el, index) {

            if (el.tagName === 'H1') {
                // create a new top level slide and sub-section
                // and attach to the wrapper.
                section = document.createElement('section');
                subsection = document.createElement('section');
                section.appendChild(subsection);
                fragment.appendChild(section);
            } else if (el.tagName === 'H2') {
                // just create a new section for the current
                // slide
                subsection = document.createElement('section')
                section.appendChild(subsection);
            }

            if (subsection)
                subsection.appendChild(el);
        });

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
        controls: true,
        progress: true,
        history: true,
        center: true,
        mouseWheel: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        dependencies: [
            // { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
            // { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            // { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            // { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: 'plugin/zoom-js/zoom.js', async: true },
            { src: 'plugin/notes/notes.js', async: true }
        ]
    });
})();
