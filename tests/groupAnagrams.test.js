import { expect } from '@jest/globals'
import groupAnagrams from '../src/groupAnagrams'

test('strs = ["eat","tea","tan","ate","nat","bat"]', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]

  expect(
    groupAnagrams(strs)
      .map((str) => str.sort())
      .sort()
  ).toEqual(output.map((item) => item.sort()).sort())
})
test('strs = [""]', () => {
  const strs = ['']
  const output = [['']]

  expect(
    groupAnagrams(strs)
      .map((str) => str.sort())
      .sort()
  ).toEqual(output.map((item) => item.sort()).sort())
})

test('strs = ["a"]', () => {
  const strs = ['a']
  const output = [['a']]

  expect(
    groupAnagrams(strs)
      .map((str) => str.sort())
      .sort()
  ).toEqual(output.map((item) => item.sort()).sort())
})

test('strs = ["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]', () => {
  const strs = ['hhhhu', 'tttti', 'tttit', 'hhhuh', 'hhuhh', 'tittt']
  const output = [
    ['tittt', 'tttit', 'tttti'],
    ['hhhhu', 'hhhuh', 'hhuhh'],
  ]

  expect(
    groupAnagrams(strs)
      .map((str) => str.sort())
      .sort()
  ).toEqual(output.map((item) => item.sort()).sort())
})

test('strs = ["eat","tea","tan","ate","nat","bat","ac","bd","aac","bbd","aacc","bbdd","acc","bdd"]', () => {
  const strs = [
    'eat',
    'tea',
    'tan',
    'ate',
    'nat',
    'bat',
    'ac',
    'bd',
    'aac',
    'bbd',
    'aacc',
    'bbdd',
    'acc',
    'bdd',
  ]
  const output = [
    ['bdd'],
    ['bat'],
    ['nat', 'tan'],
    ['ac'],
    ['ate', 'eat', 'tea'],
    ['bd'],
    ['aac'],
    ['bbd'],
    ['aacc'],
    ['bbdd'],
    ['acc'],
  ]

  expect(
    groupAnagrams(strs)
      .map((str) => str.sort())
      .sort()
  ).toEqual(output.map((item) => item.sort()).sort())
})
