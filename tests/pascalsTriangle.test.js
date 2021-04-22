import { expect } from '@jest/globals'
import generate from '../src/pascalsTriangle'

test(' numRows=5', () => {
  const numRows = 5
  const output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
  expect(generate(numRows)).toEqual(output)
})
test(' numRows=1', () => {
  const numRows = 1
  const output = [[1]]
  expect(generate(numRows)).toEqual(output)
})

test(' numRows=6', () => {
  const numRows = 6
  const output = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
  ]
  expect(generate(numRows)).toEqual(output)
})
