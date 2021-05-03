import { expect } from '@jest/globals'
import MyQueue from '../src/implementQueueUsingStacks'

test('queue ', () => {
  var myQueue = new MyQueue()
  myQueue.push(1)
  expect(myQueue.stack).toEqual([1])
  myQueue.push(2)
  expect(myQueue.stack).toEqual([1, 2])
  expect(myQueue.peek()).toEqual(1)
  myQueue.pop()
  expect(myQueue.stack).toEqual([2])
  expect(myQueue.empty()).toEqual(false)
})
