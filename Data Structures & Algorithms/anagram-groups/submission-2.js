class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let str of strs) {
            let count = new Array(26).fill(0);
            for (let char of str) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                count[index] = (count[index] || 0) + 1;
            }
            let key = count.join(',');
            if (map.has(key)) {
                map.get(key).push(str);
            } else {
                map.set(key, [str]);
            }
        }
        return Array.from(map.values());
    }
}
