import { expect } from '@jest/globals';

export function expectToBeTrue(value: boolean): void {
  expect(value).toBe(true);
}

export function expectToBeFalse(value: boolean): void {
  expect(value).toBe(false);
}



export { expect };

