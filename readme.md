AbStrctued
=========

A HTML5/Canvas gameengine for larger projects. It features:

  - Conventional class-system using class.js
  - **E**ntity**C**omponent**S**ystem
  - Many things to help you coding efficient and enduring




How to use
--------------
After you cloned this repository, you can build your game on top of it in any folder of your computer. Your game's require.js-main-file should contain following.

```javascript
requirejs.config({
    paths: {
        //This path points to the "src"-folder of AbStructed.
        //I suggest to enter a relative path (releative to your main-file)
        Engine: 'Path/To/AbStructed/src'
    }
});


//In this example we load the class-library of AbStructed, the ClientGame-Class
//and our own "GameView"-Class, which is the first screen drawn to the canvas.

define( ["Engine/Libaries/class" , "Engine/Core/ClientGame", "GameView"] , function( cl, ClientGame, GameView) {
    
    
    //Initializing Game by applying our Canvas' Element.
    var Game = new ClientGame( document.getElementById("GameCanvas") );
    
	//Loading our own "GameView" and adding it to our screen
	var NewView = new GameView();
    Game.addView( NewView );
                    
});
```


Currently I don't plan to create a better documentation of AbStructed. Feel free to explore the source and find the features by yourself.

License
----

MIT



    