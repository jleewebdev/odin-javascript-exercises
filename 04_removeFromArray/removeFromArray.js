const removeFromArray = function(originalAray) {
    for ( let i = 1; i < arguments.length; i ++) {
        const itemToRemove = arguments[i];
        const indexToRemove = originalAray.indexOf(itemToRemove);
        if (indexToRemove < 0) { continue; }
        originalAray.splice(indexToRemove, 1);
    }
    return originalAray;
};

// Do not edit below this line
module.exports = removeFromArray;
