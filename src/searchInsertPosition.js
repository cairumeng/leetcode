var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      if (i === 0) {
        return 0
      } else {
        return i
      }
    }
  }
  return i
}

var searchInsert2 = function (nums, target) {
  for (var i = 0, j = nums.length - 1; i <= j; i++, j--) {
    if (target <= nums[i]) {
      return i
    }
    if (target > nums[j]) {
      return j + 1
    }
  }
  return i
}

export default searchInsert2
