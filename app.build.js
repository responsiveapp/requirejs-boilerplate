
({
	appDir: "www",
    dir: "www-built",
	mainConfigFile: 'www/js/app.js',

	stubModules: ['cs', 'text', 'tpl'], // we don't need this in optimized, all is compiled/inlined

	modules: [
	 	{
	 		name: "app",
 			exclude: ["coffee-script"], // can't just "exclude" as it also excludes jquery!?
	 	},
	],

	optimizeCss: "standard",

	optimize: "uglify",
	uglify: {			// See https://github.com/mishoo/UglifyJS for the possible values.
		toplevel		: false,
		beautify		: false,
		max_line_length	: 1000,
		show_copyright	: false,
	},
	logLevel: 0
})
