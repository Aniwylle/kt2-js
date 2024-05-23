const test = require("node:test");
const assert = require("node:assert");

const { findNumDevideByThree } = require("./02.js");

test("Numbers Divisible By Three", () => {
    assert.strictEqual(findNumDevideByThree('20'), '369121518');
    assert.strictEqual(findNumDevideByThree('35'), '3691215182124273033');
    assert.strictEqual(findNumDevideByThree('11'), '369');
  });