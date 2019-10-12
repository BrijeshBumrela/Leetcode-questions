function isPalindrome(s) {
    s = s.replace(/[\W_]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while(left <= right) {
        if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;
