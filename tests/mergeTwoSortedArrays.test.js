import { expect } from '@jest/globals'
import merge from '../src/mergeTwoSortedArrays'

test(' target =  [1,1,2,3,4,4]', () => {
  const nums1 = [1, 2, 4, 0, 0, 0]
  const nums2 = [1, 3, 4]
  const m = 3
  const n = 3

  const target = [1, 1, 2, 3, 4, 4]

  expect(merge(nums1, m, nums2, n)).toEqual(target)
})

test(' target =  [0]', () => {
  const nums1 = [0, 0]
  const nums2 = [1]
  const m = 1
  const n = 1
  const target = [0, 1]

  expect(merge(nums1, m, nums2, n)).toEqual(target)
})

test(' target =  [0]', () => {
  const nums1 = [0]
  const nums2 = [0]
  const m = 0
  const n = 1
  const target = [0]
  expect(merge(nums1, m, nums2, n)).toEqual(target)
})

test(' target =  [0]', () => {
  const nums1 = [0]
  const nums2 = [1]
  const m = 0
  const n = 1
  const target = [1]
  expect(merge(nums1, m, nums2, n)).toEqual(target)
})

test(' target =  [0]', () => {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const nums2 = [2, 5, 6]
  const m = 3
  const n = 3
  const target = [1, 2, 2, 3, 5, 6]
  expect(merge(nums1, m, nums2, n)).toEqual(target)
})
