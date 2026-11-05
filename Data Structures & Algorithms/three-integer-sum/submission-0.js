class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortNums = nums.sort((a, b) => a - b);
        let result = [];

        for (let i = 0; i < sortNums.length; i++) {
            if (sortNums[i] === sortNums[i - 1]) continue;
            let left = i + 1;
            let right = sortNums.length - 1;
            while (left < right) {
                if (sortNums[left] + sortNums[right] + sortNums[i] === 0) {
                    let triplet = [sortNums[left], sortNums[right],sortNums[i]];
                    result.push(triplet);
                    left++;
                    right--;
                    while (left < right && sortNums[left] === sortNums[left - 1]) {
                        left++;
                    }

                    while (left < right && sortNums[right] === sortNums[right + 1]) {
                        right--;
                    }
                } else if (sortNums[left] + sortNums[right] + sortNums[i] > 0) {
                    right--;
    
                    
                } 
                else if (sortNums[left] + sortNums[right] + sortNums[i] < 0) {
                    left++; 
                }
            }
        }
        return result;
    }
}
