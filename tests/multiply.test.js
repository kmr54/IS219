const multiply = require('../src/operations/multiply');

test('multiply 6 x 4 to equal 24', () => {
    expect(multiply(6, 4)).toBe(24);
});