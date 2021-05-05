import { expect } from '@jest/globals'
import NumArray from '../src/rangeSumQuery-immutable'
test('numArray', () => {
  const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
  expect(numArray.arr).toEqual([-2, 0, 3, -5, 2, -1])
  expect(numArray.sumRange(0, 2)).toEqual(1)
  expect(numArray.sumRange(2, 5)).toEqual(-1)
  expect(numArray.sumRange(0, 5)).toEqual(-3)
})
