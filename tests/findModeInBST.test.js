import { expect } from '@jest/globals'
import findMode from '../src/findModeInBST'

test('root = [1,null,2,2]', () => {
  const root = {
    val: 1,
    left: null,
    right: { val: 2, left: { val: 2 }, right: null },
  }
  const output = [2]
  expect(findMode(root)).toEqual(output)
})
test('root = [0]', () => {
  const root = {
    val: 0,
  }
  const output = [0]
  expect(findMode(root)).toEqual(output)
})

test('root = [2,1,2]', () => {
  const root = {
    val: 2,
    left: { val: 1 },
    right: { val: 2 },
  }
  const output = [2]
  expect(findMode(root)).toEqual(output)
})
