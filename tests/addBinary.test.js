import { expect } from '@jest/globals'
import addBinary from '../src/addBinary'

test('a = "11", b = "1",target "100"', () => {
  const a = '11'
  const b = '1'
  const target = '100'
  expect(addBinary(a, b)).toEqual(target)
})

test('a = "1010", b = "1011",target "10101"', () => {
  const a = '1010'
  const b = '1011'
  const target = '10101'
  expect(addBinary(a, b)).toEqual(target)
})

test('a = "1", b = "1,target "10"', () => {
  const a = '1111'
  const b = '11'
  const target = '10010'
  expect(addBinary(a, b)).toEqual(target)
})
