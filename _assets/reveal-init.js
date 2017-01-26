(function () {
    /* eslint-disable complexity */
    // Detect presenter mode
    if ( window.location.search.match(/receiver/) ) { document.getElementsByTagName('body')[0].className = 'receiver'; }

    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        controls: false,
        progress: true,
        history: true,
        center: true,

        transition: 'none', // default/cube/page/concave/zoom/linear/fade/none

        // Optional libraries used to extend on reveal.js
        dependencies: [
            { src: '../_reveal.js/lib/js/classList.js', condition: function () { return !document.body.classList; } },
            { src: '../_reveal.js/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
            { src: '../_reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function () { return !!document.body.classList; } },
            { src: '../_reveal.js/plugin/notes/notes.js', async: true, condition: function () { return !!document.body.classList; } },
            { src: '../_reveal.js/plugin/reveal-a11y/accessibility/helper.js', async: true, condition: function () { return !!document.body.classList; } }
        ]
    });

    // Show source footer for the current slide
    var sourceContainer = document.getElementById('source');
    Reveal.addEventListener('slidechanged', function (event) {
        if (event.previousSlide.hasAttribute('data-source-url') || event.previousSlide.hasAttribute('data-source-title')) {
            sourceContainer.innerHTML = '';
        }

        if (event.currentSlide.hasAttribute('data-source-url') || event.currentSlide.hasAttribute('data-source-title')) {
            var url       = event.currentSlide.getAttribute('data-source-url');
            var title     = event.currentSlide.getAttribute('data-source-title') || url;

            var className = event.currentSlide.getAttribute('data-source-class');
            if (className) { sourceContainer.classList.add(className); }

            if (url)   { return sourceContainer.innerHTML = 'Source: <a href="' + url + '">' + title + '</a>'; }
            if (title) { return sourceContainer.innerHTML = title; }
        }
    });

    // Set classes for the background (e.g. background color for image)
    Reveal.addEventListener('ready', function () {
        var backgrounds = document.querySelectorAll('.backgrounds .slide-background');

        [].forEach.call(document.querySelectorAll('.slides section'), function (slide, index) {

            if ( slide.hasAttribute('data-background-class') ) {
                backgrounds[index].classList.add( slide.getAttribute('data-background-class') )
            }
        });
    });
    /* eslint-enable complexity */
})();
