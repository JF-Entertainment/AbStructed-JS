define( function() {

    
    var Entity = Class.extend({
        
		Name: "unnamed",
		
		initialize: function() {

			this.Components = new Array();
			this.State = State.Active;
		},
		
		addComponent: function(NewComponent) {
			
			
			//Add new component to list
			this.Components[NewComponent.Name] = NewComponent;
			
		},
		
		getComponent: function(Name) {
			
			//Search through array
			return this.Components[Name];
			
		},
		
		hasComponent: function(ComponentQuery) {
			
		
			return !( this.Components[ComponentQuery] === undefined );
		},
		
		Delete: function() {
			this.State = State.Killed;
		}
        
    });
    

    return Entity;
});