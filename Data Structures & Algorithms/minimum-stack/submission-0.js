class MinStack {
    constructor() {
        this.stack = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let min = 0;
        if (this.stack.length === 0) {
            min = val;
        } else {
            let topElement = this.stack[this.stack.length - 1];
            min = topElement[0];
            if (min > val) {
                min = val;
            }
        }
        this.stack.push([min, val]);

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let topElement = this.stack[this.stack.length - 1];
        return topElement[1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let topElement = this.stack[this.stack.length - 1];
        return topElement[0];
    }
}
