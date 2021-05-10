var toHex = function (num) {
  if (num == 0) return '0'
  if (num < 0) {
    num = 0xffffffff + num + 1
  }
  var result = ''
  var mod
  while (num > 0) {
    mod = num % 16
    if (mod >= 10) {
      mod = String.fromCharCode(mod - 10 + 'a'.charCodeAt())
    }
    result = mod + result
    num = Math.floor(num / 16)
  }
  return result
}

export default toHex
