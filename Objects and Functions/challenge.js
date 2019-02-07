// Security creation
(function() {
// Function constructor
function Question(question, answers, correct) {
    this.question  =question;
    this.answers = answers;
    this.correct = correct;
}

// Display the questions
Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correct) {
        console.log('Correct answer');
    } else {
        console.log('Wrong answer, try again!')
    }
}

// Questions
var q1 = new Question('Is Javascript the coolest lanuage in the world?', ['Yes', 'No'], 0);
var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Mikael', 'Jonas'], 1);
var q3 = new Question('What does best describe coding', ['Boring', 'Tedious', 'Fun'], 2);

// Questions array
var questions = [q1, q2, q3];

// Random variable
var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);
})();
