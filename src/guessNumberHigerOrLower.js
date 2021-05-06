var guess = function (i) {
  if (i == 1) return 0
  if (1 < i) return -1
  if (1 > i) return 1
}

var guessNumber = function (n) {
  var start = 1
  while (start <= n) {
    var mid = Math.floor((n + start) / 2)

    var guessResult = guess(mid)
    if (guessResult === 0) return mid
    else if (guessResult == -1) n = mid - 1
    else start = mid + 1
  }
}

export default guessNumber
