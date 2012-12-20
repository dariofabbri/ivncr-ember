(function(app) {
	
	app.DataModel = Ember.Object.extend({
		
		url: null,
		
		id: 'id',
		
		store: function(options) {
			
			var that = this;
			
			jQuery.ajax({
				url: that.url,
				data: JSON.stringify(that),
				dataType: 'json',
				processData: false,
				contentType: 'application/json',
				type: 'POST',
				context: this,
				success: function(data, status, xhr) {
					if(data) {
						that.setProperties(data);
					}
					
					if(options && options.success) {
						options.success(data, status, xhr);
					}
				},
				error: function(xhr, status, error) {
					if(options && options.error) {
						options.error(xhr, status, error);
					}
				}
			});
		},

		fetch: function(options) {

			var url = this.buildURL(this.url, this.get(this.id));
			
			jQuery.ajax({
				url: url,
				dataType: 'json',
				processData: false,
				contentType: 'application/json',
				type: 'GET',
				context: this,
				success: function(data, status, xhr) {
					if(data) {
						that.setProperties(data);
					}
					
					if(options && options.success) {
						options.success(data, status, xhr);
					}
				},
				error: function(xhr, status, error) {
					if(options && options.error) {
						options.error(xhr, status, error);
					}
				}
			});
		},
		
		buildURL: function() {
			
			var parts = [];
			
			for(var i = 0; i < arguments.length; i++) {
				parts.push(arguments[i].toString().replace(/^\/|\/$/g, ''));
			}
			return parts.join('/');
		}
	});
	
})(window.App);