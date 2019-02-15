// Build the questions

(function () {
class Question {
    constructor(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
}

// Create a couple of questions, using the contructor
var q1 = new Question('Is the sky really blue?', ['yes', 'no', 'don\'t know'], 1);
var q2 = new Question('Is the Earth flat?', ['yes', 'no', 'don\'t know'], 0);
var q3 = new Question('Is Flutter cool?', ['yes', 'no', 'don\'t know'], 2);

// Store them in an array
var questions = [q1, q2, q3];
// Create a random variable
var random = Math.floor(Math.random() * questions.length);

// Create a method to display the questions
Question.prototype.displayQuestions = function() {
    console.log(this.question);
    for(var i = 0; i < this.answer.length; i++) {
        console.log(i + ' :' + this.answer[i]);
    }
}

// Check the answer
Question.prototype.checkAnswer = function (answer) {
    if(userInput === this.correct) {
        console.log('Your answer is correct!')
    } else {
        console.log('Your answer is wrong, try again!')
    }
}

// Ask the questions
questions[random].displayQuestions();
// Prompt the dialog
var userInput = parseInt(prompt('Please enter your answer: '));
// Validate the answer
questions[random].checkAnswer(userInput);
})();