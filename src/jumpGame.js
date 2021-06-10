var canJump = function (nums) {
  if (nums.length == 1) return true
  var farthestPoint = null
  var currentPoint = nums.length - 1

  while (currentPoint >= 1) {
    for (var i = currentPoint - 1; i >= 0; i--) {
      if (nums[i] == 0) continue
      if (currentPoint - i <= nums[i]) farthestPoint = i
    }
    if (!farthestPoint || farthestPoint == currentPoint) break
    currentPoint = farthestPoint
  }

  return farthestPoint == 0
}

export default canJump
