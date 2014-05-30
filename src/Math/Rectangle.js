define( ["Engine/Math/Structure", "Engine/Math/Vector2"] , function(Structure, Vector2) {

    
    var Rectangle = Structure.extend({
        
		Name: "Rectangle",
		
		initialize: function(Position, Size) {
			this._super(Position);
			this.Size = Size;
		},
		
		isColliding: function(Modifier1, Modifier2, Structure2, movedX, movedY) {
			
			
			
			var Collision =     !(Structure2.Position.X  + Modifier2.X > this.Position.X + this.Size.X + Modifier1.X || 
           						Structure2.Position.X + Structure2.Size.X + Modifier2.X < this.Position.X + Modifier1.X|| 
								Structure2.Position.Y + Modifier2.Y > this.Position.Y + this.Size.Y + Modifier1.Y ||
           						Structure2.Position.Y + Structure2.Size.Y + Modifier2.Y < this.Position.Y + Modifier1.Y);
			
//			var deltaX, deltaY = 0;
//			
//			if (movedX > 0) {	//Moving Right
//				var intersectX = (Structure2.Position.X + Modifier2.X) - (this.Position.X + Modifier1.X) - this.Size.X;
//				
//				console.log(intersectX);
//				
//				deltaX += intersectX;
//			}
//			
//			
//			if (movedX < 0) {	//Moving Left
//				var intersectX = (Structure2.Position.X + Modifier2.X) +  Structure2.Size.X - (this.Position.X + Modifier1.X);
//
//				deltaX += intersectX;
//			}
//			
//			
//			if (movedY > 0) {	//Moving Down
//				
//				
//				var intersectY = (Structure2.Position.Y + Modifier2.Y) - (this.Position.Y + Modifier1.Y) - this.Size.Y;
//				
//				if (Structure2.Position.Y + Modifier2.Y < this.Position.Y + this.Size.Y + Modifier1.Y - movedY) intersectY = 0;
//				
//				deltaY += intersectY;
//			}
//			
//			
//			if (movedY < 0) {	//Moving Up
//				var intersectY = (Structure2.Position.Y + Modifier2.Y) +  Structure2.Size.Y - (this.Position.Y + Modifier1.Y);
//
//				deltaY += intersectY;
//			}
//			
//			
//			

			return {Collision: Collision, Intersection: new Vector2(0, 0)};
			
		}
        
    });
    

    return Rectangle;
});