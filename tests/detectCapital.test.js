import { expect } from '@jest/globals'
import detectCapitalUse from '../src/detectCapital'

test('USA', () => {
  expect(detectCapitalUse('USA')).toBe(true)
})

test('leetcode', () => {
  expect(detectCapitalUse('leetcode')).toBe(true)
})

test('Google', () => {
  expect(detectCapitalUse('Google')).toBe(true)
})

test('FlaG', () => {
  expect(detectCapitalUse('FlaG')).toBe(false)
})
