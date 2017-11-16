
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

    	if (userTotal == randomVar){ 
			wins++;
			alert("this works.");
			$("#numberWin").text(wins);			
		}


		if (userTotal > randomVar){
			losses--;
			$("#numberLoss").text(losses);

		}
		if (losses == 0){
			alert("GAME OVA SUCKA!");
			location.reload();
		}
		if (wins == 10){
			alert("Good job!");
			location.reload();
		}



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


	