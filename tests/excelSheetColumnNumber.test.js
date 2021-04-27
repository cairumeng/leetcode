import { expect } from '@jest/globals'
import titleToNumber from '../src/excelSheetColumnNumber'

test('columnTitle = "A"', () => {
  const columnTitle = 'A'
  const output = 1
  expect(titleToNumber(columnTitle)).toEqual(output)
})

test('columnTitle = "AB"', () => {
  const columnTitle = 'AB'
  const output = 28
  expect(titleToNumber(columnTitle)).toEqual(output)
})

test('columnTitle = "FXSHRXW"', () => {
  const columnTitle = 'FXSHRXW'
  const output = 2147483647
  expect(titleToNumber(columnTitle)).toEqual(output)
})

test('columnTitle = "ZY"', () => {
  const columnTitle = 'ZY'
  const output = 701
  expect(titleToNumber(columnTitle)).toEqual(output)
})

test('columnTitle = "AZ"', () => {
  const columnTitle = 'AZ'
  const output = 52
  expect(titleToNumber(columnTitle)).toEqual(output)
})
test('columnTitle = "BA"', () => {
  const columnTitle = 'BA'
  const output = 53
  expect(titleToNumber(columnTitle)).toEqual(output)
})
