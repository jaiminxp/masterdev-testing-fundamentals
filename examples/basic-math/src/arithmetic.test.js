import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('should parse strings into numbers', () => {
    expect(add('2', '2')).toBe(4);
  });

  it('should throw when the first argument cannot be converted into a number', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });

  it('should throw when the second argument cannot be converted into a number', () => {
    expect(() => add(2, 'potato')).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract one number from the other', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(5, 2)).toBe(10);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
});
