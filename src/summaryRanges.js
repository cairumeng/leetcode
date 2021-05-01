var summaryRanges = function (nums) {
  if (nums.length == 0) return []
  var range = null
  var count = 0
  var ranges = []
  for (var i = 0; i < nums.length; i++) {
    count++
    if (!range) range = nums[i].toString()
    if (i == nums.length - 1 || nums[i + 1] - nums[i] !== 1) {
      if (count > 1) range = range + '->' + nums[i]
      ranges.push(range)
      range = null
      count = 0
    }
  }

  return ranges
}

export default summaryRanges
