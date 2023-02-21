const palindromes = function (str) {
    strProcessed = str.toLowerCase().replace(/[^a-z]/g, '');
    strReverse = strProcessed.split('').reverse().join('');
    return strProcessed === strReverse;
}

// Do not edit below this line
module.exports = palindromes;
