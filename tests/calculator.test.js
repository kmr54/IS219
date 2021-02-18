const calculator = require('../src/calculator');

//////divide.js
test('Calculator divide 16 by  8 to equal 2', () => {
    let calc = new calculator();
    expect(calc.divide(16,8)).toBe(2);
    expect(calc.divide(16,8)).toBe(2);
});

//////add.js
test('Calculator Add 8 by  7 to equal 15', () => {
    let calc = new calculator();
    expect(calc.add(8, 7)).toBe(15);
    expect(calc.add(8, 7)).toBe(15);
});

////multiply.js
test('Calculator Multiply 5 by  4 has a result equal to 20', () => {
    let calc = new calculator();
    expect(calc.multiply(5, 4)).toBe(20);
    expect(calc.multiply(5, 4)).toBe(20);

});

///add.js
test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let calc = new calculator();
    expect(calc.add([1,2,3,4])).toBe(10);
    expect(calc.add([1,2,3,4])).toBe(10);

});

////subtract.js
test('Calculator subtract 10 from  18 to equal 8', () => {
    let calc = new calculator();
    expect(calc.subtract(18,10)).toBe(8);
    expect(calc.subtract(18,10)).toBe(8);
});


/////root.js
test('Calculator square root 16 to equal 4', () => {
    let calc = new calculator();
    expect(calc.root(16)).toBe(4);
    expect(calc.root(16)).toBe(4);
});

//////square.js
test('Calculator square 4 to equal 16', () => {
    let calc = new calculator();
    expect(calc.square(4)).toBe(16);
    expect(calc.square(4)).toBe(16);
});
