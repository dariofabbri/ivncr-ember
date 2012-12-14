(function(app) {
	
	var view = Ember.View.extend({
		
		template: TemplatesUtil.compile('applicationTemplate.html'),
		elementId: 'ember-top'
		/*
		childViews: ['navbarView', 'containerView', 'modaldialogView', 'footerView'],
		
		navbarView: Ember.ContainerView.create({
			elementId: 'navbar',
			tagName: 'div'
		}),
		
		containerView: Ember.ContainerView.create({
			elementId: 'container',
			tagName: 'div',
			classNames: 'container'
		}),
		
		modaldialogView: Ember.ContainerView.create({
			elementId: 'modaldialog',
			tagName: 'div'
		}),
		
		footerView: Ember.ContainerView.create({
			elementId: 'footer',
			tagName: 'div'
		})
		*/
	});

	app.ApplicationView = view;
	
})(window.App);