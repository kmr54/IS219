const divide = require('../src/operations/divide');

test('divide 24 / 4 to equal 6', () => {
    expect(divide(24, 4)).toBe(6);
});