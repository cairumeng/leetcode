import { expect } from '@jest/globals'
import guessNumber from '../src/guessNumberHigerOrLower'

// test('n=10 ', () => {
//   const n = 10
//   const output = 6
//   expect(guessNumber(n)).toEqual(output)
// })

test('n=1 ', () => {
  const n = 1
  const output = 1
  expect(guessNumber(n)).toEqual(output)
})
