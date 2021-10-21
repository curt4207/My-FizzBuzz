//FizzBuzz using a for loop, I was learning while watching Coder Foundry youtube Tutorial.//

function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let i = 1; i <= 100; i ++){
        if(i%value1 == 0 && i%value2 == 0){//if 3% is divisible 0 and and if 5% == 0
                                          //( % Modulus operator)(Remainder)
            returnValue += " FizzBuzz!";
        }
         else if (i%value1 == 0){
            returnValue += " Fizz";
        }
        else if (i%value2 == 0){
            returnValue += " Buzz";
        }
        else {
            returnValue += i + " ";
        }
    } 
    return returnValue;
}// curtis notes: 