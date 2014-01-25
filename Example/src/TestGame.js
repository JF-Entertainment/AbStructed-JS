var TestGame = Class.create( Core.Game, {
	
	//Override Draw
	Draw: function(e) {

		var TestFont = new Drawing.Font(50, "Arial");
		e.DrawText( "Das ist ein Test", Drawing.Colors.Black, TestFont, new Geometry.Vector2(200, 200));
	}
	
});
