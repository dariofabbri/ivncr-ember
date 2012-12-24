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
							outletName: 'navbar', 
							name: 'navbar'
						});
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'container', 
							name: 'home'
						});
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'footer', 
							name: 'footer'
						});
				},

				doLogoff: function(router, context) {
	
					app.loginInfo.session.destroy();
					app.loginInfo = null;
					
					router.get('logonController').clean();
					
					App.LogonStateManager.transitionTo('loggedOff');
					router.transitionTo('login');
				}
			}),
			
			login: Ember.Route.extend({
				
				route: '/login',
				
				connectOutlets: function(router, context) {
					
					router.get('applicationController')
						.disconnectOutlet('navbar');
					
					router.get('applicationController')
						.disconnectOutlet('footer');
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'container', 
							name: 'logon'
						});
					router.get('logonController').findPostazioni();
				},

				tryLogon: function(router, context) {
	
					// Data read from view's fields should be available in 
					// controller (through binding).
					//
					var username = router.get('logonController.username');
					var password = router.get('logonController.password');
	
					app.loginInfo = {};
					app.loginInfo.session = app.Session.create({
						username: username,
						password: password
					}); 
					app.loginInfo.session.save({
						success: function() {
							App.LogonStateManager.transitionTo('loggedOn');
							router.transitionTo('index');
						},
						error: function() {
							router.get('logonController').setCredentialsError();
						}
					});
				}
			}),
			
			modaldialog: Ember.Route.extend({
				route: '/modaldialog',
				
				connectOutlets: function(router, context) {
					console.log('In modaldialog route!');
					
					router.get('applicationController')
						.connectOutlet({
							outletName: 'modaldialog', 
							name: 'modalDialog'
						});
				},
				
				ok: function(router, context) {
					
					router.get('applicationController')
						.disconnectOutlet('modaldialog');
				},
				
				cancel: function(router, context) {
					
					router.get('applicationController')
						.disconnectOutlet('modaldialog');					
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