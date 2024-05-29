const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer chose: ${computerChoice}`);
    
    const humanChoiceIndex = choice.indexOf(humanChoice);
    const computerChoiceIndex = choice.indexOf(computerChoice);

    if (humanChoiceIndex === (computerChoiceIndex + 1) % 3) {  // Winning (e.g. scissors beats paper)
        console.log(`You win! ${choice[humanChoiceIndex].toLocaleUpperCase()} beats ${choice[computerChoiceIndex].toLocaleUpperCase()}.`);
    } else if (computerChoiceIndex === (humanChoiceIndex + 1) % 3) {  // Losing (e.g. scissors loses to rock)
        console.log(`You lose! ${choice[computerChoiceIndex].toLocaleUpperCase()} beats ${choice[humanChoiceIndex].toLocaleUpperCase()}.`);
    } else if (computerChoiceIndex === humanChoiceIndex) {  // Drawing (e.g. scissors draws against scissors)
        console.log(`You draw! Both players chose ${choice[computerChoiceIndex].toLocaleUpperCase()}.`);
    }
}

let body = document.querySelector('body');

body.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
});
