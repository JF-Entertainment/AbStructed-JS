define( ["Engine/IO/Resource"] , function(Resource) {

    
    var Bitmap = Resource.extend({
   
		
		initialize: function() {
			this._super();
			
			this.Width = 0;
			this.Height = 0;
			this.Data = null;
			
		},
		
		Load: function(Path, Callback) {
			
			this.Data = new Image();
			Callback = Callback || function() {};
			
			//onLoad
			this.Data.onload = function() {
				
				this.Width = this.Data.width;
				this.Height = this.Data.height;
				//Callbacks
				this.onLoaded();
				Callback();
				
			}.bind(this);
			
			//Load from path	
			this.Data.src = Path;
		
			
		}
        
    });
    

    return Bitmap;
});