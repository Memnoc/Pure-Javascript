/**********************
 * Variables and Data Types
 **********************/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
console.log(lastName + " " + age);

var fullAge = true;
console.log(fullAge);

var job;
job = 'Programmer';
console.log(job);

/**********************
 * Variables' Mutation and Type Coercion
 **********************/

var firstName = 'Matteo';
var age = 34;

// This is type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
console.log(age);

/**********************
* Basic Operators
***********************/

var now, yeahMark, yearJohn;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math Operators
var yearJohn = now - 28;
var yeahMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now / 2);
console.log(now * 2);
console.log(now % 2);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


/**********************
* Operators' Precedence
***********************/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignment -> Associativity
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //32 - 6 // 26 -> Assignment works from right to left
console.log(x, y);

//More operators
x = x * 2; // -> long
x *= 2; // -> short
x += 10;
console.log(x);


/**********************
 * If / else statements
 **********************/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus == 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}

var isMarried = false;
if (isMarried) {
    console.log('Yeah is married');
} else {
    console.log('No he\'s not married');
}

/**********************
* Refactoring the challenge code
***********************/

var markEight = 1.65;
var johnEight = 1.85;

var markMass = 78;
var johnMass = 92;

var markBMI = markMass / (markEight * markEight);
var johnBMI = johnMass / (johnEight * johnEight);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}

/**********************
* Boolean Logic
***********************/

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}

/**********************
* Ternary Operator and Switch Statements
************************/

var firstName = 'John';
var age = 16;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks beer.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

// Switch Statement
var job = 'weight lifter';
var firstName = 'Dimitri';
var age = 34;
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an unber in Lisbon');
        break;
    case 'weight lifter':
        console.log(firstName + ' lifts weights with class');
        break;
    default:
        console.log(firstName + ' is unemployed!!');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}

/**********************
 * Truthy and Falsy
 **********************/

 // Falsy: a value is falsy when evaluated as 'false' in a if statement.
 // Falsy values are: undefined, null, zero, empty string '', not a number NaN

 // Truthy: a value is truthy when evaluated as 'true' in a if statement.
 // Truthy values are: all the non-falsy values

 var height = 0;

 if(height || height === 0) {
     console.log('The variable is defined');
 } else {
     console.log('The variable has not been defined')
 }

