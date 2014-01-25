<html>
	<head>
		<!-- General -->
		<title>AbStructed - Test</title>
		<link rel="stylesheet" type="text/css" href="layout.css">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    	<meta http-equiv="Content-type" content="text/html;charset=UTF-8">  
		
		<!-- Includes -->
		<script type="text/javascript" src="Libraries/prototype.js"></script>
		
		
		<!-- Compress javascript -->
		<?php include("../Make.php"); ?>
		
		<!-- AbStructed Includes -->
		<script type="text/javascript" src="../AbStructed-min.js"></script>
		
		<!-- TestGame Include -->
		<script type="text/javascript" src="src/TestGame.js"></script>
	
	</head>
	
	
	<body onload="OnLoad()">
		
		<div id="GameWindow">
			<!-- Everything in here will be replaced if the canvas was created successfully. -->
			<p> Sorry, your browser isn't compatible with HTML5. Please download the latest version of your browser! </p>	
		</div>
		
		<script type="text/javascript">
			//OnLoad
			function OnLoad() {
				var Test = new TestGame(document.getElementById("GameWindow"));
			}
		</script>
		
	</body>
	
</html>