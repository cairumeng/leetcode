import { expect } from '@jest/globals'
import plusOne from '../src/plusOne'

test('digits = [1,2,3], target=[1,2,4] ', () => {
  const digits = [1, 2, 3]
  const target = [1, 2, 4]
  expect(plusOne(digits)).toEqual(target)
})

test('digits = [4,3,2,1], target=[4,3,2,2] ', () => {
  const digits = [4, 3, 2, 1]
  const target = [4, 3, 2, 2]
  expect(plusOne(digits)).toEqual(target)
})

test('digits = [0], target=[1] ', () => {
  const digits = [0]
  const target = [1]
  expect(plusOne(digits)).toEqual(target)
})

test('digits = [1,0,9], target=[1,1,0] ', () => {
  const digits = [1, 0, 9]
  const target = [1, 1, 0]
  expect(plusOne(digits)).toEqual(target)
})

test('digits = [9,9,9], target=[1,0,0,0] ', () => {
  const digits = [9, 9, 9]
  const target = [1, 0, 0, 0]
  expect(plusOne(digits)).toEqual(target)
})
