define( ["Engine/UI/Control", "Engine/Input/MouseInput"] , function(Control, MouseInput) {

    
    var Button = Control.extend({
        
		
		Load: function() {
			
			this.MouseInput = new MouseInput(this);
			
		},
	
		Draw: function(e) {
			e.fillStyle = "green";
			e.fillRect(0, 0,this.Width,this.Height);
			
		}
		
    });
   	

    return Button;
});