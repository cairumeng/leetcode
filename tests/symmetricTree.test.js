import { expect } from '@jest/globals'
import isSymmetric from '../src/symmetricTree'

test(' root = [1,2,2,3,4,4,3], target= true', () => {
  var root = {
    val: 1,
    left: {
      val: 2,
      left: 3,
      right: 4,
    },
    right: {
      val: 2,
      left: 4,
      right: 3,
    },
  }

  var target = true
  expect(isSymmetric(root)).toEqual(target)
})

test(' root = [1,2,2,null,3,null,3], target= false', () => {
  var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: 3,
    },
    right: {
      val: 2,
      left: null,
      right: 3,
    },
  }

  var target = false
  expect(isSymmetric(root)).toEqual(target)
})
