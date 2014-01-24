//Namespace Drawing
ns("Drawing").Graphics = Class.create({
	
	initialize: function(Width, Height) {
		
		//Public variables
		this.Width = Width;
		this.Height = Height;
		
		//Create canvas
		this.Canvas = document.createElement('Canvas');
		this.Canvas.width = Width;
		this.Canvas.height = Height;
		this.Context = this.Canvas.getContext("2d");
		
	},
	
	MergeContext: function(OriginalContext) {
        
    	OriginalContext.putImageData( this.Context.getImageData(0, 0, this.Width, this.Height) , 0, 0);
        return OriginalContext;
    },
    
	Merge: function(NewGraphics, X, Y) {
		
        this.Context.drawImage(NewGraphics.Canvas, X, Y);
    
    },
	
	//Drawing functions
	
	DrawBitmap: function(Image, Position, Size) {
	
	},
	
	//Draws a border of the rectangle
	DrawRectangle: function(Color, LineWidth, Rectangle) {
		
		//Strokestyle
		this.Context.strokeStyle = Color.toString();
		//Size
		this.Context.lineWidth = LineWidth;
		//Draw
		this.Context.strokeRect(Rectangle.X, Rectangle.Y, Rectangle.Width, Rectangle.Height);
		
	},
	
	FillRectangle: function(Color, Rectangle) {
	
	},
	
	DrawLine: function(Color, Size, Vector1, Vector2) {
	
	},
	
	DrawPolygon: function(Color, Size, VectorArray) {
	
	},
	
	FillPolygon: function(Color, VectorArray) {
	
	},
	
	DrawString: function(Text, Color, Font, Position ) {
	
	},
	
	MeasureString: function( Text, Font) {
	
	}
	
	
	

});