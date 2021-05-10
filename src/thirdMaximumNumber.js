var thirdMax = function (nums) {
  nums.sort((a, b) => b - a)
  var count = 1
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      count++
    }
    if (count == 3) {
      return nums[i]
    }
  }
  return nums[0]
}
export default thirdMax
