(function(app) {
	
	app.ApplicationView = Ember.View.extend({
		
		template: TemplatesUtil.compile('application.html'),
		elementId: 'ember-top'
	});
	
})(window.App);