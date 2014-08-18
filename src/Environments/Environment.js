define( function() {

    
    var Environment = Class.extend({
        
		initialize: function() {
			this.Systems = [];
		},
		
		addSystem: function(NewSystem, Priority) {
			//Hook to self
			NewSystem.Load();
            
			//Add to array
			this.Systems.push([NewSystem, Priority]);
			
            //Sort Systems by priority
            this.Systems.sort(function(a, b) {
                return a[1] - b[1]; 
            });
            
			
		},
        
        Tick: function(elapsed) {
            
            //Call Tick of systems
            this.Systems.forEach( function(System) {
                System[0].Tick(elapsed); 
            });
            
        }
        
    });
    

    return Environment;
});