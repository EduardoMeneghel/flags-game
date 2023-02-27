import { Calculator } from '../ts/tools';
import { describe, beforeEach, it, expect } from '@jest/globals';

  describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers', () => {
    const result = calculator.sum(2, 3);
    expect(result).toEqual(5);
  });
});