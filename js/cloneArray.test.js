const cloneArray = require("./cloneArray");

test("properly clone array", () => {
  expect(cloneArray([1, 2, 4])).toEqual([1, 2, 4]);
  expect(cloneArray([1, 2, 4])).not.toBe([1, 2, 4]);
});
