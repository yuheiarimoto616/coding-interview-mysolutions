// 125. Valid Palindrome (Easy) from LeetCode https://leetcode.com/problems/valid-palindrome/  
function isPalindrome(s) {
    s = s.toLowerCase().match(/[a-z0-9]/g);

    if (s == null) {
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

let string = ""

let ret = isPalindrome(string);

console.log('ret :>> ', ret);