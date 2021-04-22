var merge = function (nums1, m, nums2, n) {
  for (var i = m, j = 0; i < m + n; ) {
    nums1[i++] = nums2[j++]
  }
  return nums1.sort((a, b) => a - b)
}

var merge2 = function (nums1, m, nums2, n) {
  for (var i = m - 1, j = n - 1, k = m + n - 1; k >= 0 && j >= 0; ) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i]
      i--
    } else {
      nums1[k--] = nums2[j]
      j--
    }
  }
  return nums1
}

export default merge2
