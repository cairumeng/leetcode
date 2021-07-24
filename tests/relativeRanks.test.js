import { expect } from '@jest/globals'
import findRelativeRanks from '../src/relativeRanks'
test('score = [5,4,3,2,1]', () => {
  const score = [5, 4, 3, 2, 1]
  const output = ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']
  expect(findRelativeRanks(score)).toEqual(output)
})
test('score = [5,4,3,2,1]', () => {
  const score = [10, 3, 8, 9, 4]
  const output = ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']
  expect(findRelativeRanks(score)).toEqual(output)
})
