module.exports = function (numbers){
    if( typeof numbers === 'number' || numbers instanceof Number){
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

    }else{
        return 'not a number';
    }
}