import { expect } from '@jest/globals'
import longestCommonPrefix from '../src/longestCommonPrefix'

test(' target-fl', () => {
  const strs = ['flower', 'flow', 'flight']
  expect(longestCommonPrefix(strs)).toBe('fl')
})

test(' target-fl', () => {
  const strs = ['flow', '', 'flight']
  expect(longestCommonPrefix(strs)).toBe('')
})

test(' target-fl', () => {
  const strs = ['']
  expect(longestCommonPrefix(strs)).toBe('')
})

test(' target-fl', () => {
  const strs = []
  expect(longestCommonPrefix(strs)).toBe('')
})

test(' target-fl', () => {
  const strs = ['dog', 'racecar', 'car']
  expect(longestCommonPrefix(strs)).toBe('')
})
