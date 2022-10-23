//adding 2 numbers together
const add = (num1, num2) => num1 + num2;

//subtracting 1 number from another
const subt = (num1, num2) => num1 - num2;

//dividing one number from another  
const div = (num1, num2) => num1 / num2;

//multiplying one number by another
const mult = (num1, num2) => num1 * num2;

//taking square root of a number
const sqRoot = (num1) => Math.sqrt(num1);

//finding the largest or max number in any set of numbers
const maxNum = (...arr) => Math.max(...arr);

module.exports = {
    add,
    subt,
    div,
    mult,
    sqRoot,
    maxNum
};