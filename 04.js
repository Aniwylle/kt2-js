let num = 4

function factorial(n) {
    if (n === 0 || n === 1) { 
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function sumFactorials(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += factorial(i);
    }

    return sum;
}
module.exports = { factorial, sumFactorials };
console.log(sumFactorials(num));