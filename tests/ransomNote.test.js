import { expect } from '@jest/globals'
import canConstruct from '../src/ransomNote'
test('ransomNote = "a", magazine = "b"', () => {
  const ransomNote = 'a',
    magazine = 'b'
  const output = false
  expect(canConstruct(ransomNote, magazine)).toEqual(output)
})

test('ransomNote = "aa", magazine = "ab"', () => {
  const ransomNote = 'aa',
    magazine = 'ab'
  const output = false
  expect(canConstruct(ransomNote, magazine)).toEqual(output)
})

test('ransomNote = "aa", magazine = "aab"', () => {
  const ransomNote = 'aa',
    magazine = 'aab'
  const output = true
  expect(canConstruct(ransomNote, magazine)).toEqual(output)
})

test('ransomNote = "ab", magazine = "aab"', () => {
  const ransomNote = 'ab',
    magazine = 'aab'
  const output = true
  expect(canConstruct(ransomNote, magazine)).toEqual(output)
})

test('ransomNote = "aab", magazine = "baa"', () => {
  const ransomNote = 'aab',
    magazine = 'baa'
  const output = true
  expect(canConstruct(ransomNote, magazine)).toEqual(output)
})
