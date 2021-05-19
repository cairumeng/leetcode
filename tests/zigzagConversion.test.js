import { expect } from '@jest/globals'
import convert from '../src/zigzagConversion'

test('s = "PAYPALISHIRING", numRows = 3', () => {
  const s = 'PAYPALISHIRING',
    numRows = 3
  const output = 'PAHNAPLSIIGYIR'
  expect(convert(s, numRows)).toEqual(output)
})

test('s = "PAYPALISHIRING", numRows = 3', () => {
  const s = 'PAYPALISHIRING',
    numRows = 4
  const output = 'PINALSIGYAHRPI'
  expect(convert(s, numRows)).toEqual(output)
})

test('s = "A", numRows = 1', () => {
  const s = 'A',
    numRows = 1
  const output = 'A'
  expect(convert(s, numRows)).toEqual(output)
})
