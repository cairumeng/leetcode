import { expect } from '@jest/globals'
import intersection from '../src/intersectionOfTwoArraysII'

test('nums1 = [1,2,2,1], nums2 = [2,2]', () => {
  const nums1 = [1, 2, 2, 1],
    nums2 = [2, 2]
  const output = [2, 2]
  expect(intersection(nums1, nums2)).toEqual(output)
})

test(' nums1 = [4,9,5], nums2 = [9,4,9,8,4]', () => {
  const nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
  const output = [9, 4]
  expect(intersection(nums1, nums2)).toEqual(output)
})
