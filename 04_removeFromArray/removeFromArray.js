const removeFromArray = function(array, ...toRemove) {

    newArray = array;

 

    
    for (const item of toRemove) {
        if (newArray.indexOf(item)) {
            const index = newArray.indexOf(item);
            newArray.splice(index, 1);
        }

    }
    

    return(newArray)

}


 

// Do not edit below this line
module.exports = removeFromArray;
