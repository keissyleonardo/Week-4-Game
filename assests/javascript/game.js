
// $(document).ready(function()){
// Random Number generator 
var randomVar = Math.floor(Math.random()*3*9);
	console.log(randomVar);

var userTotal= 0; 
var wins= 0;
var losses = 10;
var won = true; 


$("#numberWin").text(wins);
$("#numberLoss").text(losses);
$("#randomNum").text(randomVar);
$("totalScore").text(userTotal);

// generates a random number to stones 

	var Pink= Math.floor(Math.random() * 11) + 1;
  	var Blue= Math.floor(Math.random() * 11) + 1;
  	var Brown= Math.floor(Math.random() * 11) + 1;
  	var Green= Math.floor(Math.random() * 11) + 1;

// var start = function (restart)


// DRY - DONT REPEAT YOURSELF

var scoreCal = function (theNumber){
		userTotal = userTotal + theNumber;
    	$("#totalScore").text(userTotal);
    	console.log(userTotal);

// One one game 
    	if (userTotal == randomVar){ 
			wins++;
			alert("Good job! Keep at it.");
			$("#numberWin").text(wins);	
			restart();		
		}

// Loss one game 
		if (userTotal > randomVar){
			losses--;
			$("#numberLoss").text(losses);
			restart();	
// Loss errthang
		}
		if (losses == 0){
			alert("GAME OVA SUCKA!");
			location.reload();
		}
// Won errthang 
		if (wins == 10){
			alert("You did it! Now leave.");
			location.reload();
		}



};

// Refreshing the game to continue winning. 
var restart = function() {
	randomVar = Math.floor(Math.random()*3*9); 
	$("#randomNum").text(randomVar);
	userTotal=0;
	$("totalScore").text(userTotal);
	Pink= Math.floor(Math.random() * 11) + 1;
  	Blue= Math.floor(Math.random() * 11) + 1;
  	Brown= Math.floor(Math.random() * 11) + 1;
  	Green= Math.floor(Math.random() * 11) + 1;

};

// Score board var 
	$("#one").click(function(){
		scoreCal(Blue);
	});


	$("#two").click(function(){
	   	scoreCal(Brown);
	});


	$("#three").click(function(){
	   	scoreCal(Pink);
	});


	$("#four").click(function(){
	    scoreCal(Green);
	});


	