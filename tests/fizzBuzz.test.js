import { expect } from '@jest/globals'
import fizzBuzz from '../src/fizzBuzz'

test('n=3', () => {
  const n = 3
  const output = ['1', '2', 'Fizz']
  expect(fizzBuzz(n)).toEqual(output)
})

test('n=5', () => {
  const n = 5
  const output = ['1', '2', 'Fizz', '4', 'Buzz']
  expect(fizzBuzz(n)).toEqual(output)
})

test('n=15', () => {
  const n = 15
  const output = [
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
  ]
  expect(fizzBuzz(n)).toEqual(output)
})
