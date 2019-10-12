const spiralOrder2 = require("./index");

test("[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] returns [1,2,3,6,9,8,7,4,5]", () => {
  expect(spiralOrder2(3)).toEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]);
});

// test("", () => {
//   expect(spiralOrder2(4)).toEqual([
//     1,
//     2,
//     3,
//     4,
//     12,
//     13,
//     14,
//     5,
//     11,
//     16,
//     15,
//     6,
//     10,
//     9,
//     8,
//     7
//   ]);
// });
