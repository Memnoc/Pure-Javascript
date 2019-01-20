var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 68,
    height: 1.65,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Hamilthon',
    mass: 98,
    height: 1.85,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

function calculateHighestBMI() {
    if (johnBMI > markBMI) {
        var highest = console.log('John has the highest BMI');
    } else if (johnBMI == markBMI) {
        highest = console.log('John and Mark have the same BMI');
    } else {
        highest = console.log('Mark has the highest BMI');
    }
    return highest;
}

var johnBMI = john.mass;
var markBMI = mark.mass;
console.log('John\'s BMI is: ' + john.mass + ', ' +
    'Mark\s BMI is: ' + mark.mass + '.');
calculateHighestBMI();


