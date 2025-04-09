/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutiveOnes = 0;
    let currentOnes = 0;
    
    for (let num of nums) {
        if (num === 1) {
            currentOnes++;
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentOnes);
        } else {
            currentOnes = 0;
        }
    }
    
    return maxConsecutiveOnes;
};

