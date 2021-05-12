var findDisappearedNumbers = function (nums) {
  var n = nums.length
  var result = []
  var num = 1
  nums.sort((a, b) => a - b)
  for (var i = 0; i < n; ) {
    if (nums[i] == num) {
      num++
      i++
    } else if (nums[i] > num) {
      result.push(num)
      num++
    } else {
      i++
    }
  }
  var lastNum = nums[nums.length - 1]
  if (lastNum !== n) {
    num = lastNum + 1
    while (num <= n) {
      result.push(num)
      num++
    }
  }
  return result
}

export default findDisappearedNumbers
