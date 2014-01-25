
ns("Drawing").Font = Class.create({

	initialize: function(Size, Family) {	
		
		this.Size = Size;
		this.Family = Family;
		this.Bold = false;
		this.Italic = false;
		
	},
	
	toString: function() {
		
		var FontString = "";
		
		if (this.Italic) FontString += "italic ";
		if (this.Bold) FontString += "bold ";
		
		FontString += this.Size + "px " + this.Family;
		
		return FontString;
	}

});