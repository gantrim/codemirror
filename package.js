Package.describe({
	name: 'gantrim:codemirror',
	summary: 'CodeMirror editor for Meteor >= 1.2',
	version: '1.3.1',
	git: 'https://github.com/gantrim/codemirror.git'
});

Package.onUse(function (api) {

	if(api.versionsFrom) {
		api.versionsFrom('METEOR@1.2');
	}

	api.use([
		'templating', 
		'underscore'
	], 'client');

	/**
	 *	CodeMirror
	 */
	api.addFiles([
		'lib/codemirror/lib/codemirror.css',
		'lib/codemirror/lib/codemirror.js'
	], 'client');

	/**
	 *	Component
	 */
	api.addFiles([
		'lib/component/component.html',
		'lib/component/component.js'
	], 'client');

	/**
	 *	Extras: lint
	 */
	[	'coffeescript-lint.js', 
		'css-lint.js', 
		'html-lint.js', 
		'javascript-lint.js', 
		'json-lint.js', 
		'lint.css', 
		'yaml-lint.js', 
		'lint.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/lint/' + item, 'client');
	});
	api.export([
		'jsonlint',
		'JSHINT',
		'CSSLint'
	], 'client');

	/**
	 *	Extras: selection
	 */
	[	'active-line.js',
		'mark-selection.js',
		'selection-pointer.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/selection/' + item, 'client');
	});

	/**
	 *	Extras: search
 	 */
 	[	'match-highlighter.js',
		'matchesonscrollbar.css',
		'matchesonscrollbar.js',
		'search.js',
		'searchcursor.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/search/' + item, 'client');
	});

	/**
	 *	Extras: mode
	 */
	[	'loadmode.js',
		'multiplex_test.js',
		'multiplex.js',
		'overlay.js',
		'simple.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/mode/' + item, 'client');
	});

	/**
	 *	Extras: edit
	 */
	[	'closebrackets.js',
		'closetag.js',
		'continuelist.js',
		'matchbrackets.js',
		'matchtags.js',
		'trailingspace.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/edit/' + item, 'client');
	});

	/**
	 *	Extras: comment
	 */
	[	'comment.js',
		'continuecomment.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/comment/' + item, 'client');
	});

	/**
	 *	Extras: dialog
	 */
	[	'dialog.js',
		'dialog.css'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/dialog/' + item, 'client');
	});

	/**
	 *	Extras: display
	 */
	[	'autorefresh.js',
		'fullscreen.css',
		'fullscreen.js',
		'panel.js',
		'placeholder.js',
		'rulers.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/display/' + item, 'client');
	});

	/**
	 *	Extras: fold
	 */
	[	'brace-fold.js',
		'comment-fold.js',
		'foldcode.js',
		'foldgutter.js',
		'foldgutter.css',
		'indent-fold.js',
		'markdown-fold.js',
		'xml-fold.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/fold/' + item, 'client');
	});

	/**
	 *	Extras: hint
	 */
	[	'anyword-hint.js',
		'css-hint.js',
		'html-hint.js',
		'javascript-hint.js',
		'show-hint.css',
		'show-hint.js',
		'sql-hint.js',
		'xml-hint.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/hint/' + item, 'client');
	});

	/**
	 *	Extras: merge
	 */
	[	'merge.js',
		'merge.css'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/merge/' + item, 'client');
	});

	/**
	 *	Extras: runmode
	 */
	[	'colorize.js',
		'runmode-standalone.js',
		'runmode.js',
		'runmode.node.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/runmode/' + item, 'client');
	});

	/**
	 *	Extras: runmode
	 */
	[	'annotatescrollbar.js',
		'scrollpastend.js',
		'simplescrollbars.css',
		'simplescrollbars.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/scroll/' + item, 'client');
	});

	/**
	 *	Extras: tern
	 */
	[	'tern.css',
		'tern.js',
		'worker.js'
	].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/tern/' + item, 'client');
	});

	/**
	 *	Extras: wrap
	 */
	[	'hardwrap.js'].forEach(function(item) {
		api.addFiles('lib/codemirror/addon/wrap/' + item, 'client');
	});

	// api.export('CodeMirror', 'client');

});
