/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (newMap.has(difference)) {
            return [newMap.get(difference), i]
        } else {
            newMap.set(nums[i], i)
        }
    }
};
