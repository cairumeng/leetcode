import { expect } from '@jest/globals'
import reverseString from '../src/reverseString'

test('s = ["h","e","l","l","o"]', () => {
  const s = ['h', 'e', 'l', 'l', 'o']
  const output = ['o', 'l', 'l', 'e', 'h']
  expect(reverseString(s)).toEqual(output)
})

test('s = ["H","a","n","n","a","h"]', () => {
  const s = ['H', 'a', 'n', 'n', 'a', 'h']
  const output = ['h', 'a', 'n', 'n', 'a', 'H']
  expect(reverseString(s)).toEqual(output)
})

test('s = ["H","a"]', () => {
  const s = ['H', 'a']
  const output = ['a', 'H']
  expect(reverseString(s)).toEqual(output)
})

test('s = ["H"]', () => {
  const s = ['H']
  const output = ['H']
  expect(reverseString(s)).toEqual(output)
})
