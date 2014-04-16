define( ["Engine/Math/Structure"] , function(Structure) {

    
    var Rectangle = Structure.extend({
        
		Name: "Rectangle",
		
		initialize: function(Position, Size) {
			this._super(Position);
			this.Size = Size;
		},
		
		isColliding: function(Structure2) {
		
		}
        
    });
    

    return Rectangle;
});