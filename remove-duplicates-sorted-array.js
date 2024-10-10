// 26. Remove duplicates from sorted array (Easy) from LeetCode

function removeDuplicates(nums) {
    let currentNum = nums[0];
    let numUnique = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != currentNum) {
            nums[numUnique] = nums[i];
            numUnique++;
            currentNum = nums[i];
        }
    }

    return numUnique;
}



// function removeDuplicates(nums) {
//     let k = 1;
//     let prev = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] != prev) {
//             prev = nums[i];
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// }

let nums = [0,0,1,1,1,2,2,3,3,4];

let k = removeDuplicates(nums);

console.log('k :>> ', k);
console.log('nums :>> ', nums);
