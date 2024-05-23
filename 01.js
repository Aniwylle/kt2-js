let word = 'Арнольд';

function showMessage(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== 'А' && word[i] !== 'о' && word[i] !== 'а' && word[i] !== 'О') {
            result += word[i];
        }
    }
    return result
}

console.log(showMessage(word));

module.exports = { showMessage };