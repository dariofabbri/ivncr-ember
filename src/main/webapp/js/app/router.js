define(["ember"], function(Ember){
	var Router = Ember.Router.extend({

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

	return Router;
});
