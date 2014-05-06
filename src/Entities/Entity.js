define( function() {

    
    var Entity = Class.extend({
        
		Name: "unnamed",
		
		initialize: function() {

			this.Components = new Array();
			this.State = State.Active;
		},
		
		Add: function(NewComponent) {
			
			
			//Add new component to list
			this.Components[NewComponent.Name] = NewComponent;
			
		},
		
		Get: function(Name) {
			
			//Search through array
			return this.Components[Name];
			
		},
		
		Has: function(ComponentQuery) {
			
			
			//Check for query
			var Result = true;
			ComponentQuery.forEach(function(ComponentName){
				
				if (!this.Components[ComponentName]) Result = false;
				
			}.bind(this));
			
			return Result;
		},
		
		Delete: function() {
			this.State = State.Killed;
		}
        
    });
    

    return Entity;
});