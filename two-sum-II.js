// 167. Two Sum II - Input Array Is Sorted (Medium) from LeetCode (https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let twoSum = numbers[left] + numbers[right];
        if (twoSum == target) {
            return [left + 1, right + 1];
        } else if (twoSum > target) {
            right--;
        } else {
            left++;
        }
    }
}

let numbers = [2,7,11,15];

let ret = twoSum(numbers, 18);

console.log('ret :>> ', ret);