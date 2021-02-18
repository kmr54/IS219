const root = require('../src/operations/root');

test('square root 4 to equal 2', () => {
    expect(root(4)).toBe(2);
});