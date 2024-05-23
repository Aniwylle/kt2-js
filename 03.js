let num = '5';
function concatenate(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        result = result + " ";
    }
    return result.trim() 
}
module.exports = { concatenate };
console.log(concatenate(num));