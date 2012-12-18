(function (win) {
	
	// Create Ember application.
	//
	win.App = Ember.Application.create({
		
		ApplicationController: Ember.Controller.extend()
	});
	
	// Add support for required attribute in text form fields.
	//
	Ember.TextSupport.reopen({
		
		attributeBindings: ["required"]
	});
	
	// Create a special view for text fields having focus on render.
	//
	win.App.FocusedTextField = Ember.TextField.extend({
		
		didInsertElement: function() {
			this.$().focus();
		}
	});
	
	// Create data store.
	//
	App.store = DS.Store.create({
		revision: 10,
		adapter: DS.RESTAdapter.create({
			bulkCommit: false,
			namespace: 'api'
		})
	});
	
})(window);
