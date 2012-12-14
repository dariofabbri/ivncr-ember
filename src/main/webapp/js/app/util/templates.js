(function (win) {
	
	win.TemplatesUtil = {

		baseUrl: 'js/app/templates',
		
		load: function(name) {
			
			var template = null;
			var url = this._join(this.baseUrl, name);
			$.ajax(url, {
				type: 'GET',
				async: false,
				success: function(data) {
					template = data;
				}
			});
			
			return template;
		},
		
		compile: function(name) {
			
			var template = this.load(name);
			return Handlebars.compile(template);
		},
		
		_join: function(base, part) {
			
			// Clean base by removing trailing slash(es).
			//
			base = base.replace(/^(.*)(\/)*$/, '$1');
			
			// Join the two parts using a slash.
			//
			return base + '/' + part;
		}
	};
	
})(window);