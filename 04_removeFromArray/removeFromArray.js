const removeFromArray = function() {
    let arr = arguments[0];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let isPresent = false;
        for (let j = 1; j < arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                isPresent = true;
            }
        }
        if (!isPresent) {
            res.push(arr[i]);
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
