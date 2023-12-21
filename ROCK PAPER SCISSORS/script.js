console.log('welcome')
var p = 0;
var c = 0;

function getComputerChoice() {
    return ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
}

function winner() {
    if (c === p) { console.log('its a overall tie') }
    console.log(c > p ? `computer won by ${c}-${p}` : `you  won by ${p}-${c}`)
}

function getPlayerChoice() {
    let validateInput = false
    while (validateInput == false) {
        const choice = prompt('rock paper scissor')
        if (choice == null) { continue; }
        const choiceInLower = choice.toLowerCase()
        if (['rock', 'paper', 'scissor'].includes(choiceInLower) == true) {
            validateInput = true;
            return choiceInLower;
        }
    }
}
// This is the game function that takes playerSelection as an argument and returns the result
function game(playerSelection, computerSelection) {
    // Switch statements in JavaScript can have a default clause, which will be executed if none of the cases match.
    switch (playerSelection) {
        case "rock":
            if (computerSelection === 'rock') {
                return "It's a tie!";
            } else if (computerSelection === 'paper') {
                c++;
                return "You lose! Paper beats rock.";
            } else {
                p++;
                return "You win! Rock beats scissors.";
            }
            break;

        case "paper":
            if (computerSelection === 'rock') {
                p++;
                return "You win! Paper beats rock.";
            } else if (computerSelection === 'paper') {
                return "It's a tie!";
            } else {
                c++;
                return "You lose! Scissors beats paper.";
            }
            break;

        case "scissor":
            if (computerSelection === 'rock') {
                c++;
                return "You lose! Rock beats scissors.";
            } else if (computerSelection === 'paper') {
                p++;
                return "You win! Scissors beats paper.";
            } else {
                return "It's a tie!";
            }
            break;


    }


}
for (let i = 0; i < 5; i++) {
    console.log(game(getPlayerChoice(), getComputerChoice()));
}
winner();