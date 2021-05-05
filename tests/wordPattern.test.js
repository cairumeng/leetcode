import { expect } from '@jest/globals'
import wordPattern from '../src/wordPattern'

test('pattern = "abba", s = "dog cat cat dog"', () => {
  const pattern = 'abba',
    s = 'dog cat cat dog'
  expect(wordPattern(pattern, s)).toEqual(true)
})

test('pattern = "abba", s = "dog cat cat fish"', () => {
  const pattern = 'abba',
    s = 'dog cat cat fish'
  expect(wordPattern(pattern, s)).toEqual(false)
})

test(' pattern = "aaaa", s = "dog cat cat dog"', () => {
  const pattern = 'aaaa',
    s = 'dog cat cat dog'
  expect(wordPattern(pattern, s)).toEqual(false)
})

test('  pattern = "abba", s = "dog dog dog dog"', () => {
  const pattern = 'abba',
    s = 'dog dog dog dog'
  expect(wordPattern(pattern, s)).toEqual(false)
})
