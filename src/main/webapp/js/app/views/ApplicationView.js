(function(app) {
	
	app.ApplicationView = Ember.View.extend({
		
		template: TemplatesUtil.compile('applicationTemplate.html'),
		elementId: 'ember-top'
	});
	
})(window.App);