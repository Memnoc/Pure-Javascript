/* INHERITANCE AND THE PROTOTYPE CHAIN
**************** THEORY ****************
- PRIMITVES (Numbers, Strings, Booleans, Undefined, Null) VS 
    OBJECTS (Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, and Booleans)
- What in Java is called CLASS, in Javascript is called CONSTRUCTOR OR PROTOTYPE
- The CONSTRUCTOR in Javascript is a blueprint for INSTANCES
- INHERITANCE in Javascript works through PROTOTYPES and PROTOTYPE CHAIN
- EVERY OBJECT in Javascript has a Prototype property that enables INHERITANCE
- EACH AND EVERY OBJECT CREATED IN JAVASCRIPT IS AN INSTANCE OF THE OBJECT CONSTRUCTOR
    OBJECT -> PROTOTYPE -> (hasOwnProperty()
                            isPrototypeOf()
                            constructor()
                            toString()
                            valueOf())
**************** SUMMARY ****************

- Every Javascript object has a PROTOTYPE PROPERTY, which makes inheritance possible in Javascript;
- The prototype property of an object is where we put methods and properties that
    we want OTHER OBJECTS TO INHERIT.
- The Constructor's property is NOT the prototype of the Constructor itself,
    it's the prototype of ALL instances that are created through it;
- When a certain method (or property) is called, the search starts in the object itself,
    and if it cannot be found, the search moves in to the object's prototype.
    This continues until the methos is found: PROTOTYPE CHAIN.
*/

/**************** CODE ***************/
/**************** Function Constructor ****************/

// Object literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Create the John object -> INSTANTIATION
var john = new Person('John', 1990, 'teacher');
console.log(john);

/**************** How it works ****************/
/**
 * NEW creates an EMPTY OBJECT.
 * The CONSTRUCTOR FUNCTION (Person, in this case) is called with the arguments specified.
 * Calling a function creates a NEW EXECUTION CONTEXT that also has a THIS variable.
 * THIS usually points to the global object, but in this case, it POINTS to the EMPTY OBJECT.
 * As a result, the parameters set in the Constructors can now be defined in the newly created object.
 */

/**
 * Function Constructors can be converted to class decalartion -> Much better IMHO
 */
class Warrior {
    constructor(name, power, race) {
        this.name = name;
        this.power = power;
        this.race = race;
    }
}

var goku = new Warrior('Goku', 'Kamehameha', 'Sayajin Goddo');
console.log(goku);

/**************** Bringing INHERITANCE in ****************/

class PersonTwo {
    constructor(nameTwo, ageTwo, jobTwo) {
        this.nameTwo = nameTwo;
        this.ageTwo = ageTwo;
        this.jobTwo = jobTwo;
        // Once addede to the prototype, remove it from the constructor
        // this.calculateAge = function() {
        //     console.log(2019 - this.ageTwo);
        // }
    }
}

/**
 * Each object can access the calculateAge() function from the constructor
 * This is not DRY
 * You can remedy adding the method to the Constructor's Prototype property
 * PROTOTYPES ALLOW YOU TO EASILY DEFINE METHODS TO ALL INSTANCES OF A PARTICULAR OBJECT.
 * ONCE THE METHOD IS APPLIED TO THE PROTOTYPE, IT'S ONLY STORED IN MEMORY ONCE,
 * BUT EVERY INSTANCE OF THE OBJECT HAS ACCESS TO IT.
 */

/**
 * Added the method to the Constructor's Prototype property
 * Even though THE METHOD IS NOT IN THE CONSTRUCTOR ANYMORE, 
 * WE CAN STILL USE IT.
 */
PersonTwo.prototype.calculateAge = function () {
    console.log(2019 - this.ageTwo);
}

/**
 * Same can be done with properties. You can store them in the proto
 */
PersonTwo.prototype.thirdJob = 'Support Agent';

var mike = new PersonTwo('Mark', 1984, 'Coder');
var jane = new PersonTwo('Jane', 1974, 'Designer');
var john = new PersonTwo('John', 1964, 'Plumber');
mike.calculateAge();
jane.calculateAge();
john.calculateAge();

console.log(mike.thirdJob);

/**
 ********* Useful Properties to run in console to analyze objects *********
 john.hasOwnProperty('jobTwo'); -> true (property owned by the object john).
 john.hasOwnProperty('thirdJob'); -> false (not the property of john, but of the proto).
 john instanceof Person -> false
 john instanceof PersonTwo -> true 
 */

