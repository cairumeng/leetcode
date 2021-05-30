var search = function (nums, target) {
  if (nums.length == 1) {
    if (nums[0] == target) return 0
    else return -1
  }

  if (nums.length == 2) {
    if (nums[0] == target) return 0
    else if (nums[1] == target) return 1
    else return -1
  }

  var start = 0
  var end = nums.length - 1

  while (start < end) {
    var mid = Math.floor((start + end) / 2)

    if (target == nums[start]) return start
    if (target < nums[start]) {
      if (target > nums[end]) return -1
      else if (target == nums[end]) return end
      start = mid + 1
    } else end = mid - 1

    if (end - start == 1) break
  }
  return -1
}
export default search
