import { expect } from '@jest/globals'
import canWinNim from '../src/nimGame'

test('n=4', () => {
  const n = 4
  const output = false
  expect(canWinNim(n)).toEqual(output)
})
test('n=1', () => {
  const n = 1
  const output = true
  expect(canWinNim(n)).toEqual(output)
})
test('n=2', () => {
  const n = 2
  const output = true
  expect(canWinNim(n)).toEqual(output)
})
test('n=5', () => {
  const n = 5
  const output = true
  expect(canWinNim(n)).toEqual(output)
})
test('n=7', () => {
  const n = 7
  const output = true
  expect(canWinNim(n)).toEqual(output)
})
