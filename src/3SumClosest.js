var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  var result = nums[0] + nums[1] + nums[nums.length - 1]
  for (var i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] == nums[i - 1]) continue
    var j = i + 1
    var k = nums.length - 1
    var sum = 0
    while (k > j) {
      sum = nums[i] + nums[j] + nums[k]
      if (sum == target) return sum
      else if (sum > target) k--
      else j++
      if (Math.abs(sum - target) < Math.abs(result - target)) result = sum
    }
  }
  return result
}

export default threeSumClosest
