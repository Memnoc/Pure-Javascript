var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScores = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) +1;
console.log(dice);

// Setter
document.querySelector('#current-' + activePlayer).textContent = dice;

// Getter
var x = document.querySelector('#score-0').textContent;
console.log(x);

// Hide the dice
document.querySelector('.dice').style.display = 'none';