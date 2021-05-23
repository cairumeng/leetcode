import { expect } from '@jest/globals'
import letterCombinations from '../src/letterCombinationsOfAphoneNumber'

test('digits = "23"', () => {
  const digits = '23'
  const output = ['ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf']
  expect(letterCombinations(digits)).toEqual(output)
})
test('digits = "234"', () => {
  const digits = '234'
  const output = [
    'adg',
    'adh',
    'adi',
    'aeg',
    'aeh',
    'aei',
    'afg',
    'afh',
    'afi',
    'bdg',
    'bdh',
    'bdi',
    'beg',
    'beh',
    'bei',
    'bfg',
    'bfh',
    'bfi',
    'cdg',
    'cdh',
    'cdi',
    'ceg',
    'ceh',
    'cei',
    'cfg',
    'cfh',
    'cfi',
  ].sort()
  expect(letterCombinations(digits).sort()).toEqual(output)
})
