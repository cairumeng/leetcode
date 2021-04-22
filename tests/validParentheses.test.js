import { expect } from '@jest/globals'
import isValid from '../src/validParentheses'

test('s = (), target = true', () => {
  const s = '()'
  expect(isValid(s)).toEqual(true)
})

test('s = (], target = true', () => {
  const s = '(]'
  expect(isValid(s)).toEqual(false)
})

test('s = (, target = false', () => {
  const s = '('
  expect(isValid(s)).toEqual(false)
})

test('s = "()[]{}", target = true', () => {
  const s = '()[]{}'
  expect(isValid(s)).toEqual(true)
})

test('s = "([)]", target = false', () => {
  const s = '([)]'
  expect(isValid(s)).toEqual(false)
})

test('s = "{[]}", target = true', () => {
  const s = '{[]}'
  expect(isValid(s)).toEqual(true)
})

test('s = "{}[()]{}", target = true', () => {
  const s = '{}[()]{}'
  expect(isValid(s)).toEqual(true)
})
test('s = "{}[()]", target = true', () => {
  const s = '{}[()]'
  expect(isValid(s)).toEqual(true)
})
