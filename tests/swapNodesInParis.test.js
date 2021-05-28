import { expect } from '@jest/globals'
import swapPairs from '../src/swapNodesInPairs'

test('head=[]', () => {
  const head = {}
  const output = {}
  expect(swapPairs(head)).toEqual(output)
})

test('head=[1]', () => {
  const head = { val: 1 }
  const output = { val: 1 }
  expect(swapPairs(head)).toEqual(output)
})

test('head=[1,2]', () => {
  const head = { val: 1, next: { val: 2, next: null } }
  const output = { val: 2, next: { val: 1, next: null } }
  expect(swapPairs(head)).toEqual(output)
})

test('head=[1,2,3]', () => {
  const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } }
  const output = { val: 2, next: { val: 1, next: { val: 3, next: null } } }
  expect(swapPairs(head)).toEqual(output)
})
test('head=[1,2,3,4]', () => {
  const head = {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
  }
  const output = {
    val: 2,
    next: { val: 1, next: { val: 4, next: { val: 3, next: null } } },
  }
  console.log(swapPairs(head))
  expect(swapPairs(head)).toEqual(output)
})
