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

function change (a, b) {
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