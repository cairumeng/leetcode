import { expect } from '@jest/globals'
import thirdMax from '../src/thirdMaximumNumber'

test('nums = [3,2,1] ', () => {
  const nums = [3, 2, 1]
  const output = 1
  expect(thirdMax(nums)).toEqual(output)
})

test('nums = [1,2] ', () => {
  const nums = [1, 2]
  const output = 2
  expect(thirdMax(nums)).toEqual(output)
})

test('nums = [2,2,3,1] ', () => {
  const nums = [2, 2, 3, 1]
  const output = 1
  expect(thirdMax(nums)).toEqual(output)
})
