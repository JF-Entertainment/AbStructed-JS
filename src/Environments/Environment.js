define( function() {

    
    var Environment = Class.extend({
        
		initialize: function() {
			this.Systems = new Array();
			this.Entities = new Array();
		},
		
		addSystem: function(NewSystem) {
			//Hook to self
			NewSystem.Environment = this;
			//Add to array
			this.Systems.push(NewSystem);
		},
		
		addEntity: function(NewEntity) {
			this.Entities.push(NewEntity);
		},
		
		getEntities: function(ComponentQuery) {
			
			var Result = new Array();
			//Go trough entities
			this.Entities.forEach(function(Entity){
				
				if (Entity.Has(ComponentQuery)) Result.push(Entity);
				
			});
			
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