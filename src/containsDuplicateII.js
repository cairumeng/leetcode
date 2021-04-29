// var containsNearbyDuplicate = function (nums, k) {
//   var arr = []
//   var j
//   for (var i = 0; i < nums.length; i++) {
//     j = arr.indexOf(nums[i])
//     if (j !== -1) {
//       if (i - j <= k) return true
//       arr[j] = null
//     }
//     arr.push(nums[i])
//   }
//   return false
// }

// var containsNearbyDuplicate = function (nums, k) {
//   if (k == 0) return false
//   for (var i = 0, j = 1; i < nums.length; ) {
//     if (nums[i] == nums[j]) return true
//     if (j - i < k && j < nums.length) {
//       j++
//     } else {
//       i++
//       j = i + 1
//     }
//   }
//   return false
// }

var containsNearbyDuplicate = function (nums, k) {
  let numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (numsMap.has(num) && i - numsMap.get(num) <= k) {
      return true
    } else {
      numsMap.set(num, i)
    }
  }
  return false
}

export default containsNearbyDuplicate
