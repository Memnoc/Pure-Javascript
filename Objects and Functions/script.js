// Function constructor

// Object literal
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// // Function Constructor - > always capital letter first
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// // Inheritance - opening the method to all of the object instances
// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }

/*Same as above. All of the objects will now have the name 'Smith'*/
// Person.prototype.lastName = 'Smith';

// // Instantiation
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(mark.lastName);
// console.log(jane.lastName);

// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1969},
//     job: { value: 'designer'}
// });

// Primitves vs Objects

/* Variabels declared as OBJECTS do not have a real copy of the object inside,
they point to a reference in memory where the object is actually stored (so, it's an INSTANCE of the object).

Variables containing PRMITIVES actually hold the data inside of the variable itself.*/

// Primitves
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
/* result is 30 for both. No new objects were created, 
both obj1 and obj2 points to the same instance in memory
Changes in obj1 will also reflect to obj2 */

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
/* Primitve has remained unchanged, while the object did change instead
Point is: you can change a primnitve as much you want, as a real copy is created, so it will
never affect the original value (27 in this case).
For object is different, as no real copy is passed, but just an instance of the original
 they will overwrite the  original every time you alter the reference. */

// Passing functiions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Callback function
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    return -1;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);

// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach,' + ' ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

// Same stuff but shorter syntax

interviewQuestion('teacher')('Mark');

//Immediately Invoked Function Expressions (IFEE)

// Classic way
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IFEE way
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// IFEE with arguments
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// Closures - are functions with preserved data
/* An inner function has always access to the variables and
parameters of its outer function, even after the outer function
has returned */

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
// Same but shorter
//retirement(66)(1990);

// My solution
function interviewQuestionsTwo(job) {
    var job1 = 'designer';
    var job2 = 'teacher';
    var job3 = 'unemployed';
    return function personName(name) {
        if (job1 === job) {
            console.log(name + ' is a ' + job1);
        } else if (job2 === job) {
            console.log(name + ' is a ' + job2);
        } else if (job3 === job) {
            console.log(name + ' is ' + job3);
        } else {
            console.log(name + ', what kind of job a ' + job + ' does?')
        }
    }
}

var firstInterview = interviewQuestionsTwo('programmer');
firstInterview('Matteo');
var firstInterview = interviewQuestionsTwo('designer');
firstInterview('Mark');
var firstInterview = interviewQuestionsTwo('teacher');
firstInterview('Jim');
var firstInterview = interviewQuestionsTwo('unemployed');
firstInterview('Baingio');

console.dir(firstInterview);

// Teacher's solution

function interviewQuestionThree(job) {
    return function personNameTwo(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher') {
            console.log(name + ', what do you teach?')
        } else {
            console.log('What job do you do?')
        }
    }
}

interviewQuestionThree('teacher')('John');
console.dir(interviewQuestion);


// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log(' Good ' + timeOfDay + ' ladies and gents! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
        } else if (style === 'friendly') {
            console.log(' Hey, sup? ' + ' I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// call()
// allow us to borrow functions and set the this value in function invocation
john.presentation.call(emily, 'friendly', 'afternoon');

// bind()
// Allows Us to Set the this Value on Methods
// Allows us to Borrow Methods
// Allows us to Curry a  Function
// (also known as partial function application, is the use of a function (that accept one or more arguments) that returns a new function with some of the arguments already set)
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// apply()
// allow us to borrow functions and set the this value in function invocation
// the apply function in particular allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually when the function executes.
john.presentation.apply(emily, ['friendly', 'afternon']);