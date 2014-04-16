define( function() {

    
    var Vector2 = Class.extend({
        
		initialize: function(X, Y) {
			//X and Y
			this.X = X || 0;
			this.Y = Y || 0;
			
		},
		
		Add: function(v) {		
			this.X += v.X;
			this.Y += v.Y;
			
			return this;
		},
		
		Substract: function(v) {
			this.X -= v.X;
			this.Y -= v.Y;
			
			return this;
		},
		 
		Multiply: function(v) {
			this.X *= v.X;
			this.Y *= v.Y;
			
			return this;
		},
		
		Divide: function(v) {
			this.X /= v.X;
			this.Y /= v.Y;
			
			return this;
		}
        
    });
    

    return Vector2;
});