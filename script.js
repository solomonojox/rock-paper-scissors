let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let resultDisplay = document.getElementById('displayResult')
resultDisplay.innerHTML = `<br><span class="win">Wins: ${score.wins}</span> <span class="lose">Losses: ${score.losses}</span> <span class="tie">Ties: ${score.ties}</span>`

function playGame(playerMove){
const randomNumber = Math.random();
let computerMove = '';
if (randomNumber > 0 && randomNumber < 1/3){
  computerMove = 'Rock'
} else if (randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'Paper'
} else if(randomNumber >= 2/3 && randomNumber < 1){
  computerMove = 'Scissors'
}

let result = '';
if(playerMove === 'Rock'){
  if(computerMove === 'Rock'){
    result = 'It is a tie'
  } else if(computerMove === 'Paper'){
    result = 'You lose'
  } else if(computerMove === 'Scissors'){
    result = 'You win'
  }
} else if(playerMove === 'Paper'){
  if(computerMove === 'Rock'){
    result = 'You win'
  } else if(computerMove === 'Paper'){
    result = 'It is a tie'
  } else if(computerMove === 'Scissors'){
    result = 'You lose'
  }
} else if(playerMove === 'Scissors'){
  if(computerMove === 'Rock'){
    result = 'You lose'
  } else if(computerMove === 'Paper'){
    result = 'You win'
  } else if(computerMove === 'Scissors'){
    result = 'It is a tie'
  }
}

if(result === 'You win'){
  score.wins += 1
} else if (result === 'You lose'){
  score.losses += 1
} else if (result === 'It is a tie'){
  score.ties += 1
}

localStorage.setItem('score', JSON.stringify(score))

let resultDisplay = document.getElementById('displayResult')
resultDisplay.innerHTML = `<div>You
<img src="img/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="img/${computerMove}-emoji.png" alt="" class="move-icon">
Computer</div>
<br><span class="win">Wins: ${score.wins}</span> <span class="lose">Losses: ${score.losses}</span> <span class="tie">Ties: ${score.ties}</span>`
}