import { expect } from '@jest/globals'
import deleteDuplicates from '../src/removeDuplicatesFromSortedList'

function arr2List(arr) {
  return arr.reduceRight((prev, current) => {
    return {
      val: current,
      next: prev,
    }
  }, null)
}

test('arr1 = [1,1,2], arr2= [1,2]', () => {
  var head = arr2List([1, 1, 2])
  var target = arr2List([1, 2])
  expect(deleteDuplicates(head)).toEqual(target)
})

test('arr1 = [1,1,2,3,3], arr2= [1,2,3]', () => {
  var head = arr2List([1, 1, 2, 3, 3])
  var target = arr2List([1, 2, 3])
  expect(deleteDuplicates(head)).toEqual(target)
})

test('arr1 = [], arr2= []', () => {
  var head = arr2List([])
  var target = arr2List([])
  expect(deleteDuplicates(head)).toEqual(target)
})

test('arr1 = [1], arr2= [1]', () => {
  var head = arr2List([1])
  var target = arr2List([1])
  expect(deleteDuplicates(head)).toEqual(target)
})
