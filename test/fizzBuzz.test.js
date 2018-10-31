const assert = require('assert');
let fizzBuzz = require('../fizzBuzz');
describe('Fizz Buzz', function (){
    // it('should return Fizz for multiples of 3', function (){
    //     assert.equal(fizzBuzz(3), "Fizz");
    //     assert.equal(fizzBuzz(6), "Fizz");
        
    // });
    
    // it('should return Buzz for multiples of 5', function (){
    //     assert.equal(fizzBuzz(5), "Buzz");
    //     assert.equal(fizzBuzz(10), "Buzz");
        
    // });

    // it('should return FizzBuzz for multiples of 3 and 5', function (){
    //     assert.equal(fizzBuzz(15), "FizzBuzz");
    // });

    // it('should return number if not a multiple of 3 / 5 ', function (){
    //     assert.equal(fizzBuzz(1), "1");
    // });

    // it('should ignore strings', function(){
    //     assert.equal(fizzBuzz('name'), "not a number");
    // });
    it ('should return Fizz for multiples of 3, Buzz for multiples of 5, and return number for non-multiples', function(){
        let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        assert.deepEqual(fizzBuzz(myNumbers), 
            [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    })

});