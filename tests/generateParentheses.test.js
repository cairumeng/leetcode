import { expect } from '@jest/globals'
import generateParenthesis from '../src/generateParentheses'

test('n=3', () => {
  const n = 3
  const output = ['((()))', '(()())', '(())()', '()(())', '()()()']
  expect(generateParenthesis(n).sort()).toEqual(output.sort())
})

test('n=1', () => {
  const n = 1
  const output = ['()']
  expect(generateParenthesis(n).sort()).toEqual(output.sort())
})

test('n=4', () => {
  const n = 4
  const output = [
    '(((())))',
    '((()()))',
    '((())())',
    '((()))()',
    '(()(()))',
    '(()()())',
    '(()())()',
    '(())(())',
    '(())()()',
    '()((()))',
    '()(()())',
    '()(())()',
    '()()(())',
    '()()()()',
  ]
  expect(generateParenthesis(n).sort()).toEqual(output.sort())
})
