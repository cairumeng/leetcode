import { expect } from '@jest/globals'
import permuteUnique from '../src/PermutationsII'

test('nums = [1,1,2] ', () => {
  const nums = [1, 1, 2]
  const output = [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ]
  expect(permuteUnique(nums)).toEqual(output)
})
