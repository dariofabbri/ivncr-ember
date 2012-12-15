(function(app) {
	
	app.LogonView = Ember.View.extend({
		
		template: TemplatesUtil.compile('logonTemplate.html')
		
	});

	app.LogonController = Ember.Controller.extend();
	
})(window.App);