function isAnagram(s, t) {
    // O(nlogn)
    // s = s.split('').sort().join('');
    // t = t.split('').sort().join('');
    // return s === t;

    if (s.length !== t.length) return false;
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        charCount[currentChar] = charCount[currentChar] ? charCount[currentChar] + 1 : 1;
    }
    for (let j = 0; j < t.length; j++) {
        const currentChar = t[j];
        if (!charCount[currentChar]) {
            return false;
        }
        charCount[currentChar] -= 1;
    }
    for (let char in charCount) {
        if (charCount[char] !== 0) {
            return false
        }
    }
    return true;
}

module.exports = isAnagram;
