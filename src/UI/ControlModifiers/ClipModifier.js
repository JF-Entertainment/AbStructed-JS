define( [ "Engine/UI/ControlModifiers/ControlModifier" ] ,function(ControlModifier) {

	
    var AlignModifier = ControlModifier.extend({
        
		initialize: function(Alignment, Value) {
			this.Align = Alignment;
			this.Value = Value;
		},
		
		Apply: function(Control) {
			
			var Value = this.Value;
			if (Value < 1) {
				
				//Vertical
				if( (this.Align == Align.Top) || (this.Align == Align.Bottom) ) Value = Control.Parent.Height * Value;
				
				//Horizontal
				if( (this.Align == Align.Right) || (this.Align == Align.Left) ) Value = Control.Parent.Width * Value;
			
			}
			
			switch (this.Align) {
			  case Align.Top:
				
				Control.Y = Value;	
		
				break;
			  case Align.Bottom:
					
				Control.Height = Control.Parent.Height - Value - Control.Y;

					
				break;
			  case Align.Right:
					
				Control.Width = Control.Parent.Width - Value - Control.X;		
					
				break;
			  case Align.Left:

				Control.X = Value;		
					
				break;
			}	
			
		}
		
    });
   	

    return AlignModifier;
});