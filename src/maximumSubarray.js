var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]
  var lastSum = nums[0]
  var maxSum = nums[0]
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      lastSum = lastSum < 0 ? nums[i] : lastSum + nums[i]

      if (lastSum > maxSum) {
        maxSum = lastSum
      }
    } else {
      lastSum += nums[i]

      if (nums[i] > maxSum) {
        maxSum = nums[i]
      }
    }
  }

  return maxSum
}

export default maxSubArray
