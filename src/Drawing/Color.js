
ns("Drawing").Color = Class.create({
	
	initialize: function(Red, Green, Blue, Alpha) {
		this.Red = Red;
		this.Green = Green;
		this.Blue = Blue;
		this.Alpha = Alpha;
	},
	
	toString: function() {
		return "rgba(" + this.Red + "," + this.Green + "," + this.Blue + "," + this.Alpha + ")";
	}
	
});

