const capitalize = require('./capitalize');
const reverse = require('./reverse');
const calculator = require('./calculator');

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
})