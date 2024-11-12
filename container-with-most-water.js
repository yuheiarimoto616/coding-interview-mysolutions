// 11. Container With Most Water (Medium) from LeetCode (https://leetcode.com/problems/container-with-most-water/)
function maxArea(height) {
    let max = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);

        max = Math.max(area, max);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

let height = [1,8,6,2,5,4,8,3,7];

let ret = maxArea(height); 

console.log('ret :>> ', ret);