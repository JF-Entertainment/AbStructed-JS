define( [ "Engine/Content/UI/ControlModifiers/ControlModifier" ] ,function(ControlModifier) {

	
    var CenterModifier = ControlModifier.extend({
        
		initialize: function(MatrixParameter, Value) {
			this.Matrix = MatrixParameter;
		},
		
		Apply: function(Control) {
			
			switch (this.Matrix) {
			  case Matrix.X:
				
				Control.X = Control.Parent.Width / 2  - Control.Width / 2;
		
				break;
			  case Matrix.Y:
					
				Control.Y = Control.Parent.Height / 2  - Control.Height / 2;	

					
				break;
			}	
			
		}
		
    });
   	

    return CenterModifier;
});