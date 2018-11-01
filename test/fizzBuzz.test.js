const assert = require('assert');
let fizzBuzz = require('../fizzBuzz');
describe('Fizz Buzz', function (){
    it ('should return Fizz for multiples of 3, Buzz for multiples of 5, and return number for non-multiples', function(){
        assert.deepEqual(fizzBuzz(15), 
            [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    });

    it('should ignore strings', function(){
        assert.equal(fizzBuzz('name'), "not a number");
    });
});