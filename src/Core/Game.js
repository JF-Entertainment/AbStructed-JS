/*  AbStructed | HTML5-Game Engine/Framework
 * 	(c) 2013   
 *
 *  AbStructed is freely distributable under the terms of an MIT-style license.
 */
 

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
			var now = new Date();
			self.Tick( (now - last) / 1000 );
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
		console.log("test");
	},
	
	Draw: function(e) {
	
	}

});