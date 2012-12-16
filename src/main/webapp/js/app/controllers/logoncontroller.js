(function(app) {
	
	app.LogonController = Ember.Controller.extend({

		postazioni: [],
		username: null,
		password: null,
		
		findPostazioni: function() {
		
			this.postazioni.length = 0;
			
			var postazione = app.Postazione.create({
				id: 1,
				descrizione: "Mercati"
			});
			this.postazioni.push(postazione);
			
			var postazione = app.Postazione.create({
				id: 2,
				descrizione: "Direzionale A"
			});
			this.postazioni.push(postazione);
			
			var postazione = app.Postazione.create({
				id: 3,
				descrizione: "Direzionale B"
			});
			this.postazioni.push(postazione);

			return this.postazioni;
		}
	});
	
})(window.App);