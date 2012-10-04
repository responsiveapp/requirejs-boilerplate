requirejs.config(
{
	baseUrl: "js/lib/",
	paths: {
		app : "../app"
	}
});

require(['cs!app/main',"jquery"], function(app, $) {
	$(function() { 
		app.start()
	});
})
