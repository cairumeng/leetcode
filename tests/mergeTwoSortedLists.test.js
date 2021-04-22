import { expect } from '@jest/globals'
import mergeTwoLists from '../src/mergeTwoSortedLists'

function arr2List(arr) {
  return arr.reduceRight((prev, current) => {
    return {
      val: current,
      next: prev,
    }
  }, null)
}

test(' target =  [1,1,2,3,4,4]', () => {
  const l1 = arr2List([1, 2, 4, 5, 6])
  const l2 = arr2List([1, 3, 4])
  const target = arr2List([1, 1, 2, 3, 4, 4, 5, 6])

  expect(mergeTwoLists(l1, l2)).toEqual(target)
})

test(' target =  [0]', () => {
  const l1 = arr2List([])
  const l2 = arr2List([0])
  const target = arr2List([0])

  expect(mergeTwoLists(l1, l2)).toEqual(target)
})

// test(' target =  [0]', () => {
//   const l1 = [-1]
//   const l2 = [0]
//   const target = [-1, 0]

//   expect(mergeTwoLists(l1, l2)).toEqual(target)
// })

// test(' target =  [0]', () => {
//   const l1 = [-3, -1, 0, 0]
//   const l2 = [0, 1, 2, 5]
//   const target = [-3, -1, 0, 0, 0, 1, 2, 5]

//   expect(mergeTwoLists(l1, l2)).toEqual(target)
// })

// test(' target =  [0]', () => {
//   const l1 = [1, 2, 4]
//   const l2 = [1, 3, 4]
//   const target = [1, 1, 2, 3, 4, 4]

//   expect(mergeTwoLists(l1, l2)).toEqual(target)
// })
