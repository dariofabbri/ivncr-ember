(function(app) {
	
	var stateManager = Ember.StateManager.create({
		
		states: {
			loggedOn: Ember.State.create(),
			loggedOff: Ember.State.create()
		},
	
		initialState: 'loggedOff'
	});
	

	app.LogonStateManager = stateManager;
	
})(window.App);