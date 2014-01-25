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
	
	DrawRectangle: function(Color, LineWidth, Rectangle) {
		
		//Strokestyle
		this.Context.strokeStyle = Color.toString();
		//Size
		this.Context.lineWidth = LineWidth;
		//Draw
		this.Context.strokeRect(Rectangle.X, Rectangle.Y, Rectangle.Width, Rectangle.Height);
		
	},
	
	FillRectangle: function(Color, Rectangle) {
		
		//Strokestyle
		this.Context.fillStyle = Color.toString();
		//Draw
		this.Context.fillRect(Rectangle.X, Rectangle.Y, Rectangle.Width, Rectangle.Height);
		
	},
	
	DrawLine: function(Color, LineWidth, Vector1, Vector2) {
		
		//Strokestyle
		this.Context.strokeStyle = Color.toString();
		//Size
		this.Context.lineWidth = LineWidth;
		//Draw
		this.Context.beginPath();
		this.Context.moveTo(Vector1.X, Vector1.Y);
		this.Context.lineTo(Vector2.X, Vector2.Y);
		this.Context.closePath();
		this.Context.stroke();
		
	},
	
	DrawPolygon: function(Color, LineWidth, VectorArray) {
		
		//Strokestyle
		this.Context.strokeStyle = Color.toString();
		//Size
		this.Context.lineWidth = LineWidth;
		//Draw
		this.Context.beginPath();
		this.Context.moveTo(VectorArray[0].X, VectorArray[0].Y);
		
		for (var i = 1; i < VectorArray.length; i++) {
    		this.Context.lineTo(VectorArray[i].X, VectorArray[i].Y);
		}
		
		this.Context.closePath();
		this.Context.stroke();
		
	},
	
	FillPolygon: function(Color, VectorArray) {
		
		//Strokestyle
		this.Context.fillStyle = Color.toString();
		//Draw
		this.Context.beginPath();
		this.Context.moveTo(VectorArray[0].X, VectorArray[0].Y);
		
		for (var i = 1; i < VectorArray.length; i++) {
    		this.Context.lineTo(VectorArray[i].X, VectorArray[i].Y);
		}
		
		this.Context.closePath();
		this.Context.fill();
	},
	
	DrawText: function(Text, Color, Font, Position ) {
		
		//Font
		this.Context.font = Font.toString();
        //Color
        this.Context.fillStyle = Color.toString();
		//Draw
        this.Context.fillText(Text, Position.X, Position.Y);
		
	},
	
	MeasureText: function( Text, Font) {
		
		//Font
		this.Context.font = Font.toString();
		
		var Size = new Geometry.Vector2();
        Size.X = this.Context.measureText(Text).width;
		Size.Y = Font.Size;
		
		return Size;
	}
	
	
	

});