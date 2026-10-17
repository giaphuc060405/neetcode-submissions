class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      let stack = [];
      let result = new Array(temperatures.length).fill(0);
    
        for (let i = 0; i < temperatures.length; i++) {
        // Chừng nào stack không rỗng và nhiệt độ ngày hiện tại cao hơn nhiệt độ ở đỉnh stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let prevIndex = stack.pop(); // Lấy ra ngày cũ chờ tìm nhiệt độ ấm hơn
                result[prevIndex] = i - prevIndex; // Tính khoảng cách số ngày
            }
            // Đưa ngày hiện tại vào stack để chờ xét tiếp
        stack.push(i);
    }
    return result;
    }
}
