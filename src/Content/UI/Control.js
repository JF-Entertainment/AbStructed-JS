define( ["Engine/Content/Views/View"] , function( View) {

    
    var Control = View.extend({
        
		initialize: function(Width, Height, Modifiers) {
			this._super(0, 0, Width, Height);
			
			//Align properties
			this.Modifiers = Modifiers;
			
			
			
		},
		
		Layout: function() {
			
			var self = this;
			
			this.Modifiers.forEach(function(Modifier){
				Modifier.Apply(self);
			});
			
		},
		
		Draw: function(e) {
			e.fillStyle = "blue";
			e.fillRect(this.X,this.Y,this.Width,this.Height);
		}
		
    });
   	

    return Control;
});