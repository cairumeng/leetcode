var countBits = function (num) {
  var count = 0
  while (num > 0) {
    if ((num & 1) == 1) {
      count++
    }
    num = num >> 1
  }
  return count
}
var readBinaryWatch = function (turnedOn) {
  var result = []
  for (var i = 0; i <= 11; i++) {
    for (var j = 0; j <= 59; j++) {
      if (countBits(i) + countBits(j) == turnedOn)
        result.push(i + ':' + j.toString().padStart(2, '0'))
    }
  }
  return result
}

export default readBinaryWatch
