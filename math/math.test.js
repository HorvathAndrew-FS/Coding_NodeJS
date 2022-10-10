const {
    add,
    subt,
    div,
    mult,
    sqRoot,
    maxNum
} = require('./math')

describe('Testing number inputs', () => {
    test('should add two numbers together', () => {
        expect(add(2, 4)).toEqual(6);
    });

    test('should subtract one number from another', () => {
        expect(subt(8, 1)).toEqual(7);
    });

    test('should divide one number by another', () => {
        expect(div(10, 5)).toEqual(2);
    });

    test('should multiply two numbers together', () => {
        expect(mult(16, 4)).toEqual(64);
    });

    test('should take to square root of a number', () => {
        expect(sqRoot(49)).toEqual(7);
    });

    test('should give the largest or max number from a set of numbers', () => {
        expect(maxNum(2, 7, -1645, 201, 3.141)).toEqual(201);
    });
});

