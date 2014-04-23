$(document).ready(function() {
	singleColour();
	randomColours();
	trails();
	opa();
});

var drawGrid = function(boxSize) {
	var size = 960 / boxSize; 
	for (var i=1; i<=boxSize; i++){
		for (var j=1; j<=boxSize; j++) {
			$(".container").append("<div class='square'></div>");
			
		}
	}
	$(".square").css("height", size);
	$(".square").css("width", size);
};

var reset = function() {
	$(".container").empty();
	var howBig = prompt("How big?");
	drawGrid(howBig);
	$(".square").css("background-color", "white");
};

var singleColour = function() {
	$(".single").click(function() {
		reset();
		var colour = getColour();
		$(".square").mouseenter(function() {
			$(this).css("background-color", colour);
		});
	});
};
var randomColours = function() {
	$(".random").click(function() {
		reset()
		$(".square").mouseenter(function() {
			$(this).css("background-color", getColour());
		});	
	});
};

var trails = function() {
	$(".trails").click(function() {
		reset()
		var colour = getColour();
		$(".square").mouseenter(function() {
			$(this).css("background-color", colour);
			$(this).css("opacity", "1");
			$(this).fadeTo("slow", 0);			
		});
	});	
};

var opa = function() {
	$(".opa").click(function() {
		reset();
		var colour = getColour();
		$(".square").css("opacity", "0");
		$(".square").mouseenter(function() {
			var currentOpa = $(this).css("opacity");
			if(currentOpa < 1){
				$(this).css({"background-color":colour, "opacity":currentOpa + 0.1});				
			}
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
	

