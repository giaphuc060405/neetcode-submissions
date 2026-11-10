class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxContainer = 0
        let left = 0
        let right = heights.length - 1;

        while (left < right) {
            let currentContainer = Math.min(heights[left], heights[right]) * (right - left)
            maxContainer = Math.max(maxContainer, currentContainer)
            if (heights[left] < heights[right]) {
                left++;
            } else if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }
        return maxContainer
    }
}
