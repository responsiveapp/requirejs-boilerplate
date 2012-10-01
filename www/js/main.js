requirejs.config(
{
	baseUrl: "js/modules",
	paths: {
		underscore		: '../lib/underscore',
		jquery 			: '../lib/jquery',
		backbone 		: '../lib/backbone',
		'coffee-script'	: '../lib/coffee-script',
		// RequireJS plugins
		text 			: '../lib/plugins/requirejs/text',
		cs   			: '../lib/plugins/requirejs/cs',
		tpl   			: '../lib/plugins/requirejs/tpl',
	},
	shim : {
		backbone 		: {
					deps	: ['underscore', 'jquery'],
					exports : "Backbone",
		},
		underscore 		: {
					exports : "_"
		},
	},
});

require(['cs!app',"jquery"], function(app, $) {
	$(function() { 
		app.start()
	});
})
