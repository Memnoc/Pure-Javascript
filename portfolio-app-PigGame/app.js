var scores, roundScores, activePlayer, dice;

scores = [0, 0];
roundScores = 0;
activePlayer = 1;

// Hide the dice
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// Anonymous function -> doesn't have a name, cannot be re-used outside of this context
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score only if the rolled number was not a 1
    if (dice !== 1) {
        // Add score
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        // Next player
        // Ternary operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }
});
