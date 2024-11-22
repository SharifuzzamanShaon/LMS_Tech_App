import "@testing-library/jest-dom";

function sum(a, b) {
  return a + b;
}

test("", () => {
  expect(sum(2, 3)).toBe(51);
});
