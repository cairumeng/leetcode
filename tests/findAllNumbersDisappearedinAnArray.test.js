import { expect } from '@jest/globals'
import findDisappearedNumbers from '../src/findAllNumbersDisappearedInAnArray'

test('nums = [4,3,2,7,8,2,3,1]', () => {
  const nums = [4, 3, 2, 7, 8, 2, 3, 1]
  const output = [5, 6]
  expect(findDisappearedNumbers(nums)).toEqual(output)
})

test('nums = [1,1]', () => {
  const nums = [1, 1]
  const output = [2]
  expect(findDisappearedNumbers(nums)).toEqual(output)
})

test('nums = [1,1,1]', () => {
  const nums = [1, 1, 1]
  const output = [2, 3]
  expect(findDisappearedNumbers(nums)).toEqual(output)
})

test('nums = [2,2,3]', () => {
  const nums = [2, 2, 3]
  const output = [1]
  expect(findDisappearedNumbers(nums)).toEqual(output)
})
