const repeatString = function(string, num) {

    let output = '';

    if (num < 0) {
        return "ERROR"
        
    } else {

        while (num > 0) {
            output += string;
            num--;
        }
        return output
    }
    
    
}

// Do not edit below this line
module.exports = repeatString;

