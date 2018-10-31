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
    let i = 1
    while(i <= numbers){
        if((i%3 === 0) && (i%5 === 0)){
            results.push('FizzBuzz');
        } else if (i%3 === 0){
            results.push('Fizz');
        } else if (i%5 === 0){
            results.push('Buzz');
        } else{
            results.push(i);
        }
        i++;
    }

    return results;

}