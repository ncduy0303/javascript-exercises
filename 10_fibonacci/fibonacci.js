const fibonacci = function(n) {
    n = parseInt(n);
    return n < 0 ? "OOPS" : n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
