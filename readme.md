AbStructed
=========

A HTML5/Canvas gameengine for larger projects. It features:

  - Conventional class-system using class.js
  - **E** ntity **C** omponent **S** ystem
  - Many things to help you coding efficient and enduring




How to use
--------------
After you cloned this repository, you can build your game on top of it in any folder of your computer. Your game's require.js-main-file should contain following.

```javascript
// src/Apps.js
requirejs.config({

	
    paths: {
        Engine: '../bower_components/AbStructed/src',
		App: '.'
    }
});


define( ["Engine/Libraries/class" , "Engine/Core/ClientGame", "App/Views/MainMenuView"] , 
	function( cl, ClientGame, MainMenuView) {
    
	
		//## Load Game ##
		var NewView = new MainMenuView();

		//Initializing Game 
		var Game = new ClientGame( document.getElementById("GameCanvas"), NewView, {
			Fullscreen: false
		});


                    
	});

```


Currently I don't plan to create a better documentation of AbStructed. Feel free to explore the source and find the features by yourself.

License
----

MIT



    