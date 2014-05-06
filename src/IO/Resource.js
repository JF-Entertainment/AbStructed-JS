define( function() {

    
    var Resource = Class.extend({
		
		initialize: function() {
			
			this.Loaded = false;
			
		},
		
		Load: function(Path, Callback) {
		
		},
		
		onLoaded: function() {
			this.Loaded = true;
		}
        
    });
    

    return Resource;
});