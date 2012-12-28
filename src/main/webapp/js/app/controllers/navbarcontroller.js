(function(app) {
	
	app.NavbarController = Ember.Controller.extend({
		
		grants: [],
		
		loadGrants: function() {
			
			grants.push({
		        "action": "test",
		        "allowed": true
		    });
		},
		
		checkGrant: function(action) {
			
			return false;
		}
	});
	
})(window.App);