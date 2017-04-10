var expect = require('expect');

function sum(a, b) {
  return a + b;
}

describe("Client app", () => {
  it("run sample test", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
