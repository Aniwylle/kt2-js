const test = require("node:test");
const assert = require("node:assert");

const { palindromeCheck } = require("./05.js");

test("This is palindrome", () => {
    assert.strictEqual(palindromeCheck('шалаш'), 'YES');
    assert.strictEqual(palindromeCheck('топот'), 'YES');
    assert.strictEqual(palindromeCheck('комок'), 'YES');
  });

  test("This is not palindrome", () => {
    assert.strictEqual(palindromeCheck('пароль'), 'NO');
    assert.strictEqual(palindromeCheck('август'), 'NO');
    assert.strictEqual(palindromeCheck('вода'), 'NO');
  });