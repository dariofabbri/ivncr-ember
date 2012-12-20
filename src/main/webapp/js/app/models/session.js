(function(app) {
	
	app.Session = app.DataModel.extend({
		
		url: 'api/public/security/sessions',
		id: 'securityToken'
	});
	
})(window.App);