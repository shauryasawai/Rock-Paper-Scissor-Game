document.addEventListener('DOMContentLoaded', () => {
  const choices = document.querySelectorAll('.choice');
  const resultText = document.getElementById('result-text');
  const scoreText = document.getElementById('score-text');
  const choicesArray = ['rock', 'paper', 'scissors'];
  let playerScore = 0;
  let computerScore = 0;

  choices.forEach(choice => choice.addEventListener('click', playGame));

  function playGame(event) {
      const playerChoice = event.target.id;
      const computerChoice = choicesArray[Math.floor(Math.random() * 3)];
      const result = determineWinner(playerChoice, computerChoice);

      updateScores(result);
      displayResult(result, playerChoice, computerChoice);
  }

  function determineWinner(player, computer) {
      if (player === computer) {
          return 'draw';
      }
      if (
          (player === 'rock' && computer === 'scissors') ||
          (player === 'paper' && computer === 'rock') ||
          (player === 'scissors' && computer === 'paper')
      ) {
          return 'player';
      }
      return 'computer';
  }

  function updateScores(result) {
      if (result === 'player') {
          playerScore++;
      } else if (result === 'computer') {
          computerScore++;
      }
  }

  function displayResult(result, playerChoice, computerChoice) {
      if (result === 'draw') {
          resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
      } else if (result === 'player') {
          resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      } else {
          resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      }
      scoreText.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
  }
});
