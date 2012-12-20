(function(app) {
	
	app.FooterView = Ember.View.extend({
		
		template: TemplatesUtil.compile('footer.html')
	});
	
})(window.App);