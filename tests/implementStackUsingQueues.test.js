import { expect } from '@jest/globals'
import MyStack from '../src/implementStackUsingQueues'

test('queque,stack', () => {
  var obj = new MyStack()
  obj.push(1)
  obj.push(2)
  expect(obj.q1).toEqual([1, 2])
  var output = obj.pop()
  expect(output).toEqual(2)
  expect(obj.q1).toEqual([1])
  expect(obj.q2).toEqual([])
  obj.push(3)
  expect(obj.q1).toEqual([1, 3])
  output = obj.top()
  expect(output).toEqual(3)
  expect(obj.q1).toEqual([1, 3])
  output = obj.pop()
  expect(output).toEqual(3)
  expect(obj.q1).toEqual([1])
  expect(obj.empty()).toEqual(false)
  obj.pop()
  expect(obj.empty()).toEqual(true)
})
