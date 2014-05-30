define( function() {


    var Vector2 = Class.extend({
        
		initialize: function(X, Y) {
			//X and Y
			this.X = X || 0;
			this.Y = Y || 0;
			
		},
		

		Add: function(v) {			
			return new Vector2(this.X + v.X, this.Y + v.Y);
		},


		Substract: function(v) {
			return new Vector2(this.X - v.X, this.Y - v.Y);
		},
		
 
		Multiply: function(v) {
			return new Vector2(this.X * v.X, this.Y * v.Y);
		},
		
	
		Divide: function(v) {
			return new Vector2(this.X / v.X, this.Y / v.Y);
		},
		
		Equals: function(v) {
			
			return (v.X == this.X && v.Y == this.Y);	
		}
        
    });
    

    return Vector2;
});