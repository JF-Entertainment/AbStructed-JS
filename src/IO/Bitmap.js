define( ["Engine/IO/Resource"] , function(Resource) {

    
    var Bitmap = Resource.extend({
   
		
		initialize: function(Width, Height, sX, sY, sWidth, sHeight) {
			this._super();
			
			this.Width = Width || 0;
			this.Height = Height || 0;
			
			this.sX = sX || 0;
			this.sY = sY || 0;
			
			this.sWidth = sWidth || 0;
			this.sHeight = sHeight || 0;
			
			this.Data = null;
			
		},
		
		Load: function(Path, Callback) {
			
			this.Data = new Image();
			Callback = Callback || function() {};
			
			//onLoad
			this.Data.onload = function() {
				
				//AutoOptions
				if (this.Width == 0) this.Width = this.Data.width;
				if (this.Height == 0) this.Height = this.Data.height;
				
				if (this.sWidth == 0) this.sWidth = this.Data.width;
				if (this.sHeight == 0) this.sHeight = this.Data.height;
				
				//Callbacks
				this.Loaded = true;
				this.onLoaded();
				Callback();
				
			}.bind(this);
			
			//Load from path	
			this.Data.src = Path;
		
			
		}
        
    });
    

    return Bitmap;
});