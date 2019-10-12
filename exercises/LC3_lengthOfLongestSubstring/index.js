// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let startingIndex = 0;
    let maxLength = 0;
    const hashMap = {};

    for (let i = 0; i < s.length; i++) {
        // hashMap.hasOwnProperty(s[i])
        /* 
            Problem with using hasOwnProperty is shown using example "abba"
            when "a" is duplicated, startingIndex moves back to 1(0 + 1) from 2
        */
        if (hashMap[s[i]] >= startingIndex) {
            startingIndex = hashMap[s[i]] + 1;
        }
        hashMap[s[i]] = i;
        maxLength = Math.max(maxLength, i - startingIndex + 1);
    }
    return maxLength;
}

module.exports = lengthOfLongestSubstring;
