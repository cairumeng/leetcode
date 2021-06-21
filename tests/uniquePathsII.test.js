import { expect } from '@jest/globals'
import uniquePathsWithObstacles from '../src/uniquePathsII'

test('obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]', () => {
  const obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  const output = 2
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[0,1],[0,0]]', () => {
  const obstacleGrid = [
    [0, 1],
    [0, 0],
  ]
  const output = 1
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[0,0,0],[0,1,0],[0,0,0],[0,0,0]]', () => {
  const obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  const output = 4
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[0,0,1,0]]', () => {
  const obstacleGrid = [[0, 0, 1, 0]]
  const output = 0
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[0,0,1,0]]', () => {
  const obstacleGrid = [[0], [0], [1], [0]]
  const output = 0
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[0]]', () => {
  const obstacleGrid = [[0]]
  const output = 1
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[0,0,0],[0,0,0],[0,0,0]]', () => {
  const obstacleGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  const output = 6
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})

test('obstacleGrid = [[1,0]]', () => {
  const obstacleGrid = [[1, 0]]
  const output = 0
  expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(output)
})
