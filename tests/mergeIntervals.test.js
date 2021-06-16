import { expect } from '@jest/globals'
import merge from '../src/mergeInterval'

// test('intervals = [[1,3],[2,6],[8,10],[15,18]]', () => {
//   const intervals = [
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ]
//   const output = [
//     [1, 6],
//     [8, 10],
//     [15, 18],
//   ]

//   expect(merge(intervals)).toEqual(output)
// })

test('intervals = [[1,3],[2,6],[8,10],[15,18]]', () => {
  const intervals = [
    [8, 10],
    [2, 6],
    [1, 3],
    [15, 18],
  ]
  const output = [
    [1, 6],
    [8, 10],
    [15, 18],
  ]

  expect(merge(intervals)).toEqual(output)
})
