var containsDuplicate = function (nums) {
  var nums = nums.sort((a, b) => a - b)
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return true
  }
  return false
}
export default containsDuplicate
