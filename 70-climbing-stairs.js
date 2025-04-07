/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let previous1 = 3;
    let previous2 = 2;
    let current = 0;

    for (let i = 3; i < n; i++) {
        current = previous1 + previous2;
        previous2 = previous1;
        previous1 = current;
    }

    return current;
};
