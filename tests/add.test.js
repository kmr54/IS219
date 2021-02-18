const add = require('../src/operations/add');

test('adds 4 + 6 to equal 10', () => {
    expect(add(4, 6)).toBe(10);
});