$(document).ready(function(){

// var showQuestion = $("#questionList").show();
// var hideQuestion = $("#questionList").hide();
// var hideDone = $("#done").hide();
// var showDone = $("#done").show();
var correctScoreElement = $("#correctScore");
var wrongScoreElement = $("#wrongScore");
var timing = $("#timeClock");
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var counter;
//

function initialize(){
	// hideQuestion;
	var hideResults = $("#result").hide();
	var hideQuestion = $("#questionList").hide();
	var hideDone = $("#done").hide();
}

initialize();
// initialize();
//start button to start the game
$("#startButton").on("click", function(){
 
var hideStartButton = $("#startButton").hide();
var timeLeft = 31;
alert("start");
var showDone = $("#done").show();
var showQuestion = $("#questionList").show();
var intervalFunc = setInterval(timer, 1000);
var counter;
var timeCountdown = false;
timer();

//make a click "done" to see result of the game

// initialize 
// I have 30 seconds to play the game
//show the questions
// submit button at the bottom
//in game
// $("#startButton").on("click", start);
// function start(){
// 	counter = setInterval(gameTime,1000);
// 	timer();
// 	showQuestion;
// }
	
function timer() {
	timeLeft--;
	timing.html("Time Remains " + timeLeft);
	if (timeLeft <= 0) {
		clearInterval(intervalFunc);
		var showResults = $("#result").show();
	var hideQuestion = $("#questionList").hide();
	var hideDone = $("#done").hide();
	scoreCount();
		//TODO: show scores
	}
}




// function hideMe(e) {
//     	$(e).hide();
//     }
//     function showMe(e) {
//     	$(e).show();
//     }
// end game


	//show the correct answer
	//show the incorrect answer number
	//show unanswered 

	//a restart game button to restartthe game
// });
// var counter;
// var timeCountdown = false;


function stop () {
	clearInterval(intervalFunc);
	timeCountdown =false;
}

$("#done").on("click", function(){

var showResults = $("#result").show();
var hideQuestion = $("#questionList").hide();
var hideDone = $("#done").hide();
	stop(); //dont't know how to make it work. BUt should be click the done button and time stop counting down
	timeCountdown = false;
	scoreCount();
});

function scoreCount() {
	var Q1 = $('input:radio[name="q1"]:checked').val();
	var Q2 = $('input:radio[name="q2"]:checked').val();
	var Q3 = $('input:radio[name="q2"]:checked').val();
	if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 === "3"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "3"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "3"){
			correctCount++;
		}
		else{
			wrongCount++;
		}
			// i would definintly use for loop next time to generate buttons and questions answer..
		$('#correctScore').html(correctCount);
		$('#wrongScore').html(wrongCount);
		$('#unanswered').html(unansweredCount);

}




});

});