import { expect } from '@jest/globals'
import addTwoNumbers from '../src/addTwoNumbers'

test('l1 = [2,4,3], l2 = [5,6,4]', () => {
  const l1 = { val: 2, next: { val: 4, next: { val: 3 } } }
  const l2 = { val: 5, next: { val: 6, next: { val: 4 } } }
  const output = { val: 7, next: { val: 0, next: { val: 4 } } }
  expect(addTwoNumbers(l1, l2)).toEqual(output)
})
