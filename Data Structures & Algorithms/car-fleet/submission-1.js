class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let newArray = [];
        let stack = [];
        for (let i = 0; i < position.length; i++){
            newArray.push([position[i], speed[i]]);
        }
        let sortedArray = newArray.sort((a, b) => b[0] - a[0]);

        for (let element of sortedArray) {
            let time = (target - element[0]) / element[1];
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            } 
        }

        return stack.length;
    }
}
