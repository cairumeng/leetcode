import { expect } from '@jest/globals'
import findWords from '../src/keyboardRow'

test('words = ["Hello","Alaska","Dad","Peace"]', () => {
  const words = ['Hello', 'Alaska', 'Dad', 'Peace']
  const output = ['Alaska', 'Dad']
  expect(findWords(words)).toEqual(output)
})

test('words = ["omk"]', () => {
  const words = ['omk']
  const output = []
  expect(findWords(words)).toEqual(output)
})

test('words = ["adsdf","sfd"]', () => {
  const words = ['adsdf', 'sfd']
  const output = ['adsdf', 'sfd']
  expect(findWords(words)).toEqual(output)
})
