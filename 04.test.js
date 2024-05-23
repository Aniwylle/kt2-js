const test = require("node:test");
const assert = require("node:assert");


const { factorial, sumFactorials } = require("./04.js");

test("factorial done correctly", () => {
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(3), 6);
    assert.strictEqual(factorial(7), 5040);
});

test("sum of factorials done correctly", () => {
    assert.strictEqual(sumFactorials(12), 522956313);
    assert.strictEqual(sumFactorials(2), 3);
    assert.strictEqual(sumFactorials(7), 5913)
});
