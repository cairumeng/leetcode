import { expect } from '@jest/globals'
import strStr from '../src/implementStr'

test('haystack = "hello", needle = "ll",target 2', () => {
  const haystack = 'hello'
  const needle = 'll'
  const target = 2
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "aaaaa", needle = "bba",target 2', () => {
  const haystack = 'aaaaa'
  const needle = 'bba'
  const target = -1
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "", needle = "",target 0', () => {
  const haystack = ''
  const needle = ''
  const target = 0
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "", needle = "aa",target -1', () => {
  const haystack = ''
  const needle = 'aa'
  const target = -1
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "", needle = "aa",target -1', () => {
  const haystack = 'abc'
  const needle = 'c'
  const target = 2
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "mississippi", needle = "issip",target 4', () => {
  const haystack = 'mississippi'
  const needle = 'issip'
  const target = 4
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "mississippi", needle = "issip",target 4', () => {
  const haystack = 'mississippi'
  const needle = 'issi'
  const target = 1
  expect(strStr(haystack, needle)).toEqual(target)
})

test('haystack = "mississippi", needle = "issip",target 4', () => {
  const haystack = 'mississippi'
  const needle = 'pi'
  const target = 9
  expect(strStr(haystack, needle)).toEqual(target)
})
