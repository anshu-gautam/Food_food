import { sum } from "../sum";

test("function to calculate the sum of two number", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
