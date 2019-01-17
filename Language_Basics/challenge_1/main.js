var markEight = 1.65;
var johnEight = 1.85;

var markMass = 78;
var johnMass = 92;

var markBMI = markMass / (markEight * markEight);
var johnBMI = johnMass / (johnEight * johnEight);

console.log(markBMI, johnBMI);

var isHigher = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s ? ' + isHigher);