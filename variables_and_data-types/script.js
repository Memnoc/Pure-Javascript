/**********************
 * Variables and Data Types
 ************************/

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
 ************************/

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


