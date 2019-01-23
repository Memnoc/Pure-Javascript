//**********************
// * Hoisting
//**********************/

// functions
calculateAge(1990); // -> function works even BEFORE it's declared

function calculateAge(year) {
    console.log(2016 - year);
}

retirement(1990); // function expression DOES NOT work -> variables are not available before declaration

var retirement = function(year){
    console.log(65 - (2016 - year));
}

// variables
console.log(age); // -> Undefined: variable is not available before declaration -> does not have a value
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // works, returns: undefined, 65, 23 in console

/**********************
* Execution Stack and Scope
**********************/

var a = 'Hello!';
theFirst();

function theFirst() {
    var b = 'Hi!';
    theSecond();
}

function theSecond() {
    var c = 'Hey!';
    theThird();
}

function theThird() {
    var d = 'John';
    console.log(c);
}

/**********************
* The 'this' keyword
**********************/

console.log(this);
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); // -> In this case, 'this' is the Window Object
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this); // -> In this case, 'this' is the john Object
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this); // -> In this case, 'this' is the Window Object - why? It's a REGULAR function, not a funciont expression
        }
        innerFunction();
    }
}
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing
// Using john object method with mike object
mike.calculateAge = john.calculateAge;
mike.calculateAge();
