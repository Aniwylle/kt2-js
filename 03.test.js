const test = require("node:test");
const assert = require("node:assert");

const { concatenate } = require("./03.js");

test("concatenate stairs", () => {
    assert.strictEqual(concatenate('2'), '1 12');
    assert.strictEqual(concatenate('4'), '1 12 123 1234');
    assert.strictEqual(concatenate('6'), '1 12 123 1234 12345 123456');
  });