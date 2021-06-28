var sortColors = function (nums) {
  var lens = [0, 0, 0]
  for (var i = 0; i < nums.length; i++) lens[nums[i]]++
  var posi = 0
  for (var i = 0; i < lens.length; i++) {
    for (var j = posi; j < posi + lens[i]; j++) {
      nums[j] = i
    }
    posi += lens[i]
  }
  return nums
}
export default sortColors
