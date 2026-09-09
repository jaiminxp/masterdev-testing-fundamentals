import { test, expect, vi } from 'vitest';

const consolespy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('hellow owrld');

  expect(consolespy).toHaveBeenCalled();
  expect(consolespy).toHaveBeenCalledWith('hellow owrld');
});
