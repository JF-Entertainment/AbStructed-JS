define(function(require) {
	
	
	var Bitmap = require("Engine/IO/Bitmap"),
		Text = require("Engine/IO/Text");
	
	var ResourceManager = Class.extend({
		
		initialize: function() {
			
			this.Loaded = false;
			this.Resources = new Array();
			this.Progress = 0;
		},
		
		fromFile: function(Path, Callback) {
			//loadfile
			Callback = Callback || function(){};
			
			var AtlasFile = new Text();
			AtlasFile.Load(Path, function() {

				var Atlas = JSON.parse(AtlasFile.Data).Resources;
				var FileCounter = 0;

				//File in list was loaded
				function FileLoaded() {
					
					FileCounter++;
					this.Progress = FileCounter / Atlas.length;
					
					if (this.Progress >= 1) {
						this.Loaded = true;
						this.onLoaded();
						Callback();
					}
				}


				Atlas.forEach(function(Resource) {

					switch (Resource.Type) {
						case "Bitmap":
							this._loadBitmap(Resource.Path, Resource.Content, FileLoaded.bind(this));
							break;
					}

				}.bind(this));
			
				
			}.bind(this));
				
		},
		
		
		_loadBitmap: function(Path, Content, Callback) {
		
			//Load 
			var Source = new Bitmap();

			Source.Load(Path, function() {
				//Draw source on canvas

				
				//Add subresources to list
				Content.forEach(function(Resource){
                    
					this.Resources[Resource.Name] = new Bitmap(Resource.Width, Resource.Height, Resource.X, Resource.Y, Source.Width, Source.Height);
                    this.Resources[Resource.Name].Data = Source.Data;

				}.bind(this));
				
				//Callback
				Callback();
				
				//clean-up
				delete canvas;
				delete context;
				delete Source;
				
			}.bind(this));
			
		},
		
		onLoaded: function() {

		}
        
    });
    
	return ResourceManager;
});