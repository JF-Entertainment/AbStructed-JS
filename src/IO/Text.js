define(function(require) {
	
	var Resource = require("Engine/IO/Resource");
    
    var Text = Resource.extend({
   
		
		initialize: function() {
			this._super();
			
			this.Data = "";
			
		},
		
		Load: function(Path, Callback) {
			

			Callback = Callback || function() {};
			
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function()
			{
				if (xhr.readyState === 4) {
					
	
					this.Data = xhr.responseText;
					//Callbacks
					this.Loaded = true;
					this.onLoaded();
					Callback();

				}
			}.bind(this);
			xhr.open("GET", Path, true);
			xhr.send();

		
		}
		

        
    });
    

    return Text;
});