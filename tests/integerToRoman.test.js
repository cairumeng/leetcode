import { expect } from '@jest/globals'
import intToRoman from '../src/integerToRoman'

test('num=3", ', () => {
  const num = 3
  const output = 'III'
  expect(intToRoman(num)).toEqual(output)
})

test('num=4', () => {
  const num = 4
  const output = 'IV'
  expect(intToRoman(num)).toEqual(output)
})

test('num=9', () => {
  const num = 9
  const output = 'IX'
  expect(intToRoman(num)).toEqual(output)
})

test('num=58', () => {
  const num = 58
  const output = 'LVIII'
  expect(intToRoman(num)).toEqual(output)
})

test('num=1994', () => {
  const num = 1994
  const output = 'MCMXCIV'
  expect(intToRoman(num)).toEqual(output)
})

test('num=1', () => {
  const num = 1
  const output = 'I'
  expect(intToRoman(num)).toEqual(output)
})

test('num=6', () => {
  const num = 6
  const output = 'VI'
  expect(intToRoman(num)).toEqual(output)
})
