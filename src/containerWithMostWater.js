var maxArea = function (height) {
  var maxArea = 0
  var area = 0
  for (var i = 0; i < height.length; i++) {
    for (var j = 0; j < height.length; j++) {
      if (i !== j && height[i] <= height[j]) {
        area = height[i] * Math.abs(j - i)
        maxArea = Math.max(maxArea, area)
      }
    }
  }
  return maxArea
}

var maxArea2 = function (height) {
  var maxArea = 0
  var area = 0
  var start = height.length - 1
  var diff = -1
  var mid = (height.length - 1) / 2
  var end = 0
  for (var i = 0; i < height.length; i++) {
    if (i > mid) {
      start = 0
      diff = 1
      end = height.length - 1
    }
    for (var j = start; i > mid ? j <= end : j >= end; j += diff) {
      if (i !== j && height[i] <= height[j]) {
        area = height[i] * Math.abs(j - i)
        maxArea = Math.max(maxArea, area)
        if (i !== mid) break
      }
    }
  }
  return maxArea
}
