define( ["Engine/Content/UI/Control"] , function(Control) {

    
    var Button = Control.extend({
        
		Draw: function(e) {
			e.fillStyle = "green";
			e.fillRect(0, 0,this.Width,this.Height);
			
			e.fillStyle = "black";
			e.fillText("AbsoluteY: " + this.AbsoluteY, 0,0);
		}
		
    });
   	

    return Button;
});