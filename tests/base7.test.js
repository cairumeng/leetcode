import { expect } from '@jest/globals'
import convertToBase7 from '../src/base7'

test('num=100', () => {
  const num = 100
  const output = '202'
  expect(convertToBase7(num)).toEqual(output)
})

test('num=-7', () => {
  const num = -7
  const output = '-10'
  expect(convertToBase7(num)).toEqual(output)
})

test('num=0', () => {
  const num = 0
  const output = '0'
  expect(convertToBase7(num)).toEqual(output)
})
test('num=1', () => {
  const num = 0
  const output = '0'
  expect(convertToBase7(num)).toEqual(output)
})
