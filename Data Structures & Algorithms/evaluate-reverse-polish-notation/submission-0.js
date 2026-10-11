class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
            if (token === "+") {
                let b = stack.pop();
                let a = stack.pop();
                let result = a + b;
                stack.push(result);
            } else if (token === "-") {
                let b = stack.pop();
                let a = stack.pop();
                let result = a - b;
                stack.push(result);
            } else if (token === "*") {
                let b = stack.pop();
                let a = stack.pop();
                let result = a * b;
                stack.push(result);
            } else if (token === "/") {
                let b = stack.pop();
                let a = stack.pop();
                let result = Math.trunc(a / b);
                stack.push(result);
            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop();
    }
}
