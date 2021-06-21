import { expect } from '@jest/globals'
import rotateRight from '../src/rotateList'

function arr2List(arr) {
  return arr.reduceRight((prev, current) => {
    return {
      val: current,
      next: prev,
    }
  }, null)
}

test(' head = [1,2,3,4,5], k = 2', () => {
  const head = arr2List([1, 2, 3, 4, 5])
  const k = 2
  const output = arr2List([4, 5, 1, 2, 3])
  expect(rotateRight(head, k)).toEqual(output)
})

test(' head = [0,1,2], k = 4', () => {
  const head = arr2List([0, 1, 2])
  const k = 4
  const output = arr2List([2, 0, 1])
  expect(rotateRight(head, k)).toEqual(output)
})

test(' head = [], k = 4', () => {
  const head = arr2List([])
  const k = 4
  const output = arr2List([])
  expect(rotateRight(head, k)).toEqual(output)
})

test(' head = [1], k = 4', () => {
  const head = arr2List([1])
  const k = 4
  const output = arr2List([1])
  expect(rotateRight(head, k)).toEqual(output)
})

test(' head = [1,2], k = 4', () => {
  const head = arr2List([1, 2])
  const k = 4
  const output = arr2List([1, 2])
  expect(rotateRight(head, k)).toEqual(output)
})
