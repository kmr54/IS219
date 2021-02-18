const subtract = require('../src/operations/subtract');

test('subtract 4 from 6 to equal 2', () => {
    expect(subtract(6, 4)).toBe(2);
});