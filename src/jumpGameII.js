// var jump = function (nums) {
//   var minStep = Infinity
//   var history = {}
//   var recursive = function (index, step) {
//     if (index == nums.length - 1) {
//       history[index] = step
//       minStep = Math.min(minStep, step)
//       return
//     }
//     for (var i = index + 1; i <= index + nums[index]; i++) {
//       if (nums[i] === 0) continue
//       if (history[i]) {
//         minStep = Math.min(minStep, step + history[i])
//         continue
//       }
//       recursive(i, step + 1)
//     }
//   }
//   recursive(0, 0)
//   return minStep
// }

var jump = function (nums) {
  var history = {}

  var recursive = function (index) {
    if (index == nums.length - 1) return 0

    var minStep = Infinity
    for (var i = index + 1; i <= index + nums[index]; i++) {
      if (i == nums.length - 1) return 1
      if (nums[i] === 0) continue

      if (!history[i]) {
        history[i] = recursive(i)
      }
      if (minStep > history[i]) minStep = history[i]
    }
    return minStep + 1
  }
  const reulst = recursive(0)

  return reulst
}

export default jump