/**************** OBJECTS.CREATE ****************/
/**************** Objects inheriting from a prototype ****************/
/**
 * FUNCTION CONSTRUCTOR VS OBJECT.CREATE
 * OBJECT.CREATE builds an object that inherits directly from the object passed
 * as a first argument.
 * FUNCTION CONSTRUCTOR, the newly created object inherits from the 
 * constructor's prototype property.
 * BENEFIT OVER FUNCTION CONSTRUCTOR: Object.create allows to implement a complex
 * inheritance structure, as it lets you specify which object should be the proto.
 *    
*/
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1959 },
    job: { value: 'programmer' }
});


/**************** PRIMITIVES VS OBJECTS ****************/
/**
 * PRIMITVES Numbers, Strings, Booleans, Undefined, Null
 * OBJECTS Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, and Booleans
 * 
 * 
 * 
 * **************** DIFFERENCE ****************
 * - VARIABLES CONTAINING PRIMITVES, ACTUALLY HOLD THE DATA INSIDE THE VARIABLE ITSELF.
 * - VARIABLES CONTAINING OBJECTS, HOLD A REFERENCE TO THE PLACE IN MEMORY WHERE THE OBJECT SITS, NOT THE ACTUAL OBJECT ITSELF.
 */
//PRIMITIVES
var a = 23;
var b = a;
a = 46;
console.log(a, b); //-> 46, 23 -> 
// Each variable actually hold their own copy of the data

// OBJECTS
var obj1 = {
    name: 'Chris',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age); //-> 30, 30 -> 
// Variables changed because they do not actually contain the data

// FUNCTIONS
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Dublin'
};

function change(a, b) {
    a = 30;
    b.city = 'Madison';
}

change(age, obj);
console.log(age, obj.city); // -> 27, "Madison"; ->
// 27 did not change -> it's a primitve, actually contains the variable.
// obj.city did change -> it's an object, only contains a reference pointing to the object.

/**************** FIRST CLASS FUNCTIONS ****************/
/**************** Passing functions as arguments *******/
/**
 * A function is an instance of the Object type.
 * A function behaves like any other object.
 * A function can be store in a variable a.k.a FUNCTION EXPRESSION.
 * A function can be passed as argument to another function a.k.a FIRST CLASS FUNCTIONS.
 * We can return a function from a function.
 */

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Functions to use as fn functions -> a.k.a CALLBACK FUNCTIONS
// 1
function calculateAge(el) {
    return 2019 - el;
}
// 2
function isFullAge(el) {
    return el >= 18;
}

// 3
function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ageResults = arrayCalc(years, calculateAge);
var fullAgesResults = arrayCalc(ageResults, isFullAge);
var avgHeartRate = arrayCalc(ageResults, maxHeartRate);
console.log(ageResults);
console.log(fullAgesResults);
console.log(avgHeartRate);

/**************** FIRST CLASS FUNCTIONS ****************/
/**************** Functions returning functions ********/

/**
 * Functions like these are possible in Javascript because, in reality, every function is an object.
 * Therefore, we are yes returning an anonymous function, but it's also true we are retirning an object!
 */
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');

// Can also be written as
var teacherQuestion = interviewQuestion('teacher')('Mark');

/**************** IIFE ****************/
/*** Immediately Invoked Functions Expressions *****/
/**
 * IIFE are a way to trick the interpreter into thinking
 * an anonymous function is an expression.
 * Anonymous functions cannot stand by their own, they are flagged by the 
 * intepreter as errors.
 * IIFE wraps the anonymous function into an expression,
 * so that it can be called immediately.
 * 
 * What's inside a parenthesis in Javascript is an expression.
 * What's outside of parenthesis in Javascript, is a statement.
 */

// Standard
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

/**
 * IIFE are also useful for ENCAPSULATION PURPOSES.
 * Infact, the cvariable score is now scoped in the expression,
 * and cannot be accessed from the outside.
 */
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

/**
 * IIFE can also be used with arguments
 */
(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5); //-> pass the argument here


/**************** CLOSURES ****************/

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

// Can also be written as
// retirement(66)(1990);

var retirementEU = retirement(65);
retirementEU(1990);

var retirementIceland = retirement(67);
retirementEU(1990);


/**
 * Re-writing the interviewQuestion() function using closures
 * The closure is demonstrated by the fact that you can use 'job'
 * even after the interviewQuestionClosure has returned.
 */

function interviewQuestionClosure(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

interviewQuestionClosure('designer')('Mat');
