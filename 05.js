let wordCheck = 'потоп';
function palindromeCheck(word) {
    word = word.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return 'NO';
        }
    }
    return 'YES';
}
module.exports = { palindromeCheck };
console.log(palindromeCheck(wordCheck));