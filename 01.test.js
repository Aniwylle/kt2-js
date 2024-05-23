const test = require("node:test");
const assert = require("node:assert");

const { showMessage } = require("./01.js");

test("Works with capital A and O", () => {
    assert.strictEqual(showMessage('Арзбуз'), 'рзбуз');
    assert.strictEqual(showMessage('Омега'), 'мег');
    assert.strictEqual(showMessage('Ааоааой'), 'й');
  });

  test("Works with a and o", () => {
    assert.strictEqual(showMessage('пароль'), 'прль');
    assert.strictEqual(showMessage('август'), 'вгуст');
    assert.strictEqual(showMessage('вода'), 'вд');
  });