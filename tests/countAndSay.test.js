import { expect } from '@jest/globals'
import countAndSay from '../src/countAndSay'

test('n=4', () => {
  const n = 4
  const output = '1211'
  expect(countAndSay(n)).toEqual(output)
})
test('n=2', () => {
  const n = 2
  const output = '11'
  expect(countAndSay(n)).toEqual(output)
})
