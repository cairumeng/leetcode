import { expect } from '@jest/globals'
import findMaxConsecutiveOnes from '../src/maxConsecutiveOnes'

test('nums = [1,1,0,1,1,1]', () => {
  const nums = [1, 1, 0, 1, 1, 1]
  const output = 3
  expect(findMaxConsecutiveOnes(nums)).toEqual(output)
})

test('nums = [1,0,1,1,0,1]', () => {
  const nums = [1, 0, 1, 1, 0, 1]
  const output = 2
  expect(findMaxConsecutiveOnes(nums)).toEqual(output)
})
