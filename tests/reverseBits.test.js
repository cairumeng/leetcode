import { expect } from '@jest/globals'
import reverseBits from '../src/reverseBits'

test('00000010100101000001111010011100', () => {
  const n = 43261596
  expect(reverseBits(n)).toEqual(964176192)
})
