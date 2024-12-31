const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  // Step 1: Empty string returns zero
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  // Step 2: Single number returns the value
  test('should return the number for single number', () => {
    expect(add("1")).toBe(1);
  });

  // Step 3: Two numbers separated by comma returns sum
  test('should return sum for two comma separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  // Step 4: Multiple numbers separated by comma returns sum
  test('should return sum for multiple comma separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  // Step 5: Support newline as delimiter
  test('should handle newline as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Step 6: Support custom delimiter
  test('should support custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Step 7: Negative numbers throw exception
  test('should throw error for negative numbers', () => {
    expect(() => add("-1,2,-3")).toThrow('Negatives not allowed: -1,-3');
  });

  // Step 8: Numbers bigger than 1000 should be ignored
  test('should ignore numbers bigger than 1000', () => {
    expect(add("2,1001")).toBe(2);
  });
});