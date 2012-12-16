(function (win) {
	
	win.App = Ember.Application.create({
		
		ApplicationController: Ember.Controller.extend()
	});
	
	Ember.TextSupport.reopen({
		
		attributeBindings: ["required"]
	});
	
	win.App.FocusedTextField = Ember.TextField.extend({
		
		didInsertElement: function() {
			this.$().focus();
		}
	});
	
})(window);
