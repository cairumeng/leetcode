var fizzBuzz = function (n) {
  var result = []
  for (var i = 1; i <= n; i++) {
    if (i % 3 !== 0 || i % 5 !== 0) {
      result[i - 1] = i.toString()
      if (i % 3 == 0) {
        result[i - 1] = 'Fizz'
      }
      if (i % 5 == 0) {
        result[i - 1] = 'Buzz'
      }
    } else {
      result[i - 1] = 'FizzBuzz'
    }
  }
  return result
}

export default fizzBuzz
