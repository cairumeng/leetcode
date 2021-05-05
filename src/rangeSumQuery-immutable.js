var NumArray = function (nums) {
  this.arr = nums
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  var sum = 0
  for (var i = left; i <= right; i++) {
    sum += this.arr[i]
  }
  return sum
}

export default NumArray
