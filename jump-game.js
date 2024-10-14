// 55. Jump Game (Medium) from LeetCode https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums 
 * @return {boolean}
 */
function canJump(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= goal) {
            goal = i;
        }
    }

    return goal == 0;
}

let nums = [3,0,8,2,0,0,1];
let ret = canJump(nums);

console.log('ret :>> ', ret);
