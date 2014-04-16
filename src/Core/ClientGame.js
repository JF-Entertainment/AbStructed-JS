define( ["Engine/Etc/Utils", "Engine/Content/Views/View"] , function(Utils, View) {

    
    var ClientGame = View.extend({
    
        initialize: function(Element) {
           
            //Initialize super
            this._super(0,0,0,0);
            
			//pseudo-parentclass
			this.Parent = {X: 0, Y: 0};
			
            //Reading attributes
            this.Width = Element.width;
            this.Height = Element.height;
            this.Canvas = Element;
            this.Context = Element.getContext("2d");
            
            //GameLoop
			var last = new Date();
			var self = this;
			var LoopFunction = function() {
				//Get current time
				var now = new Date();

				//Call Tick
				self.Tick( (now - last) / 1000 );
				//Call Draw
				self.Draw( self.Context );

				//Update last-time
				last = now;
			};
			var animFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null ;
			if ( animFrame !== null ) {
				var recursiveAnim = function() {
						LoopFunction();
						animFrame( recursiveAnim );
				};
					animFrame( recursiveAnim );    
				} else {
					setInterval( LoopFunction(), 1000.0 / 60.0 );
				}		

            
            
            
        },
        
        
        Draw: function(e) {
            
            //Clear canvas
			
            e.fillStyle = "white";
            e.fillRect(0, 0, this.Width, this.Height);
            
            //Call super
            this._super(e);
               
        }
        
    });
    
    
    
    return ClientGame;
});