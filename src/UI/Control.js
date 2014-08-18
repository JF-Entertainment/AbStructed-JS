define( ["Engine/Views/View"] , function( View) {

    
    var Control = View.extend({
        
		initialize: function(X, Y, Width, Height) {
			this._super(X, Y, Width, Height);
			
			
		},

		Draw: function(e) {
			e.fillStyle = "red";
			e.fillRect(0, 0,this.Width,this.Height);
		},
        
        //Override super but still call subviews
        onResize: function(ratio) {
            
            //Call Event on subviews
			this.Views.forEach(function(View){
				View.onResize(ratio);
			});  
        }
		
    });
   	

    return Control;
});