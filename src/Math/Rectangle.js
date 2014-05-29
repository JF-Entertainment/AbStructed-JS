define( ["Engine/Math/Structure", "Engine/Math/Vector2"] , function(Structure, Vector2) {

    
    var Rectangle = Structure.extend({
        
		Name: "Rectangle",
		
		initialize: function(Position, Size) {
			this._super(Position);
			this.Size = Size;
		},
		
		isColliding: function(Structure2) {
			var Collision =     !(Structure2.Position.X > this.Position.X + this.Size.X || 
           						Structure2.Position.X + Structure2.Size.X < this.Position.X || 
								Structure2.Position.Y > this.Position.Y + this.Size.Y ||
           						Structure2.Position.Y + Structure2.Size.Y < this.Position.Y);
			
			if (Collision == false) {
				var Intersection = 	new Vector2(0,0);
			}else{
				
			}
			
		}
        
    });
    

    return Rectangle;
});