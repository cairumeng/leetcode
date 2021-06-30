import { expect } from '@jest/globals'
import combine from '../src/combinations'

const sortArrays = (array) => array.map((a) => a.sort()).sort()

test('n=4,k=2', () => {
  const n = 4
  const k = 2
  const output = [
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
  ]

  expect(sortArrays(combine(n, k))).toEqual(sortArrays(output))
})

test('n=1,k=1', () => {
  const n = 1
  const k = 1
  const output = [[1]]

  expect(sortArrays(combine(n, k))).toEqual(sortArrays(output))
})

test('n=4,k=3', () => {
  const n = 4
  const k = 3
  const output = [
    [1, 2, 4],
    [1, 3, 4],
    [2, 3, 4],
    [1, 2, 3],
  ]

  expect(sortArrays(combine(n, k))).toEqual(sortArrays(output))
})

test('n=4,k=4', () => {
  const n = 4
  const k = 4
  const output = [[1, 2, 3, 4]]

  expect(sortArrays(combine(n, k))).toEqual(sortArrays(output))
})
