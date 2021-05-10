import { expect } from '@jest/globals'
import toHex from '../src/convertAnumberToHexadecimal'

// test('num=26', () => {
//   const nums = 26
//   const output = '1a'
//   expect(toHex(nums)).toEqual(output)
// })
test('num=-1', () => {
  const nums = -1
  const output = 'ffffffff'
  expect(toHex(nums)).toEqual(output)
})
