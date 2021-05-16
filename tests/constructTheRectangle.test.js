import { expect } from '@jest/globals'
import constructRectangle from '../src/constructTheRectangle'

test('area = 4', () => {
  const area = 4
  const output = [2, 2]
  expect(constructRectangle(area)).toEqual(output)
})

test('area = 37', () => {
  const area = 37
  const output = [37, 1]
  expect(constructRectangle(area)).toEqual(output)
})

test('area = 122122', () => {
  const area = 122122
  const output = [427, 286]
  expect(constructRectangle(area)).toEqual(output)
})
