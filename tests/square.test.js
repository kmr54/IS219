const square = require('../src/operations/square');

test('square 4 to equal 16', () => {
    expect(square(4)).toBe(16);
});