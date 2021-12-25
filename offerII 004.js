/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsMap = new Map;
    for (let key in nums){
        numsMap.set(nums[key],numsMap.get(nums[key])===undefined?1:numsMap.get(nums[key])+1);
    }
    let result;
    numsMap.forEach(function (value,key) {
        if (value==1){
            result =  key;
        }
    })
    return result;
};