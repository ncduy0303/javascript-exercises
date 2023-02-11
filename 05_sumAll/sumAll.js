const sumAll = function (l, r) {
    if (typeof l !== "number" || typeof r !== "number") return "ERROR";
    if (l < 0 || r < 0) return "ERROR";
    return ((l + r) * (Math.abs(l - r) + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
