var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]
  nums = nums.sort((a, b) => a - b)
  for (var i = 0; i < nums.length - 1; ) {
    if (nums[i] !== nums[i + 1]) return nums[i]
    i += 2
  }
  return nums[nums.length - 1]
}

var singleNumber2 = function (nums) {
  var singleNumber = nums[0]
  for (var i = 1; i < nums.length; i++) {
    singleNumber ^= nums[i]
  }
  return singleNumber
}

export default singleNumber2
