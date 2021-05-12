var minMoves = function (nums) {
  var min = Math.min(...nums)
  var max = Math.max(...nums)
  var count = 0
  while (min !== max) {
    var i = 0
    var findMax = false
    while (i < nums.length) {
      if (nums[i] !== max || findMax == true) {
        nums[i]++
      } else {
        findMax = true
      }
      i++
    }
    count++
    min = Math.min(...nums)
    max = Math.max(...nums)
  }

  return count
}

var minMoves2 = function (nums) {
  return (
    nums.reduce((sum, current) => sum + current, 0) -
    Math.min(...nums) * nums.length
  )
}
export default minMoves2
