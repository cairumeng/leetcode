import { expect } from '@jest/globals'
import addStrings from '../src/addStrings'

test('num1 = "11", num2 = "123"', () => {
  const num1 = '11',
    num2 = '123'
  const output = '134'
  expect(addStrings(num1, num2)).toEqual(output)
})

test('num1 = "456", num2 = "77"', () => {
  const num1 = '456',
    num2 = '77'
  const output = '533'
  expect(addStrings(num1, num2)).toEqual(output)
})

test('num1 = "0", num2 = "0"', () => {
  const num1 = '0',
    num2 = '0'
  const output = '0'
  expect(addStrings(num1, num2)).toEqual(output)
})
test('num1 = "1", num2 = "9"', () => {
  const num1 = '1',
    num2 = '9'
  const output = '10'
  expect(addStrings(num1, num2)).toEqual(output)
})

test('num1=9333852702227987', () => {
  const num1 = '9333852702227987'
  const num2 = '85731737104263'
  const output = '9419584439332250'
  expect(addStrings(num1, num2)).toEqual(output)
})
