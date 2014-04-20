define( [ "Engine/UI/ControlModifiers/ControlModifier" ] ,function(ControlModifier) {

	
    var RelativeSizeModifier = ControlModifier.extend({
        
		initialize: function(Width, Height) {
			this.Width = Width;
			this.Height = Height;
		},
		
		Apply: function(Control) {
			
			Control.Width = Control.Parent.Width * this.Width;
			Control.Height = Control.Parent.Height * this.Height;

			
		}
		
    });
   	

    return RelativeSizeModifier;
});