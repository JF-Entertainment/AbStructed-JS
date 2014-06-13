define(function(require) {

    var Structure = require("Engine/Math/Structure");
	
    var Circle = Structure.extend({
        
		Name: "Circle",
		
		initialize: function(Position, Diameter) {
			this._super(Position);
			this.Diameter = Diameter;
		},
		
		isColliding: function(Structure2) {
		
		}
        
    });
    

    return Circle;
});