define( ["Engine/Content/Views/View"] , function( View) {

    
    var Control = View.extend({
        
		initialize: function(Width, Height, Modifiers) {
			this._super(0, 0, Width, Height);
			
			//Align properties
			this.Modifiers = Modifiers;
			
			
			
		},

		Draw: function(e) {
			e.fillStyle = "blue";
			e.fillRect(0, 0,this.Width,this.Height);
		}
		
    });
   	

    return Control;
});