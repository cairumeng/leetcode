var twoSum = function (numbers, target) {
  for (var i = 0; i < numbers.length && numbers[i] <= target; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
  return null
}

var twoSum2 = function (numbers, target) {
  for (var i = 0, j = numbers.length - 1; i <= j; ) {
    if (numbers[i] + numbers[j] == target) {
      return [i + 1, j + 1]
    } else if (numbers[i] + numbers[j] > target) {
      j--
    } else {
      i++
    }
  }
}

export default twoSum2
