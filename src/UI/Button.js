define( ["Engine/UI/Control", "Engine/Input/MouseInput"] , function(Control, MouseInput) {

    
    var Button = Control.extend({
		
		Load: function() {
			
			this.MouseInput = new MouseInput(this);
			this.isPressed = false;
			
		},
	
		
		Tick: function(elapsed) {
			this._super(elapsed);
			
			
			if ( (this.MouseInput.X > 0) && (this.MouseInput.X < this.Width) && (this.MouseInput.Y > 0) && (this.MouseInput.Y < this.Height) ) {
				this.isPressed = true;
			}else{
				this.isPressed = false;
			}
			
		},
		
		Draw: function(e) {
			
			e.fillStyle = "green";
			if (this.isPressed == true) e.fillStyle = "blue";
			e.fillRect(0, 0,this.Width,this.Height);
			
			
		}
		
    });
   	

    return Button;
});