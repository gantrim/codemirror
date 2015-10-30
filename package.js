Package.describe({
	name: 'perak:codemirror',
	summary: 'CodeMirror editor for Meteor >= 1.2',
	version: '1.3.0',
	git: 'https://github.com/perak/codemirror.git'
});

Package.onUse(function (api) {

	if(api.versionsFrom) {
		api.versionsFrom('METEOR@1.2');
	}

	api.addFiles([
		'lib/codemirror/lib/codemirror.css',
		'lib/codemirror/lib/codemirror.js'
	], 'client');

	api.export('CodeMirror', 'client');
});
