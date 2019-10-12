function groupAnagrams(strs) {
    // Creating an object where each key is alphabetically sorted unique input & 
    // Output is all the equal anagrams of it

    const anagramObj = {};

    for (let str of strs) {
        const sortedString = str.split('').sort().join('');
        if (!anagramObj.hasOwnProperty(sortedString)) {
            anagramObj[sortedString] = []
        }
        anagramObj[sortedString].push(str);
    }
    return Object.values(anagramObj);
}

module.exports = groupAnagrams;
