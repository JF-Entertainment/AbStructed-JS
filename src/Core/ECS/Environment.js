define( function() {

    
    var Environment = Class.extend({
        
		initialize: function() {
			this.Systems = new Array();
			this.Containers = new Array();
		},
		
		addSystem: function(NewSystem) {
			//Hook to self
			NewSystem.Environment = this;
			//Add to array
			this.Systems.push(NewSystem);
		},
		
		addContainer: function(NewContainer) {
			this.Containers.push(NewContainer);
		},
		
		getContainers: function(Names) {
			var Result = new Array();
			
			//Go trough containers
			for (var i=0; i < this.Containers.length; i++){
				var containseverything = true;
				//Go trough
				for (var y=0; y < Names; y++){
					//If componnets do not have name -> dont add
					if (this.Containers[i].Components.indexOf( Names[y] ) < 0) containseverything = false;
				}
				
				if (containseverything) Result.push(this.Containers[i]);
			}
			
			return Result;
		},

		
		
		Tick: function(elapsed) {
			//Call systems
			for (var i=0; i<this.Systems.length; i++) {
				this.Systems[i].Tick(elapsed);
			}
			
		},
		
		Draw: function(e) {
			//Call systems
			for (var i=0; i<this.Systems.length; i++) {
				this.Systems[i].Draw(e);
			}			
		}
        
    });
    

    return Environment;
});