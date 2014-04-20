define( [ "Engine/UI/ControlModifiers/ControlModifier" ] ,function(ControlModifier) {

	
    var AlignModifier = ControlModifier.extend({
        
		initialize: function(Alignment, Value) {
			this.Align = Alignment;
			this.Value = Value;
		},
		
		Apply: function(Control) {
			
			switch (this.Align) {
			  case Align.Top:
				
				Control.Y = this.Value;	
		
				break;
			  case Align.Bottom:
					
				Control.Y = Control.Parent.Height - Control.Height - this.Value;	

					
				break;
			  case Align.Right:
					
				Control.X = Control.Parent.Width - Control.Width - this.Value;	
					
				break;
			  case Align.Left:

				Control.X = this.Value;		
					
				break;
			}	
			
		}
		
    });
   	

    return AlignModifier;
});