(function (win) {
	
	// Create Ember application.
	//
	win.App = Ember.Application.create({
		
		ApplicationController: Ember.Controller.extend()
	});
	
	// Add support for required attribute in text form fields.
	//
	Ember.TextSupport.reopen({
		
		attributeBindings: ["required"]
	});
	
	// Create a special view for text fields having focus on render.
	//
	win.App.FocusedTextField = Ember.TextField.extend({
		
		didInsertElement: function() {
			this.$().focus();
		}
	});
	
	// Create an adapter.
	//
	App.adapter = DS.Adapter.create({
		
		namespace: 'api',
		
		createRecord: function(store, type, model) {
			
			var urlParts = [this.namespace];
			urlParts.push(type.url);
			for(var i = 0; i < urlParts.length; i++) {
				urlParts[i] = urlParts[i].replace(/^\/|\/$/g, '');
			}
			var url = urlParts.join('/');
			
			jQuery.ajax({
				url: url,
				data: JSON.stringify(model.serialize()),
				dataType: 'json',
				processData: false,
				contentType: 'application/json',
				type: 'POST',
				context: this,
				success: function(data) {
					Ember.run(this, function() {
						this.didCreateRecord(store, type, model, data);
					});
				}
			});
		}
	});
	
	// Create data store.
	//
	App.store = DS.Store.create({
		revision: 10,
		adapter: App.adapter
	});
	
})(window);
