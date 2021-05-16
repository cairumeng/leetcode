var rotate = function (nums, k) {
  k = k % nums.length
  while (k--) {
    nums.unshift(nums.pop())
  }
}

var rotate2 = function (nums, k) {
  k = k % nums.length
  let array = []
  for (let i = nums.length - k; i < nums.length; i++) {
    array[i - (nums.length - k)] = nums[i]
  }
  for (let i = nums.length - 1; i >= k; i--) {
    nums[i] = nums[i - k]
  }
  for (let i = 0; i < k; i++) {
    nums[i] = array[i]
  }
}

var rotate3 = function (nums, k) {
  k %= nums.length

  var reverse = function (l, r) {
    while (r > l) {
      var tmp = nums[r]
      nums[r] = nums[l]
      nums[l] = tmp
      l++
      r--
    }
  }

  reverse(0, nums.length - k - 1)
  reverse(nums.length - k, nums.length - 1)
  reverse(0, nums.length - 1)
}

export default rotate3
