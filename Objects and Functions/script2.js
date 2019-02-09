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
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Create the John object -> INSTANTIATION
var john = new Person ('John', 1990, 'teacher');
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
 PersonTwo.prototype.calculateAge = function() {
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
