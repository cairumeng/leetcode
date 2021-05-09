import { expect } from '@jest/globals'
import firstUniqChar from '../src/firstUniqueCharacterInString'

test('s = "leetcode"', () => {
  const s = 'leetcode'
  const output = 0
  expect(firstUniqChar(s)).toEqual(output)
})

test('s = "loveleetcode"', () => {
  const s = 'loveleetcode'
  const output = 2
  expect(firstUniqChar(s)).toEqual(output)
})

test('s = "aabb"', () => {
  const s = 'aabb'
  const output = -1
  expect(firstUniqChar(s)).toEqual(output)
})
