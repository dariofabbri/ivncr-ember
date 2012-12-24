(function(app) {
	
	app.NavbarView = Ember.View.extend({
		
		template: TemplatesUtil.compile('navbar.html')
	});
	
})(window.App);