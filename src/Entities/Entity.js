define( ["Engine/Core/ECS/Container"] , function( Container ) {

	
    var Entity = Container.extend({
        
		Name: "unnamed",
		
		initialize: function() {
			
			this._super();
		}
        
    });
    

    return Entity;
});