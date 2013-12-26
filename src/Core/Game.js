var Game = Class.$extend({
	
	__init__: function(Container) {
		
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
		var GameClone = this;
		setInterval( function() {
			//No interval -> as fast as browser is able to update
			var now = new Date();
			GameClone.Tick( (now - last) / 1000 );
			last = now;
		});
		
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