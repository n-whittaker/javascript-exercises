const sumAll =function(userNum1, userNum2) {

    // Puts smallest number in num1 and and biggest number in num2
    if (userNum1 > userNum2) { 
        num2 = userNum1;
        num1 = userNum2;
    } else {
        num1 = userNum1;
        num2 = userNum2;
    }

    // Throw error at non-numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR"
    }

    // Throw error at negative numbers
    if (num1 < 0) { 
        return "ERROR"
    }

    


    let finalSum = 0;
    
    for (i = num1; i <= num2; i++) { // Add every number between the two numbers
        finalSum += i;
    }

    return finalSum
}




// Do not edit below this line
module.exports = sumAll;
