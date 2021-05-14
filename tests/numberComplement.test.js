import { expect } from '@jest/globals'
import findComplement from '../src/numberComplement'

test('num=5', () => {
  const num = 5
  const output = 2
  expect(findComplement(num)).toEqual(output)
})

test('num=1', () => {
  const num = 1
  const output = 0
  expect(findComplement(num)).toEqual(output)
})
