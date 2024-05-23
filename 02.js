let num = 20;
function findNumDevideByThree(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            result += [i];
        }
    }
    return result
}
console.log(findNumDevideByThree(num));
module.exports = { findNumDevideByThree };