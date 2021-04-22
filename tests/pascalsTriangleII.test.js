import { expect } from '@jest/globals'
import getRow from '../src/pascalsTriangleII'

test(' numRows=5', () => {
  const rowIndex = 4
  const output = [1, 4, 6, 4, 1]
  expect(getRow(rowIndex)).toEqual(output)
})
test(' numRows=1', () => {
  const rowIndex = 0
  const output = [1]
  expect(getRow(rowIndex)).toEqual(output)
})

test(' rowIndex=3', () => {
  const rowIndex = 3
  const output = [1, 3, 3, 1]
  expect(getRow(rowIndex)).toEqual(output)
})

test(' rowIndex=5', () => {
  const rowIndex = 5
  const output = [1, 5, 10, 10, 5, 1]
  expect(getRow(rowIndex)).toEqual(output)
})
