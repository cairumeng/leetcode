import { expect } from '@jest/globals'
import sumOfLeftLeaves from '../src/sumOfLeftLeaves'

test('root = [3,9,20,null,null,15,7]', () => {
  const root = {
    val: 3,
    left: { val: 9 },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } },
  }
  const output = 24
  expect(sumOfLeftLeaves(root)).toEqual(output)
})

test('root = [3,9,20,null,null,15,7]', () => {
  const root = {
    val: 3,
  }
  const output = 0
  expect(sumOfLeftLeaves(root)).toEqual(output)
})

test('root = [3,9,20,null,null,15,7]', () => {
  const root = {
    val: 3,
    left: { val: 9 },
  }
  const output = 9
  expect(sumOfLeftLeaves(root)).toEqual(output)
})

test('root = [3,9,20,null,null,15,7]', () => {
  const root = {
    val: 3,
    left: {
      val: 9,
      left: { val: 10 },
      right: { val: 2, left: { val: 10 }, right: { val: 11 } },
    },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } },
  }
  const output = 35
  expect(sumOfLeftLeaves(root)).toEqual(output)
})
