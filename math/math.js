// const add = (num1, num2) => {
//     let result = num1 + num2;
//     return result;
// };

const add = (num1, num2) => num1 + num2;

const subt = (num1, num2) => num1 - num2;

const div = (num1, num2) => num1 / num2;

const mult = (num1, num2) => num1 * num2;

const sqRoot = (num1) => Math.sqrt(num1);

const maxNum = (...arr) => Math.max(...arr);

module.exports = {
    add,
    subt,
    div,
    mult,
    sqRoot,
    maxNum
};