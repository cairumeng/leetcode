import { expect } from '@jest/globals'
import summaryRanges from '../src/summaryRanges'

test('nums = [0,1,2,4,5,7]', () => {
  const nums = [0, 1, 2, 4, 5, 7]
  const output = ['0->2', '4->5', '7']
  expect(summaryRanges(nums)).toEqual(output)
})

test('nums = [0,2,3,4,6,8,9]', () => {
  const nums = [0, 2, 3, 4, 6, 8, 9]
  const output = ['0', '2->4', '6', '8->9']
  expect(summaryRanges(nums)).toEqual(output)
})

test('nums = []', () => {
  const nums = []
  const output = []
  expect(summaryRanges(nums)).toEqual(output)
})

test('nums = [-1]', () => {
  const nums = [-1]
  const output = ['-1']
  expect(summaryRanges(nums)).toEqual(output)
})

test('nums = [0]', () => {
  const nums = [0]
  const output = ['0']
  expect(summaryRanges(nums)).toEqual(output)
})
