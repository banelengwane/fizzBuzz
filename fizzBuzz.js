module.exports = function (numbers){
    // if( typeof num === 'number' || num instanceof Number){
    //     if ((num%3 === 0) && (num%5 === 0)){
    //         return "FizzBuzz";
    //     } else if (num%3 === 0){
    //         return "Fizz";
    //     }else if (num%5 === 0){
    //         return "Buzz";
    //     }else{
    //         return num;
    //     }
    // }else{
    //     return 'not a number';
    // }
    let results = [];
    for(let i = 0; i < numbers.length; i++){
        if((numbers[i]%3 === 0) && (numbers[i]%5 === 0)){
            results.push('FizzBuzz');
        } else if (numbers[i]%3 === 0){
            results.push('Fizz');
        } else if (numbers[i]%5 === 0){
            results.push('Buzz');
        } else{
            results.push(numbers[i]);
        }
    }

    return results;

}