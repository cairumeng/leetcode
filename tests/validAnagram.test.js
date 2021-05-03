import { expect } from '@jest/globals'
import isAnagram from '../src/validAnagram'

test('s = "anagram", t = "nagaram"', () => {
  const s = 'anagram',
    t = 'nagaram'
  expect(isAnagram(s, t)).toEqual(true)
})

test('s = "rat", t = "car"', () => {
  const s = 'rat',
    t = 'car'
  expect(isAnagram(s, t)).toEqual(false)
})

test('s = "abode", t = "adobe"', () => {
  const s = 'abode',
    t = 'adobe'
  expect(isAnagram(s, t)).toEqual(true)
})

test('s = "abode", t = "adobe"', () => {
  const s = 'abodek',
    t = 'adobe'
  expect(isAnagram(s, t)).toEqual(false)
})
