var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  var i = 0
  var j = i + 1
  var count = 0
  while (j <= nums.length) {
    if (nums[j] && nums[j] === nums[i]) {
      count++
      j++
    } else {
      nums.splice(i + 1, count)
      count = 0
      i++
      j = i + 1
    }
  }
  return nums.length
}

var removeDuplicates2 = function (nums) {
  var j = 0
  for (var i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      continue
    }
    nums[j++] = nums[i]
  }
  return j
}

export default removeDuplicates2
