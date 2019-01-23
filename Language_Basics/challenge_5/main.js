var johnsFamily = {
    members: ['John', 'Jane', 'Mika', 'Laura'],
    bills: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    calcTips: function (bill) {
        var percentage;
        for (i = 0; i < this.bills.length; i++) {
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .20;
            }
        }
        this.tips.push(percentage * bill);
        return this.tips;
    },
    calcTotal: function () {
        for (i = 0; i < this.tips.length; i++) {
            this.total.push(this.tips[i] + this.bills[i]);
         }
         return this.total;
    }
}


johnsFamily.calcTips(124);
johnsFamily.calcTips(48);
johnsFamily.calcTips(180);
johnsFamily.calcTips(42);
console.log('John\s family tips are: ' + johnsFamily.tips);
console.log('John\s family total tips are: ' + johnsFamily.calcTotal());
console.log('John\s family tips average is: ' + calculateAverage(johnsFamily.tips));


// Mark's family

var marksFamily = {
    members: ['Mark', 'Taylor', 'Michelle', 'Roy'],
    bills: [77, 375, 110, 45],
    tips: [],
    total: [],
    average:[],
    calcTips: function (bill) {
        var percentage;
        for (i = 0; i < this.bills.length; i++) {
            if (bill < 100) {
                percentage = .20;
            } else if (bill >= 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }
        }
        this.tips.push(percentage * bill);
        return this.tips;
    },
    calcTotal: function () {
        for (i = 0; i < this.tips.length; i++) {
            this.total.push(this.tips[i] + this.bills[i]);
         }
         return this.total;
    }
}

function calculateAverage (arr) {
    var s = 0;
    var average;
    for (i = 0; i < arr.length; i++) {
        s = s += arr[i];
     }
     average = s / arr.length;
     return average;
    }


marksFamily.calcTips(124);
marksFamily.calcTips(48);
marksFamily.calcTips(180);
marksFamily.calcTips(42);
console.log('Mark\s family tips are: ' + marksFamily.tips);
console.log('Mark\s family total tips are: ' + marksFamily.calcTotal());
console.log('Mark\s family tips average is: ' + calculateAverage(marksFamily.tips));


// Teacher's solution
console.log('TEACHER\'S SOLUTION');

var johnS = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determing perecentage based on tipping rules
            var percentages;
            var bill = this.bills[i];

            if(bill < 50) {
                percentages = .2;
            } else if (bill >= 50 && bill < 200) {
                percentages = .15;
            } else {
                percentages = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentages;
            this.finalValues[i] = bill + bill * percentages;
        }
    }
}

var markS = {
    fullName: 'Mark Hamilton',
    bills: [77, 475, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determing perecentage based on tipping rules
            var percentages;
            var bill = this.bills[i];

            if(bill < 100) {
                percentages = .2;
            } else if (bill >= 100 && bill < 300) {
                percentages = .15;
            } else {
                percentages = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentages;
            this.finalValues[i] = bill + bill * percentages;
        }
    }
}

function calcAverages(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
johnS.calcTip();
markS.calcTip();


johnS.average = calcAverages(johnS.tips);
markS.average = calcAverages(markS.tips);
console.log(johnS, markS);

if(johnS.average > markS.average) {
    console.log(johnS.fullName + '\'s family pays higher tips, with an average of $' + johnS.average);
} else if (markS.average > johnS.average) {
    console.log(markS.fullName + '\'s family pays higher tips, with an average of $' + johnS.average);
  
}