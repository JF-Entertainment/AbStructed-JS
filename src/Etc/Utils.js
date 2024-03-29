

//ForEach
if (!Array.prototype.forEach){
	
  Array.prototype.forEach = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        fun.call(thisArg, t[i], i, t);
    }
  };
}

//Clone
function clone(obj) {
    if(obj == null || typeof(obj) != 'object')
        return obj;    
    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);    
    return temp;
}

//Enums
State = {
	Active: 0,
	Paused: 1,
	Killed: 2

};

Direction = {
	Top: 0,
	Bottom: 1,
	Right: 2,
	Left: 3	
};

Matrix = {
	X: 0,
	Y: 1,
	Z: 2
};

MouseButton = {
	None: 0,
	Left: 1,
	Right: 2,
	Middle: 3
};

Body = {
	Static: 0,
	Dynamic: 1
};

