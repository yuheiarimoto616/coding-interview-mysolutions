// 189. Rotate Array (Medium) from LeetCode
function rotate(nums, k) {
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, (k % nums.length) - 1);
    reverse(nums, (k % nums.length), nums.length - 1);

    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;
    }
}

let nums = [1,2,3,4,5,6,7];

let ret = rotate(nums, 8);

console.log('nums :>> ', ret);