import { expect } from '@jest/globals'
import binaryTreePaths from '../src/binaryTreePaths'

test('root = [1,2,3,null,5]', () => {
  const root = {
    val: 1,
    left: { val: 2, left: null, right: { val: 5 } },
    right: { val: 3 },
  }
  const output = ['1->2->5', '1->3']

  console.log(binaryTreePaths(root))
  expect(binaryTreePaths(root)).toEqual(output)
})

test('root = [1]', () => {
  const root = {
    val: 1,
  }
  const output = ['1']

  expect(binaryTreePaths(root)).toEqual(output)
})

test('root = [1,2,3,5,6]', () => {
  const root = {
    val: 1,
    left: { val: 2, left: { val: 5 }, right: { val: 6 } },
    right: { val: 3 },
  }
  const output = ['1->2->5', '1->2->6', '1->3']

  expect(binaryTreePaths(root)).toEqual(output)
})
