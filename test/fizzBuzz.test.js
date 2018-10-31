const assert = require('assert');
let fizzBuzz = require('../fizBuzz');
describe('Fizz Buzz', function (){
    it('should return Fizz for multiples of 3', function (){
        assert.equal(fizzBuzz(3), "Fizz");
        assert.equal(fizzBuzz(6), "Fizz");
        
    });
    
    it('should return Buzz for multiples of 5', function (){
        assert.equal(fizzBuzz(5), "Buzz");
        assert.equal(fizzBuzz(10), "Buzz");
        
    });

    it('should return FizzBuzz for multiples of 3 and 5', function (){
        assert.equal(fizzBuzz(15), "FizzBuzz");
    });

    it('should return number if not a multiple of 3 / 5 ', function (){
        assert.equal(fizzBuzz(1), "1");
    });

    it('should ignore strings', function(){
        assert.equal(fizzBuzz('name'), "not a number");
    })
});