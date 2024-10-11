// 169. Majority Element (Easy) from LeetCode
function majorityElement(nums) {
    let majority = nums[0]
    let cur = nums[0];
    let count = 1

    for (let num of nums) {
        if (cur != num && num != majority) {
            count--;
            cur = num;
        } else if (majority == num) {
            count++;
        } else {
            count--;
        }

        if (count == 0) {
            majority = num;
            count++;
        }
    }

    return majority;
}

let nums = [1,3,1,1,4,1,1,5,1,1,6,2,2];

let ret = majorityElement(nums);

console.log('ret :>> ', ret);