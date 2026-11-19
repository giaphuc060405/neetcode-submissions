class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        let buckets = Array.from({length: nums.length + 1}, () => []);

        for (let num in count) {
            let freq = count[num];
            buckets[freq].push(Number(num));
        }

        let result = [];
        for (let i = nums.length; i > 0; i--) {
            for (let num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
        return result;
    }
}
