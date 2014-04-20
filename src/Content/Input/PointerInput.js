define( ["Engine/Content/Input/Input"] function(Input) {

    
    var PointerInput = Input.extend({
        
		
		initialize: function(View) {
			//X and Y
			this.View = View;
			
		}
        
    });
    

    return PointerInput;
});