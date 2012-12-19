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
					
					app.Session = DS.Model.extend({
						loggedOn: DS.attr('boolean'),
						//idUser: 1,
					    username: DS.attr('string'),
					    password: DS.attr('string'),
					    name: DS.attr('string'),
					    surname: DS.attr('string'),
					    logonTs: DS.attr('date'),
					    securityToken: DS.attr('string')
					    //"roles": null,
					    //"permissions": null
					});
					app.Session.reopenClass({
						url: '/public/security/sessions',
					});
					
					var logonUser = app.store.createRecord(app.Session, {
						username: 'admin',
						password: 'admin'
					});
					app.store.commit();
					//while(!logonUser.isLoaded) {}
					
					console.log('Security token:' + logonUser.get('securityToken'));
				}
			}),
			
			login: Ember.Route.extend({
				
				route: '/login',
				
				tryLogon: function(router, context) {

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