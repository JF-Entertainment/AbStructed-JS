var TestGame = Class.create( Core.Game, {
	
	//Override Draw
	Draw: function(e) {
		e.DrawLine( Drawing.Colors.Yellow, 100, {X: 20, Y: 600}, {X: 500, Y: 700});
		e.FillPolygon( Drawing.Colors.Yellow, [ {X: 25, Y: 25}, {X: 105, Y: 25}, {X: 25, Y: 105} ]);
	}
	
});
