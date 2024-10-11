// 80. Remove duplicates from sorted array II (Medium) from LeetCode
function removeDuplicates(nums) {
    let count = 1;
    let repeatCount = 1;
    let currentNum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentNum != nums[i]) {
            currentNum = nums[i];
            nums[count] = nums[i];
            count++;
            repeatCount = 1;
        } else if (repeatCount < 2) {
            nums[count] = nums[i];
            count++;
            repeatCount++;
        }
    }

    return count;
}

let nums = [0,0,1,1,1,1,2,3,3];

let k = removeDuplicates(nums);

console.log('k :>> ', k);
console.log('nums :>> ', nums);