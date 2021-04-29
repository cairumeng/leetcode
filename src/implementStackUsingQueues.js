/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.q1 = []
  this.q2 = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  var element
  while ((element = this.q1.shift())) {
    if (this.q1.length == 0) {
      var temp = this.q1
      this.q1 = this.q2
      this.q2 = temp
      return element
    }
    this.q2.push(element)
  }
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  var element
  while ((element = this.q1.shift())) {
    this.q2.push(element)
    if (this.q1.length == 0) {
      var temp = this.q1
      this.q1 = this.q2
      this.q2 = temp
      return element
    }
  }
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length == 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export default MyStack
