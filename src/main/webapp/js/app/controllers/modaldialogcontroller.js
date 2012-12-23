(function(app) {
	
	app.ModalDialogController = Ember.Controller.extend({
		title: 'Sample title',
		message: 'Sample message',
		showCancel: true,
		cancelCaption: 'Cancel',
		showOk: true,
		okCaption: 'OK'
	});
	
})(window.App);