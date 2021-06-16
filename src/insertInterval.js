var merge = function (interval1, interval2) {
  return [
    Math.min(interval1[0], interval2[0]),
    Math.max(interval1[1], interval2[1]),
  ]
}
var insert = function (intervals, newInterval) {
  var result = []
  var foundMerge = 0
  for (var i = 0; i < intervals.length; i++) {
    if (foundMerge == 2) result.push(intervals[i])
    else {
      if (newInterval[1] < intervals[i][0]) {
        foundMerge = 2
        result.push(newInterval)
        result.push(intervals[i])
      } else if (newInterval[0] > intervals[i][1]) {
        if (foundMerge == 1) continue
        result.push(intervals[i])
      } else {
        if (foundMerge == 0) foundMerge = 1
        newInterval = merge(newInterval, intervals[i])
      }
    }
  }
  if (foundMerge !== 2) result.push(newInterval)
  return result
}
export default insert
