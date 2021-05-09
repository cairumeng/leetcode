import { expect } from '@jest/globals'
import readBinaryWatch from '../src/binaryWatch'

test('turnedO=1', () => {
  const turnedOn = 1
  const output = [
    '0:01',
    '0:02',
    '0:04',
    '0:08',
    '0:16',
    '0:32',
    '1:00',
    '2:00',
    '4:00',
    '8:00',
  ]

  expect(readBinaryWatch(turnedOn)).toEqual(output)
})

test('turnedO= 9', () => {
  const turnedOn = 9
  const output = []

  expect(readBinaryWatch(turnedOn)).toEqual(output)
})
