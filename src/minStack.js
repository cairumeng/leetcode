/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push({ val: val, min: val })
    return
  }
  var min = this.top().min
  min = Math.min(min, val)
  this.stack = this.stack.push({ val: val, min: min })
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.top().min
}
