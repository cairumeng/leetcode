var arr2obj = function (arr) {
  var obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  return obj
}
var intersect = function (nums1, nums2) {
  var obj1 = arr2obj(nums1)
  var intersection = []
  for (var j = 0; j < nums2.length; j++) {
    if (obj1[nums2[j]] && obj1[nums2[j]] > 0) {
      intersection.push(nums2[j])
      obj1[nums2[j]]--
    }
  }
  return intersection
}
export default intersect
