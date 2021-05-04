var addDigits = function (num) {
  if (num < 10) return num
  var sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return addDigits(sum)
}

export default addDigits
