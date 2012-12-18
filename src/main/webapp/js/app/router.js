(function(app) {
	
	app.Router = Ember.Router.extend({
		
		enableLogging:  true,
		
		root: Ember.Route.extend({
	    
			index: Ember.Route.extend({
				route: '/',
				
				connectOutlets: function(router, context) {
					
					if(App.LogonStateManager.currentState.name === 'loggedOff') {
						router.transitionTo('login');
						return;
					}
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'container', 
							name: 'home'
						});
				}
			}),
		    
			test: Ember.Route.extend({
				route: '/test',
				
				connectOutlets: function(router, context) {
					console.log('In test route!');
				}
			}),
			
			login: Ember.Route.extend({
				
				route: '/login',
				
				tryLogon: function(router, context) {
					
					console.log('Clicked on login button!');

					// Read data from view should be in controller (through binding).
					//
					var username = router.get('logonController.username');
					var password = router.get('logonController.password');
					
					// Check credentials.
					//
					if(username === 'admin' && password === 'admin') {
						router.get('logonController').resetError();
						App.LogonStateManager.transitionTo('loggedOn');
						router.transitionTo('index');
					} else {
						router.get('logonController').setCredentialsError();
					}
				},
				
				connectOutlets: function(router, context) {
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'container', 
							name: 'logon'
						});
					router.get('logonController').findPostazioni();
				}
			})
		})
	});
	
})(window.App);