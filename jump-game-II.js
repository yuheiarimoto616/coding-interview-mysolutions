// 45. Jump Game II (Medium) form LeetCode https://leetcode.com/problems/jump-game-ii/
function jump(nums) {
    let n = 0;
    let f = 0;
    let farthest = 0; 
    let jump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (f >= nums.length - 1) {
            return jump;
        }
        
        farthest = Math.max(farthest, i + nums[i]);

        if (i >= f) {
            jump++;
            n = f + 1;
            f = farthest;
        }
    }

    return jump;
}

let nums = [2,3,1,1,4];

let ret = jump(nums);

console.log('ret :>> ', ret);