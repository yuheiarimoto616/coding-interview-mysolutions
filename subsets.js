// 78. Subsets (Medium) from LeetCode
function subsets(nums) {
    let ret = [[]];

    for (let num of nums) {
        let subsets = [];
        for (let item of ret) {
            console.log('item :>> ', item);
            let subset = [...item];
            subset.push(num)
            subsets.push(subset);
        }
        ret = [...ret, ...subsets];
    }

    return ret;
}

let nums = [1,2,3];

let result = subsets(nums);

console.log('result :>> ', result);