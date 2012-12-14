define({
	app_name: "EmberJS", 
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		}
	},
	paths : {
		'App': 'app/main',		
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		/*libs*/
		'jquery': 'libs/jquery/jquery',
		'handlebars': 'libs/handlebars/handlebars',
		'ember': 'libs/ember/ember',
		'domReady': 'libs/require/domReady',
		'text': 'libs/require/text'
	}
}); 

