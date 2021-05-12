import { expect } from '@jest/globals'
import arrangeCoins from '../src/arrangingCoins'

test('n=5', () => {
  const n = 5
  const output = 2
  expect(arrangeCoins(n)).toEqual(output)
})
test('n=8', () => {
  const n = 8
  const output = 3
  expect(arrangeCoins(n)).toEqual(output)
})
