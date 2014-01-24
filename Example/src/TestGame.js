var TestGame = Class.create( Core.Game, {
	
	//Override Draw
	Draw: function(e) {
		e.DrawRectangle( Drawing.Colors.Purple, 20, new Geometry.Rectangle(40,80,600,200) );
	}
	
});
