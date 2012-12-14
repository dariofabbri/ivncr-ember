(function (win) {
	
	win.App = Ember.Application.create({
		
		ApplicationController: Ember.Controller.extend(),
		ready: function() {
			this.initialize();
		}
	});
	
})(window);
