// 367. Valid Perfect Square (Easy) from LeetCode https://leetcode.com/problems/valid-perfect-square/
function isPerfectSquare(num) {
    if (num < 1) {
        return false;
    }
    if (num == 1) {
        return true;
    }

    let left = 1;
    let right = num;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        let square = middle * middle;

        if (square == num) {
            return true;
        }

        if (square > num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return false;
}

let num = 16;
let ret = isPerfectSquare(num);

console.log('ret :>> ', ret);