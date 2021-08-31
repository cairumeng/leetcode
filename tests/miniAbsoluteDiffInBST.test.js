import { expect } from '@jest/globals'
import getMinimumDifference from '../src/miniAbsoluteDiffInBST'

test(' root1', () => {
  const root = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  }

  expect(getMinimumDifference(root)).toEqual(1)
})

test(' root2', () => {
  const root = {
    val: 1,
    left: { val: 0, left: null, right: null },
    right: {
      val: 48,
      left: { val: 12, left: null, right: null },
      right: { val: 49, left: null, right: null },
    },
  }

  expect(getMinimumDifference(root)).toEqual(1)
})
