define( function(){


    var View = Class.extend({

        initialize: function(X, Y, Width, Height) {
            this.Views = [];
			this.State = State.Active;

		    this.Parent = null;
			this.Game = null;

			this.X = X || 0;
			this.Y = Y || 0;
			this.AbsoluteX = 0;
			this.AbsoluteY = 0;
			this.Width = Width || 0;
			this.Height = Height || 0;

        },

		Load: function() {

		},

        Tick: function(elapsed) {

			//Calculate absolute position
			this.AbsoluteX = this.Parent.X + this.X;
			this.AbsoluteY = this.Parent.Y + this.Y;

			//Goes through all Views and removes those, who have been flagged Killed.
            for (var i=0; i < this.Views.length; i++){

                if (this.Views[i].State == State.Killed){
                    //Delete Scene and add index
                    this.Views.splice(i, 1);
                    i++;
                    if (i >= this.Views.length) break;
                }


                //Call "Tick"-Method
                if (this.Views[i].State != State.Pause) this.Views[i].Tick(elapsed);

            }

        },

        Draw: function(e) {

            //Call Draw-Function
			this.Views.forEach(function(View){

				//Translation for positioning views
				e.translate( View.X, View.Y);
				View.Draw(e);
				e.translate( -View.X, -View.Y);

			});

        },

        addView: function(NewView) {
			//Link parent-property to self
			NewView.Parent = this;
			NewView.Game = this.Game;
			NewView.Load(this.Game.ResoureManager);

            //Add View to array
            this.Views.push(NewView);
            
            //Update relations
            this.onResize();

        },
        
        setView: function(NewView) {
            this.Views = [];
            this.addView(NewView);           
        },
        
		Delete: function() {
			this.State = State.Killed;
		},

		onResize: function(ratio) {
			
			this.Width = this.Parent.Width;
			this.Height = this.Parent.Height;

			//Call Event on subviews
			this.Views.forEach(function(View){
				View.onResize(ratio);
			});

		}

    });


    return View;
});
