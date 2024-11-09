// 274. H-Index (Medium) from LeetCode https://leetcode.com/problems/h-index/ 
function hIndex(citations) {
    let citationsBucket = new Array(citations.length + 1).fill(0);

    for (let citation of citations) {
        citationsBucket[Math.min(citation, citations.length)]++;
    }

    console.log('citationsBucket :>> ', citationsBucket);

    let cumulative = 0;
    for (let i = citationsBucket.length - 1; i >= 0; i--) {
        cumulative += citationsBucket[i];

        if (cumulative >= i) {
            return i;
        }
    }
}

let citations = [3,0,6,1,5];

let ret = hIndex(citations);

console.log('ret :>> ', ret);