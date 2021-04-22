import { expect } from '@jest/globals'
import romanToInt from '../src/romanToInteger'

test(' III,target 3', () => {
  const x = 'III'
  expect(romanToInt(x)).toEqual(3)
})

test(' IV,target 3', () => {
  const x = 'IV'
  expect(romanToInt(x)).toEqual(4)
})

test(' IX,target 9', () => {
  const x = 'IX'
  expect(romanToInt(x)).toEqual(9)
})

test(' LVIII,target 58', () => {
  const x = 'LVIII'
  expect(romanToInt(x)).toEqual(58)
})

test(' MCMXCIV,target 1994', () => {
  const x = 'MCMXCIV'
  expect(romanToInt(x)).toEqual(1994)
})
