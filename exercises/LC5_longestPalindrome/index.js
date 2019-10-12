//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    let startingIndex = 0;
    let maxLength = 1;

    function expandAroundMiddle(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                startingIndex = left;
                maxLength = right - left + 1;
            }
            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i-1, i+1);
        expandAroundMiddle(i, i+1)
    }

    return s.slice(startingIndex, startingIndex + maxLength);
}

module.exports = longestPalindrome;