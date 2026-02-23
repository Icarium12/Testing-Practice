const capitalize = require('./capitalize');
const reverse = require('./reverse');
const calculator = require('./calculator');
const caesarShift = require('./caesarShift');
const analyzeArray = require('./analyze');

test('converts my name to uppercase', () => {
    expect(capitalize('praisemogaji')).toBe("PRAISEMOGAJI");
});


test('reverse string', () => {
    expect(reverse('money')).toBe("yenom");
});

test('calculator methods', () => {
    expect(calculator.add(2, 1)).toBe(3);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(6, 3)).toBe(2);
});

test('caesar shift cipher', () => {
    expect(caesarShift('xyz', 3)).toBe('abc');
    expect(caesarShift('heLLo', 3)).toBe('khOOr');
    expect(caesarShift('Hello World!', 3)).toBe('Khoor Zruog!');
});

test('analyzeArray', () => {
    const analyzed = analyzeArray([1,8,3,4,2,6]);
    expect(analyzed.average).toBe(4);
    expect(analyzed.min).toBe(1);
    expect(analyzed.max).toBe(8);
    expect(analyzed.length).toBe(6);
});