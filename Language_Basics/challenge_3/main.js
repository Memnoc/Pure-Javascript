// bills - 124 48 268
// 20% of the bill if < 50
// 15% of the bill if >=50 && <200
// 10% of the bill if >200
// 2 arrays:
// 1 - containing 3 tips (one for each bill)
// 2 - containing 3 final paid amounts (bill + tip)

// 20% = 20/100 = 0.2

var bills = [248, 124, 48];

var howMuch = function calculateTips(bill) {
    if(bill <50) {
        var tipOne = (bill*20)/100;
        return tipOne;
    } else if(bill >=50 && bill <=200) {
        var tipTwo = (bill*15)/100;
        return tipTwo;
    } else if (bill >200) {
        var tipThree = (bill*10)/100;
        return tipThree;
    }
}

// refactor -> instructor solution

// var howMuch = function calculateTips(bill){
//     var percentage;
//     if(bill <50) {
//         percentage = .2;
//     } else if(bill >= 50 && bill <200) {
//         percentage = .15
//     } else {
//         percentage = .20;
//     }
//     return percentage * bill;
// }

var tipsArray = [howMuch(bills[0]),howMuch(bills[1]), howMuch(bills[2])];
console.log('The tips for all the bills are: ' + tipsArray);

var sumTotal = [tipsArray[0] + bills[0],tipsArray[1] + bills[1], tipsArray[2] + bills[2]];
console.log('The total amount of bills plus tips is: ' + sumTotal);

console.log(tipsArray, sumTotal);
