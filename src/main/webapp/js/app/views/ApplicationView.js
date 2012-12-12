define([
	"ember",
	"text!templates/applicationTemplate.html"
], function(Ember, applicationTemplate){
	
	var ApplicationView = Ember.View.extend({
		
		template: Ember.Handlebars.compile(applicationTemplate),
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
	
	return ApplicationView;
});
