var removeElement = function (nums, val) {
  var count = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = 0
      count++
    }
  }
  nums.sort((a, b) => b - a)
  return nums.length - count
}

var removeElement2 = function (nums, val) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
}

export default removeElement
