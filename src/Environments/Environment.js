define( function() {

    
    var Environment = Class.extend({
        
		initialize: function() {
			this.Systems = new Array();
			this.Entities = new Array();
			this.Events = new Array();
		},
		
		addSystem: function(NewSystem) {
			//Hook to self
			NewSystem.Environment = this;
			NewSystem.Load();
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
		
		addEvent: function(Name, Hook, Alias) {
				
			//If event doesn't exists -> create 
			if (!this.Events[Name]) this.Events[Name] = new Array();
			
			//Add hook to Event-Array
			this.Events[Name].push({Hook: Hook, Alias: Alias});


		},
		
		raiseEvent: function(Name, Parameter) {
			
			//If event exists -> go through hooks
			if (this.Events[Name] != null) this.Events[Name].forEach(function(Hook){

				Hook.Hook.apply(Hook.Alias,Parameter);
				
			});
			
		}

        
    });
    

    return Environment;
});