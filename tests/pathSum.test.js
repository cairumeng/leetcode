import { expect } from '@jest/globals'
import hasPathSum from '../src/pathSum'

test(' root = [5,4,8,11,null,13,4,7,2,null,null,null,1], target= 22', () => {
  var root = {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: { val: 7, left: null, right: null },
        right: { val: 2, left: null, right: null },
      },
      right: null,
    },
    right: {
      val: 8,
      left: { val: 13, left: null, right: null },
      right: {
        val: 4,
        left: null,
        right: {
          val: 4,
          left: null,
          right: { val: 1, left: null, right: null },
        },
      },
    },
  }

  var targetSum = 22
  var output = true
  expect(hasPathSum(root, targetSum)).toEqual(output)
})

test(' root = [1,2], target= 1', () => {
  var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  }

  var targetSum = 1
  var output = false
  expect(hasPathSum(root, targetSum)).toEqual(output)
})

test(' root = [-2,null,-3], target= -5', () => {
  var root = {
    val: -2,
    left: null,
    right: {
      val: -3,
      left: null,
      right: null,
    },
  }

  var targetSum = -5
  var output = true
  expect(hasPathSum(root, targetSum)).toEqual(output)
})
