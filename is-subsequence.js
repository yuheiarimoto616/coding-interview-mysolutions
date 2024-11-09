// 392. Is Subsequence (Easy) from LeetCode (https://leetcode.com/problems/is-subsequence/)
function isSubsequence(s, t) {
    if (s == "") {
        return true;
    }
    
    let sIndex = 0;

    for (let i = 0; i < t.length; i++) {
        if (s.at(sIndex) == t.at(i)) {
            sIndex++;
            if (sIndex == s.length) {
                return true;
            }
        }
    }

    return false;
}

let s = "axc";

let t = "ahbgdc";

let ret = isSubsequence(s, t);

console.log('ret :>> ', ret);