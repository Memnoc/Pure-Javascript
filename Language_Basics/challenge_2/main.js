var firstPlayer = 'John';
var secondPlayer = 'Mike';
var thirdPlayer = 'Mary';

var firstTeam = 'John\'s Team';
var secondTeam = 'Mike\'s Team';
var thirdTeam = 'Mary\'s Team';

var firstTeamScoreOne = 3;
var firstTeamScoreTwo = 2;
var firstTeamScoreThree = 2;

var secondTeamScoreOne = 3;
var secondTeamScoreTwo = 2;
var secondTeamScoreThree = 2;

var thirdTeamScoreOne = 1;
var thirdTeamScoreTwo = 2;
var thirdTeamScoreThree = 2;

// Average score for each team
var firstTeamAverage = (firstTeamScoreOne + firstTeamScoreTwo + firstTeamScoreThree) / 3;
var secondTeamAverage = (secondTeamScoreOne + secondTeamScoreTwo + secondTeamScoreThree) / 3;
var thirdTeamAverage = (thirdTeamScoreOne + thirdTeamScoreTwo + thirdTeamScoreThree) / 3;

console.log('The average score for ' + firstPlayer + ' is: ' + firstTeamAverage);
console.log('The average score for ' + secondPlayer + ' is: ' + secondTeamAverage);
console.log('The average score for ' + thirdPlayer + ' is: ' + thirdTeamAverage);


if (firstTeamAverage > secondTeamAverage && firstTeamAverage > thirdTeamAverage) {
    console.log(firstPlayer + ' wins!');
} else if (secondTeamAverage > firstTeamAverage && secondTeamAverage > thirdTeamAverage) {
    console.log(secondPlayer + ' wins!');
} else if (thirdTeamAverage > secondTeamAverage && thirdTeamAverage > firstTeamAverage) {
    console.log(thirdPlayer + ' wins!');
} else if ((firstTeamAverage == secondTeamAverage && firstTeamAverage == thirdTeamAverage) || ((secondTeamAverage > firstTeamAverage && secondTeamAverage > thirdTeamAverage)) || ((thirdTeamAverage > secondTeamAverage == thirdTeamAverage > firstTeamAverage))) {
    console.log('draw!')
}


