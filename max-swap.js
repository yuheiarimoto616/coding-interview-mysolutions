// 670. Maximum Swap (Medium) from LeetCode https://leetcode.com/problems/maximum-swap/
function maximumSwap(num) {
    let num_arr = num.toString().split(""); // O(n)

    let last = new Array(10).fill(-1);

    for (let i = 0; i < num_arr.length; i++) {   // O(n)
        last[num_arr[i]] = i;
    }

    for (let i = 0; i < num_arr.length; i++) {
        for (let j = 9; j > +num_arr[i]; j--) {
            if (last[j] > i) {
                [num_arr[i], num_arr[last[j]]] = [num_arr[last[j]], num_arr[i]]

                return parseInt(num_arr.join(''));
            }
        }
    }

    return num;
}

let num = 99258;

let ret = maximumSwap(num);

console.log('ret :>> ', ret);
