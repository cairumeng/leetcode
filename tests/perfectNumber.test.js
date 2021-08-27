import { expect } from '@jest/globals'
import checkPerfectNum from '../src/perfectNumber.js'
test('6', () => {
  expect(checkPerfectNum(6)).toBe(true)
})
test('28', () => {
  expect(checkPerfectNum(28)).toBe(true)
})

test('496', () => {
  expect(checkPerfectNum(496)).toBe(true)
})

test('8128', () => {
  expect(checkPerfectNum(8128)).toBe(true)
})

test('2', () => {
  expect(checkPerfectNum(2)).toBe(false)
})

test('1', () => {
  expect(checkPerfectNum(1)).toBe(false)
})
