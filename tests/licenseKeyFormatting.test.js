import { expect } from '@jest/globals'
import licenseKeyFormatting from '../src/licenseKeyFormatting'

test('s = "s = "5F3Z-2e-9-w", k = 4 ', () => {
  const s = '5F3Z-2e-9-w',
    k = 4
  const output = '5F3Z-2E9W'
  expect(licenseKeyFormatting(s, k)).toEqual(output)
})

test(' s = "2-5g-3-J", k = 2 ', () => {
  const s = '2-5g-3-J',
    k = 2
  const output = '2-5G-3J'
  expect(licenseKeyFormatting(s, k)).toEqual(output)
})

test('--a-a-a-a--', () => {
  const s = '--a-a-a-a--',
    k = 2
  const output = 'AA-AA'
  expect(licenseKeyFormatting(s, k)).toEqual(output)
})
