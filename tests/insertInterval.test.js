import { expect } from '@jest/globals'
import insert from '../src/insertInterval'

test('intervals = [[1,3],[6,9]]', () => {
  const intervals = [
    [1, 3],
    [6, 9],
  ]
  const newInterval = [2, 5]
  const output = [
    [1, 5],
    [6, 9],
  ]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]', () => {
  const intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ]
  const newInterval = [4, 8]
  const output = [
    [1, 2],
    [3, 10],
    [12, 16],
  ]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = []', () => {
  const intervals = []
  const newInterval = [5, 7]
  const output = [[5, 7]]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[1,5]]', () => {
  const intervals = [[1, 5]]
  const newInterval = [2, 3]
  const output = [[1, 5]]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[1,5]]', () => {
  const intervals = [[1, 5]]
  const newInterval = [2, 7]
  const output = [[1, 7]]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[1,5]]', () => {
  const intervals = [[1, 5]]
  const newInterval = [6, 7]
  const output = [
    [1, 5],
    [6, 7],
  ]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[1,5]]', () => {
  const intervals = [[3, 5]]
  const newInterval = [1, 2]
  const output = [
    [1, 2],
    [3, 5],
  ]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[2,5],[6,7],[8,9]]', () => {
  const intervals = [
    [2, 5],
    [6, 7],
    [8, 9],
  ]
  const newInterval = [0, 1]
  const output = [
    [0, 1],
    [2, 5],
    [6, 7],
    [8, 9],
  ]
  expect(insert(intervals, newInterval)).toEqual(output)
})

test('intervals = [[2,4],[5,7],[8,10],[11,13]]', () => {
  const intervals = [
    [2, 4],
    [5, 7],
    [8, 10],
    [11, 13],
  ]
  const newInterval = [3, 6]
  const output = [
    [2, 7],
    [8, 10],
    [11, 13],
  ]
  expect(insert(intervals, newInterval)).toEqual(output)
})
