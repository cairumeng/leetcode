var findMaxConsecutiveOnes = function (nums) {
  var str = nums.join('')
  var arr = str.split(0)
  var maxOnes = 0
  for (var i = 0; i < arr.length; i++) {
    maxOnes = Math.max(maxOnes, arr[i].length)
  }
  return maxOnes
}
export default findMaxConsecutiveOnes
