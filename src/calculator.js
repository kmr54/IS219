const mathOperations = require('./operations/mathOperations');

class calculator {
    add(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = mathOperations.add(a);

        } else {
            return this.Result = mathOperations.add(a, b);
        }
    }
    divide(a,b) {
        return this.Result = mathOperations.divide(a,b);
    }
    multiply(a,b) {
        return this.Result = mathOperations.multiply(a,b);
    }
    subtract(a,b) {
        return this.Result = mathOperations.subtract(a,b);
    }
    square(a) {
        return this.Result = mathOperations.square(a);
    }
    root(a) {
        return this.Result = mathOperations.root(a);
    }

}
module.exports = calculator;
