var fourSum = function (nums, target) {
  var result = []
  var sum = 0
  if (nums.length < 4) return result
  nums = nums.sort((a, b) => a - b)
  for (var a = 0; a < nums.length - 3; a++) {
    if (a !== 0 && nums[a] == nums[a - 1]) continue
    for (var b = a + 1; b < nums.length - 2; b++) {
      if (b !== a + 1 && nums[b] == nums[b - 1]) continue
      for (var c = b + 1, d = nums.length - 1; c < d; ) {
        if (c !== b + 1 && nums[c] == nums[c - 1]) {
          c++
          continue
        }
        if (d !== nums.length - 1 && nums[d] == nums[d + 1]) {
          d--
          continue
        }
        sum = nums[a] + nums[b] + nums[c] + nums[d]

        if (sum == target) {
          result.push([nums[a], nums[b], nums[c], nums[d]])
          c++
        } else if (sum < target) c++
        else d--
      }
    }
  }
  return result
}

export default fourSum
