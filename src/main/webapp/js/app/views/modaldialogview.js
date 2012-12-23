(function(app) {
	
	app.ModalDialogView = Ember.View.extend({
		
		template: TemplatesUtil.compile('modaldialog.html'),
		
		classNames: ['modal', 'hide', 'fade'],
		
		didInsertElement: function() {
			this.$().modal({
				show: true, 
				backdrop: "static"
			});
		},

		willDestroyElement: function() {
			this.$().modal('hide');
		}
	});
	
})(window.App);