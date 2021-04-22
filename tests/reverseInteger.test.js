import { expect } from '@jest/globals'
import reverse from '../src/reverseInteger'

test('reverse 0,target 0', () => {
  const x = 0
  const NumReverse = 0
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse 1,target 1', () => {
  const x = 1
  const NumReverse = 1
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse -1,target -1', () => {
  const x = -1
  const NumReverse = -1
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse 12,target 21', () => {
  const x = 12
  const NumReverse = 21
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse 123,target 321', () => {
  const x = 123
  const NumReverse = 321
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse -123,target -321', () => {
  const x = -123
  const NumReverse = -321
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse 120,target 21', () => {
  const x = 120
  const NumReverse = 21
  expect(reverse(x)).toEqual(NumReverse)
})

test('reverse -2^31, target 0', () => {
  const x = -Math.pow(2, 31)
  const NumReverse = 0
  expect(reverse(x)).toEqual(NumReverse)
})
