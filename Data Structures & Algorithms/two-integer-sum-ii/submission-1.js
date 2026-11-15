class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            let currentTotal = numbers[left] + numbers[right];
            if (currentTotal === target) {
                return [left + 1, right + 1];
            } else if (currentTotal < target) {
                left++;
                while (left < right && numbers[left] === numbers[left - 1]) left++;
            } else {
                right--;
                while (left < right && numbers[right] === numbers[right + 1]) right--;
            }
        }
    }
}
