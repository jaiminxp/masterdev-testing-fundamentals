import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');
const randomSpyMock = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('spy test', () => {
  console.log('hello world');

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('hello world');
});

test('mock test', () => {
  const mockFn = vi.fn();

  mockFn('hello world');

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('hello world');
});

test('spy mockimplementation test', () => {
  const result = Math.random();
  expect(result).toBe(0.5);
});
