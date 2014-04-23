$(document).ready(function() {
	var grid = 16;
	drawGrid(grid);
	reset();
	singleColour();
	randomColours();
	trails();
});

var drawGrid = function(boxSize) {
	var size = 960 / boxSize; 
	for (var i=1; i<=boxSize; i++){
		for (var j=1; j<=boxSize; j++) {
			$(".container").append("<div class='square'></div>");
			
		}
	}
	$(".square").css("height", size - 2);
	$(".square").css("width", size - 2);
};

var reset = function() {
	$(".reset").click(function() {
		$(".container").empty();
		var howBig = prompt("How big?");
		drawGrid(howBig);
	});
};

var singleColour = function() {
	$(".single").click(function() {
		$(".square").css("background-color", "white");
		$(".square").css("opacity", "1");
		var colour = getColour();
		$(".square").mouseenter(function() {
			$(this).css("background-color", colour);
		});
	});
};
var randomColours = function() {
	$(".random").click(function() {
		$(".square").css("background-color", "white");
		$(".square").css("opacity", "1");
		$(".square").mouseenter(function() {
			$(this).css("background-color", getColour());
		});	
	});
};

var trails = function() {
	$(".trails").click(function() {
		$(".square").css("background-color", "white");
		var colour = getColour();
		var opa = 1
		$(".square").mouseenter(function() {
			$(this).css("background-color", colour);
			$(this).css("opacity", "1");
			$(this).fadeTo("slow", 0);
		});
	});	
};

var getColour = function() {
	var str = "0123456789ABCDEF"
	var colour = "#"
	for (var i=0; i<6; i++) {
		var n = Math.floor(Math.random() * 16)
		colour += str.substring(n,n+1);
	}	
	return colour;
};
	

