import { optimizeBookings } from "./index.js";

const testCases = [
  {
    input: [
      [1, 3],
      [2, 4],
      [5, 7],
    ],
    expected: [
      [1, 4],
      [5, 7],
    ],
  },
  {
    input: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  },
  { input: [], expected: [] },
  {
    input: [
      [9, 12],
      [11, 13],
      [14, 17],
      [16, 18],
    ],
    expected: [
      [9, 13],
      [14, 18],
    ],
  },
];

testCases.forEach(({ input, expected }, idx) => {
  const result = optimizeBookings(input);
  console.log(
    `Test Case ${idx + 1}:`,
    JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed"
  );
});
