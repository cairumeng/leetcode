import { expect } from '@jest/globals'
import minMoves from '../src/minimumMovesToEqualArrayElements'

test('nums', () => {
  const nums = [1, 2, 3]
  const output = 3
  expect(minMoves(nums)).toEqual(output)
})
test('nums', () => {
  const nums = [1, 1, 1]
  const output = 0
  expect(minMoves(nums)).toEqual(output)
})

test('nums', () => {
  const nums = [1, 3, 5]
  const output = 6
  expect(minMoves(nums)).toEqual(output)
})
