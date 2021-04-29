import { expect } from '@jest/globals'
import isIsomorphic from '../src/isomorphicString'

test('s = "egg", t = "add"', () => {
  const s = 'egg'
  const t = 'add'
  const output = true
  expect(isIsomorphic(s, t)).toEqual(output)
})

test('s = "foo", t = "bar"', () => {
  const s = 'foo'
  const t = 'bar'
  const output = false
  expect(isIsomorphic(s, t)).toEqual(output)
})

test('s = "paper", t = "title"', () => {
  const s = 'paper'
  const t = 'title'
  const output = true
  expect(isIsomorphic(s, t)).toEqual(output)
})
