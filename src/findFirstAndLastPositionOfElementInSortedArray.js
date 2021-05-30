var searchRange = function (nums, target) {
  var left = 0
  var right = nums.length - 1
  var start = nums.length - 1
  var end = 0
  var found = false

  var setStartEnd = function (index) {
    if (index < start) start = index
    if (index > end) end = index
    found = true
  }
  var binarySearch = function (left, right) {
    while (right >= left) {
      if (left == right) {
        if (nums[right] == target) {
          setStartEnd(right)
        }
        return
      }
      if (right - left == 1) {
        if (nums[left] == target) setStartEnd(left)
        if (nums[right] == target) setStartEnd(right)
        return
      }
      var mid = Math.floor((left + right) / 2)
      if (nums[mid] < target) left = mid + 1
      else if (nums[mid] > target) right = mid - 1
      else {
        setStartEnd(mid)
        binarySearch(left, mid - 1)
        binarySearch(mid + 1, right)
        return
      }
    }
  }

  binarySearch(left, right)
  if (!found) {
    return [-1, -1]
  }
  return [start, end]
}
export default searchRange
