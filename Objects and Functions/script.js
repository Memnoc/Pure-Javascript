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

// // Same as above. All of the objects will now have the name 'Smith'
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

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});