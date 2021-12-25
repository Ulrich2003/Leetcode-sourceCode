/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const s = new Set();
    for (let i = 0; i < nums.length; i++){
        if (s.has(nums[i])){
            return nums[i];
        }else {
            s.add(nums[i]);
        }
    }
    return 0;
};