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
			
			login: Ember.Route.extend({
				
				route: '/login',

				tryLogon: function(router, context) {

					// Data read from view's fields should be available in 
					// controller (through binding).
					//
					var username = router.get('logonController.username');
					var password = router.get('logonController.password');

					var session = app.Session.create({
						username: username,
						password: password
					}); 
					session.store({
						success: function() {
							App.LogonStateManager.transitionTo('loggedOn');
							router.transitionTo('index');
						},
						error: function() {
							router.get('logonController').setCredentialsError();
						}
					});
				},
				
				connectOutlets: function(router, context) {
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'container', 
							name: 'logon'
						});
					router.get('logonController').findPostazioni();
				}
			}),
			
			test: Ember.Route.extend({
				route: '/test',
				
				connectOutlets: function(router, context) {
					console.log('In test route!');

					var session = app.Session.create({
						securityToken: 'admin'
					});
					session.fetch();
				}
			}),
		    
			test1: Ember.Route.extend({
				route: '/test1',
				
				connectOutlets: function(router, context) {
					console.log('In test1 route!');
					
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
			})
		})
	});
	
})(window.App);