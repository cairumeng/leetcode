import { expect } from '@jest/globals'
import convertToTitle from '../src/excelSheetColumnTitle'

test('columnNumber = 1', () => {
  const columnNumber = 1
  const output = 'A'
  expect(convertToTitle(columnNumber)).toEqual(output)
})

test('columnNumber = 28', () => {
  const columnNumber = 28
  const output = 'AB'
  expect(convertToTitle(columnNumber)).toEqual(output)
})

test('columnNumber = 2147483647', () => {
  const columnNumber = 2147483647
  const output = 'FXSHRXW'
  expect(convertToTitle(columnNumber)).toEqual(output)
})

test('columnNumber = 701', () => {
  const columnNumber = 701
  const output = 'ZY'
  expect(convertToTitle(columnNumber)).toEqual(output)
})

test('columnNumber = 52', () => {
  const columnNumber = 52
  const output = 'AZ'
  expect(convertToTitle(columnNumber)).toEqual(output)
})
test('columnNumber = 53', () => {
  const columnNumber = 53
  const output = 'BA'
  expect(convertToTitle(columnNumber)).toEqual(output)
})
