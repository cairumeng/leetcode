import { expect } from '@jest/globals'
import searchMatrix from '../src/searchA2DMatrix'

test(' matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 3
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 5
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]],target = 13', () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 13
  const output = false
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,3,5,7,9],[10,11,16,20,21],[23,30,34,60,61]],target = 34', () => {
  const matrix = [
    [1, 3, 5, 7, 9],
    [10, 11, 16, 20, 21],
    [23, 30, 34, 60, 61],
  ]
  const target = 34
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,3,5,7,9],[10,11,16,20,21],[23,30,34,60,61]],target = 61', () => {
  const matrix = [
    [1, 3, 5, 7, 9],
    [10, 11, 16, 20, 21],
    [23, 30, 34, 60, 61],
  ]
  const target = 61
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,3,5,7,9],[10,11,16,20,21],[23,30,34,60,61]],target = 61', () => {
  const matrix = [
    [1, 3, 5, 7, 9],
    [10, 11, 16, 20, 21],
    [23, 30, 34, 60, 61],
  ]
  const target = 63
  const output = false
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,3,5,7,9],[10,11,16,20,21],[23,30,34,60,61]],target = 61', () => {
  const matrix = [
    [1, 3, 5, 7, 9],
    [10, 11, 16, 20, 21],
    [23, 30, 34, 60, 61],
  ]
  const target = 22
  const output = false
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1]],target = 1', () => {
  const matrix = [[1]]
  const target = 1
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1,2]],target = 2', () => {
  const matrix = [[1, 2]]
  const target = 2
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})

test(' matrix = [[1],[2]],target = 2', () => {
  const matrix = [[1], [2]]
  const target = 2
  const output = true
  expect(searchMatrix(matrix, target)).toEqual(output)
})
