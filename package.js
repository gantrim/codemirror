Package.describe({
    name: 'gantrim:codemirror',
    summary: 'CodeMirror editor for Meteor >= 1.2',
    version: '1.3.2',
    git: 'https://github.com/gantrim/codemirror.git'
});

Package.onUse(function (api) {

    if (api.versionsFrom) {
        api.versionsFrom('METEOR@1.2');
    }

    api.use([
        'templating@1.1.5',
        'underscore@1.0.4'
    ], 'client');

    /**
     *    CodeMirror
     */
    api.addFiles([
        'lib/codemirror/lib/codemirror.css',
        'lib/codemirror/lib/codemirror.js'
    ], 'client');

    /**
     *    Component
     */
    api.addFiles([
        'lib/component/component.html',
        'lib/component/component.js'
    ], 'client');

    /**
     *    Extras: lint
     */
    ['coffeescript-lint.js',
        'css-lint.js',
        'html-lint.js',
        'javascript-lint.js',
        'json-lint.js',
        'lint.css',
        'yaml-lint.js',
        'lint.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/lint/' + item, 'client');
    });
    api.export([
        'jsonlint',
        'JSHINT',
        'CSSLint'
    ], 'client');

    /**
     *    Extras: selection
     */
    ['active-line.js',
        'mark-selection.js',
        'selection-pointer.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/selection/' + item, 'client');
    });

    /**
     *    Extras: search
     */
    ['match-highlighter.js',
        'matchesonscrollbar.css',
        'matchesonscrollbar.js',
        'search.js',
        'searchcursor.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/search/' + item, 'client');
    });

    /**
     *    Extras: mode
     */

        //TODO: fix multiplex
    ['loadmode.js',
        //'multiplex.js',
        //'multiplex_test.js',
        'overlay.js',
        'simple.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/mode/' + item, 'client');
    });

    /**
     *    Extras: edit
     */
    ['closebrackets.js',
        'closetag.js',
        'continuelist.js',
        'matchbrackets.js',
        'matchtags.js',
        'trailingspace.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/edit/' + item, 'client');
    });

    /**
     *    Extras: comment
     */
    ['comment.js',
        'continuecomment.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/comment/' + item, 'client');
    });

    /**
     *    Extras: dialog
     */
    ['dialog.js',
        'dialog.css'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/dialog/' + item, 'client');
    });

    /**
     *    Extras: display
     */
    ['autorefresh.js',
        'fullscreen.css',
        'fullscreen.js',
        'panel.js',
        'placeholder.js',
        'rulers.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/display/' + item, 'client');
    });

    /**
     *    Extras: fold
     */
    ['brace-fold.js',
        'comment-fold.js',
        'foldcode.js',
        'foldgutter.js',
        'foldgutter.css',
        'indent-fold.js',
        'markdown-fold.js',
        'xml-fold.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/fold/' + item, 'client');
    });

    /**
     *    Extras: hint
     */
    ['anyword-hint.js',
        'css-hint.js',
        'html-hint.js',
        'javascript-hint.js',
        'show-hint.css',
        'show-hint.js',
        'sql-hint.js',
        'xml-hint.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/hint/' + item, 'client');
    });

    //TODO: Fix merge.js diff_match_patch
    //
    ///**
    // *	Extras: merge
    // */
    //[	'merge.js',
    //	'merge.css'
    //].forEach(function(item) {
    //	api.addFiles('lib/codemirror/addon/merge/' + item, 'client');
    //});


    //TODO: fix runmode.node.js exports is not defined
    ///**
    // *    Extras: runmode
    // */
    //['colorize.js',
    //    'runmode-standalone.js',
    //    'runmode.js',
    //    'runmode.node.js'
    //].forEach(function (item) {
    //    api.addFiles('lib/codemirror/addon/runmode/' + item, 'client');
    //});

    /**
     *    Extras: scroll
     */
    ['annotatescrollbar.js',
        'scrollpastend.js',
        'simplescrollbars.css',
        'simplescrollbars.js'
    ].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/scroll/' + item, 'client');
    });

    //TODO: fix worker.js data.type not defined
    ///**
    // *    Extras: tern
    // */
    //['tern.css',
    //    'tern.js',
    //    'worker.js'
    //].forEach(function (item) {
    //    api.addFiles('lib/codemirror/addon/tern/' + item, 'client');
    //});

    /**
     *    Extras: wrap
     */
    ['hardwrap.js'].forEach(function (item) {
        api.addFiles('lib/codemirror/addon/wrap/' + item, 'client');
    });

    var themeCssFiles = [
        "3024-day.css"
        "3024-night.css",
        "abcdef.css",
        "ambiance-mobile.css",
        "ambiance.css",
        "base16-dark.css",
        "base16-light.css",
        "bespin.css",
        "blackboard.css",
        "cobalt.css",
        "colorforth.css",
        "dracula.css",
        "eclipse.css",
        "elegant.css",
        "erlang-dark.css",
        "hopscotch.css",
        "icecoder.css",
        "isotope.css",
        "lesser-dark.css",
        "liquibyte.css",
        "material.css",
        "mbo.css",
        "mdn-like.css",
        "midnight.css",
        "monokai.css",
        "neat.css",
        "neo.css",
        "night.css",
        "paraiso-dark.css",
        "paraiso-light.css",
        "pastel-on-dark.css",
        "railscasts.css",
        "rubyblue.css",
        "seti.css",
        "solarized.css",
        "the-matrix.css",
        "tomorrow-night-bright.css",
        "tomorrow-night-eighties.css",
        "ttcn.css",
        "twilight.css",
        "vibrant-ink.css",
        "xq-dark.css",
        "xq-light.css",
        "yeti.css",
        "zenburn.css"];

    themeCssFiles.forEach(function (cssFile) {
        api.add_files('lib/codemirror/theme/' + cssFile, "client");
    });

    // api.export('CodeMirror', 'client');

});