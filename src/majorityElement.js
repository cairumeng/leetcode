var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b)
  return nums[[parseInt(nums.length / 2)]]
}

var majorityElement2 = function (nums) {
  var majo = nums[0]
  var count = 1
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === majo) {
      count++
    } else {
      if (count > 0) {
        count--
      } else {
        majo = nums[i]
        count = 0
      }
    }
  }
  return majo
}
export default majorityElement2
