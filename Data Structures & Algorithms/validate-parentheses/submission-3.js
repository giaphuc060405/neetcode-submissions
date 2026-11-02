class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let char of s) {
            if (char === "(") {
                stack.push(")");
            } else if (char === "[") {
                stack.push("]");
            } else if (char === "{") {
                stack.push("}");
            } else if (char !== stack.pop() || char === undefined) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
