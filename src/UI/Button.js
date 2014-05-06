define( ["Engine/UI/Control", "Engine/Input/MouseInput"] , function(Control, MouseInput) {

    
    var Button = Control.extend({
		
		Load: function() {
			
			this.MouseInput = new MouseInput(this);
			this.isPressed = false;
			this.Hover = false;
			
		},
	
		
		Tick: function(elapsed) {
			this._super(elapsed);
			
			this.isPressed = false;
			
			//Mouse on button?
			//TODO: Replace with Rectangle-Point collision
			if ( (this.MouseInput.X > 0) && (this.MouseInput.X < this.Width) && (this.MouseInput.Y > 0) && (this.MouseInput.Y < this.Height) ) {
				
				this.Hover = true;
				if (this.MouseInput.Button == MouseButton.Left) {
					this.isPressed = true;
					this.onClick();
				}

				
			}else{
				
				this.Hover = false;
			}
			
		},
		
		Draw: function(e) {
			this._super(e);
			
			e.fillStyle = "green";
			if (this.isPressed == true) e.fillStyle = "blue";
			e.fillRect(0, 0,this.Width,this.Height);
			
			
		},
		
		onClick: function() {

		}
		
    });
   	

    return Button;
});