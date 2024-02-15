const removeFromArray = function(array, ...toRemove) {

    let newArray = array.slice();



    for (const itemA of array) { // Do the below code for every item in the ORIGINAL array
        for (const itemB of toRemove) { // for every item in toRemove
            if (itemA === itemB) { // if the item matches the item the loop is evaluating in original array
                index = newArray.indexOf(itemB); // find the index of item from toRemove's value within newArray
                                                 // IMPORTANT THAT NOT MODIFYING THE ARRAY THAT I"M ALSO ITERATING OVER
                
                newArray.splice(index, 1); // and remove it from newArray
            }
        }
    }

    return newArray
 

}


 

// Do not edit below this line
module.exports = removeFromArray;
