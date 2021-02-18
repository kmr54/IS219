const add = require('./add');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');
const root = require('./root');
const square = require('./square');



class mathOperations {
    static add(a = null, b = null) {
        if(Array.isArray(a)) {
            return add(a);
        } else {
            return add(a,b);
        }
    }
    static multiply(a,b) {
        return multiply(a,b);
    }
    static divide(a,b) {
        return divide(a,b);
    }
    static subtract(a,b) {
        return subtract(a,b);
    }

    static root(a) {
        return root(a);
    }

    static square(a) {
        return square(a);
    }
}

module.exports = mathOperations;