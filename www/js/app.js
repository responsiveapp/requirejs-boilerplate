requirejs.config(
{
	baseUrl: "js/lib/",
	paths: {
		app : "../app"
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

require(['cs!app/main',"jquery"], function(app, $) {
	$(function() { 
		app.start()
	});
})
