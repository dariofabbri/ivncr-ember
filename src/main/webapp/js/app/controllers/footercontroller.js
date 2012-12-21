(function(app) {
	
	app.FooterController = Ember.Controller.extend({
		
		//usernameBinding: Ember.Binding.oneWay('App.loginInfo.session.username'),
		
		username: function() {
			
			if(app.loginInfo && app.loginInfo.session) {
				return app.loginInfo.session.username;
			}
			return null;
		}.property(),
		
		postazione: 'default'
	});
	
})(window.App);