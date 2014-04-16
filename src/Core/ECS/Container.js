define( function() {

    
    var Container = Class.extend({
        
		initialize: function() {

			this.Components = new Array();
			this.State = State.Active;
		},
		
		Add: function(NewComponent) {
			
			
			//Add new component to list
			this.Components.push( NewComponent );
			
		},
		
		Get: function(Name) {
			
			//Search through array
			for (var i=0; i < this.Components.length; i++){
				//If contains name
				if ( this.Components[i].Name == Name ) return this.Components[i];
			}
			
		},
		
		Delete: function() {
			this.State = State.Killed;
		}
        
    });
    

    return Container;
});