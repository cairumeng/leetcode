import { expect } from '@jest/globals'
import isSameTree from '../src/sameTree'

test(' III,target 3', () => {
  const p = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  }
  const q = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  }
  expect(isSameTree(p, q)).toEqual(true)
})

test(' III,target 3', () => {
  const p = {
    val: 1,
    left: { val: 2 },
  }
  const q = {
    val: 1,
    left: null,
    right: { val: 2 },
  }
  expect(isSameTree(p, q)).toEqual(true)
})

test(' III,target 3', () => {
  var p
  var q
  expect(isSameTree(p, q)).toEqual(true)
})

test(' III,target 3', () => {
  const p = {
    val: 1,
    left: { val: 2 },
    right: { val: 3, right: { val: 4 } },
  }
  const q = {
    val: 1,
    left: { val: 3, left: { val: 4 } },
    right: { val: 2 },
  }
  expect(isSameTree(p, q)).toEqual(true)
})
