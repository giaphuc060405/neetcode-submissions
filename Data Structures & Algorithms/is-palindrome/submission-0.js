class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !isAlphaNumeric(s[left])) {
                left++;
            }

            while (left < right && !isAlphaNumeric(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;

        function isAlphaNumeric(c) {
            let char = c.charCodeAt(0);
            return (char >= 48 && char <= 57) ||
            (char >= 65 && char <= 90) ||
            (char >= 97 && char <= 122)
        }
    }
}
