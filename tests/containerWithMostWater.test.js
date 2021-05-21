import { expect } from '@jest/globals'
import maxArea from '../src/containerWithMostWater'

test('height = [1,8,6,2,5,4,8,3,7]', () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  const output = 49
  expect(maxArea(height)).toEqual(output)
})

test('height = [4,3,2,1,4]', () => {
  const height = [4, 3, 2, 1, 4]
  const output = 16
  expect(maxArea(height)).toEqual(output)
})

test('height = [1,2,1]', () => {
  const height = [1, 2, 1]
  const output = 2
  expect(maxArea(height)).toEqual(output)
})

test('height = [1,1]', () => {
  const height = [1, 1]
  const output = 1
  expect(maxArea(height)).toEqual(output)
})
