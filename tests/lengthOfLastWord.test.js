import { expect } from '@jest/globals'
import lengthOfLastWord from '../src/LengthofLastWord'

test('s = "Hello World",target 5 ', () => {
  const s = 'Hello World'
  const target = 5
  expect(lengthOfLastWord(s)).toEqual(target)
})

test('s =" ",target 0 ', () => {
  const s = ' '
  const target = 0
  expect(lengthOfLastWord(s)).toEqual(target)
})
test('s ="fafa     ",target 4 ', () => {
  const s = 'fafa     '
  const target = 4
  expect(lengthOfLastWord(s)).toEqual(target)
})
