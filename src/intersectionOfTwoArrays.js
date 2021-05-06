var intersection = function (nums1, nums2) {
  var map = new Map()
  var result = []
  for (var i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i], false)
    }
  }
  for (var j = 0; j < nums2.length; j++) {
    if (map.has(nums2[j]) && !map.get(nums2[j])) {
      result.push(nums2[j])
      map.set(nums2[j], true)
    }
  }
  return result
}

var intersection2 = function (nums1, nums2) {
  var map = {}
  var result = []
  for (var i = 0; i < nums1.length; i++) {
    map[nums1[i]] = false
  }
  for (var j = 0; j < nums2.length; j++) {
    if (map[nums2[j]] != undefined && !map[nums2[j]]) {
      result.push(nums2[j])
      map[nums2[j]] = true
    }
  }
  return result
}
export default intersection2
