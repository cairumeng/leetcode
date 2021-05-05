var isPowerOfFour = function (n) {
  if (n == 0) return false
  if (n == 1) return true
  while (n % 4 == 0) {
    n = n >> 2
    if (n == 1) return true
  }
  return false
}

export default isPowerOfFour
