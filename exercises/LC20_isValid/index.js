const isValid = s => {
    let charStack = [];
    let pairsHashMap = {
        "{":"}",
        "[":"]",
        "(":")"
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (pairsHashMap[char]) {
            charStack.push(char);
        } else {
            const topOfStack = charStack[charStack.length - 1];
            char === pairsHashMap[topOfStack] ? charStack.pop() : charStack.push(char);
        }
    }
    return charStack.length === 0
};

module.exports = isValid;
