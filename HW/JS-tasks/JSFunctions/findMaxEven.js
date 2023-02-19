// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(arr) {
let tempVal;
let tempVal1 = -100;
for (let i = 0; i < arr.length; i++) {
    tempVal = arr[i];
    if (tempVal % 2 == 0 && tempVal > tempVal1) {
        tempVal1 = tempVal;
        console.log(tempVal1);
    }
}
console.log(tempVal1);
return Number(tempVal1);
}
// TEST
let numbers = [2, -4, 5, 3, 9, 4, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);