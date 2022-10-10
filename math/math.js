const add = (num1, num2) => {
    let result = num1 + num2;
    return result;
};

const subt = (num1, num2) => {
    let result = num1 - num2;
    return result;
}

const div = (num1, num2) => {
    let result = num1 / num2;
    return result;
}

const mult = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

const sqRoot = (num1) => {
    let result = Math.sqrt(num1);
    return result;
}

const maxNum = (num1, num2, num3, num4, num5) => {
    let result = Math.max(num1, num2, num3, num4, num5);
    return result;
}
module.exports = {
    add,
    subt,
    div,
    mult,
    sqRoot,
    maxNum
};