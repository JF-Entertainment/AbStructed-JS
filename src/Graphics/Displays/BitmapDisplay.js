define(function(require) {
	
	var Display = require("Engine/Graphics/Displays/Display");
	
    var BitmapDisplay = Display.extend({
        
		
		initialize: function(Bitmap, Rotation) {
			
			this._super();
			
			this.Bitmap = Bitmap;
            this.Rotation = Rotation || 0;
			
			
		},
        
        Draw: function(e) {
            
            //Rotation
            if (this.Rotation != 0) e.rotate(this.Rotation*Math.PI/180);
            
            e.drawImage(this.Bitmap.Data, this.Bitmap.sX, this.Bitmap.sY, this.Bitmap.Width, this.Bitmap.Height, -this.Bitmap.Width/2, -this.Bitmap.Height/2, this.Bitmap.Width, this.Bitmap.Height); 
        
            if (this.Rotation != 0) e.rotate(-this.Rotation*Math.PI/180);
        }
        
        
    });
    

    return BitmapDisplay;
});