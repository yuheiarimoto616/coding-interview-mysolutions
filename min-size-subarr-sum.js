// 209. Minimum Size Subarray Sum (Medium) from LeetCode (https://leetcode.com/problems/minimum-size-subarray-sum/)
function minSubArrayLen(target, nums) {
    let left = 0;
    let right = 0;
    let min = nums.length + 1;

    let currSum = nums[left];

    while (right < nums.length) {
        if (currSum >= target) {
            min = Math.min(min, right - left + 1);
        }
        
        if (currSum <= target || right == left) {
            right++;
            currSum += nums[right];
        } else {
            currSum -= nums[left];
            left++;
        }
    }

    return (min > nums.length) ? 0 : min;
}

let nums = [2,3,4,1,2,4,3];

// let num2 = [1,1,4,3,1,1,7];

let ret = minSubArrayLen(8, nums);

console.log('ret :>> ', ret);

