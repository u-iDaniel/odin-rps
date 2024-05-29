const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = (prompt("Choose a move (rock/paper/scissors)")).toLocaleLowerCase();
    while (!choice.includes(humanChoice)) {
        humanChoice = (prompt("Please choose a valid move (rock/paper/scissors)")).toLocaleLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer chose: ${computerChoice}`);
    
    const humanChoiceIndex = choice.indexOf(humanChoice);
    const computerChoiceIndex = choice.indexOf(computerChoice);

    if (humanChoiceIndex === (computerChoiceIndex + 1) % 3) {  // Winning (e.g. scissors beats paper)
        console.log(`You win! ${choice[humanChoiceIndex].toLocaleUpperCase()} beats ${choice[computerChoiceIndex].toLocaleUpperCase()}.`);
        humanScore++;
    } else if (computerChoiceIndex === (humanChoiceIndex + 1) % 3) {  // Losing (e.g. scissors loses to rock)
        console.log(`You lose! ${choice[computerChoiceIndex].toLocaleUpperCase()} beats ${choice[humanChoiceIndex].toLocaleUpperCase()}.`);
        computerScore++;
    } else if (computerChoiceIndex === humanChoiceIndex) {  // Drawing (e.g. scissors draws against scissors)
        console.log(`You draw! Both players chose ${choice[computerChoiceIndex].toLocaleUpperCase()}.`);
    }

    console.log("Current scores: ");
    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

let body = document.querySelector('body');
body.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            console.log("Rock!");
            break;
        case 'paper':
            console.log("Paper!");
            break;
        case 'scissors':
            console.log("Scissors!");
            break;
    }
});


