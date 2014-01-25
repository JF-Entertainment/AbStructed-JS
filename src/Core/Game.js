/*  ============================================================================
 *  AbStructed | HTML5-Game Engine/Framework
 *  (c) 2013   
 *
 *  AbStructed is free software released into public domain.
 *  ============================================================================
 */
//Namespace Core
ns("Core").Game = Class.create({
	
	initialize: function(Container) {
		
		//Create canvas
		this.Canvas = document.createElement('Canvas');
		this.Context = this.Canvas.getContext("2d");
		
		//Clear Container-Div
		Container.innerHTML = "";
		Container.appendChild( this.Canvas );
		
		//Resize
		this.Canvas.width = Container.offsetWidth;
		this.Canvas.height = Container.offsetHeight;
		
		//Game-Loop
		var last = new Date();
		var self = this;
		var LoopFunction = function() {
			//Get current time
			var now = new Date();
			//Call Tick
			self.Tick( (now - last) / 1000 );
			//Call Draw
			var NewGraphics = new Drawing.Graphics(self.Canvas.width, self.Canvas.height);
			self.Draw( NewGraphics );
			self.Context.clearRect(0,0,self.Context.width,self.Context.height);
			self.Context = NewGraphics.MergeContext(self.Context);
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
           	var ONE_FRAME_TIME = 1000.0 / 60.0 ; //60fps
            setInterval( LoopFunction(), ONE_FRAME_TIME );
        }		
		
		//Load
		this.Load();
		
	},
	
	Load: function() {
		
	},
	
	Tick: function(elapsed) {

	},
	
	Draw: function(e) {

	}

});