/**********************
 * Variables and Data Types
 */

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
 */

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