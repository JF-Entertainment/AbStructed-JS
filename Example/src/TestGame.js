var TestGame = Class.create( Core.Game, {
	
	//Override Draw
	Draw: function(e) {
		e.DrawRectangle(Color.Red, 10, new Rectangle(40,80,600,200));
	}
	
});
