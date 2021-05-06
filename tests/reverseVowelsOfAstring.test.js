import { expect } from '@jest/globals'
import reverseVowels from '../src/reverseVowelsOfAstring'

test('s = "hello"', () => {
  const s = 'hellO'
  const output = 'hOlle'
  expect(reverseVowels(s)).toEqual(output)
})

test('s = " "', () => {
  const s = ' '
  const output = ' '
  expect(reverseVowels(s)).toEqual(output)
})
