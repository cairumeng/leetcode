/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var length = nums.length
  var i = 0

  while (i <= length - 1) {
    var j = i + 1
    while (j <= length - 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      } else {
        j++
      }
    }
    i++
  }
}

var twoSum2 = function (nums, target) {
  var sortedNums = [].concat(nums).sort(function (a, b) {
    return a - b
  })
  var length = nums.length
  var i = 0
  var j = length - 1

  while (i <= length - 1 && j > i) {
    var sum = sortedNums[i] + sortedNums[j]
    if (sum === target) {
      return [nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[j])]
    } else if (sum > target) {
      j--
    } else {
      i++
    }
  }
}

export default twoSum2
