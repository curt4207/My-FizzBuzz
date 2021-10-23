/*FizzBuzz using a for loop, I was learning while watching Coder Foundry youtube Tutorials.*/
function FizzBuzzA(value1, value2){
    let returnValue = "";

    for(let i = 1; i <= 100; i ++){
        if(i%value1 == 0 && i%value2 == 0){ 
            returnValue +=  "FizzBuzz!!! ";
        }
         else if (i%value1 == 0){ //default value1 #3.
            returnValue += "fizz ";
        }
        else if (i%value2 == 0){ //default value2 #5.
            returnValue += "buzz ";
        }
        else {
            returnValue += i + " "; //if neither are TRUE print the number.  
        }
    } 
    return returnValue;
}

// Call and use the FizzBuzzA function
function buzzIt(){
    let output="";
    let valueOne = document.getElementById("Fizzvalue").value;//ERROR
    let valueTwo = document.getElementById("Buzzvalue").value;//ERROR
    output = FizzBuzzA(valueOne, valueTwo);
    document.getElementById("results").innerHTML = output;
}