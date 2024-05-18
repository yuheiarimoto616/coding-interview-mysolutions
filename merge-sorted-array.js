// 88. Merge Sorted Array (Easy) from LeetCode

function merge(nums1, m, nums2, n) {
    if (n == 0) {
        return;
    }

    let index = m + n - 1;

    m--; 
    n--;
    
    while (n >= 0) {
        if (nums1[m] >= nums2[n]) {
            nums1[index] = nums1[m];
            m--;
        }  else {
            nums1[index] = nums2[n];
            n--;
        }
        index--;
    }
}

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];

merge(nums1, 3, nums2, 3);

console.log('nums1 :>> ', nums1);