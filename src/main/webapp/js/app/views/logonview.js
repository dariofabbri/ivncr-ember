(function(app) {
	
	app.LogonView = Ember.View.extend({
		
		template: TemplatesUtil.compile('logon.html'),
		
		keyDown: function(event) {
			
			if(event.keyCode == 13) {
				app.get('router').send('tryLogon');
			}
		}
		
	});
	
})(window.App);