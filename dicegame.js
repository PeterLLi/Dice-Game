function runGame(){
	turn();	
}
function winner(firstPlayer, SecondPlayer){
	if(firstPlayer > SecondPlayer){
		alert("First player wins!");
	}else{
		alert("Second player wins!");
	}
}
function turn(){
	let playerOneScore = 0;
	let playerTwoScore = 0;

	do{
		let dicePlayerOne = [];
		diceNumber(dicePlayerOne);
		alert("Player 1 rolled a (4, 6, 8, 10, 12, 14 sides) " + dicePlayerOne.join(", ") + ". ");
		dicePlayerOne.sort(sortDice);
		playerOneScore = compareValues(dicePlayerOne, playerOneScore);

		let dicePlayerTwo = [];
		diceNumber(dicePlayerTwo);
		alert("Player 2 rolled a (4, 6, 8, 10, 12, 14 sides) " + dicePlayerTwo.join(", ") + ". ");
		dicePlayerTwo.sort(sortDice);
		playerTwoScore = compareValues(dicePlayerTwo, playerTwoScore);

		console.log("First Player", playerOneScore);
		console.log("Second Player", playerTwoScore);
	}while(playerTwoScore < 30 && playerOneScore < 30);

	console.log("Player one score: ", playerOneScore);
	console.log("Player two score: ", playerTwoScore);
	winner(playerOneScore, playerTwoScore);
}

function rollDie(sides, dice){
	let randomNumber;
	randomNumber = Math.floor((Math.random() * sides ) + 1);
	console.log(randomNumber);
	dice.push(randomNumber);
	return dice;
}
function diceNumber(dice){
	for(let i=4; i<=14; i += 2){
		dice = rollDie(i, dice);
		console.log("dice", dice);
	}
}
function sortDice(a, b){
	return a-b;
}
function compareValues(dice, playerScore){
	for(let i=0; i < 6; i++){
		if((dice[i] === dice[i+1]) && (dice[i] !== dice[i+2])){
			if(dice[i] === 1){
				alert("Player has earned 1 point");
				playerScore = playerScore + 1;
			}else if(dice[i] === 2){
				alert("Player has earned 2 point");
				playerScore = playerScore + 2;
			}else if(dice[i] === 3){
				alert("Player has earned 3 point");
				playerScore = playerScore + 3;
			}else if(dice[i] === 4){
				alert("Player has earned 4 point");
				playerScore = playerScore + 4;
			}else if(dice[i] === 5){
				alert("Player has earned 5 point");
				playerScore = playerScore + 5;
			}else if(dice[i] === 6){
				alert("Player has earned 6 point");
				playerScore = playerScore + 6;
			}else if(dice[i] === 7){
				alert("Player has earned 7 point");
				playerScore = playerScore + 7;
			}else if(dice[i] === 8){
				alert("Player has earned 8 point");
				playerScore = playerScore + 8;
			}else if(dice[i] === 9){
				alert("Player has earned 9 point");
				playerScore = playerScore + 9;
			}else if(dice[i] === 10){
				alert("Player has earned 10 point");
				playerScore = playerScore + 10;
			}else if(dice[i] === 11){
				alert("Player has earned 11 point");
				playerScore = playerScore + 11;
			}else if(dice[i] === 12){
				alert("Player has earned 12 point");
				playerScore = playerScore + 12;
			}
			
		}else if((dice[i] === dice[i+1]) && (dice[i] === dice[i+2])){
			alert("Congratulations, you have 3 in a row! Player has earned and extra 5 points");
			playerScore = playerScore + 5;
		}
	}
	return playerScore;
}
runGame();
