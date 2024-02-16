const removeFromArray = function(array, ...toRemove) {

    let newArray = array.slice(); // Copy the array

    for (const itemA of array) { // Do the below code for every item in the ORIGINAL array
        for (const itemB of toRemove) { // for every item in toRemove
            if (array.indexOf(itemB) !== -1) { // Checks if value to remove is even in the array
                                               // Checking not equal to -1 as indexOf return the index, not a boolean.
                                               // Items at index 0 willl return a 0, which the if statement will
                                               // evaluate as falsy
                if (itemA === itemB) { // if the item matches the item the loop is evaluating in original array
                    let index = newArray.indexOf(itemB); // find the index of item from toRemove's value within newArray
                                                         // IMPORTANT THAT NOT MODIFYING THE ARRAY THAT I"M ALSO ITERATING OVER
                    newArray.splice(index, 1); // and remove it from newArray
                }
            }
        }
    }

    return newArray
    

}

// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
 

// Do not edit below this line
module.exports = removeFromArray;
