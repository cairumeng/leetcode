import { expect } from '@jest/globals'
import countSegments from '../src/numberOfSegmentsInAstring'

test('s = "Hello, my name is John"', () => {
  const s = 'Hello, my name is John'
  const output = 5
  expect(countSegments(s)).toEqual(output)
})

test('s = "Hello"', () => {
  const s = 'Hello'
  const output = 1
  expect(countSegments(s)).toEqual(output)
})

test('s = love live! music forever', () => {
  const s = "love live! mu'sic forever"
  const output = 4
  expect(countSegments(s)).toEqual(output)
})

test('s =', () => {
  const s = ''
  const output = 0
  expect(countSegments(s)).toEqual(output)
})

test('s =', () => {
  const s = '                '
  const output = 0
  expect(countSegments(s)).toEqual(output)
})

test('s ="Of all the gin joints in all the towns in all the world,   "', () => {
  const s = 'Of all the gin joints in all the towns in all the world,   '
  const output = 13
  expect(countSegments(s)).toEqual(output)
})

test('", , , ,        a, eaefa"', () => {
  const s = ', , , ,        a, eaefa'
  const output = 6
  expect(countSegments(s)).toEqual(output)
})
