const maxSubArray = require("./index");

test("[-2,1,-3,4,-1,2,1,-5,4] returns 6 for [4,-1,2,1]", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});


test("[-1] returns 0", () => {
  expect(maxSubArray([-2])).toEqual(-2);
});
