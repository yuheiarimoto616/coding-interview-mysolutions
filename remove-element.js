// 27. Remove Element (Easy) from LeetCode

function removeElement(nums, val) {
    let i = 0;
    for (let num of nums) {
        if (num != val) {
            nums[i] = num;
            i++;
        }
    }

    return i;
}


// function removeElement(nums, val) {
//     let count = 0;

//     for (let num of nums) {
//         if (num != val) {
//             nums[count] = num;
//             count++;
//         }
//     }

//     return count;
// }