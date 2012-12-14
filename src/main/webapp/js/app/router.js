(function(app) {
	
	var router = Ember.Router.extend({
	
		root: Ember.Route.extend({
	    
			index: Ember.Route.extend({
				route: '/',
				redirectsTo: 'home'
			}),
			  
			home: Ember.Route.extend({
				route: '/home'			
			})
		})
	});

	app.Router = router;
	
})(window.App);