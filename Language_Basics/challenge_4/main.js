var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height: 1.65,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Hamilthon',
    mass: 108,
    height: 1.5,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

function calculateHighestBMI() {
    if (john.bmi > mark.bmi) {
        var highest = console.log('John has the highest BMI');
    } else if (mark.bmi > john.bmi) {
        highest = console.log('Mark has the highest BMI');
    } else {
        highest = console.log('John and Mark have the same BMI');
    }
    return highest;
}

var johnBMI = john.calcBMI();
var markBMI = mark.calcBMI();
console.log('John\'s BMI is: ' + john.bmi + ', ' +
    'Mark\s BMI is: ' + mark.bmi + '.');
calculateHighestBMI();

// Teacher's refactor

var john = {
    fullName: 'John Smith',
    mass: 68,
    height: 1.65,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Hamilton',
    mass: 98,
    height: 1.85,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


mark.calcBMI();
console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI than ' + mark.fullName);
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI than ' + john.fullName);
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI.')
}

