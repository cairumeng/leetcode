import { expect } from '@jest/globals'
import invertTree from '../src/invertBinaryTree'

test(' invertTree', () => {
  const root = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null },
    },
  }

  const output = {
    val: 4,
    left: {
      val: 7,
      left: { val: 9, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
  }

  expect(invertTree(root)).toEqual(output)
})

test(' invertTree', () => {
  const root = {
    val: 2,
    left: { val: 1 },
    right: { val: 3 },
  }

  const output = {
    val: 2,
    left: { val: 3 },
    right: { val: 1 },
  }

  expect(invertTree(root)).toEqual(output)
})

test(' invertTree', () => {
  const root = {}

  const output = {}

  expect(invertTree(root)).toEqual(output)
})

test(' invertTree', () => {
  const root = { val: 1, left: { val: 2 }, right: null }

  const output = { val: 1, left: null, right: { val: 2 } }

  expect(invertTree(root)).toEqual(output)
})
