import { expect } from '@jest/globals'
import sortedArrayToBST from '../src/convertSortedArrayToBinarySearchTree'

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

test(' nums = [-10,-3,0,5,9]', () => {
  const nums = [-10, -3, 0, 5, 9]
  const target = new TreeNode(
    0,
    new TreeNode(-3, new TreeNode(-10)),
    new TreeNode(9, new TreeNode(5))
  )
  expect(sortedArrayToBST(nums)).toEqual(target)
})
