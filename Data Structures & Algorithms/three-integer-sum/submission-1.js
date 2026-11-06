class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a,b) => a - b);
        let result = [];
        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i - 1]) continue;
            let left = i + 1;
            let right = sortedNums.length - 1;

            while (left < right) {
                let total = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if (total === 0) {
                    let triplet = [sortedNums[i], sortedNums[left], sortedNums[right]];
                    result.push(triplet);
                    left++;
                    right--;
                    while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
                    while (left < right && sortedNums[right] === sortedNums[right + 1]) right--;
                } else if (total > 0) {
                    right--;
                } else if (total < 0) {
                    left++;
                }
            }
        }
        return result;
    }
}
