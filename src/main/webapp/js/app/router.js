(function(app) {
	
	var router = Ember.Router.extend({
		
		enableLogging:  true,
		
		root: Ember.Route.extend({
	    
			index: Ember.Route.extend({
				route: '/',
				enter: function(router) {
					console.log('Entered index route.');
					if(App.LogonStateManager.currentState.name === 'loggedOff') {
						router.transitionTo('login');
					}
				}
			}),
			
			login: Ember.Route.extend({
				enter: function(router) {
					console.log('Entered login route.');
				},
				connectOutlets: function(router, context) {
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'container', 
							name: 'logon'
						});
				}
			})
		})
	});

	app.Router = router;
	
})(window.App);