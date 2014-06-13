define(function(require) {
	
	
	var Input = require("Engine/Input/Input");
	
	
    var MouseInput = Input.extend({
        
		
		initialize: function(View) {
			this._super(View);
			
			this.X = 0;
			this.Y = 0;
			this.Button = MouseButton.None;
			this.isPressed = false;
			
			//Event-Hooks
			View.Game.Canvas.addEventListener('mousemove', this.onMouseMove.bind(this) );
			View.Game.Canvas.addEventListener('mousedown', this.onMouseDown.bind(this) );
			View.Game.Canvas.addEventListener('mouseup', this.onMouseUp.bind(this) );
			
		},
		
		onMouseMove: function(event) {
			
			//Set X and Y
			this.X = event.clientX - this.View.AbsoluteX;
			this.Y = event.clientY - this.View.AbsoluteY;

		},
		
		onMouseDown: function(event) {
			this.isPressed = true;

			if (event.button == 0) this.Button = MouseButton.Left;
			if (event.button == 1) this.Button = MouseButton.Middle;
			if (event.button == 2) this.Button = MouseButton.Right;
			
			
 		},
		
		onMouseUp: function(event) {
			this.isPressed = false;
			
			this.Button = MouseButton.None;
			
		}
        
    });
    

    return MouseInput;
});