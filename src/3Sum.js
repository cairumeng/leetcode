var includes = function (arr, output) {
  var arrI
  for (var i = 0; i < output.length; i++) {
    arrI = output[i]
    if (arr.sort().toString() == arrI.sort().toString()) return true
  }
  return false
}

var threeSum = function (nums) {
  var i, j, k
  var output = []
  if (nums.length < 3) return output
  var newArr = []
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] == null) break
      if (nums[j] !== null) {
        k = nums.indexOf(0 - nums[i] - nums[j], j + 1)
        newArr = [nums[i], nums[j], nums[k]]
        if (k > 0 && !includes(newArr, output)) output.push(newArr)
      }
    }
  }
  return output
}

var threeSum2 = function (nums) {
  var output = []
  if (nums.length < 3) return output
  nums = nums.sort((a, b) => a - b)
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break

    if (i >= 1 && nums[i] == nums[i - 1]) {
      continue
    }
    var k
    for (var j = i + 1; j < nums.length; j++) {
      if (j !== i + 1 && nums[j] == nums[j - 1]) {
        continue
      }
      k = nums.indexOf(0 - nums[i] - nums[j], j + 1)
      if (k > 0) output.push([nums[i], nums[j], nums[k]])
    }
  }
  return output
}
export default threeSum2
