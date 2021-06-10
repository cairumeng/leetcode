import { expect } from '@jest/globals'
import myPow from '../src/pow'

test(' x = 2.00000, n = 10 ', () => {
  const x = 2,
    n = 10
  const output = 1024
  expect(myPow(x.toFixed(5), n)).toEqual(output.toFixed(5))
})
test(' x = 2.00000, n = 10 ', () => {
  const x = 2.1,
    n = 3
  const output = 9.261
  expect(myPow(x.toFixed(5), n)).toEqual(output.toFixed(5))
})

test(' x = 2.00000, n = 10 ', () => {
  const x = 2,
    n = -2
  const output = 0.25
  expect(myPow(x.toFixed(5), n)).toEqual(output.toFixed(5))
})
