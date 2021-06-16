var isOverlapping = function (arr1, arr2) {
  return !(
    (arr2[0] < arr1[0] && arr2[1] < arr1[0]) ||
    (arr2[0] > arr1[1] && arr2[1] > arr1[1])
  )
}
var merge = function (intervals) {
  var result = []
  var foundMerge = false
  var everMerge = false
  for (var i = 0; i < intervals.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (isOverlapping(intervals[i], result[j])) {
        var foundMerge = true
        var everMerge = true
        result[j][0] = Math.min(intervals[i][0], result[j][0])
        result[j][1] = Math.max(intervals[i][1], result[j][1])
        break
      }
    }
    if (!foundMerge) result.push(intervals[i])
    else foundMerge = false
  }
  if (everMerge) return merge(result)
  else return result
}

export default merge
