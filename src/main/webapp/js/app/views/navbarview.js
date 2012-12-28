(function(app) {
	
	app.NavbarView = Ember.View.extend({
		
		template: TemplatesUtil.compile('navbar.html'),
		
		didInsertElement: function() {
			
			// Right after element rendering, disable all actions.
			//
			this.processActions();
		},
	
		processActions: function() {
			
			// Find all elements having data-action attribute.
			//
			var that = this;
			$('[data-action]').each(function() {
				
				// Get action.
				//
				var action = $(this).attr('data-action');
				if(!that.controller.checkGrant(action)) {
					$(this).addClass('disabled');
				}
			});
		},
		
		grantsDidChange: function() {
			
			this.processActions();
			
		}.observes('controller.grants'),
		
		click: function(event) {
			
			if($(event.target).parent().hasClass('disabled')) {
				event.preventDefault();
			}
		}
	});
	
})(window.App);