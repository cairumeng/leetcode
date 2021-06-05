import { expect } from '@jest/globals'
import multiply, { stringSum } from '../src/mutiplyString'

test('num1 = "2", num2 = "3"', () => {
  const num1 = '2',
    num2 = '3'
  const output = '6'

  expect(multiply(num1, num2)).toEqual(output)
})

test('num1 = "123", num2 = "456"', () => {
  const num1 = '123',
    num2 = '456'
  const output = '56088'

  expect(multiply(num1, num2)).toEqual(output)
})

test('num1 = "0", num2 = "999"', () => {
  const num1 = '0',
    num2 = '999'
  const output = '0'

  expect(multiply(num1, num2)).toEqual(output)
})

test('num1 = "1", num2 = "999"', () => {
  const num1 = '1',
    num2 = '999'
  const output = '999'

  expect(multiply(num1, num2)).toEqual(output)
})
test('num1 = "1999", num2 = "0"', () => {
  const num1 = '1999',
    num2 = '0'
  const output = '0'

  expect(multiply(num1, num2)).toEqual(output)
})

test('num1 = "1999", num2 = "4"', () => {
  const num1 = '1999',
    num2 = '4'
  const output = '7996'

  expect(multiply(num1, num2)).toEqual(output)
})

test('num1 = "52", num2 = "60"', () => {
  const num1 = '52',
    num2 = '60'
  const output = '3120'

  expect(multiply(num1, num2)).toEqual(output)
})

test('num1 = "999", num2 = "999"', () => {
  const num1 = '999',
    num2 = '999'
  const output = '998001'

  expect(multiply(num1, num2)).toEqual(output)
})
