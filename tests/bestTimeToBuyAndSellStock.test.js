import { expect } from '@jest/globals'
import maxProfit from '../src/bestTimeToBuyAndSellStock'

test('prices = [7,1,5,3,6,4]', () => {
  const prices = [7, 1, 5, 3, 6, 4]
  const output = 5
  expect(maxProfit(prices)).toEqual(output)
})

test('prices = [7,6,4,3,1]', () => {
  const prices = [7, 6, 4, 3, 1]
  const output = 0
  expect(maxProfit(prices)).toEqual(output)
})

test('prices = [2,4,1]', () => {
  const prices = [2, 4, 1]
  const output = 2
  expect(maxProfit(prices)).toEqual(output)
})

test('prices = [2,1,2,1,0,1,2]', () => {
  const prices = [2, 1, 2, 1, 0, 1, 2]
  const output = 2
  expect(maxProfit(prices)).toEqual(output)
})
