/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

do{
var userInput=prompt("Please enter an amount of money: $ ");
userInput=parseFloat(userInput);
console.log(userInput);
} while (userInput === 0 || isNaN(userInput))
//protect inputs

//function to create your coinPurse object
function coinCounter (quarters, dimes, nickels, pennies) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters = quarters;
  coinPurse.dimes = dimes;
  coinPurse.nickels = nickels;
  coinPurse.pennies = pennies;

   return coinPurse;
}


//call function to actually build coinPurse object,
//with 4 coin values inside
coinPurse = coinCounter(.25, .10, .05,.01);

var runningTotal = userInput;

if (runningTotal % .25 === 0 && runningTotal >.25){
coinPurse.quarters = userInput/.25;
runningTotal-=userInput;
console.log(`You have ${coinPurse.quarters} quarter(s)`);
}else if  (runningTotal % .25 !== 0 && runningTotal> .25){
    //need to take number evenly divided in and use it here,
    //but pass into the next condition what's left over
    coinPurse.quarters = userInput/.25;
    console.log(`You have ${Math.floor(coinPurse.quarters)} quarter(s), and `);
    runningTotal -= (Math.floor(coinPurse.quarters) * .25);
    runningTotal = parseFloat(Math.fround(runningTotal).toFixed(2));
    //Math.floor returns closest integer less than or equal to a given number
    //multiply times .25 to get change equivalent to subtract from running total
    //need to round .099999999 up to .10
  }

if (runningTotal <.25 && runningTotal % .10 === 0){
    coinPurse.dimes = runningTotal/.10;
    runningTotal-=runningTotal;
    console.log(`You have ${coinPurse.dimes} dime(s)`);
    }
  // else if (runningTotal % .10 !== 0 && runningTotal>.10) {


  // }
// console.log ("runningTotal", runningTotal);








 var coins = coinCounter()

 console.log();