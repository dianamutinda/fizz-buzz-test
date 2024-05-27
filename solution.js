module.exports = {fizzBuzz};
function fizzBuzz(num){ 
    if(num%3 == 0 && num%5 == 0){
      return `${num} -fizz buzz`;
    }else if(num%3 == 0){
      return `${num} -fizz`;
    }else if(num%5 == 0){
      return`${num} -buzz`;
    }else{
        return num;
    }
} 
