/**
 * Charles Covey-Brandt 2015
 *
 * Use markdown HR and HR HR sequences to create slides and subsections
 *
 *
 * Markdown files use `--------` to create HR elements and Jekyll automatically
 * turns Markdown files into HTML! This plugin takes HTML converted Markdown
 * and turns them into slides and sub-slides. It also adds nice down and right arrows.
 *
 * ```markdown
 * ## Hello
 * # Slide 1
 *
 * -----------
 * # This is a sub slide
 *
 * ----------
 * ----------
 * # This is a new slide!
 *
 * With some content
 * ```
 *
 * Convert <HR><HR> and <HR> element sequences to sections and subsections
 */

(function (wrapper) {
    'use strict';

    function createDownArrow() {
        var paragraph = document.createElement('P');
        paragraph.innerHTML = '&darr;';
        return paragraph;
    }

    function createRightArrow() {
        var paragraph = document.createElement('P');
        paragraph.innerHTML = '&rdsh;';
        return paragraph;
    }

    // Get all children of "slides" and filter for tag nodes:
    var children = Array.prototype.slice.call(wrapper.childNodes);
    children = children.filter(function (el) { return Boolean(el.tagName); }, children);

    var fragment = document.createDocumentFragment();
    var section = document.createElement('section');
    var subsection = document.createElement('section');

    // Start by attaching the first section and subsection.
    section.appendChild(subsection);
    fragment.appendChild(section);

    children.forEach(function (el, index) {

        var next = children[index + 1];
        var prev = children[index - 1];

        if (el.tagName === 'HR') {

            // If the next tag is also a horizontal rule, then
            // we just create a fresh top-level section and continue
            // on in the loop.
            if (next && next.tagName === 'HR') {

                subsection.appendChild(createRightArrow());
                section = document.createElement('section');
                fragment.appendChild(section);

            // Otherwise, we'll create a new subsection and add
            // it to the current top level section.
            } else {

                if (prev.tagName !== 'HR')
                    subsection.appendChild(createDownArrow());

                subsection = document.createElement('section');
                section.appendChild(subsection);
            }

        } else
            subsection.appendChild(el);
    });

    // Remove all els from the wrapper if there are
    // any left.
    while (wrapper.firstChild)
        wrapper.removeChild(wrapper.firstChild);

    // Append the slideshow fragment to the wrapper.
    wrapper.appendChild(fragment);

})(document.getElementById('slides'));
