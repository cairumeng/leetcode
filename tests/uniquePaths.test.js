import { expect } from '@jest/globals'
import uniquePaths from '../src/uniquePaths'

test('m=3,n=2', () => {
  const m = 3
  const n = 2
  const output = 3
  expect(uniquePaths(m, n)).toEqual(output)
})

test('m=3,n=7', () => {
  const m = 3
  const n = 7
  const output = 28
  expect(uniquePaths(m, n)).toEqual(output)
})
test('m=7,n=3', () => {
  const m = 3
  const n = 7
  const output = 28
  expect(uniquePaths(m, n)).toEqual(output)
})

test('m=3,n=3', () => {
  const m = 3
  const n = 3
  const output = 6
  expect(uniquePaths(m, n)).toEqual(output)
})
test('m=4,n=7', () => {
  const m = 4
  const n = 7
  const output = 84
  expect(uniquePaths(m, n)).toEqual(output)
})

test('m=1,n=2', () => {
  const m = 1
  const n = 2
  const output = 1
  expect(uniquePaths(m, n)).toEqual(output)
})
test('m=1,n=1', () => {
  const m = 1
  const n = 1
  const output = 1
  expect(uniquePaths(m, n)).toEqual(output)
})
