define(function(require) {

    var Structure = require("Engine/Math/Structure"),
		Vector = require("Engine/Math/Vector2");
    
    var Rectangle = Structure.extend({
        
		Name: "Rectangle",
		
		initialize: function(Position, Size) {
			this._super(Position);
			this.Size = Size;
		},
		
		isColliding: function(Modifier1, Modifier2, Structure2) {
			
			
			var r1 = {
				left: this.Position.X + Modifier1.X - this.Size.X/2,
				right: this.Position.X + Modifier1.X + this.Size.X/2,
				top: this.Position.Y + Modifier1.Y - this.Size.Y/2,
				bottom: this.Position.Y + Modifier1.Y + this.Size.Y/2
			};
			
			var r2 = {
				left: Structure2.Position.X + Modifier2.X - Structure2.Size.X/2,
				right: Structure2.Position.X + Modifier2.X + Structure2.Size.X/2,
				top: Structure2.Position.Y + Modifier2.Y - Structure2.Size.Y/2,
				bottom: Structure2.Position.Y + Modifier2.Y + Structure2.Size.Y/2
			};
			
			var Collision = !(r2.left > r1.right || 
							r2.right < r1.left || 
           					r2.top > r1.bottom ||
           					r2.bottom < r1.top);
			
//			
//			

			return {Collision: Collision, Intersection: new Vector2(0, 0)};
			
		}
        
    });
    

    return Rectangle;
});