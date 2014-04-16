define( function() {

    
    var View = Class.extend({
        
        initialize: function(X, Y, Width, Height) {
            this.Views = new Array();
			this.State = State.Active;
			
			this.Parent = null;
			
			this.X = X || 0;
			this.Y = Y || 0;
			this.Width = Width || 0;
			this.Height = Height || 0;
			
        },
        
        Tick: function(elapsed) {
            
            for (var i=0; i < this.Views.length; i++){

                if (this.Views[i].State == State.Killed){
                    //Delete Scene and add index
                    this.Views.splice(i, 1);
                    i++;
                    if (i >= this.Views.length) break;
                }
                   
                //Call "Tick"-Method
                if (this.Views[i].State != State.Pause) this.Views[i].Tick(elapsed);
                
            }
        
        },
        
        Draw: function(e) {
			
            //Call Draw-Function	
			this.Views.forEach(function(Screen){
				
				e.translate( Screen.X, Screen.Y );
				Screen.Draw(e);
				e.translate( -Screen.X, -Screen.Y );
				
			});    
			
        },
        
        addView: function(NewView) {
			//Link parent-property to self
			NewView.Parent = this;
            //Add View to array
            this.Views.push(NewView);
        },
		
		Delete: function() {
			this.State = State.Killed;
		}
        
        
    });
    

    return View;
});