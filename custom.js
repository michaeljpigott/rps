// JavaScript Document

window.onload = function(){

	// Create random computer choice-------------------------------------------

	
	function computerPlay() {
		var computerChoice = Math.floor(Math.random() * 3);
		if (computerChoice === 0) {
			return 'rock';
		} else if (computerChoice === 1) {
			return 'paper';
		} else if (computerChoice === 2) {
			return 'scissors';
		}
	}

	//Player's choice----------------------------------------------------------

	var playersChoice = Array.from(document.querySelectorAll("button"));
	playersChoice[0].addEventListener("click", function(){
			game(playersChoice[0].id);
	});
	playersChoice[1].addEventListener("click", function(){
			game(playersChoice[1].id);
	});
	playersChoice[2].addEventListener("click", function(){
			game(playersChoice[2].id);
	});






	//End of game responses----------------------------------------------------

	var win = "You win\! ";
	var lose = "You lose\! ";
	var draw = "It's a draw\. ";
	var paperCoversRock = "Paper covers rock.";
	var rockBluntsScissors = "Rock blunts scissors.";
	var scissorsCutsPaper = "Scissors cut paper.";


	//Player scores-------------------------------------------------------------

	var computerScore = 0;
	var playerScore = 0;




	// playRound function-------------------------------------------------------

	function playRound(playerSelection, computerSelection) {
		
		 console.log("playRound player selection: " + playerSelection);
		
		//Scoring functions-------------------------------------------------------
		
		function winScore() {
			playerScore = playerScore + 1;
			return playerScore;
		}

		function loseScore() {
			computerScore = computerScore + 1;
			return computerScore;

		}
		
		//Player selection-------------------------------------------------------------

		var playerSelectionAllCaps = playerSelection.toUpperCase();
		var computerSelectionAllCaps = computerSelection.toUpperCase();
		//console.log("Computer selection all caps: " + computerSelectionAllCaps);


		if (computerSelectionAllCaps === "ROCK") {
			if (playerSelectionAllCaps === "ROCK") {
				return draw;
			} else if (playerSelectionAllCaps === "PAPER") {
				winScore();
				return win + paperCoversRock;

			} else if (playerSelectionAllCaps === "SCISSORS") {
				loseScore();
				return lose + rockBluntsScissors;
			}

			//Computer selection == paper
		} else if (computerSelectionAllCaps === "PAPER") {
			if (playerSelectionAllCaps === "ROCK") {
				loseScore();
				return lose + paperCoversRock;
			} else if (playerSelectionAllCaps === "PAPER") {
				return draw;
			} else {
				winScore();
				return win + scissorsCutsPaper;
			}

			//Computer selection == scissors
		} else if (computerSelectionAllCaps === "SCISSORS") {
			if (playerSelectionAllCaps === "ROCK") {
				winScore();
				return win + rockBluntsScissors;
			} else if (playerSelectionAllCaps === "PAPER") {
				loseScore();
				return lose + scissorsCutsPaper;
			} else {
				return draw;
			}

		}
	}

var roundCount = 1;

	// play Game function-----------------------------------------------------------

	function game(playerButton) {
		
		
		var computerSelection = computerPlay();
		
		if (roundCount < 6) { 
			document.getElementById("instructions").style.display = "none";
			document.getElementById("result").innerHTML = (playRound(playerButton, computerSelection));
			if (roundCount < 5) {
				document.getElementById("round-id").innerHTML = "Round " + roundCount;
				document.getElementById("computer-choice").innerHTML = "Computer's choice: " + computerSelection;
				document.getElementById("round-result-area").style.display = "block";
			} else {
				document.getElementById("round-result-area").style.display = "none";
				document.getElementById("game-results").style.display = "block";
			}
		document.getElementById("your-score-number").innerHTML = playerScore;
		document.getElementById("computer-score-number").innerHTML = computerScore;
		roundCount++;
		}

		

	}
}

