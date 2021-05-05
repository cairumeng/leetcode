// var moveZeroes = function (nums) {
//   var count = 0
//   for (var i = 0; i < nums.length; ) {
//     if (nums[i] == 0) {
//       nums.splice(i, 1)
//       count++
//     } else {
//       i++
//     }
//   }

//   for (var j = 1; j <= count; j++) {
//     nums.push(0)
//   }
//   return nums
// }

var moveZeroes2 = function (nums) {
  var nonZeroNumIndex = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[nonZeroNumIndex++] = nums[i]
  }

  for (var j = nonZeroNumIndex; j < nums.length; j++) {
    nums[j] = 0
  }
  return nums
}

export default moveZeroes2
