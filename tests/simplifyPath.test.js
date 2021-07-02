import { expect } from '@jest/globals'
import simplifyPath from '../src/simplifyPath'

test('path = "/home/"', () => {
  const path = '/home/'
  const output = '/home'
  expect(simplifyPath(path)).toEqual(output)
})

test('path = "/../"', () => {
  const path = '/../'
  const output = '/'
  expect(simplifyPath(path)).toEqual(output)
})

test('path = "/home//foo/"', () => {
  const path = '/home//foo/'
  const output = '/home/foo'
  expect(simplifyPath(path)).toEqual(output)
})

test('path = "/a/./b/../../c/"', () => {
  const path = '/a/./b/../../c/'
  const output = '/c'
  expect(simplifyPath(path)).toEqual(output)
})
